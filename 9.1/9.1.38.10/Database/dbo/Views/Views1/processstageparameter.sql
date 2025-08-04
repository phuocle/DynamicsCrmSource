


--
-- base view for processstageparameter
--
create view dbo.[processstageparameter]
 (
    -- logical attributes
    [ProcessStageIdName],
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
    [processstageparameterId],
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
    [ProcessStageId],
    [Value]
) with view_metadata as
select
    -- logical attributes
    [processstage_processstageparameter].[StageName],
    [lk_processstageparameter_createdby].[FullName],
    [lk_processstageparameter_createdby].[YomiFullName],
    [lk_processstageparameter_createdonbehalfby].[FullName],
    [lk_processstageparameter_createdonbehalfby].[YomiFullName],
    [lk_processstageparameter_modifiedby].[FullName],
    [lk_processstageparameter_modifiedby].[YomiFullName],
    [lk_processstageparameter_modifiedonbehalfby].[FullName],
    [lk_processstageparameter_modifiedonbehalfby].[YomiFullName],

    -- ownership entries
    OwnerId = [processstageparameterBase].OwnerId,
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
    [processstageparameterBase].[processstageparameterId],
    [processstageparameterBase].[CreatedOn],
    [processstageparameterBase].[CreatedBy],
    [processstageparameterBase].[ModifiedOn],
    [processstageparameterBase].[ModifiedBy],
    [processstageparameterBase].[CreatedOnBehalfBy],
    [processstageparameterBase].[ModifiedOnBehalfBy],
    [processstageparameterBase].[OwningBusinessUnit],
    [processstageparameterBase].[statecode],
    [processstageparameterBase].[statuscode],
    [processstageparameterBase].[VersionNumber],
    [processstageparameterBase].[ImportSequenceNumber],
    [processstageparameterBase].[OverriddenCreatedOn],
    [processstageparameterBase].[TimeZoneRuleVersionNumber],
    [processstageparameterBase].[UTCConversionTimeZoneCode],
    [processstageparameterBase].[name],
    [processstageparameterBase].[ProcessStageId],
    [processstageparameterBase].[Value]
from [processstageparameterBase] 
    left join [SystemUserBase] [lk_processstageparameter_createdby] on ([processstageparameterBase].[CreatedBy] = [lk_processstageparameter_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_processstageparameter_createdonbehalfby] on ([processstageparameterBase].[CreatedOnBehalfBy] = [lk_processstageparameter_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_processstageparameter_modifiedby] on ([processstageparameterBase].[ModifiedBy] = [lk_processstageparameter_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_processstageparameter_modifiedonbehalfby] on ([processstageparameterBase].[ModifiedOnBehalfBy] = [lk_processstageparameter_modifiedonbehalfby].[SystemUserId])
    left join [ProcessStageBase] [processstage_processstageparameter] on ([processstageparameterBase].[ProcessStageId] = [processstage_processstageparameter].[ProcessStageId])
    left join OwnerBase XXowner on ([processstageparameterBase].OwnerId = XXowner.OwnerId)
