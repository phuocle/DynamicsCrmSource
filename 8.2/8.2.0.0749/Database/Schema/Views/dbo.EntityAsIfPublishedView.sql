SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO

				
create view [dbo].[EntityAsIfPublishedView] as (SELECT * FROM [Entity] WHERE OverwriteTime = 0 AND ComponentState = 0)
GO
