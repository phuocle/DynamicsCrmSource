CREATE TABLE [dbo].[GoalRollupQueryBase]
(
[ModifiedOn] [datetime] NULL,
[StateCode] [int] NOT NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[QueryEntityType] [int] NULL,
[FetchXml] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[VersionNumber] [timestamp] NULL,
[OwnerId] [uniqueidentifier] NOT NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[Name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[OverriddenCreatedOn] [datetime] NULL,
[ImportSequenceNumber] [int] NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[StatusCode] [int] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[GoalRollupQueryId] [uniqueidentifier] NOT NULL,
[CreatedBy] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_GoalRollupQueryBase_OwnerIdType] DEFAULT ((8))
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[GoalRollupQueryBase] ADD CONSTRAINT [PK_GoalRollupQueryBase] PRIMARY KEY CLUSTERED  ([GoalRollupQueryId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name] ON [dbo].[GoalRollupQueryBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[GoalRollupQueryBase] ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_business_unit_goalrollupquery] ON [dbo].[GoalRollupQueryBase] ([OwningBusinessUnit]) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[GoalRollupQueryBase] ([StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Sync] ON [dbo].[GoalRollupQueryBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[GoalRollupQueryBase] ADD CONSTRAINT [business_unit_goalrollupquery] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[GoalRollupQueryBase] ADD CONSTRAINT [owner_goalrollupquery] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
