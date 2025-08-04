CREATE TABLE [dbo].[msdyn_AIOdTrainingImageBase] (
    [msdyn_AIOdTrainingImageId] UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [OwnerId]                   UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_msdyn_AIOdTrainingImageBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [statecode]                 INT              NOT NULL,
    [statuscode]                INT              NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [msdyn_name]                NVARCHAR (100)   NULL,
    [msdyn_AIConfigurationId]   UNIQUEIDENTIFIER NULL,
    [msdyn_AIOdImageId]         UNIQUEIDENTIFIER NULL,
    [msdyn_LastModifiedDate]    DATETIME         NULL,
    [msdyn_SourceType]          NVARCHAR (100)   NULL,
    CONSTRAINT [PK_msdyn_AIOdTrainingImageBase] PRIMARY KEY CLUSTERED ([msdyn_AIOdTrainingImageId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [business_unit_msdyn_aiodtrainingimage] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [msdyn_aiconfiguration_msdyn_aiodtrainingimage] FOREIGN KEY ([msdyn_AIConfigurationId]) REFERENCES [dbo].[msdyn_AIConfigurationBaseIds] ([msdyn_AIConfigurationId]),
    CONSTRAINT [msdyn_aiodimage_msdyn_aiodtrainingimage] FOREIGN KEY ([msdyn_AIOdImageId]) REFERENCES [dbo].[msdyn_AIOdImageBase] ([msdyn_AIOdImageId]),
    CONSTRAINT [owner_msdyn_aiodtrainingimage] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[msdyn_AIOdTrainingImageBase]([OwnerId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_msdyn_AIOdTrainingImages]
    ON [dbo].[msdyn_AIOdTrainingImageBase]([OwningBusinessUnit] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[msdyn_AIOdTrainingImageBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[msdyn_AIOdTrainingImageBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_msdyn_name]
    ON [dbo].[msdyn_AIOdTrainingImageBase]([msdyn_name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_for_entitykey_msdyn_UniqueConfigImage]
    ON [dbo].[msdyn_AIOdTrainingImageBase]([msdyn_AIConfigurationId] ASC, [msdyn_AIOdImageId] ASC)
    INCLUDE([msdyn_AIOdTrainingImageId]) WHERE ([msdyn_AIConfigurationId] IS NOT NULL AND [msdyn_AIOdImageId] IS NOT NULL) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_DB4C2C6B7D9347109524D77D61C668D9]
    ON [dbo].[msdyn_AIOdTrainingImageBase]([msdyn_name] ASC, [msdyn_AIOdTrainingImageId] ASC)
    INCLUDE([CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_DB4C2C6B7D9347109524D77D61C668D9]
    ON [dbo].[msdyn_AIOdTrainingImageBase]([msdyn_AIOdTrainingImageId] ASC)
    INCLUDE([msdyn_name], [CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_DB4C2C6B7D9347109524D77D61C668D9]
    ON [dbo].[msdyn_AIOdTrainingImageBase]([msdyn_AIOdTrainingImageId] ASC)
    INCLUDE([msdyn_name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

