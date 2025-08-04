CREATE TYPE [dbo].[CascadeRemoveLinkCollection] AS TABLE
(
[o] [uniqueidentifier] NOT NULL,
[t] [int] NOT NULL,
[c] [int] NOT NULL,
PRIMARY KEY CLUSTERED  ([t], [o], [c])
)
GO
