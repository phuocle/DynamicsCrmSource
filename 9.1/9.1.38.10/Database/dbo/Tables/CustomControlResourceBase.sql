CREATE TABLE [dbo].[CustomControlResourceBase] (
    [VersionNumber]                 ROWVERSION       NULL,
    [CustomControlId]               UNIQUEIDENTIFIER NOT NULL,
    [OverwriteTime]                 DATETIME         CONSTRAINT [DF_CustomControlResourceBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [ModifiedOnBehalfBy]            UNIQUEIDENTIFIER NULL,
    [CreatedBy]                     UNIQUEIDENTIFIER NULL,
    [VersionRequirement]            NVARCHAR (20)    NULL,
    [CustomControlResourceId]       UNIQUEIDENTIFIER NOT NULL,
    [IntroducedVersion]             NVARCHAR (48)    NULL,
    [SupportingSolutionId]          UNIQUEIDENTIFIER NULL,
    [CreatedOn]                     DATETIME         NULL,
    [SolutionId]                    UNIQUEIDENTIFIER CONSTRAINT [DF_CustomControlResourceBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [Name]                          NVARCHAR (100)   NOT NULL,
    [IsManaged]                     BIT              CONSTRAINT [DF_CustomControlResourceBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [CustomControlResourceIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_CustomControlResourceBase_CustomControlResourceIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [WebResourceId]                 UNIQUEIDENTIFIER NOT NULL,
    [CreatedOnBehalfBy]             UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                    DATETIME         NULL,
    [ComponentState]                INT              CONSTRAINT [DF_CustomControlResourceBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [OrganizationId]                UNIQUEIDENTIFIER NOT NULL,
    [ModifiedBy]                    UNIQUEIDENTIFIER NULL,
    [Version]                       NVARCHAR (20)    NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_CustomControlResource] PRIMARY KEY CLUSTERED ([CustomControlResourceId] ASC, [ComponentState] ASC, [OverwriteTime] ASC, [Version] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_CustomControlresourceBase_CustomControlResourceIdUnique] UNIQUE NONCLUSTERED ([CustomControlResourceIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[CustomControlResourceBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [indx_Sync_VersionNumber]
    ON [dbo].[CustomControlResourceBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[CustomControlResourceBase]([CustomControlResourceId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_CustomControlresourceBase_CustomControlIdOverwriteTimeNameComponentState]
    ON [dbo].[CustomControlResourceBase]([CustomControlId] ASC, [OverwriteTime] ASC, [Name] ASC, [ComponentState] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);

