CREATE TABLE [dbo].[MobileOfflineProfileItemBase] (
    [IntroducedVersion]                NVARCHAR (48)    NULL,
    [ComponentState]                   INT              CONSTRAINT [DF_MobileOfflineProfileItemBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [CreatedOn]                        DATETIME         NULL,
    [MobileOfflineProfileItemId]       UNIQUEIDENTIFIER NOT NULL,
    [CreatedBy]                        UNIQUEIDENTIFIER NULL,
    [VersionNumber]                    ROWVERSION       NULL,
    [GetRelatedEntityRecords]          BIT              CONSTRAINT [DF_MobileOfflineProfileItemBase_GetRelatedEntityRecords] DEFAULT ((0)) NULL,
    [TraversedPath]                    NVARCHAR (1250)  NULL,
    [ProcessId]                        UNIQUEIDENTIFIER NULL,
    [IsManaged]                        BIT              CONSTRAINT [DF_MobileOfflineProfileItemBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [RegardingObjectId]                UNIQUEIDENTIFIER NULL,
    [PublishedOn]                      DATETIME         NULL,
    [SolutionId]                       UNIQUEIDENTIFIER CONSTRAINT [DF_MobileOfflineProfileItemBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [StageId]                          UNIQUEIDENTIFIER NULL,
    [SelectedEntityTypeCode]           INT              NULL,
    [ModifiedBy]                       UNIQUEIDENTIFIER NULL,
    [CanBeFollowed]                    BIT              CONSTRAINT [DF_MobileOfflineProfileItemBase_CanBeFollowed] DEFAULT ((0)) NULL,
    [ModifiedOn]                       DATETIME         NULL,
    [IsVisibleInGrid]                  BIT              CONSTRAINT [DF_MobileOfflineProfileItemBase_IsVisibleInGrid] DEFAULT ((1)) NOT NULL,
    [CreatedOnBehalfBy]                UNIQUEIDENTIFIER NULL,
    [SupportingSolutionId]             UNIQUEIDENTIFIER NULL,
    [Name]                             NVARCHAR (200)   NULL,
    [ProfileItemRule]                  UNIQUEIDENTIFIER NULL,
    [ViewQuery]                        NVARCHAR (MAX)   NULL,
    [MobileOfflineProfileItemIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_MobileOfflineProfileItemBase_MobileOfflineProfileItemIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [OrganizationId]                   UNIQUEIDENTIFIER NOT NULL,
    [OverwriteTime]                    DATETIME         CONSTRAINT [DF_MobileOfflineProfileItemBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [ModifiedOnBehalfBy]               UNIQUEIDENTIFIER NULL,
    [SelectedEntityMetadata]           NVARCHAR (MAX)   NULL,
    [EntityObjectTypeCode]             INT              CONSTRAINT [DF_MobileOfflineProfileItemBase_EntityObjectTypeCode] DEFAULT ((0)) NULL,
    [IsValidated]                      BIT              CONSTRAINT [DF_MobileOfflineProfileItemBase_IsValidated] DEFAULT ((0)) NOT NULL,
    [RecordsOwnedByMe]                 BIT              CONSTRAINT [DF_MobileOfflineProfileItemBase_RecordsOwnedByMe] DEFAULT ((0)) NULL,
    [ProfileItemEntityFilter]          NVARCHAR (MAX)   NULL,
    [RecordsOwnedByMyTeam]             BIT              CONSTRAINT [DF_MobileOfflineProfileItemBase_RecordsOwnedByMyTeam] DEFAULT ((0)) NULL,
    [RecordDistributionCriteria]       INT              CONSTRAINT [DF_MobileOfflineProfileItemBase_RecordDistributionCriteria] DEFAULT ((0)) NULL,
    [RelationshipData]                 NVARCHAR (MAX)   NULL,
    [RecordsOwnedByMyBusinessUnit]     BIT              CONSTRAINT [DF_MobileOfflineProfileItemBase_RecordsOwnedByMyBusinessUnit] DEFAULT ((0)) NULL,
    CONSTRAINT [cndx_PrimaryKey_MobileOfflineProfileItem] PRIMARY KEY CLUSTERED ([MobileOfflineProfileItemId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_MobileOfflineProfileItemBase_MobileOfflineProfileItemIdUnique] UNIQUE NONCLUSTERED ([MobileOfflineProfileItemIdUnique] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_MobileOfflineProfileItemBase_SelectedEntityTypeCodeRegardingObjectIdUnique] UNIQUE NONCLUSTERED ([RegardingObjectId] ASC, [SelectedEntityTypeCode] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[MobileOfflineProfileItemBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);

