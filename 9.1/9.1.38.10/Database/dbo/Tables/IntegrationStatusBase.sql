CREATE TABLE [dbo].[IntegrationStatusBase] (
    [OrganizationId]     UNIQUEIDENTIFIER NOT NULL,
    [IntegrationEntryId] UNIQUEIDENTIFIER NOT NULL,
    [StateDescription]   NVARCHAR (MAX)   NULL,
    [StatusDescription]  NVARCHAR (MAX)   NULL,
    [SystemName]         NVARCHAR (200)   NULL,
    [StatusCode]         INT              NULL,
    [ObjectId]           UNIQUEIDENTIFIER NULL,
    [ModifiedBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOn]         DATETIME         NULL,
    [CreatedOn]          DATETIME         NULL,
    [ModifiedOnBehalfBy] UNIQUEIDENTIFIER NULL,
    [ObjectTypeCode]     INT              NULL,
    [CreatedBy]          UNIQUEIDENTIFIER NULL,
    [StateCode]          INT              NULL,
    [CreatedOnBehalfBy]  UNIQUEIDENTIFIER NULL,
    [VersionNumber]      ROWVERSION       NULL,
    CONSTRAINT [cndx_PrimaryKey_IntegrationStatus] PRIMARY KEY CLUSTERED ([IntegrationEntryId] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[IntegrationStatusBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[IntegrationStatusBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[IntegrationStatusBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[IntegrationStatusBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);

