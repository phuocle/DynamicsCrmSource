CREATE TABLE [dbo].[SLABaseIds]
(
[SLAId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SLABaseIds] ADD CONSTRAINT [PK_SLABaseIds] PRIMARY KEY CLUSTERED  ([SLAId]) ON [PRIMARY]
GO