SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO

				
create view [dbo].[AttributeAsIfPublishedLogicalView] as (SELECT A1.* FROM [AttributeLogicalView] A1 LEFT OUTER JOIN [AttributeLogicalView] A2 ON
				(A1.[AttributeId] = A2.[AttributeId] AND A1.[AttributeRowId] <> A2.[AttributeRowId] AND (A1.ComponentState = 0 OR A1.ComponentState = 2))
				WHERE A2.ComponentState IS NULL)
GO