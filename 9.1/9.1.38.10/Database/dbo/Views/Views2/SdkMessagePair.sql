


--
-- base view for SdkMessagePair
--
create view dbo.[SdkMessagePair]
 (
    -- logical attributes
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],

    -- physical attributes
    [ModifiedBy],
    [SdkMessagePairId],
    [CustomizationLevel],
    [CreatedOn],
    [SdkMessagePairIdUnique],
    [Endpoint],
    [OrganizationId],
    [CreatedBy],
    [ModifiedOn],
    [VersionNumber],
    [Namespace],
    [SdkMessageId],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [SdkMessageBindingInformation],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [OverwriteTime],
    [IsManaged],
    [IntroducedVersion],
    [DeprecatedVersion]
) with view_metadata as
select
    -- logical attributes
    [modifiedonbehalfby_sdkmessagepair].[YomiFullName],
    [modifiedonbehalfby_sdkmessagepair].[FullName],
    [createdonbehalfby_sdkmessagepair].[FullName],
    [createdonbehalfby_sdkmessagepair].[YomiFullName],

    -- physical attribute
    [T1].[ModifiedBy],
    [T1].[SdkMessagePairId],
    [T1].[CustomizationLevel],
    [T1].[CreatedOn],
    [T1].[SdkMessagePairIdUnique],
    [T1].[Endpoint],
    [T1].[OrganizationId],
    [T1].[CreatedBy],
    [T1].[ModifiedOn],
    [T1].[VersionNumber],
    [T1].[Namespace],
    [T1].[SdkMessageId],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedOnBehalfBy],
    [T1].[SdkMessageBindingInformation],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[IsManaged],
    [T1].[IntroducedVersion],
    [T1].[DeprecatedVersion]
from [SdkMessagePairBase] [T1]
    left join [SystemUserBase] [createdonbehalfby_sdkmessagepair] on ([T1].[CreatedOnBehalfBy] = [createdonbehalfby_sdkmessagepair].[SystemUserId])
    left join [SystemUserBase] [modifiedonbehalfby_sdkmessagepair] on ([T1].[ModifiedOnBehalfBy] = [modifiedonbehalfby_sdkmessagepair].[SystemUserId])
where T1.OverwriteTime = 0 AND T1.ComponentState = 0