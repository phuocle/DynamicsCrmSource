CREATE TABLE [dbo].[ActivityPartyBase] (
    [PartyId]                      UNIQUEIDENTIFIER NULL,
    [VersionNumber]                ROWVERSION       NULL,
    [ParticipationTypeMask]        INT              NOT NULL,
    [AddressUsedEmailColumnNumber] INT              NULL,
    [ActivityId]                   UNIQUEIDENTIFIER NOT NULL,
    [Effort]                       FLOAT (53)       NULL,
    [ScheduledEnd]                 DATETIME         NULL,
    [ActivityPartyId]              UNIQUEIDENTIFIER NOT NULL,
    [ScheduledStart]               DATETIME         NULL,
    [IsPartyDeleted]               BIT              CONSTRAINT [DF_ActivityPartyBase_IsPartyDeleted] DEFAULT ((0)) NOT NULL,
    [AddressUsed]                  NVARCHAR (200)   NULL,
    [ExchangeEntryId]              NVARCHAR (1024)  NULL,
    [DoNotPhone]                   BIT              NULL,
    [PartyObjectTypeCode]          INT              NOT NULL,
    [PartyIdName]                  NVARCHAR (4000)  NULL,
    [ResourceSpecId]               UNIQUEIDENTIFIER NULL,
    [PartyIdName_QF_prefix]        AS               (CONVERT([nvarchar](850),substring([PartyIdName],(1),(850)))),
    CONSTRAINT [cndx_PrimaryKey_ActivityParty] PRIMARY KEY CLUSTERED ([ActivityPartyId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [activitypointer_activity_parties] FOREIGN KEY ([ActivityId]) REFERENCES [dbo].[ActivityPointerBase] ([ActivityId])
);


GO
ALTER TABLE [dbo].[ActivityPartyBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ActivityPartyBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [fndx_UpdateAddressUsed]
    ON [dbo].[ActivityPartyBase]([PartyId] ASC, [PartyObjectTypeCode] ASC)
    INCLUDE([AddressUsed], [AddressUsedEmailColumnNumber]) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_MyActivities]
    ON [dbo].[ActivityPartyBase]([PartyId] ASC, [ActivityId] ASC, [ParticipationTypeMask] ASC, [ScheduledStart] ASC, [ScheduledEnd] ASC)
    INCLUDE([PartyObjectTypeCode]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_UnresolvedParty]
    ON [dbo].[ActivityPartyBase]([PartyId] ASC, [AddressUsed] ASC)
    INCLUDE([ActivityId], [ParticipationTypeMask], [VersionNumber]) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_ActivityId]
    ON [dbo].[ActivityPartyBase]([ActivityId] ASC)
    INCLUDE([PartyId]) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_Cover]
    ON [dbo].[ActivityPartyBase]([AddressUsed] ASC, [PartyObjectTypeCode] ASC, [ParticipationTypeMask] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_ActivityPartyResourceSpec]
    ON [dbo].[ActivityPartyBase]([ResourceSpecId] ASC) WHERE ([ResourceSpecId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_activityidpartyidname]
    ON [dbo].[ActivityPartyBase]([ActivityId] ASC, [PartyIdName] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_5443EC74796C4B22A6160D352F9451CF]
    ON [dbo].[ActivityPartyBase]([ActivityPartyId] ASC)
    INCLUDE([PartyIdName]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_5443EC74796C4B22A6160D352F9451CF]
    ON [dbo].[ActivityPartyBase]([ActivityPartyId] ASC)
    INCLUDE([PartyId], [PartyIdName], [PartyObjectTypeCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_PartyIdName]
    ON [dbo].[ActivityPartyBase]([PartyIdName_QF_prefix] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

