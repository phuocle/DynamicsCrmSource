

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
    ON OBJECT::[dbo].[FilteredQueueMembership] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredQueueMembership] TO [CRMReaderRole]
    AS [dbo];

