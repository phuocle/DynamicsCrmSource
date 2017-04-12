CREATE TABLE [dbo].[MetricBase]
(
[UTCConversionTimeZoneCode] [int] NULL,
[ImportSequenceNumber] [int] NULL,
[CreatedOn] [datetime] NULL,
[IsAmount] [bit] NULL CONSTRAINT [DF_MetricBase_IsAmount] DEFAULT ((1)),
[ModifiedBy] [uniqueidentifier] NULL,
[VersionNumber] [timestamp] NULL,
[Name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[MetricId] [uniqueidentifier] NOT NULL,
[OverriddenCreatedOn] [datetime] NULL,
[AmountDataType] [int] NULL,
[IsStretchTracked] [bit] NULL CONSTRAINT [DF_MetricBase_IsStretchTracked] DEFAULT ((0)),
[StateCode] [int] NOT NULL,
[ModifiedOn] [datetime] NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[OrganizationId] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[StatusCode] [int] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[MetricBase] ADD CONSTRAINT [PK_MetricBase] PRIMARY KEY CLUSTERED  ([MetricId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name] ON [dbo].[MetricBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[MetricBase] ([StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Sync] ON [dbo].[MetricBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
