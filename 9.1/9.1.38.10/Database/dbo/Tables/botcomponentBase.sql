CREATE TABLE [dbo].[botcomponentBase] (
    [botcomponentId]            UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [OwnerId]                   UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_botcomponentBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [statecode]                 INT              NOT NULL,
    [statuscode]                INT              NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [name]                      NVARCHAR (500)   NULL,
    [OverwriteTime]             DATETIME         CONSTRAINT [DF_botcomponentBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [SolutionId]                UNIQUEIDENTIFIER CONSTRAINT [DF_botcomponentBase_SolutionId] DEFAULT ('fd140aae-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId]      UNIQUEIDENTIFIER NULL,
    [ComponentState]            INT              CONSTRAINT [DF_botcomponentBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [ComponentIdUnique]         UNIQUEIDENTIFIER CONSTRAINT [DF_botcomponentBase_ComponentIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [IsManaged]                 BIT              CONSTRAINT [DF_botcomponentBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [IsCustomizable]            BIT              CONSTRAINT [DF_botcomponentBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [ComponentType]             INT              NULL,
    [Content]                   NVARCHAR (MAX)   NULL,
    [Category]                  NVARCHAR (100)   NULL,
    [Data]                      NVARCHAR (MAX)   NULL,
    [Description]               NVARCHAR (MAX)   NULL,
    [Language]                  INT              NULL,
    [ParentBotComponentId]      UNIQUEIDENTIFIER NULL,
    [SchemaName]                NVARCHAR (100)   NULL,
    CONSTRAINT [cndx_PrimaryKey_botcomponent] PRIMARY KEY CLUSTERED ([botcomponentId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [botcomponent_parent_botcomponent] FOREIGN KEY ([ParentBotComponentId]) REFERENCES [dbo].[botcomponentBaseIds] ([botcomponentId]),
    CONSTRAINT [business_unit_botcomponent] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_botcomponent] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [UQ_botcomponentBase_ComponentIdUnique] UNIQUE NONCLUSTERED ([ComponentIdUnique] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW)
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[botcomponentBase]([OwnerId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_botcomponents]
    ON [dbo].[botcomponentBase]([OwningBusinessUnit] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[botcomponentBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[botcomponentBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[botcomponentBase]([name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[botcomponentBase]([botcomponentId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_botcomponent_parent_botcomponent]
    ON [dbo].[botcomponentBase]([ParentBotComponentId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_for_entitykey_SchemaName]
    ON [dbo].[botcomponentBase]([ComponentState] ASC, [OverwriteTime] ASC, [SchemaName] ASC)
    INCLUDE([botcomponentId]) WHERE ([ComponentState] IS NOT NULL AND [OverwriteTime] IS NOT NULL AND [SchemaName] IS NOT NULL) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_E00965001F36478AB6B04BDABEB3BDF2]
    ON [dbo].[botcomponentBase]([botcomponentId] ASC)
    INCLUDE([name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_E00965001F36478AB6B04BDABEB3BDF2]
    ON [dbo].[botcomponentBase]([name] ASC, [botcomponentId] ASC)
    INCLUDE([CreatedOn], [OwnerId], [OwnerIdType], [IsManaged], [Description], [CreatedBy], [Content], [ComponentType], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_E00965001F36478AB6B04BDABEB3BDF2]
    ON [dbo].[botcomponentBase]([botcomponentId] ASC)
    INCLUDE([name], [CreatedOn], [OwnerId], [OwnerIdType], [IsManaged], [Description], [CreatedBy], [Content], [ComponentType], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

