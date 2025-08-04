CREATE TABLE [XrmTds].[sys_xml_schema_collections] (
    [xml_collection_id] INT       NOT NULL,
    [schema_id]         INT       NOT NULL,
    [principal_id]      INT       NULL,
    [name]              [sysname] NOT NULL,
    [create_date]       DATETIME  NOT NULL,
    [modify_date]       DATETIME  NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_sys_xml_schema_collections] PRIMARY KEY CLUSTERED ([xml_collection_id] ASC)
);


GO
GRANT SELECT
    ON OBJECT::[XrmTds].[sys_xml_schema_collections] TO [CRMReaderRole]
    AS [dbo];

