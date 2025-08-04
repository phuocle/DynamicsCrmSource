CREATE TABLE [dbo].[TraceAssociationBase] (
    [RegardingObjectId]       UNIQUEIDENTIFIER NOT NULL,
    [TraceLogId]              UNIQUEIDENTIFIER NOT NULL,
    [OrganizationId]          UNIQUEIDENTIFIER NOT NULL,
    [TraceAssociationId]      UNIQUEIDENTIFIER NOT NULL,
    [RegardingObjectTypeCode] INT              NULL,
    CONSTRAINT [cndx_PrimaryKey_TraceAssociationBase] PRIMARY KEY CLUSTERED ([TraceAssociationId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [traceassociation_TraceLog] FOREIGN KEY ([TraceLogId]) REFERENCES [dbo].[TraceLogBase] ([TraceLogId]) NOT FOR REPLICATION
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_UniqueAssociationPerTrace]
    ON [dbo].[TraceAssociationBase]([TraceLogId] ASC, [RegardingObjectId] ASC, [RegardingObjectTypeCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Regarding]
    ON [dbo].[TraceAssociationBase]([RegardingObjectId] ASC, [RegardingObjectTypeCode] ASC) WITH (FILLFACTOR = 80);

