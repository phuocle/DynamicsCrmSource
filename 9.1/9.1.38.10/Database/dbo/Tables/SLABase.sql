CREATE TABLE [dbo].[SLABase] (
    [ModifiedOnBehalfBy]     UNIQUEIDENTIFIER NULL,
    [OverwriteTime]          DATETIME         CONSTRAINT [DF_SLABase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [AllowPauseResume]       BIT              CONSTRAINT [DF_SLABase_AllowPauseResume] DEFAULT ((0)) NOT NULL,
    [WorkflowId]             UNIQUEIDENTIFIER NULL,
    [OwningBusinessUnit]     UNIQUEIDENTIFIER NULL,
    [SLAIdUnique]            UNIQUEIDENTIFIER CONSTRAINT [DF_SLABase_SLAIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [ExchangeRate]           DECIMAL (23, 10) NULL,
    [OwnerId]                UNIQUEIDENTIFIER CONSTRAINT [DF_SLABase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [ObjectTypeCode]         INT              NULL,
    [Description]            NVARCHAR (MAX)   NULL,
    [ApplicableFrom]         NVARCHAR (100)   NULL,
    [BusinessHoursId]        UNIQUEIDENTIFIER NULL,
    [Name]                   NVARCHAR (160)   NOT NULL,
    [ModifiedOn]             DATETIME         NULL,
    [IsDefault]              BIT              CONSTRAINT [DF_SLABase_IsDefault] DEFAULT ((0)) NULL,
    [StatusCode]             INT              NULL,
    [SLAType]                INT              CONSTRAINT [DF_SLABase_SLAType] DEFAULT ((0)) NOT NULL,
    [PrimaryEntityOTC]       INT              CONSTRAINT [DF_SLABase_PrimaryEntityOTC] DEFAULT ((112)) NOT NULL,
    [SolutionId]             UNIQUEIDENTIFIER CONSTRAINT [DF_SLABase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [ModifiedBy]             UNIQUEIDENTIFIER NULL,
    [CreatedBy]              UNIQUEIDENTIFIER NULL,
    [CreatedOn]              DATETIME         NULL,
    [ApplicableFromPickList] INT              NULL,
    [ChangedAttributeList]   NVARCHAR (500)   NULL,
    [TransactionCurrencyId]  UNIQUEIDENTIFIER NULL,
    [StateCode]              INT              NOT NULL,
    [CreatedOnBehalfBy]      UNIQUEIDENTIFIER NULL,
    [SupportingSolutionId]   UNIQUEIDENTIFIER NULL,
    [SLAId]                  UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]          ROWVERSION       NULL,
    [ComponentState]         INT              CONSTRAINT [DF_SLABase_ComponentState] DEFAULT ((0)) NOT NULL,
    [IsManaged]              BIT              CONSTRAINT [DF_SLABase_IsManaged] DEFAULT ((0)) NOT NULL,
    [OwnerIdType]            INT              CONSTRAINT [DF_SLABase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [slaversion]             INT              NULL,
    CONSTRAINT [cndx_PrimaryKey_SLAid] PRIMARY KEY CLUSTERED ([SLAId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_SLABase_SLAIdUnique] UNIQUE NONCLUSTERED ([SLAIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[SLABase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[SLABase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[SLABase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[SLABase]([Name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[SLABase]([SLAId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_A540820453D84A59B5705CEA74D2AE26]
    ON [dbo].[SLABase]([SLAId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_A540820453D84A59B5705CEA74D2AE26]
    ON [dbo].[SLABase]([SLAId] ASC)
    INCLUDE([Name], [StateCode], [ObjectTypeCode], [IsDefault], [ApplicableFrom], [OwnerId], [OwnerIdType], [CreatedOn], [ModifiedOn], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

