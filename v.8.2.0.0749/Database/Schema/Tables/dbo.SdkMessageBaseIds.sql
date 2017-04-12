CREATE TABLE [dbo].[SdkMessageBaseIds]
(
[SdkMessageId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SdkMessageBaseIds] ADD CONSTRAINT [PK_SdkMessageBaseIds] PRIMARY KEY CLUSTERED  ([SdkMessageId]) ON [PRIMARY]
GO
