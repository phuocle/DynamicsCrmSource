CREATE TABLE [dbo].[UserApplicationMetadataBase] (
    [State]                       INT              NULL,
    [OwnerId]                     UNIQUEIDENTIFIER NOT NULL,
    [CreatedBy]                   UNIQUEIDENTIFIER NULL,
    [AssociatedEntityLogicalName] NVARCHAR (64)    NULL,
    [CreatedOnBehalfBy]           UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]          UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                  UNIQUEIDENTIFIER NULL,
    [DisplayName]                 NVARCHAR (100)   NULL,
    [UserApplicationMetadataId]   UNIQUEIDENTIFIER NOT NULL,
    [OwningBusinessUnit]          UNIQUEIDENTIFIER NULL,
    [MetadataType]                INT              NULL,
    [Data]                        NVARCHAR (MAX)   NULL,
    [FormFactor]                  INT              NULL,
    [Lcid]                        INT              NULL,
    [MetadataSubtype]             INT              NULL,
    [SourceId]                    NVARCHAR (36)    NULL,
    [IsDefault]                   BIT              NULL,
    [ModifiedOn]                  DATETIME         NULL,
    [CreatedOn]                   DATETIME         NULL,
    [OwnerIdType]                 INT              CONSTRAINT [DF_UserApplicationMetadataBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_UserApplicationMetadataBase] PRIMARY KEY CLUSTERED ([UserApplicationMetadataId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_userapplicationmetadata] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]) NOT FOR REPLICATION,
    CONSTRAINT [owner_userapplicationmetadata] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]) NOT FOR REPLICATION
);


GO
CREATE NONCLUSTERED INDEX [ndx_UserApplicationMetadataBase_modifiedon]
    ON [dbo].[UserApplicationMetadataBase]([ModifiedOn] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_UserApplicationMetadataBase_sourceid]
    ON [dbo].[UserApplicationMetadataBase]([SourceId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[UserApplicationMetadataBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);

