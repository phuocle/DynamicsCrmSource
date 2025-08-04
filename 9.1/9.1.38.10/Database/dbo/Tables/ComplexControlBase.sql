CREATE TABLE [dbo].[ComplexControlBase] (
    [VersionNumber]          ROWVERSION       NULL,
    [Type]                   INT              CONSTRAINT [DF_ComplexControlBase_Type] DEFAULT ((0)) NULL,
    [OrganizationId]         UNIQUEIDENTIFIER NOT NULL,
    [Name]                   NVARCHAR (100)   NOT NULL,
    [Description]            NVARCHAR (MAX)   NULL,
    [IsManaged]              BIT              CONSTRAINT [DF_ComplexControlBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [OverwriteTime]          DATETIME         CONSTRAINT [DF_ComplexControlBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [ComplexControlId]       UNIQUEIDENTIFIER NOT NULL,
    [SupportingSolutionId]   UNIQUEIDENTIFIER NULL,
    [IntroducedVersion]      NVARCHAR (48)    NULL,
    [ComplexControlIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_ComplexControlBase_ComplexControlIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [ComplexControlXml]      NVARCHAR (MAX)   NOT NULL,
    [Version]                INT              NULL,
    [SolutionId]             UNIQUEIDENTIFIER CONSTRAINT [DF_ComplexControlBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [ComponentState]         INT              CONSTRAINT [DF_ComplexControlBase_ComponentState] DEFAULT ((0)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_ComplexControl] PRIMARY KEY CLUSTERED ([ComplexControlId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[ComplexControlBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[ComplexControlBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ComplexControlBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[ComplexControlBase]([ComplexControlId] ASC) WHERE ([OverwriteTime]=(0) AND [ComponentState]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

