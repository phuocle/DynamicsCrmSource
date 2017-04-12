CREATE TABLE [dbo].[MetadataDifference]
(
[CreatedOn] [datetime] NULL,
[IntroducedVersionString] [nvarchar] (48) COLLATE Latin1_General_CI_AI NULL,
[ModifiedOn] [datetime] NULL,
[MetadataDifferenceId] [uniqueidentifier] NOT NULL,
[DifferenceXml] [nvarchar] (max) COLLATE Latin1_General_CI_AI NOT NULL,
[SolutionId] [uniqueidentifier] NOT NULL,
[IntroducedVersion] [float] NOT NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[MetadataDifference] ADD CONSTRAINT [cndx_PrimaryKey_MetadataDifference] PRIMARY KEY CLUSTERED  ([MetadataDifferenceId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Unique_VersionNumber] ON [dbo].[MetadataDifference] ([IntroducedVersion], [SolutionId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
