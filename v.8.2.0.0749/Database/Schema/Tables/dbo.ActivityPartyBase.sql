CREATE TABLE [dbo].[ActivityPartyBase]
(
[ActivityId] [uniqueidentifier] NOT NULL,
[ActivityPartyId] [uniqueidentifier] NOT NULL,
[PartyId] [uniqueidentifier] NULL,
[PartyObjectTypeCode] [int] NOT NULL,
[ParticipationTypeMask] [int] NOT NULL,
[AddressUsed] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[PartyIdName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[Effort] [float] NULL,
[ExchangeEntryId] [nvarchar] (1024) COLLATE Latin1_General_CI_AI NULL,
[ResourceSpecId] [uniqueidentifier] NULL,
[VersionNumber] [timestamp] NULL,
[DoNotPhone] [bit] NULL,
[ScheduledEnd] [datetime] NULL,
[ScheduledStart] [datetime] NULL,
[IsPartyDeleted] [bit] NOT NULL CONSTRAINT [DF_ActivityPartyBase_IsPartyDeleted] DEFAULT ((0)),
[AddressUsedEmailColumnNumber] [int] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ActivityPartyBase] ADD CONSTRAINT [cndx_PrimaryKey_ActivityParty] PRIMARY KEY CLUSTERED  ([ActivityPartyId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_ActivityId] ON [dbo].[ActivityPartyBase] ([ActivityId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_UnresolvedParty] ON [dbo].[ActivityPartyBase] ([AddressUsed], [PartyId], [ActivityId]) WHERE ([PartyId] IS NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Cover] ON [dbo].[ActivityPartyBase] ([AddressUsed], [PartyObjectTypeCode], [ParticipationTypeMask]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_MyActivities] ON [dbo].[ActivityPartyBase] ([PartyId], [ActivityId], [ParticipationTypeMask], [ScheduledStart], [ScheduledEnd]) INCLUDE ([PartyObjectTypeCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_UpdateAddressUsed] ON [dbo].[ActivityPartyBase] ([PartyId], [PartyObjectTypeCode]) WHERE ([PartyId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_ActivityPartyResourceSpec] ON [dbo].[ActivityPartyBase] ([ResourceSpecId]) WHERE ([ResourceSpecId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ActivityPartyBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ActivityPartyBase] ADD CONSTRAINT [activitypointer_activity_parties] FOREIGN KEY ([ActivityId]) REFERENCES [dbo].[ActivityPointerBase] ([ActivityId])
GO
