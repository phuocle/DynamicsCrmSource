SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO

				
create view [dbo].[AttributePicklistValueLogicalView] as (SELECT * FROM [AttributePicklistValue] WHERE OverwriteTime = 0)
GO
