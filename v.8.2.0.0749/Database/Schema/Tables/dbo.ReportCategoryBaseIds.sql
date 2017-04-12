CREATE TABLE [dbo].[ReportCategoryBaseIds]
(
[ReportCategoryId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ReportCategoryBaseIds] ADD CONSTRAINT [PK_ReportCategoryBaseIds] PRIMARY KEY CLUSTERED  ([ReportCategoryId]) ON [PRIMARY]
GO
