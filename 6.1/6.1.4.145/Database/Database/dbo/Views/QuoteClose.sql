


--
-- base view for QuoteClose
--
create view dbo.[QuoteClose]
 (
    -- logical attributes
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedByName],
    [CreatedOnBehalfByName],
    [CreatedByName],
    [ModifiedByYomiName],
    [CreatedByYomiName],
    [ModifiedOnBehalfByYomiName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [VersionNumber],
    [ActivityId],
    [IsWorkflowCreated],
    [Description],
    [Revision],
    [QuoteId],
    [ModifiedOn],
    [Subcategory],
    [IsBilled],
    [StatusCode],
    [CreatedBy],
    [ScheduledEnd],
    [QuoteNumber],
    [StateCode],
    [ServiceId],
    [Subject],
    [ActualEnd],
    [ModifiedBy],
    [Category],
    [ActualDurationMinutes],
    [ScheduledStart],
    [OwningBusinessUnit],
    [ScheduledDurationMinutes],
    [ActualStart],
    [CreatedOn],
    [QuoteIdName],
    [ImportSequenceNumber],
    [UTCConversionTimeZoneCode],
    [TimeZoneRuleVersionNumber],
    [OverriddenCreatedOn],
    [QuoteIdType],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [ActivityTypeCode],
    [IsRegularActivity]
) with view_metadata as
select
    -- logical attributes
    [lk_quoteclose_createdonbehalfby].[YomiFullName],
    [lk_quoteclose_modifiedonbehalfby].[FullName],
    [lk_quoteclose_modifiedby].[FullName],
    [lk_quoteclose_createdonbehalfby].[FullName],
    [lk_quoteclose_createdby].[FullName],
    [lk_quoteclose_modifiedby].[YomiFullName],
    [lk_quoteclose_createdby].[YomiFullName],
    [lk_quoteclose_modifiedonbehalfby].[YomiFullName],

    -- ownership entries
    OwnerId = [ActivityPointerBase].OwnerId,
    OwnerName = XXowner.Name,
    OwnerYomiName =  XXowner.YomiName,
    OwnerDsc = 0, -- DSC is removed, stub it to 0
    OwnerIdType = XXowner.OwnerIdType,
    OwningUser = case 
 		when XXowner.OwnerIdType= 8 then XXowner.OwnerId
		else null
		end,
    OwningTeam = case 
 		when XXowner.OwnerIdType= 9 then XXowner.OwnerId
		else null
		end,

    -- physical attribute
    [ActivityPointerBase].[VersionNumber],
    [ActivityPointerBase].[ActivityId],
    [ActivityPointerBase].[IsWorkflowCreated],
    [ActivityPointerBase].[Description],
    [ActivityPointerBase].[QteCloseRevision],
    [ActivityPointerBase].[RegardingObjectId],
    [ActivityPointerBase].[ModifiedOn],
    [ActivityPointerBase].[QteCloseSubcategory],
    [ActivityPointerBase].[IsBilled],
    [ActivityPointerBase].[StatusCode],
    [ActivityPointerBase].[CreatedBy],
    [ActivityPointerBase].[ScheduledEnd],
    [ActivityPointerBase].[QuoteNumber],
    [ActivityPointerBase].[StateCode],
    [ActivityPointerBase].[ServiceId],
    [ActivityPointerBase].[Subject],
    [ActivityPointerBase].[ActualEnd],
    [ActivityPointerBase].[ModifiedBy],
    [ActivityPointerBase].[QteCloseCategory],
    [ActivityPointerBase].[ActualDurationMinutes],
    [ActivityPointerBase].[ScheduledStart],
    [ActivityPointerBase].[OwningBusinessUnit],
    [ActivityPointerBase].[ScheduledDurationMinutes],
    [ActivityPointerBase].[ActualStart],
    [ActivityPointerBase].[CreatedOn],
    [ActivityPointerBase].[RegardingObjectIdName],
    [ActivityPointerBase].[QteCloseImportSequenceNumber],
    [ActivityPointerBase].[UTCConversionTimeZoneCode],
    [ActivityPointerBase].[TimeZoneRuleVersionNumber],
    [ActivityPointerBase].[QteCloseOverriddenCreatedOn],
    [ActivityPointerBase].[RegardingObjectTypeCode],
    [ActivityPointerBase].[CreatedOnBehalfBy],
    [ActivityPointerBase].[ModifiedOnBehalfBy],
    [ActivityPointerBase].[ActivityTypeCode],
    [ActivityPointerBase].[IsRegularActivity]
from [ActivityPointerBase] 
    left join [SystemUserBase] [lk_quoteclose_createdby] with(nolock) on ([ActivityPointerBase].[CreatedBy] = [lk_quoteclose_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_quoteclose_createdonbehalfby] with(nolock) on ([ActivityPointerBase].[CreatedOnBehalfBy] = [lk_quoteclose_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_quoteclose_modifiedby] with(nolock) on ([ActivityPointerBase].[ModifiedBy] = [lk_quoteclose_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_quoteclose_modifiedonbehalfby] with(nolock) on ([ActivityPointerBase].[ModifiedOnBehalfBy] = [lk_quoteclose_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner with(nolock) on ([ActivityPointerBase].OwnerId = XXowner.OwnerId)
where [ActivityPointerBase].[ActivityTypeCode] = 4211