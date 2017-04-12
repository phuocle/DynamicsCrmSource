SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO

				
create view [dbo].[OptionSetView] as (SELECT * FROM [OptionSet] WHERE OverwriteTime = 0 AND ComponentState = 0)
GO
