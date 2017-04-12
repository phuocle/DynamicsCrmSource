CREATE TABLE [dbo].[SystemUserPrincipals]
(
[SystemUserPrincipalId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_SystemUserPrincipals_SystemUserPrincipalId] DEFAULT (newid()),
[VersionNumber] [timestamp] NULL,
[PrincipalId] [uniqueidentifier] NOT NULL,
[SystemUserId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SystemUserPrincipals] ADD CONSTRAINT [ndx_PrimaryKey_SystemUserPrincipals] PRIMARY KEY NONCLUSTERED  ([SystemUserPrincipalId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_PrincipalIdSystemUser] ON [dbo].[SystemUserPrincipals] ([PrincipalId]) INCLUDE ([SystemUserId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE CLUSTERED INDEX [cndx_SystemUserPrincipals] ON [dbo].[SystemUserPrincipals] ([SystemUserId], [PrincipalId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[SystemUserPrincipals] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SystemUserPrincipals] ADD CONSTRAINT [sup_principalid_systemuser] FOREIGN KEY ([SystemUserId]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
