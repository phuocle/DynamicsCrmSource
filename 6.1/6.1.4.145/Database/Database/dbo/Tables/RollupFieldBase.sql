CREATE TABLE [dbo].[RollupFieldBase] (
    [CreatedBy]                    UNIQUEIDENTIFIER NULL,
    [MetricId]                     UNIQUEIDENTIFIER NULL,
    [VersionNumber]                ROWVERSION       NULL,
    [CreatedOn]                    DATETIME         NULL,
    [SourceAttribute]              NVARCHAR (100)   NULL,
    [SourceState]                  INT              NULL,
    [GoalAttribute]                NVARCHAR (100)   NULL,
    [SourceEntity]                 INT              NULL,
    [ModifiedOnBehalfBy]           UNIQUEIDENTIFIER NULL,
    [SourceStatus]                 INT              NULL,
    [CreatedOnBehalfBy]            UNIQUEIDENTIFIER NULL,
    [ImportSequenceNumber]         INT              NULL,
    [TimeZoneRuleVersionNumber]    INT              NULL,
    [ModifiedOn]                   DATETIME         NULL,
    [DateAttribute]                NVARCHAR (100)   NULL,
    [IsStateParentEntityAttribute] BIT              CONSTRAINT [DF_RollupFieldBase_IsStateParentEntityAttribute] DEFAULT ((0)) NULL,
    [ModifiedBy]                   UNIQUEIDENTIFIER NULL,
    [EntityForDateAttribute]       INT              NULL,
    [UTCConversionTimeZoneCode]    INT              NULL,
    [RollupFieldId]                UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [PK_MetricLineItemBase] PRIMARY KEY CLUSTERED ([RollupFieldId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [metric_rollupfield] FOREIGN KEY ([MetricId]) REFERENCES [dbo].[MetricBase] ([MetricId]) NOT FOR REPLICATION
);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_metric_rollupfield]
    ON [dbo].[RollupFieldBase]([MetricId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[RollupFieldBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);

