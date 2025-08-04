SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


create procedure [dbo].[p_GetTablePrimaryKey](
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

    select AttributeId as id,
           EntityId as referencingentity,
           null,
           IsPKAttribute as primarykey,
           null as relationshipname,
           null as name
    from AttributeView
    where EntityId = @tableid
          and IsPKAttribute = 1;
end;
GO
