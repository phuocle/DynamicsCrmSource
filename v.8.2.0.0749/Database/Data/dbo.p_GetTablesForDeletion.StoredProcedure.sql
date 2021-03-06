USE [D365_MSCRM]
GO
/****** Object:  StoredProcedure [dbo].[p_GetTablesForDeletion]    Script Date: 4/10/2017 9:59:58 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create procedure [dbo].[p_GetTablesForDeletion]
as;
begin;
    set nocount on;

    select e.BaseTableName as BaseTableName,
           e.ObjectTypeCode as ObjectTypeCode
    from EntityView e
         inner join AttributeView a
             on e.EntityId = a.EntityId
    where a.IsPKAttribute = 1
          and e.IsLogicalEntity = 0
          and exists (
                select 1
                from SubscriptionTrackingDeletedObject o
                where o.ObjectTypeCode = e.ObjectTypeCode)
          and e.IsDuplicateCheckSupported = 1 -- table contains both Replicated and DupDetection enabled entities
    order by e.PhysicalName;
end;
GO
