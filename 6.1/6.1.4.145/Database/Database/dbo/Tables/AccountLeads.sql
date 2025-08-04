CREATE TABLE [dbo].[AccountLeads] (
    [AccountId]     UNIQUEIDENTIFIER NOT NULL,
    [LeadId]        UNIQUEIDENTIFIER NOT NULL,
    [AccountLeadId] UNIQUEIDENTIFIER CONSTRAINT [DF_AccountLeads_AccountLeadId] DEFAULT (newid()) NOT NULL,
    [VersionNumber] ROWVERSION       NULL,
    CONSTRAINT [cndx_PrimaryKey_AccountLeads] PRIMARY KEY CLUSTERED ([AccountLeadId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [account_leads] FOREIGN KEY ([AccountId]) REFERENCES [dbo].[AccountBase] ([AccountId]) NOT FOR REPLICATION,
    CONSTRAINT [lead_accounts] FOREIGN KEY ([LeadId]) REFERENCES [dbo].[LeadBase] ([LeadId]) NOT FOR REPLICATION,
    CONSTRAINT [UQ_AccountLeads] UNIQUE NONCLUSTERED ([AccountId] ASC, [LeadId] ASC)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[AccountLeads]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_lead_accounts]
    ON [dbo].[AccountLeads]([LeadId] ASC) WITH (FILLFACTOR = 80);

