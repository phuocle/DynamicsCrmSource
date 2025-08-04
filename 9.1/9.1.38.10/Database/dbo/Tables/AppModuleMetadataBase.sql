CREATE TABLE [dbo].[AppModuleMetadataBase] (
    [ModifiedOn]                DATETIME         NOT NULL,
    [ParentComponentId]         UNIQUEIDENTIFIER NULL,
    [ComponentId]               UNIQUEIDENTIFIER NOT NULL,
    [ComponentType]             INT              NOT NULL,
    [ComponentIsUserForm]       BIT              CONSTRAINT [DF_AppModuleMetadataBase_ComponentIsUserForm] DEFAULT ((0)) NOT NULL,
    [ComponentStateCode]        INT              CONSTRAINT [DF_AppModuleMetadataBase_ComponentStateCode] DEFAULT ((-1)) NOT NULL,
    [ComponentIsTabletEnabled]  BIT              CONSTRAINT [DF_AppModuleMetadataBase_ComponentIsTabletEnabled] DEFAULT ((0)) NOT NULL,
    [ComponentVersion]          BIGINT           NOT NULL,
    [ComponentIsUserChart]      BIT              CONSTRAINT [DF_AppModuleMetadataBase_ComponentIsUserChart] DEFAULT ((0)) NOT NULL,
    [State]                     INT              NOT NULL,
    [CreatedOn]                 DATETIME         NOT NULL,
    [AppModuleMetadataId]       UNIQUEIDENTIFIER NOT NULL,
    [ComponentIsDefault]        BIT              CONSTRAINT [DF_AppModuleMetadataBase_ComponentIsDefault] DEFAULT ((0)) NOT NULL,
    [ComponentIsQuickFindQuery] BIT              CONSTRAINT [DF_AppModuleMetadataBase_ComponentIsQuickFindQuery] DEFAULT ((0)) NOT NULL,
    [ComponentSubType]          INT              NOT NULL,
    [AppModuleId]               UNIQUEIDENTIFIER NOT NULL,
    [ComponentIsUserView]       BIT              CONSTRAINT [DF_AppModuleMetadataBase_ComponentIsUserView] DEFAULT ((0)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_AppModuleMetadataBase] PRIMARY KEY CLUSTERED ([AppModuleMetadataId] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[AppModuleMetadataBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_AppModuleMetadataBase_Unique]
    ON [dbo].[AppModuleMetadataBase]([AppModuleId] ASC, [ComponentId] ASC, [ParentComponentId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_AppModuleMetadataBase_appmoduleid]
    ON [dbo].[AppModuleMetadataBase]([AppModuleId] ASC) WITH (FILLFACTOR = 80);

