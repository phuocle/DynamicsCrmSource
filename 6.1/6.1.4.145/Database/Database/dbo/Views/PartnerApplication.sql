


--
-- base view for PartnerApplication
--
create view dbo.[PartnerApplication]
 (
    -- logical attributes
    [CreatedByYomiName],
    [ModifiedByName],
    [CreatedByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByYomiName],
    [OrganizationIdName],
    [ModifiedOnBehalfByName],
    [ModifiedByYomiName],
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
    [PartnerApplicationId],
    [Name],
    [PrincipalId],
    [ApplicationRole],
    [UseAuthorizationServer],
    [Realm],
    [TenantId],
    [MetadataUrl]
) with view_metadata as
select
    -- logical attributes
    [lk_partnerapplication_createdby].[YomiFullName],
    [lk_partnerapplication_modifiedby].[FullName],
    [lk_partnerapplication_createdby].[FullName],
    [lk_partnerapplication_createdonbehalfby].[YomiFullName],
    [lk_partnerapplication_modifiedonbehalfby].[YomiFullName],
    [lk_partnerapplication_organizationid].[Name],
    [lk_partnerapplication_modifiedonbehalfby].[FullName],
    [lk_partnerapplication_modifiedby].[YomiFullName],
    [lk_partnerapplication_createdonbehalfby].[FullName],

    -- physical attribute
    [PartnerApplicationBase].[CreatedBy],
    [PartnerApplicationBase].[CreatedOn],
    [PartnerApplicationBase].[CreatedOnBehalfBy],
    [PartnerApplicationBase].[ModifiedBy],
    [PartnerApplicationBase].[ModifiedOn],
    [PartnerApplicationBase].[ModifiedOnBehalfBy],
    [PartnerApplicationBase].[OrganizationId],
    [PartnerApplicationBase].[StateCode],
    [PartnerApplicationBase].[StatusCode],
    [PartnerApplicationBase].[TimeZoneRuleVersionNumber],
    [PartnerApplicationBase].[UTCConversionTimeZoneCode],
    [PartnerApplicationBase].[PartnerApplicationId],
    [PartnerApplicationBase].[Name],
    [PartnerApplicationBase].[PrincipalId],
    [PartnerApplicationBase].[ApplicationRole],
    [PartnerApplicationBase].[UseAuthorizationServer],
    [PartnerApplicationBase].[Realm],
    [PartnerApplicationBase].[TenantId],
    [PartnerApplicationBase].[MetadataUrl]
from [PartnerApplicationBase] 
    left join [SystemUserBase] [lk_partnerapplication_createdby] with(nolock) on ([PartnerApplicationBase].[CreatedBy] = [lk_partnerapplication_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_partnerapplication_createdonbehalfby] with(nolock) on ([PartnerApplicationBase].[CreatedOnBehalfBy] = [lk_partnerapplication_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_partnerapplication_modifiedby] with(nolock) on ([PartnerApplicationBase].[ModifiedBy] = [lk_partnerapplication_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_partnerapplication_modifiedonbehalfby] with(nolock) on ([PartnerApplicationBase].[ModifiedOnBehalfBy] = [lk_partnerapplication_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [lk_partnerapplication_organizationid] with(nolock) on ([PartnerApplicationBase].[OrganizationId] = [lk_partnerapplication_organizationid].[OrganizationId])
