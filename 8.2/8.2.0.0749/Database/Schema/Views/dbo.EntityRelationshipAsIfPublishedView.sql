SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO

				
create view [dbo].[EntityRelationshipAsIfPublishedView] as (SELECT * FROM [EntityRelationship] WHERE OverwriteTime = 0 AND ComponentState = 0)
GO
