CREATE TABLE [dbo].[Rollup_Bootstrap_Orphans_41c8b73e9cb64a999323532be502f234] (
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
    ON [dbo].[Rollup_Bootstrap_Orphans_41c8b73e9cb64a999323532be502f234]([ParentEntityId] ASC, [Id] ASC)
    INCLUDE([EntityId], [Status], [ExchangeRate], [OutputValue]);


GO
CREATE NONCLUSTERED INDEX [ndx_EntityId]
    ON [dbo].[Rollup_Bootstrap_Orphans_41c8b73e9cb64a999323532be502f234]([EntityId] ASC);

