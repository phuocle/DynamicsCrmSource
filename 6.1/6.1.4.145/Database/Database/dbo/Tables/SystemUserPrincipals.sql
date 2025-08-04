CREATE TABLE [dbo].[SystemUserPrincipals] (
    [SystemUserPrincipalId] UNIQUEIDENTIFIER CONSTRAINT [DF_SystemUserPrincipals_SystemUserPrincipalId] DEFAULT (newid()) NOT NULL,
    [VersionNumber]         ROWVERSION       NULL,
    [PrincipalId]           UNIQUEIDENTIFIER NOT NULL,
    [SystemUserId]          UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [ndx_PrimaryKey_SystemUserPrincipals] PRIMARY KEY NONCLUSTERED ([SystemUserPrincipalId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [sup_principalid_systemuser] FOREIGN KEY ([SystemUserId]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]) NOT FOR REPLICATION
);


GO
CREATE UNIQUE CLUSTERED INDEX [cndx_SystemUserPrincipals]
    ON [dbo].[SystemUserPrincipals]([SystemUserId] ASC, [PrincipalId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SystemUserPrincipals]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_PrincipalIdSystemUser]
    ON [dbo].[SystemUserPrincipals]([PrincipalId] ASC)
    INCLUDE([SystemUserId]) WITH (FILLFACTOR = 80);

