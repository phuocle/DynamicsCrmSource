CREATE TABLE [dbo].[ListBase] (
    [ListId]                    UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [OwnerId]                   UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_ListBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [ListName]                  NVARCHAR (128)   NOT NULL,
    [ProcessId]                 UNIQUEIDENTIFIER NULL,
    [StageId]                   UNIQUEIDENTIFIER NULL,
    [TraversedPath]             NVARCHAR (1250)  NULL,
    [Cost]                      MONEY            NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [Cost_Base]                 MONEY            NULL,
    [CreatedFromCode]           INT              NOT NULL,
    [Description]               NVARCHAR (MAX)   NULL,
    [DoNotSendOnOptOut]         BIT              CONSTRAINT [DF_ListBase_DoNotSendOnOptOut] DEFAULT ((1)) NULL,
    [IgnoreInactiveListMembers] BIT              CONSTRAINT [DF_ListBase_IgnoreInactiveListMembers] DEFAULT ((1)) NULL,
    [LastUsedOn]                DATETIME         NULL,
    [LockStatus]                BIT              CONSTRAINT [DF_ListBase_LockStatus] DEFAULT ((0)) NULL,
    [MemberCount]               INT              CONSTRAINT [DF_ListBase_MemberCount] DEFAULT ((0)) NULL,
    [MemberType]                INT              NULL,
    [Purpose]                   NVARCHAR (512)   NULL,
    [Query]                     NVARCHAR (MAX)   NULL,
    [Source]                    NVARCHAR (128)   NULL,
    [StateCode]                 INT              CONSTRAINT [DF_ListBase_StateCode] DEFAULT ((0)) NOT NULL,
    [StatusCode]                INT              CONSTRAINT [DF_ListBase_StatusCode] DEFAULT ((0)) NULL,
    [Type]                      BIT              CONSTRAINT [DF_ListBase_Type] DEFAULT ((0)) NOT NULL,
    [processedMemberCount]      INT              NULL,
    [processFetchXML]           NVARCHAR (MAX)   NULL,
    CONSTRAINT [cndx_PrimaryKey_List] PRIMARY KEY CLUSTERED ([ListId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_list] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_lists] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [transactioncurrency_list] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[ListBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[ListBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ListBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[ListBase]([OwnerId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[ListBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_list]
    ON [dbo].[ListBase]([OwningBusinessUnit] ASC) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_3535C5B5DBBF46AEB860FC9149B60411]
    ON [dbo].[ListBase]([ListName] ASC, [ListId] ASC)
    INCLUDE([Purpose], [Type], [CreatedFromCode], [LastUsedOn], [StateCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_ListName]
    ON [dbo].[ListBase]([ListName] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_3535C5B5DBBF46AEB860FC9149B60411]
    ON [dbo].[ListBase]([ListId] ASC)
    INCLUDE([ListName], [Purpose], [Type], [CreatedFromCode], [LastUsedOn], [StateCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_3535C5B5DBBF46AEB860FC9149B60411]
    ON [dbo].[ListBase]([ListId] ASC)
    INCLUDE([ListName]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

