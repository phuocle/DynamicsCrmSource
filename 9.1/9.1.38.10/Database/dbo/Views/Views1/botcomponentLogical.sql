


--
-- logical view for botcomponentLogical
--
create view dbo.[botcomponentLogical]
 (
    -- logical attributes
    [ParentBotComponentIdName],
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
    [botcomponentId],
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
    [ComponentType],
    [Content],
    [Category],
    [Data],
    [Description],
    [Language],
    [ParentBotComponentId],
    [SchemaName]
) with view_metadata as
select
    -- logical attributes
    [botcomponent_parent_botcomponent].[name],
    [lk_botcomponent_createdby].[FullName],
    [lk_botcomponent_createdby].[YomiFullName],
    [lk_botcomponent_modifiedonbehalfby].[FullName],
    [lk_botcomponent_modifiedonbehalfby].[YomiFullName],
    [lk_botcomponent_createdonbehalfby].[FullName],
    [lk_botcomponent_createdonbehalfby].[YomiFullName],
    [lk_botcomponent_modifiedby].[FullName],
    [lk_botcomponent_modifiedby].[YomiFullName],

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
    [T1].[botcomponentId],
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
    [T1].[ComponentType],
    [T1].[Content],
    [T1].[Category],
    [T1].[Data],
    [T1].[Description],
    [T1].[Language],
    [T1].[ParentBotComponentId],
    [T1].[SchemaName]
from [botcomponentBase] [T1]
    left join [botcomponentBase] [botcomponent_parent_botcomponent] on ([T1].[ParentBotComponentId] = [botcomponent_parent_botcomponent].[botcomponentId] and [botcomponent_parent_botcomponent].OverwriteTime = 0 and [botcomponent_parent_botcomponent].ComponentState = 0)
    left join [SystemUserBase] [lk_botcomponent_createdby] on ([T1].[CreatedBy] = [lk_botcomponent_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_botcomponent_createdonbehalfby] on ([T1].[CreatedOnBehalfBy] = [lk_botcomponent_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_botcomponent_modifiedby] on ([T1].[ModifiedBy] = [lk_botcomponent_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_botcomponent_modifiedonbehalfby] on ([T1].[ModifiedOnBehalfBy] = [lk_botcomponent_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner on ([T1].OwnerId = XXowner.OwnerId)
where T1.OverwriteTime = 0