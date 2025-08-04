


--
-- base view for TimeZoneDefinition
--
create view dbo.[TimeZoneDefinition]
 (
    -- logical attributes
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],

    -- physical attributes
    [ModifiedOn],
    [TimeZoneCode],
    [OrganizationId],
    [VersionNumber],
    [TimeZoneDefinitionId],
    [CreatedOn],
    [Bias],
    [DaylightName],
    [CreatedBy],
    [UserInterfaceName],
    [StandardName],
    [RetiredOrder],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy]
) with view_metadata as
select
    -- logical attributes
    [lk_timezonedefinition_createdonbehalfby].[YomiFullName],
    [lk_timezonedefinition_createdonbehalfby].[FullName],
    [lk_timezonedefinition_modifiedonbehalfby].[YomiFullName],
    [lk_timezonedefinition_modifiedonbehalfby].[FullName],

    -- physical attribute
    [TimeZoneDefinitionBase].[ModifiedOn],
    [TimeZoneDefinitionBase].[TimeZoneCode],
    [TimeZoneDefinitionBase].[OrganizationId],
    [TimeZoneDefinitionBase].[VersionNumber],
    [TimeZoneDefinitionBase].[TimeZoneDefinitionId],
    [TimeZoneDefinitionBase].[CreatedOn],
    [TimeZoneDefinitionBase].[Bias],
    [TimeZoneDefinitionBase].[DaylightName],
    [TimeZoneDefinitionBase].[CreatedBy],
    [TimeZoneDefinitionBase].[UserInterfaceName],
    [TimeZoneDefinitionBase].[StandardName],
    [TimeZoneDefinitionBase].[RetiredOrder],
    [TimeZoneDefinitionBase].[ModifiedBy],
    [TimeZoneDefinitionBase].[CreatedOnBehalfBy],
    [TimeZoneDefinitionBase].[ModifiedOnBehalfBy]
from [TimeZoneDefinitionBase] 
    left join [SystemUserBase] [lk_timezonedefinition_createdonbehalfby]  on ([TimeZoneDefinitionBase].[CreatedOnBehalfBy] = [lk_timezonedefinition_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_timezonedefinition_modifiedonbehalfby]  on ([TimeZoneDefinitionBase].[ModifiedOnBehalfBy] = [lk_timezonedefinition_modifiedonbehalfby].[SystemUserId])
