

--TODO: Tune this for performance.

create procedure p_DeleteCustomActivityEntries(@activityTypeCode integer) as
begin
set nocount on

delete ActivityPartyBase from ActivityPartyBase 
join ActivityPointerBase act on 
(ActivityPartyBase.ActivityId = act.ActivityId and act.ActivityTypeCode = @activityTypeCode)

delete ActivityPointerBase from ActivityPointerBase act where 
act.ActivityTypeCode = @activityTypeCode

end	