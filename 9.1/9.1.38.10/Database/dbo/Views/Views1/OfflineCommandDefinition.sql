


--
-- base view for OfflineCommandDefinition
--
create view dbo.[OfflineCommandDefinition]
 (
    -- logical attributes
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [OrganizationIdName],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedByYomiName],
    [ModifiedByName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],

    -- physical attributes
    [CommandDefinitionId],
    [CommandName],
    [CommandDefinition],
    [SolutionName],
    [PrimaryEntityLogicalName],
    [OrganizationId],
    [CreatedBy],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [ModifiedBy],
    [ModifiedOn],
    [ModifiedOnBehalfBy],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn]
) with view_metadata as
select
    -- logical attributes
    [lk_offlinecommanddefinition_modifiedonbehalfby].[YomiFullName],
    [lk_offlinecommanddefinition_modifiedonbehalfby].[FullName],
    [offlinecommanddefinition_organization].[Name],
    [lk_offlinecommanddefinition_createdby].[FullName],
    [lk_offlinecommanddefinition_createdby].[YomiFullName],
    [lk_offlinecommanddefinition_modifiedby].[YomiFullName],
    [lk_offlinecommanddefinition_modifiedby].[FullName],
    [lk_offlinecommanddefinition_createdonbehalfby].[FullName],
    [lk_offlinecommanddefinition_createdonbehalfby].[YomiFullName],

    -- physical attribute
    [OfflineCommandDefinitionBase].[CommandDefinitionId],
    [OfflineCommandDefinitionBase].[CommandName],
    [OfflineCommandDefinitionBase].[CommandDefinition],
    [OfflineCommandDefinitionBase].[SolutionName],
    [OfflineCommandDefinitionBase].[PrimaryEntityLogicalName],
    [OfflineCommandDefinitionBase].[OrganizationId],
    [OfflineCommandDefinitionBase].[CreatedBy],
    [OfflineCommandDefinitionBase].[CreatedOn],
    [OfflineCommandDefinitionBase].[CreatedOnBehalfBy],
    [OfflineCommandDefinitionBase].[ModifiedBy],
    [OfflineCommandDefinitionBase].[ModifiedOn],
    [OfflineCommandDefinitionBase].[ModifiedOnBehalfBy],
    [OfflineCommandDefinitionBase].[VersionNumber],
    [OfflineCommandDefinitionBase].[ImportSequenceNumber],
    [OfflineCommandDefinitionBase].[OverriddenCreatedOn]
from [OfflineCommandDefinitionBase] 
    left join [SystemUserBase] [lk_offlinecommanddefinition_createdby]  on ([OfflineCommandDefinitionBase].[CreatedBy] = [lk_offlinecommanddefinition_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_offlinecommanddefinition_createdonbehalfby]  on ([OfflineCommandDefinitionBase].[CreatedOnBehalfBy] = [lk_offlinecommanddefinition_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_offlinecommanddefinition_modifiedby]  on ([OfflineCommandDefinitionBase].[ModifiedBy] = [lk_offlinecommanddefinition_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_offlinecommanddefinition_modifiedonbehalfby]  on ([OfflineCommandDefinitionBase].[ModifiedOnBehalfBy] = [lk_offlinecommanddefinition_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [offlinecommanddefinition_organization]  on ([OfflineCommandDefinitionBase].[OrganizationId] = [offlinecommanddefinition_organization].[OrganizationId])
