CREATE TABLE [dbo].[SalesLiteratureBase]
(
[SalesLiteratureId] [uniqueidentifier] NOT NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[EmployeeContactId] [uniqueidentifier] NULL,
[SubjectId] [uniqueidentifier] NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[LiteratureTypeCode] [int] NULL,
[Name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[ExpirationDate] [datetime] NULL,
[IsCustomerViewable] [bit] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[KeyWords] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[HasAttachments] [bit] NULL CONSTRAINT [Set_To_Zero145] DEFAULT ((0)),
[ModifiedBy] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NULL,
[ModifiedOn] [datetime] NULL,
[VersionNumber] [timestamp] NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[ImportSequenceNumber] [int] NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ProcessId] [uniqueidentifier] NULL,
[StageId] [uniqueidentifier] NULL,
[EntityImageId] [uniqueidentifier] NULL,
[TraversedPath] [nvarchar] (1250) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[SalesLiteratureBase] ADD CONSTRAINT [cndx_PrimaryKey_SalesLiterature] PRIMARY KEY CLUSTERED  ([SalesLiteratureId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_system_user_sales_literature] ON [dbo].[SalesLiteratureBase] ([EmployeeContactId]) WHERE ([EmployeeContactId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_name] ON [dbo].[SalesLiteratureBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_subject_sales_literature] ON [dbo].[SalesLiteratureBase] ([SubjectId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[SalesLiteratureBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SalesLiteratureBase] ADD CONSTRAINT [subject_sales_literature] FOREIGN KEY ([SubjectId]) REFERENCES [dbo].[SubjectBase] ([SubjectId])
GO
ALTER TABLE [dbo].[SalesLiteratureBase] ADD CONSTRAINT [system_user_sales_literature] FOREIGN KEY ([EmployeeContactId]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[SalesLiteratureBase] ADD CONSTRAINT [TransactionCurrency_SalesLiterature] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
