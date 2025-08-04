CREATE TABLE [dbo].[msdyn_PostAlbumBase]
(
[msdyn_PostAlbumId] [uniqueidentifier] NOT NULL,
[CreatedOn] [datetime] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[OwnerId] [uniqueidentifier] NOT NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_msdyn_PostAlbumBase_OwnerIdType] DEFAULT ((8)),
[OwningBusinessUnit] [uniqueidentifier] NULL,
[statecode] [int] NOT NULL,
[statuscode] [int] NULL,
[VersionNumber] [timestamp] NULL,
[ImportSequenceNumber] [int] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[msdyn_name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[msdyn_PostAlbumBase] ADD CONSTRAINT [PK_msdyn_PostAlbumBase] PRIMARY KEY CLUSTERED  ([msdyn_PostAlbumId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_msdyn_name] ON [dbo].[msdyn_PostAlbumBase] ([msdyn_name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[msdyn_PostAlbumBase] ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[msdyn_PostAlbumBase] ([statecode], [statuscode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Sync] ON [dbo].[msdyn_PostAlbumBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[msdyn_PostAlbumBase] ADD CONSTRAINT [business_unit_msdyn_postalbum] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[msdyn_PostAlbumBase] ADD CONSTRAINT [owner_msdyn_postalbum] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
