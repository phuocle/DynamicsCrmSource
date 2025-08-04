SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO

				
create view [dbo].[EntityRelationshipRoleAsIfPublishedView] as (SELECT * FROM [EntityRelationshipRole] WHERE OverwriteTime = 0 AND ComponentState = 0)
GO
