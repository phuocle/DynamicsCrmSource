CREATE TABLE [dbo].[SdkMessageProcessingStepBase] (
    [CreatedOn]                              DATETIME         NULL,
    [Configuration]                          NVARCHAR (MAX)   NULL,
    [SupportedDeployment]                    INT              CONSTRAINT [DF_SdkMessageProcessingStepBase_SupportedDeployment] DEFAULT ((0)) NOT NULL,
    [PluginTypeId]                           UNIQUEIDENTIFIER NOT NULL,
    [Rank]                                   INT              NOT NULL,
    [SdkMessageId]                           UNIQUEIDENTIFIER NOT NULL,
    [ModifiedOn]                             DATETIME         NULL,
    [SdkMessageProcessingStepId]             UNIQUEIDENTIFIER NOT NULL,
    [Stage]                                  INT              NOT NULL,
    [CreatedBy]                              UNIQUEIDENTIFIER NULL,
    [OrganizationId]                         UNIQUEIDENTIFIER NOT NULL,
    [SdkMessageProcessingStepIdUnique]       UNIQUEIDENTIFIER CONSTRAINT [DF_SdkMessageProcessingStepBase_SdkMessageProcessingStepIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [FilteringAttributes]                    NVARCHAR (MAX)   NULL,
    [CustomizationLevel]                     INT              CONSTRAINT [DF_SdkMessageProcessingStepBase_CustomizationLevel] DEFAULT ((0)) NOT NULL,
    [ModifiedBy]                             UNIQUEIDENTIFIER NULL,
    [StateCode]                              INT              CONSTRAINT [DF_SdkMessageProcessingStepBase_StateCode] DEFAULT ((0)) NOT NULL,
    [SdkMessageProcessingStepSecureConfigId] UNIQUEIDENTIFIER NULL,
    [Description]                            NVARCHAR (256)   NULL,
    [VersionNumber]                          ROWVERSION       NULL,
    [Mode]                                   INT              NOT NULL,
    [SdkMessageFilterId]                     UNIQUEIDENTIFIER NULL,
    [StatusCode]                             INT              CONSTRAINT [DF_SdkMessageProcessingStepBase_StatusCode] DEFAULT ((1)) NULL,
    [ImpersonatingUserId]                    UNIQUEIDENTIFIER NULL,
    [InvocationSource]                       INT              CONSTRAINT [DF_SdkMessageProcessingStepBase_InvocationSource] DEFAULT ((0)) NOT NULL,
    [AsyncAutoDelete]                        BIT              CONSTRAINT [DF_SdkMessageProcessingStepBase_AsyncAutoDelete] DEFAULT ((0)) NOT NULL,
    [IsCustomizable]                         BIT              CONSTRAINT [DF_SdkMessageProcessingStepBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [Name]                                   NVARCHAR (256)   CONSTRAINT [DF_SdkMessageProcessingStepBase_Name] DEFAULT ('') NOT NULL,
    [IsManaged]                              BIT              CONSTRAINT [DF_SdkMessageProcessingStepBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [CreatedOnBehalfBy]                      UNIQUEIDENTIFIER NULL,
    [OverwriteTime]                          DATETIME         CONSTRAINT [DF_SdkMessageProcessingStepBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [EventHandler]                           UNIQUEIDENTIFIER NULL,
    [IsHidden]                               BIT              CONSTRAINT [DF_SdkMessageProcessingStepBase_IsHidden] DEFAULT ((0)) NOT NULL,
    [SolutionId]                             UNIQUEIDENTIFIER CONSTRAINT [DF_SdkMessageProcessingStepBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [ComponentState]                         INT              CONSTRAINT [DF_SdkMessageProcessingStepBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [SupportingSolutionId]                   UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]                     UNIQUEIDENTIFIER NULL,
    [EventHandlerTypeCode]                   INT              NULL,
    [IntroducedVersion]                      NVARCHAR (48)    NULL,
    CONSTRAINT [cndx_PrimaryKey_SdkMessageProcessingStep] PRIMARY KEY CLUSTERED ([SdkMessageProcessingStepId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_SdkMessageProcessingStepBase_SdkMessageProcessingStepIdUnique] UNIQUE NONCLUSTERED ([SdkMessageProcessingStepIdUnique] ASC)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[SdkMessageProcessingStepBase]', @OptionName = N'text in row', @OptionValue = N'7000';


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_plugintypeid_sdkmessageprocessingstep]
    ON [dbo].[SdkMessageProcessingStepBase]([PluginTypeId] ASC)
    INCLUDE([ComponentState]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[SdkMessageProcessingStepBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_MessageProcessing]
    ON [dbo].[SdkMessageProcessingStepBase]([SdkMessageId] ASC, [Rank] ASC, [SdkMessageFilterId] ASC)
    INCLUDE([StateCode], [InvocationSource], [SupportedDeployment], [CustomizationLevel], [SdkMessageProcessingStepIdUnique], [Stage]) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SdkMessageProcessingStepBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_sdkmessageprocessingstepsecureconfigid_sdkmessageprocessingstep]
    ON [dbo].[SdkMessageProcessingStepBase]([SdkMessageProcessingStepSecureConfigId] ASC)
    INCLUDE([ComponentState]) WHERE ([SdkMessageProcessingStepSecureConfigId] IS NOT NULL) WITH (FILLFACTOR = 80);

