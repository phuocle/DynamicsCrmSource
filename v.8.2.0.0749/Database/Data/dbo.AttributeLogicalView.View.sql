USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[AttributeLogicalView]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

				
create view [dbo].[AttributeLogicalView] as (SELECT * FROM [Attribute] WHERE OverwriteTime = 0)
GO
