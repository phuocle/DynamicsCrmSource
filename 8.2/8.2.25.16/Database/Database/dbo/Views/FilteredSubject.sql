

--
-- report view for subject
--
create view dbo.[FilteredSubject] (
    [createdby],
    [createdbydsc],
    [createdbyexternalparty],
    [createdbyexternalpartyname],
    [createdbyexternalpartyyominame],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbydsc],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [description],
    [featuremask],
    [importsequencenumber],
    [modifiedby],
    [modifiedbydsc],
    [modifiedbyexternalparty],
    [modifiedbyexternalpartyname],
    [modifiedbyexternalpartyyominame],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbydsc],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [organizationid],
    [organizationiddsc],
    [organizationidname],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [parentsubject],
    [parentsubjectdsc],
    [parentsubjectname],
    [subjectid],
    [title],
    [versionnumber]
) with view_metadata as
select
    [Subject].[CreatedBy],
    --[Subject].[CreatedByDsc]
    0,
    [Subject].[CreatedByExternalParty],
    [Subject].[CreatedByExternalPartyName],
    [Subject].[CreatedByExternalPartyYomiName],
    [Subject].[CreatedByName],
    [Subject].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Subject].[CreatedOn],
			us.TimeZoneCode),
        [Subject].[CreatedOn],
    [Subject].[CreatedOnBehalfBy],
    --[Subject].[CreatedOnBehalfByDsc]
    0,
    [Subject].[CreatedOnBehalfByName],
    [Subject].[CreatedOnBehalfByYomiName],
    [Subject].[Description],
    [Subject].[FeatureMask],
    [Subject].[ImportSequenceNumber],
    [Subject].[ModifiedBy],
    --[Subject].[ModifiedByDsc]
    0,
    [Subject].[ModifiedByExternalParty],
    [Subject].[ModifiedByExternalPartyName],
    [Subject].[ModifiedByExternalPartyYomiName],
    [Subject].[ModifiedByName],
    [Subject].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Subject].[ModifiedOn],
			us.TimeZoneCode),
        [Subject].[ModifiedOn],
    [Subject].[ModifiedOnBehalfBy],
    --[Subject].[ModifiedOnBehalfByDsc]
    0,
    [Subject].[ModifiedOnBehalfByName],
    [Subject].[ModifiedOnBehalfByYomiName],
    [Subject].[OrganizationId],
    --[Subject].[OrganizationIdDsc]
    0,
    [Subject].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Subject].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [Subject].[OverriddenCreatedOn],
    [Subject].[ParentSubject],
    --[Subject].[ParentSubjectDsc]
    0,
    [Subject].[ParentSubjectName],
    [Subject].[SubjectId],
    [Subject].[Title],
    [Subject].[VersionNumber]
from Subject
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    cross join dbo.fn_GetMaxPrivilegeDepthMask(129) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [Subject].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSubject] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSubject] TO [CRMReaderRole]
    AS [dbo];

