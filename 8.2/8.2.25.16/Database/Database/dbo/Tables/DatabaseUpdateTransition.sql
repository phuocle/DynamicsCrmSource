CREATE TABLE [dbo].[DatabaseUpdateTransition] (
    [TransitionDateTime]                DATETIME      NULL,
    [CurrentBuildVersion]               NVARCHAR (48) NULL,
    [CurrentMetadataVersion]            NVARCHAR (48) NULL,
    [CurrentMetadataForMetadataVersion] NVARCHAR (48) NULL,
    [TargetVersion]                     NVARCHAR (48) NULL,
    [IsUninstall]                       BIT           NULL
);

