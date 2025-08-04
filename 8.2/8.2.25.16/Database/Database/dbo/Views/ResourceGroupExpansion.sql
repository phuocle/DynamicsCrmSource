


--
-- base view for ResourceGroupExpansion
--
create view dbo.[ResourceGroupExpansion]
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
