CREATE TABLE [dbo].[ReportCategoryBaseIds] (
    [ReportCategoryId] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [PK_ReportCategoryBaseIds] PRIMARY KEY CLUSTERED ([ReportCategoryId] ASC)
);


GO
ALTER TABLE [dbo].[ReportCategoryBaseIds] SET (LOCK_ESCALATION = DISABLE);

