USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[AttributeAsIfPublishedView]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

				
create view [dbo].[AttributeAsIfPublishedView] as (SELECT A1.* FROM [AttributeLogicalView] A1 LEFT OUTER JOIN [AttributeLogicalView] A2 ON
				(A1.[AttributeId] = A2.[AttributeId] AND A1.[AttributeRowId] <> A2.[AttributeRowId] AND (A1.ComponentState = 0 OR A1.ComponentState = 2))
				WHERE A2.ComponentState IS NULL AND (A1.ComponentState = 0 OR A1.ComponentState = 1))
GO
