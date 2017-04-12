USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[IntegrationStatus]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for IntegrationStatus
--
create view [dbo].[IntegrationStatus]
 (
    -- logical attributes
    [CreatedByYomiName],
    [CreatedByName],
    [ModifiedByYomiName],
    [ModifiedByName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [OrganizationIdName],

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
    [lk_integrationstatus_createdby].[YomiFullName],
    [lk_integrationstatus_createdby].[FullName],
    [lk_integrationstatus_modifiedby].[YomiFullName],
    [lk_integrationstatus_modifiedby].[FullName],
    [lk_integrationstatus_createdonbehalfby].[FullName],
    [lk_integrationstatus_createdonbehalfby].[YomiFullName],
    [lk_integrationstatus_modifiedonbehalfby].[FullName],
    [lk_integrationstatus_modifiedonbehalfby].[YomiFullName],
    [organization_integration_statuses].[Name],

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

GO
