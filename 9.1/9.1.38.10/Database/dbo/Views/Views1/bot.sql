


--
-- base view for bot
--
create view dbo.[bot]
 (
    -- logical attributes
    [publishedbyYomiName],
    [publishedbyName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [botId],
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
    [OverwriteTime],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [ComponentIdUnique],
    [IsManaged],
    [IsCustomizable],
    [accesscontrolpolicy],
    [applicationmanifestinformation],
    [authenticationmode],
    [authenticationtrigger],
    [authorizedsecuritygroupids],
    [iconbase64],
    [Language],
    [Configuration],
    [publishedby],
    [publishedon],
    [SchemaName]
) with view_metadata as
select
    -- logical attributes
    [systemuser_bot_publishedby].[YomiFullName],
    [systemuser_bot_publishedby].[FullName],
    [lk_bot_modifiedonbehalfby].[FullName],
    [lk_bot_modifiedonbehalfby].[YomiFullName],
    [lk_bot_modifiedby].[FullName],
    [lk_bot_modifiedby].[YomiFullName],
    [lk_bot_createdby].[FullName],
    [lk_bot_createdby].[YomiFullName],
    [lk_bot_createdonbehalfby].[FullName],
    [lk_bot_createdonbehalfby].[YomiFullName],

    -- ownership entries
    OwnerId = [T1].OwnerId,
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
    [T1].[botId],
    [T1].[CreatedOn],
    [T1].[CreatedBy],
    [T1].[ModifiedOn],
    [T1].[ModifiedBy],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedOnBehalfBy],
    [T1].[OwningBusinessUnit],
    [T1].[statecode],
    [T1].[statuscode],
    [T1].[VersionNumber],
    [T1].[ImportSequenceNumber],
    [T1].[OverriddenCreatedOn],
    [T1].[TimeZoneRuleVersionNumber],
    [T1].[UTCConversionTimeZoneCode],
    [T1].[name],
    [T1].[OverwriteTime],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[ComponentIdUnique],
    [T1].[IsManaged],
    [T1].[IsCustomizable],
    [T1].[accesscontrolpolicy],
    [T1].[applicationmanifestinformation],
    [T1].[authenticationmode],
    [T1].[authenticationtrigger],
    [T1].[authorizedsecuritygroupids],
    [T1].[iconbase64],
    [T1].[Language],
    [T1].[Configuration],
    [T1].[publishedby],
    [T1].[publishedon],
    [T1].[SchemaName]
from [botBase] [T1]
    left join [SystemUserBase] [lk_bot_createdby] on ([T1].[CreatedBy] = [lk_bot_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_bot_createdonbehalfby] on ([T1].[CreatedOnBehalfBy] = [lk_bot_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_bot_modifiedby] on ([T1].[ModifiedBy] = [lk_bot_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_bot_modifiedonbehalfby] on ([T1].[ModifiedOnBehalfBy] = [lk_bot_modifiedonbehalfby].[SystemUserId])
    left join [SystemUserBase] [systemuser_bot_publishedby] on ([T1].[publishedby] = [systemuser_bot_publishedby].[SystemUserId])
    left join OwnerBase XXowner on ([T1].OwnerId = XXowner.OwnerId)
where T1.OverwriteTime = 0 AND T1.ComponentState = 0