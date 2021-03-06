USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[AttributeLookupValueAsIfPublishedLogicalView]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

				
create view [dbo].[AttributeLookupValueAsIfPublishedLogicalView] as (SELECT A1.* FROM [AttributeLookupValueLogicalView] A1 LEFT OUTER JOIN [AttributeLookupValueLogicalView] A2 ON
				(A1.[AttributeLookupValueId] = A2.[AttributeLookupValueId] AND A1.[AttributeLookupValueRowId] <> A2.[AttributeLookupValueRowId] AND (A1.ComponentState = 0 OR A1.ComponentState = 2))
				WHERE A2.ComponentState IS NULL)
GO
