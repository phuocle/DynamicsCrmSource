CREATE TYPE [dbo].[EntityIdCollection] AS TABLE (
    [id] UNIQUEIDENTIFIER NOT NULL,
    INDEX [ndx_EntityIdCollection_Clustered] ([id]));

