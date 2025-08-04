CREATE TABLE [dbo].[CompetitorProduct] (
    [CompetitorProductId]       UNIQUEIDENTIFIER CONSTRAINT [DF_CompetitorProduct_CompetitorProductId] DEFAULT (newid()) NOT NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [Name]                      NVARCHAR (100)   NULL,
    [CompetitorId]              UNIQUEIDENTIFIER NOT NULL,
    [ProductId]                 UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_CompetitorProduct] PRIMARY KEY CLUSTERED ([CompetitorProductId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [competitor_products] FOREIGN KEY ([CompetitorId]) REFERENCES [dbo].[CompetitorBase] ([CompetitorId]),
    CONSTRAINT [product_competitors] FOREIGN KEY ([ProductId]) REFERENCES [dbo].[ProductBase] ([ProductId]),
    CONSTRAINT [UQ_CompetitorProduct] UNIQUE NONCLUSTERED ([CompetitorId] ASC, [ProductId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW)
);


GO
ALTER TABLE [dbo].[CompetitorProduct] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[CompetitorProduct]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_product_competitors]
    ON [dbo].[CompetitorProduct]([ProductId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);

