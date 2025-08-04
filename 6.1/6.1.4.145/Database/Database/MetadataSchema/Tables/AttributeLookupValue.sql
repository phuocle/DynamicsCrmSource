CREATE TABLE [MetadataSchema].[AttributeLookupValue] (
    [AttributeLookupValueId]    UNIQUEIDENTIFIER NOT NULL,
    [AttributeLookupValueRowId] UNIQUEIDENTIFIER DEFAULT (newid()) NOT NULL,
    [AttributeId]               UNIQUEIDENTIFIER NOT NULL,
    [EntityId]                  INT              NOT NULL,
    [VersionNumber]             ROWVERSION       NOT NULL,
    [SolutionId]                UNIQUEIDENTIFIER DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId]      UNIQUEIDENTIFIER DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [ComponentState]            TINYINT          DEFAULT ((0)) NOT NULL,
    [OverwriteTime]             DATETIME         DEFAULT ((0)) NOT NULL,
    [IsManaged]                 BIT              DEFAULT ((0)) NOT NULL,
    CONSTRAINT [XPKAttributeLookupValue] PRIMARY KEY CLUSTERED ([AttributeLookupValueId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [NDX_AttrLookupValAttrIdEntityIdCompState]
    ON [MetadataSchema].[AttributeLookupValue]([AttributeId] ASC, [EntityId] ASC, [ComponentState] ASC, [SolutionId] ASC, [OverwriteTime] ASC);

