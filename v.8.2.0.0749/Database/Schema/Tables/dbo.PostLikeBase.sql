CREATE TABLE [dbo].[PostLikeBase]
(
[OrganizationId] [uniqueidentifier] NOT NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NULL,
[PostId] [uniqueidentifier] NOT NULL,
[PostLikeId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[PostLikeBase] ADD CONSTRAINT [PK_PostLikeBase] PRIMARY KEY CLUSTERED  ([PostLikeId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_createdby] ON [dbo].[PostLikeBase] ([CreatedBy]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_CreatedByPostId] ON [dbo].[PostLikeBase] ([PostId], [CreatedBy]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[PostLikeBase] ADD CONSTRAINT [Post_Likes] FOREIGN KEY ([PostId]) REFERENCES [dbo].[PostBase] ([PostId])
GO
