USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[MobileOfflineProfileItemAsIfPublished]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base 'as if published' view for MobileOfflineProfileItemAsIfPublished
--
create view [dbo].[MobileOfflineProfileItemAsIfPublished]
 with view_metadata as
select
T1.* from [MobileOfflineProfileItemLogical] T1 left outer join [MobileOfflineProfileItemLogical] T2 on
(T1.[MobileOfflineProfileItemId] = T2.[MobileOfflineProfileItemId] and T1.[MobileOfflineProfileItemIdUnique] <> T2.[MobileOfflineProfileItemIdUnique] and (T1.ComponentState = 0 OR T1.ComponentState = 2))
where T2.ComponentState is null and (T1.ComponentState = 0 OR T1.ComponentState = 1)
GO
