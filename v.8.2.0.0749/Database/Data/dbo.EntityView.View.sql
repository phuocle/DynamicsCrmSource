USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[EntityView]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

				
create view [dbo].[EntityView] as (SELECT * FROM [Entity] WHERE OverwriteTime = 0 AND ComponentState = 0)
GO
