CREATE TABLE [dbo].[InteractionForEmailBase] (
    [InteractionUserAgent]      NVARCHAR (1250)  NULL,
    [InteractedComponentText]   NVARCHAR (1250)  NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [EmailActivityId]           UNIQUEIDENTIFIER NULL,
    [CreatedOn]                 DATETIME         NULL,
    [statecode]                 INT              NOT NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [statuscode]                INT              NULL,
    [InteractionType]           INT              CONSTRAINT [DF_InteractionForEmailBase_InteractionType] DEFAULT ((0)) NOT NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [InteractionReplyId]        NVARCHAR (1250)  NULL,
    [InteractionRepliedBy]      NVARCHAR (1250)  NULL,
    [name]                      NVARCHAR (100)   NULL,
    [InteractionForEmailId]     UNIQUEIDENTIFIER NOT NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [ImportSequenceNumber]      INT              NULL,
    [EmailInteractionReplyId]   UNIQUEIDENTIFIER NULL,
    [EmailInteractionTime]      DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [InteractionLocation]       NVARCHAR (1250)  NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ModifiedOn]                DATETIME         NULL,
    [OwnerId]                   UNIQUEIDENTIFIER NOT NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_InteractionForEmailBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [PK_InteractionForEmailBase] PRIMARY KEY CLUSTERED ([InteractionForEmailId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_interactionforemail] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_interactionforemail] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [TransactionCurrency_InteractionForEmail] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[InteractionForEmailBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[InteractionForEmailBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[InteractionForEmailBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[InteractionForEmailBase]([name] ASC) WITH (FILLFACTOR = 80);

