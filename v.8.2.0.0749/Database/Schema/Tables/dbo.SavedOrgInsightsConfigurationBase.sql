CREATE TABLE [dbo].[SavedOrgInsightsConfigurationBase]
(
[Lookback] [int] NULL,
[IsDefault] [bit] NOT NULL CONSTRAINT [DF_SavedOrgInsightsConfigurationBase_IsDefault] DEFAULT ((0)),
[OrganizationId] [uniqueidentifier] NOT NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[IsDrilldown] [bit] NOT NULL CONSTRAINT [DF_SavedOrgInsightsConfigurationBase_IsDrilldown] DEFAULT ((0)),
[JsonData] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[SavedOrgInsightsConfigurationId] [uniqueidentifier] NOT NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[ModifiedOn] [datetime] NULL,
[Parameters] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[CreatedOn] [datetime] NULL,
[JsonDataEndTime] [datetime] NULL,
[JsonDataStartTime] [datetime] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[Name] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[MetricType] [int] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[PlotOption] [int] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[SavedOrgInsightsConfigurationBase] ADD CONSTRAINT [PK_SavedOrgInsightsConfigurationBase] PRIMARY KEY CLUSTERED  ([SavedOrgInsightsConfigurationId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_RetrieveForControlInDashboard] ON [dbo].[SavedOrgInsightsConfigurationBase] ([SavedOrgInsightsConfigurationId]) INCLUDE ([Lookback], [Name], [PlotOption]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
