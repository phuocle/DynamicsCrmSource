CREATE TABLE [dbo].[SharePointDocumentBase] (
    [CopySource]                NVARCHAR (200)   NULL,
    [AbsoluteUrl]               NVARCHAR (200)   NULL,
    [Author]                    NVARCHAR (2000)  NULL,
    [Edit]                      NVARCHAR (200)   NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [Version]                   NVARCHAR (200)   NULL,
    [OwnerId]                   UNIQUEIDENTIFIER CONSTRAINT [DF_SharePointDocumentBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [SharePointCreatedOn]       DATETIME         NULL,
    [CheckInComment]            NVARCHAR (200)   NULL,
    [EditUrl]                   NVARCHAR (200)   NULL,
    [ContentType]               NVARCHAR (200)   NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [AppCreatedBy]              NVARCHAR (200)   NULL,
    [ContentTypeId]             INT              NULL,
    [ModifiedOn]                DATETIME         NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [CheckedOutTo]              NVARCHAR (200)   NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [IsCheckedOut]              BIT              CONSTRAINT [DF_SharePointDocumentBase_IsCheckedOut] DEFAULT ((0)) NULL,
    [DocumentId]                INT              NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NOT NULL,
    [ChildFolderCount]          INT              NULL,
    [LocationId]                NVARCHAR (2000)  NULL,
    [CreatedOn]                 DATETIME         NULL,
    [FileType]                  NVARCHAR (200)   NULL,
    [AppModifiedBy]             NVARCHAR (200)   NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [ReadUrl]                   NVARCHAR (200)   NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ChildItemCount]            INT              NULL,
    [SharePointDocumentId]      UNIQUEIDENTIFIER NOT NULL,
    [Modified]                  DATETIME         NULL,
    [FullName]                  NVARCHAR (160)   NULL,
    [SharePointModifiedBy]      NVARCHAR (200)   NULL,
    [BusinessUnitId]            UNIQUEIDENTIFIER NULL,
    [IsFolder]                  BIT              CONSTRAINT [DF_SharePointDocumentBase_IsFolder] DEFAULT ((0)) NULL,
    [Title]                     NVARCHAR (2000)  NULL,
    [FileSize]                  INT              NULL,
    [RegardingObjectId]         UNIQUEIDENTIFIER NULL,
    [RelativeLocation]          NVARCHAR (200)   NULL,
    [RegardingObjectIdName]     NVARCHAR (4000)  NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_SharePointDocumentBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [RegardingObjectTypeCode]   INT              NULL,
    [RegardingObjectIdYomiName] NVARCHAR (4000)  NULL,
    [ServiceType]               INT              NULL,
    [IconClassName]             NVARCHAR (160)   NULL,
    [DocumentLocationType]      INT              NULL,
    [IsRecursiveFetch]          BIT              CONSTRAINT [DF_SharePointDocumentBase_IsRecursiveFetch] DEFAULT ((1)) NULL,
    CONSTRAINT [ndx_PrimaryKey_SharePointDocument] PRIMARY KEY CLUSTERED ([SharePointDocumentId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_sharepointdocument] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [business_unit_sharepointdocument2] FOREIGN KEY ([BusinessUnitId]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_sharepointdocument] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [TransactionCurrency_SharePointDocument] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_QuickFind_SharePointDocument]
    ON [dbo].[SharePointDocumentBase]([LocationId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_regardingobjectid]
    ON [dbo].[SharePointDocumentBase]([RegardingObjectId] ASC) WITH (FILLFACTOR = 80);

