USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[LocalConfigStore]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for LocalConfigStore
--
create view [dbo].[LocalConfigStore]
 (
    [IsValueSet],

    -- physical attributes
    [Id],
    [AssemblyName],
    [PublicToken],
    [KeyName],
    [Value]
) with view_metadata as
select
    CAST(case when [LocalConfigStoreBase].[Value] is null then 0 else 1 end as bit),

    -- physical attribute
    [LocalConfigStoreBase].[Id],
    [LocalConfigStoreBase].[AssemblyName],
    [LocalConfigStoreBase].[PublicToken],
    [LocalConfigStoreBase].[KeyName],
    [LocalConfigStoreBase].[Value]
from [LocalConfigStoreBase] 

GO
