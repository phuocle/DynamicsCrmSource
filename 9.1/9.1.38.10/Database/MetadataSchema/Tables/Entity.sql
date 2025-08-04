CREATE TABLE [MetadataSchema].[Entity] (
    [EntityId]                            UNIQUEIDENTIFIER ROWGUIDCOL NOT NULL,
    [Name]                                NVARCHAR (128)   NULL,
    [ObjectTypeCode]                      INT              CONSTRAINT [Set_To_Zero7] DEFAULT ((0)) NULL,
    [PhysicalName]                        NVARCHAR (128)   NULL,
    [LogicalName]                         NVARCHAR (128)   NULL,
    [CollectionName]                      NVARCHAR (128)   NULL,
    [BaseTableName]                       NVARCHAR (128)   NULL,
    [LogicalCollectionName]               NVARCHAR (128)   NULL,
    [IsIntersect]                         BIT              NOT NULL,
    [IsSecurityIntersect]                 BIT              NOT NULL,
    [IsLookupTable]                       BIT              NOT NULL,
    [EventMask]                           INT              NOT NULL,
    [IsLogicalEntity]                     BIT              CONSTRAINT [Set_To_Zero8] DEFAULT ((0)) NULL,
    [IsCustomizable]                      BIT              CONSTRAINT [Set_To_Zero9] DEFAULT ((0)) NULL,
    [IsCollaboration]                     BIT              CONSTRAINT [Set_To_Zero10] DEFAULT ((0)) NULL,
    [IsActivity]                          BIT              CONSTRAINT [Set_To_Zero11] DEFAULT ((0)) NULL,
    [AddressTableName]                    NVARCHAR (128)   NULL,
    [IsMappable]                          BIT              CONSTRAINT [Set_To_Zero12] DEFAULT ((0)) NULL,
    [OwnershipTypeMask]                   INT              CONSTRAINT [Set_To_Zero13] DEFAULT ((0)) NOT NULL,
    [IsAudited]                           BIT              CONSTRAINT [Set_To_Zero14] DEFAULT ((0)) NOT NULL,
    [UsesFullnameConventionRules]         BIT              CONSTRAINT [Set_To_Zero15] DEFAULT ((0)) NOT NULL,
    [IsParented]                          BIT              CONSTRAINT [Set_To_Zero16] DEFAULT ((0)) NOT NULL,
    [EntityMask]                          INT              CONSTRAINT [Set_To_Zero17] DEFAULT ((0)) NULL,
    [IsReplicated]                        BIT              CONSTRAINT [Set_To_Zero_2B_Repl_0] DEFAULT ((0)) NOT NULL,
    [IsReplicationUserFiltered]           BIT              CONSTRAINT [Set_To_Zero_2B_Repl_2] DEFAULT ((0)) NOT NULL,
    [IsChildEntity]                       BIT              CONSTRAINT [Set_To_Zero_ChildEntity] DEFAULT ((0)) NOT NULL,
    [IsCustomEntity]                      BIT              DEFAULT ((0)) NOT NULL,
    [IsActivityParty]                     BIT              CONSTRAINT [Set_To_Zero_ActivityParty] DEFAULT ((0)) NOT NULL,
    [IsValidForAdvancedFind]              BIT              CONSTRAINT [Set_To_Zero_Entity_IsValidForAdvancedFind] DEFAULT ((0)) NOT NULL,
    [ExtensionTableName]                  NVARCHAR (128)   NULL,
    [VersionNumber]                       ROWVERSION       NOT NULL,
    [ReportViewName]                      NVARCHAR (128)   NULL,
    [IsRequiredOffline]                   BIT              DEFAULT ((0)) NOT NULL,
    [IsRenameable]                        BIT              DEFAULT ((0)) NOT NULL,
    [EntityClassName]                     NVARCHAR (255)   DEFAULT ('') NOT NULL,
    [ServiceClassName]                    NVARCHAR (255)   DEFAULT ('') NOT NULL,
    [EntityAssembly]                      NVARCHAR (255)   DEFAULT ('') NOT NULL,
    [ServiceAssembly]                     NVARCHAR (255)   DEFAULT ('') NOT NULL,
    [EntityRowId]                         UNIQUEIDENTIFIER DEFAULT (newid()) NOT NULL,
    [IsDuplicateCheckSupported]           BIT              DEFAULT ((0)) NOT NULL,
    [IsImportable]                        BIT              DEFAULT ((0)) NOT NULL,
    [IsShareableAcrossOrgs]               BIT              DEFAULT ((0)) NOT NULL,
    [IsPublishable]                       BIT              DEFAULT ((0)) NOT NULL,
    [OriginalLocalizedName]               NVARCHAR (128)   NULL,
    [OriginalLocalizedCollectionName]     NVARCHAR (128)   NULL,
    [CanTriggerWorkflow]                  BIT              DEFAULT ((0)) NOT NULL,
    [WorkflowSupport]                     INT              DEFAULT ((0)) NOT NULL,
    [CanBeChildInCustomRelationship]      BIT              DEFAULT ((0)) NOT NULL,
    [CanBeInCustomEntityAssociation]      BIT              DEFAULT ((0)) NOT NULL,
    [CanBeInCustomReflexiveRelationship]  BIT              DEFAULT ((0)) NOT NULL,
    [IsMailMergeEnabled]                  BIT              DEFAULT ((0)) NOT NULL,
    [RecurrenceTypeMask]                  INT              DEFAULT ((0)) NOT NULL,
    [RecurrenceBaseEntityId]              UNIQUEIDENTIFIER NULL,
    [IsDocumentManagementEnabled]         BIT              DEFAULT ((0)) NOT NULL,
    [MobileAccessLevelMask]               INT              DEFAULT ((0)) NOT NULL,
    [IsVisibleInMobile]                   BIT              DEFAULT ((0)) NOT NULL,
    [IsMultipleQueueEnabled]              BIT              DEFAULT ((0)) NOT NULL,
    [AutoRouteToOwnerQueue]               BIT              DEFAULT ((0)) NOT NULL,
    [IsAuditEnabled]                      BIT              DEFAULT ((0)) NOT NULL,
    [IsConnectionsEnabled]                BIT              DEFAULT ((0)) NOT NULL,
    [IsReadingPaneEnabled]                BIT              DEFAULT ((1)) NOT NULL,
    [IsMapiGridEnabled]                   BIT              DEFAULT ((1)) NOT NULL,
    [IsEnabledForCharts]                  BIT              DEFAULT ((1)) NOT NULL,
    [IconLargeName]                       NVARCHAR (512)   NULL,
    [IconMediumName]                      NVARCHAR (512)   NULL,
    [IconSmallName]                       NVARCHAR (512)   NULL,
    [NextCustomAttributeColumnNumber]     INT              DEFAULT ((1)) NOT NULL,
    [ActivityTypeMask]                    INT              DEFAULT ((0)) NOT NULL,
    [IsSolutionAware]                     BIT              DEFAULT ((0)) NOT NULL,
    [SolutionId]                          UNIQUEIDENTIFIER DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId]                UNIQUEIDENTIFIER DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [ComponentState]                      TINYINT          DEFAULT ((0)) NOT NULL,
    [OverwriteTime]                       DATETIME         DEFAULT ((0)) NOT NULL,
    [InheritsFrom]                        UNIQUEIDENTIFIER NULL,
    [IsInheritedFrom]                     BIT              DEFAULT ((0)) NOT NULL,
    [CanBeSecured]                        BIT              CONSTRAINT [DF_Entity_CanBeSecured] DEFAULT ((0)) NOT NULL,
    [CanModifyConnectionSettings]         BIT              CONSTRAINT [DF_Entity_CanModifyConnectionSettings] DEFAULT ((1)) NOT NULL,
    [CanModifyDuplicateDetectionSettings] BIT              CONSTRAINT [DF_Entity_CanModifyDuplicateDetectionSettings] DEFAULT ((1)) NOT NULL,
    [CanModifyMailMergeSettings]          BIT              CONSTRAINT [DF_Entity_CanModifyMailMergeSettings] DEFAULT ((1)) NOT NULL,
    [CanModifyQueueSettings]              BIT              CONSTRAINT [DF_Entity_CanModifyQueueSettings] DEFAULT ((1)) NOT NULL,
    [CanCreateAttributes]                 BIT              CONSTRAINT [DF_Entity_CanCreateAttributes] DEFAULT ((1)) NOT NULL,
    [CanBeRelatedEntityInRelationship]    BIT              CONSTRAINT [DF_Entity_CanBeRelatedEntityInRelationship] DEFAULT ((1)) NOT NULL,
    [CanBePrimaryEntityInRelationship]    BIT              CONSTRAINT [DF_Entity_CanBePrimaryEntityInRelationship] DEFAULT ((1)) NOT NULL,
    [CanBeInManyToMany]                   BIT              CONSTRAINT [DF_Entity_CanBeInManyToMany] DEFAULT ((1)) NOT NULL,
    [CanCreateForms]                      BIT              CONSTRAINT [DF_Entity_CanCreateForms] DEFAULT ((1)) NOT NULL,
    [CanCreateCharts]                     BIT              CONSTRAINT [DF_Entity_CanCreateCharts] DEFAULT ((1)) NOT NULL,
    [CanCreateViews]                      BIT              CONSTRAINT [DF_Entity_CanCreateViews] DEFAULT ((1)) NOT NULL,
    [CanModifyAuditSettings]              BIT              CONSTRAINT [DF_Entity_CanModifyAuditSettings] DEFAULT ((1)) NOT NULL,
    [CanModifyMobileVisibility]           BIT              CONSTRAINT [DF_Entity_CanModifyMobileVisibility] DEFAULT ((0)) NOT NULL,
    [ParentComponentType]                 INT              NULL,
    [ParentControllingAttributeName]      NVARCHAR (128)   NULL,
    [IsManaged]                           BIT              DEFAULT ((0)) NOT NULL,
    [CanModifyAdditionalSettings]         BIT              CONSTRAINT [DF_Entity_CanModifyAdditionalSettings] DEFAULT ((1)) NOT NULL,
    [IsAIRUpdated]                        BIT              DEFAULT ((0)) NOT NULL,
    [IsQuickCreateEnabled]                BIT              DEFAULT ((0)) NOT NULL,
    [IntroducedVersion]                   NVARCHAR (48)    NULL,
    [AutoCreateAccessTeams]               BIT              DEFAULT ((0)) NOT NULL,
    [IsBusinessProcessEnabled]            BIT              DEFAULT ((0)) NOT NULL,
    [HasIdsTable]                         BIT              DEFAULT ((0)) NOT NULL,
    [IsReadOnlyInMobileClient]            BIT              DEFAULT ((0)) NOT NULL,
    [IsVisibleInMobileClient]             BIT              DEFAULT ((0)) NOT NULL,
    [CanModifyMobileClientVisibility]     BIT              CONSTRAINT [DF_Entity_CanModifyMobileClientVisibility] DEFAULT ((1)) NOT NULL,
    [CanModifyMobileClientReadOnly]       BIT              CONSTRAINT [DF_Entity_CanModifyMobileClientReadOnly] DEFAULT ((1)) NOT NULL,
    [IsEnabledForTrace]                   BIT              DEFAULT ((0)) NOT NULL,
    [CanChangeHierarchicalRelationship]   BIT              CONSTRAINT [DF_Entity_CanChangeHierarchicalRelationship] DEFAULT ((0)) NOT NULL,
    [EntityHelpUrl]                       NVARCHAR (1024)  NULL,
    [EntityHelpUrlEnabled]                BIT              DEFAULT ((0)) NOT NULL,
    [IsHSMEnabled]                        BIT              DEFAULT ((0)) NOT NULL,
    [UsesBusinessDataLabelTable]          BIT              DEFAULT ((0)) NOT NULL,
    [IsStateModelAware]                   BIT              DEFAULT ((0)) NOT NULL,
    [EnforceStateTransitions]             BIT              DEFAULT ((0)) NOT NULL,
    [ChangeTrackingEnabled]               BIT              DEFAULT ((0)) NOT NULL,
    [CanChangeTrackingBeEnabled]          BIT              DEFAULT ((0)) NOT NULL,
    [CanEnableSyncToExternalSearchIndex]  BIT              DEFAULT ((0)) NOT NULL,
    [SyncToExternalSearchIndex]           BIT              DEFAULT ((0)) NOT NULL,
    [DataProviderId]                      UNIQUEIDENTIFIER NULL,
    [DataSourceId]                        UNIQUEIDENTIFIER NULL,
    [EntityClass]                         INT              DEFAULT ((0)) NOT NULL,
    [EntityColor]                         NVARCHAR (7)     NULL,
    [EntitySetName]                       NVARCHAR (128)   NULL,
    [ExternalCollectionName]              NVARCHAR (128)   NULL,
    [ExternalName]                        NVARCHAR (128)   NULL,
    [IconVectorName]                      NTEXT            NULL,
    [IsInteractionCentricEnabled]         BIT              DEFAULT ((0)) NOT NULL,
    [IsBPFEntity]                         BIT              DEFAULT ((0)) NOT NULL,
    [IsDocumentRecommendationsEnabled]    BIT              DEFAULT ((0)) NOT NULL,
    [IsMergeEnabledSolutionComponent]     BIT              DEFAULT ((0)) NOT NULL,
    [IsOneNoteIntegrationEnabled]         BIT              DEFAULT ((0)) NOT NULL,
    [IsPrivate]                           BIT              DEFAULT ((0)) NOT NULL,
    [IsSLAEnabled]                        BIT              DEFAULT ((0)) NOT NULL,
    [MobileOfflineFilters]                NVARCHAR (4000)  DEFAULT ('') NOT NULL,
    [IsOfflineInMobileClient]             BIT              DEFAULT ((0)) NOT NULL,
    [CanModifyMobileClientOffline]        BIT              CONSTRAINT [DF_Entity_CanModifyMobileClientOffline] DEFAULT ((1)) NOT NULL,
    [DaysSinceRecordLastModified]         INT              DEFAULT ((0)) NOT NULL,
    [IsEnabledForExternalChannels]        BIT              DEFAULT ((0)) NOT NULL,
    [CanExternalChannelsBeEnabled]        BIT              DEFAULT ((1)) NOT NULL,
    [IsOptimisticConcurrencyRequired]     BIT              DEFAULT ((0)) NOT NULL,
    [IsOptimisticConcurrencyEnabled]      BIT              DEFAULT ((0)) NOT NULL,
    [CanOptimisticConcurrencyBeEnabled]   BIT              DEFAULT ((0)) NOT NULL,
    [CanOptimisticConcurrencyBeRequired]  BIT              DEFAULT ((0)) NOT NULL,
    [AvailableForRetrieve]                INT              DEFAULT ((0)) NOT NULL,
    [AvailableForRetrieveMultiple]        INT              DEFAULT ((0)) NOT NULL,
    [AvailableForCreate]                  INT              DEFAULT ((0)) NOT NULL,
    [AvailableForUpdate]                  INT              DEFAULT ((0)) NOT NULL,
    [AvailableForDelete]                  INT              DEFAULT ((0)) NOT NULL,
    [IsKnowledgeManagementEnabled]        BIT              DEFAULT ((0)) NOT NULL,
    [IsRetrieveAuditEnabled]              BIT              DEFAULT ((0)) NOT NULL,
    [IsRetrieveMultipleAuditEnabled]      BIT              DEFAULT ((0)) NOT NULL,
    [IsMSTeamsIntegrationEnabled]         BIT              DEFAULT ((0)) NOT NULL,
    [CreatedOn]                           DATETIME         DEFAULT ((0)) NOT NULL,
    [ModifiedOn]                          DATETIME         DEFAULT ((0)) NOT NULL,
    [SettingOf]                           NVARCHAR (128)   NULL,
    CONSTRAINT [XPKEntity] PRIMARY KEY CLUSTERED ([EntityId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC)
);


