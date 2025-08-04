CREATE TABLE [dbo].[PostCommentBase]
(
[CreatedBy] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[Text] [nvarchar] (1000) COLLATE Latin1_General_CI_AI NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[CreatedOn] [datetime] NOT NULL,
[PostCommentId] [uniqueidentifier] NOT NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[PostId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[PostCommentBase] ADD CONSTRAINT [PK_PostCommentBase] PRIMARY KEY NONCLUSTERED  ([PostCommentId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_CreatedOn] ON [dbo].[PostCommentBase] ([CreatedOn]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE CLUSTERED INDEX [ndx_Post] ON [dbo].[PostCommentBase] ([PostId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[PostCommentBase] ADD CONSTRAINT [Post_Comments] FOREIGN KEY ([PostId]) REFERENCES [dbo].[PostBase] ([PostId])
GO
