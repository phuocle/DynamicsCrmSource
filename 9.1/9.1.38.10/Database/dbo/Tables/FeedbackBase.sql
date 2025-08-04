CREATE TABLE [dbo].[FeedbackBase] (
    [CreatedBy]                     UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]             UNIQUEIDENTIFIER NULL,
    [Title]                         NVARCHAR (4000)  NULL,
    [VersionNumber]                 ROWVERSION       NULL,
    [StatusCode]                    INT              NULL,
    [RegardingObjectId]             UNIQUEIDENTIFIER NULL,
    [ClosedBy]                      UNIQUEIDENTIFIER NULL,
    [OwnerId]                       UNIQUEIDENTIFIER CONSTRAINT [DF_FeedbackBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [ImportSequenceNumber]          INT              NULL,
    [ModifiedOn]                    DATETIME         NULL,
    [MinRating]                     INT              NULL,
    [Rating]                        INT              NULL,
    [MaxRating]                     INT              NULL,
    [OwningBusinessUnit]            UNIQUEIDENTIFIER NULL,
    [ExchangeRate]                  DECIMAL (23, 10) NULL,
    [ClosedOn]                      DATETIME         NULL,
    [CreatedByContact]              UNIQUEIDENTIFIER NULL,
    [FeedbackId]                    UNIQUEIDENTIFIER NOT NULL,
    [TransactionCurrencyId]         UNIQUEIDENTIFIER NULL,
    [StateCode]                     INT              NOT NULL,
    [CreatedOnBehalfByContact]      UNIQUEIDENTIFIER NULL,
    [Source]                        INT              NULL,
    [OverriddenCreatedOn]           DATETIME         NULL,
    [ModifiedOnBehalfBy]            UNIQUEIDENTIFIER NULL,
    [CreatedOn]                     DATETIME         NULL,
    [ModifiedBy]                    UNIQUEIDENTIFIER NULL,
    [Comments]                      NVARCHAR (MAX)   NULL,
    [RegardingObjectIdName]         NVARCHAR (4000)  NULL,
    [RegardingObjectTypeCode]       INT              NULL,
    [RegardingObjectIdYomiName]     NVARCHAR (4000)  NULL,
    [NormalizedRating]              AS               ([dbo].[fn_UDF_b75175a8ae034e66b46fdfdb1e85cf6f]([Rating],[MinRating],[MaxRating])),
    [msdyn_ContextObjectId]         UNIQUEIDENTIFIER NULL,
    [msdyn_ContextObjectIdType]     INT              NULL,
    [msdyn_ContextObjectIdName]     NVARCHAR (1000)  NULL,
    [msdyn_ContextObjectIdYomiName] NVARCHAR (1000)  NULL,
    [Title_QF_prefix]               AS               (CONVERT([nvarchar](850),substring([Title],(1),(850)))),
    CONSTRAINT [PK_FeedbackBase] PRIMARY KEY CLUSTERED ([FeedbackId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [lk_contact_feedback_createdby] FOREIGN KEY ([CreatedByContact]) REFERENCES [dbo].[ContactBase] ([ContactId]),
    CONSTRAINT [lk_contact_feedback_createdonbehalfby] FOREIGN KEY ([CreatedOnBehalfByContact]) REFERENCES [dbo].[ContactBase] ([ContactId]),
    CONSTRAINT [owner_feedback] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [transactioncurrency_feedback] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[FeedbackBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[FeedbackBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[FeedbackBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Rating]
    ON [dbo].[FeedbackBase]([Rating] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_RegardingObjectId_feedback]
    ON [dbo].[FeedbackBase]([RegardingObjectId] ASC) WHERE ([RegardingObjectId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_feedback]
    ON [dbo].[FeedbackBase]([OwningBusinessUnit] ASC) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_54BADB53723E4598A60E7ED83CDCE0B3]
    ON [dbo].[FeedbackBase]([FeedbackId] ASC)
    INCLUDE([Title]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_54BADB53723E4598A60E7ED83CDCE0B3]
    ON [dbo].[FeedbackBase]([FeedbackId] ASC)
    INCLUDE([Title], [CreatedOn], [Comments], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Title]
    ON [dbo].[FeedbackBase]([Title_QF_prefix] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

