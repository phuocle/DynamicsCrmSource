USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[RoleTemplate]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for RoleTemplate
--
create view [dbo].[RoleTemplate]
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

GO
