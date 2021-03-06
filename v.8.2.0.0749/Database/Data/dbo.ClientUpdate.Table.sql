USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[ClientUpdate]    Script Date: 4/10/2017 9:59:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ClientUpdate](
	[ClientUpdateId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_ClientUpdate_ClientUpdateId]  DEFAULT (newid()),
	[Description] [nvarchar](512) NULL,
	[VersionNumber] [timestamp] NULL,
	[SqlScript] [nvarchar](max) NULL,
	[CreatedOn] [datetime] NOT NULL CONSTRAINT [DF_ClientUpdate_CreatedOn]  DEFAULT (getutcdate()),
	[WhenExecute] [int] NOT NULL CONSTRAINT [DF_ClientUpdate_WhenExecute]  DEFAULT ((3)),
	[WasExecuted] [bit] NOT NULL CONSTRAINT [DF_ClientUpdate_WasExecuted]  DEFAULT ((0)),
 CONSTRAINT [cndx_PrimaryKey_ClientUpdate] PRIMARY KEY CLUSTERED 
(
	[ClientUpdateId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
INSERT [dbo].[ClientUpdate] ([ClientUpdateId], [Description], [SqlScript], [CreatedOn], [WhenExecute], [WasExecuted]) VALUES (N'8429a589-8e73-4d66-8bb6-15402526811b', N'Creates t_CascadeDeleteCollection type table', N'-- we must drop first procedures that have parameters of type dbo.[CascadeDeleteCollection]
-- Note that the procedure might not get recreated after patching if it is dropped here. So whenever you make a change to the table type, also make
-- a change to the corresponding procedure so that it gets recreated
if OBJECT_ID(N''[dbo].[p_CollectForCascadeDelete]'', ''P'') is not null
	drop procedure [dbo].[p_CollectForCascadeDelete]
go

if  exists (select 1 from sys.types st join sys.schemas ss on st.schema_id = ss.schema_id where st.name = N''CascadeDeleteCollection'' and ss.name = N''dbo'')
	drop type [dbo].[CascadeDeleteCollection]
go

create type [dbo].[CascadeDeleteCollection] as table(
	[t] [int] NOT NULL,
	[o] [uniqueidentifier] NOT NULL,
	[d] [int] NOT NULL,
	[s] [int] NOT NULL,
	[u] [int] IDENTITY(1,1) NOT NULL,
	primary key clustered 
(
	[t] ASC,
	[o] ASC,
	[d] ASC,
	[u] ASC
)with (IGNORE_DUP_KEY = OFF)
)
go


', CAST(N'2017-04-10 14:21:10.030' AS DateTime), 2, 0)
INSERT [dbo].[ClientUpdate] ([ClientUpdateId], [Description], [SqlScript], [CreatedOn], [WhenExecute], [WasExecuted]) VALUES (N'ba67cff8-d5e4-482e-97b1-35e07d903293', N'Optimized procedure for collecting all cascaded entities (Delete Operation)', N'if exists (select 1 from sys.objects where object_id = object_id(N''[dbo].[p_CollectForCascadeDelete]'') and type in (N''P'', N''SP'')) 
    drop procedure [dbo].[p_CollectForCascadeDelete]
go

create procedure [dbo].[p_CollectForCascadeDelete]
(
	@x CascadeCollectionTable READONLY,
	@f int,
	@u int
)
as;
begin;
	
	declare @collectedRecords CascadeDeleteCollection;

	-- Insert passed-in records to the return table
	insert into @collectedRecords(o, t, d, s) select o,t,c,0 from @x;

	-- Define necessary variables for processing
	declare @currentDepth int = -1;
	declare @nextDepth int = 0;
	declare @countOfRecordsAtNextDepth int = 1;
	declare @cascadeStatement nvarchar(max);

	declare @uniqueTypes table (ObjectTypeCode int primary key clustered);
	insert into @uniqueTypes select distinct t from @collectedRecords;
	set @countOfRecordsAtNextDepth = 1;

	-- While there are records to process at the next depth
	while (0 < @countOfRecordsAtNextDepth) 
	begin;

		-- Reset count
		set @countOfRecordsAtNextDepth = 0;

		-- Increment counters
		set @currentDepth = @currentDepth + 1;
		set @nextDepth = @nextDepth + 1;

		declare cascadeStatements cursor local FAST_FORWARD for
		select CascadeStatement from CascadeOperation c
		join @uniqueTypes ut on ut.ObjectTypeCode = c.ReferencedEntityObjectTypeCode
		where CascadeLinkType in (1, 3);	-- 1 == Cascade, 3 == Restrict

		open cascadeStatements;
		fetch next from cascadeStatements into @cascadeStatement;
		while(0=@@FETCH_STATUS)
		begin;

			insert into @collectedRecords (o, t, d, s)
			exec sp_executesql @cascadeStatement, N''@i CascadeDeleteCollection READONLY, @n int, @p int, @c int'',
			@i = @collectedRecords, @n = @nextDepth, @p = @u, @c = @currentDepth;

			fetch next from cascadeStatements into @cascadeStatement;
		end;
		close cascadeStatements;
		deallocate cascadeStatements;

		delete from @uniqueTypes;
		insert into @uniqueTypes select distinct t from @collectedRecords where d = @nextDepth and t > 0;
		set @countOfRecordsAtNextDepth = @@ROWCOUNT;
	end;

	-- Delete restrict rows where there exists an identical row that indicates the same row should actually be deleted
	-- because the delete takes precedence over the restrict
	delete cr2 from @collectedRecords cr1 join @collectedRecords cr2 on cr1.o = cr2.o and cr1.t = -cr2.t and cr1.t > 0;

	-- If any delete rows still exist, return
	if (exists(select 1 from @collectedRecords where t < 0))
	begin;
		delete @collectedRecords;
		insert into @collectedRecords(o,t,d,s) values(N''00000000-0000-0000-0000-000000000000'', -1, -1, 0);
	end;

	insert into #CascadeWorkingSpace(o, t, d, s)
	select o, t, d, s from @collectedRecords;
end;

go


', CAST(N'2017-04-10 13:43:32.977' AS DateTime), 2, 0)
INSERT [dbo].[ClientUpdate] ([ClientUpdateId], [Description], [SqlScript], [CreatedOn], [WhenExecute], [WasExecuted]) VALUES (N'7897d449-fdea-4c50-a1af-393bb867aac8', N'Creates t_CascadeRemoveLinkCollection type table', N'-- we must drop first procedures that have parameters of type dbo.[CascadeRemoveLinkCollection]
-- Note that the procedure might not get recreated after patching if it is dropped here. So whenever you make a change to the table type, also make
-- a change to the corresponding procedure so that it gets recreated
if OBJECT_ID(N''[dbo].[[p_CollectForCascadeRemoveLink]]'', ''P'') is not null
	drop procedure [dbo].[p_CollectForCascadeRemoveLink]
go

if  exists (select 1 from sys.types st join sys.schemas ss on st.schema_id = ss.schema_id where st.name = N''CascadeRemoveLinkCollection'' and ss.name = N''dbo'')
	drop type [dbo].[CascadeRemoveLinkCollection];
go

create type [dbo].[CascadeRemoveLinkCollection] as table(
	[o] [uniqueidentifier] NOT NULL,
	[t] [int] NOT NULL,
	[c] [int] NOT NULL,
	primary key clustered 
(
	[t] ASC,
	[o] ASC,
	[c] ASC
)with (IGNORE_DUP_KEY = OFF)
)
go


', CAST(N'2017-04-10 13:43:32.903' AS DateTime), 2, 0)
INSERT [dbo].[ClientUpdate] ([ClientUpdateId], [Description], [SqlScript], [CreatedOn], [WhenExecute], [WasExecuted]) VALUES (N'658131b1-0f4b-46b3-a372-5a667e6faad1', N'Creates t_CascadeRemoveLinkCollection type table', N'-- we must drop first procedures that have parameters of type dbo.[CascadeRemoveLinkCollection]
-- Note that the procedure might not get recreated after patching if it is dropped here. So whenever you make a change to the table type, also make
-- a change to the corresponding procedure so that it gets recreated
if OBJECT_ID(N''[dbo].[[p_CollectForCascadeRemoveLink]]'', ''P'') is not null
	drop procedure [dbo].[p_CollectForCascadeRemoveLink]
go

if  exists (select 1 from sys.types st join sys.schemas ss on st.schema_id = ss.schema_id where st.name = N''CascadeRemoveLinkCollection'' and ss.name = N''dbo'')
	drop type [dbo].[CascadeRemoveLinkCollection];
go

create type [dbo].[CascadeRemoveLinkCollection] as table(
	[o] [uniqueidentifier] NOT NULL,
	[t] [int] NOT NULL,
	[c] [int] NOT NULL,
	primary key clustered 
(
	[t] ASC,
	[o] ASC,
	[c] ASC
)with (IGNORE_DUP_KEY = OFF)
)
go


', CAST(N'2017-04-10 14:21:10.167' AS DateTime), 2, 0)
INSERT [dbo].[ClientUpdate] ([ClientUpdateId], [Description], [SqlScript], [CreatedOn], [WhenExecute], [WasExecuted]) VALUES (N'efb1f496-a0de-40d6-a0e7-6c962df5b72f', N'Supports database driven security: reinit PrincipalAttributeAccessMap for a list of principal users or teams.', N'if exists (select 1 from sys.objects where object_id = object_id(N''[dbo].[p_PrincipalAttributeAccessMapReinitBulk]'') and type in (N''P'', N''SP'')) 
	drop procedure dbo.p_PrincipalAttributeAccessMapReinitBulk
go

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
														select Id from @principalUserIds 
														union all
														select Id from @principalTeamIds
													)

-- FieldSecurityProfileId associated with principals
create table #ProfileIds(FieldSecurityProfileId uniqueidentifier NOT NULL, PrincipalId uniqueidentifier NOT NULL primary key clustered(FieldSecurityProfileId ASC, PrincipalId ASC))

-- User can have multiple associations with Profile from SystemUserProfiles intersect table	
insert into #ProfileIds(FieldSecurityProfileId,PrincipalId)
	select sup.FieldSecurityProfileId, p.Id from SystemUserProfiles sup 
	join @principalUserIds p on p.Id = sup.SystemUserId
union	-- duplicate rows are removed by UNION
-- collect distinct profiles from team membership
	select distinct tp.FieldSecurityProfileId , p.Id
	from TeamProfiles tp 
	join TeamMembership tm on tm.TeamId = tp.TeamId
	join SystemUser su on su.SystemUserId = tm.SystemUserId
	join @principalUserIds p on p.Id = su.SystemUserId

-- Team can have multiple associations with Profile from TeamProfiles intersect entity
insert into #ProfileIds(FieldSecurityProfileId,PrincipalId)
	select tp.FieldSecurityProfileId, p.Id from TeamProfiles tp 
	join @principalTeamIds p on p.Id = tp.TeamId

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
		where SystemUserId in (select Id from @principalUserIds)
	end

--Cleanup
drop table #Old
drop table #New
drop table #Ids
drop table #ProfileIds

end

GO
', CAST(N'2017-04-10 13:43:33.790' AS DateTime), 2, 0)
INSERT [dbo].[ClientUpdate] ([ClientUpdateId], [Description], [SqlScript], [CreatedOn], [WhenExecute], [WasExecuted]) VALUES (N'd018d6f5-e3cc-49d8-84bf-6db9b95d6a9f', N'Optimized procedure for collecting all cascaded entities (Delete Operation)', N'if exists (select 1 from sys.objects where object_id = object_id(N''[dbo].[p_CollectForCascadeDelete]'') and type in (N''P'', N''SP'')) 
    drop procedure [dbo].[p_CollectForCascadeDelete]
go

create procedure [dbo].[p_CollectForCascadeDelete]
(
	@x CascadeCollectionTable READONLY,
	@f int,
	@u int
)
as;
begin;
	
	declare @collectedRecords CascadeDeleteCollection;

	-- Insert passed-in records to the return table
	insert into @collectedRecords(o, t, d, s) select o,t,c,0 from @x;

	-- Define necessary variables for processing
	declare @currentDepth int = -1;
	declare @nextDepth int = 0;
	declare @countOfRecordsAtNextDepth int = 1;
	declare @cascadeStatement nvarchar(max);

	declare @uniqueTypes table (ObjectTypeCode int primary key clustered);
	insert into @uniqueTypes select distinct t from @collectedRecords;
	set @countOfRecordsAtNextDepth = 1;

	-- While there are records to process at the next depth
	while (0 < @countOfRecordsAtNextDepth) 
	begin;

		-- Reset count
		set @countOfRecordsAtNextDepth = 0;

		-- Increment counters
		set @currentDepth = @currentDepth + 1;
		set @nextDepth = @nextDepth + 1;

		declare cascadeStatements cursor local FAST_FORWARD for
		select CascadeStatement from CascadeOperation c
		join @uniqueTypes ut on ut.ObjectTypeCode = c.ReferencedEntityObjectTypeCode
		where CascadeLinkType in (1, 3);	-- 1 == Cascade, 3 == Restrict

		open cascadeStatements;
		fetch next from cascadeStatements into @cascadeStatement;
		while(0=@@FETCH_STATUS)
		begin;

			insert into @collectedRecords (o, t, d, s)
			exec sp_executesql @cascadeStatement, N''@i CascadeDeleteCollection READONLY, @n int, @p int, @c int'',
			@i = @collectedRecords, @n = @nextDepth, @p = @u, @c = @currentDepth;

			fetch next from cascadeStatements into @cascadeStatement;
		end;
		close cascadeStatements;
		deallocate cascadeStatements;

		delete from @uniqueTypes;
		insert into @uniqueTypes select distinct t from @collectedRecords where d = @nextDepth and t > 0;
		set @countOfRecordsAtNextDepth = @@ROWCOUNT;
	end;

	-- Delete restrict rows where there exists an identical row that indicates the same row should actually be deleted
	-- because the delete takes precedence over the restrict
	delete cr2 from @collectedRecords cr1 join @collectedRecords cr2 on cr1.o = cr2.o and cr1.t = -cr2.t and cr1.t > 0;

	-- If any delete rows still exist, return
	if (exists(select 1 from @collectedRecords where t < 0))
	begin;
		delete @collectedRecords;
		insert into @collectedRecords(o,t,d,s) values(N''00000000-0000-0000-0000-000000000000'', -1, -1, 0);
	end;

	insert into #CascadeWorkingSpace(o, t, d, s)
	select o, t, d, s from @collectedRecords;
end;

go


', CAST(N'2017-04-10 14:21:22.300' AS DateTime), 2, 0)
INSERT [dbo].[ClientUpdate] ([ClientUpdateId], [Description], [SqlScript], [CreatedOn], [WhenExecute], [WasExecuted]) VALUES (N'f6817a86-a102-4cc7-903c-6f7433903d07', N'Optimized procedure for collecting all remove link entities (Delete Operation)', N'if exists (select 1 from sys.objects where object_id = object_id(N''[dbo].[p_CollectForCascadeRemoveLink]'') and type in (N''P'', N''SP'')) 
    drop procedure [dbo].[p_CollectForCascadeRemoveLink];
go

create procedure [dbo].[p_CollectForCascadeRemoveLink]
(
	@c CascadeCollectionTable READONLY,
	@is_delete_entity_schema int,
	@topType int,
	@f int
)
as;
begin;
	
	declare @collectedRecords CascadeRemoveLinkCollection;

	-- Define necessary variables for processing
	declare @cascadeStatement nvarchar(max);

	declare @uniqueTypes table (ObjectTypeCode int primary key clustered);
	insert into @uniqueTypes select distinct t from @c;

	declare cascadeStatements cursor local FAST_FORWARD for
	select CascadeStatement from CascadeOperation c
	join @uniqueTypes ut on ut.ObjectTypeCode = c.ReferencedEntityObjectTypeCode
	where 
	((ut.ObjectTypeCode = @topType and @is_delete_entity_schema =1) and (IsDeleteEntitySchema = @is_delete_entity_schema or HasExtraConditions = 1)) and CascadeLinkType in (2) 
	or 
	(CascadeLinkType in (2) and IsDeleteEntitySchema = @is_delete_entity_schema);

	open cascadeStatements;
	fetch next from cascadeStatements into @cascadeStatement;
	while(0=@@FETCH_STATUS)
	begin;

		insert into @collectedRecords (o, t, c)
		exec sp_executesql @cascadeStatement, N''@i CascadeCollectionTable READONLY'',
		@i = @c;

		fetch next from cascadeStatements into @cascadeStatement;
	end;
	close cascadeStatements;
	deallocate cascadeStatements;

	insert into #CascadeRemoveLinkWorkingSpace (o, t, c) select o, t, c from @collectedRecords;
end;

go


', CAST(N'2017-04-10 14:21:22.367' AS DateTime), 2, 0)
INSERT [dbo].[ClientUpdate] ([ClientUpdateId], [Description], [SqlScript], [CreatedOn], [WhenExecute], [WasExecuted]) VALUES (N'7ceb94e9-84c2-4b4b-a365-8c4137dbdaf8', N'CCResourceIdROWGUIDCOL - deletes customcontrolresourceid rowguidcol from customcontrolresource table', N'if exists (select name from sys.columns where object_id = object_id(N''[CustomControlResourceBase]'') and columnproperty(object_id, name, N''IsRowGuidCol'') = 1 and name = N''CustomControlResourceId'')
		begin;
			alter table [CustomControlResourceBase]
				alter column [CustomControlResourceId] drop rowguidcol;
		end;

		if (object_id(N''[DF_CustomControlResourceBase_CustomControlResourceId]'', ''D'') is not null)
		begin;
			alter table [CustomControlResourceBase] drop constraint [DF_CustomControlResourceBase_CustomControlResourceId];
		end;

		if (object_id(N''[UQ_CustomControlResourceBase_CustomControlIdWebResourceId]'', ''UQ'') is not null)
		begin;
			alter table [CustomControlResourceBase] drop constraint [UQ_CustomControlResourceBase_CustomControlIdWebResourceId];
		end;', CAST(N'2017-04-10 21:12:31.413' AS DateTime), 1, 0)
INSERT [dbo].[ClientUpdate] ([ClientUpdateId], [Description], [SqlScript], [CreatedOn], [WhenExecute], [WasExecuted]) VALUES (N'fd15a6f3-aefb-4b47-9eee-e49f27d4627d', N'Supports database driven security: reinit PrincipalAttributeAccessMap for a list of principal users or teams.', N'if exists (select 1 from sys.objects where object_id = object_id(N''[dbo].[p_PrincipalAttributeAccessMapReinitBulk]'') and type in (N''P'', N''SP'')) 
	drop procedure dbo.p_PrincipalAttributeAccessMapReinitBulk
go

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
														select Id from @principalUserIds 
														union all
														select Id from @principalTeamIds
													)

-- FieldSecurityProfileId associated with principals
create table #ProfileIds(FieldSecurityProfileId uniqueidentifier NOT NULL, PrincipalId uniqueidentifier NOT NULL primary key clustered(FieldSecurityProfileId ASC, PrincipalId ASC))

-- User can have multiple associations with Profile from SystemUserProfiles intersect table	
insert into #ProfileIds(FieldSecurityProfileId,PrincipalId)
	select sup.FieldSecurityProfileId, p.Id from SystemUserProfiles sup 
	join @principalUserIds p on p.Id = sup.SystemUserId
union	-- duplicate rows are removed by UNION
-- collect distinct profiles from team membership
	select distinct tp.FieldSecurityProfileId , p.Id
	from TeamProfiles tp 
	join TeamMembership tm on tm.TeamId = tp.TeamId
	join SystemUser su on su.SystemUserId = tm.SystemUserId
	join @principalUserIds p on p.Id = su.SystemUserId

-- Team can have multiple associations with Profile from TeamProfiles intersect entity
insert into #ProfileIds(FieldSecurityProfileId,PrincipalId)
	select tp.FieldSecurityProfileId, p.Id from TeamProfiles tp 
	join @principalTeamIds p on p.Id = tp.TeamId

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
		where SystemUserId in (select Id from @principalUserIds)
	end

--Cleanup
drop table #Old
drop table #New
drop table #Ids
drop table #ProfileIds

end

GO
', CAST(N'2017-04-10 14:21:31.153' AS DateTime), 2, 0)
INSERT [dbo].[ClientUpdate] ([ClientUpdateId], [Description], [SqlScript], [CreatedOn], [WhenExecute], [WasExecuted]) VALUES (N'2507cdc7-2c19-4374-a353-ec712ddf5fed', N'Optimized procedure for collecting all remove link entities (Delete Operation)', N'if exists (select 1 from sys.objects where object_id = object_id(N''[dbo].[p_CollectForCascadeRemoveLink]'') and type in (N''P'', N''SP'')) 
    drop procedure [dbo].[p_CollectForCascadeRemoveLink];
go

create procedure [dbo].[p_CollectForCascadeRemoveLink]
(
	@c CascadeCollectionTable READONLY,
	@is_delete_entity_schema int,
	@topType int,
	@f int
)
as;
begin;
	
	declare @collectedRecords CascadeRemoveLinkCollection;

	-- Define necessary variables for processing
	declare @cascadeStatement nvarchar(max);

	declare @uniqueTypes table (ObjectTypeCode int primary key clustered);
	insert into @uniqueTypes select distinct t from @c;

	declare cascadeStatements cursor local FAST_FORWARD for
	select CascadeStatement from CascadeOperation c
	join @uniqueTypes ut on ut.ObjectTypeCode = c.ReferencedEntityObjectTypeCode
	where 
	((ut.ObjectTypeCode = @topType and @is_delete_entity_schema =1) and (IsDeleteEntitySchema = @is_delete_entity_schema or HasExtraConditions = 1)) and CascadeLinkType in (2) 
	or 
	(CascadeLinkType in (2) and IsDeleteEntitySchema = @is_delete_entity_schema);

	open cascadeStatements;
	fetch next from cascadeStatements into @cascadeStatement;
	while(0=@@FETCH_STATUS)
	begin;

		insert into @collectedRecords (o, t, c)
		exec sp_executesql @cascadeStatement, N''@i CascadeCollectionTable READONLY'',
		@i = @c;

		fetch next from cascadeStatements into @cascadeStatement;
	end;
	close cascadeStatements;
	deallocate cascadeStatements;

	insert into #CascadeRemoveLinkWorkingSpace (o, t, c) select o, t, c from @collectedRecords;
end;

go


', CAST(N'2017-04-10 13:43:33.037' AS DateTime), 2, 0)
INSERT [dbo].[ClientUpdate] ([ClientUpdateId], [Description], [SqlScript], [CreatedOn], [WhenExecute], [WasExecuted]) VALUES (N'5047d0f0-5239-4d40-9fb9-f17fc78983e5', N'Creates t_CascadeDeleteCollection type table', N'-- we must drop first procedures that have parameters of type dbo.[CascadeDeleteCollection]
-- Note that the procedure might not get recreated after patching if it is dropped here. So whenever you make a change to the table type, also make
-- a change to the corresponding procedure so that it gets recreated
if OBJECT_ID(N''[dbo].[p_CollectForCascadeDelete]'', ''P'') is not null
	drop procedure [dbo].[p_CollectForCascadeDelete]
go

if  exists (select 1 from sys.types st join sys.schemas ss on st.schema_id = ss.schema_id where st.name = N''CascadeDeleteCollection'' and ss.name = N''dbo'')
	drop type [dbo].[CascadeDeleteCollection]
go

create type [dbo].[CascadeDeleteCollection] as table(
	[t] [int] NOT NULL,
	[o] [uniqueidentifier] NOT NULL,
	[d] [int] NOT NULL,
	[s] [int] NOT NULL,
	[u] [int] IDENTITY(1,1) NOT NULL,
	primary key clustered 
(
	[t] ASC,
	[o] ASC,
	[d] ASC,
	[u] ASC
)with (IGNORE_DUP_KEY = OFF)
)
go


', CAST(N'2017-04-10 13:43:32.800' AS DateTime), 2, 0)
INSERT [dbo].[ClientUpdate] ([ClientUpdateId], [Description], [SqlScript], [CreatedOn], [WhenExecute], [WasExecuted]) VALUES (N'04e787cd-2bcd-4747-882f-fdb541688599', N'Optimized procedure for collecting all cascaded and remove link entities (Delete Operation)', N'if exists (select 1 from sys.objects where object_id = object_id(N''[dbo].[p_CollectForCascadeWrapper]'') and type in (N''P'', N''SP'')) 
    drop procedure [dbo].[p_CollectForCascadeWrapper]
go

create procedure [dbo].[p_CollectForCascadeWrapper]
(
	@root_ids EntityIdCollection READONLY, -- root entity object ids to be deleted or 0 records if entities with specified object type code
	@root_otc int, -- object type code for the entity
	@isoffline int, -- is Offline or not; if the call is comming from Outlook Offline or not
	@managed_solution_operation int,  -- 1 if we''re doing the operation during a solution install/uninstall, otherwise 0
	@component_state int  -- The component state of the root entity if solution-aware, otherwise 0
)
as;
begin;

declare @t table
( 	
-- SE 18360 Start
    i int identity(1,1), -- identity column
-- SE 18360 End
	a tinyint NOT NULL, -- action type (see next for details)
	o uniqueidentifier NOT NULL, -- entity object id
	t int NOT NULL, -- object type code for the entity
	c int NOT NULL, -- if 0 < c then column number for the referencing attribute (only for update and remove link), otherwise 0
	s int NOT NULL  -- ComponentState of a solution-aware entity if it is needed, otherwise 0
) 

-- We group collected entities based on what action type we need to execute on them:
-- 1 - update to DBNull: straight sql update the entity with no pipeline or extension of referencing attribute to DBNull
-- 2 - update to self referencing: straight sql update the entity with no pipeline or extension of self referencing attribute to its primary key
-- 3 - remove link: update the entity with pipeline and extensions
-- 4 - delete: delete the entity 
-- Error cases:
-- 255 - a Restrict cascading rule has been encountered

declare @action_update_to_dbnull as int				= 1;
declare @action_update_to_self_reference as int		= 2;
declare @action_remove_link as int					= 3;
declare @action_delete as int						= 4;
declare @action_restrict as int						= 255;

declare @empty_id as uniqueidentifier=N''00000000-0000-0000-0000-000000000000'';
declare @invalid_otc as int=-1;
declare @invalid_column_number as int=-1;

declare @is_delete_entity_schema int;
declare @collect_by_cascade_removelink CascadeCollectionTable;
declare @collect_entities_to_delete_first_levels CascadeCollectionTable;
declare @collect_entities_to_delete_all_levels CascadeCollectionTable;
declare @entities_to_delete CascadeCollectionTable;
declare @entities_to_removelink CascadeCollectionTable;
declare @entities_to_update_to_dbnull CascadeCollectionTable;
declare @entities_to_update_to_self_reference CascadeCollectionTable;
declare @collectedrecordcount as int = 0;

-- A) Build the root(s) list of entities to be then used in the main collections.
-- If @root_ids count greater than 0 then we want the deletion of all entity instances in @root_ids.
-- If @root_ids count is 0 then we want the deletion of all entities that have specified object type code.
-- Call CollectForSchemaDelete that will will collect all entities that have specified object type code and 
-- their direct children to be deleted. We collect only children that correspond to polymorphic relationships,
-- for normal relationships we will drop the referencing columns completely (kind of a remove link).
-- The delete entity schema flag will be used in the CollectForRemoveLink in there exist special code 
-- if delete schema for the concrete activities (Task, Phone call, custom activitites etc) instead of applying 
-- the well defined (by our MetadataXml) CascadeDelete rule of CascadeAll we want to change behavior and
-- do a RemoveLink. We want to keep these activites so that we can re-assign later.
--
-- B) Execute CollectForCacadeDelete. Insert data into appropriate lists.
-- Usually we should have returned at least the one row with object type code -1 then we''ve hit a Restrict relationship.
-- In this case we just add only one row action code of restrict to signal the caller that a Restrict relationship 
-- has been hit and exit the function.
-- Add all rows to the Delete list except for those that have depth -1. We get rows with depth -1 
-- only when we do schema delete (execute CollectForSchemaDelete) by adding all root entities 
-- (that have the specififed root object type code) to the list with depth -1. The entities
-- with -1 depth won''t be deleted using notification pipeline as we do for the other delete entities, 
-- but they will be deleted as part of their table drop. This will save performance time.
-- Add SelfReferencing entities to the UpdateForSelfReference as well.
--
-- C) Execute CollectionForCascadeRemoveLink. Insert data into appropriate lists.
-- If entity has not been added already to the Delete list then add it to Remove Link list. 
-- Otherwise add it to the UpdateForDBNull list.
--
-- D) Add entities from each individual list in the final list in this exact order: 
-- entities from UpdateForDBNull list, entities from UpdateForSelfReference list, 
-- entities from Remove Link and then entities from Delete list.
-- Topologically sort entities from Delete list based on their ObjectTypeCode: first the children, last the roots.

-- A)

if ((select count(*) from @root_ids) = 0)
begin;
	insert into @collect_entities_to_delete_first_levels(o,t,c,s)
		select o,t,d,0 from fn_CollectForCascadeDeleteSchema(@root_otc,@isoffline);
	set @is_delete_entity_schema=1;
end;
else begin
    -- Set collect entities for delete at first level from @root_ids
	insert into @collect_entities_to_delete_first_levels(o,t,c,s) select distinct id,@root_otc,0,@component_state from @root_ids;
	set @is_delete_entity_schema=0;
end;

-- B)

create table #CascadeWorkingSpace(
	[t] [int] NOT NULL,
	[o] [uniqueidentifier] NOT NULL,
	[d] [int] NOT NULL,
	[s] [int] NOT NULL,
	[u] [int] IDENTITY(1,1) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[t] ASC,
	[o] ASC,
	[d] ASC,
	[u] ASC
)
)

-- This table can contain multiple records with the same entity id and object type code (but different depth levels).
-- Because of this any subsequent joins with this table must include a distinct clause to remove any duplicate results.
exec p_CollectForCascadeDelete @collect_entities_to_delete_first_levels,@isoffline,@managed_solution_operation;

-- Stop collection and exit if a Restrict relationship was hit (an invalid otc was collected).
if(exists(select 1 from #CascadeWorkingSpace where t=@invalid_otc))
begin;
	insert into @t(a,o,t,c,s) values(@action_restrict, @empty_id, @invalid_otc, @invalid_column_number, 0);
	select @collectedrecordcount as CollectedRecordCount
	select i, a, o, t, c, s from @t order by i;
	return;
end;

-- This table can contain multiple records with the same entity id and object type code (but different depth levels).
-- Because of this any subsequent joins with this table must include a distinct clause to remove any duplicate results.
insert into @collect_entities_to_delete_all_levels (o, s, t, c) select distinct o, s, t, d from #CascadeWorkingSpace;

-- exclude any duplicates; otherwise we can get PK contraint violation
insert into @entities_to_delete(o,t,c,s)
	select distinct o,t,0,s from @collect_entities_to_delete_all_levels where c<>-1;
	
insert into @entities_to_update_to_self_reference(o,t,c,s)
	select ed.o, ed.t, esr.ColumnNumber, ed.s from @entities_to_delete ed
	inner join CascadeDeleteEntitiesSelfReferencing esr on esr.ObjectTypeCode = ed.t;

-- C)

create table #CascadeRemoveLinkWorkingSpace(
	[t] [int] NOT NULL,
	[o] [uniqueidentifier] NOT NULL,
	[c] [int] NOT NULL
PRIMARY KEY CLUSTERED 
(
	[t] ASC,
	[o] ASC,
	[c] ASC
)
)

-- We pass the type of the top-level object or objects we''re collecting (multiple if the @root_id is null) so that if we''re in schema delete
-- we skip collecting related objects in non-polymorphic relationships since it is both unnecessary and can lead to failures (see MSCRM bug 108005)
exec p_CollectForCascadeRemoveLink @collect_entities_to_delete_all_levels,@is_delete_entity_schema,@root_otc,@isoffline;

-- exclude any duplicates; otherwise we can get PK contraint violation
insert into @entities_to_removelink(o,t,c,s)
	select distinct cr.o,cr.t,cr.c,0 from #CascadeRemoveLinkWorkingSpace cr
	left join @collect_entities_to_delete_all_levels ed on cr.o=ed.o and cr.t=ed.t
	where ed.t is null;

-- exclude any duplicates; otherwise we can get PK contraint violation
insert into @entities_to_update_to_dbnull(o,t,c,s)
	select distinct cr.o,cr.t,cr.c,0 from #CascadeRemoveLinkWorkingSpace cr
	left join @collect_entities_to_delete_all_levels ed on cr.o=ed.o and cr.t=ed.t
	where ed.t is not null;

-- D)

insert into @t(a,o,t,c,s) 
	select @action_update_to_dbnull,o,t,c,s from @entities_to_update_to_dbnull
	order by t,c;

set @collectedrecordcount = @@ROWCOUNT;

insert into @t(a,o,t,c,s) 
	select @action_update_to_self_reference,o,t,c,s from @entities_to_update_to_self_reference
	order by t,c;

set @collectedrecordcount = @collectedrecordcount + @@ROWCOUNT;

insert into @t(a,o,t,c,s) 
	select @action_remove_link,o,t,c,s from @entities_to_removelink;

set @collectedrecordcount = @collectedrecordcount + @@ROWCOUNT;

-- Not all entities that exist in the system are saved into the CascadeDeleteEntitiesTopologicalOrder table:
-- the entities that do not have any relationships (referencing or referenced) where CascadeDelete rule is 
-- Cascade, RemoveLink or Restrict are not added to this table. Because of this, these entities are excluded
-- from the last insert (the inner join one). But we do need to add these entities to our final list 
-- and we should consider them as leaves in the topological order of all the entities from the system (so we need to delete them first).
insert into @t(a,o,t,c,s) 
	select @action_delete,o,t,c,s from @entities_to_delete ed
	left join CascadeDeleteEntitiesTopologicalOrder eto on ed.t = eto.ObjectTypeCode
	where eto.ObjectTypeCode is null
	order by t,c;

set @collectedrecordcount = @collectedrecordcount + @@ROWCOUNT;

-- Topologically sort entities from the Delete list based on their ObjectTypeCode: first the children, last the roots.
-- Only entities for which their ObjectTypeCode exist in the CascadeDeleteEntitiesTopologicalOrder will be returned by the inner join.
-- All other entities had been returned already by the previous query.
insert into @t(a,o,t,c,s) 
	select @action_delete,o,t,c,s from @entities_to_delete ed
	inner join CascadeDeleteEntitiesTopologicalOrder eto on ed.t = eto.ObjectTypeCode
	order by eto.OrderNumber,c;

set @collectedrecordcount = @collectedrecordcount + @@ROWCOUNT;

drop table #CascadeWorkingSpace;
drop table #CascadeRemoveLinkWorkingSpace;

select @collectedrecordcount as CollectedRecordCount
select i, a, o, t, c, s from @t order by i;

end;
go


', CAST(N'2017-04-10 14:21:30.227' AS DateTime), 2, 0)
INSERT [dbo].[ClientUpdate] ([ClientUpdateId], [Description], [SqlScript], [CreatedOn], [WhenExecute], [WasExecuted]) VALUES (N'315d29f3-c29f-4625-ad1b-fe7f380cd43f', N'Optimized procedure for collecting all cascaded and remove link entities (Delete Operation)', N'if exists (select 1 from sys.objects where object_id = object_id(N''[dbo].[p_CollectForCascadeWrapper]'') and type in (N''P'', N''SP'')) 
    drop procedure [dbo].[p_CollectForCascadeWrapper]
go

create procedure [dbo].[p_CollectForCascadeWrapper]
(
	@root_ids EntityIdCollection READONLY, -- root entity object ids to be deleted or 0 records if entities with specified object type code
	@root_otc int, -- object type code for the entity
	@isoffline int, -- is Offline or not; if the call is comming from Outlook Offline or not
	@managed_solution_operation int,  -- 1 if we''re doing the operation during a solution install/uninstall, otherwise 0
	@component_state int  -- The component state of the root entity if solution-aware, otherwise 0
)
as;
begin;

declare @t table
( 	
-- SE 18360 Start
    i int identity(1,1), -- identity column
-- SE 18360 End
	a tinyint NOT NULL, -- action type (see next for details)
	o uniqueidentifier NOT NULL, -- entity object id
	t int NOT NULL, -- object type code for the entity
	c int NOT NULL, -- if 0 < c then column number for the referencing attribute (only for update and remove link), otherwise 0
	s int NOT NULL  -- ComponentState of a solution-aware entity if it is needed, otherwise 0
) 

-- We group collected entities based on what action type we need to execute on them:
-- 1 - update to DBNull: straight sql update the entity with no pipeline or extension of referencing attribute to DBNull
-- 2 - update to self referencing: straight sql update the entity with no pipeline or extension of self referencing attribute to its primary key
-- 3 - remove link: update the entity with pipeline and extensions
-- 4 - delete: delete the entity 
-- Error cases:
-- 255 - a Restrict cascading rule has been encountered

declare @action_update_to_dbnull as int				= 1;
declare @action_update_to_self_reference as int		= 2;
declare @action_remove_link as int					= 3;
declare @action_delete as int						= 4;
declare @action_restrict as int						= 255;

declare @empty_id as uniqueidentifier=N''00000000-0000-0000-0000-000000000000'';
declare @invalid_otc as int=-1;
declare @invalid_column_number as int=-1;

declare @is_delete_entity_schema int;
declare @collect_by_cascade_removelink CascadeCollectionTable;
declare @collect_entities_to_delete_first_levels CascadeCollectionTable;
declare @collect_entities_to_delete_all_levels CascadeCollectionTable;
declare @entities_to_delete CascadeCollectionTable;
declare @entities_to_removelink CascadeCollectionTable;
declare @entities_to_update_to_dbnull CascadeCollectionTable;
declare @entities_to_update_to_self_reference CascadeCollectionTable;
declare @collectedrecordcount as int = 0;

-- A) Build the root(s) list of entities to be then used in the main collections.
-- If @root_ids count greater than 0 then we want the deletion of all entity instances in @root_ids.
-- If @root_ids count is 0 then we want the deletion of all entities that have specified object type code.
-- Call CollectForSchemaDelete that will will collect all entities that have specified object type code and 
-- their direct children to be deleted. We collect only children that correspond to polymorphic relationships,
-- for normal relationships we will drop the referencing columns completely (kind of a remove link).
-- The delete entity schema flag will be used in the CollectForRemoveLink in there exist special code 
-- if delete schema for the concrete activities (Task, Phone call, custom activitites etc) instead of applying 
-- the well defined (by our MetadataXml) CascadeDelete rule of CascadeAll we want to change behavior and
-- do a RemoveLink. We want to keep these activites so that we can re-assign later.
--
-- B) Execute CollectForCacadeDelete. Insert data into appropriate lists.
-- Usually we should have returned at least the one row with object type code -1 then we''ve hit a Restrict relationship.
-- In this case we just add only one row action code of restrict to signal the caller that a Restrict relationship 
-- has been hit and exit the function.
-- Add all rows to the Delete list except for those that have depth -1. We get rows with depth -1 
-- only when we do schema delete (execute CollectForSchemaDelete) by adding all root entities 
-- (that have the specififed root object type code) to the list with depth -1. The entities
-- with -1 depth won''t be deleted using notification pipeline as we do for the other delete entities, 
-- but they will be deleted as part of their table drop. This will save performance time.
-- Add SelfReferencing entities to the UpdateForSelfReference as well.
--
-- C) Execute CollectionForCascadeRemoveLink. Insert data into appropriate lists.
-- If entity has not been added already to the Delete list then add it to Remove Link list. 
-- Otherwise add it to the UpdateForDBNull list.
--
-- D) Add entities from each individual list in the final list in this exact order: 
-- entities from UpdateForDBNull list, entities from UpdateForSelfReference list, 
-- entities from Remove Link and then entities from Delete list.
-- Topologically sort entities from Delete list based on their ObjectTypeCode: first the children, last the roots.

-- A)

