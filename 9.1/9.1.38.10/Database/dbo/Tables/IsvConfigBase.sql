CREATE TABLE [dbo].[IsvConfigBase] (
    [ModifiedOnBehalfBy] UNIQUEIDENTIFIER NULL,
    [CreatedBy]          UNIQUEIDENTIFIER NULL,
    [ModifiedBy]         UNIQUEIDENTIFIER NULL,
    [CreatedOn]          DATETIME         NULL,
    [OrganizationId]     UNIQUEIDENTIFIER NOT NULL,
    [CreatedOnBehalfBy]  UNIQUEIDENTIFIER NULL,
    [ConfigXML]          NVARCHAR (MAX)   NULL,
    [VersionNumber]      ROWVERSION       NULL,
    [IsvConfigId]        UNIQUEIDENTIFIER NOT NULL,
    [ModifiedOn]         DATETIME         NULL,
    CONSTRAINT [PK_IsvConfigBase] PRIMARY KEY CLUSTERED ([IsvConfigId] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[IsvConfigBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[IsvConfigBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[IsvConfigBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);

