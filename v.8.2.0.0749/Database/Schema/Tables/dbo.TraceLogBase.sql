CREATE TABLE [dbo].[TraceLogBase]
(
[TraceActionXml] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[TraceParameterHash] [int] NULL,
[CreatedOn] [datetime] NULL,
[CollationLevel] [int] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[TraceDetailXml] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[Level] [int] NULL,
[CanBeDeleted] [bit] NULL CONSTRAINT [DF_TraceLogBase_CanBeDeleted] DEFAULT ((1)),
[TimeZoneRuleVersionNumber] [int] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[TraceRegardingId] [uniqueidentifier] NOT NULL,
[TraceParameterXml] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[ModifiedOn] [datetime] NULL,
[CreatedBy] [uniqueidentifier] NOT NULL,
[TraceCode] [int] NOT NULL,
[ParentTraceLogId] [uniqueidentifier] NULL,
[TraceLogId] [uniqueidentifier] NOT NULL,
[Text] [nvarchar] (2000) COLLATE Latin1_General_CI_AI NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[IsUnique] [bit] NULL CONSTRAINT [DF_TraceLogBase_IsUnique] DEFAULT ((0)),
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[MachineName] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[TraceStatus] [bit] NULL CONSTRAINT [DF_TraceLogBase_TraceStatus] DEFAULT ((0)),
[ErrorTypeDisplay] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[ErrorDetails] [nvarchar] (1024) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[TraceLogBase] ADD CONSTRAINT [cndx_PrimaryKey_TraceBase] PRIMARY KEY CLUSTERED  ([TraceLogId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_ErrorTypeDisplay] ON [dbo].[TraceLogBase] ([ErrorTypeDisplay]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_ParentTraceLogId] ON [dbo].[TraceLogBase] ([ParentTraceLogId]) WHERE ([ParentTraceLogId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_TraceCode] ON [dbo].[TraceLogBase] ([TraceCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_TraceParameterHash] ON [dbo].[TraceLogBase] ([TraceCode], [Level], [TraceParameterHash], [CollationLevel]) WHERE ([IsUnique]=(1)) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_TraceRegarding] ON [dbo].[TraceLogBase] ([TraceRegardingId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[TraceLogBase] ADD CONSTRAINT [tracelog_parent_tracelog] FOREIGN KEY ([ParentTraceLogId]) REFERENCES [dbo].[TraceLogBase] ([TraceLogId])
GO
ALTER TABLE [dbo].[TraceLogBase] ADD CONSTRAINT [tracelog_TraceRegardings] FOREIGN KEY ([TraceRegardingId]) REFERENCES [dbo].[TraceRegardingBase] ([TraceRegardingId])
GO
