CREATE TYPE [dbo].[CascadeDeleteCollection] AS TABLE (
    [t] INT              NOT NULL,
    [o] UNIQUEIDENTIFIER NOT NULL,
    [d] INT              NOT NULL,
    [s] INT              NOT NULL,
    [u] INT              IDENTITY (1, 1) NOT NULL,
    PRIMARY KEY CLUSTERED ([t] ASC, [o] ASC, [d] ASC, [u] ASC));

