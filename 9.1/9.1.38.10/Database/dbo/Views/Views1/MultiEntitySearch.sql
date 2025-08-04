


--
-- base view for MultiEntitySearch
--
create view dbo.[MultiEntitySearch]
 (
    -- logical attributes
    [ModifiedByName],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],

    -- physical attributes
    [CreatedBy],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [MultiEntitySearchId],
    [Name],
    [ModifiedBy],
    [ModifiedOnBehalfBy],
    [ModifiedOn],
    [VersionNumber]
) with view_metadata as
select
    -- logical attributes
    [multientitysearch_modifiedby].[FullName],
    [multientitysearch_createdby].[FullName],
    [multientitysearch_createdby].[YomiFullName],
    [multientitysearch_modifiedonbehalfby].[FullName],
    [multientitysearch_modifiedonbehalfby].[YomiFullName],
    [multientitysearch_createdonbehalfby].[FullName],
    [multientitysearch_createdonbehalfby].[YomiFullName],

    -- physical attribute
    [MultiEntitySearchBase].[CreatedBy],
    [MultiEntitySearchBase].[CreatedOn],
    [MultiEntitySearchBase].[CreatedOnBehalfBy],
    [MultiEntitySearchBase].[MultiEntitySearchId],
    [MultiEntitySearchBase].[Name],
    [MultiEntitySearchBase].[ModifiedBy],
    [MultiEntitySearchBase].[ModifiedOnBehalfBy],
    [MultiEntitySearchBase].[ModifiedOn],
    [MultiEntitySearchBase].[VersionNumber]
from [MultiEntitySearchBase] 
    left join [SystemUserBase] [multientitysearch_createdby]  on ([MultiEntitySearchBase].[CreatedBy] = [multientitysearch_createdby].[SystemUserId])
    left join [SystemUserBase] [multientitysearch_createdonbehalfby]  on ([MultiEntitySearchBase].[CreatedOnBehalfBy] = [multientitysearch_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [multientitysearch_modifiedby]  on ([MultiEntitySearchBase].[ModifiedBy] = [multientitysearch_modifiedby].[SystemUserId])
    left join [SystemUserBase] [multientitysearch_modifiedonbehalfby]  on ([MultiEntitySearchBase].[ModifiedOnBehalfBy] = [multientitysearch_modifiedonbehalfby].[SystemUserId])
