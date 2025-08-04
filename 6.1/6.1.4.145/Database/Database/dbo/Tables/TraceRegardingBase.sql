CREATE TABLE [dbo].[TraceRegardingBase] (
    [RegardingObjectOwningBusinessUnit] UNIQUEIDENTIFIER NULL,
    [RegardingObjectId]                 UNIQUEIDENTIFIER NULL,
    [TraceRegardingId]                  UNIQUEIDENTIFIER NOT NULL,
    [RegardingObjectOwnerId]            UNIQUEIDENTIFIER NOT NULL,
    [RegardingObjectTypeCodeForSharing] INT              NOT NULL,
    [RegardingObjectOwnerIdType]        INT              NULL,
    [RegardingObjectTypeCode]           INT              NOT NULL,
    [RegardingObjectIdName]             NVARCHAR (4000)  NULL,
    [RegardingObjectIdYomiName]         NVARCHAR (4000)  NULL,
    CONSTRAINT [cndx_PrimaryKey_TraceRegardingBase] PRIMARY KEY CLUSTERED ([TraceRegardingId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_TraceRegarding] FOREIGN KEY ([RegardingObjectOwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]) NOT FOR REPLICATION
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RegardingObjectTypeCodeForSharing]
    ON [dbo].[TraceRegardingBase]([RegardingObjectId] ASC, [RegardingObjectTypeCodeForSharing] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_RegardingObjectTypeCode]
    ON [dbo].[TraceRegardingBase]([RegardingObjectTypeCode] ASC, [RegardingObjectId] ASC) WITH (FILLFACTOR = 80);

