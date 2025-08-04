CREATE TABLE [dbo].[connectionreferenceBase] (
    [connectionreferenceId]          UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                      DATETIME         NULL,
    [CreatedBy]                      UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                     DATETIME         NULL,
    [ModifiedBy]                     UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]              UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]             UNIQUEIDENTIFIER NULL,
    [OwnerId]                        UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]                    INT              CONSTRAINT [DF_connectionreferenceBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]             UNIQUEIDENTIFIER NULL,
    [statecode]                      INT              NOT NULL,
    [statuscode]                     INT              NULL,
    [VersionNumber]                  ROWVERSION       NULL,
    [ImportSequenceNumber]           INT              NULL,
    [OverriddenCreatedOn]            DATETIME         NULL,
    [TimeZoneRuleVersionNumber]      INT              NULL,
    [UTCConversionTimeZoneCode]      INT              NULL,
    [connectionreferencedisplayname] NVARCHAR (200)   NULL,
    [OverwriteTime]                  DATETIME         CONSTRAINT [DF_connectionreferenceBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [SolutionId]                     UNIQUEIDENTIFIER CONSTRAINT [DF_connectionreferenceBase_SolutionId] DEFAULT ('fd140aae-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId]           UNIQUEIDENTIFIER NULL,
    [ComponentState]                 INT              CONSTRAINT [DF_connectionreferenceBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [ComponentIdUnique]              UNIQUEIDENTIFIER CONSTRAINT [DF_connectionreferenceBase_ComponentIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [IsManaged]                      BIT              CONSTRAINT [DF_connectionreferenceBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [IsCustomizable]                 BIT              CONSTRAINT [DF_connectionreferenceBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [ConnectionId]                   NVARCHAR (1000)  NULL,
    [ConnectionReferenceLogicalName] NVARCHAR (200)   NULL,
    [ConnectorId]                    NVARCHAR (1000)  NULL,
    [CustomConnectorId]              UNIQUEIDENTIFIER NULL,
    [Description]                    NVARCHAR (2000)  NULL,
    CONSTRAINT [cndx_PrimaryKey_connectionreference] PRIMARY KEY CLUSTERED ([connectionreferenceId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [business_unit_connectionreference] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [connector_connectionreference] FOREIGN KEY ([CustomConnectorId]) REFERENCES [dbo].[ConnectorBaseIds] ([connectorId]),
    CONSTRAINT [owner_connectionreference] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [UQ_connectionreferenceBase_ComponentIdUnique] UNIQUE NONCLUSTERED ([ComponentIdUnique] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW)
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[connectionreferenceBase]([OwnerId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_connectionreferences]
    ON [dbo].[connectionreferenceBase]([OwningBusinessUnit] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[connectionreferenceBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[connectionreferenceBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_connectionreferencedisplayname]
    ON [dbo].[connectionreferenceBase]([connectionreferencedisplayname] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[connectionreferenceBase]([connectionreferenceId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_for_entitykey_ConnectionReferenceLogicalNameKey]
    ON [dbo].[connectionreferenceBase]([ComponentState] ASC, [ConnectionReferenceLogicalName] ASC, [OverwriteTime] ASC)
    INCLUDE([connectionreferenceId]) WHERE ([ComponentState] IS NOT NULL AND [ConnectionReferenceLogicalName] IS NOT NULL AND [OverwriteTime] IS NOT NULL) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_6F101C427704454089D8D3A8F8FFEC17]
    ON [dbo].[connectionreferenceBase]([connectionreferencedisplayname] ASC, [connectionreferenceId] ASC)
    INCLUDE([CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_6F101C427704454089D8D3A8F8FFEC17]
    ON [dbo].[connectionreferenceBase]([connectionreferenceId] ASC)
    INCLUDE([connectionreferencedisplayname]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_6F101C427704454089D8D3A8F8FFEC17]
    ON [dbo].[connectionreferenceBase]([connectionreferenceId] ASC)
    INCLUDE([connectionreferencedisplayname], [CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

