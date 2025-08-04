CREATE TABLE [MetadataSchema].[EntityKeyAttribute] (
    [EntityKeyAttributeId]    UNIQUEIDENTIFIER NOT NULL,
    [EntityKeyId]             UNIQUEIDENTIFIER NOT NULL,
    [AttributeId]             UNIQUEIDENTIFIER NOT NULL,
    [IndexOrder]              INT              NOT NULL,
    [EntityKeyAttributeRowId] UNIQUEIDENTIFIER DEFAULT (newid()) NOT NULL,
    [ComponentState]          TINYINT          DEFAULT ((0)) NOT NULL,
    [SolutionId]              UNIQUEIDENTIFIER DEFAULT ('fd140aae-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [OverwriteTime]           DATETIME         DEFAULT ((0)) NOT NULL,
    [SupportingSolutionId]    UNIQUEIDENTIFIER DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [IsManaged]               BIT              DEFAULT ((0)) NOT NULL,
    [VersionNumber]           ROWVERSION       NOT NULL,
    CONSTRAINT [XPKEntityKeyAttribute] PRIMARY KEY CLUSTERED ([EntityKeyAttributeId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC),
    CONSTRAINT [entitykeyattribute_attribute] FOREIGN KEY ([AttributeId]) REFERENCES [dbo].[AttributeIds] ([AttributeId]),
    CONSTRAINT [entitykeyattribute_entitykey] FOREIGN KEY ([EntityKeyId]) REFERENCES [dbo].[EntityKeyIds] ([EntityKeyId])
);


GO
ALTER TABLE [MetadataSchema].[EntityKeyAttribute] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_AttributeId]
    ON [MetadataSchema].[EntityKeyAttribute]([AttributeId] ASC);


GO
CREATE NONCLUSTERED INDEX [ndx_EntityKeyId]
    ON [MetadataSchema].[EntityKeyAttribute]([EntityKeyId] ASC);


GO
CREATE NONCLUSTERED INDEX [ndx_EntityKeyAttribute_SolutionId]
    ON [MetadataSchema].[EntityKeyAttribute]([SolutionId] ASC, [OverwriteTime] ASC)
    INCLUDE([EntityKeyAttributeId], [VersionNumber]);

