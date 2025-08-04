CREATE TABLE [dbo].[ResourceGroupExpansionBase] (
    [ObjectId]                 UNIQUEIDENTIFIER NOT NULL,
    [ResourceGroupExpansionId] UNIQUEIDENTIFIER NOT NULL,
    [ModifiedOn]               DATETIME         NULL,
    [ItemId]                   UNIQUEIDENTIFIER NOT NULL,
    [MethodCode]               INT              NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_ResourceGroupExpansion] PRIMARY KEY CLUSTERED ([ResourceGroupExpansionId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE NONCLUSTERED INDEX [ndx_ItemIdMethodCode_ResourceGroupExpansion]
    ON [dbo].[ResourceGroupExpansionBase]([ItemId] ASC, [MethodCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_ObjectIdMethodCode_ResourceGroupExpansion]
    ON [dbo].[ResourceGroupExpansionBase]([ObjectId] ASC, [MethodCode] ASC) WITH (FILLFACTOR = 80);

