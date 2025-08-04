SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO

				
create view [dbo].[OptionSetLogicalView] as (SELECT * FROM [OptionSet] WHERE OverwriteTime = 0)
GO
