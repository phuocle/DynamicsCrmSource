USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[StringMap]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for StringMap
--
create view [dbo].[StringMap]
 (

    -- physical attributes
    [ObjectTypeCode],
    [AttributeName],
    [AttributeValue],
    [LangId],
    [OrganizationId],
    [Value],
    [DisplayOrder],
    [VersionNumber],
    [StringMapId]
) with view_metadata as
select

    -- physical attribute
    [StringMapBase].[ObjectTypeCode],
    [StringMapBase].[AttributeName],
    [StringMapBase].[AttributeValue],
    [StringMapBase].[LangId],
    [StringMapBase].[OrganizationId],
    [StringMapBase].[Value],
    [StringMapBase].[DisplayOrder],
    [StringMapBase].[VersionNumber],
    [StringMapBase].[StringMapId]
from [StringMapBase] 

GO
