CREATE TABLE [dbo].[CustomAPIBase] (
    [CustomAPIId]                     UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                       DATETIME         NULL,
    [CreatedBy]                       UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                      DATETIME         NULL,
    [ModifiedBy]                      UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]               UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]              UNIQUEIDENTIFIER NULL,
    [OwnerId]                         UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]                     INT              CONSTRAINT [DF_CustomAPIBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]              UNIQUEIDENTIFIER NULL,
    [statecode]                       INT              NOT NULL,
    [statuscode]                      INT              NULL,
    [VersionNumber]                   ROWVERSION       NULL,
    [ImportSequenceNumber]            INT              NULL,
    [OverriddenCreatedOn]             DATETIME         NULL,
    [TimeZoneRuleVersionNumber]       INT              NULL,
    [UTCConversionTimeZoneCode]       INT              NULL,
    [Name]                            NVARCHAR (100)   NULL,
    [OverwriteTime]                   DATETIME         CONSTRAINT [DF_CustomAPIBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [SolutionId]                      UNIQUEIDENTIFIER CONSTRAINT [DF_CustomAPIBase_SolutionId] DEFAULT ('fd140aae-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId]            UNIQUEIDENTIFIER NULL,
    [ComponentState]                  INT              CONSTRAINT [DF_CustomAPIBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [ComponentIdUnique]               UNIQUEIDENTIFIER CONSTRAINT [DF_CustomAPIBase_ComponentIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [IsManaged]                       BIT              CONSTRAINT [DF_CustomAPIBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [IsCustomizable]                  BIT              CONSTRAINT [DF_CustomAPIBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [AllowedCustomProcessingStepType] INT              NULL,
    [BindingType]                     INT              NULL,
    [BoundEntityLogicalName]          NVARCHAR (100)   NULL,
    [Description]                     NVARCHAR (100)   NULL,
    [DisplayName]                     NVARCHAR (100)   NULL,
    [ExecutePrivilegeName]            NVARCHAR (100)   NULL,
    [IsFunction]                      BIT              NULL,
    [IsPrivate]                       BIT              NULL,
    [PluginTypeId]                    UNIQUEIDENTIFIER NULL,
    [UniqueName]                      NVARCHAR (128)   NULL,
    [SdkMessageId]                    UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_CustomAPI] PRIMARY KEY CLUSTERED ([CustomAPIId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [business_unit_customapi] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_customapi] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [plugintype_customapi] FOREIGN KEY ([PluginTypeId]) REFERENCES [dbo].[PluginTypeBaseIds] ([PluginTypeId]),
    CONSTRAINT [sdkmessage_customapi] FOREIGN KEY ([SdkMessageId]) REFERENCES [dbo].[SdkMessageBaseIds] ([SdkMessageId]),
    CONSTRAINT [UQ_CustomAPIBase_ComponentIdUnique] UNIQUE NONCLUSTERED ([ComponentIdUnique] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW)
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[CustomAPIBase]([OwnerId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_CustomAPIs]
    ON [dbo].[CustomAPIBase]([OwningBusinessUnit] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[CustomAPIBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[CustomAPIBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Name]
    ON [dbo].[CustomAPIBase]([Name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[CustomAPIBase]([CustomAPIId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_for_entitykey_Custom API Export Key]
    ON [dbo].[CustomAPIBase]([ComponentState] ASC, [OverwriteTime] ASC, [UniqueName] ASC)
    INCLUDE([CustomAPIId]) WHERE ([ComponentState] IS NOT NULL AND [OverwriteTime] IS NOT NULL AND [UniqueName] IS NOT NULL) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