if ((select count(*) from @root_ids) = 0)
begin;
	insert into @collect_entities_to_delete_first_levels(o,t,c,s)
		select o,t,d,0 from fn_CollectForCascadeDeleteSchema(@root_otc,@isoffline);
	set @is_delete_entity_schema=1;
end;
else begin
    -- Set collect entities for delete at first level from @root_ids
	insert into @collect_entities_to_delete_first_levels(o,t,c,s) select distinct id,@root_otc,0,@component_state from @root_ids;
	set @is_delete_entity_schema=0;
end;

-- B)

create table #CascadeWorkingSpace(
	[t] [int] NOT NULL,
	[o] [uniqueidentifier] NOT NULL,
	[d] [int] NOT NULL,
	[s] [int] NOT NULL,
	[u] [int] IDENTITY(1,1) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[t] ASC,
	[o] ASC,
	[d] ASC,
	[u] ASC
)
)

-- This table can contain multiple records with the same entity id and object type code (but different depth levels).
-- Because of this any subsequent joins with this table must include a distinct clause to remove any duplicate results.
exec p_CollectForCascadeDelete @collect_entities_to_delete_first_levels,@isoffline,@managed_solution_operation;

-- Stop collection and exit if a Restrict relationship was hit (an invalid otc was collected).
if(exists(select 1 from #CascadeWorkingSpace where t=@invalid_otc))
begin;
	insert into @t(a,o,t,c,s) values(@action_restrict, @empty_id, @invalid_otc, @invalid_column_number, 0);
	select @collectedrecordcount as CollectedRecordCount
	select i, a, o, t, c, s from @t order by i;
	return;
end;

-- This table can contain multiple records with the same entity id and object type code (but different depth levels).
-- Because of this any subsequent joins with this table must include a distinct clause to remove any duplicate results.
insert into @collect_entities_to_delete_all_levels (o, s, t, c) select distinct o, s, t, d from #CascadeWorkingSpace;

-- exclude any duplicates; otherwise we can get PK contraint violation
insert into @entities_to_delete(o,t,c,s)
	select distinct o,t,0,s from @collect_entities_to_delete_all_levels where c<>-1;
	
insert into @entities_to_update_to_self_reference(o,t,c,s)
	select ed.o, ed.t, esr.ColumnNumber, ed.s from @entities_to_delete ed
	inner join CascadeDeleteEntitiesSelfReferencing esr on esr.ObjectTypeCode = ed.t;

-- C)

create table #CascadeRemoveLinkWorkingSpace(
	[t] [int] NOT NULL,
	[o] [uniqueidentifier] NOT NULL,
	[c] [int] NOT NULL
PRIMARY KEY CLUSTERED 
(
	[t] ASC,
	[o] ASC,
	[c] ASC
)
)

