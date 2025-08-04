CREATE TABLE [dbo].[ExternalPartyBase] (
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [ExternalPartyIdUnique]     UNIQUEIDENTIFIER CONSTRAINT [DF_ExternalPartyBase_ExternalPartyIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [ExternalPartyId]           UNIQUEIDENTIFIER NOT NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [StateCode]                 INT              NOT NULL,
    [CorrelationKey]            NVARCHAR (50)    NULL,
    [ModifiedOn]                DATETIME         NULL,
    [OwnerId]                   UNIQUEIDENTIFIER NOT NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [ImportSequenceNumber]      INT              NULL,
    [FullName]                  NVARCHAR (300)   NULL,
    [LastEnabledOn]             DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [LastName]                  NVARCHAR (100)   NULL,
    [MiddleName]                NVARCHAR (50)    NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [CreatedOn]                 DATETIME         NULL,
    [LastDisabledOn]            DATETIME         NULL,
    [StatusCode]                INT              NULL,
    [FirstName]                 NVARCHAR (100)   NULL,
    [EmailAddress]              NVARCHAR (100)   NULL,
    [Type]                      NVARCHAR (300)   NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_ExternalPartyBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [YomiFirstName]             NVARCHAR (150)   NULL,
    [YomiLastName]              NVARCHAR (150)   NULL,
    [YomiFullName]              NVARCHAR (450)   NULL,
    [YomiMiddleName]            NVARCHAR (150)   NULL,
    CONSTRAINT [cndx_PrimaryKey_ExternalParty] PRIMARY KEY CLUSTERED ([ExternalPartyId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_externalparty] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_externalparty] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [TransactionCurrency_ExternalParty] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
ALTER TABLE [dbo].[ExternalPartyBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[ExternalPartyBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ExternalPartyBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[ExternalPartyBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_middlename]
    ON [dbo].[ExternalPartyBase]([MiddleName] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_LastName]
    ON [dbo].[ExternalPartyBase]([LastName] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_FullName]
    ON [dbo].[ExternalPartyBase]([FullName] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_FirstName]
    ON [dbo].[ExternalPartyBase]([FirstName] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_536F1BDFB3BD4784B3EDCD380810E501]
    ON [dbo].[ExternalPartyBase]([ExternalPartyId] ASC)
    INCLUDE([FullName], [EmailAddress], [StateCode], [LastEnabledOn], [LastDisabledOn], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_536F1BDFB3BD4784B3EDCD380810E501]
    ON [dbo].[ExternalPartyBase]([ExternalPartyId] ASC)
    INCLUDE([FullName]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_536F1BDFB3BD4784B3EDCD380810E501]
    ON [dbo].[ExternalPartyBase]([FullName] ASC, [ExternalPartyId] ASC)
    INCLUDE([EmailAddress], [StateCode], [LastEnabledOn], [LastDisabledOn], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

