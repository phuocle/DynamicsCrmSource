

create procedure 
dbo.p_ClearCompletedOperations
(
     @job_id as uniqueidentifier,
	 @status as integer,
	 @inProgressStatus as integer,
	 @waitingStatus as integer
)
as
begin 
BEGIN transaction
    set nocount on

    delete from WorkflowWaitSubscriptionBase where AsyncOperationId = @job_id
	update WorkflowLogBase
		set Status=@status,
			CompletedOn = GETUTCDATE(),
			ModifiedBy = CreatedBy,
			ModifiedOn = GETUTCDATE()
		where
			AsyncOperationId = @job_id
		and	Status in (@inProgressStatus, @waitingStatus)
COMMIT transaction
end 