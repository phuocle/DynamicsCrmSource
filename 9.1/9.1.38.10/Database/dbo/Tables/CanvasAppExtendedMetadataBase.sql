CREATE TABLE [dbo].[CanvasAppExtendedMetadataBase] (
    [CanvasAppExtendedMetadataId] UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                   DATETIME         NULL,
    [CreatedBy]                   UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                  DATETIME         NULL,
    [ModifiedBy]                  UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]           UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]          UNIQUEIDENTIFIER NULL,
    [OwnerId]                     UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]                 INT              CONSTRAINT [DF_CanvasAppExtendedMetadataBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]          UNIQUEIDENTIFIER NULL,
    [statecode]                   INT              NOT NULL,
    [statuscode]                  INT              NULL,
    [VersionNumber]               ROWVERSION       NULL,
    [ImportSequenceNumber]        INT              NULL,
    [OverriddenCreatedOn]         DATETIME         NULL,
    [TimeZoneRuleVersionNumber]   INT              NULL,
    [UTCConversionTimeZoneCode]   INT              NULL,
    [Name]                        NVARCHAR (450)   NULL,
    [CanvasAppId]                 UNIQUEIDENTIFIER NULL,
    [CanvasAppUniqueId]           NVARCHAR (100)   NULL,
    [OwningBusinessUnitIdType]    INT              NULL,
    [OwningBusinessUnitName]      NVARCHAR (4000)  NULL,
    [OwningBusinessUnitYomiName]  NVARCHAR (4000)  NULL,
    CONSTRAINT [PK_CanvasAppExtendedMetadataBase] PRIMARY KEY CLUSTERED ([CanvasAppExtendedMetadataId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [business_unit_canvasappextendedmetadata] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_canvasappextendedmetadata] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[CanvasAppExtendedMetadataBase]([OwnerId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_CanvasAppExtendedMetadatas]
    ON [dbo].[CanvasAppExtendedMetadataBase]([OwningBusinessUnit] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[CanvasAppExtendedMetadataBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[CanvasAppExtendedMetadataBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Name]
    ON [dbo].[CanvasAppExtendedMetadataBase]([Name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_canvasappextendedmetadata]
    ON [dbo].[CanvasAppExtendedMetadataBase]([CanvasAppId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_D66B2D1061F64C09BD9DDD318A69599F]
    ON [dbo].[CanvasAppExtendedMetadataBase]([CanvasAppExtendedMetadataId] ASC)
    INCLUDE([Name], [CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_D66B2D1061F64C09BD9DDD318A69599F]
    ON [dbo].[CanvasAppExtendedMetadataBase]([Name] ASC, [CanvasAppExtendedMetadataId] ASC)
    INCLUDE([CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_D66B2D1061F64C09BD9DDD318A69599F]
    ON [dbo].[CanvasAppExtendedMetadataBase]([CanvasAppExtendedMetadataId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

