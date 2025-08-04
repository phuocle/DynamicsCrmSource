


--
-- base view for UserQueryVisualization
--
create view dbo.[UserQueryVisualization]
 (
    -- logical attributes
    [ModifiedOnBehalfByYomiName],
    [ModifiedByYomiName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedByName],
    [ModifiedByName],
    [ModifiedOnBehalfByName],
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
    [DataDescription],
    [ModifiedBy],
    [PrimaryEntityTypeCode],
    [CreatedBy],
    [IsDefault],
    [VersionNumber],
    [ModifiedOn],
    [UserQueryVisualizationId],
    [PresentationDescription],
    [Description],
    [Name],
    [CreatedOn],
    [OwningBusinessUnit],
    [ModifiedOnBehalfBy],
    [CreatedOnBehalfBy],
    [WebResourceId],
    [ChartType]
) with view_metadata as
select
    -- logical attributes
    [lk_userqueryvisualizationbase_modifiedonbehalfby].[YomiFullName],
    [lk_userqueryvisualization_modifiedby].[YomiFullName],
    [lk_userqueryvisualization_createdby].[YomiFullName],
    [lk_userqueryvisualizationbase_createdonbehalfby].[FullName],
    [lk_userqueryvisualization_createdby].[FullName],
    [lk_userqueryvisualization_modifiedby].[FullName],
    [lk_userqueryvisualizationbase_modifiedonbehalfby].[FullName],
    [lk_userqueryvisualizationbase_createdonbehalfby].[YomiFullName],

    -- ownership entries
    OwnerId = [UserQueryVisualizationBase].OwnerId,
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
    [UserQueryVisualizationBase].[DataDescription],
    [UserQueryVisualizationBase].[ModifiedBy],
    [UserQueryVisualizationBase].[PrimaryEntityTypeCode],
    [UserQueryVisualizationBase].[CreatedBy],
    [UserQueryVisualizationBase].[IsDefault],
    [UserQueryVisualizationBase].[VersionNumber],
    [UserQueryVisualizationBase].[ModifiedOn],
    [UserQueryVisualizationBase].[UserQueryVisualizationId],
    [UserQueryVisualizationBase].[PresentationDescription],
    [UserQueryVisualizationBase].[Description],
    [UserQueryVisualizationBase].[Name],
    [UserQueryVisualizationBase].[CreatedOn],
    [UserQueryVisualizationBase].[OwningBusinessUnit],
    [UserQueryVisualizationBase].[ModifiedOnBehalfBy],
    [UserQueryVisualizationBase].[CreatedOnBehalfBy],
    [UserQueryVisualizationBase].[WebResourceId],
    [UserQueryVisualizationBase].[ChartType]
from [UserQueryVisualizationBase] 
    left join [SystemUserBase] [lk_userqueryvisualization_createdby] on ([UserQueryVisualizationBase].[CreatedBy] = [lk_userqueryvisualization_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_userqueryvisualization_modifiedby] on ([UserQueryVisualizationBase].[ModifiedBy] = [lk_userqueryvisualization_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_userqueryvisualizationbase_createdonbehalfby] on ([UserQueryVisualizationBase].[CreatedOnBehalfBy] = [lk_userqueryvisualizationbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_userqueryvisualizationbase_modifiedonbehalfby] on ([UserQueryVisualizationBase].[ModifiedOnBehalfBy] = [lk_userqueryvisualizationbase_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner on ([UserQueryVisualizationBase].OwnerId = XXowner.OwnerId)
