CREATE TABLE [dbo].[SLABase] (
    [StateCode]              INT              NOT NULL,
    [ExchangeRate]           DECIMAL (23, 10) NULL,
    [SLAId]                  UNIQUEIDENTIFIER NOT NULL,
    [OwnerId]                UNIQUEIDENTIFIER CONSTRAINT [DF_SLABase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [Description]            NVARCHAR (MAX)   NULL,
    [ModifiedOnBehalfBy]     UNIQUEIDENTIFIER NULL,
    [ChangedAttributeList]   NVARCHAR (500)   NULL,
    [ApplicableFrom]         NVARCHAR (100)   NULL,
    [WorkflowId]             UNIQUEIDENTIFIER NULL,
    [StatusCode]             INT              NULL,
    [Name]                   NVARCHAR (160)   NOT NULL,
    [ModifiedOn]             DATETIME         NULL,
    [AllowPauseResume]       BIT              CONSTRAINT [DF_SLABase_AllowPauseResume] DEFAULT ((0)) NOT NULL,
    [SupportingSolutionId]   UNIQUEIDENTIFIER NULL,
    [IsDefault]              BIT              CONSTRAINT [DF_SLABase_IsDefault] DEFAULT ((0)) NULL,
    [SolutionId]             UNIQUEIDENTIFIER CONSTRAINT [DF_SLABase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [BusinessHoursId]        UNIQUEIDENTIFIER NULL,
    [SLAType]                INT              CONSTRAINT [DF_SLABase_SLAType] DEFAULT ((0)) NOT NULL,
    [OverwriteTime]          DATETIME         CONSTRAINT [DF_SLABase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [CreatedBy]              UNIQUEIDENTIFIER NULL,
    [OwningBusinessUnit]     UNIQUEIDENTIFIER NULL,
    [CreatedOn]              DATETIME         NULL,
    [ApplicableFromPickList] INT              NULL,
    [ObjectTypeCode]         INT              NULL,
    [VersionNumber]          ROWVERSION       NULL,
    [CreatedOnBehalfBy]      UNIQUEIDENTIFIER NULL,
    [ModifiedBy]             UNIQUEIDENTIFIER NULL,
    [ComponentState]         INT              CONSTRAINT [DF_SLABase_ComponentState] DEFAULT ((0)) NOT NULL,
    [TransactionCurrencyId]  UNIQUEIDENTIFIER NULL,
    [SLAIdUnique]            UNIQUEIDENTIFIER CONSTRAINT [DF_SLABase_SLAIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [IsManaged]              BIT              CONSTRAINT [DF_SLABase_IsManaged] DEFAULT ((0)) NOT NULL,
    [OwnerIdType]            INT              CONSTRAINT [DF_SLABase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [PrimaryEntityOTC]       INT              CONSTRAINT [DF_SLABase_PrimaryEntityOTC] DEFAULT ((112)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_SLAid] PRIMARY KEY CLUSTERED ([SLAId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_SLABase_SLAIdUnique] UNIQUE NONCLUSTERED ([SLAIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[SLABase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[SLABase]([Name] ASC) WITH (FILLFACTOR = 80);

