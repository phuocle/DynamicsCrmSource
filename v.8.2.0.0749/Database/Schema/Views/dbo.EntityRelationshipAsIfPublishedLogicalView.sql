SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO

				
create view [dbo].[EntityRelationshipAsIfPublishedLogicalView] as (SELECT * FROM [EntityRelationship] WHERE OverwriteTime = 0)
GO
