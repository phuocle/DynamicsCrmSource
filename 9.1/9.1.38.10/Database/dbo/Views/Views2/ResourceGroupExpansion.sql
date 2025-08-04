


--
-- base view for ResourceGroupExpansion
--
create view dbo.[ResourceGroupExpansion]
 (

    -- physical attributes
    [ResourceGroupExpansionId],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [Name],
    [ItemId],
    [MethodCode],
    [ModifiedOn],
    [ObjectId]
) with view_metadata as
select

    -- physical attribute
    [ResourceGroupExpansionBase].[ResourceGroupExpansionId],
    [ResourceGroupExpansionBase].[VersionNumber],
    [ResourceGroupExpansionBase].[ImportSequenceNumber],
    [ResourceGroupExpansionBase].[OverriddenCreatedOn],
    [ResourceGroupExpansionBase].[TimeZoneRuleVersionNumber],
    [ResourceGroupExpansionBase].[UTCConversionTimeZoneCode],
    [ResourceGroupExpansionBase].[Name],
    [ResourceGroupExpansionBase].[ItemId],
    [ResourceGroupExpansionBase].[MethodCode],
    [ResourceGroupExpansionBase].[ModifiedOn],
    [ResourceGroupExpansionBase].[ObjectId]
from [ResourceGroupExpansionBase] 
