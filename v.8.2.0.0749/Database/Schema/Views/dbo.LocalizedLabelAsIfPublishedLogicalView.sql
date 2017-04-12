SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO

				
create view [dbo].[LocalizedLabelAsIfPublishedLogicalView] as (SELECT A1.* FROM [LocalizedLabelLogicalView] A1 LEFT OUTER JOIN [LocalizedLabelLogicalView] A2 ON
				(A1.[LocalizedLabelId] = A2.[LocalizedLabelId] AND A1.[LocalizedLabelRowId] <> A2.[LocalizedLabelRowId] AND (A1.ComponentState = 0 OR A1.ComponentState = 2))
				WHERE A2.ComponentState IS NULL)
GO