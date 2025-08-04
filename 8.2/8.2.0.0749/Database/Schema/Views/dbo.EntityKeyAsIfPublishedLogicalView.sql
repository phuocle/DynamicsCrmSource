SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO

				
create view [dbo].[EntityKeyAsIfPublishedLogicalView] as (SELECT * FROM [EntityKey] WHERE OverwriteTime = 0)
GO
