USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[DuplicateRule]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for DuplicateRule
--
create view [dbo].[DuplicateRule]
 (
    -- logical attributes
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [CreatedByYomiName],
    [CreatedByName],
    [ModifiedOnBehalfByName],
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
    [Description],
    [OwningBusinessUnit],
    [IsCaseSensitive],
    [StateCode],
    [StatusCode],
    [Name],
    [MatchingEntityMatchCodeTable],
    [TimeZoneRuleVersionNumber],
    [BaseEntityTypeCode],
    [UTCConversionTimeZoneCode],
    [DuplicateRuleId],
    [ModifiedBy],
    [MatchingEntityTypeCode],
    [BaseEntityMatchCodeTable],
    [BaseEntityName],
    [CreatedBy],
    [ModifiedOn],
    [MatchingEntityName],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [ExcludeInactiveRecords]
) with view_metadata as
select
    -- logical attributes
    [lk_duplicaterulebase_modifiedby].[FullName],
    [lk_duplicaterulebase_modifiedby].[YomiFullName],
    [lk_duplicaterulebase_createdonbehalfby].[YomiFullName],
    [lk_duplicaterulebase_createdonbehalfby].[FullName],
    [lk_duplicaterulebase_createdby].[YomiFullName],
    [lk_duplicaterulebase_createdby].[FullName],
    [lk_duplicaterulebase_modifiedonbehalfby].[FullName],
    [lk_duplicaterulebase_modifiedonbehalfby].[YomiFullName],

    -- ownership entries
    OwnerId = [DuplicateRuleBase].OwnerId,
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
    [DuplicateRuleBase].[Description],
    [DuplicateRuleBase].[OwningBusinessUnit],
    [DuplicateRuleBase].[IsCaseSensitive],
    [DuplicateRuleBase].[StateCode],
    [DuplicateRuleBase].[StatusCode],
    [DuplicateRuleBase].[Name],
    [DuplicateRuleBase].[MatchingEntityMatchCodeTable],
    [DuplicateRuleBase].[TimeZoneRuleVersionNumber],
    [DuplicateRuleBase].[BaseEntityTypeCode],
    [DuplicateRuleBase].[UTCConversionTimeZoneCode],
    [DuplicateRuleBase].[DuplicateRuleId],
    [DuplicateRuleBase].[ModifiedBy],
    [DuplicateRuleBase].[MatchingEntityTypeCode],
    [DuplicateRuleBase].[BaseEntityMatchCodeTable],
    [DuplicateRuleBase].[BaseEntityName],
    [DuplicateRuleBase].[CreatedBy],
    [DuplicateRuleBase].[ModifiedOn],
    [DuplicateRuleBase].[MatchingEntityName],
    [DuplicateRuleBase].[CreatedOn],
    [DuplicateRuleBase].[CreatedOnBehalfBy],
    [DuplicateRuleBase].[ModifiedOnBehalfBy],
    [DuplicateRuleBase].[ExcludeInactiveRecords]
from [DuplicateRuleBase] 
    left join [SystemUserBase] [lk_duplicaterulebase_createdby] with(nolock) on ([DuplicateRuleBase].[CreatedBy] = [lk_duplicaterulebase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_duplicaterulebase_createdonbehalfby] with(nolock) on ([DuplicateRuleBase].[CreatedOnBehalfBy] = [lk_duplicaterulebase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_duplicaterulebase_modifiedby] with(nolock) on ([DuplicateRuleBase].[ModifiedBy] = [lk_duplicaterulebase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_duplicaterulebase_modifiedonbehalfby] with(nolock) on ([DuplicateRuleBase].[ModifiedOnBehalfBy] = [lk_duplicaterulebase_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner with(nolock) on ([DuplicateRuleBase].OwnerId = XXowner.OwnerId)

GO
