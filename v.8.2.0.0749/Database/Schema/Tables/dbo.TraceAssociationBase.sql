CREATE TABLE [dbo].[TraceAssociationBase]
(
[RegardingObjectId] [uniqueidentifier] NOT NULL,
[TraceLogId] [uniqueidentifier] NOT NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[TraceAssociationId] [uniqueidentifier] NOT NULL,
[RegardingObjectTypeCode] [int] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[TraceAssociationBase] ADD CONSTRAINT [cndx_PrimaryKey_TraceAssociationBase] PRIMARY KEY CLUSTERED  ([TraceAssociationId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Regarding] ON [dbo].[TraceAssociationBase] ([RegardingObjectId], [RegardingObjectTypeCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_UniqueAssociationPerTrace] ON [dbo].[TraceAssociationBase] ([TraceLogId], [RegardingObjectId], [RegardingObjectTypeCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[TraceAssociationBase] ADD CONSTRAINT [traceassociation_TraceLog] FOREIGN KEY ([TraceLogId]) REFERENCES [dbo].[TraceLogBase] ([TraceLogId])
GO
