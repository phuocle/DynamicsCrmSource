CREATE TABLE [dbo].[SystemApplicationMetadataChild] (
    [Id]                               UNIQUEIDENTIFIER NOT NULL,
    [MetadataType]                     INT              NULL,
    [FormFactor]                       INT              NULL,
    [SourceId]                         NVARCHAR (300)   NULL,
    [Lcid]                             INT              NULL,
    [AssociatedEntityLogicalName]      NVARCHAR (64)    NULL,
    [ChildMetadataType]                INT              NULL,
    [ChildSourceId]                    NVARCHAR (300)   NULL,
    [ChildAssociatedEntityLogicalName] NVARCHAR (64)    NULL,
    [SystemApplicationMetadataId]      UNIQUEIDENTIFIER NULL,
    [SystemApplicationMetadataChildId] UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_SystemApplicationMetadataChild] PRIMARY KEY CLUSTERED ([Id] ASC)
);


GO
CREATE NONCLUSTERED INDEX [ndx_latte]
    ON [dbo].[SystemApplicationMetadataChild]([MetadataType] ASC, [FormFactor] ASC, [SourceId] ASC, [Lcid] ASC, [SystemApplicationMetadataId] ASC)
    INCLUDE([Id], [AssociatedEntityLogicalName], [ChildMetadataType], [ChildSourceId], [ChildAssociatedEntityLogicalName]);

