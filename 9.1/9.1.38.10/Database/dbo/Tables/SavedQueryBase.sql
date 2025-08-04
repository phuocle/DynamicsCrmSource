CREATE TABLE [dbo].[SavedQueryBase] (
    [IntroducedVersion]     NVARCHAR (48)    NULL,
    [CanBeDeleted]          BIT              CONSTRAINT [DF_SavedQueryBase_CanBeDeleted] DEFAULT ((1)) NOT NULL,
    [FetchXml]              NVARCHAR (MAX)   NULL,
    [QueryType]             INT              NOT NULL,
    [OfflineSqlQuery]       NVARCHAR (MAX)   NULL,
    [Description]           NVARCHAR (MAX)   NULL,
    [IsCustom]              BIT              CONSTRAINT [DF_SavedQueryBase_IsCustom] DEFAULT ((1)) NOT NULL,
    [QueryAppUsage]         INT              NULL,
    [CreatedOn]             DATETIME         NULL,
    [ModifiedOn]            DATETIME         NULL,
    [IsUserDefined]         BIT              CONSTRAINT [DF_SavedQueryBase_IsUserDefined] DEFAULT ((1)) NULL,
    [SavedQueryId]          UNIQUEIDENTIFIER NOT NULL,
    [IsDefault]             BIT              CONSTRAINT [DF_SavedQueryBase_IsDefault] DEFAULT ((0)) NOT NULL,
    [CreatedOnBehalfBy]     UNIQUEIDENTIFIER NULL,
    [ComponentState]        INT              CONSTRAINT [DF_SavedQueryBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [OverwriteTime]         DATETIME         CONSTRAINT [DF_SavedQueryBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [CreatedBy]             UNIQUEIDENTIFIER NULL,
    [IsPrivate]             BIT              CONSTRAINT [DF_SavedQueryBase_IsPrivate] DEFAULT ((0)) NOT NULL,
    [ColumnSetXml]          NVARCHAR (MAX)   NULL,
    [IsManaged]             BIT              CONSTRAINT [DF_SavedQueryBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [ModifiedBy]            UNIQUEIDENTIFIER NULL,
    [Name]                  NVARCHAR (200)   NOT NULL,
    [ReturnedTypeCode]      INT              NOT NULL,
    [ConditionalFormatting] NVARCHAR (MAX)   NULL,
    [SupportingSolutionId]  UNIQUEIDENTIFIER NULL,
    [SolutionId]            UNIQUEIDENTIFIER CONSTRAINT [DF_SavedQueryBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [ModifiedOnBehalfBy]    UNIQUEIDENTIFIER NULL,
    [QueryAPI]              NVARCHAR (100)   NULL,
    [StatusCode]            INT              NULL,
    [VersionNumber]         ROWVERSION       NULL,
    [IsQuickFindQuery]      BIT              CONSTRAINT [DF_SavedQueryBase_IsQuickFindQuery] DEFAULT ((0)) NOT NULL,
    [OrganizationId]        UNIQUEIDENTIFIER NOT NULL,
    [OrganizationTabOrder]  INT              NULL,
    [AdvancedGroupBy]       NVARCHAR (160)   NULL,
    [LayoutJson]            NVARCHAR (MAX)   NULL,
    [SavedQueryIdUnique]    UNIQUEIDENTIFIER CONSTRAINT [DF_SavedQueryBase_SavedQueryIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [LayoutXml]             NVARCHAR (MAX)   NULL,
    [StateCode]             INT              NOT NULL,
    [IsCustomizable]        BIT              CONSTRAINT [DF_SavedQueryBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_SavedQuery] PRIMARY KEY CLUSTERED ([SavedQueryId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_SavedQuery_SavedQueryIdUnique] UNIQUE NONCLUSTERED ([SavedQueryIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[SavedQueryBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[SavedQueryBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SavedQueryBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[SavedQueryBase]([ReturnedTypeCode] ASC, [StateCode] ASC, [QueryType] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[SavedQueryBase]([SavedQueryId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_default]
    ON [dbo].[SavedQueryBase]([ReturnedTypeCode] ASC, [StateCode] ASC, [QueryType] ASC, [OverwriteTime] ASC, [ComponentState] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_D3CC2D8E9768DD11B1B000155D869F00]
    ON [dbo].[SavedQueryBase]([SavedQueryId] ASC)
    INCLUDE([Name], [StateCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_D3CC2D8E9768DD11B1B000155D869F00]
    ON [dbo].[SavedQueryBase]([SavedQueryId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

