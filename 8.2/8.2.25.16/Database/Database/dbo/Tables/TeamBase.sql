CREATE TABLE [dbo].[TeamBase] (
    [TeamId]                  UNIQUEIDENTIFIER NOT NULL,
    [OrganizationId]          UNIQUEIDENTIFIER NOT NULL,
    [BusinessUnitId]          UNIQUEIDENTIFIER NOT NULL,
    [Name]                    NVARCHAR (160)   NOT NULL,
    [Description]             NVARCHAR (MAX)   NULL,
    [EMailAddress]            NVARCHAR (100)   NULL,
    [CreatedOn]               DATETIME         NULL,
    [ModifiedOn]              DATETIME         NULL,
    [CreatedBy]               UNIQUEIDENTIFIER NULL,
    [ModifiedBy]              UNIQUEIDENTIFIER NULL,
    [VersionNumber]           ROWVERSION       NULL,
    [ImportSequenceNumber]    INT              NULL,
    [OverriddenCreatedOn]     DATETIME         NULL,
    [IsDefault]               BIT              CONSTRAINT [DF_TeamBase_IsDefault] DEFAULT ((0)) NOT NULL,
    [AdministratorId]         UNIQUEIDENTIFIER CONSTRAINT [DF_TeamBase_AdministratorId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [QueueId]                 UNIQUEIDENTIFIER NULL,
    [ExchangeRate]            DECIMAL (23, 10) NULL,
    [ModifiedOnBehalfBy]      UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]       UNIQUEIDENTIFIER NULL,
    [TransactionCurrencyId]   UNIQUEIDENTIFIER NULL,
    [YomiName]                NVARCHAR (160)   NULL,
    [RegardingObjectId]       UNIQUEIDENTIFIER NULL,
    [TeamType]                INT              CONSTRAINT [DF_TeamBase_TeamType] DEFAULT ((0)) NOT NULL,
    [ProcessId]               UNIQUEIDENTIFIER NULL,
    [SystemManaged]           BIT              CONSTRAINT [DF_TeamBase_SystemManaged] DEFAULT ((0)) NOT NULL,
    [StageId]                 UNIQUEIDENTIFIER NULL,
    [TeamTemplateId]          UNIQUEIDENTIFIER NULL,
    [RegardingObjectTypeCode] INT              NULL,
    [TraversedPath]           NVARCHAR (1250)  NULL,
    CONSTRAINT [cndx_PrimaryKey_Team] PRIMARY KEY CLUSTERED ([TeamId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_teams] FOREIGN KEY ([BusinessUnitId]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [queue_team] FOREIGN KEY ([QueueId]) REFERENCES [dbo].[QueueBase] ([QueueId]),
    CONSTRAINT [teamtemplate_Teams] FOREIGN KEY ([TeamTemplateId]) REFERENCES [dbo].[TeamTemplateBase] ([TeamTemplateId]),
    CONSTRAINT [TransactionCurrency_Team] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[TeamBase]', @OptionName = N'text in row', @OptionValue = N'7000';


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[TeamBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_TeamAdministrator]
    ON [dbo].[TeamBase]([TeamId] ASC, [AdministratorId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[TeamBase]([BusinessUnitId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_TeamName_BusinessUnitId]
    ON [dbo].[TeamBase]([Name] ASC, [BusinessUnitId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_RegardingObjectId]
    ON [dbo].[TeamBase]([RegardingObjectId] ASC) WHERE ([RegardingObjectId] IS NOT NULL) WITH (FILLFACTOR = 80);

