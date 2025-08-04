SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for knowledgearticleviews
--
create view [dbo].[FilteredKnowledgeArticleViews] (
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [exchangerate],
    [importsequencenumber],
    [knowledgearticleid],
    [knowledgearticleidname],
    [knowledgearticleview],
    [knowledgearticleviewsid],
    [location],
    [locationname],
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
    [ownerid],
    [owneridtype],
    [owningbusinessunit],
    [owninguser],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [timezoneruleversionnumber],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [utcconversiontimezonecode],
    [versionnumber],
    [viewdate],
    [viewdateutc]
) with view_metadata as
select
    [KnowledgeArticleViews].[CreatedBy],
    [KnowledgeArticleViews].[CreatedByName],
    [KnowledgeArticleViews].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([KnowledgeArticleViews].[CreatedOn],
			us.TimeZoneCode),
        [KnowledgeArticleViews].[CreatedOn],
    [KnowledgeArticleViews].[CreatedOnBehalfBy],
    [KnowledgeArticleViews].[CreatedOnBehalfByName],
    [KnowledgeArticleViews].[CreatedOnBehalfByYomiName],
    [KnowledgeArticleViews].[ExchangeRate],
    [KnowledgeArticleViews].[ImportSequenceNumber],
    [KnowledgeArticleViews].[KnowledgeArticleId],
    [KnowledgeArticleViews].[KnowledgeArticleIdName],
    [KnowledgeArticleViews].[KnowledgeArticleView],
    [KnowledgeArticleViews].[KnowledgeArticleViewsId],
    [KnowledgeArticleViews].[Location],
    LocationPLTable.Value,
    [KnowledgeArticleViews].[ModifiedBy],
    [KnowledgeArticleViews].[ModifiedByName],
    [KnowledgeArticleViews].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([KnowledgeArticleViews].[ModifiedOn],
			us.TimeZoneCode),
        [KnowledgeArticleViews].[ModifiedOn],
    [KnowledgeArticleViews].[ModifiedOnBehalfBy],
    [KnowledgeArticleViews].[ModifiedOnBehalfByName],
    [KnowledgeArticleViews].[ModifiedOnBehalfByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([KnowledgeArticleViews].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [KnowledgeArticleViews].[OverriddenCreatedOn],
    [KnowledgeArticleViews].[OwnerId],
    [KnowledgeArticleViews].[OwnerIdType],
    [KnowledgeArticleViews].[OwningBusinessUnit],
    [KnowledgeArticleViews].[OwningUser],
    [KnowledgeArticleViews].[statecode],
    statecodePLTable.Value,
    [KnowledgeArticleViews].[statuscode],
    statuscodePLTable.Value,
    [KnowledgeArticleViews].[TimeZoneRuleVersionNumber],
    [KnowledgeArticleViews].[TransactionCurrencyId],
    [KnowledgeArticleViews].[TransactionCurrencyIdName],
    [KnowledgeArticleViews].[UTCConversionTimeZoneCode],
    [KnowledgeArticleViews].[VersionNumber],
    dbo.fn_UTCToTzCodeSpecificLocalTime([KnowledgeArticleViews].[ViewDate],
			us.TimeZoneCode),
        [KnowledgeArticleViews].[ViewDate]
from KnowledgeArticleViews
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [LocationPLTable] on 
		([LocationPLTable].AttributeName = 'location'
		and [LocationPLTable].ObjectTypeCode = 9955
		and [LocationPLTable].AttributeValue = [KnowledgeArticleViews].[Location]
		and [LocationPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 9955
		and [statecodePLTable].AttributeValue = [KnowledgeArticleViews].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 9955
		and [statuscodePLTable].AttributeValue = [KnowledgeArticleViews].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
GO
GRANT SELECT ON  [dbo].[FilteredKnowledgeArticleViews] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredKnowledgeArticleViews] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
