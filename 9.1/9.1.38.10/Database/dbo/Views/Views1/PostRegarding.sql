


--
-- base view for PostRegarding
--
create view dbo.[PostRegarding]
 (

    -- physical attributes
    [PostRegardingId],
    [RegardingObjectId],
    [RegardingObjectIdName],
    [RegardingObjectIdYomiName],
    [RegardingObjectOwnerId],
    [RegardingObjectOwnerIdType],
    [RegardingObjectOwningBusinessUnit],
    [RegardingObjectTypeCode],
    [RegardingObjectTypeCodeForSharing],
    [LatestManualPostModifiedOn],
    [LatestAutoPostModifiedOn]
) with view_metadata as
select

    -- physical attribute
    [PostRegardingBase].[PostRegardingId],
    [PostRegardingBase].[RegardingObjectId],
    [PostRegardingBase].[RegardingObjectIdName],
    [PostRegardingBase].[RegardingObjectIdYomiName],
    [PostRegardingBase].[RegardingObjectOwnerId],
    [PostRegardingBase].[RegardingObjectOwnerIdType],
    [PostRegardingBase].[RegardingObjectOwningBusinessUnit],
    [PostRegardingBase].[RegardingObjectTypeCode],
    [PostRegardingBase].[RegardingObjectTypeCodeForSharing],
    [PostRegardingBase].[LatestManualPostModifiedOn],
    [PostRegardingBase].[LatestAutoPostModifiedOn]
from [PostRegardingBase] 
