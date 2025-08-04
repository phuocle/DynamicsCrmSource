CREATE TABLE [dbo].[FieldSecurityProfileBase] (
    [ModifiedOnBehalfBy]           UNIQUEIDENTIFIER NULL,
    [SolutionId]                   UNIQUEIDENTIFIER CONSTRAINT [DF_FieldSecurityProfileBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [ComponentState]               INT              CONSTRAINT [DF_FieldSecurityProfileBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [ModifiedOn]                   DATETIME         NULL,
    [OverwriteTime]                DATETIME         CONSTRAINT [DF_FieldSecurityProfileBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [CreatedOn]                    DATETIME         NULL,
    [IsManaged]                    BIT              CONSTRAINT [DF_FieldSecurityProfileBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [SupportingSolutionId]         UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                   UNIQUEIDENTIFIER NULL,
    [OrganizationId]               UNIQUEIDENTIFIER NOT NULL,
    [Description]                  NVARCHAR (MAX)   NULL,
    [FieldSecurityProfileIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_FieldSecurityProfileBase_FieldSecurityProfileIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [CreatedBy]                    UNIQUEIDENTIFIER NULL,
    [Name]                         NVARCHAR (100)   NOT NULL,
    [VersionNumber]                ROWVERSION       NULL,
    [FieldSecurityProfileId]       UNIQUEIDENTIFIER NOT NULL,
    [CreatedOnBehalfBy]            UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_FieldSecurityProfile] PRIMARY KEY CLUSTERED ([FieldSecurityProfileId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [solution_fieldsecurityprofile] FOREIGN KEY ([SolutionId]) REFERENCES [dbo].[SolutionBase] ([SolutionId]),
    CONSTRAINT [UQ_FieldSecurityProfileBase_FieldSecurityProfileIdUnique] UNIQUE NONCLUSTERED ([FieldSecurityProfileIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[FieldSecurityProfileBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[FieldSecurityProfileBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[FieldSecurityProfileBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[FieldSecurityProfileBase]([FieldSecurityProfileId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_B5A3C209525E4DA497D7AB71AE6A92FE]
    ON [dbo].[FieldSecurityProfileBase]([FieldSecurityProfileId] ASC)
    INCLUDE([Name], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_B5A3C209525E4DA497D7AB71AE6A92FE]
    ON [dbo].[FieldSecurityProfileBase]([FieldSecurityProfileId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[FieldSecurityProfileBase]([Name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_B5A3C209525E4DA497D7AB71AE6A92FE]
    ON [dbo].[FieldSecurityProfileBase]([Name] ASC, [FieldSecurityProfileId] ASC)
    INCLUDE([VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

