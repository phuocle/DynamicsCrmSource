CREATE TABLE [dbo].[Rollup_Bootstrap_Source_306845ef446a42e58df811c31bafaded] (
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
ALTER TABLE [dbo].[Rollup_Bootstrap_Source_306845ef446a42e58df811c31bafaded] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_ParentEntityId_Source]
    ON [dbo].[Rollup_Bootstrap_Source_306845ef446a42e58df811c31bafaded]([ParentEntityId] ASC, [Id] ASC)
    INCLUDE([EntityId], [Status], [ExchangeRate], [OutputValue]);

