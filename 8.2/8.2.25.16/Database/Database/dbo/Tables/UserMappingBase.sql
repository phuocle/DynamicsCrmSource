CREATE TABLE [dbo].[UserMappingBase] (
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [UserMappingId]             UNIQUEIDENTIFIER NOT NULL,
    [PartnerApplicationType]    INT              CONSTRAINT [DF_UserMappingBase_PartnerApplicationType] DEFAULT ((0)) NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [SystemUserAttributeName]   NVARCHAR (160)   NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [CreatedOn]                 DATETIME         NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ClaimType]                 NVARCHAR (160)   NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    CONSTRAINT [PK_UserMappingBase] PRIMARY KEY CLUSTERED ([UserMappingId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [TransactionCurrency_UserMapping] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[UserMappingBase]([OrganizationId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[UserMappingBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);

