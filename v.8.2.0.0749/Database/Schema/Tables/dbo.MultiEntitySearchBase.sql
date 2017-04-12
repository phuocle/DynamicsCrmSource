CREATE TABLE [dbo].[MultiEntitySearchBase]
(
[ModifiedOn] [datetime] NULL,
[Name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[MultiEntitySearchId] [uniqueidentifier] NOT NULL,
[CreatedBy] [uniqueidentifier] NOT NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NULL,
[VersionNumber] [timestamp] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[MultiEntitySearchBase] ADD CONSTRAINT [PK_MultiEntitySearchBase] PRIMARY KEY CLUSTERED  ([MultiEntitySearchId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_MultiEntitySearchBase_Name] ON [dbo].[MultiEntitySearchBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[MultiEntitySearchBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
