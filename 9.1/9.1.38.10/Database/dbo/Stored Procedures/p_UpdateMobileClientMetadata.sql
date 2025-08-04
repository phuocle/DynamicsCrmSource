

create	procedure dbo.p_UpdateMobileClientMetadata

as
begin;

	declare @resultCode int = -1 -- default uninitialized result code
	
	update Entity
	set CanModifyMobileClientReadOnly = 0, IsReadOnlyInMobileClient = 0, CanModifyMobileClientVisibility = 0, IsVisibleInMobileClient = 1
	where LogicalName in ('bulkoperation', 'bulkoperationlog', 'campaign', 'campaignactivity', 'campaignresponse', 'campaignactivityitem', 'campaignitem')
	
	-- count the number of rows that were effected by metadata change
	set @resultCode = (select count(EntityId) from Entity where LogicalName in ('bulkoperation', 'bulkoperationlog', 'campaign', 'campaignactivity', 'campaignresponse', 'campaignactivityitem', 'campaignitem'))
	
	select @resultCode as 'numberOfItemsChanged'

end;