USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[OptionSetAsIfPublishedView]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

				
create view [dbo].[OptionSetAsIfPublishedView] as (SELECT A1.* FROM [OptionSetLogicalView] A1 LEFT OUTER JOIN [OptionSetLogicalView] A2 ON
				(A1.[OptionSetId] = A2.[OptionSetId] AND A1.[OptionSetRowId] <> A2.[OptionSetRowId] AND (A1.ComponentState = 0 OR A1.ComponentState = 2))
				WHERE A2.ComponentState IS NULL AND (A1.ComponentState = 0 OR A1.ComponentState = 1))
GO
