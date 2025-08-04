


--
-- base view for Feedback
--
create view dbo.[Feedback]
 (
    -- logical attributes
    [TransactionCurrencyIdName],
    [CreatedByYomiName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByYomiName],
    [ClosedByYomiName],
    [ModifiedByName],
    [CreatedOnBehalfByName],
    [ModifiedOnBehalfByName],
    [ClosedByName],
    [CreatedByName],
    [CreatedByContactName],
    [CreatedOnBehalfByContactName],
    [CreatedOnBehalfByContactYomiName],
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
    [FeedbackId],
    [Rating],
    [MinRating],
    [MaxRating],
    [NormalizedRating],
    [Comments],
    [Source],
    [StateCode],
    [StatusCode],
    [VersionNumber],
    [RegardingObjectId],
    [RegardingObjectIdName],
    [RegardingObjectIdYomiName],
    [RegardingObjectTypeCode],
    [CreatedBy],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [ModifiedBy],
    [ModifiedOn],
    [ModifiedOnBehalfBy],
    [OwningBusinessUnit],
    [ClosedBy],
    [ClosedOn],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TransactionCurrencyId],
    [ExchangeRate],
    [Title],
    [CreatedByContact],
    [CreatedOnBehalfByContact],
    [msdyn_ContextObjectId],
    [msdyn_ContextObjectIdType],
    [msdyn_ContextObjectIdName],
    [msdyn_ContextObjectIdYomiName]
) with view_metadata as
select
    -- logical attributes
    [transactioncurrency_feedback].[CurrencyName],
    [lk_feedback_createdby].[YomiFullName],
    [lk_feedback_modifiedonbehalfby].[YomiFullName],
    [lk_feedback_createdonbehalfby].[YomiFullName],
    [lk_feedback_closedby].[YomiFullName],
    [lk_feedback_modifiedby].[FullName],
    [lk_feedback_createdonbehalfby].[FullName],
    [lk_feedback_modifiedonbehalfby].[FullName],
    [lk_feedback_closedby].[FullName],
    [lk_feedback_createdby].[FullName],
    [lk_contact_feedback_createdby].[FullName],
    [lk_contact_feedback_createdonbehalfby].[FullName],
    [lk_contact_feedback_createdonbehalfby].[YomiFullName],
    [lk_feedback_modifiedby].[YomiFullName],

    -- ownership entries
    OwnerId = [FeedbackBase].OwnerId,
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
    [FeedbackBase].[FeedbackId],
    [FeedbackBase].[Rating],
    [FeedbackBase].[MinRating],
    [FeedbackBase].[MaxRating],
    [FeedbackBase].[NormalizedRating],
    [FeedbackBase].[Comments],
    [FeedbackBase].[Source],
    [FeedbackBase].[StateCode],
    [FeedbackBase].[StatusCode],
    [FeedbackBase].[VersionNumber],
    [FeedbackBase].[RegardingObjectId],
    [FeedbackBase].[RegardingObjectIdName],
    [FeedbackBase].[RegardingObjectIdYomiName],
    [FeedbackBase].[RegardingObjectTypeCode],
    [FeedbackBase].[CreatedBy],
    [FeedbackBase].[CreatedOn],
    [FeedbackBase].[CreatedOnBehalfBy],
    [FeedbackBase].[ModifiedBy],
    [FeedbackBase].[ModifiedOn],
    [FeedbackBase].[ModifiedOnBehalfBy],
    [FeedbackBase].[OwningBusinessUnit],
    [FeedbackBase].[ClosedBy],
    [FeedbackBase].[ClosedOn],
    [FeedbackBase].[ImportSequenceNumber],
    [FeedbackBase].[OverriddenCreatedOn],
    [FeedbackBase].[TransactionCurrencyId],
    [FeedbackBase].[ExchangeRate],
    [FeedbackBase].[Title],
    [FeedbackBase].[CreatedByContact],
    [FeedbackBase].[CreatedOnBehalfByContact],
    [FeedbackBase].[msdyn_ContextObjectId],
    [FeedbackBase].[msdyn_ContextObjectIdType],
    [FeedbackBase].[msdyn_ContextObjectIdName],
    [FeedbackBase].[msdyn_ContextObjectIdYomiName]
from [FeedbackBase] 
    left join [ContactBase] [lk_contact_feedback_createdby] on ([FeedbackBase].[CreatedByContact] = [lk_contact_feedback_createdby].[ContactId])
    left join [ContactBase] [lk_contact_feedback_createdonbehalfby] on ([FeedbackBase].[CreatedOnBehalfByContact] = [lk_contact_feedback_createdonbehalfby].[ContactId])
    left join [SystemUserBase] [lk_feedback_closedby] on ([FeedbackBase].[ClosedBy] = [lk_feedback_closedby].[SystemUserId])
    left join [SystemUserBase] [lk_feedback_createdby] on ([FeedbackBase].[CreatedBy] = [lk_feedback_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_feedback_createdonbehalfby] on ([FeedbackBase].[CreatedOnBehalfBy] = [lk_feedback_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_feedback_modifiedby] on ([FeedbackBase].[ModifiedBy] = [lk_feedback_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_feedback_modifiedonbehalfby] on ([FeedbackBase].[ModifiedOnBehalfBy] = [lk_feedback_modifiedonbehalfby].[SystemUserId])
    left join [TransactionCurrencyBase] [transactioncurrency_feedback] on ([FeedbackBase].[TransactionCurrencyId] = [transactioncurrency_feedback].[TransactionCurrencyId])
    left join OwnerBase XXowner on ([FeedbackBase].OwnerId = XXowner.OwnerId)
