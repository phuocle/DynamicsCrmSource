USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[SavedQueryLogicalAsIfPublished]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- logical 'as if published' view for SavedQueryLogicalAsIfPublished
--
create view [dbo].[SavedQueryLogicalAsIfPublished]
 with view_metadata as
select
T1.* from [SavedQueryLogical] T1 left outer join [SavedQueryLogical] T2 on
(T1.[SavedQueryId] = T2.[SavedQueryId] and T1.[SavedQueryIdUnique] <> T2.[SavedQueryIdUnique] and (T1.ComponentState = 0 or T1.ComponentState = 2))
where T2.ComponentState is null
GO
