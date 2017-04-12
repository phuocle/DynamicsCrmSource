CREATE TYPE [dbo].[CascadeCollectionTable] AS TABLE
(
[o] [uniqueidentifier] NOT NULL,
[t] [int] NOT NULL,
[c] [int] NOT NULL,
[s] [int] NOT NULL,
PRIMARY KEY CLUSTERED  ([t], [o], [c])
)
GO
