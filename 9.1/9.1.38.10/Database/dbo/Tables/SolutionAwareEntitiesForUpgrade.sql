CREATE TABLE [dbo].[SolutionAwareEntitiesForUpgrade] (
    [EntityId] UNIQUEIDENTIFIER ROWGUIDCOL NOT NULL
);


GO
ALTER TABLE [dbo].[SolutionAwareEntitiesForUpgrade] SET (LOCK_ESCALATION = DISABLE);

