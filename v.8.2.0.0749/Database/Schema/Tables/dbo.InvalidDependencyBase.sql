CREATE TABLE [dbo].[InvalidDependencyBase]
(
[IsExistingNodeRequiredComponent] [bit] NULL,
[ExistingDependencyType] [int] NOT NULL CONSTRAINT [DF_InvalidDependencyBase_ExistingDependencyType] DEFAULT ((0)),
[MissingComponentLookupType] [int] NOT NULL CONSTRAINT [DF_InvalidDependencyBase_MissingComponentLookupType] DEFAULT ((0)),
[MissingComponentId] [uniqueidentifier] NULL,
[MissingComponentInfo] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[InvalidDependencyId] [uniqueidentifier] NOT NULL,
[ExistingComponentId] [uniqueidentifier] NULL,
[ExistingComponentType] [int] NULL,
[MissingComponentType] [int] NOT NULL CONSTRAINT [DF_InvalidDependencyBase_MissingComponentType] DEFAULT ((0))
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[InvalidDependencyBase] ADD CONSTRAINT [cndx_PrimaryKey_InvalidDependency] PRIMARY KEY CLUSTERED  ([InvalidDependencyId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
