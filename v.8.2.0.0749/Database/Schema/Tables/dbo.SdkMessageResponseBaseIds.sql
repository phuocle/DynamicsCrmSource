CREATE TABLE [dbo].[SdkMessageResponseBaseIds]
(
[SdkMessageResponseId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SdkMessageResponseBaseIds] ADD CONSTRAINT [PK_SdkMessageResponseBaseIds] PRIMARY KEY CLUSTERED  ([SdkMessageResponseId]) ON [PRIMARY]
GO
