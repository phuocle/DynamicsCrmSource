


--
-- base view for OrganizationStatistic
--
create view dbo.[OrganizationStatistic]
 (

    -- physical attributes
    [Hour],
    [StatisticType],
    [OrganizationStatisticId],
    [ServerName],
    [StatisticValue]
) with view_metadata as
select

    -- physical attribute
    [OrganizationStatisticBase].[Hour],
    [OrganizationStatisticBase].[StatisticType],
    [OrganizationStatisticBase].[OrganizationStatisticId],
    [OrganizationStatisticBase].[ServerName],
    [OrganizationStatisticBase].[StatisticValue]
from [OrganizationStatisticBase] 
