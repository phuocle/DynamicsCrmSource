CREATE TABLE [dbo].[SocialInsightsConfigurationBase] (
    [ModifiedOnBehalfBy]            UNIQUEIDENTIFIER NULL,
    [OrganizationId]                UNIQUEIDENTIFIER NOT NULL,
    [SocialDataParameters]          NVARCHAR (MAX)   NULL,
    [ModifiedBy]                    UNIQUEIDENTIFIER NULL,
    [SocialDataItemType]            INT              NULL,
    [ControlId]                     NVARCHAR (100)   NULL,
    [CreatedOn]                     DATETIME         NULL,
    [RegardingObjectId]             UNIQUEIDENTIFIER NULL,
    [SocialDataItemId]              NVARCHAR (100)   NULL,
    [CreatedOnBehalfBy]             UNIQUEIDENTIFIER NULL,
    [FormId]                        UNIQUEIDENTIFIER NOT NULL,
    [ModifiedOn]                    DATETIME         NULL,
    [SocialInsightsConfigurationId] UNIQUEIDENTIFIER NOT NULL,
    [CreatedBy]                     UNIQUEIDENTIFIER NULL,
    [FormIdName]                    NVARCHAR (4000)  NULL,
    [RegardingObjectTypeCode]       INT              NULL,
    [FormTypeCode]                  INT              NULL,
    [RegardingObjectIdName]         NVARCHAR (256)   NULL,
    [RegardingObjectIdYomiName]     NVARCHAR (160)   NULL,
    CONSTRAINT [PK_SocialInsightsConfigurationBase] PRIMARY KEY CLUSTERED ([SocialInsightsConfigurationId] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[SocialInsightsConfigurationBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[SocialInsightsConfigurationBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_RetrieveForControlInForm]
    ON [dbo].[SocialInsightsConfigurationBase]([FormId] ASC, [ControlId] ASC, [RegardingObjectId] ASC, [RegardingObjectTypeCode] ASC)
    INCLUDE([SocialInsightsConfigurationId], [SocialDataItemId], [SocialDataParameters], [FormTypeCode], [SocialDataItemType]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_RetrieveForControlInDashboard]
    ON [dbo].[SocialInsightsConfigurationBase]([FormId] ASC, [ControlId] ASC)
    INCLUDE([SocialInsightsConfigurationId], [SocialDataItemId], [SocialDataParameters], [FormTypeCode], [SocialDataItemType]) WITH (FILLFACTOR = 80);

