USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[EmailSearch]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for EmailSearch
--
create view [dbo].[EmailSearch]
 (

    -- physical attributes
    [EmailSearchId],
    [EmailAddress],
    [EmailColumnNumber],
    [ParentObjectId],
    [ParentObjectTypeCode],
    [VersionNumber]
) with view_metadata as
select

    -- physical attribute
    [EmailSearchBase].[EmailSearchId],
    [EmailSearchBase].[EmailAddress],
    [EmailSearchBase].[EmailColumnNumber],
    [EmailSearchBase].[ParentObjectId],
    [EmailSearchBase].[ParentObjectTypeCode],
    [EmailSearchBase].[VersionNumber]
from [EmailSearchBase] 

GO
