SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO

				
create view [dbo].[EntityRelationshipRelationshipsAsIfPublishedLogicalView] as (SELECT * FROM [EntityRelationshipRelationships] WHERE OverwriteTime = 0)
GO
