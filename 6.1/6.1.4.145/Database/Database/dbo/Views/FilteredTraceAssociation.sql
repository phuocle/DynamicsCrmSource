

--
-- report view for traceassociation
--
create view dbo.[FilteredTraceAssociation] (
    [organizationid],
    [organizationidname],
    [regardingobjectid],
    [regardingobjecttypecode],
    [traceassociationid],
    [tracelogid],
    [tracelogidname]
) with view_metadata as
select
    [TraceAssociation].[OrganizationId],
    [TraceAssociation].[OrganizationIdName],
    [TraceAssociation].[RegardingObjectId],
    [TraceAssociation].[RegardingObjectTypeCode],
    [TraceAssociation].[TraceAssociationId],
    [TraceAssociation].[TraceLogId],
    [TraceAssociation].[TraceLogIdName]
from TraceAssociation
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(8050) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [TraceAssociation].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredTraceAssociation] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredTraceAssociation] TO [CRMReaderRole]
    AS [dbo];

