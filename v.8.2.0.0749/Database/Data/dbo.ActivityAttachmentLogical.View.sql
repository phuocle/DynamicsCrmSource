USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[ActivityAttachmentLogical]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- logical view for ActivityAttachmentLogical
--
create view [dbo].[ActivityAttachmentLogical]
 (


    ActivityId,
    Body,
    FileName,
    FileSize,
    MimeType,
    Subject,
    ActivitySubject,

    OwningUser,
    OwnerId,
    OwnerIdName,
    OwnerIdType,
    OwningBusinessUnit,

    -- physical attributes
    [AttachmentNumber],
    [ActivityMimeAttachmentId],
    [VersionNumber],
    [AttachmentId],
    [ObjectId],
    [ObjectTypeCode],
    [ComponentState],
    [OverwriteTime],
    [SolutionId],
    [SupportingSolutionId],
    [ActivityMimeAttachmentIdUnique],
    [IsManaged],
    [AttachmentContentId],
    [IsFollowed],
    [AnonymousLink]
) with view_metadata as
select

-- logical attributes
								ap.ActivityId,
								XXattachment.Body,
								XXattachment.FileName,
								XXattachment.FileSize,
								XXattachment.MimeType,
								XXattachment.Subject,
								ActivitySubject = coalesce(XXemail.Subject, XXappointment.Subject, XXtemplate.Subject),


	OwningUser = case  
				when coalesce(XXemail.OwnerIdType, XXappointment.OwnerIdType, XXtemplate.OwnerIdType) = 8 then 
					coalesce(XXemail.OwnerId,  XXappointment.OwnerId, XXtemplate.OwnerId)
				else null
				end,
	OwnerId = coalesce(XXemail.OwnerId, XXappointment.OwnerId, XXtemplate.OwnerId),
	OwnerIdName = coalesce(XXemail.OwnerIdName, XXappointment.OwnerIdName, XXtemplate.OwnerIdName),
	OwnerIdType = coalesce(XXemail.OwnerIdType, XXappointment.OwnerIdType, XXtemplate.OwnerIdType),
	OwningBusinessUnit = coalesce(XXemail.OwningBusinessUnit, XXappointment.OwningBusinessUnit, XXtemplate.OwningBusinessUnit),
    -- physical attribute
    [T1].[AttachmentNumber],
    [T1].[ActivityMimeAttachmentId],
    [T1].[VersionNumber],
    [T1].[AttachmentId],
    [T1].[ObjectId],
    [T1].[ObjectTypeCode],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ActivityMimeAttachmentIdUnique],
    [T1].[IsManaged],
    [T1].[AttachmentContentId],
    [T1].[IsFollowed],
    [T1].[AnonymousLink]
from [ActivityMimeAttachment] [T1]

	left join ActivityPointer ap with (nolock) on (T1.ObjectId = ap.ActivityId and T1.ObjectTypeCode <> 2010)
	left join Email XXemail with(nolock) on (T1.ObjectId = XXemail.ActivityId)
	left join Appointment XXappointment with(nolock) on (T1.ObjectId = XXappointment.ActivityId)
	left join Template XXtemplate with(nolock) on (T1.ObjectId = XXtemplate.TemplateId)
	left join Attachment XXattachment on (T1.AttachmentId = XXattachment.AttachmentId)
where T1.OverwriteTime = 0
GO
