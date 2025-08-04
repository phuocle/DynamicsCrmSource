CREATE TABLE [dbo].[SdkMessagePairBase] (
    [IsManaged]                    BIT              CONSTRAINT [DF_SdkMessagePairBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [ComponentState]               INT              CONSTRAINT [DF_SdkMessagePairBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [ModifiedBy]                   UNIQUEIDENTIFIER NULL,
    [SdkMessageBindingInformation] NVARCHAR (256)   NULL,
    [SdkMessageId]                 UNIQUEIDENTIFIER NULL,
    [DeprecatedVersion]            NVARCHAR (42)    NULL,
    [CreatedBy]                    UNIQUEIDENTIFIER NULL,
    [OverwriteTime]                DATETIME         CONSTRAINT [DF_SdkMessagePairBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [Namespace]                    NVARCHAR (256)   NOT NULL,
    [ModifiedOn]                   DATETIME         NULL,
    [CreatedOn]                    DATETIME         NULL,
    [SdkMessagePairId]             UNIQUEIDENTIFIER NOT NULL,
    [OrganizationId]               UNIQUEIDENTIFIER NOT NULL,
    [SolutionId]                   UNIQUEIDENTIFIER CONSTRAINT [DF_SdkMessagePairBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [IntroducedVersion]            NVARCHAR (42)    NULL,
    [CreatedOnBehalfBy]            UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]           UNIQUEIDENTIFIER NULL,
    [Endpoint]                     NVARCHAR (128)   NOT NULL,
    [SupportingSolutionId]         UNIQUEIDENTIFIER NULL,
    [CustomizationLevel]           INT              CONSTRAINT [DF_SdkMessagePairBase_CustomizationLevel] DEFAULT ((0)) NOT NULL,
    [VersionNumber]                ROWVERSION       NULL,
    [SdkMessagePairIdUnique]       UNIQUEIDENTIFIER CONSTRAINT [DF_SdkMessagePairBase_SdkMessagePairIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_SdkMessagePair] PRIMARY KEY CLUSTERED ([SdkMessagePairId] ASC, [CustomizationLevel] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_SdkMessagePairBase_SdkMessagePairIdUnique] UNIQUE NONCLUSTERED ([SdkMessagePairIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[SdkMessagePairBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SdkMessagePairBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[SdkMessagePairBase]([SdkMessagePairId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_SdkMessageId]
    ON [dbo].[SdkMessagePairBase]([SdkMessageId] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);

