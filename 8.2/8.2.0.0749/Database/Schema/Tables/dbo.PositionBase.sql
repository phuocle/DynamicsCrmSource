CREATE TABLE [dbo].[PositionBase]
(
[CreatedBy] [uniqueidentifier] NULL,
[ParentPositionId] [uniqueidentifier] NULL,
[Name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[ImportSequenceNumber] [int] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[statecode] [int] NOT NULL,
[ModifiedOn] [datetime] NULL,
[CreatedOn] [datetime] NULL,
[StatusCode] [int] NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[Description] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[OrganizationId] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[PositionId] [uniqueidentifier] NOT NULL,
[VersionNumber] [timestamp] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[PositionBase] ADD CONSTRAINT [PK_PositionBase] PRIMARY KEY CLUSTERED  ([PositionId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Name] ON [dbo].[PositionBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_ParentPositionId] ON [dbo].[PositionBase] ([ParentPositionId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[PositionBase] ([statecode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Sync] ON [dbo].[PositionBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[PositionBase] ADD CONSTRAINT [position_parent_position] FOREIGN KEY ([ParentPositionId]) REFERENCES [dbo].[PositionBase] ([PositionId])
GO
ALTER TABLE [dbo].[PositionBase] ADD CONSTRAINT [transactioncurrency_position] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
