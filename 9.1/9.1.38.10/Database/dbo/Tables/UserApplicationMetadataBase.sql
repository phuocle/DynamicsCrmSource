CREATE TABLE [dbo].[UserApplicationMetadataBase] (
    [Lcid]                        INT              NULL,
    [UserApplicationMetadataId]   UNIQUEIDENTIFIER NOT NULL,
    [SourceId]                    NVARCHAR (36)    NULL,
    [MetadataType]                INT              NULL,
    [AssociatedEntityLogicalName] NVARCHAR (128)   NULL,
    [ModifiedBy]                  UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                  DATETIME         NULL,
    [Data]                        NVARCHAR (MAX)   NULL,
    [FormFactor]                  INT              NULL,
    [Dependency]                  NVARCHAR (MAX)   NULL,
    [OwningBusinessUnit]          UNIQUEIDENTIFIER NULL,
    [CreatedOn]                   DATETIME         NULL,
    [ModifiedOnBehalfBy]          UNIQUEIDENTIFIER NULL,
    [DisplayName]                 NVARCHAR (100)   NULL,
    [OwnerId]                     UNIQUEIDENTIFIER NOT NULL,
    [IsDefault]                   BIT              NULL,
    [CreatedOnBehalfBy]           UNIQUEIDENTIFIER NULL,
    [CreatedBy]                   UNIQUEIDENTIFIER NULL,
    [MetadataSubtype]             INT              NULL,
    [State]                       INT              NULL,
    [OwnerIdType]                 INT              CONSTRAINT [DF_UserApplicationMetadataBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_UserApplicationMetadataBase] PRIMARY KEY CLUSTERED ([UserApplicationMetadataId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_userapplicationmetadata] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_userapplicationmetadata] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[UserApplicationMetadataBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[UserApplicationMetadataBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[UserApplicationMetadataBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_UserApplicationMetadataBase_modifiedon]
    ON [dbo].[UserApplicationMetadataBase]([ModifiedOn] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_UserApplicationMetadataBase_sourceid]
    ON [dbo].[UserApplicationMetadataBase]([SourceId] ASC) WITH (FILLFACTOR = 80);

