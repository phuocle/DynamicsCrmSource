CREATE TABLE [dbo].[UserMappingBase] (
    [ModifiedOn]                DATETIME         NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [ClaimType]                 NVARCHAR (160)   NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [SystemUserAttributeName]   NVARCHAR (160)   NULL,
    [CreatedOn]                 DATETIME         NULL,
    [PartnerApplicationType]    INT              CONSTRAINT [DF_UserMappingBase_PartnerApplicationType] DEFAULT ((0)) NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [UserMappingId]             UNIQUEIDENTIFIER NOT NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    CONSTRAINT [PK_UserMappingBase] PRIMARY KEY CLUSTERED ([UserMappingId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [TransactionCurrency_UserMapping] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
ALTER TABLE [dbo].[UserMappingBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[UserMappingBase]([OrganizationId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[UserMappingBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);

