CREATE TABLE [dbo].[TopicModelConfigurationBase] (
    [TopicModelConfigurationId]       UNIQUEIDENTIFIER NOT NULL,
    [OrganizationId]                  UNIQUEIDENTIFIER NULL,
    [VersionNumber]                   ROWVERSION       NULL,
    [ImportSequenceNumber]            INT              NULL,
    [OverriddenCreatedOn]             DATETIME         NULL,
    [TimeZoneRuleVersionNumber]       INT              NULL,
    [UTCConversionTimeZoneCode]       INT              NULL,
    [Name]                            NVARCHAR (100)   NULL,
    [Description]                     NVARCHAR (MAX)   NULL,
    [NgramSize]                       INT              NULL,
    [MinRelevanceScore]               DECIMAL (23, 10) NULL,
    [StopWords]                       NVARCHAR (500)   NULL,
    [TopicModelId]                    UNIQUEIDENTIFIER NOT NULL,
    [TimeFilter]                      INT              NULL,
    [TimeFilterDuration]              INT              NULL,
    [DataFilter]                      NVARCHAR (MAX)   NULL,
    [SourceEntity]                    INT              NULL,
    [FetchXmlList]                    NVARCHAR (MAX)   NULL,
    [SolutionId]                      UNIQUEIDENTIFIER CONSTRAINT [DF_TopicModelConfigurationBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId]            UNIQUEIDENTIFIER NULL,
    [ComponentState]                  INT              CONSTRAINT [DF_TopicModelConfigurationBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [OverwriteTime]                   DATETIME         CONSTRAINT [DF_TopicModelConfigurationBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [IsManaged]                       BIT              CONSTRAINT [DF_TopicModelConfigurationBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [TopicModelConfigurationIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_TopicModelConfigurationBase_TopicModelConfigurationIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    CONSTRAINT [PK_TopicModelConfigurationBase] PRIMARY KEY CLUSTERED ([TopicModelConfigurationId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_TopicModelConfigurationBase_TopicModelConfigurationIdUnique] UNIQUE NONCLUSTERED ([TopicModelConfigurationIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[TopicModelConfigurationBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[TopicModelConfigurationBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[TopicModelConfigurationBase]([TopicModelConfigurationId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

