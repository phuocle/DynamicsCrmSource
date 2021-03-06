USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[PostRegarding]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for PostRegarding
--
create view [dbo].[PostRegarding]
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

GO
