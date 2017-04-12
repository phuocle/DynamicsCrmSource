CREATE TABLE [dbo].[UserSearchFacetBase]
(
[AttributeName] [nvarchar] (50) COLLATE Latin1_General_CI_AI NOT NULL,
[UserSearchFacetId] [uniqueidentifier] NOT NULL,
[EntityName] [nvarchar] (64) COLLATE Latin1_General_CI_AI NOT NULL,
[FacetOrder] [int] NOT NULL,
[SystemUserId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[UserSearchFacetBase] ADD CONSTRAINT [cndx_UserSearchFacet] PRIMARY KEY CLUSTERED  ([SystemUserId], [EntityName], [AttributeName]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_EntityName] ON [dbo].[UserSearchFacetBase] ([EntityName]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_SystemUserId] ON [dbo].[UserSearchFacetBase] ([SystemUserId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[UserSearchFacetBase] ADD CONSTRAINT [UQ_User_Entity_AttributeOrderMap] UNIQUE NONCLUSTERED  ([SystemUserId], [EntityName], [AttributeName], [FacetOrder]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
