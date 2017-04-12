SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base view for AzureServiceConnection
--
create view [dbo].[AzureServiceConnection]
 (
    -- logical attributes
    [CreatedByName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedByName],
    [OrganizationIdName],

    -- physical attributes
    [AccountKey],
    [AzureServiceConnectionId],
    [ConnectionType],
    [CreatedBy],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [Description],
    [LastConnectionStatusCode],
    [LastConnectionTime],
    [ModifiedBy],
    [ModifiedOn],
    [ModifiedOnBehalfBy],
    [Name],
    [OrganizationId],
    [ServiceUri],
    [StateCode],
    [StatusCode]
) with view_metadata as
select
    -- logical attributes
    [lk_azureserviceconnection_createdby].[FullName],
    [lk_azureserviceconnection_createdonbehalfby].[FullName],
    [lk_azureserviceconnection_createdonbehalfby].[YomiFullName],
    [lk_azureserviceconnection_modifiedonbehalfby].[YomiFullName],
    [lk_azureserviceconnection_modifiedonbehalfby].[FullName],
    [lk_azureserviceconnection_modifiedby].[FullName],
    [organization_azureserviceconnection].[Name],

    -- physical attribute
    [AzureServiceConnectionBase].[AccountKey],
    [AzureServiceConnectionBase].[AzureServiceConnectionId],
    [AzureServiceConnectionBase].[ConnectionType],
    [AzureServiceConnectionBase].[CreatedBy],
    [AzureServiceConnectionBase].[CreatedOn],
    [AzureServiceConnectionBase].[CreatedOnBehalfBy],
    [AzureServiceConnectionBase].[Description],
    [AzureServiceConnectionBase].[LastConnectionStatusCode],
    [AzureServiceConnectionBase].[LastConnectionTime],
    [AzureServiceConnectionBase].[ModifiedBy],
    [AzureServiceConnectionBase].[ModifiedOn],
    [AzureServiceConnectionBase].[ModifiedOnBehalfBy],
    [AzureServiceConnectionBase].[Name],
    [AzureServiceConnectionBase].[OrganizationId],
    [AzureServiceConnectionBase].[ServiceUri],
    [AzureServiceConnectionBase].[StateCode],
    [AzureServiceConnectionBase].[StatusCode]
from [AzureServiceConnectionBase] 
    left join [SystemUserBase] [lk_azureserviceconnection_createdby] with(nolock) on ([AzureServiceConnectionBase].[CreatedBy] = [lk_azureserviceconnection_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_azureserviceconnection_createdonbehalfby] with(nolock) on ([AzureServiceConnectionBase].[CreatedOnBehalfBy] = [lk_azureserviceconnection_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_azureserviceconnection_modifiedby] with(nolock) on ([AzureServiceConnectionBase].[ModifiedBy] = [lk_azureserviceconnection_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_azureserviceconnection_modifiedonbehalfby] with(nolock) on ([AzureServiceConnectionBase].[ModifiedOnBehalfBy] = [lk_azureserviceconnection_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_azureserviceconnection] with(nolock) on ([AzureServiceConnectionBase].[OrganizationId] = [organization_azureserviceconnection].[OrganizationId])
GO
