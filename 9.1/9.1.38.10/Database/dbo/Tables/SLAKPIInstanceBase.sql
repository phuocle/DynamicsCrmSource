CREATE TABLE [dbo].[SLAKPIInstanceBase] (
    [ExchangeRate]            DECIMAL (23, 10) NULL,
    [ModifiedOnBehalfBy]      UNIQUEIDENTIFIER NULL,
    [OwningBusinessUnit]      UNIQUEIDENTIFIER NULL,
    [CreatedBy]               UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]       UNIQUEIDENTIFIER NULL,
    [WarningTime]             DATETIME         NULL,
    [CreatedOn]               DATETIME         NULL,
    [WarningTimeReached]      INT              NULL,
    [FailureTime]             DATETIME         NULL,
    [VersionNumber]           ROWVERSION       NULL,
    [ComputedWarningTime]     DATETIME         NULL,
    [SucceededOn]             DATETIME         NULL,
    [Regarding]               UNIQUEIDENTIFIER NULL,
    [OwnerId]                 UNIQUEIDENTIFIER CONSTRAINT [DF_SLAKPIInstanceBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [Description]             NVARCHAR (MAX)   NULL,
    [ModifiedBy]              UNIQUEIDENTIFIER NULL,
    [SLAKPIInstanceId]        UNIQUEIDENTIFIER NOT NULL,
    [Name]                    NVARCHAR (160)   NOT NULL,
    [TransactionCurrencyId]   UNIQUEIDENTIFIER NULL,
    [ModifiedOn]              DATETIME         NULL,
    [ComputedFailureTime]     DATETIME         NULL,
    [Status]                  INT              NULL,
    [RegardingObjectTypeCode] INT              NULL,
    [OwnerIdType]             INT              CONSTRAINT [DF_SLAKPIInstanceBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [RegardingIdName]         NVARCHAR (4000)  NULL,
    [RegardingYomiName]       NVARCHAR (4000)  NULL,
    [ApplicableFromValue]     DATETIME         NULL,
    [PausedOn]                DATETIME         NULL,
    [ElapsedTime]             INT              NULL,
    [TerminalStateReached]    BIT              NULL,
    [TerminalStateTime]       DATETIME         NULL,
    [RegardingEntityID]       NVARCHAR (100)   NULL,
    [SuccessCheckedAt]        DATETIME         NULL,
    [LastResumeTime]          DATETIME         NULL,
    CONSTRAINT [cndx_PrimaryKey_SLAKPIInstanceId] PRIMARY KEY CLUSTERED ([SLAKPIInstanceId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [slakpiinstance_owner] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[SLAKPIInstanceBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[SLAKPIInstanceBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SLAKPIInstanceBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [cndx_Regarding]
    ON [dbo].[SLAKPIInstanceBase]([Regarding] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_9EB9401861CE488A9314D1E785E09AC1]
    ON [dbo].[SLAKPIInstanceBase]([Name] ASC, [SLAKPIInstanceId] ASC)
    INCLUDE([Status], [Regarding], [RegardingObjectTypeCode], [RegardingYomiName], [RegardingIdName], [FailureTime], [WarningTime], [SucceededOn], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[SLAKPIInstanceBase]([Name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_9EB9401861CE488A9314D1E785E09AC1]
    ON [dbo].[SLAKPIInstanceBase]([SLAKPIInstanceId] ASC)
    INCLUDE([Name], [Status], [Regarding], [RegardingObjectTypeCode], [RegardingYomiName], [RegardingIdName], [FailureTime], [WarningTime], [SucceededOn], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_9EB9401861CE488A9314D1E785E09AC1]
    ON [dbo].[SLAKPIInstanceBase]([SLAKPIInstanceId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

