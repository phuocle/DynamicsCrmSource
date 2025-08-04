CREATE TABLE [dbo].[IntegrationStatusBase] (
    [IntegrationEntryId] UNIQUEIDENTIFIER NOT NULL,
    [SystemName]         NVARCHAR (200)   NULL,
    [ObjectId]           UNIQUEIDENTIFIER NULL,
    [ObjectTypeCode]     INT              NULL,
    [StateCode]          INT              NULL,
    [StateDescription]   NVARCHAR (MAX)   NULL,
    [StatusCode]         INT              NULL,
    [StatusDescription]  NVARCHAR (MAX)   NULL,
    [CreatedOn]          DATETIME         NULL,
    [ModifiedOn]         DATETIME         NULL,
    [CreatedBy]          UNIQUEIDENTIFIER NULL,
    [ModifiedBy]         UNIQUEIDENTIFIER NULL,
    [OrganizationId]     UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]      ROWVERSION       NULL,
    [CreatedOnBehalfBy]  UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy] UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_IntegrationStatus] PRIMARY KEY CLUSTERED ([IntegrationEntryId] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[IntegrationStatusBase]', @OptionName = N'text in row', @OptionValue = N'7000';


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[IntegrationStatusBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[IntegrationStatusBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);

