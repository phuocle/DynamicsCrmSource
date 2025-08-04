

create	procedure dbo.p_UpdateCampaignActivityLogs

as
begin;
	declare @sqlQueryString nvarchar(1000); 
	declare @resultCode int = -1 -- default uninitialized result code
		
	set @sqlQueryString = 'update Logs
		set CampaignActivityId = Operation.RegardingObjectId, CampaignActivityIdType = ''4402''
		from BulkOperationLogBase as Logs inner join ActivityPointerBase as Operation on Logs.BulkOperationId = Operation.ActivityId
		where Logs.CampaignActivityId is null and Operation.RegardingObjectId is not null and operation.RegardingObjectTypeCode = ''4402'''

	if exists ( select COLUMN_NAME from INFORMATION_SCHEMA.COLUMNS where TABLE_NAME = 'BulkOperationLogBase' and COLUMN_NAME = 'CampaignActivityId')
		Exec (@sqlQueryString)
		set @resultCode = @@ROWCOUNT
		
	select @resultCode as 'numberOfItemsChanged'
end;