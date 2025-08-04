CREATE TABLE [dbo].[BusinessUnitNewsArticleBase]
(
[OrganizationId] [uniqueidentifier] NOT NULL,
[BusinessUnitNewsArticleId] [uniqueidentifier] NOT NULL,
[ActiveOn] [datetime] NULL,
[ActiveUntil] [datetime] NULL,
[NewsArticle] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[ArticleTypeCode] [int] NULL,
[ShowOnHomepage] [bit] NULL CONSTRAINT [Set_To_Zero101] DEFAULT ((0)),
[ArticleTitle] [nvarchar] (300) COLLATE Latin1_General_CI_AI NULL,
[ArticleUrl] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[CreatedOn] [datetime] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[VersionNumber] [timestamp] NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[ImportSequenceNumber] [int] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[BusinessUnitNewsArticleBase] ADD CONSTRAINT [cndx_PrimaryKey_BusinessUnitNewsArticle] PRIMARY KEY CLUSTERED  ([BusinessUnitNewsArticleId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_ArticleTitle] ON [dbo].[BusinessUnitNewsArticleBase] ([ArticleTitle]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[BusinessUnitNewsArticleBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
