CREATE TABLE [dbo].[EmailSearchBase]
(
[EmailAddress] [nvarchar] (160) COLLATE Latin1_General_CI_AI NOT NULL,
[VersionNumber] [timestamp] NULL,
[ParentObjectId] [uniqueidentifier] NOT NULL,
[EmailSearchId] [uniqueidentifier] NOT NULL,
[ParentObjectTypeCode] [int] NULL,
[EmailColumnNumber] [int] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[EmailSearchBase] ADD CONSTRAINT [cndx_PrimaryKey_EmailSearch] PRIMARY KEY CLUSTERED  ([EmailSearchId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_emailaddress_for_search] ON [dbo].[EmailSearchBase] ([EmailAddress]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_emailaddress_for_specificobject_search] ON [dbo].[EmailSearchBase] ([EmailAddress], [ParentObjectTypeCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_for_forward_update] ON [dbo].[EmailSearchBase] ([ParentObjectId], [EmailColumnNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[EmailSearchBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
