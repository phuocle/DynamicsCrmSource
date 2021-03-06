USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[Commitment]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create view [dbo].[Commitment] (
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

GO
