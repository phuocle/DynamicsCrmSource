


--
-- logical view for SdkMessageFilterLogical
--
create view dbo.[SdkMessageFilterLogical]
 (
    -- logical attributes
    [SdkMessageIdName],
    [CreatedOnBehalfByName],
    [ModifiedByName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByYomiName],
    [CreatedByName],

    -- physical attributes
    [CreatedBy],
    [SdkMessageFilterId],
    [OrganizationId],
    [PrimaryObjectTypeCode],
    [VersionNumber],
    [ModifiedBy],
    [CustomizationLevel],
    [SecondaryObjectTypeCode],
    [SdkMessageFilterIdUnique],
    [ModifiedOn],
    [IsCustomProcessingStepAllowed],
    [CreatedOn],
    [Availability],
    [SdkMessageId],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [IsVisible]
) with view_metadata as
select
    -- logical attributes
    [sdkmessageid_sdkmessagefilter].[Name],
    [createdonbehalfby_sdkmessagefilter].[FullName],
    [modifiedby_sdkmessagefilter].[FullName],
    [modifiedonbehalfby_sdkmessagefilter].[FullName],
    [modifiedonbehalfby_sdkmessagefilter].[YomiFullName],
    [createdonbehalfby_sdkmessagefilter].[YomiFullName],
    [createdby_sdkmessagefilter].[FullName],

    -- physical attribute
    [T1].[CreatedBy],
    [T1].[SdkMessageFilterId],
    [T1].[OrganizationId],
    [T1].[PrimaryObjectTypeCode],
    [T1].[VersionNumber],
    [T1].[ModifiedBy],
    [T1].[CustomizationLevel],
    [T1].[SecondaryObjectTypeCode],
    [T1].[SdkMessageFilterIdUnique],
    [T1].[ModifiedOn],
    [T1].[IsCustomProcessingStepAllowed],
    [T1].[CreatedOn],
    [T1].[Availability],
    [T1].[SdkMessageId],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedOnBehalfBy],
    [T1].[IsVisible]
from [SdkMessageFilterBase] [T1]
    left join [SystemUserBase] [createdby_sdkmessagefilter] with(nolock) on ([T1].[CreatedBy] = [createdby_sdkmessagefilter].[SystemUserId])
    left join [SystemUserBase] [createdonbehalfby_sdkmessagefilter] with(nolock) on ([T1].[CreatedOnBehalfBy] = [createdonbehalfby_sdkmessagefilter].[SystemUserId])
    left join [SystemUserBase] [modifiedby_sdkmessagefilter] with(nolock) on ([T1].[ModifiedBy] = [modifiedby_sdkmessagefilter].[SystemUserId])
    left join [SystemUserBase] [modifiedonbehalfby_sdkmessagefilter] with(nolock) on ([T1].[ModifiedOnBehalfBy] = [modifiedonbehalfby_sdkmessagefilter].[SystemUserId])
    left join [SdkMessageBase] [sdkmessageid_sdkmessagefilter] on ([T1].[SdkMessageId] = [sdkmessageid_sdkmessagefilter].[SdkMessageId])

		 left outer join [SdkMessageFilterBase] T2 on (T1.[SdkMessageFilterId] = T2.[SdkMessageFilterId]
			  AND T1.[SdkMessageFilterIdUnique] <> T2.[SdkMessageFilterIdUnique]
			  AND T1.CustomizationLevel = 0)
where T2.CustomizationLevel is null