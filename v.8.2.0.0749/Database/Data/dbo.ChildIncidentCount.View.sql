USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[ChildIncidentCount]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create view [dbo].[ChildIncidentCount] (
		ParentCaseId,
		NumberOfChildIncidents
	) as 
	select  
		i2.ParentCaseId,
		count(i2.ParentCaseId) As NumberOfChildIncidents
	from IncidentBase i1 join 
		 IncidentBase i2 on i1.IncidentId! = i2.IncidentId and i1.IncidentId = i2.ParentCaseId
		 group by i2.ParentCaseId
GO
