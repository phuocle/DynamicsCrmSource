SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO

				
create view [dbo].[OptionSetAsIfPublishedView] as (SELECT A1.* FROM [OptionSetLogicalView] A1 LEFT OUTER JOIN [OptionSetLogicalView] A2 ON
				(A1.[OptionSetId] = A2.[OptionSetId] AND A1.[OptionSetRowId] <> A2.[OptionSetRowId] AND (A1.ComponentState = 0 OR A1.ComponentState = 2))
				WHERE A2.ComponentState IS NULL AND (A1.ComponentState = 0 OR A1.ComponentState = 1))
GO