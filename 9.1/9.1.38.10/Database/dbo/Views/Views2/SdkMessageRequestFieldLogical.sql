


--
-- logical view for SdkMessageRequestFieldLogical
--
create view dbo.[SdkMessageRequestFieldLogical]
 (
    -- logical attributes
    [ModifiedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],

    -- physical attributes
    [CreatedOn],
    [SdkMessageRequestFieldIdUnique],
    [Optional],
    [CreatedBy],
    [Position],
    [ClrParser],
    [PublicName],
    [SdkMessageRequestId],
    [ModifiedOn],
    [Parser],
    [CustomizationLevel],
    [OrganizationId],
    [SdkMessageRequestFieldId],
    [ModifiedBy],
    [Name],
    [VersionNumber],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [FieldMask],
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
    [modifiedonbehalfby_sdkmessagerequestfield].[FullName],
    [createdonbehalfby_sdkmessagerequestfield].[YomiFullName],
    [createdonbehalfby_sdkmessagerequestfield].[FullName],
    [modifiedonbehalfby_sdkmessagerequestfield].[YomiFullName],

    -- physical attribute
    [T1].[CreatedOn],
    [T1].[SdkMessageRequestFieldIdUnique],
    [T1].[Optional],
    [T1].[CreatedBy],
    [T1].[Position],
    [T1].[ClrParser],
    [T1].[PublicName],
    [T1].[SdkMessageRequestId],
    [T1].[ModifiedOn],
    [T1].[Parser],
    [T1].[CustomizationLevel],
    [T1].[OrganizationId],
    [T1].[SdkMessageRequestFieldId],
    [T1].[ModifiedBy],
    [T1].[Name],
    [T1].[VersionNumber],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedOnBehalfBy],
    [T1].[FieldMask],
    [T1].[ParameterBindingInformation],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[IsManaged],
    [T1].[IntroducedVersion]
from [SdkMessageRequestFieldBase] [T1]
    left join [SystemUserBase] [createdonbehalfby_sdkmessagerequestfield] on ([T1].[CreatedOnBehalfBy] = [createdonbehalfby_sdkmessagerequestfield].[SystemUserId])
    left join [SystemUserBase] [modifiedonbehalfby_sdkmessagerequestfield] on ([T1].[ModifiedOnBehalfBy] = [modifiedonbehalfby_sdkmessagerequestfield].[SystemUserId])
where T1.OverwriteTime = 0