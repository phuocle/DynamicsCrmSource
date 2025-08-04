CREATE TABLE [dbo].[TeamBase] (
    [EMailAddress]                 NVARCHAR (100)   NULL,
    [Name]                         NVARCHAR (160)   NOT NULL,
    [BusinessUnitId]               UNIQUEIDENTIFIER NOT NULL,
    [IsDefault]                    BIT              CONSTRAINT [DF_TeamBase_IsDefault] DEFAULT ((0)) NOT NULL,
    [VersionNumber]                ROWVERSION       NULL,
    [CreatedOn]                    DATETIME         NULL,
    [RegardingObjectId]            UNIQUEIDENTIFIER NULL,
    [AdministratorId]              UNIQUEIDENTIFIER CONSTRAINT [DF_TeamBase_AdministratorId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [OrganizationId]               UNIQUEIDENTIFIER NOT NULL,
    [ImportSequenceNumber]         INT              NULL,
    [ModifiedBy]                   UNIQUEIDENTIFIER NULL,
    [CreatedBy]                    UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                   DATETIME         NULL,
    [TransactionCurrencyId]        UNIQUEIDENTIFIER NULL,
    [QueueId]                      UNIQUEIDENTIFIER NULL,
    [TeamId]                       UNIQUEIDENTIFIER NOT NULL,
    [TraversedPath]                NVARCHAR (1250)  NULL,
    [ModifiedOnBehalfBy]           UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]            UNIQUEIDENTIFIER NULL,
    [OverriddenCreatedOn]          DATETIME         NULL,
    [StageId]                      UNIQUEIDENTIFIER NULL,
    [ProcessId]                    UNIQUEIDENTIFIER NULL,
    [TeamType]                     INT              CONSTRAINT [DF_TeamBase_TeamType] DEFAULT ((0)) NOT NULL,
    [ExchangeRate]                 DECIMAL (23, 10) NULL,
    [Description]                  NVARCHAR (MAX)   NULL,
    [TeamTemplateId]               UNIQUEIDENTIFIER NULL,
    [SystemManaged]                BIT              CONSTRAINT [DF_TeamBase_SystemManaged] DEFAULT ((0)) NOT NULL,
    [RegardingObjectTypeCode]      INT              NULL,
    [YomiName]                     NVARCHAR (160)   NULL,
    [AzureActiveDirectoryObjectId] UNIQUEIDENTIFIER NULL,
    [MembershipType]               INT              CONSTRAINT [DF_TeamBase_MembershipType] DEFAULT ((0)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_Team] PRIMARY KEY CLUSTERED ([TeamId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_teams] FOREIGN KEY ([BusinessUnitId]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [queue_team] FOREIGN KEY ([QueueId]) REFERENCES [dbo].[QueueBase] ([QueueId]),
    CONSTRAINT [teamtemplate_Teams] FOREIGN KEY ([TeamTemplateId]) REFERENCES [dbo].[TeamTemplateBase] ([TeamTemplateId]),
    CONSTRAINT [TransactionCurrency_Team] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[TeamBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[TeamBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_TeamName_BusinessUnitId]
    ON [dbo].[TeamBase]([Name] ASC, [BusinessUnitId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[TeamBase]([BusinessUnitId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[TeamBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_TeamAdministrator]
    ON [dbo].[TeamBase]([TeamId] ASC, [AdministratorId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_RegardingObjectId]
    ON [dbo].[TeamBase]([RegardingObjectId] ASC) WHERE ([RegardingObjectId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_for_entitykey_aadobjectid_membershiptype]
    ON [dbo].[TeamBase]([AzureActiveDirectoryObjectId] ASC, [MembershipType] ASC)
    INCLUDE([TeamId]) WHERE ([AzureActiveDirectoryObjectId] IS NOT NULL AND [MembershipType] IS NOT NULL) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Name_type_Processid]
    ON [dbo].[TeamBase]([Name] ASC, [TeamType] ASC, [ProcessId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_TeamNameTeamtype_BusinessUnitId]
    ON [dbo].[TeamBase]([Name] ASC)
    INCLUDE([TeamType], [BusinessUnitId]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_8B0A6284D7ED4459A695D3A10E770864]
    ON [dbo].[TeamBase]([TeamId] ASC)
    INCLUDE([Name], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_8B0A6284D7ED4459A695D3A10E770864]
    ON [dbo].[TeamBase]([TeamId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

