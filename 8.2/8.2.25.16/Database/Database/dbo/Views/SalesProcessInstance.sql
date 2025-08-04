

create view dbo.SalesProcessInstance (
	SalesProcessInstanceId,
	SalesProcessName,
	OpportunityId,
	OpportunityIdDsc,
	OpportunityIdName,
	SalesStageName,
	BusinessUnitId,
	BusinessUnitIdDsc,
	BusinessUnitIdName
) as
select
	a.AsyncOperationId,
	a.Name,
	o.OpportunityId,
	0, --OpportunityIdDsc
	o.Name,
	a.WorkflowStageName,
	a.OwningBusinessUnit,
	0, --BusinessUnitIdDsc
	bu.Name
from
	AsyncOperationBase a
	join OpportunityBase o on (o.OpportunityId = a.RegardingObjectId)
	join BusinessUnitBase bu on (bu.BusinessUnitId = a.OwningBusinessUnit)
where
	a.OperationType = 10 and
	a.RegardingObjectTypeCode = 3 and
	a.WorkflowStageName is not null