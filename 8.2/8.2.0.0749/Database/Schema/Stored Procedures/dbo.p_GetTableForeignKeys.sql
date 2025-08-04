SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


create procedure [dbo].[p_GetTableForeignKeys](
    @tablename nvarchar(255) = null,
    @tableid uniqueidentifier = null)
as;
begin;
    set nocount on;

    if (@tablename is null and @tableid is null)
    begin;
        raiserror(1074008071, 16, 127) with nowait, seterror;
        return;
    end; 

    if (@tableid is null)
    begin;
        select @tableid = EntityId
        from EntityView
        where Name = @tablename;
    end;

    select rel.RelationshipId as id,
           rel.ReferencingEntityId as referencingentity,
           rel.ReferencedEntityId,
           0 as primarykey, 
           ev.Name,
           ev.PhysicalName,
           ev.LogicalName,
           rel.Name as relationshipname
    from RelationshipView rel
         inner join EntityView ev
             on rel.ReferencedEntityId = ev.EntityId
    where rel.ReferencingEntityId = @tableid;
end;
GO
