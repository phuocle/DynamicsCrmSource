


--
-- base view for InvalidDependency
--
create view dbo.[InvalidDependency]
 (

    -- physical attributes
    [InvalidDependencyId],
    [IsExistingNodeRequiredComponent],
    [ExistingDependencyType],
    [MissingComponentType],
    [MissingComponentId],
    [MissingComponentInfo],
    [MissingComponentLookupType],
    [ExistingComponentId],
    [ExistingComponentType]
) with view_metadata as
select

    -- physical attribute
    [InvalidDependencyBase].[InvalidDependencyId],
    [InvalidDependencyBase].[IsExistingNodeRequiredComponent],
    [InvalidDependencyBase].[ExistingDependencyType],
    [InvalidDependencyBase].[MissingComponentType],
    [InvalidDependencyBase].[MissingComponentId],
    [InvalidDependencyBase].[MissingComponentInfo],
    [InvalidDependencyBase].[MissingComponentLookupType],
    [InvalidDependencyBase].[ExistingComponentId],
    [InvalidDependencyBase].[ExistingComponentType]
from [InvalidDependencyBase] 
