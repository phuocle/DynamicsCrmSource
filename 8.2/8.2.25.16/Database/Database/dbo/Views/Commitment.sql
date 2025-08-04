

create view dbo.Commitment (
	CommitmentId,
	ActivityId, 
	ActivityTypeCode, 
	PartyId, 
	PartyObjectTypeCode, 
	ParticipationTypeMask, 
	Effort,
	ResourceSpecId,
	ServiceId,
	StateCode,
	StatusCode,
	ScheduledStart,
	ScheduledEnd,
	Subject
) as 
select
	ActivityPartyBase.ActivityPartyId,
	ActivityPartyBase.ActivityId, 
	ActivityPointerBase.ActivityTypeCode,
	ActivityPartyBase.PartyId, 
	ActivityPartyBase.PartyObjectTypeCode, 
	ActivityPartyBase.ParticipationTypeMask, 
	ActivityPartyBase.Effort,
	ActivityPartyBase.ResourceSpecId,
	ActivityPointerBase.ServiceId,
	ActivityPointerBase.StateCode,
	ActivityPointerBase.StatusCode,
	ActivityPartyBase.ScheduledStart,
	ActivityPartyBase.ScheduledEnd,
	ActivityPointerBase.Subject
from 
	ActivityPartyBase join
	ActivityPointerBase on ActivityPartyBase.ActivityId = ActivityPointerBase.ActivityId
where (ActivityPointerBase.ActivityTypeCode = 4214 or ActivityPointerBase.ActivityTypeCode = 4201)
	and (ActivityPartyBase.ParticipationTypeMask = 5
			   or ActivityPartyBase.ParticipationTypeMask = 7
			   or ActivityPartyBase.ParticipationTypeMask = 10)
