USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[TraceRegarding]    Script Date: 4/10/2017 9:59:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for TraceRegarding
--
create view [dbo].[TraceRegarding]
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

GO
