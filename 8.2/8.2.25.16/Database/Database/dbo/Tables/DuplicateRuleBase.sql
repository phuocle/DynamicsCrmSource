CREATE TABLE [dbo].[DuplicateRuleBase] (
    [Description]                  NVARCHAR (MAX)   NULL,
    [OwningBusinessUnit]           UNIQUEIDENTIFIER NULL,
    [IsCaseSensitive]              BIT              CONSTRAINT [DF_DuplicateRuleBase_IsCaseSensitive] DEFAULT ((0)) NULL,
    [StateCode]                    INT              CONSTRAINT [DF_DuplicateRuleBase_StateCode] DEFAULT ((0)) NOT NULL,
    [StatusCode]                   INT              CONSTRAINT [DF_DuplicateRuleBase_StatusCode] DEFAULT ((0)) NOT NULL,
    [Name]                         NVARCHAR (160)   NOT NULL,
    [MatchingEntityMatchCodeTable] NVARCHAR (50)    NULL,
    [TimeZoneRuleVersionNumber]    INT              NULL,
    [BaseEntityTypeCode]           INT              NOT NULL,
    [UTCConversionTimeZoneCode]    INT              NULL,
    [DuplicateRuleId]              UNIQUEIDENTIFIER NOT NULL,
    [ModifiedBy]                   UNIQUEIDENTIFIER NULL,
    [MatchingEntityTypeCode]       INT              NOT NULL,
    [BaseEntityMatchCodeTable]     NVARCHAR (50)    NULL,
    [BaseEntityName]               NVARCHAR (160)   NULL,
    [CreatedBy]                    UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                   DATETIME         NULL,
    [MatchingEntityName]           NVARCHAR (160)   NULL,
    [CreatedOn]                    DATETIME         NULL,
    [CreatedOnBehalfBy]            UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]           UNIQUEIDENTIFIER NULL,
    [OwnerId]                      UNIQUEIDENTIFIER CONSTRAINT [DF_DuplicateRuleBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [OwnerIdType]                  INT              CONSTRAINT [DF_DuplicateRuleBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [ExcludeInactiveRecords]       BIT              CONSTRAINT [DF_DuplicateRuleBase_ExcludeInactiveRecords] DEFAULT ((0)) NULL,
    CONSTRAINT [cndx_PrimaryKey_DuplicateRule] PRIMARY KEY CLUSTERED ([DuplicateRuleId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE NONCLUSTERED INDEX [fndx_MatchingEntityName]
    ON [dbo].[DuplicateRuleBase]([MatchingEntityName] ASC) WHERE ([MatchingEntityName] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[DuplicateRuleBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_BaseEntityName]
    ON [dbo].[DuplicateRuleBase]([BaseEntityName] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[DuplicateRuleBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_BusinessUnit_DuplicateRules]
    ON [dbo].[DuplicateRuleBase]([OwningBusinessUnit] ASC) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[DuplicateRuleBase]([Name] ASC) WITH (FILLFACTOR = 80);

