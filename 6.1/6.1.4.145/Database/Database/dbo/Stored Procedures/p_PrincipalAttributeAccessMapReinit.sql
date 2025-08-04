

-- this stored procedure 
--	1) reinits PrincipalAttributeAccessMap for a principal (owner): user or team
--	2) for a principal user resets sync subscriptions if @resetSyncSubscriptions is specified

CREATE     procedure [dbo].[p_PrincipalAttributeAccessMapReinit](@principalId uniqueidentifier, @type int, @resetSyncSubscriptions bit) as
begin
SET NOCOUNT ON

-- Define and Set constants
declare @User int
declare @Team int
declare @OtcPrincipalAttributeAccessMap int

select @User = 8
select @Team = 9
select @OtcPrincipalAttributeAccessMap = 43 -- ObjectTypeCode 43

-- Use in memory tables because PrincipalAttributeAccessMap is only for secured attributes (~hundred)
-- Schema of tables is trimmed PAAM table without VersionNumber, PrincipalId, PrincipalAttributeAccessMapId 
declare @Old table(
	AttributeId uniqueidentifier NOT NULL primary key clustered,
	CreateAccess int NOT NULL,
	ReadAccess int NOT NULL,
	UpdateAccess int NOT NULL
	)

declare @New table(
	AttributeId uniqueidentifier NOT NULL primary key clustered,
	CreateAccess int NOT NULL,
	ReadAccess int NOT NULL,
	UpdateAccess int NOT NULL
)

-- Populate Old set: 2 usages except population 
insert into @Old(
		AttributeId,
		CreateAccess,
		ReadAccess,
		UpdateAccess
	) 
select  
		AttributeId,
		CreateAccess,
		ReadAccess,
		UpdateAccess
from PrincipalAttributeAccessMap where PrincipalId = @principalId

-- Unique FieldSecurityProfileId associated with principal
declare @ProfileIds table(FieldSecurityProfileId uniqueidentifier NOT NULL primary key clustered)

if (@type = @User) 
	begin
		-- User can have multiple associations with Profile from SystemUserProfiles intersect table	
		insert into @ProfileIds(FieldSecurityProfileId)
			select FieldSecurityProfileId from SystemUserProfiles sup 
			where sup.SystemUserId = @principalId
		UNION	-- duplicate rows are removed by UNION
		-- collect distinct profiles from team membership
			select distinct tp.FieldSecurityProfileId 
			from TeamProfiles tp 
			join TeamMembership tm on tm.TeamId = tp.TeamId
			join SystemUser su on su.SystemUserId = tm.SystemUserId
			where su.SystemUserId = @principalId
	end
else if (@type = @Team) 
	begin	
		-- Team can have multiple associations with Profile from TeamProfiles intersect entity
		insert into @ProfileIds(FieldSecurityProfileId)
			select FieldSecurityProfileId from TeamProfiles tp 
			where tp.TeamId = @principalId		
	end
else
	RAISERROR ('invalid principal type', 16, 1)

-- Populate New set using collected ProfileIds and union (max) for each type of attribute access
insert into @New(
				AttributeId,
				CreateAccess,
				ReadAccess,
				UpdateAccess
				)
	  select 	a.AttributeId,
				max(fp.CanCreate),
				max(fp.CanRead),
				max(fp.CanUpdate)
		from FieldPermission fp
		join FieldSecurityProfile fsp on fsp.FieldSecurityProfileId = fp.FieldSecurityProfileId
		join @ProfileIds i on i.FieldSecurityProfileId = fsp.FieldSecurityProfileId
		join EntityView e on e.ObjectTypeCode = fp.EntityName
		join AttributeView a on a.EntityId = e.EntityId and a.LogicalName = fp.AttributeLogicalName
		group by a.AttributeId

-- Insert added	  
insert PrincipalAttributeAccessMap (PrincipalId,
						AttributeId,
						CreateAccess,
						ReadAccess,
						UpdateAccess
					 )
    select @principalId, 
			AttributeId,
			CreateAccess,
			ReadAccess,
			UpdateAccess
		from @New 
	where AttributeId in (select AttributeId from @New Except select AttributeId from @Old) 

-- Update changed: Collect changed rows AttributeId first
declare @Ids table (AttributeId uniqueidentifier NOT NULL primary key clustered)  -- attributeIds for changed access
insert into @Ids 
	select n.AttributeId from @New n
	join @Old o on o.AttributeId = n.AttributeId
where n.CreateAccess <> o.CreateAccess or n.ReadAccess <> o.ReadAccess or n.UpdateAccess<>o.UpdateAccess 

update PrincipalAttributeAccessMap
	set CreateAccess = n.CreateAccess,
		ReadAccess = n.ReadAccess,
		UpdateAccess = n.UpdateAccess
from @New n 
	join @Ids i on i.AttributeId = n.AttributeId
where PrincipalAttributeAccessMap.AttributeId = n.AttributeId
  and PrincipalAttributeAccessMap.PrincipalId = @principalId

-- Delete removed with tracking deleted for offline sync
delete PrincipalAttributeAccessMap 
		OUTPUT  DELETED.PrincipalAttributeAccessMapId, @OtcPrincipalAttributeAccessMap 
		into SubscriptionTrackingDeletedObject(ObjectId, ObjectTypeCode)
	where PrincipalId = @principalId
	  and AttributeId in (select AttributeId from @Old Except select AttributeId from @New)

--  for a principal user resets sync subscriptions
--  CRM SE 36838: Deadlocks when calling Associate request adding users to teams. Using READPAST
if (@type = @User AND @resetSyncSubscriptions = 1) 
	begin
		update Subscription WITH (READPAST, READCOMMITTEDLOCK) set ReInitialize = 1
		where SystemUserId = @principalId
	end

end
