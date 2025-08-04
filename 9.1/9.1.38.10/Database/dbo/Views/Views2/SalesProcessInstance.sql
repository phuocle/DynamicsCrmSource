

create view dbo.SalesProcessInstance (
	SalesProcessInstanceId,
	Name,
	SalesProcessName,
	OpportunityId,
	OpportunityIdName,
	SalesStageName,
	BusinessUnitId,
	BusinessUnitIdName,
	TimeZoneRuleVersionNumber,
	UTCConversionTimeZoneCode,
	OverriddenCreatedOn,
	ImportSequenceNumber,
	VersionNumber
) as
select
	a.AsyncOperationId,
	a.Name,
	a.Name,
	o.OpportunityId,
	o.Name,
	a.WorkflowStageName,
	a.OwningBusinessUnit,
	bu.Name,
	a.TimeZoneRuleVersionNumber,
	a.UTCConversionTimeZoneCode,
	NULL,
	NULL,
	NULL
from
	AsyncOperationBase a
	join OpportunityBase o on (o.OpportunityId = a.RegardingObjectId)
	join BusinessUnitBase bu on (bu.BusinessUnitId = a.OwningBusinessUnit)
where
	a.OperationType = 10 and
	a.RegardingObjectTypeCode = 3 and
	a.WorkflowStageName is not null