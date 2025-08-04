


--
-- logical view for ActivityAttachmentLogical
--
create view dbo.[ActivityAttachmentLogical]
 (


    ActivityId,
    Body,
    FileName,
    FileSize,
    MimeType,
    Subject,

    OwningUser,
    OwnerId,
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
    [AttachmentContentId]
) with view_metadata as
select

-- logical attributes
								XXemail.ActivityId,
								XXattachment.Body,
								XXattachment.FileName,
								XXattachment.FileSize,
								XXattachment.MimeType,
								XXattachment.Subject,

	OwningUser = case	
				when coalesce(XXemail.OwnerIdType, XXtemplate.OwnerIdType) = 8 then
						coalesce(XXemail.OwnerId, XXtemplate.OwnerId)
				else null
				end,
	OwnerId = coalesce(XXemail.OwnerId, XXtemplate.OwnerId), 
	OwnerIdType = coalesce(XXemail.OwnerIdType, XXtemplate.OwnerIdType), 
	OwningBusinessUnit = coalesce(XXemail.OwningBusinessUnit, XXtemplate.OwningBusinessUnit),
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
    [T1].[AttachmentContentId]
from [ActivityMimeAttachment] [T1]

	left join Email XXemail with(nolock) on (T1.ObjectId = XXemail.ActivityId)
	left join Template XXtemplate with(nolock) on (T1.ObjectId = XXtemplate.TemplateId)
	left join Attachment XXattachment on (T1.AttachmentId = XXattachment.AttachmentId)
where T1.OverwriteTime = 0