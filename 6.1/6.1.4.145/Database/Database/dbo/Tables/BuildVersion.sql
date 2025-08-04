CREATE TABLE [dbo].[BuildVersion] (
    [BuildDate]                          DATETIME       NOT NULL,
    [TimeStamp]                          ROWVERSION     NULL,
    [BuildNumber]                        INT            NULL,
    [BuildQFE]                           INT            CONSTRAINT [Set_To_Zero100] DEFAULT ((0)) NULL,
    [MajorVersion]                       INT            NULL,
    [MinorVersion]                       INT            NULL,
    [Revision]                           INT            NULL,
    [LastDatabaseQfe]                    NVARCHAR (100) NULL,
    [MinSupportedClient]                 NVARCHAR (20)  NULL,
    [MaxSupportedClient]                 NVARCHAR (20)  NULL,
    [MinSupportedRouter]                 NVARCHAR (20)  NULL,
    [MaxSupportedRouter]                 NVARCHAR (20)  NULL,
    [RevisionForMetadata]                INT            NULL,
    [MajorVersionForMetadata]            INT            NULL,
    [MinorVersionForMetadata]            INT            NULL,
    [BuildNumberForMetadata]             INT            NULL,
    [MajorVersionForMetadataForMetadata] INT            NULL,
    [MinorVersionForMetadataForMetadata] INT            NULL,
    [BuildNumberForMetadataForMetadata]  INT            NULL,
    [RevisionForMetadataForMetadata]     INT            NULL,
    CONSTRAINT [PK_BuildVersion] PRIMARY KEY CLUSTERED ([BuildDate] ASC)
);

