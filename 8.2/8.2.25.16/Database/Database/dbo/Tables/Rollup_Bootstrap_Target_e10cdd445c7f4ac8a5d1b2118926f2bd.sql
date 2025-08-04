CREATE TABLE [dbo].[Rollup_Bootstrap_Target_e10cdd445c7f4ac8a5d1b2118926f2bd] (
    [Id]             INT              IDENTITY (1, 1) NOT NULL,
    [EntityId]       UNIQUEIDENTIFIER NOT NULL,
    [ParentEntityId] UNIQUEIDENTIFIER NULL,
    [OutputValue]    DECIMAL (38, 10) NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC)
);


GO
CREATE NONCLUSTERED INDEX [ndx_ParentEntityId_Target]
    ON [dbo].[Rollup_Bootstrap_Target_e10cdd445c7f4ac8a5d1b2118926f2bd]([ParentEntityId] ASC, [Id] ASC)
    INCLUDE([OutputValue]);

