CREATE TABLE [dbo].[SdkMessageRequestFieldBase] (
    [FieldMask]                      INT              CONSTRAINT [DF_SdkMessageRequestFieldBase_FieldMask] DEFAULT ((0)) NOT NULL,
    [Parser]                         NVARCHAR (256)   NULL,
    [SolutionId]                     UNIQUEIDENTIFIER CONSTRAINT [DF_SdkMessageRequestFieldBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [ClrParser]                      NVARCHAR (256)   NULL,
    [ParameterBindingInformation]    NVARCHAR (128)   NULL,
    [SdkMessageRequestFieldIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_SdkMessageRequestFieldBase_SdkMessageRequestFieldIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [ModifiedBy]                     UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]              UNIQUEIDENTIFIER NULL,
    [VersionNumber]                  ROWVERSION       NULL,
    [OrganizationId]                 UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                      DATETIME         NULL,
    [SdkMessageRequestId]            UNIQUEIDENTIFIER NULL,
    [IntroducedVersion]              NVARCHAR (42)    NULL,
    [Name]                           NVARCHAR (256)   NOT NULL,
    [Optional]                       BIT              NULL,
    [ModifiedOnBehalfBy]             UNIQUEIDENTIFIER NULL,
    [OverwriteTime]                  DATETIME         CONSTRAINT [DF_SdkMessageRequestFieldBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [CreatedBy]                      UNIQUEIDENTIFIER NULL,
    [SdkMessageRequestFieldId]       UNIQUEIDENTIFIER NOT NULL,
    [PublicName]                     NVARCHAR (256)   NULL,
    [SupportingSolutionId]           UNIQUEIDENTIFIER NULL,
    [ComponentState]                 INT              CONSTRAINT [DF_SdkMessageRequestFieldBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [ModifiedOn]                     DATETIME         NULL,
    [IsManaged]                      BIT              CONSTRAINT [DF_SdkMessageRequestFieldBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [CustomizationLevel]             INT              CONSTRAINT [DF_SdkMessageRequestFieldBase_CustomizationLevel] DEFAULT ((0)) NOT NULL,
    [Position]                       INT              CONSTRAINT [DF_SdkMessageRequestFieldBase_Position] DEFAULT ((0)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_SdkMessageRequestField] PRIMARY KEY CLUSTERED ([SdkMessageRequestFieldId] ASC, [CustomizationLevel] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_SdkMessageRequestFieldBase_SdkMessageRequestFieldIdUnique] UNIQUE NONCLUSTERED ([SdkMessageRequestFieldIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[SdkMessageRequestFieldBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SdkMessageRequestFieldBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_SdkMessageRequestId]
    ON [dbo].[SdkMessageRequestFieldBase]([SdkMessageRequestId] ASC, [OverwriteTime] ASC, [ComponentState] ASC) WITH (FILLFACTOR = 100);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[SdkMessageRequestFieldBase]([SdkMessageRequestFieldId] ASC) WHERE ([OverwriteTime]=(0) AND [ComponentState]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

