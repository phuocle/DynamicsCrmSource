CREATE TABLE [dbo].[CustomControlBase] (
    [CompatibleDataTypes]   NVARCHAR (500)   NOT NULL,
    [CreatedOn]             DATETIME         NULL,
    [ModifiedOn]            DATETIME         NULL,
    [ModifiedBy]            UNIQUEIDENTIFIER NULL,
    [SupportingSolutionId]  UNIQUEIDENTIFIER NULL,
    [IsManaged]             BIT              CONSTRAINT [DF_CustomControlBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [ModifiedOnBehalfBy]    UNIQUEIDENTIFIER NULL,
    [IntroducedVersion]     NVARCHAR (48)    NULL,
    [Manifest]              NVARCHAR (MAX)   NOT NULL,
    [ClientJson]            NVARCHAR (MAX)   NULL,
    [Name]                  NVARCHAR (500)   NOT NULL,
    [CustomControlIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_CustomControlBase_CustomControlIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [OverwriteTime]         DATETIME         CONSTRAINT [DF_CustomControlBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [Version]               NVARCHAR (20)    NOT NULL,
    [OrganizationId]        UNIQUEIDENTIFIER NOT NULL,
    [ComponentState]        INT              CONSTRAINT [DF_CustomControlBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [VersionNumber]         ROWVERSION       NULL,
    [CreatedOnBehalfBy]     UNIQUEIDENTIFIER NULL,
    [CreatedBy]             UNIQUEIDENTIFIER NULL,
    [SolutionId]            UNIQUEIDENTIFIER CONSTRAINT [DF_CustomControlBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [CustomControlId]       UNIQUEIDENTIFIER NOT NULL,
    [AuthoringManifest]     NVARCHAR (MAX)   NULL,
    CONSTRAINT [cndx_PrimaryKey_CustomControl] PRIMARY KEY CLUSTERED ([CustomControlId] ASC, [ComponentState] ASC, [OverwriteTime] ASC, [Version] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_CustomControlBase_CustomControlIdUnique] UNIQUE NONCLUSTERED ([CustomControlIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[CustomControlBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[CustomControlBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [indx_Sync_VersionNumber]
    ON [dbo].[CustomControlBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[CustomControlBase]([CustomControlId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_ComponentState_OverwriteTime_Name]
    ON [dbo].[CustomControlBase]([ComponentState] ASC, [OverwriteTime] ASC, [Name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

