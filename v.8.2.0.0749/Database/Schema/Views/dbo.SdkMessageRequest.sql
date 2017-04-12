SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base view for SdkMessageRequest
--
create view [dbo].[SdkMessageRequest]
 (
    -- logical attributes
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],

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
    [PrimaryObjectTypeCode]
) with view_metadata as
select
    -- logical attributes
    [createdonbehalfby_sdkmessagerequest].[FullName],
    [createdonbehalfby_sdkmessagerequest].[YomiFullName],
    [modifiedonbehalfby_sdkmessagerequest].[FullName],
    [modifiedonbehalfby_sdkmessagerequest].[YomiFullName],

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
    [T1].[PrimaryObjectTypeCode]
from [SdkMessageRequestBase] [T1]
    left join [SystemUserBase] [createdonbehalfby_sdkmessagerequest] with(nolock) on ([T1].[CreatedOnBehalfBy] = [createdonbehalfby_sdkmessagerequest].[SystemUserId])
    left join [SystemUserBase] [modifiedonbehalfby_sdkmessagerequest] with(nolock) on ([T1].[ModifiedOnBehalfBy] = [modifiedonbehalfby_sdkmessagerequest].[SystemUserId])

		 left outer join [SdkMessageRequestBase] T2 on (T1.[SdkMessageRequestId] = T2.[SdkMessageRequestId]
			  AND T1.[SdkMessageRequestIdUnique] <> T2.[SdkMessageRequestIdUnique]
			  AND T1.CustomizationLevel = 0)
where T2.CustomizationLevel is null and T1.CustomizationLevel <> 2
GO
