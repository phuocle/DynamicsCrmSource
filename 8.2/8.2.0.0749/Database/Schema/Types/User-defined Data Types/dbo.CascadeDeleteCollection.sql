CREATE TYPE [dbo].[CascadeDeleteCollection] AS TABLE
(
[t] [int] NOT NULL,
[o] [uniqueidentifier] NOT NULL,
[d] [int] NOT NULL,
[s] [int] NOT NULL,
[u] [int] NOT NULL IDENTITY(1, 1),
PRIMARY KEY CLUSTERED  ([t], [o], [d], [u])
)
GO
