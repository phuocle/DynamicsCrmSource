USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[SdkMessageResponse]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for SdkMessageResponse
--
create view [dbo].[SdkMessageResponse]
 (
    -- logical attributes
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],

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
    [ModifiedOnBehalfBy]
) with view_metadata as
select
    -- logical attributes
    [createdonbehalfby_sdkmessageresponse].[FullName],
    [createdonbehalfby_sdkmessageresponse].[YomiFullName],
    [modifiedonbehalfby_sdkmessageresponse].[YomiFullName],
    [modifiedonbehalfby_sdkmessageresponse].[FullName],

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
    [T1].[ModifiedOnBehalfBy]
from [SdkMessageResponseBase] [T1]
    left join [SystemUserBase] [createdonbehalfby_sdkmessageresponse] with(nolock) on ([T1].[CreatedOnBehalfBy] = [createdonbehalfby_sdkmessageresponse].[SystemUserId])
    left join [SystemUserBase] [modifiedonbehalfby_sdkmessageresponse] with(nolock) on ([T1].[ModifiedOnBehalfBy] = [modifiedonbehalfby_sdkmessageresponse].[SystemUserId])

		 left outer join [SdkMessageResponseBase] T2 on (T1.[SdkMessageResponseId] = T2.[SdkMessageResponseId]
			  AND T1.[SdkMessageResponseIdUnique] <> T2.[SdkMessageResponseIdUnique]
			  AND T1.CustomizationLevel = 0)
where T2.CustomizationLevel is null and T1.CustomizationLevel <> 2
GO
