CREATE TABLE [dbo].[PostRegardingBase] (
    [PostRegardingId]                   UNIQUEIDENTIFIER NOT NULL,
    [LatestManualPostModifiedOn]        DATETIME         NULL,
    [LatestAutoPostModifiedOn]          DATETIME         NULL,
    [RegardingObjectOwningBusinessUnit] UNIQUEIDENTIFIER NULL,
    [RegardingObjectId]                 UNIQUEIDENTIFIER NULL,
    [RegardingObjectOwnerId]            UNIQUEIDENTIFIER NULL,
    [RegardingObjectTypeCodeForSharing] INT              NOT NULL,
    [RegardingObjectOwnerIdType]        INT              NULL,
    [RegardingObjectIdName]             NVARCHAR (4000)  NULL,
    [RegardingObjectTypeCode]           INT              NOT NULL,
    [RegardingObjectIdYomiName]         NVARCHAR (4000)  NULL,
    CONSTRAINT [cndx_PrimaryKey_PostRegardingBase] PRIMARY KEY CLUSTERED ([PostRegardingId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_PostRegarding] FOREIGN KEY ([RegardingObjectOwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]) NOT FOR REPLICATION
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RegardingObjectForSharing]
    ON [dbo].[PostRegardingBase]([RegardingObjectId] ASC, [RegardingObjectTypeCodeForSharing] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_RegardingObjectTypeCode]
    ON [dbo].[PostRegardingBase]([RegardingObjectTypeCode] ASC, [RegardingObjectId] ASC)
    INCLUDE([LatestManualPostModifiedOn], [LatestAutoPostModifiedOn]) WITH (FILLFACTOR = 80);

