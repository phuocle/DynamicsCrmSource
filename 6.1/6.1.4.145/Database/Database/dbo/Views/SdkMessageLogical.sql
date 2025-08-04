


--
-- logical view for SdkMessageLogical
--
create view dbo.[SdkMessageLogical]
 (
    -- logical attributes
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByName],
    [CreatedByName],
    [CreatedOnBehalfByName],
    [ModifiedOnBehalfByName],

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
    [ThrottleSettings],
    [IsActive]
) with view_metadata as
select
    -- logical attributes
    [createdonbehalfbysdkmessage].[YomiFullName],
    [modifiedonbehalfby_sdkmessage].[YomiFullName],
    [modifiedby_sdkmessage].[FullName],
    [createdby_sdkmessage].[FullName],
    [createdonbehalfbysdkmessage].[FullName],
    [modifiedonbehalfby_sdkmessage].[FullName],

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
    [T1].[ThrottleSettings],
    [T1].[IsActive]
from [SdkMessageBase] [T1]
    left join [SystemUserBase] [createdby_sdkmessage] with(nolock) on ([T1].[CreatedBy] = [createdby_sdkmessage].[SystemUserId])
    left join [SystemUserBase] [createdonbehalfbysdkmessage] with(nolock) on ([T1].[CreatedOnBehalfBy] = [createdonbehalfbysdkmessage].[SystemUserId])
    left join [SystemUserBase] [modifiedby_sdkmessage] with(nolock) on ([T1].[ModifiedBy] = [modifiedby_sdkmessage].[SystemUserId])
    left join [SystemUserBase] [modifiedonbehalfby_sdkmessage] with(nolock) on ([T1].[ModifiedOnBehalfBy] = [modifiedonbehalfby_sdkmessage].[SystemUserId])

		 left outer join [SdkMessageBase] T2 on (T1.[SdkMessageId] = T2.[SdkMessageId]
			  AND T1.[SdkMessageIdUnique] <> T2.[SdkMessageIdUnique]
			  AND T1.CustomizationLevel = 0)
where T2.CustomizationLevel is null