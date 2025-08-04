CREATE TABLE [dbo].[DisplayStringBase] (
    [PublishedDisplayString] NVARCHAR (750)   NULL,
    [CustomDisplayString]    NVARCHAR (750)   NULL,
    [DisplayStringKey]       NVARCHAR (200)   NOT NULL,
    [VersionNumber]          ROWVERSION       NULL,
    [CreatedBy]              UNIQUEIDENTIFIER NULL,
    [CustomComment]          NVARCHAR (500)   NULL,
    [FormatParameters]       INT              CONSTRAINT [DF_DisplayStringBase_FormatParameters] DEFAULT ((0)) NOT NULL,
    [OrganizationId]         UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]              DATETIME         NOT NULL,
    [ModifiedOn]             DATETIME         NOT NULL,
    [LanguageCode]           INT              NULL,
    [DisplayStringId]        UNIQUEIDENTIFIER NOT NULL,
    [ModifiedBy]             UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]     UNIQUEIDENTIFIER NULL,
    [IsManaged]              BIT              CONSTRAINT [DF_DisplayStringBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [CreatedOnBehalfBy]      UNIQUEIDENTIFIER NULL,
    [OverwriteTime]          DATETIME         CONSTRAINT [DF_DisplayStringBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [ComponentState]         INT              CONSTRAINT [DF_DisplayStringBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [SolutionId]             UNIQUEIDENTIFIER CONSTRAINT [DF_DisplayStringBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId]   UNIQUEIDENTIFIER NULL,
    [DisplayStringIdUnique]  UNIQUEIDENTIFIER CONSTRAINT [DF_DisplayStringBase_DisplayStringIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_DisplayString] PRIMARY KEY CLUSTERED ([DisplayStringId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_DisplayStringBase_DisplayStringIdUnique] UNIQUE NONCLUSTERED ([DisplayStringIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[DisplayStringBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [UQ_DisplayString]
    ON [dbo].[DisplayStringBase]([DisplayStringKey] ASC, [LanguageCode] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80);

