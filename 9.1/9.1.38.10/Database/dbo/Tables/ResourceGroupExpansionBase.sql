CREATE TABLE [dbo].[ResourceGroupExpansionBase] (
    [ResourceGroupExpansionId]  UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [Name]                      NVARCHAR (100)   NULL,
    [ItemId]                    UNIQUEIDENTIFIER NOT NULL,
    [MethodCode]                INT              NOT NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ObjectId]                  UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_ResourceGroupExpansion] PRIMARY KEY CLUSTERED ([ResourceGroupExpansionId] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[ResourceGroupExpansionBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_ObjectIdMethodCode_ResourceGroupExpansion]
    ON [dbo].[ResourceGroupExpansionBase]([ObjectId] ASC, [MethodCode] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_ItemIdMethodCode_ResourceGroupExpansion]
    ON [dbo].[ResourceGroupExpansionBase]([ItemId] ASC, [MethodCode] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);

