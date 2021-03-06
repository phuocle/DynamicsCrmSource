USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[LocalizedLabelAsIfPublishedLogicalView]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

				
create view [dbo].[LocalizedLabelAsIfPublishedLogicalView] as (SELECT A1.* FROM [LocalizedLabelLogicalView] A1 LEFT OUTER JOIN [LocalizedLabelLogicalView] A2 ON
				(A1.[LocalizedLabelId] = A2.[LocalizedLabelId] AND A1.[LocalizedLabelRowId] <> A2.[LocalizedLabelRowId] AND (A1.ComponentState = 0 OR A1.ComponentState = 2))
				WHERE A2.ComponentState IS NULL)
GO
