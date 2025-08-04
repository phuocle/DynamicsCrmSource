

create procedure [dbo].[p_MarkActivityAsSent]
(
	@activityId uniqueidentifier
)
as
begin
    update ActivityPointerBase 
        set PostponeActivityProcessingUntil = NULL, SentOn = GETUTCDATE(), StateCode = 1, StatusCode = 3
        where ActivityId = @activityId
end
