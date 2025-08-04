CREATE TABLE [dbo].[PostBase]
(
[PostId] [uniqueidentifier] NOT NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[PostRegardingId] [uniqueidentifier] NOT NULL,
[YammerRetryCount] [int] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[Text] [nvarchar] (2000) COLLATE Latin1_General_CI_AI NULL,
[CreatedOn] [datetime] NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[ModifiedOn] [datetime] NULL,
[Source] [int] NULL,
[Type] [int] NULL,
[PostToYammer] [bit] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[YammerPostState] [int] NULL,
[CreatedBy] [uniqueidentifier] NOT NULL,
[UTCConversionTimeZoneCode] [int] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[PostBase] ADD CONSTRAINT [PK_PostBase] PRIMARY KEY NONCLUSTERED  ([PostId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_CreatedBy] ON [dbo].[PostBase] ([CreatedBy]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE CLUSTERED INDEX [ndx_ModifiedOn] ON [dbo].[PostBase] ([ModifiedOn]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_PostRegarding] ON [dbo].[PostBase] ([PostRegardingId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[PostBase] ADD CONSTRAINT [post_PostRegardings] FOREIGN KEY ([PostRegardingId]) REFERENCES [dbo].[PostRegardingBase] ([PostRegardingId])
GO
