CREATE TABLE [XrmTds].[sys_xml_indexes] (
    [object_id]                  INT            NOT NULL,
    [name]                       [sysname]      NULL,
    [index_id]                   INT            NOT NULL,
    [type]                       TINYINT        NOT NULL,
    [type_desc]                  NVARCHAR (60)  NULL,
    [is_unique]                  BIT            NULL,
    [data_space_id]              INT            NOT NULL,
    [ignore_dup_key]             BIT            NULL,
    [is_primary_key]             BIT            NULL,
    [is_unique_constraint]       BIT            NULL,
    [fill_factor]                TINYINT        NOT NULL,
    [is_padded]                  BIT            NULL,
    [is_disabled]                BIT            NULL,
    [is_hypothetical]            BIT            NULL,
    [is_ignored_in_optimization] BIT            NULL,
    [allow_row_locks]            BIT            NULL,
    [allow_page_locks]           BIT            NULL,
    [using_xml_index_id]         INT            NULL,
    [secondary_type]             CHAR (1)       NULL,
    [secondary_type_desc]        NVARCHAR (60)  NULL,
    [has_filter]                 BIT            NOT NULL,
    [filter_definition]          NVARCHAR (MAX) NULL,
    [xml_index_type]             TINYINT        NULL,
    [xml_index_type_description] NVARCHAR (60)  NULL,
    [path_id]                    INT            NULL,
    [auto_created]               BIT            NULL,
    CONSTRAINT [cndx_PrimaryKey_sys_xml_indexes] PRIMARY KEY CLUSTERED ([object_id] ASC, [index_id] ASC)
);


GO
GRANT SELECT
    ON OBJECT::[XrmTds].[sys_xml_indexes] TO [CRMReaderRole]
    AS [dbo];

