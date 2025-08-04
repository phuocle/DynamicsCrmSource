CREATE TABLE [dbo].[SavedOrgInsightsConfigurationBase] (
    [Lookback]                        INT              NULL,
    [IsDefault]                       BIT              CONSTRAINT [DF_SavedOrgInsightsConfigurationBase_IsDefault] DEFAULT ((0)) NOT NULL,
    [OrganizationId]                  UNIQUEIDENTIFIER NOT NULL,
    [CreatedOnBehalfBy]               UNIQUEIDENTIFIER NULL,
    [IsDrilldown]                     BIT              CONSTRAINT [DF_SavedOrgInsightsConfigurationBase_IsDrilldown] DEFAULT ((0)) NOT NULL,
    [JsonData]                        NVARCHAR (MAX)   NULL,
    [SavedOrgInsightsConfigurationId] UNIQUEIDENTIFIER NOT NULL,
    [ModifiedOnBehalfBy]              UNIQUEIDENTIFIER NULL,
    [Description]                     NVARCHAR (MAX)   NULL,
    [ModifiedOn]                      DATETIME         NULL,
    [Parameters]                      NVARCHAR (MAX)   NULL,
    [CreatedOn]                       DATETIME         NULL,
    [JsonDataEndTime]                 DATETIME         NULL,
    [JsonDataStartTime]               DATETIME         NULL,
    [ModifiedBy]                      UNIQUEIDENTIFIER NULL,
    [Name]                            NVARCHAR (MAX)   NULL,
    [MetricType]                      INT              NULL,
    [CreatedBy]                       UNIQUEIDENTIFIER NULL,
    [PlotOption]                      INT              NULL,
    CONSTRAINT [PK_SavedOrgInsightsConfigurationBase] PRIMARY KEY CLUSTERED ([SavedOrgInsightsConfigurationId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE NONCLUSTERED INDEX [ndx_RetrieveForControlInDashboard]
    ON [dbo].[SavedOrgInsightsConfigurationBase]([SavedOrgInsightsConfigurationId] ASC)
    INCLUDE([Name], [PlotOption], [Lookback]) WITH (FILLFACTOR = 80);

