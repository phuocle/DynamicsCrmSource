SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical view for SdkMessagePairLogical
--
create view [dbo].[SdkMessagePairLogical]
 (
    -- logical attributes
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],

    -- physical attributes
    [ModifiedBy],
    [SdkMessagePairId],
    [CustomizationLevel],
    [CreatedOn],
    [SdkMessagePairIdUnique],
    [Endpoint],
    [OrganizationId],
    [CreatedBy],
    [ModifiedOn],
    [VersionNumber],
    [Namespace],
    [SdkMessageId],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [SdkMessageBindingInformation]
) with view_metadata as
select
    -- logical attributes
    [createdonbehalfby_sdkmessagepair].[FullName],
    [createdonbehalfby_sdkmessagepair].[YomiFullName],
    [modifiedonbehalfby_sdkmessagepair].[YomiFullName],
    [modifiedonbehalfby_sdkmessagepair].[FullName],

    -- physical attribute
    [T1].[ModifiedBy],
    [T1].[SdkMessagePairId],
    [T1].[CustomizationLevel],
    [T1].[CreatedOn],
    [T1].[SdkMessagePairIdUnique],
    [T1].[Endpoint],
    [T1].[OrganizationId],
    [T1].[CreatedBy],
    [T1].[ModifiedOn],
    [T1].[VersionNumber],
    [T1].[Namespace],
    [T1].[SdkMessageId],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedOnBehalfBy],
    [T1].[SdkMessageBindingInformation]
from [SdkMessagePairBase] [T1]
    left join [SystemUserBase] [createdonbehalfby_sdkmessagepair] with(nolock) on ([T1].[CreatedOnBehalfBy] = [createdonbehalfby_sdkmessagepair].[SystemUserId])
    left join [SystemUserBase] [modifiedonbehalfby_sdkmessagepair] with(nolock) on ([T1].[ModifiedOnBehalfBy] = [modifiedonbehalfby_sdkmessagepair].[SystemUserId])

		 left outer join [SdkMessagePairBase] T2 on (T1.[SdkMessagePairId] = T2.[SdkMessagePairId]
			  AND T1.[SdkMessagePairIdUnique] <> T2.[SdkMessagePairIdUnique]
			  AND T1.CustomizationLevel = 0)
where T2.CustomizationLevel is null
GO
