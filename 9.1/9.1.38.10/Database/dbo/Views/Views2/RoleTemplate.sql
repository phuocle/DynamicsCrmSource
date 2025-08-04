


--
-- base view for RoleTemplate
--
create view dbo.[RoleTemplate]
 (

    -- physical attributes
    [RoleTemplateId],
    [Name],
    [Upgrading]
) with view_metadata as
select

    -- physical attribute
    [RoleTemplateBase].[RoleTemplateId],
    [RoleTemplateBase].[Name],
    [RoleTemplateBase].[Upgrading]
from [RoleTemplateBase] 
