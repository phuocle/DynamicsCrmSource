


--
-- base view for package
--
create view dbo.[package]
 (
    -- logical attributes
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [OrganizationIdName],
    [CreatedByName],
    [CreatedByYomiName],

    -- physical attributes
    [packageId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [OrganizationId],
    [statecode],
    [statuscode],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [PackageUniqueName],
    [AppId],
    [ApplicationName],
    [InstalledOn],
    [PackageInstanceId],
    [PackageInstanceOperationId],
    [PackageVersion],
    [PublisherId],
    [PublisherName],
    [TPSPackageId]
) with view_metadata as
select
    -- logical attributes
    [lk_package_createdonbehalfby].[FullName],
    [lk_package_createdonbehalfby].[YomiFullName],
    [lk_package_modifiedby].[FullName],
    [lk_package_modifiedby].[YomiFullName],
    [lk_package_modifiedonbehalfby].[FullName],
    [lk_package_modifiedonbehalfby].[YomiFullName],
    [organization_package].[Name],
    [lk_package_createdby].[FullName],
    [lk_package_createdby].[YomiFullName],

    -- physical attribute
    [packageBase].[packageId],
    [packageBase].[CreatedOn],
    [packageBase].[CreatedBy],
    [packageBase].[ModifiedOn],
    [packageBase].[ModifiedBy],
    [packageBase].[CreatedOnBehalfBy],
    [packageBase].[ModifiedOnBehalfBy],
    [packageBase].[OrganizationId],
    [packageBase].[statecode],
    [packageBase].[statuscode],
    [packageBase].[VersionNumber],
    [packageBase].[ImportSequenceNumber],
    [packageBase].[OverriddenCreatedOn],
    [packageBase].[TimeZoneRuleVersionNumber],
    [packageBase].[UTCConversionTimeZoneCode],
    [packageBase].[PackageUniqueName],
    [packageBase].[AppId],
    [packageBase].[ApplicationName],
    [packageBase].[InstalledOn],
    [packageBase].[PackageInstanceId],
    [packageBase].[PackageInstanceOperationId],
    [packageBase].[PackageVersion],
    [packageBase].[PublisherId],
    [packageBase].[PublisherName],
    [packageBase].[TPSPackageId]
from [packageBase] 
    left join [SystemUserBase] [lk_package_createdby] on ([packageBase].[CreatedBy] = [lk_package_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_package_createdonbehalfby] on ([packageBase].[CreatedOnBehalfBy] = [lk_package_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_package_modifiedby] on ([packageBase].[ModifiedBy] = [lk_package_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_package_modifiedonbehalfby] on ([packageBase].[ModifiedOnBehalfBy] = [lk_package_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_package] on ([packageBase].[OrganizationId] = [organization_package].[OrganizationId])
