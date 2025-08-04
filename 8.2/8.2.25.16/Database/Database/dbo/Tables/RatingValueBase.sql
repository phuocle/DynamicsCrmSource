CREATE TABLE [dbo].[RatingValueBase] (
    [OwnerId]                   UNIQUEIDENTIFIER NOT NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [Name]                      NVARCHAR (100)   NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [StatusCode]                INT              NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedOn]                 DATETIME         NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [Value]                     INT              NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [RatingValueId]             UNIQUEIDENTIFIER NOT NULL,
    [ModifiedOn]                DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [ImportSequenceNumber]      INT              NULL,
    [RatingModel]               UNIQUEIDENTIFIER NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [StateCode]                 INT              NOT NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_RatingValueBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [PK_ratingvalueBase] PRIMARY KEY CLUSTERED ([RatingValueId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_ratingvalue] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_ratingvalue] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [ratingmodel_ratingvalue_RatingModel] FOREIGN KEY ([RatingModel]) REFERENCES [dbo].[RatingModelBase] ([RatingModelId]),
    CONSTRAINT [TransactionCurrency_ratingvalue] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[RatingValueBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[RatingValueBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[RatingValueBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[RatingValueBase]([Name] ASC) WITH (FILLFACTOR = 80);

