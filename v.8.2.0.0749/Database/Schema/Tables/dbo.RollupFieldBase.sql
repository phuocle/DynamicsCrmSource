CREATE TABLE [dbo].[RollupFieldBase]
(
[CreatedBy] [uniqueidentifier] NULL,
[MetricId] [uniqueidentifier] NULL,
[VersionNumber] [timestamp] NULL,
[CreatedOn] [datetime] NULL,
[SourceAttribute] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[SourceState] [int] NULL,
[GoalAttribute] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[SourceEntity] [int] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[SourceStatus] [int] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ImportSequenceNumber] [int] NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[ModifiedOn] [datetime] NULL,
[DateAttribute] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[IsStateParentEntityAttribute] [bit] NULL CONSTRAINT [DF_RollupFieldBase_IsStateParentEntityAttribute] DEFAULT ((0)),
[ModifiedBy] [uniqueidentifier] NULL,
[EntityForDateAttribute] [int] NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[RollupFieldId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RollupFieldBase] ADD CONSTRAINT [PK_MetricLineItemBase] PRIMARY KEY CLUSTERED  ([RollupFieldId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_metric_rollupfield] ON [dbo].[RollupFieldBase] ([MetricId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Sync] ON [dbo].[RollupFieldBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RollupFieldBase] ADD CONSTRAINT [metric_rollupfield] FOREIGN KEY ([MetricId]) REFERENCES [dbo].[MetricBase] ([MetricId])
GO