GO
ALTER TABLE [MetadataSchema].[Entity] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_entity_logicalname]
    ON [MetadataSchema].[Entity]([LogicalName] ASC);


GO
CREATE NONCLUSTERED INDEX [ndx_entity_name]
    ON [MetadataSchema].[Entity]([Name] ASC);


GO
CREATE NONCLUSTERED INDEX [ndx_entity_physicalname]
    ON [MetadataSchema].[Entity]([PhysicalName] ASC);


GO
CREATE NONCLUSTERED INDEX [ndx_Entity_SolutionId]
    ON [MetadataSchema].[Entity]([SolutionId] ASC, [OverwriteTime] ASC)
    INCLUDE([EntityId], [VersionNumber]);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Entity_RowId]
    ON [MetadataSchema].[Entity]([EntityRowId] ASC, [EntityId] ASC);


GO
CREATE NONCLUSTERED INDEX [ndx_entity_fegetformxml]
    ON [MetadataSchema].[Entity]([EntityId] ASC, [OverwriteTime] ASC, [ComponentState] ASC)
    INCLUDE([ObjectTypeCode], [LogicalName]);


GO
CREATE NONCLUSTERED INDEX [ndx_ComponentStateOverwriteTime_Included_IsCustomEntity]
    ON [MetadataSchema].[Entity]([ComponentState] ASC, [OverwriteTime] ASC)
    INCLUDE([ObjectTypeCode], [BaseTableName], [ExtensionTableName], [InheritsFrom], [IsCustomEntity]) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_Name_Included_ForRename]
    ON [MetadataSchema].[Entity]([Name] ASC)
    INCLUDE([EntityId], [ObjectTypeCode], [BaseTableName], [ReportViewName]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_entity_ObjectTypeCode_OwnershipTypeMask_ComponentState_OverwriteTime]
    ON [MetadataSchema].[Entity]([ObjectTypeCode] ASC, [OwnershipTypeMask] ASC, [ComponentState] ASC, [OverwriteTime] ASC);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Entity_VersionNumber]
    ON [MetadataSchema].[Entity]([VersionNumber] ASC);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_for_entitykey_UniqueEntity]
    ON [MetadataSchema].[Entity]([ComponentState] ASC, [Name] ASC, [OverwriteTime] ASC)
    INCLUDE([EntityId]) WHERE ([ComponentState] IS NOT NULL AND [Name] IS NOT NULL AND [OverwriteTime] IS NOT NULL) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

