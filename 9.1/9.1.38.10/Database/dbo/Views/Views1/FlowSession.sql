


--
-- base view for FlowSession
--
create view dbo.[FlowSession]
 (
    -- logical attributes
    [AdditionalContext_Name],
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [Outputs_Name],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [flowsessionId],
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
    [Name],
    [Gateway],
    [Context],
    [AdditionalContext],
    [CompletedOn],
    [CorrelationId],
    [ErrorCode],
    [ErrorMessage],
    [Outputs],
    [StartedOn],
    [RegardingObjectId],
    [ProcessVersion],
    [RegardingObjectTypeCode],
    [RegardingObjectIdName],
    [RegardingObjectIdYomiName]
) with view_metadata as
select
    -- logical attributes
    [FileAttachment_FlowSession_AdditionalContext].[FileName],
    [lk_flowsession_createdby].[FullName],
    [lk_flowsession_createdby].[YomiFullName],
    [lk_flowsession_createdonbehalfby].[FullName],
    [lk_flowsession_createdonbehalfby].[YomiFullName],
    [lk_flowsession_modifiedby].[FullName],
    [lk_flowsession_modifiedby].[YomiFullName],
    [lk_flowsession_modifiedonbehalfby].[FullName],
    [lk_flowsession_modifiedonbehalfby].[YomiFullName],
    [FileAttachment_FlowSession_Outputs].[FileName],

    -- ownership entries
    OwnerId = [flowsessionBase].OwnerId,
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
    [flowsessionBase].[flowsessionId],
    [flowsessionBase].[CreatedOn],
    [flowsessionBase].[CreatedBy],
    [flowsessionBase].[ModifiedOn],
    [flowsessionBase].[ModifiedBy],
    [flowsessionBase].[CreatedOnBehalfBy],
    [flowsessionBase].[ModifiedOnBehalfBy],
    [flowsessionBase].[OwningBusinessUnit],
    [flowsessionBase].[statecode],
    [flowsessionBase].[statuscode],
    [flowsessionBase].[VersionNumber],
    [flowsessionBase].[ImportSequenceNumber],
    [flowsessionBase].[OverriddenCreatedOn],
    [flowsessionBase].[TimeZoneRuleVersionNumber],
    [flowsessionBase].[UTCConversionTimeZoneCode],
    [flowsessionBase].[Name],
    [flowsessionBase].[Gateway],
    [flowsessionBase].[Context],
    [flowsessionBase].[AdditionalContext],
    [flowsessionBase].[CompletedOn],
    [flowsessionBase].[CorrelationId],
    [flowsessionBase].[ErrorCode],
    [flowsessionBase].[ErrorMessage],
    [flowsessionBase].[Outputs],
    [flowsessionBase].[StartedOn],
    [flowsessionBase].[RegardingObjectId],
    [flowsessionBase].[ProcessVersion],
    [flowsessionBase].[RegardingObjectTypeCode],
    [flowsessionBase].[RegardingObjectIdName],
    [flowsessionBase].[RegardingObjectIdYomiName]
from [flowsessionBase] 
    left join [FileAttachmentBase] [FileAttachment_FlowSession_AdditionalContext] on ([flowsessionBase].[AdditionalContext] = [FileAttachment_FlowSession_AdditionalContext].[FileAttachmentId])
    left join [FileAttachmentBase] [FileAttachment_FlowSession_Outputs] on ([flowsessionBase].[Outputs] = [FileAttachment_FlowSession_Outputs].[FileAttachmentId])
    left join [SystemUserBase] [lk_flowsession_createdby] on ([flowsessionBase].[CreatedBy] = [lk_flowsession_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_flowsession_createdonbehalfby] on ([flowsessionBase].[CreatedOnBehalfBy] = [lk_flowsession_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_flowsession_modifiedby] on ([flowsessionBase].[ModifiedBy] = [lk_flowsession_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_flowsession_modifiedonbehalfby] on ([flowsessionBase].[ModifiedOnBehalfBy] = [lk_flowsession_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner on ([flowsessionBase].OwnerId = XXowner.OwnerId)
