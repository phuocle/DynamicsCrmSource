CREATE TABLE [dbo].[msdyn_AIOdLabelBase] (
    [msdyn_AIOdLabelId]                UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                        DATETIME         NULL,
    [CreatedBy]                        UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                       DATETIME         NULL,
    [ModifiedBy]                       UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]                UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]               UNIQUEIDENTIFIER NULL,
    [OwnerId]                          UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]                      INT              CONSTRAINT [DF_msdyn_AIOdLabelBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]               UNIQUEIDENTIFIER NULL,
    [statecode]                        INT              NOT NULL,
    [statuscode]                       INT              NULL,
    [VersionNumber]                    ROWVERSION       NULL,
    [ImportSequenceNumber]             INT              NULL,
    [OverriddenCreatedOn]              DATETIME         NULL,
    [TimeZoneRuleVersionNumber]        INT              NULL,
    [UTCConversionTimeZoneCode]        INT              NULL,
    [msdyn_name]                       NVARCHAR (100)   NULL,
    [msdyn_LabelString]                NVARCHAR (100)   NULL,
    [msdyn_SourceAttributeLogicalName] NVARCHAR (128)   NULL,
    [msdyn_SourceEntitySetName]        NVARCHAR (128)   NULL,
    [msdyn_SourceRecordId]             NVARCHAR (100)   NULL,
    CONSTRAINT [PK_msdyn_AIOdLabelBase] PRIMARY KEY CLUSTERED ([msdyn_AIOdLabelId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [business_unit_msdyn_aiodlabel] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_msdyn_aiodlabel] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[msdyn_AIOdLabelBase]([OwnerId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_msdyn_AIOdLabels]
    ON [dbo].[msdyn_AIOdLabelBase]([OwningBusinessUnit] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[msdyn_AIOdLabelBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[msdyn_AIOdLabelBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_msdyn_name]
    ON [dbo].[msdyn_AIOdLabelBase]([msdyn_name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_for_entitykey_msdyn_AIOdLabelSource]
    ON [dbo].[msdyn_AIOdLabelBase]([msdyn_SourceAttributeLogicalName] ASC, [msdyn_SourceEntitySetName] ASC, [msdyn_SourceRecordId] ASC)
    INCLUDE([msdyn_AIOdLabelId]) WHERE ([msdyn_SourceAttributeLogicalName] IS NOT NULL AND [msdyn_SourceEntitySetName] IS NOT NULL AND [msdyn_SourceRecordId] IS NOT NULL) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_0ADD4AA0520D48689E123C23BCD2B2FE]
    ON [dbo].[msdyn_AIOdLabelBase]([msdyn_AIOdLabelId] ASC)
    INCLUDE([msdyn_name], [CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_0ADD4AA0520D48689E123C23BCD2B2FE]
    ON [dbo].[msdyn_AIOdLabelBase]([msdyn_name] ASC, [msdyn_AIOdLabelId] ASC)
    INCLUDE([CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_0ADD4AA0520D48689E123C23BCD2B2FE]
    ON [dbo].[msdyn_AIOdLabelBase]([msdyn_AIOdLabelId] ASC)
    INCLUDE([msdyn_name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

