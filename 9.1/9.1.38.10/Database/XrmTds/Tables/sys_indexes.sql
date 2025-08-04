CREATE TABLE [XrmTds].[sys_indexes] (
    [object_id]            INT              NOT NULL,
    [name]                 [sysname]        DEFAULT (NULL) NULL,
    [index_id]             INT              NOT NULL,
    [type]                 TINYINT          DEFAULT ((-1)) NOT NULL,
    [type_desc]            NVARCHAR (60)    DEFAULT (NULL) NULL,
    [is_unique]            BIT              NULL,
    [data_space_id]        INT              DEFAULT ((1)) NULL,
    [ignore_dup_key]       BIT              DEFAULT ((0)) NULL,
    [is_primary_key]       BIT              NULL,
    [is_unique_constraint] BIT              NULL,
    [fill_factor]          TINYINT          DEFAULT ((0)) NOT NULL,
    [is_padded]            BIT              DEFAULT ((0)) NULL,
    [is_disabled]          BIT              DEFAULT ((0)) NULL,
    [is_hypothetical]      BIT              DEFAULT ((0)) NULL,
    [allow_row_locks]      BIT              DEFAULT ((1)) NULL,
    [allow_page_locks]     BIT              DEFAULT ((1)) NULL,
    [has_filter]           BIT              DEFAULT ((0)) NULL,
    [filter_definition]    NVARCHAR (MAX)   DEFAULT (NULL) NULL,
    [compression_delay]    INT              DEFAULT (NULL) NULL,
    [IndexId]              UNIQUEIDENTIFIER NOT NULL
);


GO
CREATE CLUSTERED INDEX [cndx_sys_indexes]
    ON [XrmTds].[sys_indexes]([object_id] ASC, [index_id] ASC);


GO
GRANT SELECT
    ON OBJECT::[XrmTds].[sys_indexes] TO [CRMReaderRole]
    AS [dbo];

