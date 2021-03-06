USE [D365_MSCRM]
GO
/****** Object:  StoredProcedure [dbo].[p_GetKeyMatchAttributes]    Script Date: 4/10/2017 9:59:58 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create procedure [dbo].[p_GetKeyMatchAttributes](@entityid uniqueidentifier, @referencedentityid uniqueidentifier) as
set nocount on

select a1.Name, a2.Name, a2.PhysicalName, a2.LogicalName
from RelationshipView rel, AttributeView a1, AttributeView a2
where rel.ReferencingEntityId = @entityid
  and rel.ReferencingAttributeId = a1.AttributeId
  and rel.ReferencedAttributeId = a2.AttributeId
  and a1.EntityId = @referencedentityid

GO
