CREATE TABLE [dbo].[ExternalPartyItemBase] (
    [ModifiedOn]                DATETIME         NULL,
    [IntroducedVersion]         NVARCHAR (48)    NULL,
    [ExternalPartyItemId]       UNIQUEIDENTIFIER NOT NULL,
    [RegardingObjectId]         UNIQUEIDENTIFIER NULL,
    [Name]                      NVARCHAR (300)   NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [StatusCode]                INT              NULL,
    [StateCode]                 INT              NOT NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [ExternalPartyId]           UNIQUEIDENTIFIER NULL,
    [LastEnabledOn]             DATETIME         NULL,
    [LastDisabledOn]            DATETIME         NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [ChannelAccessProfileId]    UNIQUEIDENTIFIER NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [CreatedOn]                 DATETIME         NULL,
    [RegardingObjectIdName]     NVARCHAR (4000)  NULL,
    [RegardingObjectIdYomiName] NVARCHAR (4000)  NULL,
    [RegardingObjectTypeCode]   INT              NULL,
    CONSTRAINT [cndx_PrimaryKey_ExternalPartyItem] PRIMARY KEY CLUSTERED ([ExternalPartyItemId] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[ExternalPartyItemBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ExternalPartyItemBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Name]
    ON [dbo].[ExternalPartyItemBase]([Name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_15CC583DE1D84829909BE450B18761FA]
    ON [dbo].[ExternalPartyItemBase]([ExternalPartyItemId] ASC)
    INCLUDE([ExternalPartyId], [RegardingObjectId], [RegardingObjectIdName], [RegardingObjectIdYomiName], [RegardingObjectTypeCode], [ChannelAccessProfileId], [StateCode], [LastDisabledOn], [LastEnabledOn], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_15CC583DE1D84829909BE450B18761FA]
    ON [dbo].[ExternalPartyItemBase]([ExternalPartyItemId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

