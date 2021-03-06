USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[StatusMap]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for StatusMap
--
create view [dbo].[StatusMap]
 (

    -- physical attributes
    [ObjectTypeCode],
    [OrganizationId],
    [State],
    [Status],
    [IsDefault],
    [StatusMapId],
    [VersionNumber]
) with view_metadata as
select

    -- physical attribute
    [StatusMapBase].[ObjectTypeCode],
    [StatusMapBase].[OrganizationId],
    [StatusMapBase].[State],
    [StatusMapBase].[Status],
    [StatusMapBase].[IsDefault],
    [StatusMapBase].[StatusMapId],
    [StatusMapBase].[VersionNumber]
from [StatusMapBase] 

GO
