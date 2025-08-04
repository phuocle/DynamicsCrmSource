SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO

				
create view [dbo].[AttributeLookupValueLogicalView] as (SELECT * FROM [AttributeLookupValue] WHERE OverwriteTime = 0)
GO
