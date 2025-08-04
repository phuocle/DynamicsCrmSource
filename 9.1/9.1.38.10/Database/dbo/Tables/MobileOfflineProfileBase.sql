CREATE TABLE [dbo].[MobileOfflineProfileBase] (
    [SelectedEntityMetadata]       NVARCHAR (MAX)   NULL,
    [CreatedOn]                    DATETIME         NULL,
    [ModifiedBy]                   UNIQUEIDENTIFIER NULL,
    [Description]                  NVARCHAR (MAX)   NULL,
    [StageId]                      UNIQUEIDENTIFIER NULL,
    [CreatedBy]                    UNIQUEIDENTIFIER NULL,
    [VersionNumber]                ROWVERSION       NULL,
    [MobileOfflineProfileIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_MobileOfflineProfileBase_MobileOfflineProfileIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [IntroducedVersion]            NVARCHAR (48)    NULL,
    [ComponentState]               INT              CONSTRAINT [DF_MobileOfflineProfileBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [ModifiedOnBehalfBy]           UNIQUEIDENTIFIER NULL,
    [TraversedPath]                NVARCHAR (1250)  NULL,
    [PublishedOn]                  DATETIME         NULL,
    [OrganizationId]               UNIQUEIDENTIFIER NOT NULL,
    [OverwriteTime]                DATETIME         CONSTRAINT [DF_MobileOfflineProfileBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [Name]                         NVARCHAR (200)   NULL,
    [ModifiedOn]                   DATETIME         NULL,
    [CreatedOnBehalfBy]            UNIQUEIDENTIFIER NULL,
    [IsManaged]                    BIT              CONSTRAINT [DF_MobileOfflineProfileBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [MobileOfflineProfileId]       UNIQUEIDENTIFIER NOT NULL,
    [IsValidated]                  BIT              CONSTRAINT [DF_MobileOfflineProfileBase_IsValidated] DEFAULT ((0)) NOT NULL,
    [SupportingSolutionId]         UNIQUEIDENTIFIER NULL,
    [SolutionId]                   UNIQUEIDENTIFIER CONSTRAINT [DF_MobileOfflineProfileBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [ProcessId]                    UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_MobileOfflineProfile] PRIMARY KEY CLUSTERED ([MobileOfflineProfileId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_MobileOfflineProfileBase_MobileOfflineProfileIdUnique] UNIQUE NONCLUSTERED ([MobileOfflineProfileIdUnique] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_MobileOfflineProfileBase_NameUnique] UNIQUE NONCLUSTERED ([Name] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[MobileOfflineProfileBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[MobileOfflineProfileBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[MobileOfflineProfileBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[MobileOfflineProfileBase]([MobileOfflineProfileId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_C5101FE3560245C1BCAF1C9A081B4F22]
    ON [dbo].[MobileOfflineProfileBase]([MobileOfflineProfileId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_C5101FE3560245C1BCAF1C9A081B4F22]
    ON [dbo].[MobileOfflineProfileBase]([Name] ASC, [MobileOfflineProfileId] ASC)
    INCLUDE([CreatedOn], [CreatedBy], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_C5101FE3560245C1BCAF1C9A081B4F22]
    ON [dbo].[MobileOfflineProfileBase]([MobileOfflineProfileId] ASC)
    INCLUDE([Name], [CreatedOn], [CreatedBy], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

