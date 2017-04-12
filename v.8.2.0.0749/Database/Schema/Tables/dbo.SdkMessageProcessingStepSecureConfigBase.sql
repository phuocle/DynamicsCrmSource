CREATE TABLE [dbo].[SdkMessageProcessingStepSecureConfigBase]
(
[CustomizationLevel] [int] NOT NULL CONSTRAINT [DF_SdkMessageProcessingStepSecureConfigBase_CustomizationLevel] DEFAULT ((0)),
[CreatedOn] [datetime] NULL,
[SecureConfig] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[SdkMessageProcessingStepSecureConfigId] [uniqueidentifier] NOT NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[SdkMessageProcessingStepSecureConfigIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_SdkMessageProcessingStepSecureConfigBase_SdkMessageProcessingStepSecureConfigIdUnique] DEFAULT (newid()),
[ModifiedOn] [datetime] NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[CreatedBy] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[SdkMessageProcessingStepSecureConfigBase] ADD CONSTRAINT [cndx_PrimaryKey_SdkMessageProcessingStepSecureConfig] PRIMARY KEY CLUSTERED  ([SdkMessageProcessingStepSecureConfigId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SdkMessageProcessingStepSecureConfigBase] ADD CONSTRAINT [UQ_SdkMessageProcessingStepSecureConfigBase_SdkMessageProcessingStepSecureConfigIdUnique] UNIQUE NONCLUSTERED  ([SdkMessageProcessingStepSecureConfigIdUnique]) ON [PRIMARY]
GO
