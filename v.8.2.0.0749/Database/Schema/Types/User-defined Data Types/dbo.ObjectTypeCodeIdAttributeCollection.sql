CREATE TYPE [dbo].[ObjectTypeCodeIdAttributeCollection] AS TABLE
(
[typecode] [int] NOT NULL,
[id] [uniqueidentifier] NOT NULL,
[attributename] [nvarchar] (250) COLLATE Latin1_General_CI_AI NOT NULL,
PRIMARY KEY CLUSTERED  ([id], [typecode], [attributename])
)
GO
