USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[InterProcessLock]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for InterProcessLock
--
create view [dbo].[InterProcessLock]
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

GO
