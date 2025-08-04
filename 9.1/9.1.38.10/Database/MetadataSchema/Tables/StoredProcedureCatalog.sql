CREATE TABLE [MetadataSchema].[StoredProcedureCatalog] (
    [StoredProcedureId]    UNIQUEIDENTIFIER NOT NULL,
    [Name]                 NVARCHAR (255)   NOT NULL,
    [DatabaseName]         NVARCHAR (255)   NOT NULL,
    [TargetMask]           INT              NULL,
    [Description]          NTEXT            NULL,
    [InstallationSequence] INT              DEFAULT ((1)) NOT NULL,
    [SolutionId]           UNIQUEIDENTIFIER DEFAULT ('FD140AAD-4DF4-11DD-BD17-0019B9312238') NOT NULL,
    [OverwriteTime]        DATETIME         DEFAULT ((0)) NOT NULL,
    [ComponentState]       TINYINT          DEFAULT ((0)) NOT NULL,
    [Content]              NVARCHAR (MAX)   NULL,
    CONSTRAINT [XPKStoredProcedureCatalog] PRIMARY KEY CLUSTERED ([StoredProcedureId] ASC)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[MetadataSchema].[StoredProcedureCatalog]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [MetadataSchema].[StoredProcedureCatalog] SET (LOCK_ESCALATION = DISABLE);

