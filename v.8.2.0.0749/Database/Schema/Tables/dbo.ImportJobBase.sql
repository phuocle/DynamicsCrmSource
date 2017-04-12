CREATE TABLE [dbo].[ImportJobBase]
(
[CompletedOn] [datetime] NULL,
[StartedOn] [datetime] NULL,
[ImportJobId] [uniqueidentifier] NOT NULL,
[ModifiedOn] [datetime] NULL,
[Data] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[CreatedOn] [datetime] NULL,
[Name] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[SolutionName] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[OrganizationId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_ImportJobBase_OrganizationId] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[Progress] [float] NULL,
[ModifiedBy] [uniqueidentifier] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[ImportJobBase] ADD CONSTRAINT [cndx_PrimaryKey_ImportJob] PRIMARY KEY CLUSTERED  ([ImportJobId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_SolutionName] ON [dbo].[ImportJobBase] ([SolutionName]) WHERE ([SolutionName] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_SolutionName] ON [dbo].[ImportJobBase] ([SolutionName]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
