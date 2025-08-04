CREATE TABLE [dbo].[SalesLiteratureBase] (
    [SalesLiteratureId]         UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [Name]                      NVARCHAR (100)   NULL,
    [ProcessId]                 UNIQUEIDENTIFIER NULL,
    [StageId]                   UNIQUEIDENTIFIER NULL,
    [TraversedPath]             NVARCHAR (1250)  NULL,
    [Description]               NVARCHAR (MAX)   NULL,
    [EmployeeContactId]         UNIQUEIDENTIFIER NULL,
    [ExpirationDate]            DATETIME         NULL,
    [HasAttachments]            BIT              CONSTRAINT [DF_SalesLiteratureBase_HasAttachments] DEFAULT ((0)) NULL,
    [IsCustomerViewable]        BIT              NULL,
    [KeyWords]                  NVARCHAR (MAX)   NULL,
    [LiteratureTypeCode]        INT              NULL,
    [SubjectId]                 UNIQUEIDENTIFIER NULL,
    [EntityImageId]             UNIQUEIDENTIFIER NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_SalesLiterature] PRIMARY KEY CLUSTERED ([SalesLiteratureId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [subject_sales_literature] FOREIGN KEY ([SubjectId]) REFERENCES [dbo].[SubjectBase] ([SubjectId]),
    CONSTRAINT [system_user_sales_literature] FOREIGN KEY ([EmployeeContactId]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]),
    CONSTRAINT [TransactionCurrency_SalesLiterature] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[SalesLiteratureBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[SalesLiteratureBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SalesLiteratureBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_system_user_sales_literature]
    ON [dbo].[SalesLiteratureBase]([EmployeeContactId] ASC) WHERE ([EmployeeContactId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_subject_sales_literature]
    ON [dbo].[SalesLiteratureBase]([SubjectId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[SalesLiteratureBase]([Name] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_5E7EA02325574044973B1A84300DD8CC]
    ON [dbo].[SalesLiteratureBase]([SalesLiteratureId] ASC)
    INCLUDE([Name], [SubjectId], [LiteratureTypeCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_5E7EA02325574044973B1A84300DD8CC]
    ON [dbo].[SalesLiteratureBase]([Name] ASC, [SalesLiteratureId] ASC)
    INCLUDE([SubjectId], [LiteratureTypeCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_5E7EA02325574044973B1A84300DD8CC]
    ON [dbo].[SalesLiteratureBase]([SalesLiteratureId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

