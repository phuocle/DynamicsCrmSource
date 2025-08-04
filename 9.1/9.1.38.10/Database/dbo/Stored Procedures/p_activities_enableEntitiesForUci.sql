

create procedure dbo.p_activities_enableEntitiesForUci
as
begin
	update MetadataSchema.Entity 
		set IsVisibleInMobileClient = 1
		where LogicalName in ('fax', 'letter', 'recurringappointmentmaster', 'team', 'systemuser', 'transactioncurrency', 'customeraddress', 'position')
		and IsVisibleInMobileClient = 0
	
	update MetadataSchema.Entity 
		set IsReadOnlyInMobileClient = 0
		where LogicalName in ('team')
		and IsReadOnlyInMobileClient = 1

	print 'p_activities_enableEntitiesForUci sproc created'
end