CREATE TABLE [dbo].[DiscountTypeBase] (
    [DiscountTypeId]        UNIQUEIDENTIFIER NOT NULL,
    [OrganizationId]        UNIQUEIDENTIFIER NOT NULL,
    [Name]                  NVARCHAR (100)   NOT NULL,
    [Description]           NVARCHAR (MAX)   NULL,
    [IsAmountType]          BIT              CONSTRAINT [Set_To_Zero111] DEFAULT ((0)) NULL,
    [StateCode]             INT              NOT NULL,
    [CreatedOn]             DATETIME         NULL,
    [CreatedBy]             UNIQUEIDENTIFIER NULL,
    [ModifiedBy]            UNIQUEIDENTIFIER NULL,
    [ModifiedOn]            DATETIME         NULL,
    [VersionNumber]         ROWVERSION       NULL,
    [StatusCode]            INT              NULL,
    [OverriddenCreatedOn]   DATETIME         NULL,
    [TransactionCurrencyId] UNIQUEIDENTIFIER NULL,
    [ImportSequenceNumber]  INT              NULL,
    [CreatedOnBehalfBy]     UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]    UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_DiscountType] PRIMARY KEY CLUSTERED ([DiscountTypeId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [transactioncurrency_discounttype] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]) NOT FOR REPLICATION,
    CONSTRAINT [AK1_DiscountTypeBase] UNIQUE NONCLUSTERED ([Name] ASC)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[DiscountTypeBase]', @OptionName = N'text in row', @OptionValue = N'7000';


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[DiscountTypeBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[DiscountTypeBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);

