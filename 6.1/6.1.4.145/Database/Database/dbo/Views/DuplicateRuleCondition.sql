


--
-- base view for DuplicateRuleCondition
--
create view dbo.[DuplicateRuleCondition]
 (
    -- logical attributes
    [OwnerId],
    [OwnerIdType],
    [CreatedByYomiName],
    [ModifiedByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [OwningUser],
    [OwningBusinessUnit],
    [ModifiedByYomiName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [CreatedByName],

    -- physical attributes
    [CreatedBy],
    [OperatorParam],
    [OperatorCode],
    [ModifiedOn],
    [BaseAttributeName],
    [RegardingObjectId],
    [DuplicateRuleConditionId],
    [MatchingAttributeName],
    [CreatedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [IgnoreBlankValues]
) with view_metadata as
select
    -- logical attributes
    [DuplicateRule_DuplicateRuleConditions].[OwnerId],
    [DuplicateRule_DuplicateRuleConditions].[OwnerIdType],
    [lk_duplicateruleconditionbase_createdby].[YomiFullName],
    [lk_duplicateruleconditionbase_modifiedby].[FullName],
    [lk_duplicateruleconditionbase_modifiedonbehalfby].[YomiFullName],
    [lk_duplicateruleconditionbase_modifiedonbehalfby].[FullName],
    case when [DuplicateRule_DuplicateRuleConditions].OwnerIdType = 8
    then [DuplicateRule_DuplicateRuleConditions].OwnerId
    else null
    end,
    [DuplicateRule_DuplicateRuleConditions].[OwningBusinessUnit],
    [lk_duplicateruleconditionbase_modifiedby].[YomiFullName],
    [lk_duplicateruleconditionbase_createdonbehalfby].[YomiFullName],
    [lk_duplicateruleconditionbase_createdonbehalfby].[FullName],
    [lk_duplicateruleconditionbase_createdby].[FullName],

    -- physical attribute
    [DuplicateRuleConditionBase].[CreatedBy],
    [DuplicateRuleConditionBase].[OperatorParam],
    [DuplicateRuleConditionBase].[OperatorCode],
    [DuplicateRuleConditionBase].[ModifiedOn],
    [DuplicateRuleConditionBase].[BaseAttributeName],
    [DuplicateRuleConditionBase].[RegardingObjectId],
    [DuplicateRuleConditionBase].[DuplicateRuleConditionId],
    [DuplicateRuleConditionBase].[MatchingAttributeName],
    [DuplicateRuleConditionBase].[CreatedOn],
    [DuplicateRuleConditionBase].[ModifiedBy],
    [DuplicateRuleConditionBase].[CreatedOnBehalfBy],
    [DuplicateRuleConditionBase].[ModifiedOnBehalfBy],
    [DuplicateRuleConditionBase].[IgnoreBlankValues]
from [DuplicateRuleConditionBase] 
    left join [DuplicateRuleBase] [DuplicateRule_DuplicateRuleConditions] on ([DuplicateRuleConditionBase].[RegardingObjectId] = [DuplicateRule_DuplicateRuleConditions].[DuplicateRuleId])
    left join [SystemUserBase] [lk_duplicateruleconditionbase_createdby] with(nolock) on ([DuplicateRuleConditionBase].[CreatedBy] = [lk_duplicateruleconditionbase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_duplicateruleconditionbase_createdonbehalfby] with(nolock) on ([DuplicateRuleConditionBase].[CreatedOnBehalfBy] = [lk_duplicateruleconditionbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_duplicateruleconditionbase_modifiedby] with(nolock) on ([DuplicateRuleConditionBase].[ModifiedBy] = [lk_duplicateruleconditionbase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_duplicateruleconditionbase_modifiedonbehalfby] with(nolock) on ([DuplicateRuleConditionBase].[ModifiedOnBehalfBy] = [lk_duplicateruleconditionbase_modifiedonbehalfby].[SystemUserId])
