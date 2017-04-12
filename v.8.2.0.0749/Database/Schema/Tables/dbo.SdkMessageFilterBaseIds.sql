CREATE TABLE [dbo].[SdkMessageFilterBaseIds]
(
[SdkMessageFilterId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SdkMessageFilterBaseIds] ADD CONSTRAINT [PK_SdkMessageFilterBaseIds] PRIMARY KEY CLUSTERED  ([SdkMessageFilterId]) ON [PRIMARY]
GO
