SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for queuemembership
--
create view [dbo].[FilteredQueueMembership] (
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
GRANT SELECT ON  [dbo].[FilteredQueueMembership] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredQueueMembership] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
