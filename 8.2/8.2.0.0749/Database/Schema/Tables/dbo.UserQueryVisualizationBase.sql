CREATE TABLE [dbo].[UserQueryVisualizationBase]
(
[Name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NOT NULL,
[CreatedOn] [datetime] NOT NULL,
[VersionNumber] [timestamp] NULL,
[DataDescription] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[UserQueryVisualizationId] [uniqueidentifier] NOT NULL,
[IsDefault] [bit] NOT NULL CONSTRAINT [DF_UserQueryVisualizationBase_IsDefault] DEFAULT ((0)),
[WebResourceId] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NOT NULL,
[OwnerId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_UserQueryVisualizationBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[PrimaryEntityTypeCode] [int] NOT NULL CONSTRAINT [DF_UserQueryVisualizationBase_PrimaryEntityTypeCode] DEFAULT ((0)),
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[ModifiedBy] [uniqueidentifier] NOT NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[PresentationDescription] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[CreatedBy] [uniqueidentifier] NOT NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_UserQueryVisualizationBase_OwnerIdType] DEFAULT ((8)),
[ChartType] [int] NULL CONSTRAINT [DF_UserQueryVisualizationBase_ChartType] DEFAULT ((0))
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[UserQueryVisualizationBase] ADD CONSTRAINT [cndx_PrimaryKey_UserQueryVisualization] PRIMARY KEY CLUSTERED  ([UserQueryVisualizationId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_owner_userqueryvisualizations] ON [dbo].[UserQueryVisualizationBase] ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[UserQueryVisualizationBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_webresource_userqueryvisualizations] ON [dbo].[UserQueryVisualizationBase] ([WebResourceId]) WHERE ([WebResourceId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[UserQueryVisualizationBase] ADD CONSTRAINT [business_unit_userqueryvisualizations] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[UserQueryVisualizationBase] ADD CONSTRAINT [owner_userqueryvisualizations] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
