CREATE TABLE [dbo].[WizardAccessPrivilegeBase] (
    [ModifiedBy]              UNIQUEIDENTIFIER NULL,
    [PrivilegeName]           NVARCHAR (100)   NOT NULL,
    [OrganizationId]          UNIQUEIDENTIFIER NOT NULL,
    [WebWizardId]             UNIQUEIDENTIFIER NOT NULL,
    [ModifiedOn]              DATETIME         NULL,
    [EntityName]              NVARCHAR (100)   NOT NULL,
    [CreatedOn]               DATETIME         NULL,
    [CreatedBy]               UNIQUEIDENTIFIER NULL,
    [WizardAccessPrivilegeId] UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]           ROWVERSION       NULL,
    [CreatedOnBehalfBy]       UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]      UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_primarykey_wizardaccessarivilege] PRIMARY KEY CLUSTERED ([WizardAccessPrivilegeId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [lk_wizardaccessprivilege_webwizardid] FOREIGN KEY ([WebWizardId]) REFERENCES [dbo].[WebWizardBase] ([WebWizardId]) NOT FOR REPLICATION
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[WizardAccessPrivilegeBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_wizardaccessprivilege_webwizardid]
    ON [dbo].[WizardAccessPrivilegeBase]([WebWizardId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_EntityName]
    ON [dbo].[WizardAccessPrivilegeBase]([EntityName] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_entityname_privilegename_wizardaccessarivilege]
    ON [dbo].[WizardAccessPrivilegeBase]([WebWizardId] ASC, [EntityName] ASC, [PrivilegeName] ASC) WITH (FILLFACTOR = 80);

