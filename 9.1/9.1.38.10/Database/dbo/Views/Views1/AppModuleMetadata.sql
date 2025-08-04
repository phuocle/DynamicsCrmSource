


--
-- base view for AppModuleMetadata
--
create view dbo.[AppModuleMetadata]
 (

    -- physical attributes
    [AppModuleMetadataId],
    [AppModuleId],
    [ComponentType],
    [ComponentSubType],
    [ComponentId],
    [ComponentVersion],
    [ParentComponentId],
    [State],
    [ComponentIsDefault],
    [ComponentIsQuickFindQuery],
    [ComponentIsUserView],
    [ComponentIsUserChart],
    [ComponentIsUserForm],
    [ComponentIsTabletEnabled],
    [ComponentStateCode],
    [CreatedOn],
    [ModifiedOn]
) with view_metadata as
select

    -- physical attribute
    [AppModuleMetadataBase].[AppModuleMetadataId],
    [AppModuleMetadataBase].[AppModuleId],
    [AppModuleMetadataBase].[ComponentType],
    [AppModuleMetadataBase].[ComponentSubType],
    [AppModuleMetadataBase].[ComponentId],
    [AppModuleMetadataBase].[ComponentVersion],
    [AppModuleMetadataBase].[ParentComponentId],
    [AppModuleMetadataBase].[State],
    [AppModuleMetadataBase].[ComponentIsDefault],
    [AppModuleMetadataBase].[ComponentIsQuickFindQuery],
    [AppModuleMetadataBase].[ComponentIsUserView],
    [AppModuleMetadataBase].[ComponentIsUserChart],
    [AppModuleMetadataBase].[ComponentIsUserForm],
    [AppModuleMetadataBase].[ComponentIsTabletEnabled],
    [AppModuleMetadataBase].[ComponentStateCode],
    [AppModuleMetadataBase].[CreatedOn],
    [AppModuleMetadataBase].[ModifiedOn]
from [AppModuleMetadataBase] 
