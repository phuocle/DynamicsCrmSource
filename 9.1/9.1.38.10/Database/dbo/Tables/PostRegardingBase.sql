CREATE TABLE [dbo].[PostRegardingBase] (
    [LatestManualPostModifiedOn]        DATETIME         NULL,
    [LatestAutoPostModifiedOn]          DATETIME         NULL,
    [RegardingObjectId]                 UNIQUEIDENTIFIER NULL,
    [RegardingObjectOwningBusinessUnit] UNIQUEIDENTIFIER NULL,
    [PostRegardingId]                   UNIQUEIDENTIFIER NOT NULL,
    [RegardingObjectOwnerId]            UNIQUEIDENTIFIER NULL,
    [RegardingObjectTypeCodeForSharing] INT              NOT NULL,
    [RegardingObjectIdName]             NVARCHAR (4000)  NULL,
    [RegardingObjectOwnerIdType]        INT              NULL,
    [RegardingObjectTypeCode]           INT              NOT NULL,
    [RegardingObjectIdYomiName]         NVARCHAR (4000)  NULL,
    CONSTRAINT [cndx_PrimaryKey_PostRegardingBase] PRIMARY KEY CLUSTERED ([PostRegardingId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_PostRegarding] FOREIGN KEY ([RegardingObjectOwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
);


GO
ALTER TABLE [dbo].[PostRegardingBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RegardingObjectForSharing]
    ON [dbo].[PostRegardingBase]([RegardingObjectId] ASC, [RegardingObjectTypeCodeForSharing] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_RegardingObjectTypeCode]
    ON [dbo].[PostRegardingBase]([RegardingObjectTypeCode] ASC, [RegardingObjectId] ASC)
    INCLUDE([LatestManualPostModifiedOn], [LatestAutoPostModifiedOn]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_RegardingObjectIdObjectTypeCode]
    ON [dbo].[PostRegardingBase]([RegardingObjectId] ASC, [RegardingObjectTypeCode] ASC)
    INCLUDE([RegardingObjectOwningBusinessUnit], [RegardingObjectOwnerId], [RegardingObjectOwnerIdType]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_RegardingObjectOwnerId]
    ON [dbo].[PostRegardingBase]([RegardingObjectOwnerId] ASC)
    INCLUDE([RegardingObjectOwningBusinessUnit]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

