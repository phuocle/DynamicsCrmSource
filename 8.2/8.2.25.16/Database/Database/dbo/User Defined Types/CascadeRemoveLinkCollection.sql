CREATE TYPE [dbo].[CascadeRemoveLinkCollection] AS TABLE (
    [o] UNIQUEIDENTIFIER NOT NULL,
    [t] INT              NOT NULL,
    [c] INT              NOT NULL,
    PRIMARY KEY CLUSTERED ([t] ASC, [o] ASC, [c] ASC));

