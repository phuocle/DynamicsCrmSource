USE [D365_MSCRM]
GO
/****** Object:  StoredProcedure [dbo].[p_GetTablesReferencing]    Script Date: 4/10/2017 9:59:58 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create procedure [dbo].[p_GetTablesReferencing](@tablename nvarchar(255) = null, @tableid uniqueidentifier = null) as
set nocount on

if @tablename is null and @tableid is null
begin
   RAISERROR ( 1074008071, 16, 127 ) WITH NOWAIT, SETERROR
   return
end 

if @tableid is null
begin
    select @tableid = EntityId
    from EntityView
    where Name = @tablename
end

select e2.*
from EntityView e1, RelationshipView, EntityView e2
where e1.EntityId = RelationshipView.ReferencingEntityId
	and e1.EntityId = @tableid
	and RelationshipView.ReferencedEntityId = e2.EntityId

GO
