CREATE TABLE [dbo].[conversationtranscriptBase] (
    [conversationtranscriptId]     UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                    DATETIME         NULL,
    [CreatedBy]                    UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                   DATETIME         NULL,
    [ModifiedBy]                   UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]            UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]           UNIQUEIDENTIFIER NULL,
    [OwnerId]                      UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]                  INT              CONSTRAINT [DF_conversationtranscriptBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]           UNIQUEIDENTIFIER NULL,
    [statecode]                    INT              NOT NULL,
    [statuscode]                   INT              NULL,
    [VersionNumber]                ROWVERSION       NULL,
    [ImportSequenceNumber]         INT              NULL,
    [OverriddenCreatedOn]          DATETIME         NULL,
    [TimeZoneRuleVersionNumber]    INT              NULL,
    [UTCConversionTimeZoneCode]    INT              NULL,
    [name]                         NVARCHAR (100)   NULL,
    [Content]                      NVARCHAR (MAX)   NULL,
    [ConversationStartTime]        DATETIME         NULL,
    [metadata]                     NVARCHAR (MAX)   NULL,
    [SchemaType]                   NVARCHAR (100)   NULL,
    [SchemaVersion]                NVARCHAR (100)   NULL,
    [bot_conversationtranscriptId] UNIQUEIDENTIFIER NULL,
    CONSTRAINT [PK_conversationtranscriptBase] PRIMARY KEY CLUSTERED ([conversationtranscriptId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [bot_conversationtranscript] FOREIGN KEY ([bot_conversationtranscriptId]) REFERENCES [dbo].[botBaseIds] ([botId]),
    CONSTRAINT [business_unit_conversationtranscript] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_conversationtranscript] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[conversationtranscriptBase]([OwnerId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_conversationtranscripts]
    ON [dbo].[conversationtranscriptBase]([OwningBusinessUnit] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[conversationtranscriptBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[conversationtranscriptBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[conversationtranscriptBase]([name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_699205BC78E242868F961FE182CD9CF2]
    ON [dbo].[conversationtranscriptBase]([name] ASC, [conversationtranscriptId] ASC)
    INCLUDE([CreatedOn], [SchemaType], [OwnerId], [OwnerIdType], [ConversationStartTime], [SchemaVersion], [Content], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_699205BC78E242868F961FE182CD9CF2]
    ON [dbo].[conversationtranscriptBase]([conversationtranscriptId] ASC)
    INCLUDE([name], [CreatedOn], [SchemaType], [OwnerId], [OwnerIdType], [ConversationStartTime], [SchemaVersion], [Content], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_699205BC78E242868F961FE182CD9CF2]
    ON [dbo].[conversationtranscriptBase]([conversationtranscriptId] ASC)
    INCLUDE([name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

