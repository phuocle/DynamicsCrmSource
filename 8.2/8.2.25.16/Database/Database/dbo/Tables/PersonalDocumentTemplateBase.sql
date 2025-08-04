CREATE TABLE [dbo].[PersonalDocumentTemplateBase] (
    [Status]                     BIT              CONSTRAINT [DF_PersonalDocumentTemplateBase_Status] DEFAULT ((0)) NULL,
    [AssociatedEntityTypeCode]   INT              NULL,
    [CreatedBy]                  UNIQUEIDENTIFIER NULL,
    [CreatedOn]                  DATETIME         NULL,
    [Content]                    VARCHAR (MAX)    NOT NULL,
    [Description]                NVARCHAR (MAX)   NULL,
    [ClientData]                 VARCHAR (MAX)    NULL,
    [Name]                       NVARCHAR (256)   NOT NULL,
    [ModifiedOn]                 DATETIME         NULL,
    [DocumentType]               INT              NOT NULL,
    [LanguageCode]               INT              CONSTRAINT [DF_PersonalDocumentTemplateBase_LanguageCode] DEFAULT ((1033)) NOT NULL,
    [PersonalDocumentTemplateId] UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]              ROWVERSION       NULL,
    [OwningBusinessUnit]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                 UNIQUEIDENTIFIER NULL,
    [OwnerId]                    UNIQUEIDENTIFIER CONSTRAINT [DF_PersonalDocumentTemplateBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [CreatedOnBehalfBy]          UNIQUEIDENTIFIER NULL,
    [OwnerIdType]                INT              CONSTRAINT [DF_PersonalDocumentTemplateBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_PersonalDocumentTemplate] PRIMARY KEY CLUSTERED ([PersonalDocumentTemplateId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[PersonalDocumentTemplateBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[PersonalDocumentTemplateBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_PersonalDocument_Name]
    ON [dbo].[PersonalDocumentTemplateBase]([Name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_PersonalDocument_Type]
    ON [dbo].[PersonalDocumentTemplateBase]([DocumentType] ASC) WITH (FILLFACTOR = 80);

