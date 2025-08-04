CREATE TABLE [dbo].[SdkMessageProcessingStepBase] (
    [CustomizationLevel]                     INT              CONSTRAINT [DF_SdkMessageProcessingStepBase_CustomizationLevel] DEFAULT ((0)) NOT NULL,
    [Stage]                                  INT              NOT NULL,
    [ModifiedBy]                             UNIQUEIDENTIFIER NULL,
    [Description]                            NVARCHAR (256)   NULL,
    [AsyncAutoDelete]                        BIT              CONSTRAINT [DF_SdkMessageProcessingStepBase_AsyncAutoDelete] DEFAULT ((0)) NOT NULL,
    [IsCustomizable]                         BIT              CONSTRAINT [DF_SdkMessageProcessingStepBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [CreatedOn]                              DATETIME         NULL,
    [IsManaged]                              BIT              CONSTRAINT [DF_SdkMessageProcessingStepBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [SdkMessageFilterId]                     UNIQUEIDENTIFIER NULL,
    [CanUseReadOnlyConnection]               BIT              CONSTRAINT [DF_SdkMessageProcessingStepBase_CanUseReadOnlyConnection] DEFAULT ((0)) NOT NULL,
    [FilteringAttributes]                    NVARCHAR (MAX)   NULL,
    [CreatedOnBehalfBy]                      UNIQUEIDENTIFIER NULL,
    [OverwriteTime]                          DATETIME         CONSTRAINT [DF_SdkMessageProcessingStepBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [IntroducedVersion]                      NVARCHAR (48)    NULL,
    [Configuration]                          NVARCHAR (MAX)   NULL,
    [SdkMessageProcessingStepSecureConfigId] UNIQUEIDENTIFIER NULL,
    [StateCode]                              INT              CONSTRAINT [DF_SdkMessageProcessingStepBase_StateCode] DEFAULT ((0)) NOT NULL,
    [SdkMessageId]                           UNIQUEIDENTIFIER NOT NULL,
    [InvocationSource]                       INT              CONSTRAINT [DF_SdkMessageProcessingStepBase_InvocationSource] DEFAULT ((0)) NOT NULL,
    [ModifiedOn]                             DATETIME         NULL,
    [Rank]                                   INT              NOT NULL,
    [SolutionId]                             UNIQUEIDENTIFIER CONSTRAINT [DF_SdkMessageProcessingStepBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [Mode]                                   INT              NOT NULL,
    [VersionNumber]                          ROWVERSION       NULL,
    [PluginTypeId]                           UNIQUEIDENTIFIER NOT NULL,
    [CreatedBy]                              UNIQUEIDENTIFIER NULL,
    [OrganizationId]                         UNIQUEIDENTIFIER NOT NULL,
    [Name]                                   NVARCHAR (256)   CONSTRAINT [DF_SdkMessageProcessingStepBase_Name] DEFAULT ('') NOT NULL,
    [ImpersonatingUserId]                    UNIQUEIDENTIFIER NULL,
    [IsHidden]                               BIT              CONSTRAINT [DF_SdkMessageProcessingStepBase_IsHidden] DEFAULT ((0)) NOT NULL,
    [ModifiedOnBehalfBy]                     UNIQUEIDENTIFIER NULL,
    [ComponentState]                         INT              CONSTRAINT [DF_SdkMessageProcessingStepBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [StatusCode]                             INT              CONSTRAINT [DF_SdkMessageProcessingStepBase_StatusCode] DEFAULT ((1)) NULL,
    [EventHandler]                           UNIQUEIDENTIFIER NULL,
    [SupportedDeployment]                    INT              CONSTRAINT [DF_SdkMessageProcessingStepBase_SupportedDeployment] DEFAULT ((0)) NOT NULL,
    [SdkMessageProcessingStepIdUnique]       UNIQUEIDENTIFIER CONSTRAINT [DF_SdkMessageProcessingStepBase_SdkMessageProcessingStepIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [EventExpander]                          NVARCHAR (MAX)   NULL,
    [SupportingSolutionId]                   UNIQUEIDENTIFIER NULL,
    [SdkMessageProcessingStepId]             UNIQUEIDENTIFIER NOT NULL,
    [EventHandlerTypeCode]                   INT              NULL,
    CONSTRAINT [cndx_PrimaryKey_SdkMessageProcessingStep] PRIMARY KEY CLUSTERED ([SdkMessageProcessingStepId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_SdkMessageProcessingStepBase_SdkMessageProcessingStepIdUnique] UNIQUE NONCLUSTERED ([SdkMessageProcessingStepIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[SdkMessageProcessingStepBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[SdkMessageProcessingStepBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SdkMessageProcessingStepBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[SdkMessageProcessingStepBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_SdkMessageId_PluginTypeId_SdkMessageFilterId]
    ON [dbo].[SdkMessageProcessingStepBase]([SdkMessageId] ASC, [SdkMessageFilterId] ASC, [PluginTypeId] ASC)
    INCLUDE([StateCode]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_plugintypeid_sdkmessageprocessingstep]
    ON [dbo].[SdkMessageProcessingStepBase]([PluginTypeId] ASC)
    INCLUDE([ComponentState]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_sdkmessageprocessingstepsecureconfigid_sdkmessageprocessingstep]
    ON [dbo].[SdkMessageProcessingStepBase]([SdkMessageProcessingStepSecureConfigId] ASC)
    INCLUDE([ComponentState]) WHERE ([SdkMessageProcessingStepSecureConfigId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_MessageProcessing]
    ON [dbo].[SdkMessageProcessingStepBase]([SdkMessageId] ASC, [Rank] ASC, [SdkMessageFilterId] ASC)
    INCLUDE([StateCode], [InvocationSource], [SupportedDeployment], [CustomizationLevel], [SdkMessageProcessingStepIdUnique], [Stage]) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[SdkMessageProcessingStepBase]([SdkMessageProcessingStepId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_7C5C20044F604A18B28DCD706561790B]
    ON [dbo].[SdkMessageProcessingStepBase]([Name] ASC, [SdkMessageProcessingStepId] ASC)
    INCLUDE([SdkMessageId], [EventHandler], [EventHandlerTypeCode], [SupportedDeployment], [IsHidden], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_7C5C20044F604A18B28DCD706561790B]
    ON [dbo].[SdkMessageProcessingStepBase]([SdkMessageProcessingStepId] ASC)
    INCLUDE([Name], [SdkMessageId], [EventHandler], [EventHandlerTypeCode], [SupportedDeployment], [IsHidden], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[SdkMessageProcessingStepBase]([Name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_7C5C20044F604A18B28DCD706561790B]
    ON [dbo].[SdkMessageProcessingStepBase]([SdkMessageProcessingStepId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

