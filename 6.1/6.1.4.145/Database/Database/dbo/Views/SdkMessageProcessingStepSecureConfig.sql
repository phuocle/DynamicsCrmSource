


--
-- base view for SdkMessageProcessingStepSecureConfig
--
create view dbo.[SdkMessageProcessingStepSecureConfig]
 (
    -- logical attributes
    [CreatedByName],
    [ModifiedByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],

    -- physical attributes
    [CustomizationLevel],
    [CreatedOn],
    [SecureConfig],
    [SdkMessageProcessingStepSecureConfigId],
    [ModifiedBy],
    [SdkMessageProcessingStepSecureConfigIdUnique],
    [ModifiedOn],
    [OrganizationId],
    [CreatedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy]
) with view_metadata as
select
    -- logical attributes
    [createdby_sdkmessageprocessingstepsecureconfig].[FullName],
    [modifiedby_sdkmessageprocessingstepsecureconfig].[FullName],
    [modifiedonbehalfby_sdkmessageprocessingstepsecureconfig].[YomiFullName],
    [createdonbehalfby_sdkmessageprocessingstepsecureconfig].[FullName],
    [createdonbehalfby_sdkmessageprocessingstepsecureconfig].[YomiFullName],
    [modifiedonbehalfby_sdkmessageprocessingstepsecureconfig].[FullName],

    -- physical attribute
    [T1].[CustomizationLevel],
    [T1].[CreatedOn],
    [T1].[SecureConfig],
    [T1].[SdkMessageProcessingStepSecureConfigId],
    [T1].[ModifiedBy],
    [T1].[SdkMessageProcessingStepSecureConfigIdUnique],
    [T1].[ModifiedOn],
    [T1].[OrganizationId],
    [T1].[CreatedBy],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedOnBehalfBy]
from [SdkMessageProcessingStepSecureConfigBase] [T1]
    left join [SystemUserBase] [createdby_sdkmessageprocessingstepsecureconfig] with(nolock) on ([T1].[CreatedBy] = [createdby_sdkmessageprocessingstepsecureconfig].[SystemUserId])
    left join [SystemUserBase] [createdonbehalfby_sdkmessageprocessingstepsecureconfig] with(nolock) on ([T1].[CreatedOnBehalfBy] = [createdonbehalfby_sdkmessageprocessingstepsecureconfig].[SystemUserId])
    left join [SystemUserBase] [modifiedby_sdkmessageprocessingstepsecureconfig] with(nolock) on ([T1].[ModifiedBy] = [modifiedby_sdkmessageprocessingstepsecureconfig].[SystemUserId])
    left join [SystemUserBase] [modifiedonbehalfby_sdkmessageprocessingstepsecureconfig] with(nolock) on ([T1].[ModifiedOnBehalfBy] = [modifiedonbehalfby_sdkmessageprocessingstepsecureconfig].[SystemUserId])

		 left outer join [SdkMessageProcessingStepSecureConfigBase] T2 on (T1.[SdkMessageProcessingStepSecureConfigId] = T2.[SdkMessageProcessingStepSecureConfigId]
			  AND T1.[SdkMessageProcessingStepSecureConfigIdUnique] <> T2.[SdkMessageProcessingStepSecureConfigIdUnique]
			  AND T1.CustomizationLevel = 0)
where T2.CustomizationLevel is null and T1.CustomizationLevel <> 2