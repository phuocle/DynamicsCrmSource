


--
-- logical view for SdkMessageResponseLogical
--
create view dbo.[SdkMessageResponseLogical]
 (
    -- logical attributes
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],

    -- physical attributes
    [VersionNumber],
    [SdkMessageResponseIdUnique],
    [ModifiedBy],
    [CustomizationLevel],
    [SdkMessageRequestId],
    [CreatedBy],
    [ModifiedOn],
    [CreatedOn],
    [OrganizationId],
    [SdkMessageResponseId],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [OverwriteTime],
    [IsManaged],
    [IntroducedVersion]
) with view_metadata as
select
    -- logical attributes
    [modifiedonbehalfby_sdkmessageresponse].[YomiFullName],
    [modifiedonbehalfby_sdkmessageresponse].[FullName],
    [createdonbehalfby_sdkmessageresponse].[FullName],
    [createdonbehalfby_sdkmessageresponse].[YomiFullName],

    -- physical attribute
    [T1].[VersionNumber],
    [T1].[SdkMessageResponseIdUnique],
    [T1].[ModifiedBy],
    [T1].[CustomizationLevel],
    [T1].[SdkMessageRequestId],
    [T1].[CreatedBy],
    [T1].[ModifiedOn],
    [T1].[CreatedOn],
    [T1].[OrganizationId],
    [T1].[SdkMessageResponseId],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedOnBehalfBy],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[IsManaged],
    [T1].[IntroducedVersion]
from [SdkMessageResponseBase] [T1]
    left join [SystemUserBase] [createdonbehalfby_sdkmessageresponse] on ([T1].[CreatedOnBehalfBy] = [createdonbehalfby_sdkmessageresponse].[SystemUserId])
    left join [SystemUserBase] [modifiedonbehalfby_sdkmessageresponse] on ([T1].[ModifiedOnBehalfBy] = [modifiedonbehalfby_sdkmessageresponse].[SystemUserId])
where T1.OverwriteTime = 0