

--
-- report view for attachment
--
create view dbo.[FilteredAttachment] (
    [attachmentid],
    [body],
    [filename],
    [filesize],
    [mimetype],
    [subject],
    [versionnumber]
) with view_metadata as
select
    [Attachment].[AttachmentId],
    [Attachment].[Body],
    [Attachment].[FileName],
    [Attachment].[FileSize],
    [Attachment].[MimeType],
    [Attachment].[Subject],
    [Attachment].[VersionNumber]
from Attachment

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredAttachment] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredAttachment] TO [CRMReaderRole]
    AS [dbo];

