CREATE TABLE [dbo].[MobileOfflineProfileItemAssociationBase] (
    [OrganizationId]                              UNIQUEIDENTIFIER NOT NULL,
    [StageId]                                     UNIQUEIDENTIFIER NULL,
    [CreatedOn]                                   DATETIME         NULL,
    [TraversedPath]                               NVARCHAR (1250)  NULL,
    [MobileOfflineProfileItemAssociationId]       UNIQUEIDENTIFIER NOT NULL,
    [ModifiedOnBehalfBy]                          UNIQUEIDENTIFIER NULL,
    [CreatedBy]                                   UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                                  UNIQUEIDENTIFIER NULL,
    [MobileOfflineProfileItemId]                  UNIQUEIDENTIFIER NULL,
    [ProfileItemAssociationEntityFilter]          NVARCHAR (MAX)   NULL,
    [SelectedRelationShipsSchema]                 INT              NULL,
    [MobileOfflineProfileItemAssociationIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_MobileOfflineProfileItemAssociationBase_MobileOfflineProfileItemAssociationIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [RelationshipName]                            NVARCHAR (200)   NULL,
    [IsManaged]                                   BIT              CONSTRAINT [DF_MobileOfflineProfileItemAssociationBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [VersionNumber]                               ROWVERSION       NULL,
    [Name]                                        NVARCHAR (200)   NULL,
    [RelationshipData]                            NVARCHAR (MAX)   NULL,
    [CreatedOnBehalfBy]                           UNIQUEIDENTIFIER NULL,
    [ComponentState]                              INT              CONSTRAINT [DF_MobileOfflineProfileItemAssociationBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [OverwriteTime]                               DATETIME         CONSTRAINT [DF_MobileOfflineProfileItemAssociationBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [SolutionId]                                  UNIQUEIDENTIFIER CONSTRAINT [DF_MobileOfflineProfileItemAssociationBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [IntroducedVersion]                           NVARCHAR (48)    NULL,
    [ModifiedOn]                                  DATETIME         NULL,
    [ProcessId]                                   UNIQUEIDENTIFIER NULL,
    [SupportingSolutionId]                        UNIQUEIDENTIFIER NULL,
    [PublishedOn]                                 DATETIME         NULL,
    [IsValidated]                                 BIT              CONSTRAINT [DF_MobileOfflineProfileItemAssociationBase_IsValidated] DEFAULT ((0)) NOT NULL,
    [RelationshipDisplayName]                     NVARCHAR (200)   NULL,
    [RelationshipId]                              UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_MobileOfflineProfileItemAssociation] PRIMARY KEY CLUSTERED ([MobileOfflineProfileItemAssociationId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_MobileOfflineProfileItemAssociationBase_MobileOfflineProfileItemAssociationIdUnique] UNIQUE NONCLUSTERED ([MobileOfflineProfileItemAssociationIdUnique] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_MobileOfflineProfileItemAssociationBase_MobileOfflineProfileItemIdRelationshipIdUnique] UNIQUE NONCLUSTERED ([RelationshipId] ASC, [MobileOfflineProfileItemId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[MobileOfflineProfileItemAssociationBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[MobileOfflineProfileItemAssociationBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[MobileOfflineProfileItemAssociationBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[MobileOfflineProfileItemAssociationBase]([MobileOfflineProfileItemAssociationId] ASC) WHERE ([OverwriteTime]=(0) AND [ComponentState]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

