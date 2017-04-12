SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO

				
create view [dbo].[ManagedPropertyAsIfPublishedView] as (SELECT * FROM [ManagedProperty] WHERE OverwriteTime = 0 AND ComponentState = 0)
GO
