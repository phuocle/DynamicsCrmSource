

create view dbo.ActivityParty (
	ActivityPartyId,
	ActivityId, 
	PartyId, 
	PartyObjectTypeCode, 
	ParticipationTypeMask, 
	AddressUsed, 
	DoNotEmail,
	DoNotFax,
	DoNotPostalMail,
	DoNotPhone,
	PartyIdDsc,
	PartyIdName,
	IsPartyDeleted,

	ExchangeEntryId,

	Effort,
	InstanceTypeCode,
	ResourceSpecId,
	ResourceSpecIdName,
	ResourceSpecIdDsc,
	ScheduledStart,
	ScheduledEnd,
	OwningUser,
	OwnerId,
	OwnerIdType,
	OwningBusinessUnit,
	VersionNumber
) as 
		
select
	ActivityPartyBase.ActivityPartyId,
	ActivityPartyBase.ActivityId,
	ActivityPartyBase.PartyId, 
	ActivityPartyBase.PartyObjectTypeCode, 
	ActivityPartyBase.ParticipationTypeMask, 
	ActivityPartyBase.AddressUsed, 

	case ActivityPartyBase.PartyObjectTypeCode
        when 1 then [AccountBase].[DoNotEMail]
        when 2 then [ContactBase].[DoNotEMail]
        when 4 then [LeadBase].[DoNotEMail]
        else null
	end,
	case ActivityPartyBase.PartyObjectTypeCode
        when 1 then [AccountBase].[DoNotFax]
        when 2 then [ContactBase].[DoNotFax]
        when 4 then [LeadBase].[DoNotFax]
        else null
	end,
	case ActivityPartyBase.PartyObjectTypeCode
        when 1 then [AccountBase].[DoNotPostalMail]
        when 2 then [ContactBase].[DoNotPostalMail]
        when 4 then [LeadBase].[DoNotPostalMail]
        else null
	end,
	case ActivityPartyBase.PartyObjectTypeCode
        when 1 then [AccountBase].[DoNotPhone]
        when 2 then [ContactBase].[DoNotPhone]
        when 4 then [LeadBase].[DoNotPhone]
        else null
	end,
	0 as PartyIdDsc,
	case ActivityPartyBase.PartyObjectTypeCode
		when 0 then ActivityPartyBase.AddressUsed
		else ActivityPartyBase.PartyIdName
	end,
	ActivityPartyBase.IsPartyDeleted,

	ActivityPartyBase.ExchangeEntryId,

	ActivityPartyBase.Effort,
	AB.InstanceTypeCode,
	ActivityPartyBase.ResourceSpecId,
	ResourceSpecBase.Name,
	0, --ResourceSpecIdDsc
	ActivityPartyBase.ScheduledStart,
	ActivityPartyBase.ScheduledEnd,
	case	
		when AB.OwnerIdType = 8 then AB.OwnerId
		else null
	end,
	AB.OwnerId,
	AB.OwnerIdType,
	AB.OwningBusinessUnit,
	ActivityPartyBase.VersionNumber 
from 
	ActivityPartyBase
	 left outer join AccountBase with(nolock) on ActivityPartyBase.PartyObjectTypeCode = 1 and ActivityPartyBase.PartyId = AccountBase.AccountId
	 left outer join ContactBase with(nolock) on ActivityPartyBase.PartyObjectTypeCode = 2 and ActivityPartyBase.PartyId = ContactBase.ContactId
	 left outer join LeadBase with(nolock) on ActivityPartyBase.PartyObjectTypeCode = 4 and ActivityPartyBase.PartyId = LeadBase.LeadId
	 left outer join ActivityPointerBase AB with(nolock) on ActivityPartyBase.ActivityId = AB.ActivityId
	 left outer join ResourceSpecBase with(nolock) on ActivityPartyBase.ResourceSpecId = ResourceSpecBase.ResourceSpecId
