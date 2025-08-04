CREATE TABLE [dbo].[OrganizationStatisticBase] (
    [Hour]                    INT              NULL,
    [StatisticType]           INT              NULL,
    [OrganizationStatisticId] UNIQUEIDENTIFIER NOT NULL,
    [ServerName]              NVARCHAR (256)   NULL,
    [StatisticValue]          INT              NULL,
    CONSTRAINT [PK_OrganizationStatisticBase] PRIMARY KEY CLUSTERED ([OrganizationStatisticId] ASC) WITH (FILLFACTOR = 80)
);

