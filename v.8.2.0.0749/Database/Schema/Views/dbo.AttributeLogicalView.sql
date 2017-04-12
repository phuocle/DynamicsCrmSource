SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO

				
create view [dbo].[AttributeLogicalView] as (SELECT * FROM [Attribute] WHERE OverwriteTime = 0)
GO
