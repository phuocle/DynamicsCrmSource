USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[OrganizationStatistic]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for OrganizationStatistic
--
create view [dbo].[OrganizationStatistic]
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

GO
