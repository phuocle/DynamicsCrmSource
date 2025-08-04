SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO

				
create view [dbo].[EntityRelationshipRelationshipsAsIfPublishedView] as (SELECT * FROM [EntityRelationshipRelationships] WHERE OverwriteTime = 0 AND ComponentState = 0)
GO
