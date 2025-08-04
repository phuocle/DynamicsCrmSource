CREATE TABLE [dbo].[GoalRollupQueryBase] (
    [ModifiedOn]                DATETIME         NULL,
    [StateCode]                 INT              NOT NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [QueryEntityType]           INT              NULL,
    [FetchXml]                  NVARCHAR (MAX)   NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [OwnerId]                   UNIQUEIDENTIFIER NOT NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [Name]                      NVARCHAR (100)   NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [StatusCode]                INT              NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [GoalRollupQueryId]         UNIQUEIDENTIFIER NOT NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [CreatedOn]                 DATETIME         NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_GoalRollupQueryBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [PK_GoalRollupQueryBase] PRIMARY KEY CLUSTERED ([GoalRollupQueryId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_goalrollupquery] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]) NOT FOR REPLICATION,
    CONSTRAINT [owner_goalrollupquery] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]) NOT FOR REPLICATION
);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[GoalRollupQueryBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[GoalRollupQueryBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_business_unit_goalrollupquery]
    ON [dbo].[GoalRollupQueryBase]([OwningBusinessUnit] ASC) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[GoalRollupQueryBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[GoalRollupQueryBase]([Name] ASC) WITH (FILLFACTOR = 80);

