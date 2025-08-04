


--
-- base view for CustomAPIRequestParameter
--
create view dbo.[CustomAPIRequestParameter]
 (
    -- logical attributes
    [CustomAPIIdName],
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
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
    [CustomAPIRequestParameterId],
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
    [Name],
    [OverwriteTime],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [ComponentIdUnique],
    [IsManaged],
    [IsCustomizable],
    [EntityLogicalName],
    [Description],
    [DisplayName],
    [IsOptional],
    [CustomAPIId],
    [Type],
    [UniqueName]
) with view_metadata as
select
    -- logical attributes
    [customapi_customapirequestparameter].[Name],
    [lk_customapirequestparameter_createdby].[FullName],
    [lk_customapirequestparameter_createdby].[YomiFullName],
    [lk_customapirequestparameter_createdonbehalfby].[FullName],
    [lk_customapirequestparameter_createdonbehalfby].[YomiFullName],
    [lk_customapirequestparameter_modifiedby].[FullName],
    [lk_customapirequestparameter_modifiedby].[YomiFullName],
    [lk_customapirequestparameter_modifiedonbehalfby].[FullName],
    [lk_customapirequestparameter_modifiedonbehalfby].[YomiFullName],

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
    [T1].[CustomAPIRequestParameterId],
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
    [T1].[Name],
    [T1].[OverwriteTime],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[ComponentIdUnique],
    [T1].[IsManaged],
    [T1].[IsCustomizable],
    [T1].[EntityLogicalName],
    [T1].[Description],
    [T1].[DisplayName],
    [T1].[IsOptional],
    [T1].[CustomAPIId],
    [T1].[Type],
    [T1].[UniqueName]
from [CustomAPIRequestParameterBase] [T1]
    left join [CustomAPIBase] [customapi_customapirequestparameter] on ([T1].[CustomAPIId] = [customapi_customapirequestparameter].[CustomAPIId] and [customapi_customapirequestparameter].OverwriteTime = 0 and [customapi_customapirequestparameter].ComponentState = 0)
    left join [SystemUserBase] [lk_customapirequestparameter_createdby] on ([T1].[CreatedBy] = [lk_customapirequestparameter_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_customapirequestparameter_createdonbehalfby] on ([T1].[CreatedOnBehalfBy] = [lk_customapirequestparameter_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_customapirequestparameter_modifiedby] on ([T1].[ModifiedBy] = [lk_customapirequestparameter_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_customapirequestparameter_modifiedonbehalfby] on ([T1].[ModifiedOnBehalfBy] = [lk_customapirequestparameter_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner on ([T1].OwnerId = XXowner.OwnerId)
where T1.OverwriteTime = 0 AND T1.ComponentState = 0