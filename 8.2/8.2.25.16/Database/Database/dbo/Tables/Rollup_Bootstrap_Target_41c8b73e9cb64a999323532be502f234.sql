CREATE TABLE [dbo].[Rollup_Bootstrap_Target_41c8b73e9cb64a999323532be502f234] (
    [Id]             INT              IDENTITY (1, 1) NOT NULL,
    [EntityId]       UNIQUEIDENTIFIER NOT NULL,
    [ParentEntityId] UNIQUEIDENTIFIER NULL,
    [OutputValue]    DECIMAL (38, 10) NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC)
);


GO
CREATE NONCLUSTERED INDEX [ndx_ParentEntityId_Target]
    ON [dbo].[Rollup_Bootstrap_Target_41c8b73e9cb64a999323532be502f234]([ParentEntityId] ASC, [Id] ASC)
    INCLUDE([OutputValue]);

