CREATE TABLE [XrmTds].[sys_data_spaces] (
    [name]          [sysname]     NOT NULL,
    [data_space_id] INT           NOT NULL,
    [type]          CHAR (2)      NOT NULL,
    [type_desc]     NVARCHAR (60) NULL,
    [is_default]    BIT           NOT NULL,
    [is_system]     BIT           NULL,
    CONSTRAINT [cndx_PrimaryKey_sys_data_spaces] PRIMARY KEY CLUSTERED ([data_space_id] ASC)
);


GO
GRANT SELECT
    ON OBJECT::[XrmTds].[sys_data_spaces] TO [CRMReaderRole]
    AS [dbo];

