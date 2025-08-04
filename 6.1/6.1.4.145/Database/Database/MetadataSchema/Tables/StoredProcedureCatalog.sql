CREATE TABLE [MetadataSchema].[StoredProcedureCatalog] (
    [StoredProcedureId] UNIQUEIDENTIFIER NOT NULL,
    [Name]              NVARCHAR (255)   NOT NULL,
    [DatabaseName]      NVARCHAR (255)   NOT NULL,
    [TargetMask]        INT              NULL,
    [Description]       NTEXT            NULL,
    CONSTRAINT [XPKStoredProcedureCatalog] PRIMARY KEY CLUSTERED ([StoredProcedureId] ASC)
);

