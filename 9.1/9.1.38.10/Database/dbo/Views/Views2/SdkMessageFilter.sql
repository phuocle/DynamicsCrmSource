


--
-- base view for SdkMessageFilter
--
create view dbo.[SdkMessageFilter]
 (
    -- logical attributes
    [SdkMessageIdName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [CreatedByName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByName],

    -- physical attributes
    [CreatedBy],
    [SdkMessageFilterId],
    [OrganizationId],
    [PrimaryObjectTypeCode],
    [VersionNumber],
    [ModifiedBy],
    [CustomizationLevel],
    [SecondaryObjectTypeCode],
    [SdkMessageFilterIdUnique],
    [ModifiedOn],
    [IsCustomProcessingStepAllowed],
    [CreatedOn],
    [Availability],
    [SdkMessageId],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [IsVisible],
    [WorkflowSdkStepEnabled],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [OverwriteTime],
    [IsManaged],
    [IntroducedVersion],
    [RestrictionLevel],
    [Name]
) with view_metadata as
select
    -- logical attributes
    [sdkmessageid_sdkmessagefilter].[Name],
    [createdonbehalfby_sdkmessagefilter].[FullName],
    [createdonbehalfby_sdkmessagefilter].[YomiFullName],
    [createdby_sdkmessagefilter].[FullName],
    [modifiedonbehalfby_sdkmessagefilter].[FullName],
    [modifiedonbehalfby_sdkmessagefilter].[YomiFullName],
    [modifiedby_sdkmessagefilter].[FullName],

    -- physical attribute
    [T1].[CreatedBy],
    [T1].[SdkMessageFilterId],
    [T1].[OrganizationId],
    [T1].[PrimaryObjectTypeCode],
    [T1].[VersionNumber],
    [T1].[ModifiedBy],
    [T1].[CustomizationLevel],
    [T1].[SecondaryObjectTypeCode],
    [T1].[SdkMessageFilterIdUnique],
    [T1].[ModifiedOn],
    [T1].[IsCustomProcessingStepAllowed],
    [T1].[CreatedOn],
    [T1].[Availability],
    [T1].[SdkMessageId],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedOnBehalfBy],
    [T1].[IsVisible],
    [T1].[WorkflowSdkStepEnabled],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[IsManaged],
    [T1].[IntroducedVersion],
    [T1].[RestrictionLevel],
    [T1].[Name]
from [SdkMessageFilterBase] [T1]
    left join [SystemUserBase] [createdby_sdkmessagefilter] on ([T1].[CreatedBy] = [createdby_sdkmessagefilter].[SystemUserId])
    left join [SystemUserBase] [createdonbehalfby_sdkmessagefilter] on ([T1].[CreatedOnBehalfBy] = [createdonbehalfby_sdkmessagefilter].[SystemUserId])
    left join [SystemUserBase] [modifiedby_sdkmessagefilter] on ([T1].[ModifiedBy] = [modifiedby_sdkmessagefilter].[SystemUserId])
    left join [SystemUserBase] [modifiedonbehalfby_sdkmessagefilter] on ([T1].[ModifiedOnBehalfBy] = [modifiedonbehalfby_sdkmessagefilter].[SystemUserId])
    left join [SdkMessageBase] [sdkmessageid_sdkmessagefilter] on ([T1].[SdkMessageId] = [sdkmessageid_sdkmessagefilter].[SdkMessageId] and [sdkmessageid_sdkmessagefilter].OverwriteTime = 0 and [sdkmessageid_sdkmessagefilter].ComponentState = 0)
where T1.OverwriteTime = 0 AND T1.ComponentState = 0