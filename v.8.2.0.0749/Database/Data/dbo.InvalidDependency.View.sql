USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[InvalidDependency]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for InvalidDependency
--
create view [dbo].[InvalidDependency]
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

GO
