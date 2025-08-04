CREATE TABLE [dbo].[AccountLeads] (
    [AccountLeadId]             UNIQUEIDENTIFIER CONSTRAINT [DF_AccountLeads_AccountLeadId] DEFAULT (newid()) NOT NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [Name]                      NVARCHAR (100)   NULL,
    [AccountId]                 UNIQUEIDENTIFIER NOT NULL,
    [LeadId]                    UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_AccountLeads] PRIMARY KEY CLUSTERED ([AccountLeadId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [account_leads] FOREIGN KEY ([AccountId]) REFERENCES [dbo].[AccountBase] ([AccountId]),
    CONSTRAINT [lead_accounts] FOREIGN KEY ([LeadId]) REFERENCES [dbo].[LeadBase] ([LeadId]),
    CONSTRAINT [UQ_AccountLeads] UNIQUE NONCLUSTERED ([AccountId] ASC, [LeadId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW)
);


GO
ALTER TABLE [dbo].[AccountLeads] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[AccountLeads]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_lead_accounts]
    ON [dbo].[AccountLeads]([LeadId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);

