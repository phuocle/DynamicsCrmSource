


--
-- base view for FileAttachment
--
create view dbo.[FileAttachment]
 (

    -- physical attributes
    [FileAttachmentId],
    [FilePointer],
    [FileName],
    [MimeType],
    [Prefix],
    [StoragePointer],
    [ObjectId],
    [ObjectTypeCode],
    [VersionNumber],
    [CreatedOn],
    [ObjectIdTypeCode],
    [RegardingFieldName],
    [FileSizeInBytes],
    [Body],
    [IsCommitted]
) with view_metadata as
select

    -- physical attribute
    [FileAttachmentBase].[FileAttachmentId],
    [FileAttachmentBase].[FilePointer],
    [FileAttachmentBase].[FileName],
    [FileAttachmentBase].[MimeType],
    [FileAttachmentBase].[Prefix],
    [FileAttachmentBase].[StoragePointer],
    [FileAttachmentBase].[ObjectId],
    [FileAttachmentBase].[ObjectTypeCode],
    [FileAttachmentBase].[VersionNumber],
    [FileAttachmentBase].[CreatedOn],
    [FileAttachmentBase].[ObjectIdTypeCode],
    [FileAttachmentBase].[RegardingFieldName],
    [FileAttachmentBase].[FileSizeInBytes],
    [FileAttachmentBase].[Body],
    [FileAttachmentBase].[IsCommitted]
from [FileAttachmentBase] 
