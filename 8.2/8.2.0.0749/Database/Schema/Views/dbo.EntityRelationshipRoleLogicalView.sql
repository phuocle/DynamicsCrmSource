SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO

				
create view [dbo].[EntityRelationshipRoleLogicalView] as (SELECT * FROM [EntityRelationshipRole] WHERE OverwriteTime = 0)
GO
