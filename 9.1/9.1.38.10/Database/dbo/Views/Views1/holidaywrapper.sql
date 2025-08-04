


--
-- base view for holidaywrapper
--
create view dbo.[holidaywrapper]
 (

    -- physical attributes
    [holidaywrapperId],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [name],
    [CreatedBy],
    [CreatedOnBehalfBy],
    [ModifiedBy],
    [ModifiedOnBehalfBy],
    [CalendarId],
    [Duration],
    [EndTime],
    [SelectedYear],
    [StartTime],
    [CreatedOn],
    [ModifiedOn]
) with view_metadata as
select

    -- physical attribute
    [holidaywrapperBase].[holidaywrapperId],
    [holidaywrapperBase].[VersionNumber],
    [holidaywrapperBase].[ImportSequenceNumber],
    [holidaywrapperBase].[OverriddenCreatedOn],
    [holidaywrapperBase].[TimeZoneRuleVersionNumber],
    [holidaywrapperBase].[UTCConversionTimeZoneCode],
    [holidaywrapperBase].[name],
    [holidaywrapperBase].[CreatedBy],
    [holidaywrapperBase].[CreatedOnBehalfBy],
    [holidaywrapperBase].[ModifiedBy],
    [holidaywrapperBase].[ModifiedOnBehalfBy],
    [holidaywrapperBase].[CalendarId],
    [holidaywrapperBase].[Duration],
    [holidaywrapperBase].[EndTime],
    [holidaywrapperBase].[SelectedYear],
    [holidaywrapperBase].[StartTime],
    [holidaywrapperBase].[CreatedOn],
    [holidaywrapperBase].[ModifiedOn]
from [holidaywrapperBase] 
