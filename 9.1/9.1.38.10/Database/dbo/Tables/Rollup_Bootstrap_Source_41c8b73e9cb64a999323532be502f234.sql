CREATE TABLE [dbo].[Rollup_Bootstrap_Source_41c8b73e9cb64a999323532be502f234] (
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
ALTER TABLE [dbo].[Rollup_Bootstrap_Source_41c8b73e9cb64a999323532be502f234] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_ParentEntityId_Source]
    ON [dbo].[Rollup_Bootstrap_Source_41c8b73e9cb64a999323532be502f234]([ParentEntityId] ASC, [Id] ASC)
    INCLUDE([EntityId], [Status], [ExchangeRate], [OutputValue]);

