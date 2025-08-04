CREATE TABLE [dbo].[SdkMessageProcessingStepImageBase] (
    [ModifiedBy]                            UNIQUEIDENTIFIER NULL,
    [SdkMessageProcessingStepId]            UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                            DATETIME         NULL,
    [VersionNumber]                         ROWVERSION       NULL,
    [OrganizationId]                        UNIQUEIDENTIFIER NOT NULL,
    [SdkMessageProcessingStepImageId]       UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                             DATETIME         NULL,
    [EntityAlias]                           NVARCHAR (256)   NOT NULL,
    [CustomizationLevel]                    INT              CONSTRAINT [DF_SdkMessageProcessingStepImageBase_CustomizationLevel] DEFAULT ((0)) NOT NULL,
    [CreatedBy]                             UNIQUEIDENTIFIER NULL,
    [SdkMessageProcessingStepImageIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_SdkMessageProcessingStepImageBase_SdkMessageProcessingStepImageIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [ImageType]                             INT              NOT NULL,
    [RelatedAttributeName]                  NVARCHAR (256)   NULL,
    [MessagePropertyName]                   NVARCHAR (256)   NOT NULL,
    [Attributes]                            NVARCHAR (MAX)   NULL,
    [IsCustomizable]                        BIT              CONSTRAINT [DF_SdkMessageProcessingStepImageBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [ModifiedOnBehalfBy]                    UNIQUEIDENTIFIER NULL,
    [Description]                           NVARCHAR (256)   NULL,
    [IsManaged]                             BIT              CONSTRAINT [DF_SdkMessageProcessingStepImageBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [Name]                                  NVARCHAR (256)   CONSTRAINT [DF_SdkMessageProcessingStepImageBase_Name] DEFAULT ('') NOT NULL,
    [ComponentState]                        INT              CONSTRAINT [DF_SdkMessageProcessingStepImageBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [SupportingSolutionId]                  UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]                     UNIQUEIDENTIFIER NULL,
    [SolutionId]                            UNIQUEIDENTIFIER CONSTRAINT [DF_SdkMessageProcessingStepImageBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [OverwriteTime]                         DATETIME         CONSTRAINT [DF_SdkMessageProcessingStepImageBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [IntroducedVersion]                     NVARCHAR (48)    NULL,
    CONSTRAINT [cndx_PrimaryKey_SdkMessageProcessingStepImage] PRIMARY KEY CLUSTERED ([SdkMessageProcessingStepImageId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_SdkMessageProcessingStepImageBase_SdkMessageProcessingStepImageIdUnique] UNIQUE NONCLUSTERED ([SdkMessageProcessingStepImageIdUnique] ASC)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SdkMessageProcessingStepImageBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_ProcessingStep]
    ON [dbo].[SdkMessageProcessingStepImageBase]([SdkMessageProcessingStepId] ASC)
    INCLUDE([ComponentState]) WHERE ([SdkMessageProcessingStepId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Description]
    ON [dbo].[SdkMessageProcessingStepImageBase]([Description] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[SdkMessageProcessingStepImageBase]([Name] ASC) WITH (FILLFACTOR = 80);

