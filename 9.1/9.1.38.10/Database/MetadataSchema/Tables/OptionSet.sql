CREATE TABLE [MetadataSchema].[OptionSet] (
    [OptionSetId]          UNIQUEIDENTIFIER NOT NULL,
    [OptionSetRowId]       UNIQUEIDENTIFIER DEFAULT (newid()) NOT NULL,
    [Name]                 NVARCHAR (256)   NULL,
    [OptionSetType]        TINYINT          DEFAULT ((0)) NOT NULL,
    [IsGlobal]             BIT              DEFAULT ((0)) NOT NULL,
    [IsCustomOptionSet]    BIT              DEFAULT ((0)) NOT NULL,
    [VersionNumber]        ROWVERSION       NOT NULL,
    [SolutionId]           UNIQUEIDENTIFIER DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId] UNIQUEIDENTIFIER DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [ComponentState]       TINYINT          DEFAULT ((0)) NOT NULL,
    [OverwriteTime]        DATETIME         DEFAULT ((0)) NOT NULL,
    [IsCustomizable]       BIT              CONSTRAINT [DF_OptionSet_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [IsManaged]            BIT              DEFAULT ((0)) NOT NULL,
    [IntroducedVersion]    NVARCHAR (48)    NOT NULL,
    [ParentOptionSetId]    UNIQUEIDENTIFIER NULL,
    [ExternalTypeName]     NVARCHAR (64)    NULL,
    CONSTRAINT [PK_OptionSet] PRIMARY KEY CLUSTERED ([OptionSetId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC),
    CONSTRAINT [CHK_IntroducedVersion] CHECK ([IntroducedVersion]<>''),
    CONSTRAINT [optionset_parent_optionset] FOREIGN KEY ([ParentOptionSetId]) REFERENCES [dbo].[OptionSetIds] ([OptionSetId])
);


GO
ALTER TABLE [MetadataSchema].[OptionSet] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_OptionSet_Name]
    ON [MetadataSchema].[OptionSet]([Name] ASC);


GO
CREATE NONCLUSTERED INDEX [ndx_OptionSet_SolutionId]
    ON [MetadataSchema].[OptionSet]([SolutionId] ASC, [OverwriteTime] ASC)
    INCLUDE([OptionSetId], [VersionNumber]);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_OptionSet_RowId]
    ON [MetadataSchema].[OptionSet]([OptionSetRowId] ASC, [OptionSetId] ASC);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_for_entitykey_UniqueOptionSet]
    ON [MetadataSchema].[OptionSet]([ComponentState] ASC, [Name] ASC, [OverwriteTime] ASC)
    INCLUDE([OptionSetId]) WHERE ([ComponentState] IS NOT NULL AND [Name] IS NOT NULL AND [OverwriteTime] IS NOT NULL) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

