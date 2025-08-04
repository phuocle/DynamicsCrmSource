CREATE TABLE [dbo].[Rollup_Bootstrap_Orphans_e10cdd445c7f4ac8a5d1b2118926f2bd] (
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
ALTER TABLE [dbo].[Rollup_Bootstrap_Orphans_e10cdd445c7f4ac8a5d1b2118926f2bd] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_ParentEntityId_Source]
    ON [dbo].[Rollup_Bootstrap_Orphans_e10cdd445c7f4ac8a5d1b2118926f2bd]([ParentEntityId] ASC, [Id] ASC)
    INCLUDE([EntityId], [Status], [ExchangeRate], [OutputValue]);


GO
CREATE NONCLUSTERED INDEX [ndx_EntityId]
    ON [dbo].[Rollup_Bootstrap_Orphans_e10cdd445c7f4ac8a5d1b2118926f2bd]([EntityId] ASC);

