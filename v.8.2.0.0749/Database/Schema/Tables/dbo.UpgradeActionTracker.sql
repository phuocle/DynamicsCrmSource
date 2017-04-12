CREATE TABLE [dbo].[UpgradeActionTracker]
(
[ActionId] [uniqueidentifier] NOT NULL,
[UpgradeToVersionNumber] [nvarchar] (20) COLLATE Latin1_General_CI_AI NULL,
[ExecutionOrder] [int] NOT NULL IDENTITY(1, 1),
[WasExecuted] [bit] NOT NULL,
[ActionName] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[ExecutionTime] [nvarchar] (64) COLLATE Latin1_General_CI_AI NULL,
[HashFile] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[HashValue] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[CreatedOnUtc] [datetime] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
CREATE CLUSTERED INDEX [cndx_UpgradeActionTracker] ON [dbo].[UpgradeActionTracker] ([ActionId]) ON [PRIMARY]
GO
