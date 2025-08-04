


--
-- base view for AppModuleMetadataDependency
--
create view dbo.[AppModuleMetadataDependency]
 (

    -- physical attributes
    [AppModuleMetadataDependencyId],
    [DependentComponentId],
    [RequiredComponentType],
    [RequiredComponentId],
    [RequiredComponentVersion],
    [State],
    [RequiredComponentSubType],
    [RequiredComponentInternalId],
    [CreatedOn],
    [ModifiedOn]
) with view_metadata as
select

    -- physical attribute
    [AppModuleMetadataDependencyBase].[AppModuleMetadataDependencyId],
    [AppModuleMetadataDependencyBase].[DependentComponentId],
    [AppModuleMetadataDependencyBase].[RequiredComponentType],
    [AppModuleMetadataDependencyBase].[RequiredComponentId],
    [AppModuleMetadataDependencyBase].[RequiredComponentVersion],
    [AppModuleMetadataDependencyBase].[State],
    [AppModuleMetadataDependencyBase].[RequiredComponentSubType],
    [AppModuleMetadataDependencyBase].[RequiredComponentInternalId],
    [AppModuleMetadataDependencyBase].[CreatedOn],
    [AppModuleMetadataDependencyBase].[ModifiedOn]
from [AppModuleMetadataDependencyBase] 
