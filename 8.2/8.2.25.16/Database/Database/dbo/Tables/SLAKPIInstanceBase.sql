CREATE TABLE [dbo].[SLAKPIInstanceBase] (
    [ModifiedOn]              DATETIME         NULL,
    [ExchangeRate]            DECIMAL (23, 10) NULL,
    [CreatedBy]               UNIQUEIDENTIFIER NULL,
    [Description]             NVARCHAR (MAX)   NULL,
    [CreatedOnBehalfBy]       UNIQUEIDENTIFIER NULL,
    [WarningTime]             DATETIME         NULL,
    [FailureTime]             DATETIME         NULL,
    [TransactionCurrencyId]   UNIQUEIDENTIFIER NULL,
    [VersionNumber]           ROWVERSION       NULL,
    [ModifiedOnBehalfBy]      UNIQUEIDENTIFIER NULL,
    [ComputedWarningTime]     DATETIME         NULL,
    [SucceededOn]             DATETIME         NULL,
    [CreatedOn]               DATETIME         NULL,
    [WarningTimeReached]      INT              NULL,
    [OwningBusinessUnit]      UNIQUEIDENTIFIER NULL,
    [Regarding]               UNIQUEIDENTIFIER NULL,
    [OwnerId]                 UNIQUEIDENTIFIER CONSTRAINT [DF_SLAKPIInstanceBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [ModifiedBy]              UNIQUEIDENTIFIER NULL,
    [SLAKPIInstanceId]        UNIQUEIDENTIFIER NOT NULL,
    [Name]                    NVARCHAR (160)   NOT NULL,
    [ComputedFailureTime]     DATETIME         NULL,
    [Status]                  INT              NULL,
    [RegardingObjectTypeCode] INT              NULL,
    [OwnerIdType]             INT              CONSTRAINT [DF_SLAKPIInstanceBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [RegardingIdName]         NVARCHAR (4000)  NULL,
    [RegardingYomiName]       NVARCHAR (4000)  NULL,
    CONSTRAINT [cndx_PrimaryKey_SLAKPIInstanceId] PRIMARY KEY CLUSTERED ([SLAKPIInstanceId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [slakpiinstance_owner] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SLAKPIInstanceBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [cndx_Regarding]
    ON [dbo].[SLAKPIInstanceBase]([Regarding] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[SLAKPIInstanceBase]([Name] ASC) WITH (FILLFACTOR = 80);

