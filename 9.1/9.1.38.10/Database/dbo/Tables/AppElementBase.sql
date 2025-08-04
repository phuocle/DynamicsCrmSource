CREATE TABLE [dbo].[AppElementBase] (
    [AppElementId]              UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NULL,
    [statecode]                 INT              NOT NULL,
    [statuscode]                INT              NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [Name]                      NVARCHAR (450)   NULL,
    [OverwriteTime]             DATETIME         CONSTRAINT [DF_AppElementBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [SolutionId]                UNIQUEIDENTIFIER CONSTRAINT [DF_AppElementBase_SolutionId] DEFAULT ('fd140aae-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId]      UNIQUEIDENTIFIER NULL,
    [ComponentState]            INT              CONSTRAINT [DF_AppElementBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [ComponentIdUnique]         UNIQUEIDENTIFIER CONSTRAINT [DF_AppElementBase_ComponentIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [IsManaged]                 BIT              CONSTRAINT [DF_AppElementBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [IsCustomizable]            BIT              CONSTRAINT [DF_AppElementBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [ParentAppModuleId]         UNIQUEIDENTIFIER NULL,
    [PublishConfiguration]      NVARCHAR (MAX)   NULL,
    [UniqueName]                NVARCHAR (450)   NULL,
    [CanvasAppId]               UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_AppElement] PRIMARY KEY CLUSTERED ([AppElementId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [appmodule_appelement_parentappmoduleid] FOREIGN KEY ([ParentAppModuleId]) REFERENCES [dbo].[AppModuleBaseIds] ([AppModuleId]),
    CONSTRAINT [canvasapp_appelement_canvasappid] FOREIGN KEY ([CanvasAppId]) REFERENCES [dbo].[CanvasAppBaseIds] ([CanvasAppId]),
    CONSTRAINT [UQ_AppElementBase_ComponentIdUnique] UNIQUE NONCLUSTERED ([ComponentIdUnique] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW)
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[AppElementBase]([OrganizationId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[AppElementBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[AppElementBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Name]
    ON [dbo].[AppElementBase]([Name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[AppElementBase]([AppElementId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_appmodule_appelement_parentappmoduleid]
    ON [dbo].[AppElementBase]([ParentAppModuleId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_for_entitykey_uniquename]
    ON [dbo].[AppElementBase]([ComponentState] ASC, [OverwriteTime] ASC, [UniqueName] ASC)
    INCLUDE([AppElementId]) WHERE ([ComponentState] IS NOT NULL AND [OverwriteTime] IS NOT NULL AND [UniqueName] IS NOT NULL) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

