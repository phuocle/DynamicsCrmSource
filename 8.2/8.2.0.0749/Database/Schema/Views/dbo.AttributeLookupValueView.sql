SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO

				
create view [dbo].[AttributeLookupValueView] as (SELECT * FROM [AttributeLookupValue] WHERE OverwriteTime = 0 AND ComponentState = 0)
GO
