CREATE TABLE [MetadataSchema].[AttributeTypes] (
    [AttributeTypeId]   UNIQUEIDENTIFIER ROWGUIDCOL NOT NULL,
    [Description]       NVARCHAR (255)   NULL,
    [SQLServerType]     INT              NULL,
    [Quoted]            BIT              NOT NULL,
    [XmlType]           NVARCHAR (255)   NULL,
    [IntroducedVersion] NVARCHAR (24)    NOT NULL,
    CONSTRAINT [XPKAttributeTypes] PRIMARY KEY CLUSTERED ([AttributeTypeId] ASC)
);


GO
ALTER TABLE [MetadataSchema].[AttributeTypes] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_AttributeTypeId_Include_DescriptionQuoted]
    ON [MetadataSchema].[AttributeTypes]([AttributeTypeId] ASC)
    INCLUDE([Description], [Quoted]) WITH (FILLFACTOR = 100);

