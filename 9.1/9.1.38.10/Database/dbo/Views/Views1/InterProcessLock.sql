


--
-- base view for InterProcessLock
--
create view dbo.[InterProcessLock]
 (

    -- physical attributes
    [InterProcessLockId],
    [Token],
    [ModifiedOn]
) with view_metadata as
select

    -- physical attribute
    [InterProcessLockBase].[InterProcessLockId],
    [InterProcessLockBase].[Token],
    [InterProcessLockBase].[ModifiedOn]
from [InterProcessLockBase] 
