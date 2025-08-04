CREATE TABLE [dbo].[botBase] (
    [botId]                          UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                      DATETIME         NULL,
    [CreatedBy]                      UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                     DATETIME         NULL,
    [ModifiedBy]                     UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]              UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]             UNIQUEIDENTIFIER NULL,
    [OwnerId]                        UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]                    INT              CONSTRAINT [DF_botBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]             UNIQUEIDENTIFIER NULL,
    [statecode]                      INT              NOT NULL,
    [statuscode]                     INT              NULL,
    [VersionNumber]                  ROWVERSION       NULL,
    [ImportSequenceNumber]           INT              NULL,
    [OverriddenCreatedOn]            DATETIME         NULL,
    [TimeZoneRuleVersionNumber]      INT              NULL,
    [UTCConversionTimeZoneCode]      INT              NULL,
    [name]                           NVARCHAR (100)   NULL,
    [OverwriteTime]                  DATETIME         CONSTRAINT [DF_botBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [SolutionId]                     UNIQUEIDENTIFIER CONSTRAINT [DF_botBase_SolutionId] DEFAULT ('fd140aae-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId]           UNIQUEIDENTIFIER NULL,
    [ComponentState]                 INT              CONSTRAINT [DF_botBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [ComponentIdUnique]              UNIQUEIDENTIFIER CONSTRAINT [DF_botBase_ComponentIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [IsManaged]                      BIT              CONSTRAINT [DF_botBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [IsCustomizable]                 BIT              CONSTRAINT [DF_botBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [accesscontrolpolicy]            INT              NULL,
    [applicationmanifestinformation] NVARCHAR (MAX)   NULL,
    [authenticationmode]             INT              NULL,
    [authenticationtrigger]          INT              NULL,
    [authorizedsecuritygroupids]     NVARCHAR (1000)  NULL,
    [iconbase64]                     NVARCHAR (MAX)   NULL,
    [Language]                       INT              NULL,
    [Configuration]                  NVARCHAR (MAX)   NULL,
    [publishedby]                    UNIQUEIDENTIFIER NULL,
    [publishedon]                    DATETIME         NULL,
    [SchemaName]                     NVARCHAR (100)   NULL,
    CONSTRAINT [cndx_PrimaryKey_bot] PRIMARY KEY CLUSTERED ([botId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [business_unit_bot] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_bot] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [systemuser_bot_publishedby] FOREIGN KEY ([publishedby]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]),
    CONSTRAINT [UQ_botBase_ComponentIdUnique] UNIQUE NONCLUSTERED ([ComponentIdUnique] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW)
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[botBase]([OwnerId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_bots]
    ON [dbo].[botBase]([OwningBusinessUnit] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[botBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[botBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[botBase]([name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[botBase]([botId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_for_entitykey_SchemaName]
    ON [dbo].[botBase]([ComponentState] ASC, [OverwriteTime] ASC, [SchemaName] ASC)
    INCLUDE([botId]) WHERE ([ComponentState] IS NOT NULL AND [OverwriteTime] IS NOT NULL AND [SchemaName] IS NOT NULL) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_86C8AA37209F4DD08CB0F56B1EA5A3C1]
    ON [dbo].[botBase]([name] ASC, [botId] ASC)
    INCLUDE([CreatedOn], [statecode], [SchemaName], [OwnerId], [OwnerIdType], [Language], [IsManaged], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_86C8AA37209F4DD08CB0F56B1EA5A3C1]
    ON [dbo].[botBase]([botId] ASC)
    INCLUDE([name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_86C8AA37209F4DD08CB0F56B1EA5A3C1]
    ON [dbo].[botBase]([botId] ASC)
    INCLUDE([name], [CreatedOn], [statecode], [SchemaName], [OwnerId], [OwnerIdType], [Language], [IsManaged], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

