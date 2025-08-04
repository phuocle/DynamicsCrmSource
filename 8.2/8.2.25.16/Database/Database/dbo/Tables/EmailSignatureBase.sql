CREATE TABLE [dbo].[EmailSignatureBase] (
    [CreatedOnBehalfBy]    UNIQUEIDENTIFIER NULL,
    [OverwriteTime]        DATETIME         CONSTRAINT [DF_EmailSignatureBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [OwnerId]              UNIQUEIDENTIFIER CONSTRAINT [DF_EmailSignatureBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [PresentationXml]      NVARCHAR (MAX)   NULL,
    [ModifiedOnBehalfBy]   UNIQUEIDENTIFIER NULL,
    [OwningBusinessUnit]   UNIQUEIDENTIFIER NULL,
    [CreatedBy]            UNIQUEIDENTIFIER NULL,
    [Body]                 NVARCHAR (MAX)   NULL,
    [IsCustomizable]       BIT              CONSTRAINT [DF_EmailSignatureBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [ImportSequenceNumber] INT              NULL,
    [IsDefault]            BIT              CONSTRAINT [DF_EmailSignatureBase_IsDefault] DEFAULT ((0)) NULL,
    [ModifiedBy]           UNIQUEIDENTIFIER NULL,
    [Title]                NVARCHAR (200)   NULL,
    [ModifiedOn]           DATETIME         NULL,
    [OverriddenCreatedOn]  DATETIME         NULL,
    [LanguageCode]         INT              NULL,
    [EmailSignatureId]     UNIQUEIDENTIFIER NOT NULL,
    [IsPersonal]           BIT              CONSTRAINT [DF_EmailSignatureBase_IsPersonal] DEFAULT ((0)) NULL,
    [CreatedOn]            DATETIME         NULL,
    [MimeType]             NVARCHAR (256)   NULL,
    [Description]          NVARCHAR (MAX)   NULL,
    [GenerationTypeCode]   INT              CONSTRAINT [DF_EmailSignatureBase_GenerationTypeCode] DEFAULT ((0)) NULL,
    [ComponentState]       INT              CONSTRAINT [DF_EmailSignatureBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [OwnerIdType]          INT              CONSTRAINT [DF_EmailSignatureBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_EmailSignature] PRIMARY KEY CLUSTERED ([EmailSignatureId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[EmailSignatureBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_emailsignatures]
    ON [dbo].[EmailSignatureBase]([OwningBusinessUnit] ASC) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Title]
    ON [dbo].[EmailSignatureBase]([Title] ASC, [LanguageCode] ASC) WITH (FILLFACTOR = 80);

