CREATE TABLE [dbo].[InvalidDependencyBase] (
    [IsExistingNodeRequiredComponent] BIT              NULL,
    [ExistingDependencyType]          INT              CONSTRAINT [DF_InvalidDependencyBase_ExistingDependencyType] DEFAULT ((0)) NOT NULL,
    [MissingComponentLookupType]      INT              CONSTRAINT [DF_InvalidDependencyBase_MissingComponentLookupType] DEFAULT ((0)) NOT NULL,
    [MissingComponentId]              UNIQUEIDENTIFIER NULL,
    [MissingComponentType]            INT              CONSTRAINT [DF_InvalidDependencyBase_MissingComponentType] DEFAULT ((0)) NOT NULL,
    [InvalidDependencyId]             UNIQUEIDENTIFIER NOT NULL,
    [MissingComponentInfo]            NVARCHAR (MAX)   NULL,
    [ExistingComponentId]             UNIQUEIDENTIFIER NULL,
    [ExistingComponentType]           INT              NULL,
    CONSTRAINT [cndx_PrimaryKey_InvalidDependency] PRIMARY KEY CLUSTERED ([InvalidDependencyId] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[InvalidDependencyBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[InvalidDependencyBase] SET (LOCK_ESCALATION = DISABLE);

