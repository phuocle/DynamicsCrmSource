SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for knowledgebaserecord
--
create view [dbo].[FilteredKnowledgeBaseRecord] (
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
GRANT SELECT ON  [dbo].[FilteredKnowledgeBaseRecord] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredKnowledgeBaseRecord] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
