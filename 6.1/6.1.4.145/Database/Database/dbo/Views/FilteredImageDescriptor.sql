

--
-- report view for imagedescriptor
--
create view dbo.[FilteredImageDescriptor] (
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
GRANT SELECT
    ON OBJECT::[dbo].[FilteredImageDescriptor] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredImageDescriptor] TO [CRMReaderRole]
    AS [dbo];

