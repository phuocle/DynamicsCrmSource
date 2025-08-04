CREATE TABLE [dbo].[DocumentTemplateBase] (
    [ModifiedBy]               UNIQUEIDENTIFIER NULL,
    [Name]                     NVARCHAR (256)   NOT NULL,
    [AssociatedEntityTypeCode] INT              NULL,
    [OrganizationId]           UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]            ROWVERSION       NULL,
    [CreatedOn]                DATETIME         NULL,
    [DocumentTemplateId]       UNIQUEIDENTIFIER NOT NULL,
    [CreatedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [CreatedBy]                UNIQUEIDENTIFIER NULL,
    [Description]              NVARCHAR (MAX)   NULL,
    [DocumentType]             INT              NOT NULL,
    [ModifiedOnBehalfBy]       UNIQUEIDENTIFIER NULL,
    [Content]                  VARCHAR (MAX)    NOT NULL,
    [LanguageCode]             INT              CONSTRAINT [DF_DocumentTemplateBase_LanguageCode] DEFAULT ((1033)) NOT NULL,
    [Status]                   BIT              CONSTRAINT [DF_DocumentTemplateBase_Status] DEFAULT ((0)) NULL,
    [ModifiedOn]               DATETIME         NULL,
    [ClientData]               VARCHAR (MAX)    NULL,
    CONSTRAINT [cndx_PrimaryKey_DocumentTemplate] PRIMARY KEY CLUSTERED ([DocumentTemplateId] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[DocumentTemplateBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[DocumentTemplateBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[DocumentTemplateBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_Document_Type]
    ON [dbo].[DocumentTemplateBase]([DocumentType] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_Document_Name]
    ON [dbo].[DocumentTemplateBase]([Name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_062039F960604417B3B7FEB28E5A9C61]
    ON [dbo].[DocumentTemplateBase]([DocumentTemplateId] ASC)
    INCLUDE([Name], [DocumentType], [Status], [ModifiedOn], [ModifiedBy], [Description], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_062039F960604417B3B7FEB28E5A9C61]
    ON [dbo].[DocumentTemplateBase]([DocumentTemplateId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

