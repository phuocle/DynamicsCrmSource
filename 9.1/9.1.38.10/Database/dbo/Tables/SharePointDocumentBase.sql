CREATE TABLE [dbo].[SharePointDocumentBase] (
    [AbsoluteUrl]               NVARCHAR (200)   NULL,
    [AppModifiedBy]             NVARCHAR (200)   NULL,
    [Author]                    NVARCHAR (2000)  NULL,
    [Edit]                      NVARCHAR (200)   NULL,
    [LocationName]              NVARCHAR (2000)  NULL,
    [AppCreatedBy]              NVARCHAR (200)   NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [CopySource]                NVARCHAR (200)   NULL,
    [FileType]                  NVARCHAR (200)   NULL,
    [CheckInComment]            NVARCHAR (200)   NULL,
    [IsRecursiveFetch]          BIT              CONSTRAINT [DF_SharePointDocumentBase_IsRecursiveFetch] DEFAULT ((1)) NULL,
    [EditUrl]                   NVARCHAR (200)   NULL,
    [ContentType]               NVARCHAR (200)   NULL,
    [DocumentId]                INT              NULL,
    [ContentTypeId]             INT              NULL,
    [ModifiedOn]                DATETIME         NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NOT NULL,
    [ChildFolderCount]          INT              NULL,
    [CheckedOutTo]              NVARCHAR (200)   NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [IsCheckedOut]              BIT              CONSTRAINT [DF_SharePointDocumentBase_IsCheckedOut] DEFAULT ((0)) NULL,
    [SharePointCreatedOn]       DATETIME         NULL,
    [Title]                     NVARCHAR (2000)  NULL,
    [DocumentLocationType]      INT              NULL,
    [CreatedOn]                 DATETIME         NULL,
    [ReadUrl]                   NVARCHAR (200)   NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ChildItemCount]            INT              NULL,
    [Version]                   NVARCHAR (200)   NULL,
    [SharePointDocumentId]      UNIQUEIDENTIFIER NOT NULL,
    [LocationId]                NVARCHAR (2000)  NULL,
    [BusinessUnitId]            UNIQUEIDENTIFIER NULL,
    [Modified]                  DATETIME         NULL,
    [ServiceType]               INT              NULL,
    [FullName]                  NVARCHAR (160)   NULL,
    [SharePointModifiedBy]      NVARCHAR (200)   NULL,
    [IconClassName]             NVARCHAR (160)   NULL,
    [IsFolder]                  BIT              CONSTRAINT [DF_SharePointDocumentBase_IsFolder] DEFAULT ((0)) NULL,
    [FileSize]                  INT              NULL,
    [RegardingObjectId]         UNIQUEIDENTIFIER NULL,
    [OwnerId]                   UNIQUEIDENTIFIER CONSTRAINT [DF_SharePointDocumentBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [RelativeLocation]          NVARCHAR (200)   NULL,
    [RegardingObjectIdName]     NVARCHAR (4000)  NULL,
    [RegardingObjectTypeCode]   INT              NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_SharePointDocumentBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [RegardingObjectIdYomiName] NVARCHAR (4000)  NULL,
    CONSTRAINT [ndx_PrimaryKey_SharePointDocument] PRIMARY KEY CLUSTERED ([SharePointDocumentId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_sharepointdocument] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [business_unit_sharepointdocument2] FOREIGN KEY ([BusinessUnitId]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_sharepointdocument] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [TransactionCurrency_SharePointDocument] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
ALTER TABLE [dbo].[SharePointDocumentBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_QuickFind_SharePointDocument]
    ON [dbo].[SharePointDocumentBase]([LocationId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_regardingobjectid]
    ON [dbo].[SharePointDocumentBase]([RegardingObjectId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_A5B008AC07D9455485092C05767BFF55]
    ON [dbo].[SharePointDocumentBase]([RelativeLocation] ASC, [SharePointDocumentId] ASC)
    INCLUDE([FullName], [DocumentId], [LocationId], [Title], [Author], [Modified], [SharePointCreatedOn], [SharePointModifiedBy], [ReadUrl], [EditUrl], [FileType], [IsCheckedOut], [AbsoluteUrl], [IconClassName]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_A5B008AC07D9455485092C05767BFF55]
    ON [dbo].[SharePointDocumentBase]([SharePointDocumentId] ASC)
    INCLUDE([RelativeLocation], [FullName], [DocumentId], [LocationId], [Title], [Author], [Modified], [SharePointCreatedOn], [SharePointModifiedBy], [ReadUrl], [EditUrl], [FileType], [IsCheckedOut], [AbsoluteUrl], [IconClassName]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_A5B008AC07D9455485092C05767BFF55]
    ON [dbo].[SharePointDocumentBase]([SharePointDocumentId] ASC)
    INCLUDE([LocationId]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

