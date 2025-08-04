CREATE TABLE [dbo].[SystemApplicationMetadataBase] (
    [Version]                     NVARCHAR (100)   NULL,
    [ModifiedOn]                  DATETIME         NULL,
    [SourceId]                    NVARCHAR (300)   NULL,
    [Lcid]                        INT              NULL,
    [FormFactor]                  INT              NULL,
    [ModifiedOnBehalfBy]          UNIQUEIDENTIFIER NULL,
    [CreatedOn]                   DATETIME         NULL,
    [SystemApplicationMetadataId] UNIQUEIDENTIFIER NOT NULL,
    [Dependency]                  NVARCHAR (MAX)   NULL,
    [CreatedBy]                   UNIQUEIDENTIFIER NULL,
    [Data]                        NVARCHAR (MAX)   NULL,
    [DisplayName]                 NVARCHAR (100)   NULL,
    [AssociatedEntityLogicalName] NVARCHAR (128)   NULL,
    [ModifiedBy]                  UNIQUEIDENTIFIER NULL,
    [IsDefault]                   BIT              NULL,
    [MetadataType]                INT              NULL,
    [OrganizationId]              UNIQUEIDENTIFIER NOT NULL,
    [MetadataSubtype]             INT              NULL,
    [State]                       INT              NULL,
    [CreatedOnBehalfBy]           UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_SystemApplicationMetadataBase] PRIMARY KEY CLUSTERED ([SystemApplicationMetadataId] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[SystemApplicationMetadataBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[SystemApplicationMetadataBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_SystemApplicationMetadataBase_sourceid]
    ON [dbo].[SystemApplicationMetadataBase]([SourceId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_SystemApplicationMetadataBase_modifiedon]
    ON [dbo].[SystemApplicationMetadataBase]([ModifiedOn] DESC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_MetadataTypeFormFactorAssociatedEntityLogicalName]
    ON [dbo].[SystemApplicationMetadataBase]([MetadataType] ASC, [FormFactor] ASC, [AssociatedEntityLogicalName] ASC)
    INCLUDE([State]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

