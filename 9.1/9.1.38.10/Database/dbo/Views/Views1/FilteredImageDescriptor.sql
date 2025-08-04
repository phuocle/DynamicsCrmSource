

--
-- report view for imagedescriptor
--
create view dbo.[FilteredImageDescriptor] 
(
    [colordepthbits],
    [fileid],
    [filelocation],
    [filename],
    [filesizebytes],
    [filetype],
    [fullimagedata],
    [fullimageurl],
    [imagedata],
    [imagedescription],
    [imagedescriptorid],
    [imagepixelheight],
    [imagepixelwidth],
    [imagetags],
    [imagetimestamp],
    [imageurl],
    [mimetype],
    [objectid],
    [objecttypecode],
    [size],
    [title]
) with view_metadata as
select
    [ImageDescriptor].[ColorDepthBits],
    [ImageDescriptor].[FileId],
    [ImageDescriptor].[FileLocation],
    [ImageDescriptor].[FileName],
    [ImageDescriptor].[FileSizeBytes],
    [ImageDescriptor].[FileType],
    cast([ImageDescriptor].[FullImageData] as varbinary(max)),
    [ImageDescriptor].[FullImageURL],
    cast([ImageDescriptor].[ImageData] as varbinary(max)),
    [ImageDescriptor].[ImageDescription],
    [ImageDescriptor].[ImageDescriptorId],
    [ImageDescriptor].[ImagePixelHeight],
    [ImageDescriptor].[ImagePixelWidth],
    [ImageDescriptor].[ImageTags],
    [ImageDescriptor].[ImageTimestamp],
    [ImageDescriptor].[ImageURL],
    [ImageDescriptor].[MimeType],
    [ImageDescriptor].[ObjectId],
    [ImageDescriptor].[ObjectTypeCode],
    [ImageDescriptor].[Size],
    [ImageDescriptor].[Title]
from ImageDescriptor

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredImageDescriptor] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredImageDescriptor] TO [CRMReaderRole]
    AS [dbo];

