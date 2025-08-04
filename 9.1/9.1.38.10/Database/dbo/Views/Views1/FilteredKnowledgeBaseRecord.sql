

--
-- report view for knowledgebaserecord
--
create view dbo.[FilteredKnowledgeBaseRecord] (
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [exchangerate],
    [knowledgebaserecordid],
    [modifiedby],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [organizationid],
    [organizationidname],
    [privateurl],
    [publicurl],
    [timezoneruleversionnumber],
    [title],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [uniqueid],
    [versionnumber]
) with view_metadata as
select
    [KnowledgeBaseRecord].[CreatedBy],
    [KnowledgeBaseRecord].[CreatedByName],
    [KnowledgeBaseRecord].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([KnowledgeBaseRecord].[CreatedOn],
			us.TimeZoneCode),
        [KnowledgeBaseRecord].[CreatedOn],
    [KnowledgeBaseRecord].[CreatedOnBehalfBy],
    [KnowledgeBaseRecord].[CreatedOnBehalfByName],
    [KnowledgeBaseRecord].[CreatedOnBehalfByYomiName],
    [KnowledgeBaseRecord].[ExchangeRate],
    [KnowledgeBaseRecord].[KnowledgeBaseRecordId],
    [KnowledgeBaseRecord].[ModifiedBy],
    [KnowledgeBaseRecord].[ModifiedByName],
    [KnowledgeBaseRecord].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([KnowledgeBaseRecord].[ModifiedOn],
			us.TimeZoneCode),
        [KnowledgeBaseRecord].[ModifiedOn],
    [KnowledgeBaseRecord].[ModifiedOnBehalfBy],
    [KnowledgeBaseRecord].[ModifiedOnBehalfByName],
    [KnowledgeBaseRecord].[ModifiedOnBehalfByYomiName],
    [KnowledgeBaseRecord].[OrganizationId],
    [KnowledgeBaseRecord].[OrganizationIdName],
    [KnowledgeBaseRecord].[PrivateUrl],
    [KnowledgeBaseRecord].[PublicUrl],
    [KnowledgeBaseRecord].[TimeZoneRuleVersionNumber],
    [KnowledgeBaseRecord].[Title],
    [KnowledgeBaseRecord].[TransactionCurrencyId],
    [KnowledgeBaseRecord].[TransactionCurrencyIdName],
    [KnowledgeBaseRecord].[UniqueId],
    [KnowledgeBaseRecord].[VersionNumber]
from KnowledgeBaseRecord
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    cross join dbo.fn_GetMaxPrivilegeDepthMask(9930) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [KnowledgeBaseRecord].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredKnowledgeBaseRecord] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredKnowledgeBaseRecord] TO [CRMReaderRole]
    AS [dbo];

