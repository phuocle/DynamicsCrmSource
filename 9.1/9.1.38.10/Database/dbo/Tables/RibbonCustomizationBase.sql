CREATE TABLE [dbo].[RibbonCustomizationBase] (
    [RibbonCustomizationUniqueId] UNIQUEIDENTIFIER CONSTRAINT [DF_RibbonCustomizationBase_RibbonCustomizationUniqueId] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [OrganizationId]              UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]               ROWVERSION       NULL,
    [RibbonCustomizationId]       UNIQUEIDENTIFIER NOT NULL,
    [IsManaged]                   BIT              CONSTRAINT [DF_RibbonCustomizationBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [Entity]                      NVARCHAR (128)   NULL,
    [OverwriteTime]               DATETIME         CONSTRAINT [DF_RibbonCustomizationBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [PublishedOn]                 DATETIME         NULL,
    [SupportingSolutionId]        UNIQUEIDENTIFIER NULL,
    [SolutionId]                  UNIQUEIDENTIFIER CONSTRAINT [DF_RibbonCustomizationBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [ComponentState]              INT              CONSTRAINT [DF_RibbonCustomizationBase_ComponentState] DEFAULT ((0)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_RibbonCustomization] PRIMARY KEY CLUSTERED ([RibbonCustomizationId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_RibbonCustomizationBase_UniqueRowId] UNIQUE NONCLUSTERED ([RibbonCustomizationUniqueId] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[RibbonCustomizationBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[RibbonCustomizationBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[RibbonCustomizationBase]([RibbonCustomizationId] ASC) WHERE ([OverwriteTime]=(0) AND [ComponentState]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

