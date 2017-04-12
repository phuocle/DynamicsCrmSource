SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO

				
create view [dbo].[ManagedPropertyView] as (SELECT * FROM [ManagedProperty] WHERE OverwriteTime = 0 AND ComponentState = 0)
GO
