CREATE TABLE [dbo].[RibbonClientMetadataBase] (
    [RibbonContext]     NVARCHAR (32)    NULL,
    [VersionNumber]     ROWVERSION       NULL,
    [RibbonIdUnique]    UNIQUEIDENTIFIER CONSTRAINT [DF_RibbonClientMetadataBase_RibbonIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [RibbonId]          UNIQUEIDENTIFIER CONSTRAINT [DF_RibbonClientMetadataBase_RibbonId] DEFAULT (newid()) NOT NULL,
    [EntityLogicalName] NVARCHAR (128)   NULL,
    [SolutionId]        UNIQUEIDENTIFIER CONSTRAINT [DF_RibbonClientMetadataBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [ComponentState]    INT              CONSTRAINT [DF_RibbonClientMetadataBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [RibbonJson]        NVARCHAR (MAX)   NULL,
    CONSTRAINT [ndx_Unique_ribbonclientmetadata] PRIMARY KEY CLUSTERED ([RibbonId] ASC, [ComponentState] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [ndx_RibbonIdUnique_ribbonclientmetadata] UNIQUE NONCLUSTERED ([RibbonIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[RibbonClientMetadataBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[RibbonClientMetadataBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_entityWithribboncontext_ribbonclientmetadata]
    ON [dbo].[RibbonClientMetadataBase]([EntityLogicalName] ASC, [RibbonContext] ASC) WITH (FILLFACTOR = 80);