-- We pass the type of the top-level object or objects we''re collecting (multiple if the @root_id is null) so that if we''re in schema delete
-- we skip collecting related objects in non-polymorphic relationships since it is both unnecessary and can lead to failures (see MSCRM bug 108005)
exec p_CollectForCascadeRemoveLink @collect_entities_to_delete_all_levels,@is_delete_entity_schema,@root_otc,@isoffline;

-- exclude any duplicates; otherwise we can get PK contraint violation
insert into @entities_to_removelink(o,t,c,s)
	select distinct cr.o,cr.t,cr.c,0 from #CascadeRemoveLinkWorkingSpace cr
	left join @collect_entities_to_delete_all_levels ed on cr.o=ed.o and cr.t=ed.t
	where ed.t is null;

-- exclude any duplicates; otherwise we can get PK contraint violation
insert into @entities_to_update_to_dbnull(o,t,c,s)
	select distinct cr.o,cr.t,cr.c,0 from #CascadeRemoveLinkWorkingSpace cr
	left join @collect_entities_to_delete_all_levels ed on cr.o=ed.o and cr.t=ed.t
	where ed.t is not null;

-- D)

insert into @t(a,o,t,c,s) 
	select @action_update_to_dbnull,o,t,c,s from @entities_to_update_to_dbnull
	order by t,c;

