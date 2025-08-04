CREATE TABLE [dbo].[WizardAccessPrivilegeBase] (
    [CreatedOnBehalfBy]       UNIQUEIDENTIFIER NULL,
    [CreatedOn]               DATETIME         NULL,
    [PrivilegeName]           NVARCHAR (100)   NOT NULL,
    [CreatedBy]               UNIQUEIDENTIFIER NULL,
    [EntityName]              NVARCHAR (128)   NOT NULL,
    [ModifiedOnBehalfBy]      UNIQUEIDENTIFIER NULL,
    [OrganizationId]          UNIQUEIDENTIFIER NOT NULL,
    [WebWizardId]             UNIQUEIDENTIFIER NOT NULL,
    [WizardAccessPrivilegeId] UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]           ROWVERSION       NULL,
    [ModifiedOn]              DATETIME         NULL,
    [ModifiedBy]              UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_primarykey_wizardaccessarivilege] PRIMARY KEY CLUSTERED ([WizardAccessPrivilegeId] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[WizardAccessPrivilegeBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_entityname_privilegename_wizardaccessarivilege]
    ON [dbo].[WizardAccessPrivilegeBase]([WebWizardId] ASC, [EntityName] ASC, [PrivilegeName] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[WizardAccessPrivilegeBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_wizardaccessprivilege_webwizardid]
    ON [dbo].[WizardAccessPrivilegeBase]([WebWizardId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_EntityName]
    ON [dbo].[WizardAccessPrivilegeBase]([EntityName] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_F0411F0CA0374D5CA01243F3195004AB]
    ON [dbo].[WizardAccessPrivilegeBase]([EntityName] ASC, [WizardAccessPrivilegeId] ASC)
    INCLUDE([VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_F0411F0CA0374D5CA01243F3195004AB]
    ON [dbo].[WizardAccessPrivilegeBase]([WizardAccessPrivilegeId] ASC)
    INCLUDE([EntityName], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_F0411F0CA0374D5CA01243F3195004AB]
    ON [dbo].[WizardAccessPrivilegeBase]([WizardAccessPrivilegeId] ASC)
    INCLUDE([EntityName]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

