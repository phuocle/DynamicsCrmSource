CREATE TABLE [dbo].[PersonalDocumentTemplateBase] (
    [CreatedOn]                  DATETIME         NULL,
    [CreatedBy]                  UNIQUEIDENTIFIER NULL,
    [PersonalDocumentTemplateId] UNIQUEIDENTIFIER NOT NULL,
    [LanguageCode]               INT              CONSTRAINT [DF_PersonalDocumentTemplateBase_LanguageCode] DEFAULT ((1033)) NOT NULL,
    [DocumentType]               INT              NOT NULL,
    [OwningBusinessUnit]         UNIQUEIDENTIFIER NULL,
    [ClientData]                 VARCHAR (MAX)    NULL,
    [Name]                       NVARCHAR (256)   NOT NULL,
    [OwnerId]                    UNIQUEIDENTIFIER CONSTRAINT [DF_PersonalDocumentTemplateBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [Content]                    VARCHAR (MAX)    NOT NULL,
    [Description]                NVARCHAR (MAX)   NULL,
    [Status]                     BIT              CONSTRAINT [DF_PersonalDocumentTemplateBase_Status] DEFAULT ((0)) NULL,
    [AssociatedEntityTypeCode]   INT              NULL,
    [VersionNumber]              ROWVERSION       NULL,
    [ModifiedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                 DATETIME         NULL,
    [CreatedOnBehalfBy]          UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                 UNIQUEIDENTIFIER NULL,
    [OwnerIdType]                INT              CONSTRAINT [DF_PersonalDocumentTemplateBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_PersonalDocumentTemplate] PRIMARY KEY CLUSTERED ([PersonalDocumentTemplateId] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[PersonalDocumentTemplateBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[PersonalDocumentTemplateBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[PersonalDocumentTemplateBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[PersonalDocumentTemplateBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_PersonalDocument_Type]
    ON [dbo].[PersonalDocumentTemplateBase]([DocumentType] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_PersonalDocument_Name]
    ON [dbo].[PersonalDocumentTemplateBase]([Name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_C732EE5961B444BCA6136DECEAB4D8B5]
    ON [dbo].[PersonalDocumentTemplateBase]([PersonalDocumentTemplateId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_C732EE5961B444BCA6136DECEAB4D8B5]
    ON [dbo].[PersonalDocumentTemplateBase]([PersonalDocumentTemplateId] ASC)
    INCLUDE([Name], [DocumentType], [ModifiedOn], [ModifiedBy], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

