


--
-- base view for workflowbinary
--
create view dbo.[workflowbinary]
 (
    -- logical attributes
    [FlowSessionIdName],
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [Data_Name],
    [ProcessName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [workflowbinaryId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [OwningBusinessUnit],
    [statecode],
    [statuscode],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [name],
    [Data],
    [FlowSessionId],
    [Metadata],
    [Process],
    [ReferenceName],
    [Type],
    [MimeType]
) with view_metadata as
select
    -- logical attributes
    [flowsession_workflowbinary_FlowSessionId].[Name],
    [lk_workflowbinary_createdby].[FullName],
    [lk_workflowbinary_createdby].[YomiFullName],
    [lk_workflowbinary_createdonbehalfby].[FullName],
    [lk_workflowbinary_createdonbehalfby].[YomiFullName],
    [lk_workflowbinary_modifiedby].[FullName],
    [lk_workflowbinary_modifiedby].[YomiFullName],
    [lk_workflowbinary_modifiedonbehalfby].[FullName],
    [lk_workflowbinary_modifiedonbehalfby].[YomiFullName],
    [FileAttachment_workflowbinary_Data].[FileName],
    [workflow_workflowbinary_Process].[Name],

    -- ownership entries
    OwnerId = [workflowbinaryBase].OwnerId,
    OwnerName = XXowner.Name,
    OwnerYomiName =  XXowner.YomiName,
    OwnerDsc = 0, -- DSC is removed, stub it to 0
    OwnerIdType = XXowner.OwnerIdType,
    OwningUser = case 
 		when XXowner.OwnerIdType= 8 then XXowner.OwnerId
		else null
		end,
    OwningTeam = case 
 		when XXowner.OwnerIdType= 9 then XXowner.OwnerId
		else null
		end,

    -- physical attribute
    [workflowbinaryBase].[workflowbinaryId],
    [workflowbinaryBase].[CreatedOn],
    [workflowbinaryBase].[CreatedBy],
    [workflowbinaryBase].[ModifiedOn],
    [workflowbinaryBase].[ModifiedBy],
    [workflowbinaryBase].[CreatedOnBehalfBy],
    [workflowbinaryBase].[ModifiedOnBehalfBy],
    [workflowbinaryBase].[OwningBusinessUnit],
    [workflowbinaryBase].[statecode],
    [workflowbinaryBase].[statuscode],
    [workflowbinaryBase].[VersionNumber],
    [workflowbinaryBase].[ImportSequenceNumber],
    [workflowbinaryBase].[OverriddenCreatedOn],
    [workflowbinaryBase].[TimeZoneRuleVersionNumber],
    [workflowbinaryBase].[UTCConversionTimeZoneCode],
    [workflowbinaryBase].[name],
    [workflowbinaryBase].[Data],
    [workflowbinaryBase].[FlowSessionId],
    [workflowbinaryBase].[Metadata],
    [workflowbinaryBase].[Process],
    [workflowbinaryBase].[ReferenceName],
    [workflowbinaryBase].[Type],
    [workflowbinaryBase].[MimeType]
from [workflowbinaryBase] 
    left join [FileAttachmentBase] [FileAttachment_workflowbinary_Data] on ([workflowbinaryBase].[Data] = [FileAttachment_workflowbinary_Data].[FileAttachmentId])
    left join [flowsessionBase] [flowsession_workflowbinary_FlowSessionId] on ([workflowbinaryBase].[FlowSessionId] = [flowsession_workflowbinary_FlowSessionId].[flowsessionId])
    left join [SystemUserBase] [lk_workflowbinary_createdby] on ([workflowbinaryBase].[CreatedBy] = [lk_workflowbinary_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_workflowbinary_createdonbehalfby] on ([workflowbinaryBase].[CreatedOnBehalfBy] = [lk_workflowbinary_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_workflowbinary_modifiedby] on ([workflowbinaryBase].[ModifiedBy] = [lk_workflowbinary_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_workflowbinary_modifiedonbehalfby] on ([workflowbinaryBase].[ModifiedOnBehalfBy] = [lk_workflowbinary_modifiedonbehalfby].[SystemUserId])
    left join [WorkflowBase] [workflow_workflowbinary_Process] on ([workflowbinaryBase].[Process] = [workflow_workflowbinary_Process].[WorkflowId] and [workflow_workflowbinary_Process].OverwriteTime = 0 and [workflow_workflowbinary_Process].ComponentState = 0)
    left join OwnerBase XXowner on ([workflowbinaryBase].OwnerId = XXowner.OwnerId)
