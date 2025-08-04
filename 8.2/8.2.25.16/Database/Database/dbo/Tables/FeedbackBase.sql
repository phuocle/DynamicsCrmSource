CREATE TABLE [dbo].[FeedbackBase] (
    [ClosedOn]                  DATETIME         NULL,
    [MinRating]                 INT              NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [NormalizedRating]          DECIMAL (23, 10) NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [MaxRating]                 INT              NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [StateCode]                 INT              NOT NULL,
    [ModifiedOn]                DATETIME         NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [CreatedByContact]          UNIQUEIDENTIFIER NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ClosedBy]                  UNIQUEIDENTIFIER NULL,
    [OwnerId]                   UNIQUEIDENTIFIER CONSTRAINT [DF_FeedbackBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [Source]                    INT              NULL,
    [CreatedOn]                 DATETIME         NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [Rating]                    INT              NULL,
    [StatusCode]                INT              NULL,
    [RegardingObjectId]         UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [Comments]                  NVARCHAR (MAX)   NULL,
    [Title]                     NVARCHAR (4000)  NULL,
    [FeedbackId]                UNIQUEIDENTIFIER NOT NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfByContact]  UNIQUEIDENTIFIER NULL,
    [RegardingObjectIdName]     NVARCHAR (4000)  NULL,
    [RegardingObjectTypeCode]   INT              NULL,
    [RegardingObjectIdYomiName] NVARCHAR (4000)  NULL,
    CONSTRAINT [PK_FeedbackBase] PRIMARY KEY CLUSTERED ([FeedbackId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [lk_contact_feedback_createdby] FOREIGN KEY ([CreatedByContact]) REFERENCES [dbo].[ContactBase] ([ContactId]),
    CONSTRAINT [lk_contact_feedback_createdonbehalfby] FOREIGN KEY ([CreatedOnBehalfByContact]) REFERENCES [dbo].[ContactBase] ([ContactId]),
    CONSTRAINT [owner_feedback] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [transactioncurrency_feedback] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Rating]
    ON [dbo].[FeedbackBase]([Rating] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[FeedbackBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_feedback]
    ON [dbo].[FeedbackBase]([OwningBusinessUnit] ASC) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_RegardingObjectId_feedback]
    ON [dbo].[FeedbackBase]([RegardingObjectId] ASC) WHERE ([RegardingObjectId] IS NOT NULL) WITH (FILLFACTOR = 80);

