CREATE TABLE [dbo].[SdkMessageRequestBase] (
    [CreatedOn]                 DATETIME         NULL,
    [CustomizationLevel]        INT              CONSTRAINT [DF_SdkMessageRequestBase_CustomizationLevel] DEFAULT ((0)) NOT NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [OverwriteTime]             DATETIME         CONSTRAINT [DF_SdkMessageRequestBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [PrimaryObjectTypeCode]     INT              NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [IntroducedVersion]         NVARCHAR (42)    NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NOT NULL,
    [ComponentState]            INT              CONSTRAINT [DF_SdkMessageRequestBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [SdkMessagePairId]          UNIQUEIDENTIFIER NULL,
    [SupportingSolutionId]      UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [SdkMessageRequestId]       UNIQUEIDENTIFIER NOT NULL,
    [SolutionId]                UNIQUEIDENTIFIER CONSTRAINT [DF_SdkMessageRequestBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [Name]                      NVARCHAR (256)   NOT NULL,
    [SdkMessageRequestIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_SdkMessageRequestBase_SdkMessageRequestIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [IsManaged]                 BIT              CONSTRAINT [DF_SdkMessageRequestBase_IsManaged] DEFAULT ((0)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_SdkMessageRequest] PRIMARY KEY CLUSTERED ([SdkMessageRequestId] ASC, [CustomizationLevel] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_SdkMessageRequestBase_SdkMessageRequestIdUnique] UNIQUE NONCLUSTERED ([SdkMessageRequestIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[SdkMessageRequestBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SdkMessageRequestBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_Name_CustomizationLevel]
    ON [dbo].[SdkMessageRequestBase]([Name] ASC, [CustomizationLevel] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[SdkMessageRequestBase]([SdkMessageRequestId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

