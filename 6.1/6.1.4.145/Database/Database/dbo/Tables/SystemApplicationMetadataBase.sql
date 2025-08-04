CREATE TABLE [dbo].[SystemApplicationMetadataBase] (
    [Version]                     NVARCHAR (100)   NULL,
    [ModifiedOn]                  DATETIME         NULL,
    [CreatedBy]                   UNIQUEIDENTIFIER NULL,
    [MetadataType]                INT              NULL,
    [SourceId]                    NVARCHAR (300)   NULL,
    [FormFactor]                  INT              NULL,
    [ModifiedBy]                  UNIQUEIDENTIFIER NULL,
    [Data]                        NVARCHAR (MAX)   NULL,
    [CreatedOn]                   DATETIME         NULL,
    [Lcid]                        INT              NULL,
    [AssociatedEntityLogicalName] NVARCHAR (64)    NULL,
    [SystemApplicationMetadataId] UNIQUEIDENTIFIER NOT NULL,
    [DisplayName]                 NVARCHAR (100)   NULL,
    [ModifiedOnBehalfBy]          UNIQUEIDENTIFIER NULL,
    [State]                       INT              NULL,
    [IsDefault]                   BIT              NULL,
    [OrganizationId]              UNIQUEIDENTIFIER NOT NULL,
    [MetadataSubtype]             INT              NULL,
    [CreatedOnBehalfBy]           UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_SystemApplicationMetadataBase] PRIMARY KEY CLUSTERED ([SystemApplicationMetadataId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE NONCLUSTERED INDEX [ndx_SystemApplicationMetadataBase_sourceid]
    ON [dbo].[SystemApplicationMetadataBase]([SourceId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_SystemApplicationMetadataBase_modifiedon]
    ON [dbo].[SystemApplicationMetadataBase]([ModifiedOn] DESC) WITH (FILLFACTOR = 80);

