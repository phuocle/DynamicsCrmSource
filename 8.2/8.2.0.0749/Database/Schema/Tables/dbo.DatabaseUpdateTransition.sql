CREATE TABLE [dbo].[DatabaseUpdateTransition]
(
[TransitionDateTime] [datetime] NULL,
[CurrentBuildVersion] [nvarchar] (48) COLLATE Latin1_General_CI_AI NULL,
[CurrentMetadataVersion] [nvarchar] (48) COLLATE Latin1_General_CI_AI NULL,
[CurrentMetadataForMetadataVersion] [nvarchar] (48) COLLATE Latin1_General_CI_AI NULL,
[TargetVersion] [nvarchar] (48) COLLATE Latin1_General_CI_AI NULL,
[IsUninstall] [bit] NULL
) ON [PRIMARY]
GO
