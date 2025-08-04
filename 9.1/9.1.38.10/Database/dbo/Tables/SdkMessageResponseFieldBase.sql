CREATE TABLE [dbo].[SdkMessageResponseFieldBase] (
    [CreatedBy]                       UNIQUEIDENTIFIER NULL,
    [PublicName]                      NVARCHAR (256)   NULL,
    [CreatedOnBehalfBy]               UNIQUEIDENTIFIER NULL,
    [SdkMessageResponseId]            UNIQUEIDENTIFIER NULL,
    [OverwriteTime]                   DATETIME         CONSTRAINT [DF_SdkMessageResponseFieldBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [SdkMessageResponseFieldId]       UNIQUEIDENTIFIER NOT NULL,
    [ModifiedOn]                      DATETIME         NULL,
    [OrganizationId]                  UNIQUEIDENTIFIER NOT NULL,
    [IsManaged]                       BIT              CONSTRAINT [DF_SdkMessageResponseFieldBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [CreatedOn]                       DATETIME         NULL,
    [ParameterBindingInformation]     NVARCHAR (128)   NULL,
    [ComponentState]                  INT              CONSTRAINT [DF_SdkMessageResponseFieldBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [ModifiedBy]                      UNIQUEIDENTIFIER NULL,
    [SolutionId]                      UNIQUEIDENTIFIER CONSTRAINT [DF_SdkMessageResponseFieldBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [Name]                            NVARCHAR (256)   NOT NULL,
    [ClrFormatter]                    NVARCHAR (256)   NULL,
    [Value]                           NVARCHAR (256)   NOT NULL,
    [SupportingSolutionId]            UNIQUEIDENTIFIER NULL,
    [IntroducedVersion]               NVARCHAR (42)    NULL,
    [SdkMessageResponseFieldIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_SdkMessageResponseFieldBase_SdkMessageResponseFieldIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [VersionNumber]                   ROWVERSION       NULL,
    [CustomizationLevel]              INT              CONSTRAINT [DF_SdkMessageResponseFieldBase_CustomizationLevel] DEFAULT ((0)) NOT NULL,
    [Position]                        INT              CONSTRAINT [DF_SdkMessageResponseFieldBase_Position] DEFAULT ((0)) NOT NULL,
    [Formatter]                       NVARCHAR (256)   NULL,
    [ModifiedOnBehalfBy]              UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_SdkMessageResponseField] PRIMARY KEY CLUSTERED ([SdkMessageResponseFieldId] ASC, [CustomizationLevel] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_SdkMessageResponseFieldBase_SdkMessageResponseFieldIdUnique] UNIQUE NONCLUSTERED ([SdkMessageResponseFieldIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[SdkMessageResponseFieldBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SdkMessageResponseFieldBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[SdkMessageResponseFieldBase]([SdkMessageResponseFieldId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_SdkMessageResponseId_OverwriteTime_ComponentState]
    ON [dbo].[SdkMessageResponseFieldBase]([SdkMessageResponseId] ASC, [OverwriteTime] ASC, [ComponentState] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_sdkmessageresponsefieldidoverwritetimecomponentstate]
    ON [dbo].[SdkMessageResponseFieldBase]([SdkMessageResponseFieldId] ASC, [OverwriteTime] ASC, [ComponentState] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

