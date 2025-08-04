CREATE TABLE [dbo].[InvalidDependencyBase] (
    [IsExistingNodeRequiredComponent] BIT              NULL,
    [ExistingDependencyType]          INT              CONSTRAINT [DF_InvalidDependencyBase_ExistingDependencyType] DEFAULT ((0)) NOT NULL,
    [MissingComponentLookupType]      INT              CONSTRAINT [DF_InvalidDependencyBase_MissingComponentLookupType] DEFAULT ((0)) NOT NULL,
    [MissingComponentId]              UNIQUEIDENTIFIER NULL,
    [MissingComponentInfo]            NVARCHAR (MAX)   NULL,
    [InvalidDependencyId]             UNIQUEIDENTIFIER NOT NULL,
    [ExistingComponentId]             UNIQUEIDENTIFIER NULL,
    [ExistingComponentType]           INT              NULL,
    [MissingComponentType]            INT              CONSTRAINT [DF_InvalidDependencyBase_MissingComponentType] DEFAULT ((0)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_InvalidDependency] PRIMARY KEY CLUSTERED ([InvalidDependencyId] ASC) WITH (FILLFACTOR = 80)
);

