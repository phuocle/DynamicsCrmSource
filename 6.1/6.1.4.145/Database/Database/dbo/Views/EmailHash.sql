


--
-- base view for EmailHash
--
create view dbo.[EmailHash]
 (
    -- logical attributes
    [OwnerId],
    [OwnerIdType],
    [OwningBusinessUnit],
    [OwningUser],

    -- physical attributes
    [HashType],
    [Hash],
    [EmailHashId],
    [ActivityId],
    [VersionNumber]
) with view_metadata as
select
    -- logical attributes
    [activity_pointer_email_hash].[OwnerId],
    [activity_pointer_email_hash].[OwnerIdType],
    [activity_pointer_email_hash].[OwningBusinessUnit],
    case when [activity_pointer_email_hash].OwnerIdType = 8
    then [activity_pointer_email_hash].OwnerId
    else null
    end,

    -- physical attribute
    [EmailHashBase].[HashType],
    [EmailHashBase].[Hash],
    [EmailHashBase].[EmailHashId],
    [EmailHashBase].[ActivityId],
    [EmailHashBase].[VersionNumber]
from [EmailHashBase] 
    left join [ActivityPointerBase] [activity_pointer_email_hash] with(nolock) on ([EmailHashBase].[ActivityId] = [activity_pointer_email_hash].[ActivityId])
