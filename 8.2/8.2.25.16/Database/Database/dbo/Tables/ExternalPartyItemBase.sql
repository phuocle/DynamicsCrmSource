CREATE TABLE [dbo].[ExternalPartyItemBase] (
    [LastEnabledOn]             DATETIME         NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [ChannelAccessProfileId]    UNIQUEIDENTIFIER NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [StateCode]                 INT              NOT NULL,
    [ExternalPartyItemId]       UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [RegardingObjectId]         UNIQUEIDENTIFIER NULL,
    [ImportSequenceNumber]      INT              NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [StatusCode]                INT              NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [ExternalPartyId]           UNIQUEIDENTIFIER NULL,
    [IntroducedVersion]         NVARCHAR (48)    NULL,
    [ModifiedOn]                DATETIME         NULL,
    [Name]                      NVARCHAR (300)   NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [LastDisabledOn]            DATETIME         NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [RegardingObjectIdYomiName] NVARCHAR (4000)  NULL,
    [RegardingObjectTypeCode]   INT              NULL,
    [RegardingObjectIdName]     NVARCHAR (4000)  NULL,
    CONSTRAINT [cndx_PrimaryKey_ExternalPartyItem] PRIMARY KEY CLUSTERED ([ExternalPartyItemId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ExternalPartyItemBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Name]
    ON [dbo].[ExternalPartyItemBase]([Name] ASC) WITH (FILLFACTOR = 80);

