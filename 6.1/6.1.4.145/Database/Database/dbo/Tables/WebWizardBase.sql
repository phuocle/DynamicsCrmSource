CREATE TABLE [dbo].[WebWizardBase] (
    [CreatedOn]               DATETIME         NULL,
    [CreatedBy]               UNIQUEIDENTIFIER NULL,
    [VersionNumber]           ROWVERSION       NULL,
    [OrganizationId]          UNIQUEIDENTIFIER NOT NULL,
    [WebWizardId]             UNIQUEIDENTIFIER NOT NULL,
    [Name]                    NVARCHAR (100)   NOT NULL,
    [WizardPageHeight]        INT              NULL,
    [ModifiedBy]              UNIQUEIDENTIFIER NULL,
    [ModifiedOn]              DATETIME         NULL,
    [WizardPageWidth]         INT              NULL,
    [StartPageSequenceNumber] INT              NULL,
    [AccessPrivileges]        NVARCHAR (1024)  NULL,
    [TitleResourceString]     NVARCHAR (100)   NOT NULL,
    [IsStaticPageSequence]    BIT              NOT NULL,
    [ModifiedOnBehalfBy]      UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]       UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_primarykey_webwizard] PRIMARY KEY CLUSTERED ([WebWizardId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[WebWizardBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[WebWizardBase]([Name] ASC) WITH (FILLFACTOR = 80);

