CREATE TABLE [dbo].[DisplayStringBase] (
    [PublishedDisplayString] NVARCHAR (750)   NULL,
    [FormatParameters]       INT              CONSTRAINT [DF_DisplayStringBase_FormatParameters] DEFAULT ((0)) NOT NULL,
    [IsManaged]              BIT              CONSTRAINT [DF_DisplayStringBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [OverwriteTime]          DATETIME         CONSTRAINT [DF_DisplayStringBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [CreatedOn]              DATETIME         NOT NULL,
    [CreatedOnBehalfBy]      UNIQUEIDENTIFIER NULL,
    [CustomComment]          NVARCHAR (500)   NULL,
    [ModifiedOn]             DATETIME         NOT NULL,
    [ModifiedBy]             UNIQUEIDENTIFIER NULL,
    [VersionNumber]          ROWVERSION       NULL,
    [ModifiedOnBehalfBy]     UNIQUEIDENTIFIER NULL,
    [DisplayStringKey]       NVARCHAR (200)   NOT NULL,
    [SolutionId]             UNIQUEIDENTIFIER CONSTRAINT [DF_DisplayStringBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [ComponentState]         INT              CONSTRAINT [DF_DisplayStringBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [SupportingSolutionId]   UNIQUEIDENTIFIER NULL,
    [LanguageCode]           INT              NULL,
    [DisplayStringIdUnique]  UNIQUEIDENTIFIER CONSTRAINT [DF_DisplayStringBase_DisplayStringIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [DisplayStringId]        UNIQUEIDENTIFIER NOT NULL,
    [CreatedBy]              UNIQUEIDENTIFIER NULL,
    [OrganizationId]         UNIQUEIDENTIFIER NOT NULL,
    [CustomDisplayString]    NVARCHAR (750)   NULL,
    CONSTRAINT [cndx_PrimaryKey_DisplayString] PRIMARY KEY CLUSTERED ([DisplayStringId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_DisplayStringBase_DisplayStringIdUnique] UNIQUE NONCLUSTERED ([DisplayStringIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[DisplayStringBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [UQ_DisplayString]
    ON [dbo].[DisplayStringBase]([DisplayStringKey] ASC, [LanguageCode] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[DisplayStringBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[DisplayStringBase]([DisplayStringId] ASC) WHERE ([OverwriteTime]=(0) AND [ComponentState]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

