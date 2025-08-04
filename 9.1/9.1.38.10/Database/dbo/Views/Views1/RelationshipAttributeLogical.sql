


--
-- logical view for RelationshipAttributeLogical
--
create view dbo.[RelationshipAttributeLogical]
 (
    -- logical attributes
    [ReferencedAttributeIdName],
    [RelationshipIdName],
    [ReferencingAttributeIdName],

    -- physical attributes
    [RelationshipAttributeId],
    [OverwriteTime],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [ComponentIdUnique],
    [IsManaged],
    [IsCustomizable],
    [RelationshipId],
    [ReferencingAttributeId],
    [ReferencedAttributeId],
    [Name]
) with view_metadata as
select
    -- logical attributes
    null,
    null,
    null,

    -- physical attribute
    [T1].[RelationshipAttributeId],
    [T1].[OverwriteTime],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[ComponentIdUnique],
    [T1].[IsManaged],
    [T1].[IsCustomizable],
    [T1].[RelationshipId],
    [T1].[ReferencingAttributeId],
    [T1].[ReferencedAttributeId],
    [T1].[Name]
from [RelationshipAttributeBase] [T1]
    left join [Attribute] [referencedattribute_relationshipattribute] on ([T1].[ReferencedAttributeId] = [referencedattribute_relationshipattribute].[AttributeId] and [referencedattribute_relationshipattribute].OverwriteTime = 0 and [referencedattribute_relationshipattribute].ComponentState = 0)
    left join [Attribute] [referencingattribute_relationshipattribute] on ([T1].[ReferencingAttributeId] = [referencingattribute_relationshipattribute].[AttributeId] and [referencingattribute_relationshipattribute].OverwriteTime = 0 and [referencingattribute_relationshipattribute].ComponentState = 0)
    left join [Relationship] [relationship_relationshipattribute] on ([T1].[RelationshipId] = [relationship_relationshipattribute].[RelationshipId] and [relationship_relationshipattribute].OverwriteTime = 0 and [relationship_relationshipattribute].ComponentState = 0)
where T1.OverwriteTime = 0