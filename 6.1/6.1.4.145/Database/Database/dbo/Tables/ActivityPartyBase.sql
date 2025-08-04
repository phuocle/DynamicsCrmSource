CREATE TABLE [dbo].[ActivityPartyBase] (
    [ActivityId]            UNIQUEIDENTIFIER NOT NULL,
    [ActivityPartyId]       UNIQUEIDENTIFIER NOT NULL,
    [PartyId]               UNIQUEIDENTIFIER NULL,
    [PartyObjectTypeCode]   INT              NOT NULL,
    [ParticipationTypeMask] INT              NOT NULL,
    [AddressUsed]           NVARCHAR (200)   NULL,
    [PartyIdName]           NVARCHAR (4000)  NULL,
    [Effort]                FLOAT (53)       NULL,
    [ExchangeEntryId]       NVARCHAR (1024)  NULL,
    [ResourceSpecId]        UNIQUEIDENTIFIER NULL,
    [VersionNumber]         ROWVERSION       NULL,
    [DoNotPhone]            BIT              NULL,
    [ScheduledEnd]          DATETIME         NULL,
    [ScheduledStart]        DATETIME         NULL,
    [IsPartyDeleted]        BIT              CONSTRAINT [DF_ActivityPartyBase_IsPartyDeleted] DEFAULT ((0)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_ActivityParty] PRIMARY KEY CLUSTERED ([ActivityPartyId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [activitypointer_activity_parties] FOREIGN KEY ([ActivityId]) REFERENCES [dbo].[ActivityPointerBase] ([ActivityId]) NOT FOR REPLICATION
);


GO
CREATE NONCLUSTERED INDEX [fndx_UnresolvedParty]
    ON [dbo].[ActivityPartyBase]([AddressUsed] ASC, [PartyId] ASC, [ActivityId] ASC) WHERE ([PartyId] IS NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_ActivityPartyResourceSpec]
    ON [dbo].[ActivityPartyBase]([ResourceSpecId] ASC) WHERE ([ResourceSpecId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Cover]
    ON [dbo].[ActivityPartyBase]([AddressUsed] ASC, [PartyObjectTypeCode] ASC, [ParticipationTypeMask] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_ActivityId]
    ON [dbo].[ActivityPartyBase]([ActivityId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ActivityPartyBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_MyActivities]
    ON [dbo].[ActivityPartyBase]([PartyId] ASC, [ActivityId] ASC, [ParticipationTypeMask] ASC, [ScheduledStart] ASC, [ScheduledEnd] ASC)
    INCLUDE([PartyObjectTypeCode]) WITH (FILLFACTOR = 80);

