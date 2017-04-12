CREATE TABLE [dbo].[PostFollowBase]
(
[OwnerId] [uniqueidentifier] NOT NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[YammerRetryCount] [int] NULL,
[PostToYammer] [bit] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[PostFollowId] [uniqueidentifier] NOT NULL,
[RegardingObjectId] [uniqueidentifier] NOT NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NOT NULL,
[YammerPostState] [int] NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_PostFollowBase_OwnerIdType] DEFAULT ((8)),
[RegardingObjectIdName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[RegardingObjectTypeCode] [int] NULL,
[RegardingObjectIdYomiName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[VersionNumber] [timestamp] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[PostFollowBase] ADD CONSTRAINT [PK_PostFollowBase] PRIMARY KEY NONCLUSTERED  ([PostFollowId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_CreatedOn] ON [dbo].[PostFollowBase] ([CreatedOn]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[PostFollowBase] ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_business_unit] ON [dbo].[PostFollowBase] ([OwningBusinessUnit]) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE CLUSTERED INDEX [ndx_PostFollower] ON [dbo].[PostFollowBase] ([RegardingObjectId], [RegardingObjectTypeCode], [OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_RegardingObjectIdName] ON [dbo].[PostFollowBase] ([RegardingObjectIdName]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[PostFollowBase] ADD CONSTRAINT [business_unit_postfollows] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[PostFollowBase] ADD CONSTRAINT [owner_postfollows] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
