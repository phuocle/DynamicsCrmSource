CREATE TABLE [dbo].[OrganizationStatisticBase] (
    [ServerName]              NVARCHAR (256)   NULL,
    [Hour]                    INT              NULL,
    [StatisticType]           INT              NULL,
    [StatisticValue]          INT              NULL,
    [OrganizationStatisticId] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [PK_OrganizationStatisticBase] PRIMARY KEY CLUSTERED ([OrganizationStatisticId] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[OrganizationStatisticBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_orgstatsperf]
    ON [dbo].[OrganizationStatisticBase]([ServerName] ASC, [Hour] ASC, [StatisticType] ASC) WITH (FILLFACTOR = 80);

