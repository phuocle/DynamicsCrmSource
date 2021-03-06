SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base view for OrderClose
--
create view [dbo].[OrderClose]
 (
    -- logical attributes
    [CreatedByYomiName],
    [CreatedByName],
    [CreatedByExternalPartyYomiName],
    [CreatedByExternalPartyName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByExternalPartyName],
    [ModifiedByExternalPartyYomiName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [ModifiedByName],
    [ModifiedByYomiName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [ScheduledDurationMinutes],
    [ScheduledStart],
    [ActualEnd],
    [StatusCode],
    [OrderNumber],
    [Subcategory],
    [OwningBusinessUnit],
    [CreatedBy],
    [Revision],
    [ActivityId],
    [Description],
    [StateCode],
    [IsBilled],
    [Category],
    [ServiceId],
    [ScheduledEnd],
    [ActualDurationMinutes],
    [IsWorkflowCreated],
    [ModifiedOn],
    [CreatedOn],
    [Subject],
    [ActualStart],
    [SalesOrderId],
    [VersionNumber],
    [ModifiedBy],
    [SalesOrderIdName],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [SalesOrderIdType],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [ActivityTypeCode],
    [IsRegularActivity],
    [CreatedByExternalParty],
    [ModifiedByExternalParty]
) with view_metadata as
select
    -- logical attributes
    [lk_orderclose_createdby].[YomiFullName],
    [lk_orderclose_createdby].[FullName],
    [lk_externalparty_orderclose_createdby].[YomiFullName],
    [lk_externalparty_orderclose_createdby].[FullName],
    [lk_orderclose_modifiedonbehalfby].[FullName],
    [lk_orderclose_modifiedonbehalfby].[YomiFullName],
    [lk_externalparty_orderclose_modifiedby].[FullName],
    [lk_externalparty_orderclose_modifiedby].[YomiFullName],
    [lk_orderclose_createdonbehalfby].[YomiFullName],
    [lk_orderclose_createdonbehalfby].[FullName],
    [lk_orderclose_modifiedby].[FullName],
    [lk_orderclose_modifiedby].[YomiFullName],

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
    [ActivityPointerBase].[ScheduledDurationMinutes],
    [ActivityPointerBase].[ScheduledStart],
    [ActivityPointerBase].[ActualEnd],
    [ActivityPointerBase].[StatusCode],
    [ActivityPointerBase].[OrderNumber],
    [ActivityPointerBase].[OrdCloseSubcategory],
    [ActivityPointerBase].[OwningBusinessUnit],
    [ActivityPointerBase].[CreatedBy],
    [ActivityPointerBase].[OrdCloseRevision],
    [ActivityPointerBase].[ActivityId],
    [ActivityPointerBase].[Description],
    [ActivityPointerBase].[StateCode],
    [ActivityPointerBase].[IsBilled],
    [ActivityPointerBase].[OrdCloseCategory],
    [ActivityPointerBase].[ServiceId],
    [ActivityPointerBase].[ScheduledEnd],
    [ActivityPointerBase].[ActualDurationMinutes],
    [ActivityPointerBase].[IsWorkflowCreated],
    [ActivityPointerBase].[ModifiedOn],
    [ActivityPointerBase].[CreatedOn],
    [ActivityPointerBase].[Subject],
    [ActivityPointerBase].[ActualStart],
    [ActivityPointerBase].[RegardingObjectId],
    [ActivityPointerBase].[VersionNumber],
    [ActivityPointerBase].[ModifiedBy],
    [ActivityPointerBase].[RegardingObjectIdName],
    [ActivityPointerBase].[TimeZoneRuleVersionNumber],
    [ActivityPointerBase].[UTCConversionTimeZoneCode],
    [ActivityPointerBase].[OrdCloseImportSequenceNumber],
    [ActivityPointerBase].[OrdCloseOverriddenCreatedOn],
    [ActivityPointerBase].[RegardingObjectTypeCode],
    [ActivityPointerBase].[CreatedOnBehalfBy],
    [ActivityPointerBase].[ModifiedOnBehalfBy],
    [ActivityPointerBase].[ActivityTypeCode],
    [ActivityPointerBase].[IsRegularActivity],
    [ActivityPointerBase].[CreatedByExternalParty],
    [ActivityPointerBase].[ModifiedByExternalParty]
from [ActivityPointerBase] 
    left join [ExternalPartyBase] [lk_externalparty_orderclose_createdby] on ([ActivityPointerBase].[CreatedByExternalParty] = [lk_externalparty_orderclose_createdby].[ExternalPartyId])
    left join [ExternalPartyBase] [lk_externalparty_orderclose_modifiedby] on ([ActivityPointerBase].[ModifiedByExternalParty] = [lk_externalparty_orderclose_modifiedby].[ExternalPartyId])
    left join [SystemUserBase] [lk_orderclose_createdby] with(nolock) on ([ActivityPointerBase].[CreatedBy] = [lk_orderclose_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_orderclose_createdonbehalfby] with(nolock) on ([ActivityPointerBase].[CreatedOnBehalfBy] = [lk_orderclose_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_orderclose_modifiedby] with(nolock) on ([ActivityPointerBase].[ModifiedBy] = [lk_orderclose_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_orderclose_modifiedonbehalfby] with(nolock) on ([ActivityPointerBase].[ModifiedOnBehalfBy] = [lk_orderclose_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner with(nolock) on ([ActivityPointerBase].OwnerId = XXowner.OwnerId)
where [ActivityPointerBase].[ActivityTypeCode] = 4209
GO
