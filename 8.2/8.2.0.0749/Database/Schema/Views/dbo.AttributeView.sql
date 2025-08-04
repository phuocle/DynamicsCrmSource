SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO

				
create view [dbo].[AttributeView] as (SELECT * FROM [Attribute] WHERE OverwriteTime = 0 AND ComponentState = 0)
GO
