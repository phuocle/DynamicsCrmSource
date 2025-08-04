SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO

				
create view [dbo].[EntityKeyAttributeAsIfPublishedLogicalView] as (SELECT * FROM [EntityKeyAttribute] WHERE OverwriteTime = 0)
GO
