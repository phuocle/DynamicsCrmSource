


--
-- base view for SdkMessageResponseField
--
create view dbo.[SdkMessageResponseField]
 (
    -- logical attributes
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [ModifiedOnBehalfByName],

    -- physical attributes
    [PublicName],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOn],
    [SdkMessageResponseFieldIdUnique],
    [Value],
    [OrganizationId],
    [Formatter],
    [ClrFormatter],
    [CustomizationLevel],
    [Name],
    [CreatedBy],
    [Position],
    [VersionNumber],
    [SdkMessageResponseFieldId],
    [SdkMessageResponseId],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [ParameterBindingInformation],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [OverwriteTime],
    [IsManaged],
    [IntroducedVersion]
) with view_metadata as
select
    -- logical attributes
    [createdonbehalfby_sdkmessageresponsefield].[YomiFullName],
    [modifiedonbehalfby_sdkmessageresponsefield].[YomiFullName],
    [createdonbehalfby_sdkmessageresponsefield].[FullName],
    [modifiedonbehalfby_sdkmessageresponsefield].[FullName],

    -- physical attribute
    [T1].[PublicName],
    [T1].[ModifiedOn],
    [T1].[ModifiedBy],
    [T1].[CreatedOn],
    [T1].[SdkMessageResponseFieldIdUnique],
    [T1].[Value],
    [T1].[OrganizationId],
    [T1].[Formatter],
    [T1].[ClrFormatter],
    [T1].[CustomizationLevel],
    [T1].[Name],
    [T1].[CreatedBy],
    [T1].[Position],
    [T1].[VersionNumber],
    [T1].[SdkMessageResponseFieldId],
    [T1].[SdkMessageResponseId],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedOnBehalfBy],
    [T1].[ParameterBindingInformation],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[IsManaged],
    [T1].[IntroducedVersion]
from [SdkMessageResponseFieldBase] [T1]
    left join [SystemUserBase] [createdonbehalfby_sdkmessageresponsefield] on ([T1].[CreatedOnBehalfBy] = [createdonbehalfby_sdkmessageresponsefield].[SystemUserId])
    left join [SystemUserBase] [modifiedonbehalfby_sdkmessageresponsefield] on ([T1].[ModifiedOnBehalfBy] = [modifiedonbehalfby_sdkmessageresponsefield].[SystemUserId])
where T1.OverwriteTime = 0 AND T1.ComponentState = 0