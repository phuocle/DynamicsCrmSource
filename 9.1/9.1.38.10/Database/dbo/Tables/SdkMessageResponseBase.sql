CREATE TABLE [dbo].[SdkMessageResponseBase] (
    [SdkMessageRequestId]        UNIQUEIDENTIFIER NULL,
    [IsManaged]                  BIT              CONSTRAINT [DF_SdkMessageResponseBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [OverwriteTime]              DATETIME         CONSTRAINT [DF_SdkMessageResponseBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [VersionNumber]              ROWVERSION       NULL,
    [OrganizationId]             UNIQUEIDENTIFIER NOT NULL,
    [ComponentState]             INT              CONSTRAINT [DF_SdkMessageResponseBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [SdkMessageResponseIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_SdkMessageResponseBase_SdkMessageResponseIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [SupportingSolutionId]       UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                 DATETIME         NULL,
    [CreatedBy]                  UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]          UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                 UNIQUEIDENTIFIER NULL,
    [CreatedOn]                  DATETIME         NULL,
    [SdkMessageResponseId]       UNIQUEIDENTIFIER NOT NULL,
    [SolutionId]                 UNIQUEIDENTIFIER CONSTRAINT [DF_SdkMessageResponseBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [CustomizationLevel]         INT              CONSTRAINT [DF_SdkMessageResponseBase_CustomizationLevel] DEFAULT ((0)) NOT NULL,
    [IntroducedVersion]          NVARCHAR (42)    NULL,
    CONSTRAINT [cndx_PrimaryKey_SdkMessageResponse] PRIMARY KEY CLUSTERED ([SdkMessageResponseId] ASC, [CustomizationLevel] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_SdkMessageResponseBase_SdkMessageResponseIdUnique] UNIQUE NONCLUSTERED ([SdkMessageResponseIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[SdkMessageResponseBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SdkMessageResponseBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[SdkMessageResponseBase]([SdkMessageResponseId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_ATuneSdkMessageRequestIdOverwriteTimeComponentState]
    ON [dbo].[SdkMessageResponseBase]([SdkMessageRequestId] ASC, [OverwriteTime] ASC, [ComponentState] ASC)
    INCLUDE([SolutionId]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

