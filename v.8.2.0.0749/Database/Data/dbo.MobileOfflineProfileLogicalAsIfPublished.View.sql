USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[MobileOfflineProfileLogicalAsIfPublished]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- logical 'as if published' view for MobileOfflineProfileLogicalAsIfPublished
--
create view [dbo].[MobileOfflineProfileLogicalAsIfPublished]
 with view_metadata as
select
T1.* from [MobileOfflineProfileLogical] T1 left outer join [MobileOfflineProfileLogical] T2 on
(T1.[MobileOfflineProfileId] = T2.[MobileOfflineProfileId] and T1.[MobileOfflineProfileIdUnique] <> T2.[MobileOfflineProfileIdUnique] and (T1.ComponentState = 0 or T1.ComponentState = 2))
where T2.ComponentState is null
GO
