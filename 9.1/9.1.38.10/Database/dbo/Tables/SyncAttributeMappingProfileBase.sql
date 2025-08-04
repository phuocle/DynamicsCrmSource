CREATE TABLE [dbo].[SyncAttributeMappingProfileBase] (
    [SolutionId]                          UNIQUEIDENTIFIER CONSTRAINT [DF_SyncAttributeMappingProfileBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SyncAttributeMappingProfileId]       UNIQUEIDENTIFIER NOT NULL,
    [OverwriteTime]                       DATETIME         CONSTRAINT [DF_SyncAttributeMappingProfileBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [SupportingSolutionId]                UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]                   UNIQUEIDENTIFIER NULL,
    [IsManaged]                           BIT              CONSTRAINT [DF_SyncAttributeMappingProfileBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [SyncAttributeMappingProfileIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_SyncAttributeMappingProfileBase_SyncAttributeMappingProfileIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [OrganizationId]                      UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]                       ROWVERSION       NULL,
    [Description]                         NVARCHAR (MAX)   NULL,
    [ModifiedBy]                          UNIQUEIDENTIFIER NULL,
    [Name]                                NVARCHAR (100)   NOT NULL,
    [CreatedOn]                           DATETIME         NULL,
    [ModifiedOn]                          DATETIME         NULL,
    [ModifiedOnBehalfBy]                  UNIQUEIDENTIFIER NULL,
    [CreatedBy]                           UNIQUEIDENTIFIER NULL,
    [ComponentState]                      INT              CONSTRAINT [DF_SyncAttributeMappingProfileBase_ComponentState] DEFAULT ((0)) NOT NULL
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[SyncAttributeMappingProfileBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[SyncAttributeMappingProfileBase] SET (LOCK_ESCALATION = DISABLE);

