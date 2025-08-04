CREATE TABLE [dbo].[InteractionForEmailBase] (
    [CreatedOn]                 DATETIME         NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [EmailInteractionTime]      DATETIME         NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [ImportSequenceNumber]      INT              NULL,
    [EmailInteractionReplyId]   UNIQUEIDENTIFIER NULL,
    [name]                      NVARCHAR (100)   NULL,
    [ModifiedOn]                DATETIME         NULL,
    [statuscode]                INT              NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [OwnerId]                   UNIQUEIDENTIFIER NOT NULL,
    [InteractionUserAgent]      NVARCHAR (1250)  NULL,
    [InteractionForEmailId]     UNIQUEIDENTIFIER NOT NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [InteractionRepliedBy]      NVARCHAR (1250)  NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [InteractionType]           INT              CONSTRAINT [DF_InteractionForEmailBase_InteractionType] DEFAULT ((0)) NOT NULL,
    [statecode]                 INT              NOT NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [InteractionLocation]       NVARCHAR (1250)  NULL,
    [InteractedComponentText]   NVARCHAR (1250)  NULL,
    [InteractionReplyId]        NVARCHAR (1250)  NULL,
    [EmailActivityId]           UNIQUEIDENTIFIER NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_InteractionForEmailBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [InteractionPartyTypecode]  INT              NULL,
    [EmailAddress]              NVARCHAR (1250)  NULL,
    [InteractionPartyId]        UNIQUEIDENTIFIER NULL,
    CONSTRAINT [PK_InteractionForEmailBase] PRIMARY KEY CLUSTERED ([InteractionForEmailId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_interactionforemail] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_interactionforemail] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [TransactionCurrency_InteractionForEmail] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
ALTER TABLE [dbo].[InteractionForEmailBase] SET (LOCK_ESCALATION = DISABLE);


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

