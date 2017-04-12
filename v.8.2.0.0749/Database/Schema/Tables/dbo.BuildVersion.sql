CREATE TABLE [dbo].[BuildVersion]
(
[BuildDate] [datetime] NOT NULL,
[TimeStamp] [timestamp] NULL,
[BuildNumber] [int] NULL,
[BuildQFE] [int] NULL CONSTRAINT [Set_To_Zero100] DEFAULT ((0)),
[MajorVersion] [int] NULL,
[MinorVersion] [int] NULL,
[Revision] [int] NULL,
[LastDatabaseQfe] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[MinSupportedClient] [nvarchar] (20) COLLATE Latin1_General_CI_AI NULL,
[MaxSupportedClient] [nvarchar] (20) COLLATE Latin1_General_CI_AI NULL,
[MinSupportedRouter] [nvarchar] (20) COLLATE Latin1_General_CI_AI NULL,
[MaxSupportedRouter] [nvarchar] (20) COLLATE Latin1_General_CI_AI NULL,
[RevisionForMetadata] [int] NULL,
[MajorVersionForMetadata] [int] NULL,
[MinorVersionForMetadata] [int] NULL,
[BuildNumberForMetadata] [int] NULL,
[MajorVersionForMetadataForMetadata] [int] NULL,
[MinorVersionForMetadataForMetadata] [int] NULL,
[BuildNumberForMetadataForMetadata] [int] NULL,
[RevisionForMetadataForMetadata] [int] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[BuildVersion] ADD CONSTRAINT [PK_BuildVersion] PRIMARY KEY CLUSTERED  ([BuildDate]) ON [PRIMARY]
GO
