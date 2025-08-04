CREATE TABLE [dbo].[SavedQueryBase] (
    [SavedQueryId]          UNIQUEIDENTIFIER NOT NULL,
    [Name]                  NVARCHAR (200)   NOT NULL,
    [OrganizationId]        UNIQUEIDENTIFIER NOT NULL,
    [Description]           NVARCHAR (MAX)   NULL,
    [QueryType]             INT              NOT NULL,
    [IsDefault]             BIT              CONSTRAINT [Set_To_Zero147] DEFAULT ((0)) NOT NULL,
    [ReturnedTypeCode]      INT              NOT NULL,
    [QueryAppUsage]         INT              NULL,
    [IsUserDefined]         BIT              CONSTRAINT [DF_SavedQueryBase_IsUserDefined] DEFAULT ((1)) NULL,
    [FetchXml]              NVARCHAR (MAX)   NULL,
    [IsCustomizable]        BIT              CONSTRAINT [Set_To_One2] DEFAULT ((1)) NOT NULL,
    [IsQuickFindQuery]      BIT              CONSTRAINT [Set_To_Zero148] DEFAULT ((0)) NOT NULL,
    [ColumnSetXml]          NVARCHAR (MAX)   NULL,
    [LayoutXml]             NVARCHAR (MAX)   NULL,
    [QueryAPI]              NVARCHAR (100)   NULL,
    [CreatedBy]             UNIQUEIDENTIFIER NULL,
    [CreatedOn]             DATETIME         NULL,
    [ModifiedBy]            UNIQUEIDENTIFIER NULL,
    [ModifiedOn]            DATETIME         NULL,
    [VersionNumber]         ROWVERSION       NULL,
    [IsPrivate]             BIT              CONSTRAINT [DF_SavedQueryBase_IsPrivate] DEFAULT ((0)) NOT NULL,
    [SavedQueryIdUnique]    UNIQUEIDENTIFIER CONSTRAINT [DF_SavedQueryBase_SavedQueryIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [SupportingSolutionId]  UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]     UNIQUEIDENTIFIER NULL,
    [OverwriteTime]         DATETIME         CONSTRAINT [DF_SavedQueryBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [IsManaged]             BIT              CONSTRAINT [DF_SavedQueryBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [AdvancedGroupBy]       NVARCHAR (160)   NULL,
    [ConditionalFormatting] NVARCHAR (MAX)   NULL,
    [CanBeDeleted]          BIT              CONSTRAINT [DF_SavedQueryBase_CanBeDeleted] DEFAULT ((1)) NOT NULL,
    [StatusCode]            INT              NULL,
    [ComponentState]        INT              CONSTRAINT [DF_SavedQueryBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [OrganizationTabOrder]  INT              NULL,
    [SolutionId]            UNIQUEIDENTIFIER CONSTRAINT [DF_SavedQueryBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [ModifiedOnBehalfBy]    UNIQUEIDENTIFIER NULL,
    [StateCode]             INT              NOT NULL,
    [IntroducedVersion]     NVARCHAR (48)    NULL,
    CONSTRAINT [cndx_PrimaryKey_SavedQuery] PRIMARY KEY CLUSTERED ([SavedQueryId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[SavedQueryBase]', @OptionName = N'text in row', @OptionValue = N'7000';


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[SavedQueryBase]([ReturnedTypeCode] ASC, [StateCode] ASC, [QueryType] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SavedQueryBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[SavedQueryBase]([Name] ASC) WITH (FILLFACTOR = 80);

