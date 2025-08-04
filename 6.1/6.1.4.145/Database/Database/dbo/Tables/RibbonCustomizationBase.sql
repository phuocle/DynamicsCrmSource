CREATE TABLE [dbo].[RibbonCustomizationBase] (
    [VersionNumber]               ROWVERSION       NULL,
    [IsManaged]                   BIT              CONSTRAINT [DF_RibbonCustomizationBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [SupportingSolutionId]        UNIQUEIDENTIFIER NULL,
    [RibbonCustomizationUniqueId] UNIQUEIDENTIFIER CONSTRAINT [DF_RibbonCustomizationBase_RibbonCustomizationUniqueId] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [OrganizationId]              UNIQUEIDENTIFIER NOT NULL,
    [OverwriteTime]               DATETIME         CONSTRAINT [DF_RibbonCustomizationBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [RibbonCustomizationId]       UNIQUEIDENTIFIER NOT NULL,
    [Entity]                      NVARCHAR (50)    NULL,
    [ComponentState]              INT              CONSTRAINT [DF_RibbonCustomizationBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [SolutionId]                  UNIQUEIDENTIFIER CONSTRAINT [DF_RibbonCustomizationBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [PublishedOn]                 DATETIME         NULL,
    CONSTRAINT [cndx_PrimaryKey_RibbonCustomization] PRIMARY KEY CLUSTERED ([RibbonCustomizationId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_RibbonCustomizationBase_UniqueRowId] UNIQUE NONCLUSTERED ([RibbonCustomizationUniqueId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[RibbonCustomizationBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);

