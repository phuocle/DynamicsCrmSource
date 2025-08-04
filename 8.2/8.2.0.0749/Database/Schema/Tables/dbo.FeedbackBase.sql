CREATE TABLE [dbo].[FeedbackBase]
(
[ClosedOn] [datetime] NULL,
[MinRating] [int] NULL,
[ImportSequenceNumber] [int] NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[NormalizedRating] [decimal] (23, 10) NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[MaxRating] [int] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[StateCode] [int] NOT NULL,
[ModifiedOn] [datetime] NULL,
[VersionNumber] [timestamp] NULL,
[CreatedByContact] [uniqueidentifier] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ClosedBy] [uniqueidentifier] NULL,
[OwnerId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_FeedbackBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[Source] [int] NULL,
[CreatedOn] [datetime] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[Rating] [int] NULL,
[StatusCode] [int] NULL,
[RegardingObjectId] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[Comments] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[Title] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[FeedbackId] [uniqueidentifier] NOT NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[CreatedOnBehalfByContact] [uniqueidentifier] NULL,
[RegardingObjectIdName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[RegardingObjectTypeCode] [int] NULL,
[RegardingObjectIdYomiName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[FeedbackBase] ADD CONSTRAINT [PK_FeedbackBase] PRIMARY KEY CLUSTERED  ([FeedbackId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_feedback] ON [dbo].[FeedbackBase] ([OwningBusinessUnit]) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Rating] ON [dbo].[FeedbackBase] ([Rating]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_RegardingObjectId_feedback] ON [dbo].[FeedbackBase] ([RegardingObjectId]) WHERE ([RegardingObjectId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[FeedbackBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[FeedbackBase] ADD CONSTRAINT [lk_contact_feedback_createdby] FOREIGN KEY ([CreatedByContact]) REFERENCES [dbo].[ContactBase] ([ContactId])
GO
ALTER TABLE [dbo].[FeedbackBase] ADD CONSTRAINT [lk_contact_feedback_createdonbehalfby] FOREIGN KEY ([CreatedOnBehalfByContact]) REFERENCES [dbo].[ContactBase] ([ContactId])
GO
ALTER TABLE [dbo].[FeedbackBase] ADD CONSTRAINT [owner_feedback] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[FeedbackBase] ADD CONSTRAINT [transactioncurrency_feedback] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
