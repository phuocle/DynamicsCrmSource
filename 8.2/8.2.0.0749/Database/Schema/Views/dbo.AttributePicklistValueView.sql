SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO

				
create view [dbo].[AttributePicklistValueView] as (SELECT * FROM [AttributePicklistValue] WHERE OverwriteTime = 0 AND ComponentState = 0)
GO
