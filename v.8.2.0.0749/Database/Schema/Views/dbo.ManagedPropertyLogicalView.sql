SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO

				
create view [dbo].[ManagedPropertyLogicalView] as (SELECT * FROM [ManagedProperty] WHERE OverwriteTime = 0)
GO
