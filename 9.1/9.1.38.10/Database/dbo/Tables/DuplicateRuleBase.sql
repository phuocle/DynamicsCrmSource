CREATE TABLE [dbo].[DuplicateRuleBase] (
    [BaseEntityTypeCode]           INT              NOT NULL,
    [ModifiedOn]                   DATETIME         NULL,
    [CreatedBy]                    UNIQUEIDENTIFIER NULL,
    [IsCaseSensitive]              BIT              CONSTRAINT [DF_DuplicateRuleBase_IsCaseSensitive] DEFAULT ((0)) NULL,
    [MatchingEntityMatchCodeTable] NVARCHAR (50)    NULL,
    [DuplicateRuleId]              UNIQUEIDENTIFIER NOT NULL,
    [Name]                         NVARCHAR (160)   NOT NULL,
    [StateCode]                    INT              CONSTRAINT [DF_DuplicateRuleBase_StateCode] DEFAULT ((0)) NOT NULL,
    [TimeZoneRuleVersionNumber]    INT              NULL,
    [CreatedOn]                    DATETIME         NULL,
    [ModifiedBy]                   UNIQUEIDENTIFIER NULL,
    [StatusCode]                   INT              CONSTRAINT [DF_DuplicateRuleBase_StatusCode] DEFAULT ((0)) NOT NULL,
    [ModifiedOnBehalfBy]           UNIQUEIDENTIFIER NULL,
    [BaseEntityName]               NVARCHAR (160)   NULL,
    [BaseEntityMatchCodeTable]     NVARCHAR (50)    NULL,
    [MatchingEntityName]           NVARCHAR (160)   NULL,
    [OwningBusinessUnit]           UNIQUEIDENTIFIER NULL,
    [UTCConversionTimeZoneCode]    INT              NULL,
    [OwnerId]                      UNIQUEIDENTIFIER CONSTRAINT [DF_DuplicateRuleBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [Description]                  NVARCHAR (MAX)   NULL,
    [ExcludeInactiveRecords]       BIT              CONSTRAINT [DF_DuplicateRuleBase_ExcludeInactiveRecords] DEFAULT ((0)) NULL,
    [MatchingEntityTypeCode]       INT              NOT NULL,
    [CreatedOnBehalfBy]            UNIQUEIDENTIFIER NULL,
    [OwnerIdType]                  INT              CONSTRAINT [DF_DuplicateRuleBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_DuplicateRule] PRIMARY KEY CLUSTERED ([DuplicateRuleId] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[DuplicateRuleBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[DuplicateRuleBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[DuplicateRuleBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[DuplicateRuleBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_BaseEntityName]
    ON [dbo].[DuplicateRuleBase]([BaseEntityName] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_BusinessUnit_DuplicateRules]
    ON [dbo].[DuplicateRuleBase]([OwningBusinessUnit] ASC) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_MatchingEntityName]
    ON [dbo].[DuplicateRuleBase]([MatchingEntityName] ASC) WHERE ([MatchingEntityName] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_61F1C9CD42154C6C8B7F50EFBDE636F7]
    ON [dbo].[DuplicateRuleBase]([DuplicateRuleId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_61F1C9CD42154C6C8B7F50EFBDE636F7]
    ON [dbo].[DuplicateRuleBase]([DuplicateRuleId] ASC)
    INCLUDE([Name], [StateCode], [StatusCode], [BaseEntityTypeCode], [MatchingEntityTypeCode], [CreatedBy], [ModifiedOn]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[DuplicateRuleBase]([Name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_61F1C9CD42154C6C8B7F50EFBDE636F7]
    ON [dbo].[DuplicateRuleBase]([Name] ASC, [DuplicateRuleId] ASC)
    INCLUDE([StateCode], [StatusCode], [BaseEntityTypeCode], [MatchingEntityTypeCode], [CreatedBy], [ModifiedOn]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