set @collectedrecordcount = @@ROWCOUNT;

insert into @t(a,o,t,c,s) 
	select @action_update_to_self_reference,o,t,c,s from @entities_to_update_to_self_reference
	order by t,c;

set @collectedrecordcount = @collectedrecordcount + @@ROWCOUNT;

insert into @t(a,o,t,c,s) 
	select @action_remove_link,o,t,c,s from @entities_to_removelink;

set @collectedrecordcount = @collectedrecordcount + @@ROWCOUNT;

-- Not all entities that exist in the system are saved into the CascadeDeleteEntitiesTopologicalOrder table:
-- the entities that do not have any relationships (referencing or referenced) where CascadeDelete rule is 
-- Cascade, RemoveLink or Restrict are not added to this table. Because of this, these entities are excluded
-- from the last insert (the inner join one). But we do need to add these entities to our final list 
-- and we should consider them as leaves in the topological order of all the entities from the system (so we need to delete them first).
insert into @t(a,o,t,c,s) 
	select @action_delete,o,t,c,s from @entities_to_delete ed
	left join CascadeDeleteEntitiesTopologicalOrder eto on ed.t = eto.ObjectTypeCode
	where eto.ObjectTypeCode is null
	order by t,c;

set @collectedrecordcount = @collectedrecordcount + @@ROWCOUNT;

-- Topologically sort entities from the Delete list based on their ObjectTypeCode: first the children, last the roots.
-- Only entities for which their ObjectTypeCode exist in the CascadeDeleteEntitiesTopologicalOrder will be returned by the inner join.
-- All other entities had been returned already by the previous query.
insert into @t(a,o,t,c,s) 
	select @action_delete,o,t,c,s from @entities_to_delete ed
	inner join CascadeDeleteEntitiesTopologicalOrder eto on ed.t = eto.ObjectTypeCode
	order by eto.OrderNumber,c;

set @collectedrecordcount = @collectedrecordcount + @@ROWCOUNT;

drop table #CascadeWorkingSpace;
drop table #CascadeRemoveLinkWorkingSpace;

select @collectedrecordcount as CollectedRecordCount
select i, a, o, t, c, s from @t order by i;

end;
go


', CAST(N'2017-04-10 13:43:33.210' AS DateTime), 2, 0)
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ClientUpdate]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
