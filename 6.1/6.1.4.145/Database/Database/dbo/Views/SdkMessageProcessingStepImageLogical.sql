


--
-- logical view for SdkMessageProcessingStepImageLogical
--
create view dbo.[SdkMessageProcessingStepImageLogical]
 (
    -- logical attributes
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [ModifiedByName],
    [ModifiedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [CreatedByName],

    -- physical attributes
    [ModifiedBy],
    [SdkMessageProcessingStepId],
    [ModifiedOn],
    [VersionNumber],
    [OrganizationId],
    [SdkMessageProcessingStepImageId],
    [CreatedOn],
    [EntityAlias],
    [CustomizationLevel],
    [CreatedBy],
    [SdkMessageProcessingStepImageIdUnique],
    [ImageType],
    [RelatedAttributeName],
    [MessagePropertyName],
    [Attributes],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [IsManaged],
    [ComponentState],
    [OverwriteTime],
    [SolutionId],
    [SupportingSolutionId],
    [Name],
    [Description],
    [IsCustomizable],
    [IntroducedVersion]
) with view_metadata as
select
    -- logical attributes
    [modifiedonbehalfby_sdkmessageprocessingstepimage].[YomiFullName],
    [createdonbehalfby_sdkmessageprocessingstepimage].[FullName],
    [modifiedby_sdkmessageprocessingstepimage].[FullName],
    [modifiedonbehalfby_sdkmessageprocessingstepimage].[FullName],
    [createdonbehalfby_sdkmessageprocessingstepimage].[YomiFullName],
    [createdby_sdkmessageprocessingstepimage].[FullName],

    -- physical attribute
    [T1].[ModifiedBy],
    [T1].[SdkMessageProcessingStepId],
    [T1].[ModifiedOn],
    [T1].[VersionNumber],
    [T1].[OrganizationId],
    [T1].[SdkMessageProcessingStepImageId],
    [T1].[CreatedOn],
    [T1].[EntityAlias],
    [T1].[CustomizationLevel],
    [T1].[CreatedBy],
    [T1].[SdkMessageProcessingStepImageIdUnique],
    [T1].[ImageType],
    [T1].[RelatedAttributeName],
    [T1].[MessagePropertyName],
    [T1].[Attributes],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedOnBehalfBy],
    [T1].[IsManaged],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[Name],
    [T1].[Description],
    [T1].[IsCustomizable],
    [T1].[IntroducedVersion]
from [SdkMessageProcessingStepImageBase] [T1]
    left join [SystemUserBase] [createdby_sdkmessageprocessingstepimage] with(nolock) on ([T1].[CreatedBy] = [createdby_sdkmessageprocessingstepimage].[SystemUserId])
    left join [SystemUserBase] [createdonbehalfby_sdkmessageprocessingstepimage] with(nolock) on ([T1].[CreatedOnBehalfBy] = [createdonbehalfby_sdkmessageprocessingstepimage].[SystemUserId])
    left join [SystemUserBase] [modifiedby_sdkmessageprocessingstepimage] with(nolock) on ([T1].[ModifiedBy] = [modifiedby_sdkmessageprocessingstepimage].[SystemUserId])
    left join [SystemUserBase] [modifiedonbehalfby_sdkmessageprocessingstepimage] with(nolock) on ([T1].[ModifiedOnBehalfBy] = [modifiedonbehalfby_sdkmessageprocessingstepimage].[SystemUserId])
where T1.OverwriteTime = 0