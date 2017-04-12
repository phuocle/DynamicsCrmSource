SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for attachment
--
create view [dbo].[FilteredAttachment] (
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
GRANT SELECT ON  [dbo].[FilteredAttachment] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredAttachment] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
