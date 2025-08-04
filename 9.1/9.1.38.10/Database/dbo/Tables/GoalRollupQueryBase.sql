CREATE TABLE [dbo].[GoalRollupQueryBase] (
    [Name]                      NVARCHAR (100)   NULL,
    [ModifiedOn]                DATETIME         NULL,
    [StateCode]                 INT              NOT NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [QueryEntityType]           INT              NULL,
    [FetchXml]                  NVARCHAR (MAX)   NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [OwnerId]                   UNIQUEIDENTIFIER NOT NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [ImportSequenceNumber]      INT              NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [StatusCode]                INT              NULL,
    [GoalRollupQueryId]         UNIQUEIDENTIFIER NOT NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [CreatedOn]                 DATETIME         NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_GoalRollupQueryBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [PK_GoalRollupQueryBase] PRIMARY KEY CLUSTERED ([GoalRollupQueryId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_goalrollupquery] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_goalrollupquery] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[GoalRollupQueryBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[GoalRollupQueryBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[GoalRollupQueryBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[GoalRollupQueryBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[GoalRollupQueryBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_business_unit_goalrollupquery]
    ON [dbo].[GoalRollupQueryBase]([OwningBusinessUnit] ASC) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_FBC96D8C8D0741C4865B9C22393EBC56]
    ON [dbo].[GoalRollupQueryBase]([GoalRollupQueryId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_FBC96D8C8D0741C4865B9C22393EBC56]
    ON [dbo].[GoalRollupQueryBase]([GoalRollupQueryId] ASC)
    INCLUDE([Name], [QueryEntityType], [StateCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[GoalRollupQueryBase]([Name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

