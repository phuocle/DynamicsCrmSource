CREATE TABLE [dbo].[NavigationSettingBase] (
    [ComponentState]            INT              CONSTRAINT [DF_NavigationSettingBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [IntroducedVersion]         NVARCHAR (100)   NULL,
    [QuickSettingOrder]         INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [Name]                      NVARCHAR (100)   NOT NULL,
    [IconResourceId]            UNIQUEIDENTIFIER NULL,
    [NavigationSettingId]       UNIQUEIDENTIFIER CONSTRAINT [DF_NavigationSettingBase_NavigationSettingId] DEFAULT (newid()) NOT NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ObjectTypeCode]            INT              NULL,
    [GroupName]                 NVARCHAR (200)   NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [AppConfigIdUnique]         UNIQUEIDENTIFIER NULL,
    [NavigationSettingIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_NavigationSettingBase_NavigationSettingIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [ProgressState]             BIT              CONSTRAINT [DF_NavigationSettingBase_ProgressState] DEFAULT ((0)) NOT NULL,
    [OverwriteTime]             DATETIME         CONSTRAINT [DF_NavigationSettingBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [Privileges]                INT              NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ResourceId]                UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [SolutionId]                UNIQUEIDENTIFIER CONSTRAINT [DF_NavigationSettingBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [AdvancedSettingOrder]      INT              NULL,
    [SupportingSolutionId]      UNIQUEIDENTIFIER NULL,
    [SettingType]               INT              NULL,
    [PageUrl]                   NVARCHAR (200)   NULL,
    [AppConfigId]               UNIQUEIDENTIFIER NULL,
    [IsManaged]                 BIT              CONSTRAINT [DF_NavigationSettingBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NOT NULL,
    [ParentNavigationSettingId] UNIQUEIDENTIFIER NULL,
    [ImportSequenceNumber]      INT              NULL,
    [Description]               NVARCHAR (MAX)   NULL,
    CONSTRAINT [cndx_PrimaryKey_NavigationSetting] PRIMARY KEY CLUSTERED ([NavigationSettingId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_NavigationSettingBase_NavigationSettingIdUnique] UNIQUE NONCLUSTERED ([NavigationSettingIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[NavigationSettingBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[NavigationSettingBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[NavigationSettingBase]([NavigationSettingId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

