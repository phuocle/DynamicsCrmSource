


--
-- base view for ACIViewMapper
--
create view dbo.[ACIViewMapper]
 (
    -- logical attributes
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [CreatedByYomiName],
    [CreatedByName],
    [ModifiedByYomiName],
    [ModifiedByName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [OrganizationIdName],

    -- physical attributes
    [ACIViewMapperId],
    [ViewName],
    [CreatedBy],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [ModifiedBy],
    [ModifiedOn],
    [ModifiedOnBehalfBy],
    [OrganizationId],
    [statecode],
    [StatusCode],
    [UTCConversionTimeZoneCode],
    [VersionNumber],
    [WebApplicationEndPoint]
) with view_metadata as
select
    -- logical attributes
    [lk_ACIViewMapper_modifiedonbehalfby].[YomiFullName],
    [lk_ACIViewMapper_modifiedonbehalfby].[FullName],
    [lk_ACIViewMapper_createdby].[YomiFullName],
    [lk_ACIViewMapper_createdby].[FullName],
    [lk_ACIViewMapper_modifiedby].[YomiFullName],
    [lk_ACIViewMapper_modifiedby].[FullName],
    [lk_ACIViewMapper_createdonbehalfby].[YomiFullName],
    [lk_ACIViewMapper_createdonbehalfby].[FullName],
    [organization_aciviewmapper].[Name],

    -- physical attribute
    [ACIViewMapperBase].[ACIViewMapperId],
    [ACIViewMapperBase].[ViewName],
    [ACIViewMapperBase].[CreatedBy],
    [ACIViewMapperBase].[CreatedOn],
    [ACIViewMapperBase].[CreatedOnBehalfBy],
    [ACIViewMapperBase].[ModifiedBy],
    [ACIViewMapperBase].[ModifiedOn],
    [ACIViewMapperBase].[ModifiedOnBehalfBy],
    [ACIViewMapperBase].[OrganizationId],
    [ACIViewMapperBase].[statecode],
    [ACIViewMapperBase].[StatusCode],
    [ACIViewMapperBase].[UTCConversionTimeZoneCode],
    [ACIViewMapperBase].[VersionNumber],
    [ACIViewMapperBase].[WebApplicationEndPoint]
from [ACIViewMapperBase] 
    left join [SystemUserBase] [lk_ACIViewMapper_createdby]  on ([ACIViewMapperBase].[CreatedBy] = [lk_ACIViewMapper_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_ACIViewMapper_createdonbehalfby]  on ([ACIViewMapperBase].[CreatedOnBehalfBy] = [lk_ACIViewMapper_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_ACIViewMapper_modifiedby]  on ([ACIViewMapperBase].[ModifiedBy] = [lk_ACIViewMapper_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_ACIViewMapper_modifiedonbehalfby]  on ([ACIViewMapperBase].[ModifiedOnBehalfBy] = [lk_ACIViewMapper_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_aciviewmapper]  on ([ACIViewMapperBase].[OrganizationId] = [organization_aciviewmapper].[OrganizationId])
