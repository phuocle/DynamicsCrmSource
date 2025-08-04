

--
-- report view for queuemembership
--
create view dbo.[FilteredQueueMembership] (
    [queueid],
    [queuemembershipid],
    [systemuserid],
    [versionnumber]
) with view_metadata as
select
    [QueueMembership].[QueueId],
    [QueueMembership].[QueueMembershipId],
    [QueueMembership].[SystemUserId],
    [QueueMembership].[VersionNumber]
from QueueMembership

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredQueueMembership] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredQueueMembership] TO [CRMReaderRole]
    AS [dbo];

