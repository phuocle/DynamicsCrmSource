CREATE TABLE [dbo].[AppModuleComponentBase] (
    [RootAppModuleComponentId]   UNIQUEIDENTIFIER NULL,
    [AppModuleComponentIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_AppModuleComponentBase_AppModuleComponentIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [IsMetadata]                 BIT              NULL,
    [ModifiedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                 DATETIME         NULL,
    [OverwriteTime]              DATETIME         CONSTRAINT [DF_AppModuleComponentBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [IntroducedVersion]          NVARCHAR (48)    NULL,
    [TimeZoneRuleVersionNumber]  INT              NULL,
    [ExchangeRate]               DECIMAL (23, 10) NULL,
    [CreatedOn]                  DATETIME         NULL,
    [CreatedBy]                  UNIQUEIDENTIFIER NULL,
    [ComponentType]              INT              CONSTRAINT [DF_AppModuleComponentBase_ComponentType] DEFAULT ((0)) NULL,
    [ObjectId]                   UNIQUEIDENTIFIER NULL,
    [AppModuleIdUnique]          UNIQUEIDENTIFIER NULL,
    [IsDefault]                  BIT              CONSTRAINT [DF_AppModuleComponentBase_IsDefault] DEFAULT ((0)) NULL,
    [UTCConversionTimeZoneCode]  INT              NULL,
    [CreatedOnBehalfBy]          UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [RootComponentBehavior]      INT              NULL,
    [VersionNumber]              ROWVERSION       NULL,
    [AppModuleComponentId]       UNIQUEIDENTIFIER CONSTRAINT [DF_AppModuleComponentBase_AppModuleComponentId] DEFAULT (newid()) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_AppModuleComponent] PRIMARY KEY CLUSTERED ([AppModuleComponentId] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[AppModuleComponentBase] SET (LOCK_ESCALATION = DISABLE);

