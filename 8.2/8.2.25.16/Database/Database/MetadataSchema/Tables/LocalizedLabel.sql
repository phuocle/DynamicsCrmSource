CREATE TABLE [MetadataSchema].[LocalizedLabel] (
    [LocalizedLabelId]     UNIQUEIDENTIFIER NOT NULL,
    [LocalizedLabelRowId]  UNIQUEIDENTIFIER DEFAULT (newid()) NOT NULL,
    [LanguageId]           INT              NOT NULL,
    [ObjectId]             UNIQUEIDENTIFIER NOT NULL,
    [ObjectColumnName]     [sysname]        NOT NULL,
    [Label]                NVARCHAR (MAX)   NOT NULL,
    [VersionNumber]        ROWVERSION       NOT NULL,
    [LabelTypeCode]        INT              NOT NULL,
    [SolutionId]           UNIQUEIDENTIFIER DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId] UNIQUEIDENTIFIER DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [ComponentState]       TINYINT          DEFAULT ((0)) NOT NULL,
    [OverwriteTime]        DATETIME         DEFAULT ((0)) NOT NULL,
    [IsManaged]            BIT              DEFAULT ((0)) NOT NULL,
    CONSTRAINT [XPKLocalizedLabel] PRIMARY KEY CLUSTERED ([LocalizedLabelId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC),
    CONSTRAINT [UQ_LocalizedLabelCheck] UNIQUE NONCLUSTERED ([ObjectId] ASC, [ObjectColumnName] ASC, [LanguageId] ASC, [OverwriteTime] ASC, [ComponentState] ASC)
);


GO
CREATE NONCLUSTERED INDEX [ndx_LocalizedLabel]
    ON [MetadataSchema].[LocalizedLabel]([ObjectId] ASC, [LabelTypeCode] ASC, [ObjectColumnName] ASC, [LanguageId] ASC)
    INCLUDE([Label]);


GO
CREATE NONCLUSTERED INDEX [ndx_LocalizedLabel_ForPublish]
    ON [MetadataSchema].[LocalizedLabel]([ObjectId] ASC, [OverwriteTime] ASC)
    INCLUDE([LocalizedLabelId], [LocalizedLabelRowId], [ComponentState]);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_LocalizedLabel_RowId]
    ON [MetadataSchema].[LocalizedLabel]([LocalizedLabelRowId] ASC);


GO
CREATE NONCLUSTERED INDEX [LocalizedLabel_ComponentStateOverwriteTime]
    ON [MetadataSchema].[LocalizedLabel]([LanguageId] ASC, [OverwriteTime] ASC, [SolutionId] ASC, [ComponentState] ASC)
    INCLUDE([LocalizedLabelId], [LocalizedLabelRowId], [ObjectId], [ObjectColumnName], [Label], [VersionNumber], [LabelTypeCode], [SupportingSolutionId], [IsManaged]);


GO
CREATE NONCLUSTERED INDEX [ndx_localizedlabel_fegetformxml]
    ON [MetadataSchema].[LocalizedLabel]([OverwriteTime] ASC, [LanguageId] ASC, [ObjectId] ASC, [ObjectColumnName] ASC, [ComponentState] ASC, [LocalizedLabelId] ASC, [LocalizedLabelRowId] ASC)
    INCLUDE([Label]);

