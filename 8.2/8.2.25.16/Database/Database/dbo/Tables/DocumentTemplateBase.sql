CREATE TABLE [dbo].[DocumentTemplateBase] (
    [CreatedBy]                UNIQUEIDENTIFIER NULL,
    [Content]                  VARCHAR (MAX)    NOT NULL,
    [ModifiedOnBehalfBy]       UNIQUEIDENTIFIER NULL,
    [Name]                     NVARCHAR (256)   NOT NULL,
    [ModifiedBy]               UNIQUEIDENTIFIER NULL,
    [CreatedOn]                DATETIME         NULL,
    [AssociatedEntityTypeCode] INT              NULL,
    [CreatedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [DocumentType]             INT              NOT NULL,
    [DocumentTemplateId]       UNIQUEIDENTIFIER NOT NULL,
    [ModifiedOn]               DATETIME         NULL,
    [VersionNumber]            ROWVERSION       NULL,
    [ClientData]               VARCHAR (MAX)    NULL,
    [LanguageCode]             INT              CONSTRAINT [DF_DocumentTemplateBase_LanguageCode] DEFAULT ((1033)) NOT NULL,
    [Description]              NVARCHAR (MAX)   NULL,
    [OrganizationId]           UNIQUEIDENTIFIER NOT NULL,
    [Status]                   BIT              CONSTRAINT [DF_DocumentTemplateBase_Status] DEFAULT ((0)) NULL,
    CONSTRAINT [cndx_PrimaryKey_DocumentTemplate] PRIMARY KEY CLUSTERED ([DocumentTemplateId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[DocumentTemplateBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_Document_Type]
    ON [dbo].[DocumentTemplateBase]([DocumentType] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_Document_Name]
    ON [dbo].[DocumentTemplateBase]([Name] ASC) WITH (FILLFACTOR = 80);

