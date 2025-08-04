


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
    [ModifiedOnBehalfBy]
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
    [T1].[ModifiedOnBehalfBy]
from [SdkMessageResponseFieldBase] [T1]
    left join [SystemUserBase] [createdonbehalfby_sdkmessageresponsefield] with(nolock) on ([T1].[CreatedOnBehalfBy] = [createdonbehalfby_sdkmessageresponsefield].[SystemUserId])
    left join [SystemUserBase] [modifiedonbehalfby_sdkmessageresponsefield] with(nolock) on ([T1].[ModifiedOnBehalfBy] = [modifiedonbehalfby_sdkmessageresponsefield].[SystemUserId])

		 left outer join [SdkMessageResponseFieldBase] T2 on (T1.[SdkMessageResponseFieldId] = T2.[SdkMessageResponseFieldId]
			  AND T1.[SdkMessageResponseFieldIdUnique] <> T2.[SdkMessageResponseFieldIdUnique]
			  AND T1.CustomizationLevel = 0)
where T2.CustomizationLevel is null and T1.CustomizationLevel <> 2