CREATE TABLE [XrmTds].[sys_external_data_sources] (
    [data_source_id]            INT             NOT NULL,
    [name]                      NVARCHAR (128)  NOT NULL,
    [location]                  NVARCHAR (4000) NOT NULL,
    [type_desc]                 NVARCHAR (255)  NULL,
    [type]                      TINYINT         NOT NULL,
    [resource_manager_location] NVARCHAR (4000) NULL,
    [credential_id]             INT             NOT NULL,
    [database_name]             NVARCHAR (128)  NULL,
    [shard_map_name]            NVARCHAR (128)  NULL,
    [connection_options]        NVARCHAR (4000) NULL,
    [pushdown]                  NVARCHAR (256)  NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_sys_external_data_sources] PRIMARY KEY CLUSTERED ([data_source_id] ASC)
);


GO
GRANT SELECT
    ON OBJECT::[XrmTds].[sys_external_data_sources] TO [CRMReaderRole]
    AS [dbo];

