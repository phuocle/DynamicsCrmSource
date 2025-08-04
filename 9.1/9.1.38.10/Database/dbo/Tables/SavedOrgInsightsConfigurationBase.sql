CREATE TABLE [dbo].[SavedOrgInsightsConfigurationBase] (
    [CreatedOn]                       DATETIME         NULL,
    [SavedOrgInsightsConfigurationId] UNIQUEIDENTIFIER NOT NULL,
    [IsDrilldown]                     BIT              CONSTRAINT [DF_SavedOrgInsightsConfigurationBase_IsDrilldown] DEFAULT ((0)) NOT NULL,
    [Parameters]                      NVARCHAR (MAX)   NULL,
    [Name]                            NVARCHAR (MAX)   NULL,
    [ModifiedOn]                      DATETIME         NULL,
    [CreatedOnBehalfBy]               UNIQUEIDENTIFIER NULL,
    [IsDefault]                       BIT              CONSTRAINT [DF_SavedOrgInsightsConfigurationBase_IsDefault] DEFAULT ((0)) NOT NULL,
    [ModifiedBy]                      UNIQUEIDENTIFIER NULL,
    [JsonData]                        NVARCHAR (MAX)   NULL,
    [Lookback]                        INT              NULL,
    [JsonDataStartTime]               DATETIME         NULL,
    [PlotOption]                      INT              NULL,
    [Description]                     NVARCHAR (MAX)   NULL,
    [JsonDataEndTime]                 DATETIME         NULL,
    [ModifiedOnBehalfBy]              UNIQUEIDENTIFIER NULL,
    [MetricType]                      INT              NULL,
    [CreatedBy]                       UNIQUEIDENTIFIER NULL,
    [OrganizationId]                  UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [PK_SavedOrgInsightsConfigurationBase] PRIMARY KEY CLUSTERED ([SavedOrgInsightsConfigurationId] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[SavedOrgInsightsConfigurationBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[SavedOrgInsightsConfigurationBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_RetrieveForControlInDashboard]
    ON [dbo].[SavedOrgInsightsConfigurationBase]([SavedOrgInsightsConfigurationId] ASC)
    INCLUDE([Name], [PlotOption], [Lookback]) WITH (FILLFACTOR = 80);

