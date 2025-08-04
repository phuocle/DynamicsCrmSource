CREATE TABLE [dbo].[ExternalPartyBase] (
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [StatusCode]                INT              NULL,
    [CreatedOn]                 DATETIME         NULL,
    [LastEnabledOn]             DATETIME         NULL,
    [Type]                      NVARCHAR (300)   NULL,
    [StateCode]                 INT              NOT NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [FirstName]                 NVARCHAR (100)   NULL,
    [LastName]                  NVARCHAR (100)   NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [LastDisabledOn]            DATETIME         NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [OwnerId]                   UNIQUEIDENTIFIER NOT NULL,
    [ImportSequenceNumber]      INT              NULL,
    [CorrelationKey]            NVARCHAR (50)    NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [MiddleName]                NVARCHAR (50)    NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [FullName]                  NVARCHAR (300)   NULL,
    [ExternalPartyIdUnique]     UNIQUEIDENTIFIER CONSTRAINT [DF_ExternalPartyBase_ExternalPartyIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [EmailAddress]              NVARCHAR (100)   NULL,
    [ModifiedOn]                DATETIME         NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ExternalPartyId]           UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_ExternalPartyBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [YomiLastName]              NVARCHAR (150)   NULL,
    [YomiFullName]              NVARCHAR (450)   NULL,
    [YomiMiddleName]            NVARCHAR (150)   NULL,
    [YomiFirstName]             NVARCHAR (150)   NULL,
    CONSTRAINT [cndx_PrimaryKey_ExternalParty] PRIMARY KEY CLUSTERED ([ExternalPartyId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_externalparty] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_externalparty] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [TransactionCurrency_ExternalParty] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


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
CREATE NONCLUSTERED INDEX [ndx_FirstName]
    ON [dbo].[ExternalPartyBase]([FirstName] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_LastName]
    ON [dbo].[ExternalPartyBase]([LastName] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_FullName]
    ON [dbo].[ExternalPartyBase]([FullName] ASC) WITH (FILLFACTOR = 80);

