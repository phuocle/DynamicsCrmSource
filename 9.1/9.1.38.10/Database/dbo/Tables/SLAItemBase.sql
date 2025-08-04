CREATE TABLE [dbo].[SLAItemBase] (
    [RelatedField]          NVARCHAR (100)   NULL,
    [Description]           NVARCHAR (MAX)   NULL,
    [SuccessConditionsXml]  NVARCHAR (MAX)   NULL,
    [OverwriteTime]         DATETIME         CONSTRAINT [DF_SLAItemBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [CreatedOnBehalfBy]     UNIQUEIDENTIFIER NULL,
    [SequenceNumber]        INT              NULL,
    [WarnAfter]             INT              NULL,
    [Name]                  NVARCHAR (160)   NOT NULL,
    [CreatedBy]             UNIQUEIDENTIFIER NULL,
    [TransactionCurrencyId] UNIQUEIDENTIFIER NULL,
    [ExchangeRate]          DECIMAL (23, 10) NULL,
    [FailureAfter]          INT              NULL,
    [SLAItemIdUnique]       UNIQUEIDENTIFIER CONSTRAINT [DF_SLAItemBase_SLAItemIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [WorkflowId]            UNIQUEIDENTIFIER NULL,
    [SLAId]                 UNIQUEIDENTIFIER NULL,
    [SolutionId]            UNIQUEIDENTIFIER CONSTRAINT [DF_SLAItemBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [ModifiedOn]            DATETIME         NULL,
    [ApplicableWhenXml]     NVARCHAR (MAX)   NULL,
    [ModifiedBy]            UNIQUEIDENTIFIER NULL,
    [IsManaged]             BIT              CONSTRAINT [DF_SLAItemBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [SLAItemId]             UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]             DATETIME         NULL,
    [SupportingSolutionId]  UNIQUEIDENTIFIER NULL,
    [VersionNumber]         ROWVERSION       NULL,
    [ComponentState]        INT              CONSTRAINT [DF_SLAItemBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [ModifiedOnBehalfBy]    UNIQUEIDENTIFIER NULL,
    [BusinessHoursId]       UNIQUEIDENTIFIER NULL,
    [AllowPauseResume]      BIT              NULL,
    [actionflowuniquename]  NVARCHAR (4000)  NULL,
    [ActionURL]             NVARCHAR (512)   NULL,
    [ApplicableEntity]      NVARCHAR (100)   NULL,
    [ChangedAttributeList]  NVARCHAR (4000)  NULL,
    CONSTRAINT [cndx_PrimaryKey_SLAItemid] PRIMARY KEY CLUSTERED ([SLAItemId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [calendar_slaitem] FOREIGN KEY ([BusinessHoursId]) REFERENCES [dbo].[CalendarBase] ([CalendarId]),
    CONSTRAINT [UQ_SLAItemBase_SLAItemIdUnique] UNIQUE NONCLUSTERED ([SLAItemIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[SLAItemBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[SLAItemBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [cndx_SLAId]
    ON [dbo].[SLAItemBase]([SLAId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[SLAItemBase]([SLAItemId] ASC) WHERE ([OverwriteTime]=(0) AND [ComponentState]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

