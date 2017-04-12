CREATE TABLE [dbo].[SdkMessageFilterBase]
(
[CreatedBy] [uniqueidentifier] NULL,
[SdkMessageFilterId] [uniqueidentifier] NOT NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[PrimaryObjectTypeCode] [int] NOT NULL,
[VersionNumber] [timestamp] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[CustomizationLevel] [int] NOT NULL CONSTRAINT [DF_SdkMessageFilterBase_CustomizationLevel] DEFAULT ((0)),
[SecondaryObjectTypeCode] [int] NOT NULL,
[SdkMessageFilterIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_SdkMessageFilterBase_SdkMessageFilterIdUnique] DEFAULT (newid()),
[ModifiedOn] [datetime] NULL,
[IsCustomProcessingStepAllowed] [bit] NOT NULL CONSTRAINT [DF_SdkMessageFilterBase_IsCustomProcessingStepAllowed] DEFAULT ((0)),
[CreatedOn] [datetime] NULL,
[Availability] [int] NOT NULL,
[SdkMessageId] [uniqueidentifier] NOT NULL,
[IsVisible] [bit] NOT NULL CONSTRAINT [DF_SdkMessageFilterBase_IsVisible] DEFAULT ((1)),
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[WorkflowSdkStepEnabled] [bit] NULL CONSTRAINT [DF_SdkMessageFilterBase_WorkflowSdkStepEnabled] DEFAULT ((0))
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SdkMessageFilterBase] ADD CONSTRAINT [cndx_PrimaryKey_SdkMessageFilter] PRIMARY KEY CLUSTERED  ([SdkMessageFilterId], [CustomizationLevel]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_SdkMessageFilterId_PrimaryObjectTypeCode] ON [dbo].[SdkMessageFilterBase] ([SdkMessageFilterId], [PrimaryObjectTypeCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SdkMessageFilterBase] ADD CONSTRAINT [UQ_SdkMessageFilterBase_SdkMessageFilterIdUnique] UNIQUE NONCLUSTERED  ([SdkMessageFilterIdUnique]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Cover_SdkMessageFilter] ON [dbo].[SdkMessageFilterBase] ([SdkMessageId], [PrimaryObjectTypeCode], [SecondaryObjectTypeCode]) INCLUDE ([CustomizationLevel], [SdkMessageFilterIdUnique]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[SdkMessageFilterBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SdkMessageFilterBase] ADD CONSTRAINT [createdby_sdkmessagefilter] FOREIGN KEY ([CreatedBy]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[SdkMessageFilterBase] ADD CONSTRAINT [createdonbehalfby_sdkmessagefilter] FOREIGN KEY ([CreatedOnBehalfBy]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[SdkMessageFilterBase] ADD CONSTRAINT [modifiedby_sdkmessagefilter] FOREIGN KEY ([ModifiedBy]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[SdkMessageFilterBase] ADD CONSTRAINT [modifiedonbehalfby_sdkmessagefilter] FOREIGN KEY ([ModifiedOnBehalfBy]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[SdkMessageFilterBase] ADD CONSTRAINT [sdkmessageid_sdkmessagefilter] FOREIGN KEY ([SdkMessageId]) REFERENCES [dbo].[SdkMessageBaseIds] ([SdkMessageId])
GO
