USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[EntityLogicalView]    Script Date: 4/10/2017 9:59:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

				
create view [dbo].[EntityLogicalView] as (SELECT * FROM [Entity] WHERE OverwriteTime = 0)
GO
