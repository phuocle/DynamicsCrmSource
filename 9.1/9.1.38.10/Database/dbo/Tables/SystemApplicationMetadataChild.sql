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
ALTER TABLE [dbo].[SystemApplicationMetadataChild] SET (LOCK_ESCALATION = DISABLE);

