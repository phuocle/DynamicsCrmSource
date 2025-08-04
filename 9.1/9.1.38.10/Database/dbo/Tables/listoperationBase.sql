CREATE TABLE [dbo].[listoperationBase] (
    [listoperationId]           UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [OwnerId]                   UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_listoperationBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [statecode]                 INT              NOT NULL,
    [statuscode]                INT              NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [ListOperationPrimaryName]  NVARCHAR (256)   NULL,
    [BatchInput]                NVARCHAR (MAX)   NULL,
    [ErrorCode]                 INT              NULL,
    [ErrorDescription]          NVARCHAR (4000)  NULL,
    [Input]                     NVARCHAR (MAX)   NULL,
    [ListId]                    UNIQUEIDENTIFIER NULL,
    [ListOperationName]         NVARCHAR (256)   NULL,
    [Log]                       NVARCHAR (MAX)   NULL,
    [Type]                      INT              NULL,
    [Processed]                 INT              NULL,
    [Added]                     INT              NULL,
    CONSTRAINT [PK_listoperationBase] PRIMARY KEY CLUSTERED ([listoperationId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [business_unit_listoperation] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [list_listoperation_ListId] FOREIGN KEY ([ListId]) REFERENCES [dbo].[ListBase] ([ListId]),
    CONSTRAINT [owner_listoperation] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[listoperationBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_D36474C198E447D7A55A0D47142E251B]
    ON [dbo].[listoperationBase]([ListOperationName] ASC, [listoperationId] ASC)
    INCLUDE([CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_D36474C198E447D7A55A0D47142E251B]
    ON [dbo].[listoperationBase]([listoperationId] ASC)
    INCLUDE([ListOperationName], [CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_D36474C198E447D7A55A0D47142E251B]
    ON [dbo].[listoperationBase]([listoperationId] ASC)
    INCLUDE([ListOperationName]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_ListOperationName]
    ON [dbo].[listoperationBase]([ListOperationName] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

