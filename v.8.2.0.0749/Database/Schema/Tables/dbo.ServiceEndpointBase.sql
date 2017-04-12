CREATE TABLE [dbo].[ServiceEndpointBase]
(
[Contract] [int] NOT NULL CONSTRAINT [DF_ServiceEndpointBase_Contract] DEFAULT ((1)),
[UserClaim] [int] NOT NULL CONSTRAINT [DF_ServiceEndpointBase_UserClaim] DEFAULT ((1)),
[ConnectionMode] [int] NOT NULL CONSTRAINT [DF_ServiceEndpointBase_ConnectionMode] DEFAULT ((1)),
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_ServiceEndpointBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[ServiceEndpointIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_ServiceEndpointBase_ServiceEndpointIdUnique] DEFAULT (newid()),
[ComponentState] [int] NOT NULL CONSTRAINT [DF_ServiceEndpointBase_ComponentState] DEFAULT ((0)),
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[Name] [nvarchar] (256) COLLATE Latin1_General_CI_AI NOT NULL CONSTRAINT [DF_ServiceEndpointBase_Name] DEFAULT (''),
[IsCustomizable] [bit] NOT NULL CONSTRAINT [DF_ServiceEndpointBase_IsCustomizable] DEFAULT ((1)),
[ServiceEndpointId] [uniqueidentifier] NOT NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[CreatedOn] [datetime] NULL,
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_ServiceEndpointBase_IsManaged] DEFAULT ((0)),
[SupportingSolutionId] [uniqueidentifier] NULL,
[Path] [nvarchar] (160) COLLATE Latin1_General_CI_AI NOT NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_ServiceEndpointBase_OverwriteTime] DEFAULT ((0)),
[CreatedBy] [uniqueidentifier] NULL,
[SolutionNamespace] [nvarchar] (160) COLLATE Latin1_General_CI_AI NOT NULL,
[IntroducedVersion] [nvarchar] (48) COLLATE Latin1_General_CI_AI NULL,
[SASToken] [varbinary] (max) NULL,
[SASKey] [varbinary] (max) NULL,
[NamespaceAddress] [nvarchar] (255) COLLATE Latin1_General_CI_AI NULL,
[AuthType] [int] NULL CONSTRAINT [DF_ServiceEndpointBase_AuthType] DEFAULT ((1)),
[NamespaceFormat] [int] NULL CONSTRAINT [DF_ServiceEndpointBase_NamespaceFormat] DEFAULT ((1)),
[MessageFormat] [int] NULL CONSTRAINT [DF_ServiceEndpointBase_MessageFormat] DEFAULT ((1)),
[SASKeyName] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[ServiceEndpointBase] ADD CONSTRAINT [cndx_PrimaryKey_ServiceEndpoint] PRIMARY KEY CLUSTERED  ([ServiceEndpointId], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name] ON [dbo].[ServiceEndpointBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_Path] ON [dbo].[ServiceEndpointBase] ([Path]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ServiceEndpointBase] ADD CONSTRAINT [UQ_ServiceEndpointBase_ServiceEndpointIdUnique] UNIQUE NONCLUSTERED  ([ServiceEndpointIdUnique]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_SolutionNamespace] ON [dbo].[ServiceEndpointBase] ([SolutionNamespace]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
