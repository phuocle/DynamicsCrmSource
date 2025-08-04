SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO

				
create view [dbo].[EntityLogicalView] as (SELECT * FROM [Entity] WHERE OverwriteTime = 0)
GO
