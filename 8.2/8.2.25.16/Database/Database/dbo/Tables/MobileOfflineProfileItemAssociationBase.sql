CREATE TABLE [dbo].[MobileOfflineProfileItemAssociationBase] (
    [Name]                                        NVARCHAR (200)   NULL,
    [ProfileItemAssociationEntityFilter]          NVARCHAR (MAX)   NULL,
    [VersionNumber]                               ROWVERSION       NULL,
    [StageId]                                     UNIQUEIDENTIFIER NULL,
    [IsManaged]                                   BIT              CONSTRAINT [DF_MobileOfflineProfileItemAssociationBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [OverwriteTime]                               DATETIME         CONSTRAINT [DF_MobileOfflineProfileItemAssociationBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [CreatedOn]                                   DATETIME         NULL,
    [PublishedOn]                                 DATETIME         NULL,
    [SupportingSolutionId]                        UNIQUEIDENTIFIER NULL,
    [TraversedPath]                               NVARCHAR (1250)  NULL,
    [MobileOfflineProfileItemAssociationIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_MobileOfflineProfileItemAssociationBase_MobileOfflineProfileItemAssociationIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [MobileOfflineProfileItemId]                  UNIQUEIDENTIFIER NULL,
    [ComponentState]                              INT              CONSTRAINT [DF_MobileOfflineProfileItemAssociationBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [IsValidated]                                 BIT              CONSTRAINT [DF_MobileOfflineProfileItemAssociationBase_IsValidated] DEFAULT ((0)) NOT NULL,
    [RelationshipName]                            NVARCHAR (200)   NULL,
    [RelationshipData]                            NVARCHAR (MAX)   NULL,
    [SolutionId]                                  UNIQUEIDENTIFIER CONSTRAINT [DF_MobileOfflineProfileItemAssociationBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [CreatedOnBehalfBy]                           UNIQUEIDENTIFIER NULL,
    [IntroducedVersion]                           NVARCHAR (48)    NULL,
    [ModifiedBy]                                  UNIQUEIDENTIFIER NULL,
    [RelationshipDisplayName]                     NVARCHAR (200)   NULL,
    [ModifiedOnBehalfBy]                          UNIQUEIDENTIFIER NULL,
    [RelationshipId]                              UNIQUEIDENTIFIER NOT NULL,
    [ProcessId]                                   UNIQUEIDENTIFIER NULL,
    [SelectedRelationShipsSchema]                 INT              NULL,
    [OrganizationId]                              UNIQUEIDENTIFIER NOT NULL,
    [MobileOfflineProfileItemAssociationId]       UNIQUEIDENTIFIER NOT NULL,
    [CreatedBy]                                   UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                                  DATETIME         NULL,
    CONSTRAINT [cndx_PrimaryKey_MobileOfflineProfileItemAssociation] PRIMARY KEY CLUSTERED ([MobileOfflineProfileItemAssociationId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_MobileOfflineProfileItemAssociationBase_MobileOfflineProfileItemAssociationIdUnique] UNIQUE NONCLUSTERED ([MobileOfflineProfileItemAssociationIdUnique] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_MobileOfflineProfileItemAssociationBase_MobileOfflineProfileItemIdRelationshipIdUnique] UNIQUE NONCLUSTERED ([RelationshipId] ASC, [MobileOfflineProfileItemId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[MobileOfflineProfileItemAssociationBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);

