SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO

				
create view [dbo].[ViewAttributeView] as (SELECT * FROM [ViewAttribute] WHERE OverwriteTime = 0 AND ComponentState = 0)
GO
