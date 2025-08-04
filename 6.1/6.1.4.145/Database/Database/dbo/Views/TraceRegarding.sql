


--
-- base view for TraceRegarding
--
create view dbo.[TraceRegarding]
 (

    -- physical attributes
    [RegardingObjectId],
    [RegardingObjectIdName],
    [RegardingObjectIdYomiName],
    [RegardingObjectOwnerId],
    [RegardingObjectOwnerIdType],
    [RegardingObjectOwningBusinessUnit],
    [RegardingObjectTypeCode],
    [RegardingObjectTypeCodeForSharing],
    [TraceRegardingId]
) with view_metadata as
select

    -- physical attribute
    [TraceRegardingBase].[RegardingObjectId],
    [TraceRegardingBase].[RegardingObjectIdName],
    [TraceRegardingBase].[RegardingObjectIdYomiName],
    [TraceRegardingBase].[RegardingObjectOwnerId],
    [TraceRegardingBase].[RegardingObjectOwnerIdType],
    [TraceRegardingBase].[RegardingObjectOwningBusinessUnit],
    [TraceRegardingBase].[RegardingObjectTypeCode],
    [TraceRegardingBase].[RegardingObjectTypeCodeForSharing],
    [TraceRegardingBase].[TraceRegardingId]
from [TraceRegardingBase] 
