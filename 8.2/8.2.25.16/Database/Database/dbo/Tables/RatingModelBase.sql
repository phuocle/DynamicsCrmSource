CREATE TABLE [dbo].[RatingModelBase] (
    [UTCConversionTimeZoneCode] INT              NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [ImportSequenceNumber]      INT              NULL,
    [StateCode]                 INT              NOT NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [RatingModelId]             UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [StatusCode]                INT              NULL,
    [MinRatingValue]            INT              NULL,
    [ModifiedOn]                DATETIME         NULL,
    [MaxRatingValue]            INT              NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [Name]                      NVARCHAR (100)   NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [OwnerId]                   UNIQUEIDENTIFIER NOT NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_RatingModelBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [PK_ratingmodelBase] PRIMARY KEY CLUSTERED ([RatingModelId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_ratingmodel] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_ratingmodel] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [TransactionCurrency_ratingmodel] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[RatingModelBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[RatingModelBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[RatingModelBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[RatingModelBase]([Name] ASC) WITH (FILLFACTOR = 80);

