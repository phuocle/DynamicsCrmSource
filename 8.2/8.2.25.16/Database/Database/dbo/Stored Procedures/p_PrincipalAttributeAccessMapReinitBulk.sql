

-- this stored procedure 
--	1) reinits PrincipalAttributeAccessMap in bulk for principals: users or teams
--	2) for principal users reset sync subscriptions if @resetSyncSubscriptions is specified

create procedure dbo.p_PrincipalAttributeAccessMapReinitBulk(@principalUserIds EntityIdCollection readonly, @principalTeamIds EntityIdCollection readonly, @resetSyncSubscriptions bit) as
begin
set NOCOUNT on

-- Define and Set constants
declare @OtcPrincipalAttributeAccessMap int = 43 -- ObjectTypeCode 43

-- Schema of tables is trimmed PAAM table without VersionNumber, PrincipalAttributeAccessMapId 
create table #Old(
	PrincipalId uniqueidentifier NOT NULL,
	AttributeId uniqueidentifier NOT NULL,
	CreateAccess int NOT NULL,
	ReadAccess int NOT NULL,
	UpdateAccess int NOT NULL
	primary key clustered (PrincipalId ASC, AttributeId ASC)
	)

create table #New(
	PrincipalId uniqueidentifier NOT NULL,
	AttributeId uniqueidentifier NOT NULL,
	CreateAccess int NOT NULL,
	ReadAccess int NOT NULL,
	UpdateAccess int NOT NULL
	primary key clustered (PrincipalId ASC, AttributeId ASC)
)

-- Populate Old set: 2 usages except population 
insert into #Old(
		PrincipalId,
		AttributeId,
		CreateAccess,
		ReadAccess,
		UpdateAccess
	) 
select  
		PrincipalId,
		AttributeId,
		CreateAccess,
		ReadAccess,
		UpdateAccess
from PrincipalAttributeAccessMap where PrincipalId in
													(
														select id from @principalUserIds 
														union all
														select id from @principalTeamIds
													)

-- FieldSecurityProfileId associated with principals
create table #ProfileIds(FieldSecurityProfileId uniqueidentifier NOT NULL, PrincipalId uniqueidentifier NOT NULL primary key clustered(FieldSecurityProfileId ASC, PrincipalId ASC))

-- User can have multiple associations with Profile from SystemUserProfiles intersect table	
insert into #ProfileIds(FieldSecurityProfileId,PrincipalId)
	select sup.FieldSecurityProfileId, p.id from SystemUserProfiles sup 
	join @principalUserIds p on p.id = sup.SystemUserId
union	-- duplicate rows are removed by UNION
-- collect distinct profiles from team membership
	select distinct tp.FieldSecurityProfileId , p.id
	from TeamProfiles tp 
	join TeamMembership tm on tm.TeamId = tp.TeamId
	join SystemUser su on su.SystemUserId = tm.SystemUserId
	join @principalUserIds p on p.id = su.SystemUserId

-- Team can have multiple associations with Profile from TeamProfiles intersect entity
insert into #ProfileIds(FieldSecurityProfileId,PrincipalId)
	select tp.FieldSecurityProfileId, p.id from TeamProfiles tp 
	join @principalTeamIds p on p.id = tp.TeamId

-- Populate New set using collected ProfileIds and union (max) for each type of attribute access
insert into #New(
				PrincipalId,
				AttributeId,
				CreateAccess,
				ReadAccess,
				UpdateAccess
				)
	  select i.PrincipalId,
				a.AttributeId,
				max(fp.CanCreate),
				max(fp.CanRead),
				max(fp.CanUpdate)
		from FieldPermission fp
		join FieldSecurityProfile fsp on fsp.FieldSecurityProfileId = fp.FieldSecurityProfileId
		join #ProfileIds i on i.FieldSecurityProfileId = fsp.FieldSecurityProfileId
		join EntityView e on e.ObjectTypeCode = fp.EntityName
		join AttributeView a on a.EntityId = e.EntityId and a.LogicalName = fp.AttributeLogicalName
		group by a.AttributeId, i.PrincipalId

-- Insert added	  
insert PrincipalAttributeAccessMap (PrincipalId,
						AttributeId,
						CreateAccess,
						ReadAccess,
						UpdateAccess
					 )
	select  #New.PrincipalId, 
			#New.AttributeId,
			#New.CreateAccess,
			#New.ReadAccess,
			#New.UpdateAccess
		from #New
		join
		(
			select PrincipalId, AttributeId from #New 
			Except 
			select PrincipalId, AttributeId from #Old
		) as added
		on #New.PrincipalId = added.PrincipalId and #New.AttributeId = added.AttributeId

-- Update changed: Collect changed rows AttributeId first
create table #Ids (AttributeId uniqueidentifier NOT NULL, PrincipalId uniqueidentifier NOT NULL primary key clustered(AttributeId ASC, PrincipalId ASC))  -- attributeIds for changed access
insert into #Ids 
	select n.AttributeId, n.PrincipalId from #New n
	join #Old o on o.AttributeId = n.AttributeId and o.PrincipalId = n.PrincipalId
where n.CreateAccess <> o.CreateAccess or n.ReadAccess <> o.ReadAccess or n.UpdateAccess<>o.UpdateAccess 

update PrincipalAttributeAccessMap
	set CreateAccess = n.CreateAccess,
		ReadAccess = n.ReadAccess,
		UpdateAccess = n.UpdateAccess
from #New n 
	join #Ids i on i.AttributeId = n.AttributeId
		where PrincipalAttributeAccessMap.AttributeId = n.AttributeId
		and PrincipalAttributeAccessMap.PrincipalId = n.PrincipalId

-- Delete removed with tracking deleted for offline sync
delete PrincipalAttributeAccessMap 
		OUTPUT  DELETED.PrincipalAttributeAccessMapId, @OtcPrincipalAttributeAccessMap 
		into SubscriptionTrackingDeletedObject(ObjectId, ObjectTypeCode)
from PrincipalAttributeAccessMap paam
		join
		(
			select PrincipalId, AttributeId from #Old
			Except
			select PrincipalId, AttributeId from #New
		) as deletedPaam
		on paam.PrincipalId = deletedPaam.PrincipalId and paam.AttributeId = deletedPaam.AttributeId

--  for a principal user resets sync subscriptions
--  CRM SE 36838: Deadlocks when calling Associate request adding users to teams. Using READPAST
if (@resetSyncSubscriptions = 1) 
	begin
		update Subscription WITH (READPAST, READCOMMITTEDLOCK) set ReInitialize = 1
		where SystemUserId in (select id from @principalUserIds)
	end

--Cleanup
drop table #Old
drop table #New
drop table #Ids
drop table #ProfileIds

end
