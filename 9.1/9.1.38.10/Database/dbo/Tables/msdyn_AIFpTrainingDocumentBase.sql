CREATE TABLE [dbo].[msdyn_AIFpTrainingDocumentBase] (
    [msdyn_AIFpTrainingDocumentId] UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                    DATETIME         NULL,
    [CreatedBy]                    UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                   DATETIME         NULL,
    [ModifiedBy]                   UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]            UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]           UNIQUEIDENTIFIER NULL,
    [OwnerId]                      UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]                  INT              CONSTRAINT [DF_msdyn_AIFpTrainingDocumentBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]           UNIQUEIDENTIFIER NULL,
    [statecode]                    INT              NOT NULL,
    [statuscode]                   INT              NULL,
    [VersionNumber]                ROWVERSION       NULL,
    [ImportSequenceNumber]         INT              NULL,
    [OverriddenCreatedOn]          DATETIME         NULL,
    [TimeZoneRuleVersionNumber]    INT              NULL,
    [UTCConversionTimeZoneCode]    INT              NULL,
    [msdyn_name]                   NVARCHAR (100)   NULL,
    [msdyn_AIConfigurationId]      UNIQUEIDENTIFIER NULL,
    [msdyn_Checksum]               NVARCHAR (100)   NULL,
    [msdyn_Metadata]               NVARCHAR (MAX)   NULL,
    [msdyn_SourceType]             NVARCHAR (100)   NULL,
    CONSTRAINT [PK_msdyn_AIFpTrainingDocumentBase] PRIMARY KEY CLUSTERED ([msdyn_AIFpTrainingDocumentId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [business_unit_msdyn_aifptrainingdocument] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [msdyn_msdyn_aiconfiguration_msdyn_aifptrainingdocument_AIConfigurationId] FOREIGN KEY ([msdyn_AIConfigurationId]) REFERENCES [dbo].[msdyn_AIConfigurationBaseIds] ([msdyn_AIConfigurationId]),
    CONSTRAINT [owner_msdyn_aifptrainingdocument] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[msdyn_AIFpTrainingDocumentBase]([OwnerId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_msdyn_AIFpTrainingDocuments]
    ON [dbo].[msdyn_AIFpTrainingDocumentBase]([OwningBusinessUnit] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[msdyn_AIFpTrainingDocumentBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[msdyn_AIFpTrainingDocumentBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_msdyn_name]
    ON [dbo].[msdyn_AIFpTrainingDocumentBase]([msdyn_name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_for_entitykey_msdyn_Checksum_key]
    ON [dbo].[msdyn_AIFpTrainingDocumentBase]([msdyn_AIConfigurationId] ASC, [msdyn_Checksum] ASC)
    INCLUDE([msdyn_AIFpTrainingDocumentId]) WHERE ([msdyn_AIConfigurationId] IS NOT NULL AND [msdyn_Checksum] IS NOT NULL) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_72BD0DF3810543E18AE0C0BE6F81B095]
    ON [dbo].[msdyn_AIFpTrainingDocumentBase]([msdyn_AIFpTrainingDocumentId] ASC)
    INCLUDE([msdyn_name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_72BD0DF3810543E18AE0C0BE6F81B095]
    ON [dbo].[msdyn_AIFpTrainingDocumentBase]([msdyn_name] ASC, [msdyn_AIFpTrainingDocumentId] ASC)
    INCLUDE([CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_72BD0DF3810543E18AE0C0BE6F81B095]
    ON [dbo].[msdyn_AIFpTrainingDocumentBase]([msdyn_AIFpTrainingDocumentId] ASC)
    INCLUDE([msdyn_name], [CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

