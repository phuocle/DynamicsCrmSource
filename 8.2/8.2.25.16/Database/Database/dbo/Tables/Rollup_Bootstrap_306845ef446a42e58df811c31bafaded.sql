CREATE TABLE [dbo].[Rollup_Bootstrap_306845ef446a42e58df811c31bafaded] (
    [Id]                 INT              IDENTITY (1, 1) NOT NULL,
    [EntityId]           UNIQUEIDENTIFIER NOT NULL,
    [ParentEntityId]     UNIQUEIDENTIFIER NULL,
    [Depth]              INT              NULL,
    [ExchangeRate]       DECIMAL (23, 10) NULL,
    [OutputValue]        DECIMAL (38, 10) NULL,
    [CountValue]         INT              NULL,
    [Status]             INT              NULL,
    [CalculatedDateTime] DATETIME         NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC)
);

