create view dbo.ChildIncidentCount (
		ParentCaseId,
		NumberOfChildIncidents
	) as 
	select  
		i2.ParentCaseId,
		count(i2.ParentCaseId) As NumberOfChildIncidents
	from IncidentBase i1 join 
		 IncidentBase i2 on i1.IncidentId! = i2.IncidentId and i1.IncidentId = i2.ParentCaseId
		 group by i2.ParentCaseId