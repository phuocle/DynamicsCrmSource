USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[SdkMessageRequestFieldLogical]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- logical view for SdkMessageRequestFieldLogical
--
create view [dbo].[SdkMessageRequestFieldLogical]
 (
    -- logical attributes
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [ModifiedOnBehalfByName],
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
    [ParameterBindingInformation]
) with view_metadata as
select
    -- logical attributes
    [createdonbehalfby_sdkmessagerequestfield].[YomiFullName],
    [createdonbehalfby_sdkmessagerequestfield].[FullName],
    [modifiedonbehalfby_sdkmessagerequestfield].[FullName],
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
    [T1].[ParameterBindingInformation]
from [SdkMessageRequestFieldBase] [T1]
    left join [SystemUserBase] [createdonbehalfby_sdkmessagerequestfield] with(nolock) on ([T1].[CreatedOnBehalfBy] = [createdonbehalfby_sdkmessagerequestfield].[SystemUserId])
    left join [SystemUserBase] [modifiedonbehalfby_sdkmessagerequestfield] with(nolock) on ([T1].[ModifiedOnBehalfBy] = [modifiedonbehalfby_sdkmessagerequestfield].[SystemUserId])

		 left outer join [SdkMessageRequestFieldBase] T2 on (T1.[SdkMessageRequestFieldId] = T2.[SdkMessageRequestFieldId]
			  AND T1.[SdkMessageRequestFieldIdUnique] <> T2.[SdkMessageRequestFieldIdUnique]
			  AND T1.CustomizationLevel = 0)
where T2.CustomizationLevel is null
GO
