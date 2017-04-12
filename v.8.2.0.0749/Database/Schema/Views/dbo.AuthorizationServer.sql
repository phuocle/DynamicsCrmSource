SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base view for AuthorizationServer
--
create view [dbo].[AuthorizationServer]
 (
    -- logical attributes
    [CreatedByName],
    [CreatedByYomiName],
    [OrganizationIdName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],

    -- physical attributes
    [CreatedBy],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [ModifiedBy],
    [ModifiedOn],
    [ModifiedOnBehalfBy],
    [OrganizationId],
    [StateCode],
    [StatusCode],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [AuthorizationServerId],
    [Name],
    [PrincipalId],
    [Realm],
    [TenantId],
    [MetadataUrl],
    [Metadata],
    [MetadataRefreshedOn],
    [AuthorizationServerType]
) with view_metadata as
select
    -- logical attributes
    [lk_authorizationserver_createdby].[FullName],
    [lk_authorizationserver_createdby].[YomiFullName],
    [lk_authorizationserver_organizationid].[Name],
    [lk_authorizationserver_modifiedonbehalfby].[YomiFullName],
    [lk_authorizationserver_modifiedonbehalfby].[FullName],
    [lk_authorizationserver_modifiedby].[FullName],
    [lk_authorizationserver_modifiedby].[YomiFullName],
    [lk_authorizationserver_createdonbehalfby].[YomiFullName],
    [lk_authorizationserver_createdonbehalfby].[FullName],

    -- physical attribute
    [AuthorizationServerBase].[CreatedBy],
    [AuthorizationServerBase].[CreatedOn],
    [AuthorizationServerBase].[CreatedOnBehalfBy],
    [AuthorizationServerBase].[ModifiedBy],
    [AuthorizationServerBase].[ModifiedOn],
    [AuthorizationServerBase].[ModifiedOnBehalfBy],
    [AuthorizationServerBase].[OrganizationId],
    [AuthorizationServerBase].[StateCode],
    [AuthorizationServerBase].[StatusCode],
    [AuthorizationServerBase].[TimeZoneRuleVersionNumber],
    [AuthorizationServerBase].[UTCConversionTimeZoneCode],
    [AuthorizationServerBase].[AuthorizationServerId],
    [AuthorizationServerBase].[Name],
    [AuthorizationServerBase].[PrincipalId],
    [AuthorizationServerBase].[Realm],
    [AuthorizationServerBase].[TenantId],
    [AuthorizationServerBase].[MetadataUrl],
    [AuthorizationServerBase].[Metadata],
    [AuthorizationServerBase].[MetadataRefreshedOn],
    [AuthorizationServerBase].[AuthorizationServerType]
from [AuthorizationServerBase] 
    left join [SystemUserBase] [lk_authorizationserver_createdby] with(nolock) on ([AuthorizationServerBase].[CreatedBy] = [lk_authorizationserver_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_authorizationserver_createdonbehalfby] with(nolock) on ([AuthorizationServerBase].[CreatedOnBehalfBy] = [lk_authorizationserver_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_authorizationserver_modifiedby] with(nolock) on ([AuthorizationServerBase].[ModifiedBy] = [lk_authorizationserver_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_authorizationserver_modifiedonbehalfby] with(nolock) on ([AuthorizationServerBase].[ModifiedOnBehalfBy] = [lk_authorizationserver_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [lk_authorizationserver_organizationid] with(nolock) on ([AuthorizationServerBase].[OrganizationId] = [lk_authorizationserver_organizationid].[OrganizationId])
GO
