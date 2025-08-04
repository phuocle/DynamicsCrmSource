CREATE TABLE [MetadataSchema].[OptionSet] (
    [OptionSetId]          UNIQUEIDENTIFIER NOT NULL,
    [OptionSetRowId]       UNIQUEIDENTIFIER DEFAULT (newid()) NOT NULL,
    [Name]                 NVARCHAR (123)   NOT NULL,
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
    [IntroducedVersion]    NVARCHAR (48)    NULL,
    CONSTRAINT [PK_OptionSet] PRIMARY KEY CLUSTERED ([OptionSetId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC),
    CONSTRAINT [optionset_optionsetid] FOREIGN KEY ([OptionSetId]) REFERENCES [dbo].[OptionSetIds] ([OptionSetId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_OptionSet_Name]
    ON [MetadataSchema].[OptionSet]([Name] ASC);

