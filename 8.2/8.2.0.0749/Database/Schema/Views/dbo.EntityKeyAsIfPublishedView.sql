SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO

				
create view [dbo].[EntityKeyAsIfPublishedView] as (SELECT * FROM [EntityKey] WHERE OverwriteTime = 0 AND ComponentState = 0)
GO
