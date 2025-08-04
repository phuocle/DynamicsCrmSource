CREATE TABLE [dbo].[SLABase] (
    [ModifiedBy]             UNIQUEIDENTIFIER NULL,
    [ApplicableFrom]         NVARCHAR (100)   NULL,
    [CreatedOnBehalfBy]      UNIQUEIDENTIFIER NULL,
    [OwningBusinessUnit]     UNIQUEIDENTIFIER NULL,
    [ExchangeRate]           DECIMAL (23, 10) NULL,
    [OwnerId]                UNIQUEIDENTIFIER CONSTRAINT [DF_SLABase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [ChangedAttributeList]   NVARCHAR (500)   NULL,
    [IsDefault]              BIT              CONSTRAINT [DF_SLABase_IsDefault] DEFAULT ((0)) NULL,
    [Description]            NVARCHAR (MAX)   NULL,
    [Name]                   NVARCHAR (160)   NOT NULL,
    [SupportingSolutionId]   UNIQUEIDENTIFIER NULL,
    [CreatedOn]              DATETIME         NULL,
    [SolutionId]             UNIQUEIDENTIFIER CONSTRAINT [DF_SLABase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SLAId]                  UNIQUEIDENTIFIER NOT NULL,
    [TransactionCurrencyId]  UNIQUEIDENTIFIER NULL,
    [ObjectTypeCode]         INT              NULL,
    [CreatedBy]              UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]     UNIQUEIDENTIFIER NULL,
    [StateCode]              INT              NOT NULL,
    [OverwriteTime]          DATETIME         CONSTRAINT [DF_SLABase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [ApplicableFromPickList] INT              NULL,
    [ModifiedOn]             DATETIME         NULL,
    [WorkflowId]             UNIQUEIDENTIFIER NULL,
    [VersionNumber]          ROWVERSION       NULL,
    [BusinessHoursId]        UNIQUEIDENTIFIER NULL,
    [ComponentState]         INT              CONSTRAINT [DF_SLABase_ComponentState] DEFAULT ((0)) NOT NULL,
    [StatusCode]             INT              NULL,
    [SLAIdUnique]            UNIQUEIDENTIFIER CONSTRAINT [DF_SLABase_SLAIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [IsManaged]              BIT              CONSTRAINT [DF_SLABase_IsManaged] DEFAULT ((0)) NOT NULL,
    [OwnerIdType]            INT              CONSTRAINT [DF_SLABase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_SLAid] PRIMARY KEY CLUSTERED ([SLAId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[SLABase]([OwnerId] ASC) WITH (FILLFACTOR = 80);

