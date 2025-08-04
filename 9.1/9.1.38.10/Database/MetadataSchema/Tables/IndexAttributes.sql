CREATE TABLE [MetadataSchema].[IndexAttributes] (
    [IndexAttributeId]   UNIQUEIDENTIFIER NOT NULL,
    [AttributeId]        UNIQUEIDENTIFIER NULL,
    [IndexId]            UNIQUEIDENTIFIER NULL,
    [IndexOrder]         INT              NULL,
    [IsIncludeAttribute] BIT              DEFAULT ((0)) NOT NULL,
    [SortDescending]     BIT              DEFAULT ((0)) NOT NULL,
    [CreatedOn]          DATETIME         NULL,
    [ModifiedOn]         DATETIME         NULL,
    [State]              INT              CONSTRAINT [DF_IndexAttributes_State] DEFAULT ((0)) NOT NULL,
    [IsSystemManaged]    BIT              CONSTRAINT [DF_IndexAttributes_SystemManaged] DEFAULT ((0)) NOT NULL,
    [IsQuickFindManaged] BIT              CONSTRAINT [DF_IndexAttributes_QuickFindManaged] DEFAULT ((0)) NOT NULL,
    PRIMARY KEY CLUSTERED ([IndexAttributeId] ASC),
    CONSTRAINT [indexattributes_attribute] FOREIGN KEY ([AttributeId]) REFERENCES [dbo].[AttributeIds] ([AttributeId]),
    CONSTRAINT [indexattributes_entityindex] FOREIGN KEY ([IndexId]) REFERENCES [MetadataSchema].[EntityIndex] ([IndexId]),
    CONSTRAINT [UQ_IndexIdAttributeId] UNIQUE NONCLUSTERED ([IndexId] ASC, [AttributeId] ASC)
);


GO
ALTER TABLE [MetadataSchema].[IndexAttributes] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_AttributeId]
    ON [MetadataSchema].[IndexAttributes]([AttributeId] ASC);


GO
CREATE NONCLUSTERED INDEX [ndx_IndexAttributes_ModifiedOn]
    ON [MetadataSchema].[IndexAttributes]([ModifiedOn] ASC);

