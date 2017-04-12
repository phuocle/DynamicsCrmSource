SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
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
GRANT SELECT ON  [dbo].[FilteredImageDescriptor] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredImageDescriptor] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
