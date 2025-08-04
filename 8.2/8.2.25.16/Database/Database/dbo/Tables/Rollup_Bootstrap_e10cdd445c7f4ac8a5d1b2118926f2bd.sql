CREATE TABLE [dbo].[Rollup_Bootstrap_e10cdd445c7f4ac8a5d1b2118926f2bd] (
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

