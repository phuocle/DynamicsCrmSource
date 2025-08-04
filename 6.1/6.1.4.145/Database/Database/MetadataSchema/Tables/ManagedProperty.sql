CREATE TABLE [MetadataSchema].[ManagedProperty] (
    [ManagedPropertyId]           UNIQUEIDENTIFIER NOT NULL,
    [ManagedPropertyRowId]        UNIQUEIDENTIFIER DEFAULT (newid()) NOT NULL,
    [LogicalName]                 NVARCHAR (64)    NOT NULL,
    [ManagedPropertyType]         INT              NOT NULL,
    [Operation]                   INT              NULL,
    [IsGlobalForOperation]        BIT              DEFAULT ((0)) NOT NULL,
    [EvaluationPriority]          INT              NOT NULL,
    [IsPrivate]                   BIT              DEFAULT ((0)) NOT NULL,
    [DefaultValue]                BIT              DEFAULT ((1)) NOT NULL,
    [ErrorCode]                   INT              NULL,
    [EnablesMetadata]             BIT              NULL,
    [EnablesEntityName]           NVARCHAR (64)    NULL,
    [EnablesAttributeName]        NVARCHAR (50)    NULL,
    [EvaluationConditionClass]    NVARCHAR (1024)  NULL,
    [EvaluationConditionAssembly] NVARCHAR (1024)  NULL,
    [SolutionId]                  UNIQUEIDENTIFIER DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId]        UNIQUEIDENTIFIER DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [ComponentState]              TINYINT          DEFAULT ((0)) NOT NULL,
    [OverwriteTime]               DATETIME         DEFAULT ((0)) NOT NULL,
    [IsManaged]                   BIT              DEFAULT ((0)) NOT NULL,
    [VersionNumber]               ROWVERSION       NOT NULL,
    [IntroducedVersion]           NVARCHAR (48)    NULL,
    CONSTRAINT [PK_ManagedProperty] PRIMARY KEY CLUSTERED ([ManagedPropertyId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC)
);


GO
CREATE NONCLUSTERED INDEX [ndx_ManagedProperty_Name]
    ON [MetadataSchema].[ManagedProperty]([LogicalName] ASC);

