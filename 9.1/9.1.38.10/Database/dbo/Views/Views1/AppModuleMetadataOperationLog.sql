


--
-- base view for AppModuleMetadataOperationLog
--
create view dbo.[AppModuleMetadataOperationLog]
 (

    -- physical attributes
    [AppModuleMetadataOperationLogId],
    [AppModuleId],
    [State],
    [RetryCount],
    [CreatedOn],
    [StartedOn],
    [ModifiedOn]
) with view_metadata as
select

    -- physical attribute
    [AppModuleMetadataOperationLogBase].[AppModuleMetadataOperationLogId],
    [AppModuleMetadataOperationLogBase].[AppModuleId],
    [AppModuleMetadataOperationLogBase].[State],
    [AppModuleMetadataOperationLogBase].[RetryCount],
    [AppModuleMetadataOperationLogBase].[CreatedOn],
    [AppModuleMetadataOperationLogBase].[StartedOn],
    [AppModuleMetadataOperationLogBase].[ModifiedOn]
from [AppModuleMetadataOperationLogBase] 
