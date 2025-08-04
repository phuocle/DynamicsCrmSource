CREATE TABLE [MetadataSchema].[AttributePicklistValue] (
    [AttributePicklistValueId]    UNIQUEIDENTIFIER NOT NULL,
    [AttributePicklistValueRowId] UNIQUEIDENTIFIER DEFAULT (newid()) NOT NULL,
    [Value]                       INT              NOT NULL,
    [State_Status_Value]          INT              NULL,
    [InvariantName]               NVARCHAR (50)    NULL,
    [DisplayOrder]                INT              NULL,
    [VersionNumber]               ROWVERSION       NOT NULL,
    [OptionSetId]                 UNIQUEIDENTIFIER NOT NULL,
    [SolutionId]                  UNIQUEIDENTIFIER DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId]        UNIQUEIDENTIFIER DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [ComponentState]              TINYINT          DEFAULT ((0)) NOT NULL,
    [OverwriteTime]               DATETIME         DEFAULT ((0)) NOT NULL,
    [IsManaged]                   BIT              DEFAULT ((0)) NOT NULL,
    [TransitionData]              NVARCHAR (MAX)   NULL,
    [ParentValues]                NVARCHAR (4000)  NULL,
    [ExternalValue]               NVARCHAR (64)    NULL,
    [Color]                       NVARCHAR (10)    NULL,
    CONSTRAINT [XPKAttributePicklistValue] PRIMARY KEY CLUSTERED ([AttributePicklistValueId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC),
    CONSTRAINT [option_optionsetid] FOREIGN KEY ([OptionSetId]) REFERENCES [dbo].[OptionSetIds] ([OptionSetId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[MetadataSchema].[AttributePicklistValue]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [MetadataSchema].[AttributePicklistValue] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_AttributePicklistValue]
    ON [MetadataSchema].[AttributePicklistValue]([OptionSetId] ASC, [Value] ASC, [ComponentState] ASC, [SolutionId] ASC, [OverwriteTime] ASC)
    INCLUDE([AttributePicklistValueId], [State_Status_Value], [InvariantName], [DisplayOrder]);


GO
CREATE NONCLUSTERED INDEX [ndx_AttributePicklistValue_MetadataCache]
    ON [MetadataSchema].[AttributePicklistValue]([SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_AttributePicklistValue_RowId]
    ON [MetadataSchema].[AttributePicklistValue]([AttributePicklistValueRowId] ASC, [AttributePicklistValueId] ASC);

