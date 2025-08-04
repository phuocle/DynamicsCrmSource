CREATE TABLE [dbo].[MobileOfflineProfileBase] (
    [PublishedOn]                  DATETIME         NULL,
    [IntroducedVersion]            NVARCHAR (48)    NULL,
    [IsManaged]                    BIT              CONSTRAINT [DF_MobileOfflineProfileBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [TraversedPath]                NVARCHAR (1250)  NULL,
    [Description]                  NVARCHAR (MAX)   NULL,
    [SolutionId]                   UNIQUEIDENTIFIER CONSTRAINT [DF_MobileOfflineProfileBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [OverwriteTime]                DATETIME         CONSTRAINT [DF_MobileOfflineProfileBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [CreatedBy]                    UNIQUEIDENTIFIER NULL,
    [StageId]                      UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]           UNIQUEIDENTIFIER NULL,
    [MobileOfflineProfileId]       UNIQUEIDENTIFIER NOT NULL,
    [CreatedOnBehalfBy]            UNIQUEIDENTIFIER NULL,
    [ComponentState]               INT              CONSTRAINT [DF_MobileOfflineProfileBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [MobileOfflineProfileIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_MobileOfflineProfileBase_MobileOfflineProfileIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [Name]                         NVARCHAR (200)   NULL,
    [ModifiedOn]                   DATETIME         NULL,
    [VersionNumber]                ROWVERSION       NULL,
    [ProcessId]                    UNIQUEIDENTIFIER NULL,
    [CreatedOn]                    DATETIME         NULL,
    [SupportingSolutionId]         UNIQUEIDENTIFIER NULL,
    [OrganizationId]               UNIQUEIDENTIFIER NOT NULL,
    [ModifiedBy]                   UNIQUEIDENTIFIER NULL,
    [SelectedEntityMetadata]       NVARCHAR (MAX)   NULL,
    [IsValidated]                  BIT              CONSTRAINT [DF_MobileOfflineProfileBase_IsValidated] DEFAULT ((0)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_MobileOfflineProfile] PRIMARY KEY CLUSTERED ([MobileOfflineProfileId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_MobileOfflineProfileBase_MobileOfflineProfileIdUnique] UNIQUE NONCLUSTERED ([MobileOfflineProfileIdUnique] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_MobileOfflineProfileBase_NameUnique] UNIQUE NONCLUSTERED ([Name] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[MobileOfflineProfileBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);

