CREATE TABLE [dbo].[DuplicateRuleBase]
(
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[IsCaseSensitive] [bit] NULL CONSTRAINT [DF_DuplicateRuleBase_IsCaseSensitive] DEFAULT ((0)),
[StateCode] [int] NOT NULL CONSTRAINT [DF_DuplicateRuleBase_StateCode] DEFAULT ((0)),
[StatusCode] [int] NOT NULL CONSTRAINT [DF_DuplicateRuleBase_StatusCode] DEFAULT ((0)),
[Name] [nvarchar] (160) COLLATE Latin1_General_CI_AI NOT NULL,
[MatchingEntityMatchCodeTable] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[BaseEntityTypeCode] [int] NOT NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[DuplicateRuleId] [uniqueidentifier] NOT NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[MatchingEntityTypeCode] [int] NOT NULL,
[BaseEntityMatchCodeTable] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[BaseEntityName] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[MatchingEntityName] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[CreatedOn] [datetime] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[OwnerId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_DuplicateRuleBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_DuplicateRuleBase_OwnerIdType] DEFAULT ((8)),
[ExcludeInactiveRecords] [bit] NULL CONSTRAINT [DF_DuplicateRuleBase_ExcludeInactiveRecords] DEFAULT ((0))
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[DuplicateRuleBase] ADD CONSTRAINT [cndx_PrimaryKey_DuplicateRule] PRIMARY KEY CLUSTERED  ([DuplicateRuleId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_BaseEntityName] ON [dbo].[DuplicateRuleBase] ([BaseEntityName]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_MatchingEntityName] ON [dbo].[DuplicateRuleBase] ([MatchingEntityName]) WHERE ([MatchingEntityName] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name] ON [dbo].[DuplicateRuleBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[DuplicateRuleBase] ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_BusinessUnit_DuplicateRules] ON [dbo].[DuplicateRuleBase] ([OwningBusinessUnit]) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[DuplicateRuleBase] ([StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
