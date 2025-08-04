CREATE TABLE [MetadataSchema].[ViewAttribute] (
    [ViewAttributeId]      UNIQUEIDENTIFIER ROWGUIDCOL NOT NULL,
    [AttributeId]          UNIQUEIDENTIFIER NOT NULL,
    [RelationshipId]       UNIQUEIDENTIFIER NOT NULL,
    [RemoteAttributeId]    UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]        ROWVERSION       NOT NULL,
    [ViewAttributeRowId]   UNIQUEIDENTIFIER DEFAULT (newid()) NOT NULL,
    [IsDenormalized]       BIT              DEFAULT ((0)) NOT NULL,
    [SolutionId]           UNIQUEIDENTIFIER DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId] UNIQUEIDENTIFIER DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [ComponentState]       TINYINT          DEFAULT ((0)) NOT NULL,
    [OverwriteTime]        DATETIME         DEFAULT ((0)) NOT NULL,
    [IsManaged]            BIT              DEFAULT ((0)) NOT NULL,
    CONSTRAINT [XPKViewAttribute] PRIMARY KEY CLUSTERED ([ViewAttributeId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC),
    CONSTRAINT [view_attribute_attribute] FOREIGN KEY ([AttributeId]) REFERENCES [dbo].[AttributeIds] ([AttributeId]),
    CONSTRAINT [view_attribute_relationship] FOREIGN KEY ([RelationshipId]) REFERENCES [dbo].[RelationshipIds] ([RelationshipId]),
    CONSTRAINT [view_attribute_remoteattribute] FOREIGN KEY ([RemoteAttributeId]) REFERENCES [dbo].[AttributeIds] ([AttributeId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_ViewAttribute_MetadataCache]
    ON [MetadataSchema].[ViewAttribute]([SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC);


GO
CREATE NONCLUSTERED INDEX [ndx_AttributeId]
    ON [MetadataSchema].[ViewAttribute]([AttributeId] ASC);

