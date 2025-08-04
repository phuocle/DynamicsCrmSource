SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO

				
create view [dbo].[ViewAttributeAsIfPublishedLogicalView] as (SELECT * FROM [ViewAttribute] WHERE OverwriteTime = 0)
GO
