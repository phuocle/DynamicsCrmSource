CREATE TABLE [dbo].[ListBase] (
    [CreatedOn]                 DATETIME         NULL,
    [ModifiedOn]                DATETIME         NULL,
    [MemberCount]               INT              CONSTRAINT [DF_ListBase_MemberCount] DEFAULT ((0)) NULL,
    [ListName]                  NVARCHAR (128)   NOT NULL,
    [LastUsedOn]                DATETIME         NULL,
    [ListId]                    UNIQUEIDENTIFIER NOT NULL,
    [StateCode]                 INT              CONSTRAINT [DF_ListBase_StateCode] DEFAULT ((0)) NOT NULL,
    [StatusCode]                INT              CONSTRAINT [DF_ListBase_StatusCode] DEFAULT ((0)) NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [DoNotSendOnOptOut]         BIT              CONSTRAINT [DF_ListBase_DoNotSendOnOptOut] DEFAULT ((1)) NULL,
    [Description]               NVARCHAR (MAX)   NULL,
    [Purpose]                   NVARCHAR (512)   NULL,
    [Cost]                      MONEY            NULL,
    [IgnoreInactiveListMembers] BIT              CONSTRAINT [DF_ListBase_IgnoreInactiveListMembers] DEFAULT ((1)) NULL,
    [MemberType]                INT              NULL,
    [Source]                    NVARCHAR (128)   NULL,
    [CreatedFromCode]           INT              NOT NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [LockStatus]                BIT              CONSTRAINT [DF_ListBase_LockStatus] DEFAULT ((0)) NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [ImportSequenceNumber]      INT              NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [Cost_Base]                 MONEY            NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [Type]                      BIT              CONSTRAINT [DF_ListBase_Type] DEFAULT ((0)) NOT NULL,
    [Query]                     NVARCHAR (MAX)   NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [OwnerId]                   UNIQUEIDENTIFIER CONSTRAINT [DF_ListBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_ListBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [StageId]                   UNIQUEIDENTIFIER NULL,
    [ProcessId]                 UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_List] PRIMARY KEY CLUSTERED ([ListId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_list] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]) NOT FOR REPLICATION,
    CONSTRAINT [owner_lists] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]) NOT FOR REPLICATION,
    CONSTRAINT [transactioncurrency_list] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]) NOT FOR REPLICATION
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[ListBase]', @OptionName = N'text in row', @OptionValue = N'7000';


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ListBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[ListBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[ListBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_list]
    ON [dbo].[ListBase]([OwningBusinessUnit] ASC) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_ListName]
    ON [dbo].[ListBase]([ListName] ASC) WITH (FILLFACTOR = 80);

