USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[FilteredQueueMembership]    Script Date: 4/10/2017 9:59:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
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
