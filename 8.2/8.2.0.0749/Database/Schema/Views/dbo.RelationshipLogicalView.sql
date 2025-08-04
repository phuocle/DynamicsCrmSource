SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO

				
create view [dbo].[RelationshipLogicalView] as (SELECT * FROM [Relationship] WHERE OverwriteTime = 0)
GO
