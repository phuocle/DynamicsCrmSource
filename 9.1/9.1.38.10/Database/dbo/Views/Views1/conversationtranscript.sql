


--
-- base view for conversationtranscript
--
create view dbo.[conversationtranscript]
 (
    -- logical attributes
    [bot_conversationtranscriptIdName],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
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
    [conversationtranscriptId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [OwningBusinessUnit],
    [statecode],
    [statuscode],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [name],
    [Content],
    [ConversationStartTime],
    [metadata],
    [SchemaType],
    [SchemaVersion],
    [bot_conversationtranscriptId]
) with view_metadata as
select
    -- logical attributes
    [bot_conversationtranscript].[name],
    [lk_conversationtranscript_createdby].[FullName],
    [lk_conversationtranscript_createdby].[YomiFullName],
    [lk_conversationtranscript_modifiedonbehalfby].[FullName],
    [lk_conversationtranscript_modifiedonbehalfby].[YomiFullName],
    [lk_conversationtranscript_createdonbehalfby].[FullName],
    [lk_conversationtranscript_createdonbehalfby].[YomiFullName],
    [lk_conversationtranscript_modifiedby].[FullName],
    [lk_conversationtranscript_modifiedby].[YomiFullName],

    -- ownership entries
    OwnerId = [conversationtranscriptBase].OwnerId,
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
    [conversationtranscriptBase].[conversationtranscriptId],
    [conversationtranscriptBase].[CreatedOn],
    [conversationtranscriptBase].[CreatedBy],
    [conversationtranscriptBase].[ModifiedOn],
    [conversationtranscriptBase].[ModifiedBy],
    [conversationtranscriptBase].[CreatedOnBehalfBy],
    [conversationtranscriptBase].[ModifiedOnBehalfBy],
    [conversationtranscriptBase].[OwningBusinessUnit],
    [conversationtranscriptBase].[statecode],
    [conversationtranscriptBase].[statuscode],
    [conversationtranscriptBase].[VersionNumber],
    [conversationtranscriptBase].[ImportSequenceNumber],
    [conversationtranscriptBase].[OverriddenCreatedOn],
    [conversationtranscriptBase].[TimeZoneRuleVersionNumber],
    [conversationtranscriptBase].[UTCConversionTimeZoneCode],
    [conversationtranscriptBase].[name],
    [conversationtranscriptBase].[Content],
    [conversationtranscriptBase].[ConversationStartTime],
    [conversationtranscriptBase].[metadata],
    [conversationtranscriptBase].[SchemaType],
    [conversationtranscriptBase].[SchemaVersion],
    [conversationtranscriptBase].[bot_conversationtranscriptId]
from [conversationtranscriptBase] 
    left join [botBase] [bot_conversationtranscript] on ([conversationtranscriptBase].[bot_conversationtranscriptId] = [bot_conversationtranscript].[botId] and [bot_conversationtranscript].OverwriteTime = 0 and [bot_conversationtranscript].ComponentState = 0)
    left join [SystemUserBase] [lk_conversationtranscript_createdby] on ([conversationtranscriptBase].[CreatedBy] = [lk_conversationtranscript_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_conversationtranscript_createdonbehalfby] on ([conversationtranscriptBase].[CreatedOnBehalfBy] = [lk_conversationtranscript_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_conversationtranscript_modifiedby] on ([conversationtranscriptBase].[ModifiedBy] = [lk_conversationtranscript_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_conversationtranscript_modifiedonbehalfby] on ([conversationtranscriptBase].[ModifiedOnBehalfBy] = [lk_conversationtranscript_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner on ([conversationtranscriptBase].OwnerId = XXowner.OwnerId)
