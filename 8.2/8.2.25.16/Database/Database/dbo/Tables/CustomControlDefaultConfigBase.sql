CREATE TABLE [dbo].[CustomControlDefaultConfigBase] (
    [PrimaryEntityTypeCode]              INT              NOT NULL,
    [ModifiedOn]                         DATETIME         NULL,
    [IsManaged]                          BIT              CONSTRAINT [DF_CustomControlDefaultConfigBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [OrganizationId]                     UNIQUEIDENTIFIER NOT NULL,
    [CustomControlDefaultConfigId]       UNIQUEIDENTIFIER NOT NULL,
    [CreatedOnBehalfBy]                  UNIQUEIDENTIFIER NULL,
    [ComponentState]                     INT              CONSTRAINT [DF_CustomControlDefaultConfigBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [CustomControlDefaultConfigIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_CustomControlDefaultConfigBase_CustomControlDefaultConfigIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [ControlDescriptionXML]              NVARCHAR (MAX)   NOT NULL,
    [VersionNumber]                      ROWVERSION       NULL,
    [ModifiedBy]                         UNIQUEIDENTIFIER NULL,
    [CreatedBy]                          UNIQUEIDENTIFIER NULL,
    [CreatedOn]                          DATETIME         NULL,
    [ModifiedOnBehalfBy]                 UNIQUEIDENTIFIER NULL,
    [SupportingSolutionId]               UNIQUEIDENTIFIER NULL,
    [IntroducedVersion]                  NVARCHAR (48)    NULL,
    [OverwriteTime]                      DATETIME         CONSTRAINT [DF_CustomControlDefaultConfigBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [SolutionId]                         UNIQUEIDENTIFIER CONSTRAINT [DF_CustomControlDefaultConfigBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [EventsXml]                          NVARCHAR (MAX)   NULL,
    CONSTRAINT [UQ_CustomControlDefaultConfigBase_CustomControlDefaultConfigIdUnique] UNIQUE NONCLUSTERED ([CustomControlDefaultConfigIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[CustomControlDefaultConfigBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);

