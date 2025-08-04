CREATE TABLE [dbo].[SocialInsightsConfigurationBase]
(
[ModifiedBy] [uniqueidentifier] NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[SocialDataParameters] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[ControlId] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[CreatedOn] [datetime] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[FormId] [uniqueidentifier] NOT NULL,
[SocialDataItemId] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[SocialInsightsConfigurationId] [uniqueidentifier] NOT NULL,
[RegardingObjectId] [uniqueidentifier] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[SocialDataItemType] [int] NULL,
[ModifiedOn] [datetime] NULL,
[FormIdName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[RegardingObjectIdName] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[RegardingObjectTypeCode] [int] NULL,
[FormTypeCode] [int] NULL,
[RegardingObjectIdYomiName] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[SocialInsightsConfigurationBase] ADD CONSTRAINT [PK_SocialInsightsConfigurationBase] PRIMARY KEY CLUSTERED  ([SocialInsightsConfigurationId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_RetrieveForControlInDashboard] ON [dbo].[SocialInsightsConfigurationBase] ([FormId], [ControlId]) INCLUDE ([FormTypeCode], [SocialDataItemId], [SocialDataItemType], [SocialDataParameters], [SocialInsightsConfigurationId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_RetrieveForControlInForm] ON [dbo].[SocialInsightsConfigurationBase] ([FormId], [ControlId], [RegardingObjectId], [RegardingObjectTypeCode]) INCLUDE ([FormTypeCode], [SocialDataItemId], [SocialDataItemType], [SocialDataParameters], [SocialInsightsConfigurationId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
