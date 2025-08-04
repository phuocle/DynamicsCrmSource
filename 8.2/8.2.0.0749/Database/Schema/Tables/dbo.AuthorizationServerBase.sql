CREATE TABLE [dbo].[AuthorizationServerBase]
(
[StateCode] [int] NOT NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[Realm] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[PrincipalId] [nvarchar] (100) COLLATE Latin1_General_CI_AI NOT NULL,
[ModifiedOn] [datetime] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[TenantId] [uniqueidentifier] NULL,
[MetadataUrl] [nvarchar] (1024) COLLATE Latin1_General_CI_AI NULL,
[StatusCode] [int] NULL,
[Name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NOT NULL,
[AuthorizationServerId] [uniqueidentifier] NOT NULL,
[MetadataRefreshedOn] [datetime] NULL,
[Metadata] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[CreatedOn] [datetime] NULL,
[AuthorizationServerType] [int] NULL CONSTRAINT [DF_AuthorizationServerBase_AuthorizationServerType] DEFAULT ((0))
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[AuthorizationServerBase] ADD CONSTRAINT [PK_authorizationserver] PRIMARY KEY CLUSTERED  ([AuthorizationServerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[AuthorizationServerBase] ([OrganizationId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[AuthorizationServerBase] ([StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
