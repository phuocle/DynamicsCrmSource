USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[ResourceGroupExpansion]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for ResourceGroupExpansion
--
create view [dbo].[ResourceGroupExpansion]
 (

    -- physical attributes
    [ObjectId],
    [ResourceGroupExpansionId],
    [ModifiedOn],
    [ItemId],
    [MethodCode]
) with view_metadata as
select

    -- physical attribute
    [ResourceGroupExpansionBase].[ObjectId],
    [ResourceGroupExpansionBase].[ResourceGroupExpansionId],
    [ResourceGroupExpansionBase].[ModifiedOn],
    [ResourceGroupExpansionBase].[ItemId],
    [ResourceGroupExpansionBase].[MethodCode]
from [ResourceGroupExpansionBase] 

GO
