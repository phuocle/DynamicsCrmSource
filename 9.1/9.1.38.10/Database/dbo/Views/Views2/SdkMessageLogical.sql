


--
-- logical view for SdkMessageLogical
--
create view dbo.[SdkMessageLogical]
 (
    -- logical attributes
    [ModifiedByName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [CreatedByName],

    -- physical attributes
    [OrganizationId],
    [IsPrivate],
    [SdkMessageId],
    [CreatedBy],
    [CategoryName],
    [CustomizationLevel],
    [ModifiedOn],
    [ModifiedBy],
    [SdkMessageIdUnique],
    [Expand],
    [AutoTransact],
    [VersionNumber],
    [CreatedOn],
    [Availability],
    [Name],
    [Template],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [IsValidForExecuteAsync],
    [IsReadOnly],
    [ThrottleSettings],
    [IsActive],
    [WorkflowSdkStepEnabled],
    [SolutionId],
    [ComponentState],
    [OverwriteTime],
    [IsManaged],
    [IntroducedVersion],
    [SupportingSolutionId],
    [ExecutePrivilegeName]
) with view_metadata as
select
    -- logical attributes
    [modifiedby_sdkmessage].[FullName],
    [createdonbehalfbysdkmessage].[YomiFullName],
    [createdonbehalfbysdkmessage].[FullName],
    [modifiedonbehalfby_sdkmessage].[YomiFullName],
    [modifiedonbehalfby_sdkmessage].[FullName],
    [createdby_sdkmessage].[FullName],

    -- physical attribute
    [T1].[OrganizationId],
    [T1].[IsPrivate],
    [T1].[SdkMessageId],
    [T1].[CreatedBy],
    [T1].[CategoryName],
    [T1].[CustomizationLevel],
    [T1].[ModifiedOn],
    [T1].[ModifiedBy],
    [T1].[SdkMessageIdUnique],
    [T1].[Expand],
    [T1].[AutoTransact],
    [T1].[VersionNumber],
    [T1].[CreatedOn],
    [T1].[Availability],
    [T1].[Name],
    [T1].[Template],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedOnBehalfBy],
    [T1].[IsValidForExecuteAsync],
    [T1].[IsReadOnly],
    [T1].[ThrottleSettings],
    [T1].[IsActive],
    [T1].[WorkflowSdkStepEnabled],
    [T1].[SolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[IsManaged],
    [T1].[IntroducedVersion],
    [T1].[SupportingSolutionId],
    [T1].[ExecutePrivilegeName]
from [SdkMessageBase] [T1]
    left join [SystemUserBase] [createdby_sdkmessage] on ([T1].[CreatedBy] = [createdby_sdkmessage].[SystemUserId])
    left join [SystemUserBase] [createdonbehalfbysdkmessage] on ([T1].[CreatedOnBehalfBy] = [createdonbehalfbysdkmessage].[SystemUserId])
    left join [SystemUserBase] [modifiedby_sdkmessage] on ([T1].[ModifiedBy] = [modifiedby_sdkmessage].[SystemUserId])
    left join [SystemUserBase] [modifiedonbehalfby_sdkmessage] on ([T1].[ModifiedOnBehalfBy] = [modifiedonbehalfby_sdkmessage].[SystemUserId])
where T1.OverwriteTime = 0