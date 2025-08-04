CREATE TABLE [dbo].[DiscountTypeBase] (
    [DiscountTypeId]            UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [Name]                      NVARCHAR (100)   NOT NULL,
    [Description]               NVARCHAR (MAX)   NULL,
    [IsAmountType]              BIT              CONSTRAINT [DF_DiscountTypeBase_IsAmountType] DEFAULT ((0)) NULL,
    [StateCode]                 INT              NOT NULL,
    [StatusCode]                INT              NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_DiscountType] PRIMARY KEY CLUSTERED ([DiscountTypeId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [transactioncurrency_discounttype] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]),
    CONSTRAINT [AK1_DiscountTypeBase] UNIQUE NONCLUSTERED ([Name] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[DiscountTypeBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[DiscountTypeBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[DiscountTypeBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[DiscountTypeBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_0F68BDCA85344DCBAB8EDECFCC267EAD]
    ON [dbo].[DiscountTypeBase]([DiscountTypeId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_0F68BDCA85344DCBAB8EDECFCC267EAD]
    ON [dbo].[DiscountTypeBase]([Name] ASC, [DiscountTypeId] ASC)
    INCLUDE([StateCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_0F68BDCA85344DCBAB8EDECFCC267EAD]
    ON [dbo].[DiscountTypeBase]([DiscountTypeId] ASC)
    INCLUDE([Name], [StateCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

