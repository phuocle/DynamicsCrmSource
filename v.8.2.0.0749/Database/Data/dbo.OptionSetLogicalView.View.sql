USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[OptionSetLogicalView]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

				
create view [dbo].[OptionSetLogicalView] as (SELECT * FROM [OptionSet] WHERE OverwriteTime = 0)
GO
