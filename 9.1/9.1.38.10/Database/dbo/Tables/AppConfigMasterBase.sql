CREATE TABLE [dbo].[AppConfigMasterBase] (
    [OverriddenCreatedOn]     DATETIME         NULL,
    [Name]                    NVARCHAR (200)   NOT NULL,
    [CreatedBy]               UNIQUEIDENTIFIER NULL,
    [ParentAppConfigMasterId] NVARCHAR (100)   NULL,
    [ModifiedOn]              DATETIME         NULL,
    [ModifiedOnBehalfBy]      UNIQUEIDENTIFIER NULL,
    [OrganizationId]          UNIQUEIDENTIFIER NOT NULL,
    [ModifiedBy]              UNIQUEIDENTIFIER NULL,
    [CreatedOn]               DATETIME         NULL,
    [ImportSequenceNumber]    INT              NULL,
    [CreatedOnBehalfBy]       UNIQUEIDENTIFIER NULL,
    [Validator]               NVARCHAR (500)   NULL,
    [DefaultValue]            NVARCHAR (500)   NULL,
    [IsNavigationSetting]     INT              NULL,
    [ConfigType]              NVARCHAR (100)   NOT NULL,
    [VersionNumber]           ROWVERSION       NULL,
    [AppConfigMasterId]       UNIQUEIDENTIFIER CONSTRAINT [DF_AppConfigMasterBase_AppConfigMasterId] DEFAULT (newid()) NOT NULL
);


GO
ALTER TABLE [dbo].[AppConfigMasterBase] SET (LOCK_ESCALATION = DISABLE);

