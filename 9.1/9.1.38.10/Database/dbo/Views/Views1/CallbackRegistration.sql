


--
-- base view for CallbackRegistration
--
create view dbo.[CallbackRegistration]
 (
    -- logical attributes
    [OwningBusinessUnitName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [CreatedByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedOnBehalfByName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [CallbackRegistrationId],
    [Name],
    [EntityName],
    [FilteringAttributes],
    [Url],
    [Message],
    [Scope],
    [Version],
    [OwningBusinessUnit],
    [CreatedBy],
    [CreatedOnBehalfBy],
    [CreatedOn],
    [ModifiedBy],
    [ModifiedOn],
    [ModifiedOnBehalfBy],
    [FilterExpression],
    [PostponeUntil],
    [RunAs]
) with view_metadata as
select
    -- logical attributes
    [businessunit_callbackregistration].[Name],
    [lk_callbackregistration_modifiedonbehalfby].[YomiFullName],
    [lk_callbackregistration_createdonbehalfby].[FullName],
    [lk_callbackregistration_createdby].[FullName],
    [lk_callbackregistration_createdonbehalfby].[YomiFullName],
    [lk_callbackregistration_modifiedby].[FullName],
    [lk_callbackregistration_modifiedonbehalfby].[FullName],

    -- ownership entries
    OwnerId = [CallbackRegistrationBase].OwnerId,
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
    [CallbackRegistrationBase].[CallbackRegistrationId],
    [CallbackRegistrationBase].[Name],
    [CallbackRegistrationBase].[EntityName],
    [CallbackRegistrationBase].[FilteringAttributes],
    [CallbackRegistrationBase].[Url],
    [CallbackRegistrationBase].[Message],
    [CallbackRegistrationBase].[Scope],
    [CallbackRegistrationBase].[Version],
    [CallbackRegistrationBase].[OwningBusinessUnit],
    [CallbackRegistrationBase].[CreatedBy],
    [CallbackRegistrationBase].[CreatedOnBehalfBy],
    [CallbackRegistrationBase].[CreatedOn],
    [CallbackRegistrationBase].[ModifiedBy],
    [CallbackRegistrationBase].[ModifiedOn],
    [CallbackRegistrationBase].[ModifiedOnBehalfBy],
    [CallbackRegistrationBase].[FilterExpression],
    [CallbackRegistrationBase].[PostponeUntil],
    [CallbackRegistrationBase].[RunAs]
from [CallbackRegistrationBase] 
    left join [BusinessUnitBase] [businessunit_callbackregistration] on ([CallbackRegistrationBase].[OwningBusinessUnit] = [businessunit_callbackregistration].[BusinessUnitId])
    left join [SystemUserBase] [lk_callbackregistration_createdby] on ([CallbackRegistrationBase].[CreatedBy] = [lk_callbackregistration_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_callbackregistration_createdonbehalfby] on ([CallbackRegistrationBase].[CreatedOnBehalfBy] = [lk_callbackregistration_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_callbackregistration_modifiedby] on ([CallbackRegistrationBase].[ModifiedBy] = [lk_callbackregistration_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_callbackregistration_modifiedonbehalfby] on ([CallbackRegistrationBase].[ModifiedOnBehalfBy] = [lk_callbackregistration_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner on ([CallbackRegistrationBase].OwnerId = XXowner.OwnerId)
