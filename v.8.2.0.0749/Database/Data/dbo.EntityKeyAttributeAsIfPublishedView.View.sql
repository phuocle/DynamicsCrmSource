USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[EntityKeyAttributeAsIfPublishedView]    Script Date: 4/10/2017 9:59:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

				
create view [dbo].[EntityKeyAttributeAsIfPublishedView] as (SELECT * FROM [EntityKeyAttribute] WHERE OverwriteTime = 0 AND ComponentState = 0)
GO
