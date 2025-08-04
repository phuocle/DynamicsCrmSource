CREATE TABLE [dbo].[SocialInsightsConfigurationBase] (
    [ModifiedBy]                    UNIQUEIDENTIFIER NULL,
    [OrganizationId]                UNIQUEIDENTIFIER NOT NULL,
    [SocialDataParameters]          NVARCHAR (MAX)   NULL,
    [ControlId]                     NVARCHAR (100)   NULL,
    [CreatedOn]                     DATETIME         NULL,
    [ModifiedOnBehalfBy]            UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]             UNIQUEIDENTIFIER NULL,
    [FormId]                        UNIQUEIDENTIFIER NOT NULL,
    [SocialDataItemId]              NVARCHAR (100)   NULL,
    [SocialInsightsConfigurationId] UNIQUEIDENTIFIER NOT NULL,
    [RegardingObjectId]             UNIQUEIDENTIFIER NULL,
    [CreatedBy]                     UNIQUEIDENTIFIER NULL,
    [SocialDataItemType]            INT              NULL,
    [ModifiedOn]                    DATETIME         NULL,
    [FormIdName]                    NVARCHAR (4000)  NULL,
    [RegardingObjectIdName]         NVARCHAR (256)   NULL,
    [RegardingObjectTypeCode]       INT              NULL,
    [FormTypeCode]                  INT              NULL,
    [RegardingObjectIdYomiName]     NVARCHAR (160)   NULL,
    CONSTRAINT [PK_SocialInsightsConfigurationBase] PRIMARY KEY CLUSTERED ([SocialInsightsConfigurationId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE NONCLUSTERED INDEX [ndx_RetrieveForControlInForm]
    ON [dbo].[SocialInsightsConfigurationBase]([FormId] ASC, [ControlId] ASC, [RegardingObjectId] ASC, [RegardingObjectTypeCode] ASC)
    INCLUDE([SocialInsightsConfigurationId], [SocialDataItemId], [SocialDataParameters], [FormTypeCode], [SocialDataItemType]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_RetrieveForControlInDashboard]
    ON [dbo].[SocialInsightsConfigurationBase]([FormId] ASC, [ControlId] ASC)
    INCLUDE([SocialInsightsConfigurationId], [SocialDataItemId], [SocialDataParameters], [FormTypeCode], [SocialDataItemType]) WITH (FILLFACTOR = 80);

