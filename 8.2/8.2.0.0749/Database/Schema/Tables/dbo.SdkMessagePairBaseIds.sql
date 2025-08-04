CREATE TABLE [dbo].[SdkMessagePairBaseIds]
(
[SdkMessagePairId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SdkMessagePairBaseIds] ADD CONSTRAINT [PK_SdkMessagePairBaseIds] PRIMARY KEY CLUSTERED  ([SdkMessagePairId]) ON [PRIMARY]
GO
