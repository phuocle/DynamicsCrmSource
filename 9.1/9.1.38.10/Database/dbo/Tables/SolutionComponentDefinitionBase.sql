CREATE TABLE [dbo].[SolutionComponentDefinitionBase] (
    [IsDependencyDisabled]                        BIT              CONSTRAINT [DF_SolutionComponentDefinitionBase_IsDependencyDisabled] DEFAULT ((0)) NOT NULL,
    [AlwaysRemoveActiveCustomizationsOnUninstall] BIT              CONSTRAINT [DF_SolutionComponentDefinitionBase_AlwaysRemoveActiveCustomizationsOnUninstall] DEFAULT ((0)) NOT NULL,
    [LabelTypeCode]                               INT              NULL,
    [OverriddenCreatedOn]                         DATETIME         NULL,
    [ComponentState]                              INT              CONSTRAINT [DF_SolutionComponentDefinitionBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [IsMetadata]                                  BIT              CONSTRAINT [DF_SolutionComponentDefinitionBase_IsMetadata] DEFAULT ((0)) NOT NULL,
    [IsMergeable]                                 BIT              CONSTRAINT [DF_SolutionComponentDefinitionBase_IsMergeable] DEFAULT ((0)) NOT NULL,
    [IsViewable]                                  BIT              CONSTRAINT [DF_SolutionComponentDefinitionBase_IsViewable] DEFAULT ((0)) NOT NULL,
    [PrimaryEntityName]                           NVARCHAR (250)   NULL,
    [Name]                                        NVARCHAR (250)   NOT NULL,
    [RemoveActiveCustomizationsBehavior]          INT              CONSTRAINT [DF_SolutionComponentDefinitionBase_RemoveActiveCustomizationsBehavior] DEFAULT ((2)) NULL,
    [RootComponent]                               INT              NULL,
    [RootAttributeName]                           NVARCHAR (250)   NULL,
    [SolutionComponentDefinitionIdUnique]         UNIQUEIDENTIFIER CONSTRAINT [DF_SolutionComponentDefinitionBase_SolutionComponentDefinitionIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [ViewableDescendentComponentType]             INT              NULL,
    [AllowDeleteBaseSolutionRowAndFakeDelete]     BIT              CONSTRAINT [DF_SolutionComponentDefinitionBase_AllowDeleteBaseSolutionRowAndFakeDelete] DEFAULT ((0)) NOT NULL,
    [OverwriteTime]                               DATETIME         CONSTRAINT [DF_SolutionComponentDefinitionBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [ObjectTypeCode]                              INT              NOT NULL,
    [CanBeHidden]                                 BIT              CONSTRAINT [DF_SolutionComponentDefinitionBase_CanBeHidden] DEFAULT ((0)) NOT NULL,
    [DescendentIsViewableComponent]               BIT              CONSTRAINT [DF_SolutionComponentDefinitionBase_DescendentIsViewableComponent] DEFAULT ((0)) NOT NULL,
    [SolutionId]                                  UNIQUEIDENTIFIER CONSTRAINT [DF_SolutionComponentDefinitionBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SolutionComponentDefinitionId]               UNIQUEIDENTIFIER NOT NULL,
    [UseForceDeleteForSolutionUpdate]             BIT              CONSTRAINT [DF_SolutionComponentDefinitionBase_UseForceDeleteForSolutionUpdate] DEFAULT ((0)) NOT NULL,
    [UseSentinelRowInBaseSolution]                BIT              CONSTRAINT [DF_SolutionComponentDefinitionBase_UseSentinelRowInBaseSolution] DEFAULT ((0)) NOT NULL,
    [SupportingSolutionId]                        UNIQUEIDENTIFIER NULL,
    [ImportSequenceNumber]                        INT              NULL,
    [SolutionComponentType]                       INT              NOT NULL,
    [GroupParentComponentAttributeName]           NVARCHAR (250)   NULL,
    [IsDisplayable]                               BIT              CONSTRAINT [DF_SolutionComponentDefinitionBase_IsDisplayable] DEFAULT ((1)) NOT NULL,
    [HasIsRenameableAttribute]                    BIT              CONSTRAINT [DF_SolutionComponentDefinitionBase_HasIsRenameableAttribute] DEFAULT ((0)) NOT NULL,
    [GroupParentComponentType]                    INT              NULL,
    [CanBeAddedToSolutionComponents]              BIT              CONSTRAINT [DF_SolutionComponentDefinitionBase_CanBeAddedToSolutionComponents] DEFAULT ((0)) NOT NULL,
    [IsManaged]                                   BIT              NULL,
    [AllowOverwriteCustomizations]                BIT              CONSTRAINT [DF_SolutionComponentDefinitionBase_AllowOverwriteCustomizations] DEFAULT ((1)) NOT NULL,
    [IntroducedVersion]                           NVARCHAR (48)    NULL,
    [UseForceUpdateAlways]                        BIT              CONSTRAINT [DF_SolutionComponentDefinitionBase_UseForceUpdateAlways] DEFAULT ((0)) NOT NULL,
    [ParentAttributeName]                         NVARCHAR (250)   NULL,
    [AllowRecreateForLogicallyDeletedRow]         BIT              CONSTRAINT [DF_SolutionComponentDefinitionBase_AllowRecreateForLogicallyDeletedRow] DEFAULT ((0)) NOT NULL,
    [ComponentXPath]                              NVARCHAR (250)   NULL,
    CONSTRAINT [cndx_PrimaryKey_SolutionComponentDefinition] PRIMARY KEY CLUSTERED ([SolutionComponentDefinitionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW)
);


GO
ALTER TABLE [dbo].[SolutionComponentDefinitionBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[SolutionComponentDefinitionBase]([SolutionComponentDefinitionId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_SolutionComponentDefinitionUnique]
    ON [dbo].[SolutionComponentDefinitionBase]([Name] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

