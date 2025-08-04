


--
-- base view for TimeZoneRule
--
create view dbo.[TimeZoneRule]
 (
    -- logical attributes
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByName],

    -- physical attributes
    [ModifiedBy],
    [StandardDay],
    [ModifiedOn],
    [StandardMinute],
    [StandardBias],
    [StandardYear],
    [DaylightMonth],
    [StandardDayOfWeek],
    [DaylightSecond],
    [Bias],
    [TimeZoneRuleVersionNumber],
    [DaylightBias],
    [StandardMonth],
    [EffectiveDateTime],
    [CreatedBy],
    [DaylightHour],
    [StandardHour],
    [CreatedOn],
    [DaylightYear],
    [StandardSecond],
    [DaylightMinute],
    [TimeZoneDefinitionId],
    [DaylightDayOfWeek],
    [TimeZoneRuleId],
    [DaylightDay],
    [OrganizationId],
    [VersionNumber],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy]
) with view_metadata as
select
    -- logical attributes
    [lk_timezonerule_createdonbehalfby].[YomiFullName],
    [lk_timezonerule_modifiedonbehalfby].[FullName],
    [lk_timezonerule_modifiedonbehalfby].[YomiFullName],
    [lk_timezonerule_createdonbehalfby].[FullName],

    -- physical attribute
    [TimeZoneRuleBase].[ModifiedBy],
    [TimeZoneRuleBase].[StandardDay],
    [TimeZoneRuleBase].[ModifiedOn],
    [TimeZoneRuleBase].[StandardMinute],
    [TimeZoneRuleBase].[StandardBias],
    [TimeZoneRuleBase].[StandardYear],
    [TimeZoneRuleBase].[DaylightMonth],
    [TimeZoneRuleBase].[StandardDayOfWeek],
    [TimeZoneRuleBase].[DaylightSecond],
    [TimeZoneRuleBase].[Bias],
    [TimeZoneRuleBase].[TimeZoneRuleVersionNumber],
    [TimeZoneRuleBase].[DaylightBias],
    [TimeZoneRuleBase].[StandardMonth],
    [TimeZoneRuleBase].[EffectiveDateTime],
    [TimeZoneRuleBase].[CreatedBy],
    [TimeZoneRuleBase].[DaylightHour],
    [TimeZoneRuleBase].[StandardHour],
    [TimeZoneRuleBase].[CreatedOn],
    [TimeZoneRuleBase].[DaylightYear],
    [TimeZoneRuleBase].[StandardSecond],
    [TimeZoneRuleBase].[DaylightMinute],
    [TimeZoneRuleBase].[TimeZoneDefinitionId],
    [TimeZoneRuleBase].[DaylightDayOfWeek],
    [TimeZoneRuleBase].[TimeZoneRuleId],
    [TimeZoneRuleBase].[DaylightDay],
    [TimeZoneRuleBase].[OrganizationId],
    [TimeZoneRuleBase].[VersionNumber],
    [TimeZoneRuleBase].[CreatedOnBehalfBy],
    [TimeZoneRuleBase].[ModifiedOnBehalfBy]
from [TimeZoneRuleBase] 
    left join [SystemUserBase] [lk_timezonerule_createdonbehalfby] with(nolock) on ([TimeZoneRuleBase].[CreatedOnBehalfBy] = [lk_timezonerule_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_timezonerule_modifiedonbehalfby] with(nolock) on ([TimeZoneRuleBase].[ModifiedOnBehalfBy] = [lk_timezonerule_modifiedonbehalfby].[SystemUserId])
