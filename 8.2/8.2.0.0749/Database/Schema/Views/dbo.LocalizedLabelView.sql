SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO

				
create view [dbo].[LocalizedLabelView] as (SELECT * FROM [LocalizedLabel] WHERE OverwriteTime = 0 AND ComponentState = 0)
GO
