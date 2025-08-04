CREATE TABLE [MetadataSchema].[AttributeTypes] (
    [AttributeTypeId]   UNIQUEIDENTIFIER ROWGUIDCOL NOT NULL,
    [Description]       NVARCHAR (255)   NULL,
    [SQLServerType]     INT              NULL,
    [Quoted]            BIT              NOT NULL,
    [XmlType]           NVARCHAR (255)   NULL,
    [IntroducedVersion] NVARCHAR (24)    NOT NULL,
    CONSTRAINT [XPKAttributeTypes] PRIMARY KEY CLUSTERED ([AttributeTypeId] ASC)
);

