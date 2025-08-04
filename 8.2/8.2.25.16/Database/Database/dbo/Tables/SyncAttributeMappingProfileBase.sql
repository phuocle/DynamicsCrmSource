CREATE TABLE [dbo].[SyncAttributeMappingProfileBase] (
    [SolutionId]                          UNIQUEIDENTIFIER CONSTRAINT [DF_SyncAttributeMappingProfileBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [Description]                         NVARCHAR (MAX)   NULL,
    [OverwriteTime]                       DATETIME         CONSTRAINT [DF_SyncAttributeMappingProfileBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [VersionNumber]                       ROWVERSION       NULL,
    [ComponentState]                      INT              CONSTRAINT [DF_SyncAttributeMappingProfileBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [IsManaged]                           BIT              CONSTRAINT [DF_SyncAttributeMappingProfileBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [OrganizationId]                      UNIQUEIDENTIFIER NOT NULL,
    [CreatedBy]                           UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                          UNIQUEIDENTIFIER NULL,
    [CreatedOn]                           DATETIME         NULL,
    [SyncAttributeMappingProfileId]       UNIQUEIDENTIFIER NOT NULL,
    [Name]                                NVARCHAR (100)   NOT NULL,
    [SupportingSolutionId]                UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]                   UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                          DATETIME         NULL,
    [ModifiedOnBehalfBy]                  UNIQUEIDENTIFIER NULL,
    [SyncAttributeMappingProfileIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_SyncAttributeMappingProfileBase_SyncAttributeMappingProfileIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL
);

