

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
    ON OBJECT::[dbo].[FilteredAttachment] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredAttachment] TO [CRMReaderRole]
    AS [dbo];

