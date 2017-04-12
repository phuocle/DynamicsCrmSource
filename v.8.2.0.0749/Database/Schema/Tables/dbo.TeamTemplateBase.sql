CREATE TABLE [dbo].[TeamTemplateBase]
(
[CreatedBy] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[DefaultAccessRightsMask] [int] NOT NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NULL,
[ObjectTypeCode] [int] NOT NULL,
[TeamTemplateName] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[TeamTemplateId] [uniqueidentifier] NOT NULL,
[ModifiedOn] [datetime] NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[IsSystem] [bit] NOT NULL CONSTRAINT [DF_TeamTemplateBase_IsSystem] DEFAULT ((0))
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[TeamTemplateBase] ADD CONSTRAINT [cndx_PrimaryKey_TeamTemplate] PRIMARY KEY CLUSTERED  ([TeamTemplateId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
