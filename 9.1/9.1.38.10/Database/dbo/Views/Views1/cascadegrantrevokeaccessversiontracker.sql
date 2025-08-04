


--
-- base view for cascadegrantrevokeaccessversiontracker
--
create view dbo.[cascadegrantrevokeaccessversiontracker]
 (

    -- physical attributes
    [cascadegrantrevokeaccessversiontrackerId],
    [name],
    [CreatedBy],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [ImportSequenceNumber],
    [MessageName],
    [ModifiedBy],
    [ModifiedOn],
    [ModifiedOnBehalfBy],
    [OverriddenCreatedOn],
    [ParentEntityId],
    [ParentObjectTypeCode],
    [statecode],
    [statuscode],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode]
) with view_metadata as
select

    -- physical attribute
    [cascadegrantrevokeaccessversiontrackerBase].[cascadegrantrevokeaccessversiontrackerId],
    [cascadegrantrevokeaccessversiontrackerBase].[name],
    [cascadegrantrevokeaccessversiontrackerBase].[CreatedBy],
    [cascadegrantrevokeaccessversiontrackerBase].[CreatedOn],
    [cascadegrantrevokeaccessversiontrackerBase].[CreatedOnBehalfBy],
    [cascadegrantrevokeaccessversiontrackerBase].[ImportSequenceNumber],
    [cascadegrantrevokeaccessversiontrackerBase].[MessageName],
    [cascadegrantrevokeaccessversiontrackerBase].[ModifiedBy],
    [cascadegrantrevokeaccessversiontrackerBase].[ModifiedOn],
    [cascadegrantrevokeaccessversiontrackerBase].[ModifiedOnBehalfBy],
    [cascadegrantrevokeaccessversiontrackerBase].[OverriddenCreatedOn],
    [cascadegrantrevokeaccessversiontrackerBase].[ParentEntityId],
    [cascadegrantrevokeaccessversiontrackerBase].[ParentObjectTypeCode],
    [cascadegrantrevokeaccessversiontrackerBase].[statecode],
    [cascadegrantrevokeaccessversiontrackerBase].[statuscode],
    [cascadegrantrevokeaccessversiontrackerBase].[TimeZoneRuleVersionNumber],
    [cascadegrantrevokeaccessversiontrackerBase].[UTCConversionTimeZoneCode]
from [cascadegrantrevokeaccessversiontrackerBase] 
