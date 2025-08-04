CREATE TABLE [dbo].[MobileOfflineProfileItemBase] (
    [ModifiedBy]                       UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]                UNIQUEIDENTIFIER NULL,
    [IntroducedVersion]                NVARCHAR (48)    NULL,
    [MobileOfflineProfileItemId]       UNIQUEIDENTIFIER NOT NULL,
    [RegardingObjectId]                UNIQUEIDENTIFIER NULL,
    [RecordsOwnedByMyBusinessUnit]     BIT              CONSTRAINT [DF_MobileOfflineProfileItemBase_RecordsOwnedByMyBusinessUnit] DEFAULT ((0)) NULL,
    [SolutionId]                       UNIQUEIDENTIFIER CONSTRAINT [DF_MobileOfflineProfileItemBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [Name]                             NVARCHAR (200)   NULL,
    [OrganizationId]                   UNIQUEIDENTIFIER NOT NULL,
    [ModifiedOnBehalfBy]               UNIQUEIDENTIFIER NULL,
    [RecordDistributionCriteria]       INT              CONSTRAINT [DF_MobileOfflineProfileItemBase_RecordDistributionCriteria] DEFAULT ((0)) NULL,
    [IsValidated]                      BIT              CONSTRAINT [DF_MobileOfflineProfileItemBase_IsValidated] DEFAULT ((0)) NOT NULL,
    [MobileOfflineProfileItemIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_MobileOfflineProfileItemBase_MobileOfflineProfileItemIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [IsManaged]                        BIT              CONSTRAINT [DF_MobileOfflineProfileItemBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [ProfileItemEntityFilter]          NVARCHAR (MAX)   NULL,
    [TraversedPath]                    NVARCHAR (1250)  NULL,
    [RelationshipData]                 NVARCHAR (MAX)   NULL,
    [SupportingSolutionId]             UNIQUEIDENTIFIER NULL,
    [SelectedEntityTypeCode]           INT              NULL,
    [SelectedEntityMetadata]           NVARCHAR (MAX)   NULL,
    [RecordsOwnedByMyTeam]             BIT              CONSTRAINT [DF_MobileOfflineProfileItemBase_RecordsOwnedByMyTeam] DEFAULT ((0)) NULL,
    [CreatedOn]                        DATETIME         NULL,
    [PublishedOn]                      DATETIME         NULL,
    [GetRelatedEntityRecords]          BIT              CONSTRAINT [DF_MobileOfflineProfileItemBase_GetRelatedEntityRecords] DEFAULT ((0)) NULL,
    [StageId]                          UNIQUEIDENTIFIER NULL,
    [VersionNumber]                    ROWVERSION       NULL,
    [RecordsOwnedByMe]                 BIT              CONSTRAINT [DF_MobileOfflineProfileItemBase_RecordsOwnedByMe] DEFAULT ((0)) NULL,
    [ModifiedOn]                       DATETIME         NULL,
    [ProfileItemRule]                  UNIQUEIDENTIFIER NULL,
    [CanBeFollowed]                    BIT              CONSTRAINT [DF_MobileOfflineProfileItemBase_CanBeFollowed] DEFAULT ((0)) NULL,
    [ProcessId]                        UNIQUEIDENTIFIER NULL,
    [CreatedBy]                        UNIQUEIDENTIFIER NULL,
    [IsVisibleInGrid]                  BIT              CONSTRAINT [DF_MobileOfflineProfileItemBase_IsVisibleInGrid] DEFAULT ((1)) NOT NULL,
    [OverwriteTime]                    DATETIME         CONSTRAINT [DF_MobileOfflineProfileItemBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [ComponentState]                   INT              CONSTRAINT [DF_MobileOfflineProfileItemBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [EntityObjectTypeCode]             INT              CONSTRAINT [DF_MobileOfflineProfileItemBase_EntityObjectTypeCode] DEFAULT ((0)) NULL,
    [ViewQuery]                        NVARCHAR (MAX)   NULL,
    CONSTRAINT [cndx_PrimaryKey_MobileOfflineProfileItem] PRIMARY KEY CLUSTERED ([MobileOfflineProfileItemId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_MobileOfflineProfileItemBase_MobileOfflineProfileItemIdUnique] UNIQUE NONCLUSTERED ([MobileOfflineProfileItemIdUnique] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_MobileOfflineProfileItemBase_SelectedEntityTypeCodeRegardingObjectIdUnique] UNIQUE NONCLUSTERED ([RegardingObjectId] ASC, [SelectedEntityTypeCode] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[MobileOfflineProfileItemBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[MobileOfflineProfileItemBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[MobileOfflineProfileItemBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[MobileOfflineProfileItemBase]([MobileOfflineProfileItemId] ASC) WHERE ([OverwriteTime]=(0) AND [ComponentState]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

