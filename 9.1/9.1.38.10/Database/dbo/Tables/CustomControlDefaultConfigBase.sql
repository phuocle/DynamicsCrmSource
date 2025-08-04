CREATE TABLE [dbo].[CustomControlDefaultConfigBase] (
    [IsManaged]                          BIT              CONSTRAINT [DF_CustomControlDefaultConfigBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [CustomControlDefaultConfigIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_CustomControlDefaultConfigBase_CustomControlDefaultConfigIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [CreatedOnBehalfBy]                  UNIQUEIDENTIFIER NULL,
    [ControlDescriptionXML]              NVARCHAR (MAX)   NOT NULL,
    [ControlDescriptionJson]             NVARCHAR (MAX)   NULL,
    [ModifiedOn]                         DATETIME         NULL,
    [CreatedOn]                          DATETIME         NULL,
    [EventsXml]                          NVARCHAR (MAX)   NULL,
    [ComponentState]                     INT              CONSTRAINT [DF_CustomControlDefaultConfigBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [OrganizationId]                     UNIQUEIDENTIFIER NOT NULL,
    [OverwriteTime]                      DATETIME         CONSTRAINT [DF_CustomControlDefaultConfigBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [ModifiedOnBehalfBy]                 UNIQUEIDENTIFIER NULL,
    [VersionNumber]                      ROWVERSION       NULL,
    [PrimaryEntityTypeCode]              INT              NOT NULL,
    [CustomControlDefaultConfigId]       UNIQUEIDENTIFIER NOT NULL,
    [CreatedBy]                          UNIQUEIDENTIFIER NULL,
    [SolutionId]                         UNIQUEIDENTIFIER CONSTRAINT [DF_CustomControlDefaultConfigBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId]               UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                         UNIQUEIDENTIFIER NULL,
    [IntroducedVersion]                  NVARCHAR (48)    NULL,
    CONSTRAINT [UQ_CustomControlDefaultConfigBase_CustomControlDefaultConfigIdUnique] UNIQUE NONCLUSTERED ([CustomControlDefaultConfigIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[CustomControlDefaultConfigBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[CustomControlDefaultConfigBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[CustomControlDefaultConfigBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[CustomControlDefaultConfigBase]([CustomControlDefaultConfigId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

