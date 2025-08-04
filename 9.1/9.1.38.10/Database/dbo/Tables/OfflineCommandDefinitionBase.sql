CREATE TABLE [dbo].[OfflineCommandDefinitionBase] (
    [CommandName]              NVARCHAR (100)   NOT NULL,
    [ModifiedOn]               DATETIME         NULL,
    [OrganizationId]           UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]            ROWVERSION       NULL,
    [PrimaryEntityLogicalName] NVARCHAR (256)   NULL,
    [CommandDefinitionId]      UNIQUEIDENTIFIER NOT NULL,
    [SolutionName]             NVARCHAR (256)   NULL,
    [OverriddenCreatedOn]      DATETIME         NULL,
    [CreatedBy]                UNIQUEIDENTIFIER NULL,
    [ImportSequenceNumber]     INT              NULL,
    [ModifiedOnBehalfBy]       UNIQUEIDENTIFIER NULL,
    [CreatedOn]                DATETIME         NULL,
    [CreatedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [ModifiedBy]               UNIQUEIDENTIFIER NULL,
    [CommandDefinition]        NVARCHAR (MAX)   NULL,
    CONSTRAINT [cndx_PrimaryKey_OfflineCommandDefinition] PRIMARY KEY CLUSTERED ([CommandDefinitionId] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[OfflineCommandDefinitionBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[OfflineCommandDefinitionBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_CommandName]
    ON [dbo].[OfflineCommandDefinitionBase]([CommandName] ASC) WITH (FILLFACTOR = 80);

