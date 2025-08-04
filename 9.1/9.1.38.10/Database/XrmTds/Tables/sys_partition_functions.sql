CREATE TABLE [XrmTds].[sys_partition_functions] (
    [name]                    [sysname]     NOT NULL,
    [function_id]             INT           NOT NULL,
    [type]                    CHAR (2)      NOT NULL,
    [type_desc]               NVARCHAR (60) NULL,
    [fanout]                  INT           NOT NULL,
    [boundary_value_on_right] BIT           NOT NULL,
    [is_system]               BIT           NOT NULL,
    [create_date]             DATETIME      NOT NULL,
    [modify_date]             DATETIME      NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_sys_partition_functions] PRIMARY KEY CLUSTERED ([function_id] ASC)
);


GO
GRANT SELECT
    ON OBJECT::[XrmTds].[sys_partition_functions] TO [CRMReaderRole]
    AS [dbo];

