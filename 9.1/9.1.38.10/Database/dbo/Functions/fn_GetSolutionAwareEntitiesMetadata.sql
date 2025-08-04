
CREATE   FUNCTION [dbo].[fn_GetSolutionAwareEntitiesMetadata] 
( ) 
RETURNS @rtnTable Table
(
	BaseTable SYSNAME NOT NULL,
	PKAttribute SYSNAME NULL,
	SolutionComponentType INT NULL,
	IsMergeEnabledSolutionComponent bit NULL
)
AS
BEGIN 


	DECLARE @SolutionComponentType TABLE(TableName SYSNAME, componentType int, UNIQUE (TableName))

	INSERT INTO @SolutionComponentType (TableName, componentType) 
	VALUES
		('Entity', 1),
		('Attribute', 2),
		('Relationship', 3),
		('AttributePicklistValue', 4),
		('AttributeLookupValue', 5),
		('ViewAttribute', 6),
		('LocalizedLabel', 7),
		('RelationshipExtraCondition', 8),
		('OptionSet', 9),
		('EntityRelationship', 10),
		('EntityRelationshipRole', 11),
		('EntityRelationshipRelationships', 12),
		('ManagedProperty', 13),
		('EntityKey', 14),
		('EntityKeyAttribute', 15),
		('PrivilegeBase', 16),
		('PrivilegeObjectTypeCodes', 17),
		('EntityIndex', 18),
		('RoleBase', 20),
		('RolePrivilegesBase', 21),
		('DisplayStringBase', 22),
		('DisplayStringMapBase', 23),
		('OrganizationUIBase', 24),
		('OrganizationBase', 25),
		('SavedQueryBase', 26),
		('WorkflowBase', 29),
		('ProcessTriggerBase', 30),
		('ReportBase', 31),
		('ReportEntityBase', 32),
		('ReportCategoryBase', 33),
		('ReportVisibilityBase', 34),
		('ActivityMimeAttachment', 35),
		('TemplateBase', 36),
		('ContractTemplateBase', 37),
		('KbArticleTemplateBase', 38),
		('MailMergeTemplateBase', 39),
		('EntityMapBase', 46),
		('AttributeMapBase', 47),
		('RibbonCommandBase', 48),
		('RibbonContextGroupBase', 49),
		('RibbonCustomizationBase', 50),
		('RibbonRuleBase', 52),
		('RibbonTabToCommandMapBase', 53),
		('RibbonDiffBase', 55),
		('SavedQueryVisualizationBase', 59),
		('SystemFormBase', 60),
		('WebResourceBase', 61),
		('SiteMapBase', 62),
		('ConnectionRoleBase', 63),
		('ComplexControlBase', 64),
		('HierarchyRuleBase', 65),
		('CustomControlBase', 66),
		('CustomControlResourceBase', 69),
		('FieldSecurityProfileBase', 70),
		('FieldPermissionBase', 71),
		('CustomControlDefaultConfigBase', 68),
		('AppModuleBase', 80),
		('AppModuleSiteMapBase', 81),
		('AppModuleRibbonCommandBase', 82),
		('AppModuleRolesBase', 88),
		('PluginTypeBase', 90),
		('PluginAssemblyBase', 91),
		('SdkMessageProcessingStepBase', 92),
		('SdkMessageProcessingStepImageBase', 93),
		('ServiceEndpointBase', 95),
		('RoutingRuleBase', 150),
		('RoutingRuleItemBase', 151),
		('SLABase', 152),
		('SLAItemBase', 153),
		('ConvertRuleBase', 154),
		('ConvertRuleItemBase', 155),
		('KnowledgeBaseRecordBase', 156),
		('ChannelPropertyGroupBase', 157),
		('ChannelPropertyBase', 158),
		('DependencyFeatureBase', 160),
		('SimilarityRuleBase', 167),
		('SimilarityRuleConditionBase', 168),
		('ChannelAccessProfileRuleBase', 169),
		('ChannelAccessProfileRuleItemBase', 170),
		('ChannelAccessProfileEntityAccessLevelBase', 171),
		('ChannelAccessProfileBase', 172),
		('MobileOfflineProfileBase', 161),
		('MobileOfflineProfileItemBase', 162),
		('MobileOfflineProfileItemAssociationBase', 163),
		('RecommendationModelBase', 173),
		('RecommendationModelMappingBase', 174),
		('KnowledgeSearchModelBase', 175),
		('TextAnalyticsEntityMappingBase', 176),
		('TopicModelConfigurationBase', 177),
		('EmailSignatureBase', 178),
		('AdvancedSimilarityRuleBase', 179),
		('EntityDataSourceMappingBase', 180),
		('EntityDataProviderBase', 181),
		('EntityDataSourceBase', 183),
		('AppConfigBase', 191),
		('AppConfigInstanceBase', 192),
		('SdkMessageBase', 201),
		('SdkMessageFilterBase', 202),
		('SdkMessagePairBase', 203),
		('SdkMessageRequestBase', 204),
		('SdkMessageRequestFieldBase', 205),
		('SdkMessageResponseBase', 206),
		('SdkMessageResponseFieldBase', 207),
		('ImportMapBase', 208),
		('StoredProcedureCatalog', 209),
		('WebWizardBase', 210),
		('DialogsBase', 211),
		('ImportEntityMappingBase', 212),
		('ColumnMappingBase', 213),
		('LookUpMappingBase', 214),
		('PickListMappingBase', 215),
		('TransformationMappingBase', 216),
		('TransformationParameterMappingBase', 217),
		('ImportDataBase', 218),
		('ImportFileBase', 219),
		('ImportLogBase', 220),
		('OwnerMappingBase', 221),
		('NavigationSettingBase', 250),
		('NavigationSettingItemBase', 251),
		('GlobalSearchConfigurationBase', 252),
		('CardTypeBase', 260),
		('SolutionComponentDefinitionBase', 270),
		('CanvasAppBase', 300),
		('ConnectorBase', 371),
		('EnvironmentVariableDefinitionBase', 380),
		('EnvironmentVariableValueBase', 381),
		('msdyn_AITemplateBase', 400),
		('msdyn_AIModelBase', 401),
		('msdyn_AIConfigurationBase', 402),
		('EntityAnalyticsConfigBase', 430),
		('AttributeImageConfigBase', 431),
		('EntityImageConfigBase', 432)

	INSERT INTO @SolutionComponentType (TableName, componentType) 
		SELECT e.BaseTableName, SolutionComponentType FROM SolutionComponentDefinition s
		JOIN EntityView e ON e.ObjectTypeCode = s.ObjectTypeCode
		LEFT JOIN @SolutionComponentType sct ON sct.componentType = s.SolutionComponentType
		WHERE sct.componentType IS NULL 

	INSERT INTO @rtnTable (BaseTable, PKAttribute, IsMergeEnabledSolutionComponent, SolutionComponentType)
	SELECT DISTINCT t.Name as BaseTable, 
			CASE WHEN a.TableColumnName IS NULL THEN
				CASE t.Name  
					 WHEN 'RelationshipExtraCondition' THEN 'ConditionId'  
					 WHEN 'StoredProcedureCatalog' THEN 'StoredProcedureId'  
					 WHEN 'EntityIndex' THEN 'IndexId'  
					 ELSE t.Name + 'Id'
				 END  
			ELSE
				a.TableColumnName
			END as PKAttribute, ISNULL(e.IsMergeEnabledSolutionComponent, 0) as IsMergeEnabledSolutionComponent, s.componentType
		FROM sys.tables t (nolock)
		JOIN sys.columns c (nolock) on c.object_id = t.object_id
		LEFT JOIN EntityView (nolock) e ON e.BaseTableName = t.name collate database_default
		LEFT JOIN AttributeView (nolock) a ON a.EntityId = e.EntityId AND a.IsPKAttribute=1
		JOIN @SolutionComponentType s ON t.Name = s.TableName
	WHERE c.name='SolutionId' AND ((e.IsSolutionAware = 1 AND (ObjectTypeCode < 9800 OR ObjectTypeCode > 9820)) OR  t.schema_id=schema_id('MetadataSchema'))

	RETURN
END



