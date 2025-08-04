CREATE TABLE [dbo].[SyncAttributeMappingBase] (
    [AttributeCRMName]              NVARCHAR (100)   NULL,
    [SupportingSolutionId]          UNIQUEIDENTIFIER NULL,
    [DefaultSyncDirection]          INT              CONSTRAINT [DF_SyncAttributeMappingBase_DefaultSyncDirection] DEFAULT ((0)) NOT NULL,
    [SolutionId]                    UNIQUEIDENTIFIER CONSTRAINT [DF_SyncAttributeMappingBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [ComponentState]                INT              CONSTRAINT [DF_SyncAttributeMappingBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [SyncAttributeMappingIdUnique]  UNIQUEIDENTIFIER CONSTRAINT [DF_SyncAttributeMappingBase_SyncAttributeMappingIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [ParentSyncAttributeMappingId]  UNIQUEIDENTIFIER NULL,
    [SyncAttributeMappingId]        UNIQUEIDENTIFIER NOT NULL,
    [SyncAttributeMappingProfileId] UNIQUEIDENTIFIER NOT NULL,
    [SyncDirection]                 INT              CONSTRAINT [DF_SyncAttributeMappingBase_SyncDirection] DEFAULT ((0)) NOT NULL,
    [MappingName]                   NVARCHAR (100)   NOT NULL,
    [AllowedSyncDirection]          TINYINT          CONSTRAINT [DF_SyncAttributeMappingBase_AllowedSyncDirection] DEFAULT ((0)) NOT NULL,
    [IsManaged]                     BIT              CONSTRAINT [DF_SyncAttributeMappingBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [EntityTypeCode]                INT              NOT NULL,
    [ComputedProperties]            NVARCHAR (500)   NULL,
    [AttributeExchangeName]         NVARCHAR (100)   NULL,
    [IsComputed]                    BIT              CONSTRAINT [DF_SyncAttributeMappingBase_IsComputed] DEFAULT ((0)) NOT NULL,
    [OverwriteTime]                 DATETIME         CONSTRAINT [DF_SyncAttributeMappingBase_OverwriteTime] DEFAULT ((0)) NOT NULL
);

