CREATE TABLE [dbo].[PostFollowBase] (
    [OwnerId]                   UNIQUEIDENTIFIER NOT NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [YammerRetryCount]          INT              NULL,
    [PostToYammer]              BIT              NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [PostFollowId]              UNIQUEIDENTIFIER NOT NULL,
    [RegardingObjectId]         UNIQUEIDENTIFIER NOT NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [CreatedOn]                 DATETIME         NOT NULL,
    [YammerPostState]           INT              NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_PostFollowBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [RegardingObjectIdName]     NVARCHAR (4000)  NULL,
    [RegardingObjectTypeCode]   INT              NULL,
    [RegardingObjectIdYomiName] NVARCHAR (4000)  NULL,
    CONSTRAINT [PK_PostFollowBase] PRIMARY KEY NONCLUSTERED ([PostFollowId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_postfollows] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]) NOT FOR REPLICATION,
    CONSTRAINT [owner_postfollows] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]) NOT FOR REPLICATION
);


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
    ON [dbo].[PostFollowBase]([RegardingObjectIdName] ASC) WITH (FILLFACTOR = 80);

