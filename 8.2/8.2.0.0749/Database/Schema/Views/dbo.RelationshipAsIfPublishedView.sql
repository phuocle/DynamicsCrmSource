SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO

				
create view [dbo].[RelationshipAsIfPublishedView] as (SELECT * FROM [Relationship] WHERE OverwriteTime = 0 AND ComponentState = 0)
GO
