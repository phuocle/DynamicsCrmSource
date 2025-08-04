SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO

				
create view [dbo].[EntityKeyAttributeView] as (SELECT * FROM [EntityKeyAttribute] WHERE OverwriteTime = 0 AND ComponentState = 0)
GO
