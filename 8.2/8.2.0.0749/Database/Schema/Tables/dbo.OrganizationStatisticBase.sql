CREATE TABLE [dbo].[OrganizationStatisticBase]
(
[Hour] [int] NULL,
[StatisticType] [int] NULL,
[OrganizationStatisticId] [uniqueidentifier] NOT NULL,
[ServerName] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[StatisticValue] [int] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[OrganizationStatisticBase] ADD CONSTRAINT [PK_OrganizationStatisticBase] PRIMARY KEY CLUSTERED  ([OrganizationStatisticId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
