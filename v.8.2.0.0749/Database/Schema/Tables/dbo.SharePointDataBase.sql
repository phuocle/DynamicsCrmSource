CREATE TABLE [dbo].[SharePointDataBase]
(
[RegardingObjectId] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NOT NULL,
[NextPageToken] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[SharePointDataId] [uniqueidentifier] NOT NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[UserId] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[Location] [uniqueidentifier] NULL,
[Data] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[PreviousPageToken] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[CreatedOn] [datetime] NOT NULL,
[IsValid] [bit] NULL CONSTRAINT [DF_SharePointDataBase_IsValid] DEFAULT ((1)),
[OrganizationId] [uniqueidentifier] NOT NULL,
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_SharePointDataBase_OverwriteTime] DEFAULT ((0)),
[RegardingObjectTypeCode] [int] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[SharePointDataBase] ADD CONSTRAINT [ndx_PrimaryKey_SharePointData] PRIMARY KEY CLUSTERED  ([SharePointDataId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
