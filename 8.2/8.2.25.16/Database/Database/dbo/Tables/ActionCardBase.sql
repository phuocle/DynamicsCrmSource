CREATE TABLE [dbo].[ActionCardBase] (
    [StartDate]               DATETIME         NOT NULL,
    [ActionCardId]            UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]               DATETIME         NULL,
    [CreatedBy]               UNIQUEIDENTIFIER NULL,
    [ExpiryDate]              DATETIME         NOT NULL,
    [ModifiedOn]              DATETIME         NULL,
    [Data]                    NVARCHAR (MAX)   NULL,
    [CardType]                INT              NOT NULL,
    [ReferenceTokens]         NVARCHAR (MAX)   NULL,
    [VersionNumber]           ROWVERSION       NULL,
    [Visibility]              BIT              CONSTRAINT [DF_ActionCardBase_Visibility] DEFAULT ((0)) NULL,
    [ImportSequenceNumber]    INT              NULL,
    [ModifiedOnBehalfBy]      UNIQUEIDENTIFIER NULL,
    [RecordId]                UNIQUEIDENTIFIER NULL,
    [OwnerId]                 UNIQUEIDENTIFIER CONSTRAINT [DF_ActionCardBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [ExchangeRate]            DECIMAL (23, 10) NULL,
    [RegardingObjectId]       UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]       UNIQUEIDENTIFIER NULL,
    [TransactionCurrencyId]   UNIQUEIDENTIFIER NULL,
    [Priority]                INT              CONSTRAINT [DF_ActionCardBase_Priority] DEFAULT ((0)) NOT NULL,
    [State]                   INT              CONSTRAINT [DF_ActionCardBase_State] DEFAULT ((0)) NOT NULL,
    [ModifiedBy]              UNIQUEIDENTIFIER NULL,
    [OwningBusinessUnit]      UNIQUEIDENTIFIER NULL,
    [Description]             NVARCHAR (MAX)   NULL,
    [Source]                  INT              CONSTRAINT [DF_ActionCardBase_Source] DEFAULT ((1)) NOT NULL,
    [CardTypeId]              UNIQUEIDENTIFIER NOT NULL,
    [Title]                   NVARCHAR (200)   NULL,
    [OverriddenCreatedOn]     DATETIME         NULL,
    [OwnerIdType]             INT              CONSTRAINT [DF_ActionCardBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [RecordIdObjectTypeCode]  INT              NULL,
    [RecordIdName]            NVARCHAR (400)   NULL,
    [RegardingObjectTypeCode] INT              NULL,
    [RegardingObjectIdName]   NVARCHAR (4000)  NULL,
    CONSTRAINT [ndx_PrimaryKey_ActionCard] PRIMARY KEY NONCLUSTERED ([ActionCardId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_actioncards] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_actioncards] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [transactioncurrency_actioncard] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[ActionCardBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_State]
    ON [dbo].[ActionCardBase]([State] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_cover]
    ON [dbo].[ActionCardBase]([Priority] ASC, [ExpiryDate] ASC, [StartDate] ASC, [State] ASC, [CardType] ASC, [RegardingObjectId] ASC, [RegardingObjectTypeCode] ASC)
    INCLUDE([OwnerId], [ReferenceTokens], [Data], [CardTypeId], [ActionCardId]) WHERE ([State]=(0)) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_RegardingObject]
    ON [dbo].[ActionCardBase]([RegardingObjectId] ASC, [RegardingObjectTypeCode] ASC) WITH (FILLFACTOR = 80);

