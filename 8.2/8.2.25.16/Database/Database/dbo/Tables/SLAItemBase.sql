CREATE TABLE [dbo].[SLAItemBase] (
    [ApplicableWhenXml]     NVARCHAR (MAX)   NULL,
    [RelatedField]          NVARCHAR (100)   NULL,
    [WorkflowId]            UNIQUEIDENTIFIER NULL,
    [SolutionId]            UNIQUEIDENTIFIER CONSTRAINT [DF_SLAItemBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [Description]           NVARCHAR (MAX)   NULL,
    [SLAItemId]             UNIQUEIDENTIFIER NOT NULL,
    [OverwriteTime]         DATETIME         CONSTRAINT [DF_SLAItemBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [ModifiedOn]            DATETIME         NULL,
    [CreatedOnBehalfBy]     UNIQUEIDENTIFIER NULL,
    [Name]                  NVARCHAR (160)   NOT NULL,
    [FailureAfter]          INT              NULL,
    [CreatedBy]             UNIQUEIDENTIFIER NULL,
    [TransactionCurrencyId] UNIQUEIDENTIFIER NULL,
    [ExchangeRate]          DECIMAL (23, 10) NULL,
    [SuccessConditionsXml]  NVARCHAR (MAX)   NULL,
    [SLAItemIdUnique]       UNIQUEIDENTIFIER CONSTRAINT [DF_SLAItemBase_SLAItemIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [SequenceNumber]        INT              NULL,
    [WarnAfter]             INT              NULL,
    [SLAId]                 UNIQUEIDENTIFIER NULL,
    [ModifiedBy]            UNIQUEIDENTIFIER NULL,
    [IsManaged]             BIT              CONSTRAINT [DF_SLAItemBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [ModifiedOnBehalfBy]    UNIQUEIDENTIFIER NULL,
    [CreatedOn]             DATETIME         NULL,
    [SupportingSolutionId]  UNIQUEIDENTIFIER NULL,
    [VersionNumber]         ROWVERSION       NULL,
    [ComponentState]        INT              CONSTRAINT [DF_SLAItemBase_ComponentState] DEFAULT ((0)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_SLAItemid] PRIMARY KEY CLUSTERED ([SLAItemId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_SLAItemBase_SLAItemIdUnique] UNIQUE NONCLUSTERED ([SLAItemIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE NONCLUSTERED INDEX [cndx_SLAId]
    ON [dbo].[SLAItemBase]([SLAId] ASC) WITH (FILLFACTOR = 80);

