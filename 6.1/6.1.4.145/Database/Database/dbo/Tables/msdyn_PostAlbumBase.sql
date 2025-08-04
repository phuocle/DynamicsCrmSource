CREATE TABLE [dbo].[msdyn_PostAlbumBase] (
    [msdyn_PostAlbumId]         UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [OwnerId]                   UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_msdyn_PostAlbumBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [statecode]                 INT              NOT NULL,
    [statuscode]                INT              NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [msdyn_name]                NVARCHAR (100)   NULL,
    CONSTRAINT [PK_msdyn_PostAlbumBase] PRIMARY KEY CLUSTERED ([msdyn_PostAlbumId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_msdyn_postalbum] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]) NOT FOR REPLICATION,
    CONSTRAINT [owner_msdyn_postalbum] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]) NOT FOR REPLICATION
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[msdyn_PostAlbumBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[msdyn_PostAlbumBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[msdyn_PostAlbumBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_msdyn_name]
    ON [dbo].[msdyn_PostAlbumBase]([msdyn_name] ASC) WITH (FILLFACTOR = 80);

