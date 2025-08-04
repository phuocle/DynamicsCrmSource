CREATE TABLE [dbo].[AccountLeads]
(
[AccountId] [uniqueidentifier] NOT NULL,
[LeadId] [uniqueidentifier] NOT NULL,
[AccountLeadId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_AccountLeads_AccountLeadId] DEFAULT (newid()),
[VersionNumber] [timestamp] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[AccountLeads] ADD CONSTRAINT [cndx_PrimaryKey_AccountLeads] PRIMARY KEY CLUSTERED  ([AccountLeadId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[AccountLeads] ADD CONSTRAINT [UQ_AccountLeads] UNIQUE NONCLUSTERED  ([AccountId], [LeadId]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_lead_accounts] ON [dbo].[AccountLeads] ([LeadId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[AccountLeads] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[AccountLeads] ADD CONSTRAINT [account_leads] FOREIGN KEY ([AccountId]) REFERENCES [dbo].[AccountBase] ([AccountId])
GO
ALTER TABLE [dbo].[AccountLeads] ADD CONSTRAINT [lead_accounts] FOREIGN KEY ([LeadId]) REFERENCES [dbo].[LeadBase] ([LeadId])
GO
