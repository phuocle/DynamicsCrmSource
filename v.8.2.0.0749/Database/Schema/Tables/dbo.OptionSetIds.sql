CREATE TABLE [dbo].[OptionSetIds]
(
[OptionSetId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[OptionSetIds] ADD CONSTRAINT [XPKOptionSetIds] PRIMARY KEY CLUSTERED  ([OptionSetId]) ON [PRIMARY]
GO
