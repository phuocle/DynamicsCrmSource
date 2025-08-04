CREATE TABLE [dbo].[SdkMessageRequestBaseIds]
(
[SdkMessageRequestId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SdkMessageRequestBaseIds] ADD CONSTRAINT [PK_SdkMessageRequestBaseIds] PRIMARY KEY CLUSTERED  ([SdkMessageRequestId]) ON [PRIMARY]
GO
