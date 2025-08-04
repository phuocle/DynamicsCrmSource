CREATE TABLE [XrmTds].[sys_partition_schemes] (
    [name]          [sysname]     NOT NULL,
    [data_space_id] INT           NOT NULL,
    [type]          CHAR (2)      NOT NULL,
    [type_desc]     NVARCHAR (60) NULL,
    [is_default]    BIT           NULL,
    [is_system]     BIT           NULL,
    [function_id]   INT           NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_sys_partition_schemes] PRIMARY KEY CLUSTERED ([data_space_id] ASC, [function_id] ASC)
);


GO
GRANT SELECT
    ON OBJECT::[XrmTds].[sys_partition_schemes] TO [CRMReaderRole]
    AS [dbo];

