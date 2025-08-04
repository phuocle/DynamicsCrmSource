

--
-- report view for knowledgearticle
--
create view dbo.[FilteredKnowledgearticle] 
(
    [articlepublicnumber],
    [content],
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [description],
    [exchangerate],
    [expirationdate],
    [expirationdateutc],
    [expirationstateid],
    [expirationstatusid],
    [expiredreviewoptions],
    [importsequencenumber],
    [isexpiredreviewoptions],
    [isinternal],
    [isinternalname],
    [islatestversion],
    [islatestversionname],
    [isprimary],
    [isprimaryname],
    [isproductassociations],
    [isreadyforreview],
    [isreview],
    [isrootarticle],
    [isrootarticlename],
    [isupdatecontent],
    [keywords],
    [knowledgearticleid],
    [knowledgearticleviews],
    [knowledgearticleviews_date],
    [knowledgearticleviews_dateutc],
    [knowledgearticleviews_state],
    [languagelocaleid],
    [languagelocaleidlocaleid],
    [languagelocaleidname],
    [majorversionnumber],
    [minorversionnumber],
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
    [owneridname],
    [owneridtype],
    [owneridyominame],
    [owningbusinessunit],
    [owningteam],
    [owninguser],
    [parentarticlecontentid],
    [parentarticlecontentidname],
    [previousarticlecontentid],
    [previousarticlecontentidname],
    [primaryauthorid],
    [primaryauthoridname],
    [processid],
    [publishon],
    [publishonutc],
    [publishstatusid],
    [rating],
    [rating_count],
    [rating_date],
    [rating_dateutc],
    [rating_state],
    [rating_sum],
    [readyforreview],
    [review],
    [rootarticleid],
    [rootarticleidname],
    [scheduledstatusid],
    [setcategoryassociations],
    [setcategoryassociationsname],
    [setproductassociations],
    [stageid],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [subjectid],
    [subjectiddsc],
    [subjectidname],
    [timezoneruleversionnumber],
    [title],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [traversedpath],
    [updatecontent],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [KnowledgeArticle].[ArticlePublicNumber],
    [KnowledgeArticle].[Content],
    [KnowledgeArticle].[CreatedBy],
    [KnowledgeArticle].[CreatedByName],
    [KnowledgeArticle].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([KnowledgeArticle].[CreatedOn],
			us.TimeZoneCode),
        [KnowledgeArticle].[CreatedOn],
    [KnowledgeArticle].[CreatedOnBehalfBy],
    [KnowledgeArticle].[CreatedOnBehalfByName],
    [KnowledgeArticle].[CreatedOnBehalfByYomiName],
    [KnowledgeArticle].[Description],
    [KnowledgeArticle].[ExchangeRate],
    dbo.fn_UTCToTzCodeSpecificLocalTime([KnowledgeArticle].[ExpirationDate],
			us.TimeZoneCode),
        [KnowledgeArticle].[ExpirationDate],
    [KnowledgeArticle].[ExpirationStateId],
    [KnowledgeArticle].[ExpirationStatusId],
    [KnowledgeArticle].[ExpiredReviewOptions],
    [KnowledgeArticle].[ImportSequenceNumber],
    ExpiredReviewOptionsPLTable.Value,
    [KnowledgeArticle].[IsInternal],
    IsInternalPLTable.Value,
    [KnowledgeArticle].[IsLatestVersion],
    IsLatestVersionPLTable.Value,
    [KnowledgeArticle].[IsPrimary],
    IsPrimaryPLTable.Value,
    SetProductAssociationsPLTable.Value,
    ReadyForReviewPLTable.Value,
    ReviewPLTable.Value,
    [KnowledgeArticle].[IsRootArticle],
    IsRootArticlePLTable.Value,
    UpdateContentPLTable.Value,
    [KnowledgeArticle].[Keywords],
    [KnowledgeArticle].[knowledgearticleId],
    [KnowledgeArticle].[KnowledgeArticleViews],
    dbo.fn_UTCToTzCodeSpecificLocalTime([KnowledgeArticle].[KnowledgeArticleViews_Date],
			us.TimeZoneCode),
        [KnowledgeArticle].[KnowledgeArticleViews_Date],
    [KnowledgeArticle].[KnowledgeArticleViews_State],
    [KnowledgeArticle].[LanguageLocaleId],
    [KnowledgeArticle].[LanguageLocaleIdLocaleId],
    [KnowledgeArticle].[LanguageLocaleIdName],
    [KnowledgeArticle].[MajorVersionNumber],
    [KnowledgeArticle].[MinorVersionNumber],
    [KnowledgeArticle].[ModifiedBy],
    [KnowledgeArticle].[ModifiedByName],
    [KnowledgeArticle].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([KnowledgeArticle].[ModifiedOn],
			us.TimeZoneCode),
        [KnowledgeArticle].[ModifiedOn],
    [KnowledgeArticle].[ModifiedOnBehalfBy],
    [KnowledgeArticle].[ModifiedOnBehalfByName],
    [KnowledgeArticle].[ModifiedOnBehalfByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([KnowledgeArticle].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [KnowledgeArticle].[OverriddenCreatedOn],
    [KnowledgeArticle].[OwnerId],
    [KnowledgeArticle].[OwnerIdName],
    [KnowledgeArticle].[OwnerIdType],
    [KnowledgeArticle].[OwnerIdYomiName],
    [KnowledgeArticle].[OwningBusinessUnit],
    [KnowledgeArticle].[OwningTeam],
    [KnowledgeArticle].[OwningUser],
    [KnowledgeArticle].[ParentArticleContentId],
    [KnowledgeArticle].[ParentArticleContentIdName],
    [KnowledgeArticle].[PreviousArticleContentId],
    [KnowledgeArticle].[PreviousArticleContentIdName],
    [KnowledgeArticle].[primaryauthorid],
    [KnowledgeArticle].[primaryauthoridName],
    [KnowledgeArticle].[processid],
    dbo.fn_UTCToTzCodeSpecificLocalTime([KnowledgeArticle].[PublishOn],
			us.TimeZoneCode),
        [KnowledgeArticle].[PublishOn],
    [KnowledgeArticle].[PublishStatusId],
    [KnowledgeArticle].[Rating],
    [KnowledgeArticle].[Rating_Count],
    dbo.fn_UTCToTzCodeSpecificLocalTime([KnowledgeArticle].[Rating_Date],
			us.TimeZoneCode),
        [KnowledgeArticle].[Rating_Date],
    [KnowledgeArticle].[Rating_State],
    [KnowledgeArticle].[Rating_Sum],
    [KnowledgeArticle].[ReadyForReview],
    [KnowledgeArticle].[Review],
    [KnowledgeArticle].[RootArticleId],
    [KnowledgeArticle].[RootArticleIdName],
    [KnowledgeArticle].[ScheduledStatusId],
    [KnowledgeArticle].[SetCategoryAssociations],
    SetCategoryAssociationsPLTable.Value,
    [KnowledgeArticle].[SetProductAssociations],
    [KnowledgeArticle].[stageid],
    [KnowledgeArticle].[StateCode],
    StateCodePLTable.Value,
    [KnowledgeArticle].[StatusCode],
    StatusCodePLTable.Value,
    [KnowledgeArticle].[SubjectId],
    --[KnowledgeArticle].[SubjectIdDsc]
    0,
    [KnowledgeArticle].[SubjectIdName],
    [KnowledgeArticle].[TimeZoneRuleVersionNumber],
    [KnowledgeArticle].[Title],
    [KnowledgeArticle].[TransactionCurrencyId],
    [KnowledgeArticle].[TransactionCurrencyIdName],
    [KnowledgeArticle].[traversedpath],
    [KnowledgeArticle].[UpdateContent],
    [KnowledgeArticle].[UTCConversionTimeZoneCode],
    [KnowledgeArticle].[VersionNumber]
from KnowledgeArticle
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [ExpiredReviewOptionsPLTable] on 
		([ExpiredReviewOptionsPLTable].AttributeName = 'expiredreviewoptions'
		and [ExpiredReviewOptionsPLTable].ObjectTypeCode = 9953
		and [ExpiredReviewOptionsPLTable].AttributeValue = [KnowledgeArticle].[ExpiredReviewOptions]
		and [ExpiredReviewOptionsPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsInternalPLTable] on 
		([IsInternalPLTable].AttributeName = 'isinternal'
		and [IsInternalPLTable].ObjectTypeCode = 9953
		and [IsInternalPLTable].AttributeValue = [KnowledgeArticle].[IsInternal]
		and [IsInternalPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsLatestVersionPLTable] on 
		([IsLatestVersionPLTable].AttributeName = 'islatestversion'
		and [IsLatestVersionPLTable].ObjectTypeCode = 9953
		and [IsLatestVersionPLTable].AttributeValue = [KnowledgeArticle].[IsLatestVersion]
		and [IsLatestVersionPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsPrimaryPLTable] on 
		([IsPrimaryPLTable].AttributeName = 'isprimary'
		and [IsPrimaryPLTable].ObjectTypeCode = 9953
		and [IsPrimaryPLTable].AttributeValue = [KnowledgeArticle].[IsPrimary]
		and [IsPrimaryPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [SetProductAssociationsPLTable] on 
		([SetProductAssociationsPLTable].AttributeName = 'setproductassociations'
		and [SetProductAssociationsPLTable].ObjectTypeCode = 9953
		and [SetProductAssociationsPLTable].AttributeValue = [KnowledgeArticle].[SetProductAssociations]
		and [SetProductAssociationsPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ReadyForReviewPLTable] on 
		([ReadyForReviewPLTable].AttributeName = 'readyforreview'
		and [ReadyForReviewPLTable].ObjectTypeCode = 9953
		and [ReadyForReviewPLTable].AttributeValue = [KnowledgeArticle].[ReadyForReview]
		and [ReadyForReviewPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ReviewPLTable] on 
		([ReviewPLTable].AttributeName = 'review'
		and [ReviewPLTable].ObjectTypeCode = 9953
		and [ReviewPLTable].AttributeValue = [KnowledgeArticle].[Review]
		and [ReviewPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsRootArticlePLTable] on 
		([IsRootArticlePLTable].AttributeName = 'isrootarticle'
		and [IsRootArticlePLTable].ObjectTypeCode = 9953
		and [IsRootArticlePLTable].AttributeValue = [KnowledgeArticle].[IsRootArticle]
		and [IsRootArticlePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [UpdateContentPLTable] on 
		([UpdateContentPLTable].AttributeName = 'updatecontent'
		and [UpdateContentPLTable].ObjectTypeCode = 9953
		and [UpdateContentPLTable].AttributeValue = [KnowledgeArticle].[UpdateContent]
		and [UpdateContentPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [SetCategoryAssociationsPLTable] on 
		([SetCategoryAssociationsPLTable].AttributeName = 'setcategoryassociations'
		and [SetCategoryAssociationsPLTable].ObjectTypeCode = 9953
		and [SetCategoryAssociationsPLTable].AttributeValue = [KnowledgeArticle].[SetCategoryAssociations]
		and [SetCategoryAssociationsPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 9953
		and [StateCodePLTable].AttributeValue = [KnowledgeArticle].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 9953
		and [StatusCodePLTable].AttributeValue = [KnowledgeArticle].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(9953) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[KnowledgeArticle].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 9953
		)
		
	-- role based access
	or 
	
exists
(
	select 
	1
	where
	(
		-- deep/local security
		(((pdm.PrivilegeDepthMask & 0x4) != 0) or ((pdm.PrivilegeDepthMask & 0x2) != 0)) and 
		[KnowledgeArticle].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 9953)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[KnowledgeArticle].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[KnowledgeArticle].[knowledgearticleId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 9953
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredKnowledgearticle] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredKnowledgearticle] TO [CRMReaderRole]
    AS [dbo];

