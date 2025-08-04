SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
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
