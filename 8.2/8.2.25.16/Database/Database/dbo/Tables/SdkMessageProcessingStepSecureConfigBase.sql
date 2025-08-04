CREATE TABLE [dbo].[SdkMessageProcessingStepSecureConfigBase] (
    [CustomizationLevel]                           INT              CONSTRAINT [DF_SdkMessageProcessingStepSecureConfigBase_CustomizationLevel] DEFAULT ((0)) NOT NULL,
    [CreatedOn]                                    DATETIME         NULL,
    [SecureConfig]                                 NVARCHAR (MAX)   NULL,
    [SdkMessageProcessingStepSecureConfigId]       UNIQUEIDENTIFIER NOT NULL,
    [ModifiedBy]                                   UNIQUEIDENTIFIER NULL,
    [SdkMessageProcessingStepSecureConfigIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_SdkMessageProcessingStepSecureConfigBase_SdkMessageProcessingStepSecureConfigIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [ModifiedOn]                                   DATETIME         NULL,
    [OrganizationId]                               UNIQUEIDENTIFIER NOT NULL,
    [CreatedBy]                                    UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]                            UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]                           UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_SdkMessageProcessingStepSecureConfig] PRIMARY KEY CLUSTERED ([SdkMessageProcessingStepSecureConfigId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_SdkMessageProcessingStepSecureConfigBase_SdkMessageProcessingStepSecureConfigIdUnique] UNIQUE NONCLUSTERED ([SdkMessageProcessingStepSecureConfigIdUnique] ASC)
);

