

--
-- report view for cardtype
--
create view dbo.[FilteredCardType] 
(
    [actions],
    [adaptivecardtemplate],
    [boolcardoption],
    [boolcardoptionname],
    [cardname],
    [cardtype],
    [cardtypeicon],
    [cardtypeid],
    [clientavailability],
    [clientavailabilityname],
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [exchangerate],
    [groupcategory],
    [grouptype],
    [hassnoozedismiss],
    [hassnoozedismissname],
    [importsequencenumber],
    [intcardoption],
    [isbasecard],
    [isbasecardname],
    [isenabled],
    [isenabledname],
    [isliveonly],
    [isliveonlyname],
    [ispreviewcard],
    [ispreviewcardname],
    [lastsynctime],
    [lastsynctimeutc],
    [modifiedby],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [priority],
    [publishername],
    [scheduletime],
    [scheduletimeutc],
    [softtitle],
    [stringcardoption],
    [summarytext],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [versionnumber]
) with view_metadata as
select
    [CardType].[Actions],
    [CardType].[AdaptiveCardTemplate],
    [CardType].[BoolCardOption],
    BoolCardOptionPLTable.Value,
    [CardType].[CardName],
    [CardType].[CardType],
    [CardType].[CardTypeIcon],
    [CardType].[CardTypeId],
    [CardType].[ClientAvailability],
    ClientAvailabilityPLTable.Value,
    [CardType].[CreatedBy],
    [CardType].[CreatedByName],
    [CardType].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([CardType].[CreatedOn],
			us.TimeZoneCode),
        [CardType].[CreatedOn],
    [CardType].[CreatedOnBehalfBy],
    [CardType].[CreatedOnBehalfByName],
    [CardType].[CreatedOnBehalfByYomiName],
    [CardType].[ExchangeRate],
    [CardType].[GroupCategory],
    [CardType].[GroupType],
    [CardType].[HasSnoozeDismiss],
    HasSnoozeDismissPLTable.Value,
    [CardType].[ImportSequenceNumber],
    [CardType].[IntCardOption],
    [CardType].[IsBaseCard],
    IsBaseCardPLTable.Value,
    [CardType].[IsEnabled],
    IsEnabledPLTable.Value,
    [CardType].[IsLiveOnly],
    IsLiveOnlyPLTable.Value,
    [CardType].[IsPreviewCard],
    IsPreviewCardPLTable.Value,
    dbo.fn_UTCToTzCodeSpecificLocalTime([CardType].[LastSyncTime],
			us.TimeZoneCode),
        [CardType].[LastSyncTime],
    [CardType].[ModifiedBy],
    [CardType].[ModifiedByName],
    [CardType].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([CardType].[ModifiedOn],
			us.TimeZoneCode),
        [CardType].[ModifiedOn],
    [CardType].[ModifiedOnBehalfBy],
    [CardType].[ModifiedOnBehalfByName],
    [CardType].[ModifiedOnBehalfByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([CardType].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [CardType].[OverriddenCreatedOn],
    [CardType].[Priority],
    [CardType].[PublisherName],
    [CardType].[ScheduleTime],
        [CardType].[ScheduleTime],
    [CardType].[SoftTitle],
    [CardType].[StringCardOption],
    [CardType].[SummaryText],
    [CardType].[TransactionCurrencyId],
    [CardType].[TransactionCurrencyIdName],
    [CardType].[VersionNumber]
from CardType
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [BoolCardOptionPLTable] on 
		([BoolCardOptionPLTable].AttributeName = 'boolcardoption'
		and [BoolCardOptionPLTable].ObjectTypeCode = 9983
		and [BoolCardOptionPLTable].AttributeValue = [CardType].[BoolCardOption]
		and [BoolCardOptionPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ClientAvailabilityPLTable] on 
		([ClientAvailabilityPLTable].AttributeName = 'clientavailability'
		and [ClientAvailabilityPLTable].ObjectTypeCode = 9983
		and [ClientAvailabilityPLTable].AttributeValue = [CardType].[ClientAvailability]
		and [ClientAvailabilityPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [HasSnoozeDismissPLTable] on 
		([HasSnoozeDismissPLTable].AttributeName = 'hassnoozedismiss'
		and [HasSnoozeDismissPLTable].ObjectTypeCode = 9983
		and [HasSnoozeDismissPLTable].AttributeValue = [CardType].[HasSnoozeDismiss]
		and [HasSnoozeDismissPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsBaseCardPLTable] on 
		([IsBaseCardPLTable].AttributeName = 'isbasecard'
		and [IsBaseCardPLTable].ObjectTypeCode = 9983
		and [IsBaseCardPLTable].AttributeValue = [CardType].[IsBaseCard]
		and [IsBaseCardPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsEnabledPLTable] on 
		([IsEnabledPLTable].AttributeName = 'isenabled'
		and [IsEnabledPLTable].ObjectTypeCode = 9983
		and [IsEnabledPLTable].AttributeValue = [CardType].[IsEnabled]
		and [IsEnabledPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsLiveOnlyPLTable] on 
		([IsLiveOnlyPLTable].AttributeName = 'isliveonly'
		and [IsLiveOnlyPLTable].ObjectTypeCode = 9983
		and [IsLiveOnlyPLTable].AttributeValue = [CardType].[IsLiveOnly]
		and [IsLiveOnlyPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsPreviewCardPLTable] on 
		([IsPreviewCardPLTable].AttributeName = 'ispreviewcard'
		and [IsPreviewCardPLTable].ObjectTypeCode = 9983
		and [IsPreviewCardPLTable].AttributeValue = [CardType].[IsPreviewCard]
		and [IsPreviewCardPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredCardType] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredCardType] TO [CRMReaderRole]
    AS [dbo];

