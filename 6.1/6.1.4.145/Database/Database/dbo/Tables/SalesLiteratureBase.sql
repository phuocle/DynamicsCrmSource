CREATE TABLE [dbo].[SalesLiteratureBase] (
    [SalesLiteratureId]         UNIQUEIDENTIFIER NOT NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NOT NULL,
    [EmployeeContactId]         UNIQUEIDENTIFIER NULL,
    [SubjectId]                 UNIQUEIDENTIFIER NULL,
    [Description]               NVARCHAR (MAX)   NULL,
    [LiteratureTypeCode]        INT              NULL,
    [Name]                      NVARCHAR (100)   NULL,
    [ExpirationDate]            DATETIME         NULL,
    [IsCustomerViewable]        BIT              NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [KeyWords]                  NVARCHAR (MAX)   NULL,
    [HasAttachments]            BIT              CONSTRAINT [Set_To_Zero145] DEFAULT ((0)) NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedOn]                 DATETIME         NULL,
    [ModifiedOn]                DATETIME         NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [ImportSequenceNumber]      INT              NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ProcessId]                 UNIQUEIDENTIFIER NULL,
    [StageId]                   UNIQUEIDENTIFIER NULL,
    [EntityImageId]             UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_SalesLiterature] PRIMARY KEY CLUSTERED ([SalesLiteratureId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [subject_sales_literature] FOREIGN KEY ([SubjectId]) REFERENCES [dbo].[SubjectBase] ([SubjectId]) NOT FOR REPLICATION,
    CONSTRAINT [system_user_sales_literature] FOREIGN KEY ([EmployeeContactId]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]) NOT FOR REPLICATION,
    CONSTRAINT [TransactionCurrency_SalesLiterature] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]) NOT FOR REPLICATION
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[SalesLiteratureBase]', @OptionName = N'text in row', @OptionValue = N'7000';


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SalesLiteratureBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_subject_sales_literature]
    ON [dbo].[SalesLiteratureBase]([SubjectId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_system_user_sales_literature]
    ON [dbo].[SalesLiteratureBase]([EmployeeContactId] ASC) WHERE ([EmployeeContactId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[SalesLiteratureBase]([Name] ASC) WITH (FILLFACTOR = 80);

