CREATE TABLE [dbo].[Rollup_Bootstrap_Source_bacebbde18e243a7b3fb4bbdf2b2c0e5] (
    [Id]             INT              IDENTITY (1, 1) NOT NULL,
    [EntityId]       UNIQUEIDENTIFIER NOT NULL,
    [ParentEntityId] UNIQUEIDENTIFIER NULL,
    [Status]         INT              NULL,
    [ExchangeRate]   DECIMAL (23, 10) NULL,
    [OutputValue]    DECIMAL (38, 10) NULL,
    [CountValue]     INT              NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC)
);


GO
CREATE NONCLUSTERED INDEX [ndx_ParentEntityId_Source]
    ON [dbo].[Rollup_Bootstrap_Source_bacebbde18e243a7b3fb4bbdf2b2c0e5]([ParentEntityId] ASC, [Id] ASC)
    INCLUDE([EntityId], [Status], [ExchangeRate], [OutputValue]);

