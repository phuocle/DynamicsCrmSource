


--
-- base view for SdkMessageRequest
--
create view dbo.[SdkMessageRequest]
 (
    -- logical attributes
    [ModifiedOnBehalfByName],
    [CreatedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByYomiName],

    -- physical attributes
    [CustomizationLevel],
    [SdkMessagePairId],
    [ModifiedOn],
    [ModifiedBy],
    [OrganizationId],
    [VersionNumber],
    [SdkMessageRequestIdUnique],
    [Name],
    [CreatedOn],
    [CreatedBy],
    [SdkMessageRequestId],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [PrimaryObjectTypeCode],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [OverwriteTime],
    [IsManaged],
    [IntroducedVersion]
) with view_metadata as
select
    -- logical attributes
    [modifiedonbehalfby_sdkmessagerequest].[FullName],
    [createdonbehalfby_sdkmessagerequest].[FullName],
    [modifiedonbehalfby_sdkmessagerequest].[YomiFullName],
    [createdonbehalfby_sdkmessagerequest].[YomiFullName],

    -- physical attribute
    [T1].[CustomizationLevel],
    [T1].[SdkMessagePairId],
    [T1].[ModifiedOn],
    [T1].[ModifiedBy],
    [T1].[OrganizationId],
    [T1].[VersionNumber],
    [T1].[SdkMessageRequestIdUnique],
    [T1].[Name],
    [T1].[CreatedOn],
    [T1].[CreatedBy],
    [T1].[SdkMessageRequestId],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedOnBehalfBy],
    [T1].[PrimaryObjectTypeCode],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[IsManaged],
    [T1].[IntroducedVersion]
from [SdkMessageRequestBase] [T1]
    left join [SystemUserBase] [createdonbehalfby_sdkmessagerequest] on ([T1].[CreatedOnBehalfBy] = [createdonbehalfby_sdkmessagerequest].[SystemUserId])
    left join [SystemUserBase] [modifiedonbehalfby_sdkmessagerequest] on ([T1].[ModifiedOnBehalfBy] = [modifiedonbehalfby_sdkmessagerequest].[SystemUserId])
where T1.OverwriteTime = 0 AND T1.ComponentState = 0