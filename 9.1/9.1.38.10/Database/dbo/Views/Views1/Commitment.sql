

create view dbo.Commitment(
	CommitmentId,
	Name,
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
	Subject,
	CreatedBy,
	CreatedOnBehalfBy,
	CreatedOn,
	ImportSequenceNumber,
	ModifiedBy,
	ModifiedOnBehalfBy,
	ModifiedOn,
	OverriddenCreatedOn,
	TimeZoneRuleVersionNumber,
	UTCConversionTimeZoneCode,
	VersionNumber
) as
select
	ActivityPartyBase.ActivityPartyId,
	ActivityPartyBase.PartyIdName,
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
	ActivityPointerBase.Subject,
	ActivityPointerBase.CreatedBy,
	ActivityPointerBase.CreatedOnBehalfBy,
	ActivityPointerBase.CreatedOn,
	ActivityPointerBase.ImportSequenceNumber,
	ActivityPointerBase.ModifiedBy,
	ActivityPointerBase.ModifiedOnBehalfBy,
	ActivityPointerBase.ModifiedOn,
	ActivityPointerBase.OverriddenCreatedOn,
	ActivityPointerBase.TimeZoneRuleVersionNumber,
	ActivityPointerBase.UTCConversionTimeZoneCode,
	ActivityPointerBase.VersionNumber
from
	ActivityPartyBase join
	ActivityPointerBase on ActivityPartyBase.ActivityId = ActivityPointerBase.ActivityId
where(ActivityPointerBase.ActivityTypeCode = 4214 or ActivityPointerBase.ActivityTypeCode = 4201)
	and(ActivityPartyBase.ParticipationTypeMask = 5
				or ActivityPartyBase.ParticipationTypeMask = 7
				or ActivityPartyBase.ParticipationTypeMask = 10)
