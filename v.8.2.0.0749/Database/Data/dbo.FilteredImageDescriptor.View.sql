USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[FilteredImageDescriptor]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


--
-- report view for imagedescriptor
--
create view [dbo].[FilteredImageDescriptor] (
    [filetype],
    [imagedata],
    [imagedescriptorid],
    [imagetimestamp],
    [imageurl],
    [objectid],
    [objecttypecode],
    [size],
    [title]
) with view_metadata as
select
    [ImageDescriptor].[FileType],
    cast([ImageDescriptor].[ImageData] as varbinary(max)),
    [ImageDescriptor].[ImageDescriptorId],
    [ImageDescriptor].[ImageTimestamp],
    [ImageDescriptor].[ImageURL],
    [ImageDescriptor].[ObjectId],
    [ImageDescriptor].[ObjectTypeCode],
    [ImageDescriptor].[Size],
    [ImageDescriptor].[Title]
from ImageDescriptor

GO
