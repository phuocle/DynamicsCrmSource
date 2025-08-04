CREATE TABLE [dbo].[SLAKPIInstanceBaseIds]
(
[SLAKPIInstanceId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SLAKPIInstanceBaseIds] ADD CONSTRAINT [PK_SLAKPIInstanceBaseIds] PRIMARY KEY CLUSTERED  ([SLAKPIInstanceId]) ON [PRIMARY]
GO
