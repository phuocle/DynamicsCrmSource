CREATE TABLE [dbo].[SdkMessageProcessingStepSecureConfigBase] (
    [ModifiedBy]                                   UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                                   DATETIME         NULL,
    [OrganizationId]                               UNIQUEIDENTIFIER NOT NULL,
    [CreatedOnBehalfBy]                            UNIQUEIDENTIFIER NULL,
    [SdkMessageProcessingStepSecureConfigId]       UNIQUEIDENTIFIER NOT NULL,
    [ModifiedOnBehalfBy]                           UNIQUEIDENTIFIER NULL,
    [CustomizationLevel]                           INT              CONSTRAINT [DF_SdkMessageProcessingStepSecureConfigBase_CustomizationLevel] DEFAULT ((0)) NOT NULL,
    [CreatedBy]                                    UNIQUEIDENTIFIER NULL,
    [SdkMessageProcessingStepSecureConfigIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_SdkMessageProcessingStepSecureConfigBase_SdkMessageProcessingStepSecureConfigIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [SecureConfig]                                 NVARCHAR (MAX)   NULL,
    [CreatedOn]                                    DATETIME         NULL,
    [SecureConfig_QF_prefix]                       AS               (CONVERT([nvarchar](850),substring([SecureConfig],(1),(850)))),
    CONSTRAINT [cndx_PrimaryKey_SdkMessageProcessingStepSecureConfig] PRIMARY KEY CLUSTERED ([SdkMessageProcessingStepSecureConfigId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_SdkMessageProcessingStepSecureConfigBase_SdkMessageProcessingStepSecureConfigIdUnique] UNIQUE NONCLUSTERED ([SdkMessageProcessingStepSecureConfigIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[SdkMessageProcessingStepSecureConfigBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[SdkMessageProcessingStepSecureConfigBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_7C806A7F6E94417B989ED86855596E70]
    ON [dbo].[SdkMessageProcessingStepSecureConfigBase]([SdkMessageProcessingStepSecureConfigId] ASC)
    INCLUDE([SecureConfig]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_7C806A7F6E94417B989ED86855596E70]
    ON [dbo].[SdkMessageProcessingStepSecureConfigBase]([SdkMessageProcessingStepSecureConfigId] ASC)
    INCLUDE([SecureConfig]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SecureConfig]
    ON [dbo].[SdkMessageProcessingStepSecureConfigBase]([SecureConfig_QF_prefix] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

