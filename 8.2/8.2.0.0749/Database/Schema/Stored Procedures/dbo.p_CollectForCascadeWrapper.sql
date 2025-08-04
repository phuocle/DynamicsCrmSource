SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


create procedure [dbo].[p_CollectForCascadeWrapper]
(
	@root_ids EntityIdCollection READONLY, -- root entity object ids to be deleted or 0 records if entities with specified object type code
	@root_otc int, -- object type code for the entity
	@isoffline int, -- is Offline or not; if the call is comming from Outlook Offline or not
	@managed_solution_operation int,  -- 1 if we're doing the operation during a solution install/uninstall, otherwise 0
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

declare @empty_id as uniqueidentifier=N'00000000-0000-0000-0000-000000000000';
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
-- Usually we should have returned at least the one row with object type code -1 then we've hit a Restrict relationship.
-- In this case we just add only one row action code of restrict to signal the caller that a Restrict relationship 
-- has been hit and exit the function.
-- Add all rows to the Delete list except for those that have depth -1. We get rows with depth -1 
-- only when we do schema delete (execute CollectForSchemaDelete) by adding all root entities 
-- (that have the specififed root object type code) to the list with depth -1. The entities
-- with -1 depth won't be deleted using notification pipeline as we do for the other delete entities, 
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

-- We pass the type of the top-level object or objects we're collecting (multiple if the @root_id is null) so that if we're in schema delete
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
GO
