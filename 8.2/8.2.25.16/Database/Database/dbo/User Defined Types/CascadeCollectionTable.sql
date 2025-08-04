CREATE TYPE [dbo].[CascadeCollectionTable] AS TABLE (
    [o] UNIQUEIDENTIFIER NOT NULL,
    [t] INT              NOT NULL,
    [c] INT              NOT NULL,
    [s] INT              NOT NULL,
    PRIMARY KEY CLUSTERED ([t] ASC, [o] ASC, [c] ASC));

