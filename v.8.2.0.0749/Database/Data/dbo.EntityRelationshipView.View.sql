USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[EntityRelationshipView]    Script Date: 4/10/2017 9:59:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

				
create view [dbo].[EntityRelationshipView] as (SELECT * FROM [EntityRelationship] WHERE OverwriteTime = 0 AND ComponentState = 0)
GO
