CREATE TABLE [dbo].[ActionCardBase] (
    [OwningBusinessUnit]               UNIQUEIDENTIFIER NULL,
    [RecordIdObjectTypeCode2]          INT              NULL,
    [OwnerId]                          UNIQUEIDENTIFIER CONSTRAINT [DF_ActionCardBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [Title]                            NVARCHAR (200)   NULL,
    [Description]                      NVARCHAR (MAX)   NULL,
    [VersionNumber]                    ROWVERSION       NULL,
    [Data]                             NVARCHAR (MAX)   NULL,
    [RegardingObjectId]                UNIQUEIDENTIFIER NULL,
    [Source]                           INT              CONSTRAINT [DF_ActionCardBase_Source] DEFAULT ((1)) NOT NULL,
    [ImportSequenceNumber]             INT              NULL,
    [CardType]                         INT              NOT NULL,
    [CreatedOn]                        DATETIME         NULL,
    [OverriddenCreatedOn]              DATETIME         NULL,
    [ModifiedBy]                       UNIQUEIDENTIFIER NULL,
    [TransactionCurrencyId]            UNIQUEIDENTIFIER NULL,
    [RecordId]                         UNIQUEIDENTIFIER NULL,
    [ExchangeRate]                     DECIMAL (23, 10) NULL,
    [CardTypeId]                       UNIQUEIDENTIFIER NOT NULL,
    [CreatedOnBehalfBy]                UNIQUEIDENTIFIER NULL,
    [Priority]                         INT              CONSTRAINT [DF_ActionCardBase_Priority] DEFAULT ((0)) NOT NULL,
    [ModifiedOn]                       DATETIME         NULL,
    [ReferenceTokens]                  NVARCHAR (MAX)   NULL,
    [StartDate]                        DATETIME         NOT NULL,
    [ExpiryDate]                       DATETIME         NOT NULL,
    [ModifiedOnBehalfBy]               UNIQUEIDENTIFIER NULL,
    [State]                            INT              CONSTRAINT [DF_ActionCardBase_State] DEFAULT ((0)) NOT NULL,
    [Visibility]                       BIT              CONSTRAINT [DF_ActionCardBase_Visibility] DEFAULT ((0)) NULL,
    [ActionCardId]                     UNIQUEIDENTIFIER NOT NULL,
    [CreatedBy]                        UNIQUEIDENTIFIER NULL,
    [RecordIdName]                     NVARCHAR (400)   NULL,
    [RegardingObjectTypeCode]          INT              NULL,
    [RegardingObjectIdName]            NVARCHAR (4000)  NULL,
    [RecordIdObjectTypeCode]           INT              NULL,
    [OwnerIdType]                      INT              CONSTRAINT [DF_ActionCardBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [ParentRegardingObjectId]          UNIQUEIDENTIFIER NULL,
    [ParentRegardingObjectTypeCode]    INT              NULL,
    [ParentRegardingObjectIdData]      NVARCHAR (MAX)   NULL,
    [msdyn_regardingobjectid]          NVARCHAR (36)    NULL,
    [msdyn_regardingobjectlogicalname] NVARCHAR (128)   NULL,
    [msdyn_actioncardregardingid]      NVARCHAR (36)    NULL,
    CONSTRAINT [ndx_PrimaryKey_ActionCard] PRIMARY KEY NONCLUSTERED ([ActionCardId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_actioncards] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_actioncards] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [transactioncurrency_actioncard] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[ActionCardBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[ActionCardBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE CLUSTERED INDEX [cndx_PrimaryKey_ActionCard]
    ON [dbo].[ActionCardBase]([ActionCardId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[ActionCardBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_cover]
    ON [dbo].[ActionCardBase]([Priority] ASC, [ExpiryDate] ASC, [StartDate] ASC, [State] ASC, [CardType] ASC, [RegardingObjectId] ASC, [RegardingObjectTypeCode] ASC)
    INCLUDE([OwnerId], [ReferenceTokens], [Data], [CardTypeId], [ActionCardId]) WHERE ([State]=(0)) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_State]
    ON [dbo].[ActionCardBase]([State] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_RegardingObject]
    ON [dbo].[ActionCardBase]([RegardingObjectId] ASC, [RegardingObjectTypeCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_visibilitystatestartdatepriority]
    ON [dbo].[ActionCardBase]([Visibility] ASC, [State] ASC, [StartDate] ASC, [Priority] ASC, [ExpiryDate] ASC, [ActionCardId] ASC, [CardType] ASC)
    INCLUDE([Source], [RegardingObjectId], [RegardingObjectTypeCode], [ParentRegardingObjectId], [ParentRegardingObjectTypeCode]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_owneridstateexpirydatecardtype]
    ON [dbo].[ActionCardBase]([OwnerId] ASC, [State] ASC, [ExpiryDate] ASC, [CardType] ASC, [Source] ASC)
    INCLUDE([CardTypeId]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

