CREATE TABLE [dbo].[EmailSignatureBase] (
    [OverwriteTime]        DATETIME         CONSTRAINT [DF_EmailSignatureBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [GenerationTypeCode]   INT              CONSTRAINT [DF_EmailSignatureBase_GenerationTypeCode] DEFAULT ((0)) NULL,
    [LanguageCode]         INT              NULL,
    [Body]                 NVARCHAR (MAX)   NULL,
    [ImportSequenceNumber] INT              NULL,
    [EmailSignatureId]     UNIQUEIDENTIFIER NOT NULL,
    [PresentationXml]      NVARCHAR (MAX)   NULL,
    [OwnerId]              UNIQUEIDENTIFIER CONSTRAINT [DF_EmailSignatureBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [Description]          NVARCHAR (MAX)   NULL,
    [CreatedOnBehalfBy]    UNIQUEIDENTIFIER NULL,
    [Title]                NVARCHAR (200)   NULL,
    [ModifiedOn]           DATETIME         NULL,
    [CreatedBy]            UNIQUEIDENTIFIER NULL,
    [OwningBusinessUnit]   UNIQUEIDENTIFIER NULL,
    [IsCustomizable]       BIT              CONSTRAINT [DF_EmailSignatureBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [ComponentState]       INT              CONSTRAINT [DF_EmailSignatureBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [MimeType]             NVARCHAR (256)   NULL,
    [ModifiedOnBehalfBy]   UNIQUEIDENTIFIER NULL,
    [CreatedOn]            DATETIME         NULL,
    [IsPersonal]           BIT              CONSTRAINT [DF_EmailSignatureBase_IsPersonal] DEFAULT ((0)) NULL,
    [IsDefault]            BIT              CONSTRAINT [DF_EmailSignatureBase_IsDefault] DEFAULT ((0)) NULL,
    [ModifiedBy]           UNIQUEIDENTIFIER NULL,
    [OverriddenCreatedOn]  DATETIME         NULL,
    [OwnerIdType]          INT              CONSTRAINT [DF_EmailSignatureBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [SafeHtml]             NVARCHAR (MAX)   NULL,
    CONSTRAINT [cndx_PrimaryKey_EmailSignature] PRIMARY KEY CLUSTERED ([EmailSignatureId] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[EmailSignatureBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[EmailSignatureBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[EmailSignatureBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_emailsignatures]
    ON [dbo].[EmailSignatureBase]([OwningBusinessUnit] ASC) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Title]
    ON [dbo].[EmailSignatureBase]([Title] ASC, [LanguageCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_3D0E5109DFE644738A860F8D904FD83C]
    ON [dbo].[EmailSignatureBase]([EmailSignatureId] ASC)
    INCLUDE([Title], [IsPersonal], [LanguageCode]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_3D0E5109DFE644738A860F8D904FD83C]
    ON [dbo].[EmailSignatureBase]([EmailSignatureId] ASC)
    INCLUDE([Title]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_3D0E5109DFE644738A860F8D904FD83C]
    ON [dbo].[EmailSignatureBase]([Title] ASC, [EmailSignatureId] ASC)
    INCLUDE([IsPersonal], [LanguageCode]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

