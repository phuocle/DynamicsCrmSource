CREATE TABLE [dbo].[RibbonContextGroupBase] (
    [OverwriteTime]              DATETIME         CONSTRAINT [DF_RibbonContextGroupBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [VersionNumber]              ROWVERSION       NULL,
    [OrganizationId]             UNIQUEIDENTIFIER NOT NULL,
    [IsManaged]                  BIT              CONSTRAINT [DF_RibbonContextGroupBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [Entity]                     NVARCHAR (50)    NULL,
    [RibbonContextGroupId]       UNIQUEIDENTIFIER NOT NULL,
    [SolutionId]                 UNIQUEIDENTIFIER CONSTRAINT [DF_RibbonContextGroupBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId]       UNIQUEIDENTIFIER NULL,
    [ContextGroupXml]            NVARCHAR (MAX)   NULL,
    [RibbonContextGroupUniqueId] UNIQUEIDENTIFIER CONSTRAINT [DF_RibbonContextGroupBase_RibbonContextGroupUniqueId] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [ContextGroupId]             NVARCHAR (MAX)   NOT NULL,
    [RibbonCustomizationId]      UNIQUEIDENTIFIER NULL,
    [ComponentState]             INT              CONSTRAINT [DF_RibbonContextGroupBase_ComponentState] DEFAULT ((0)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_RibbonContextGroup] PRIMARY KEY CLUSTERED ([RibbonContextGroupId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_RibbonContextGroupBase_UniqueRowId] UNIQUE NONCLUSTERED ([RibbonContextGroupUniqueId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[RibbonContextGroupBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);

