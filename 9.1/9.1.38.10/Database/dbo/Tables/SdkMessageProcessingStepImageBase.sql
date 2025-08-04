CREATE TABLE [dbo].[SdkMessageProcessingStepImageBase] (
    [EntityAlias]                           NVARCHAR (256)   NOT NULL,
    [MessagePropertyName]                   NVARCHAR (256)   NOT NULL,
    [Description]                           NVARCHAR (256)   NULL,
    [Attributes]                            NVARCHAR (MAX)   NULL,
    [VersionNumber]                         ROWVERSION       NULL,
    [SupportingSolutionId]                  UNIQUEIDENTIFIER NULL,
    [IsCustomizable]                        BIT              CONSTRAINT [DF_SdkMessageProcessingStepImageBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [SdkMessageProcessingStepImageIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_SdkMessageProcessingStepImageBase_SdkMessageProcessingStepImageIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [SdkMessageProcessingStepImageId]       UNIQUEIDENTIFIER NOT NULL,
    [Name]                                  NVARCHAR (256)   CONSTRAINT [DF_SdkMessageProcessingStepImageBase_Name] DEFAULT ('') NOT NULL,
    [ModifiedOnBehalfBy]                    UNIQUEIDENTIFIER NULL,
    [OrganizationId]                        UNIQUEIDENTIFIER NOT NULL,
    [SolutionId]                            UNIQUEIDENTIFIER CONSTRAINT [DF_SdkMessageProcessingStepImageBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [CreatedBy]                             UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]                     UNIQUEIDENTIFIER NULL,
    [ImageType]                             INT              NOT NULL,
    [CreatedOn]                             DATETIME         NULL,
    [OverwriteTime]                         DATETIME         CONSTRAINT [DF_SdkMessageProcessingStepImageBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [ModifiedBy]                            UNIQUEIDENTIFIER NULL,
    [RelatedAttributeName]                  NVARCHAR (256)   NULL,
    [IsManaged]                             BIT              CONSTRAINT [DF_SdkMessageProcessingStepImageBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [SdkMessageProcessingStepId]            UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                            DATETIME         NULL,
    [CustomizationLevel]                    INT              CONSTRAINT [DF_SdkMessageProcessingStepImageBase_CustomizationLevel] DEFAULT ((0)) NOT NULL,
    [IntroducedVersion]                     NVARCHAR (48)    NULL,
    [ComponentState]                        INT              CONSTRAINT [DF_SdkMessageProcessingStepImageBase_ComponentState] DEFAULT ((0)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_SdkMessageProcessingStepImage] PRIMARY KEY CLUSTERED ([SdkMessageProcessingStepImageId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_SdkMessageProcessingStepImageBase_SdkMessageProcessingStepImageIdUnique] UNIQUE NONCLUSTERED ([SdkMessageProcessingStepImageIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[SdkMessageProcessingStepImageBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[SdkMessageProcessingStepImageBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SdkMessageProcessingStepImageBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [fndx_ProcessingStep]
    ON [dbo].[SdkMessageProcessingStepImageBase]([SdkMessageProcessingStepId] ASC)
    INCLUDE([ComponentState]) WHERE ([SdkMessageProcessingStepId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[SdkMessageProcessingStepImageBase]([SdkMessageProcessingStepImageId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_921634750EA244C3A9091DF4565364D9]
    ON [dbo].[SdkMessageProcessingStepImageBase]([Name] ASC, [SdkMessageProcessingStepImageId] ASC)
    INCLUDE([SdkMessageProcessingStepId], [Description], [ImageType], [MessagePropertyName], [RelatedAttributeName], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_921634750EA244C3A9091DF4565364D9]
    ON [dbo].[SdkMessageProcessingStepImageBase]([SdkMessageProcessingStepImageId] ASC)
    INCLUDE([Name], [Description]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_921634750EA244C3A9091DF4565364D9]
    ON [dbo].[SdkMessageProcessingStepImageBase]([SdkMessageProcessingStepImageId] ASC)
    INCLUDE([Name], [SdkMessageProcessingStepId], [Description], [ImageType], [MessagePropertyName], [RelatedAttributeName], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[SdkMessageProcessingStepImageBase]([Name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Description]
    ON [dbo].[SdkMessageProcessingStepImageBase]([Description] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

