USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[FilteredAttachment]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
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
