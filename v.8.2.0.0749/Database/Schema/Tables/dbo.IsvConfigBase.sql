CREATE TABLE [dbo].[IsvConfigBase]
(
[ConfigXML] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[CreatedBy] [uniqueidentifier] NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[VersionNumber] [timestamp] NULL,
[CreatedOn] [datetime] NULL,
[IsvConfigId] [uniqueidentifier] NOT NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[IsvConfigBase] ADD CONSTRAINT [PK_IsvConfigBase] PRIMARY KEY CLUSTERED  ([IsvConfigId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[IsvConfigBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
