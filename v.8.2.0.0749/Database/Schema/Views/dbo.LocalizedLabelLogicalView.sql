SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO

				
create view [dbo].[LocalizedLabelLogicalView] as (SELECT * FROM [LocalizedLabel] WHERE OverwriteTime = 0)
GO
