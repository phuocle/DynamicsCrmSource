


--
-- base view for IntegrationStatus
--
create view dbo.[IntegrationStatus]
 (
    -- logical attributes
    [ModifiedOnBehalfByName],
    [CreatedByYomiName],
    [ModifiedByYomiName],
    [CreatedByName],
    [ModifiedByName],
    [OrganizationIdName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],

    -- physical attributes
    [IntegrationEntryId],
    [SystemName],
    [ObjectId],
    [ObjectTypeCode],
    [StateCode],
    [StateDescription],
    [StatusCode],
    [StatusDescription],
    [CreatedOn],
    [ModifiedOn],
    [CreatedBy],
    [ModifiedBy],
    [OrganizationId],
    [VersionNumber],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy]
) with view_metadata as
select
    -- logical attributes
    [lk_integrationstatus_modifiedonbehalfby].[FullName],
    [lk_integrationstatus_createdby].[YomiFullName],
    [lk_integrationstatus_modifiedby].[YomiFullName],
    [lk_integrationstatus_createdby].[FullName],
    [lk_integrationstatus_modifiedby].[FullName],
    [organization_integration_statuses].[Name],
    [lk_integrationstatus_modifiedonbehalfby].[YomiFullName],
    [lk_integrationstatus_createdonbehalfby].[FullName],
    [lk_integrationstatus_createdonbehalfby].[YomiFullName],

    -- physical attribute
    [IntegrationStatusBase].[IntegrationEntryId],
    [IntegrationStatusBase].[SystemName],
    [IntegrationStatusBase].[ObjectId],
    [IntegrationStatusBase].[ObjectTypeCode],
    [IntegrationStatusBase].[StateCode],
    [IntegrationStatusBase].[StateDescription],
    [IntegrationStatusBase].[StatusCode],
    [IntegrationStatusBase].[StatusDescription],
    [IntegrationStatusBase].[CreatedOn],
    [IntegrationStatusBase].[ModifiedOn],
    [IntegrationStatusBase].[CreatedBy],
    [IntegrationStatusBase].[ModifiedBy],
    [IntegrationStatusBase].[OrganizationId],
    [IntegrationStatusBase].[VersionNumber],
    [IntegrationStatusBase].[CreatedOnBehalfBy],
    [IntegrationStatusBase].[ModifiedOnBehalfBy]
from [IntegrationStatusBase] 
    left join [SystemUserBase] [lk_integrationstatus_createdby] with(nolock) on ([IntegrationStatusBase].[CreatedBy] = [lk_integrationstatus_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_integrationstatus_createdonbehalfby] with(nolock) on ([IntegrationStatusBase].[CreatedOnBehalfBy] = [lk_integrationstatus_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_integrationstatus_modifiedby] with(nolock) on ([IntegrationStatusBase].[ModifiedBy] = [lk_integrationstatus_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_integrationstatus_modifiedonbehalfby] with(nolock) on ([IntegrationStatusBase].[ModifiedOnBehalfBy] = [lk_integrationstatus_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_integration_statuses] with(nolock) on ([IntegrationStatusBase].[OrganizationId] = [organization_integration_statuses].[OrganizationId])
