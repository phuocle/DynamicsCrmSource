CREATE TABLE [dbo].[PostFollowBase] (
    [YammerRetryCount]          INT              NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [OwnerId]                   UNIQUEIDENTIFIER NOT NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [PostFollowId]              UNIQUEIDENTIFIER NOT NULL,
    [RegardingObjectId]         UNIQUEIDENTIFIER NOT NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [CreatedOn]                 DATETIME         NOT NULL,
    [YammerPostState]           INT              NULL,
    [PostToYammer]              BIT              NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [RegardingObjectIdName]     NVARCHAR (4000)  NULL,
    [RegardingObjectTypeCode]   INT              NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_PostFollowBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [RegardingObjectIdYomiName] NVARCHAR (4000)  NULL,
    CONSTRAINT [PK_PostFollowBase] PRIMARY KEY NONCLUSTERED ([PostFollowId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_postfollows] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_postfollows] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
ALTER TABLE [dbo].[PostFollowBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE CLUSTERED INDEX [ndx_PostFollower]
    ON [dbo].[PostFollowBase]([RegardingObjectId] ASC, [RegardingObjectTypeCode] ASC, [OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[PostFollowBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_business_unit]
    ON [dbo].[PostFollowBase]([OwningBusinessUnit] ASC) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_CreatedOn]
    ON [dbo].[PostFollowBase]([CreatedOn] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_RegardingObjectIdName]
    ON [dbo].[PostFollowBase]([RegardingObjectIdName] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_5883D70F84F511E0A0F51CC1DE634CFE]
    ON [dbo].[PostFollowBase]([PostFollowId] ASC)
    INCLUDE([RegardingObjectIdName]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_5883D70F84F511E0A0F51CC1DE634CFE]
    ON [dbo].[PostFollowBase]([PostFollowId] ASC)
    INCLUDE([RegardingObjectId], [RegardingObjectTypeCode], [RegardingObjectIdName], [RegardingObjectIdYomiName], [OwnerId], [OwnerIdType], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

