


--
-- base view for TimeZoneLocalizedName
--
create view dbo.[TimeZoneLocalizedName]
 (
    -- logical attributes
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [ModifiedOnBehalfByName],

    -- physical attributes
    [CultureId],
    [ModifiedOn],
    [CreatedOn],
    [TimeZoneDefinitionId],
    [StandardName],
    [VersionNumber],
    [ModifiedBy],
    [TimeZoneLocalizedNameId],
    [UserInterfaceName],
    [DaylightName],
    [CreatedBy],
    [OrganizationId],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy]
) with view_metadata as
select
    -- logical attributes
    [lk_timezonelocalizedname_createdonbehalfby].[YomiFullName],
    [lk_timezonelocalizedname_modifiedonbehalfby].[YomiFullName],
    [lk_timezonelocalizedname_createdonbehalfby].[FullName],
    [lk_timezonelocalizedname_modifiedonbehalfby].[FullName],

    -- physical attribute
    [TimeZoneLocalizedNameBase].[CultureId],
    [TimeZoneLocalizedNameBase].[ModifiedOn],
    [TimeZoneLocalizedNameBase].[CreatedOn],
    [TimeZoneLocalizedNameBase].[TimeZoneDefinitionId],
    [TimeZoneLocalizedNameBase].[StandardName],
    [TimeZoneLocalizedNameBase].[VersionNumber],
    [TimeZoneLocalizedNameBase].[ModifiedBy],
    [TimeZoneLocalizedNameBase].[TimeZoneLocalizedNameId],
    [TimeZoneLocalizedNameBase].[UserInterfaceName],
    [TimeZoneLocalizedNameBase].[DaylightName],
    [TimeZoneLocalizedNameBase].[CreatedBy],
    [TimeZoneLocalizedNameBase].[OrganizationId],
    [TimeZoneLocalizedNameBase].[CreatedOnBehalfBy],
    [TimeZoneLocalizedNameBase].[ModifiedOnBehalfBy]
from [TimeZoneLocalizedNameBase] 
    left join [SystemUserBase] [lk_timezonelocalizedname_createdonbehalfby] with(nolock) on ([TimeZoneLocalizedNameBase].[CreatedOnBehalfBy] = [lk_timezonelocalizedname_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_timezonelocalizedname_modifiedonbehalfby] with(nolock) on ([TimeZoneLocalizedNameBase].[ModifiedOnBehalfBy] = [lk_timezonelocalizedname_modifiedonbehalfby].[SystemUserId])
