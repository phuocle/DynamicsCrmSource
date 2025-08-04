

create	procedure dbo.p_FixBulkOperationStatusStuckInProgress

as
begin;
	declare @resultCode int = -1 -- default uninitialized result code
    UPDATE BulkOperation
    /* completed StatusCode = 4 */
    SET StatusCode = 4
    WHERE ModifiedOn < DATEADD(day, -10, GETUTCDATE()) AND StatusCode = 2   /* In Progress, not updated in last 5 days */
    set @resultCode = @@ROWCOUNT
	select @resultCode as 'numberOfItemsChanged'
end;