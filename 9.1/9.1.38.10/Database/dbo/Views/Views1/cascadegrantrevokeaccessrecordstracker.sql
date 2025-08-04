


--
-- base view for cascadegrantrevokeaccessrecordstracker
--
create view dbo.[cascadegrantrevokeaccessrecordstracker]
 (
    -- logical attributes
    [SyncTrackerIdName],
    [RecordsAttachment_Name],

    -- physical attributes
    [cascadegrantrevokeaccessrecordstrackerId],
    [name],
    [CreatedBy],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [ImportSequenceNumber],
    [ModifiedBy],
    [ModifiedOn],
    [ModifiedOnBehalfBy],
    [OverriddenCreatedOn],
    [ProcessedRecords],
    [RecordsAttachment],
    [RecordsJson],
    [statecode],
    [statuscode],
    [SyncTrackerId],
    [TimeZoneRuleVersionNumber],
    [TotalRecords],
    [UTCConversionTimeZoneCode]
) with view_metadata as
select
    -- logical attributes
    [SyncTrackerIdLookup].[name],
    [FileAttachment_cascadegrantrevokeaccessrecordstracker_RecordsAttachment].[FileName],

    -- physical attribute
    [cascadegrantrevokeaccessrecordstrackerBase].[cascadegrantrevokeaccessrecordstrackerId],
    [cascadegrantrevokeaccessrecordstrackerBase].[name],
    [cascadegrantrevokeaccessrecordstrackerBase].[CreatedBy],
    [cascadegrantrevokeaccessrecordstrackerBase].[CreatedOn],
    [cascadegrantrevokeaccessrecordstrackerBase].[CreatedOnBehalfBy],
    [cascadegrantrevokeaccessrecordstrackerBase].[ImportSequenceNumber],
    [cascadegrantrevokeaccessrecordstrackerBase].[ModifiedBy],
    [cascadegrantrevokeaccessrecordstrackerBase].[ModifiedOn],
    [cascadegrantrevokeaccessrecordstrackerBase].[ModifiedOnBehalfBy],
    [cascadegrantrevokeaccessrecordstrackerBase].[OverriddenCreatedOn],
    [cascadegrantrevokeaccessrecordstrackerBase].[ProcessedRecords],
    [cascadegrantrevokeaccessrecordstrackerBase].[RecordsAttachment],
    [cascadegrantrevokeaccessrecordstrackerBase].[RecordsJson],
    [cascadegrantrevokeaccessrecordstrackerBase].[statecode],
    [cascadegrantrevokeaccessrecordstrackerBase].[statuscode],
    [cascadegrantrevokeaccessrecordstrackerBase].[SyncTrackerId],
    [cascadegrantrevokeaccessrecordstrackerBase].[TimeZoneRuleVersionNumber],
    [cascadegrantrevokeaccessrecordstrackerBase].[TotalRecords],
    [cascadegrantrevokeaccessrecordstrackerBase].[UTCConversionTimeZoneCode]
from [cascadegrantrevokeaccessrecordstrackerBase] 
    left join [FileAttachmentBase] [FileAttachment_cascadegrantrevokeaccessrecordstracker_RecordsAttachment] on ([cascadegrantrevokeaccessrecordstrackerBase].[RecordsAttachment] = [FileAttachment_cascadegrantrevokeaccessrecordstracker_RecordsAttachment].[FileAttachmentId])
    left join [cascadegrantrevokeaccessversiontrackerBase] [SyncTrackerIdLookup] on ([cascadegrantrevokeaccessrecordstrackerBase].[SyncTrackerId] = [SyncTrackerIdLookup].[cascadegrantrevokeaccessversiontrackerId])
