CREATE TABLE [dbo].[PartnerApplicationBase]
(
[CreatedOn] [datetime] NULL,
[StateCode] [int] NOT NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[MetadataUrl] [nvarchar] (1024) COLLATE Latin1_General_CI_AI NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[UseAuthorizationServer] [bit] NULL CONSTRAINT [DF_PartnerApplicationBase_UseAuthorizationServer] DEFAULT ((1)),
[PrincipalId] [nvarchar] (100) COLLATE Latin1_General_CI_AI NOT NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[Name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NOT NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[Realm] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[CreatedBy] [uniqueidentifier] NULL,
[PartnerApplicationId] [uniqueidentifier] NOT NULL,
[StatusCode] [int] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[ApplicationRole] [int] NOT NULL CONSTRAINT [DF_PartnerApplicationBase_ApplicationRole] DEFAULT ((1)),
[TenantId] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[PartnerApplicationBase] ADD CONSTRAINT [PK_PartnerApplication] PRIMARY KEY CLUSTERED  ([PartnerApplicationId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_PartnerApplication_Name] ON [dbo].[PartnerApplicationBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[PartnerApplicationBase] ([OrganizationId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[PartnerApplicationBase] ([StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
