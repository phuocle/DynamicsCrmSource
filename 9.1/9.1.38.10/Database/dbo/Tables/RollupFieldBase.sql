CREATE TABLE [dbo].[RollupFieldBase] (
    [ModifiedBy]                   UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]            UNIQUEIDENTIFIER NULL,
    [VersionNumber]                ROWVERSION       NULL,
    [TimeZoneRuleVersionNumber]    INT              NULL,
    [GoalAttribute]                NVARCHAR (100)   NULL,
    [SourceEntity]                 INT              NULL,
    [ModifiedOnBehalfBy]           UNIQUEIDENTIFIER NULL,
    [SourceState]                  INT              NULL,
    [ImportSequenceNumber]         INT              NULL,
    [SourceStatus]                 INT              NULL,
    [ModifiedOn]                   DATETIME         NULL,
    [CreatedBy]                    UNIQUEIDENTIFIER NULL,
    [MetricId]                     UNIQUEIDENTIFIER NULL,
    [UTCConversionTimeZoneCode]    INT              NULL,
    [DateAttribute]                NVARCHAR (100)   NULL,
    [EntityForDateAttribute]       INT              NULL,
    [CreatedOn]                    DATETIME         NULL,
    [IsStateParentEntityAttribute] BIT              CONSTRAINT [DF_RollupFieldBase_IsStateParentEntityAttribute] DEFAULT ((0)) NULL,
    [RollupFieldId]                UNIQUEIDENTIFIER NOT NULL,
    [SourceAttribute]              NVARCHAR (100)   NULL,
    CONSTRAINT [PK_MetricLineItemBase] PRIMARY KEY CLUSTERED ([RollupFieldId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [metric_rollupfield] FOREIGN KEY ([MetricId]) REFERENCES [dbo].[MetricBase] ([MetricId])
);


GO
ALTER TABLE [dbo].[RollupFieldBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[RollupFieldBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_metric_rollupfield]
    ON [dbo].[RollupFieldBase]([MetricId] ASC) WITH (FILLFACTOR = 80);

