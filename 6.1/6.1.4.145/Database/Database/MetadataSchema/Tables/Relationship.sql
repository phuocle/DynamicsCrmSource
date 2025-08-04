CREATE TABLE [MetadataSchema].[Relationship] (
    [RelationshipId]         UNIQUEIDENTIFIER ROWGUIDCOL NOT NULL,
    [Name]                   NVARCHAR (255)   NULL,
    [ReferencingEntityId]    UNIQUEIDENTIFIER NOT NULL,
    [ReferencingAttributeId] UNIQUEIDENTIFIER NOT NULL,
    [ReferencedEntityId]     UNIQUEIDENTIFIER NOT NULL,
    [ReferencedAttributeId]  UNIQUEIDENTIFIER NOT NULL,
    [RelationshipType]       INT              NULL,
    [IsLogical]              BIT              CONSTRAINT [Set_To_Zero_Relationship_IsLogical] DEFAULT ((0)) NOT NULL,
    [CascadeDelete]          TINYINT          DEFAULT ((2)) NOT NULL,
    [CascadeAssign]          TINYINT          DEFAULT ((0)) NULL,
    [CascadeShare]           TINYINT          DEFAULT ((0)) NULL,
    [CascadeUnShare]         TINYINT          DEFAULT ((0)) NULL,
    [CascadeMerge]           TINYINT          DEFAULT ((0)) NULL,
    [CascadeReparent]        TINYINT          DEFAULT ((0)) NULL,
    [CascadeLinkMask]        BIGINT           DEFAULT ((0)) NULL,
    [IsCustomRelationship]   BIT              CONSTRAINT [Set_To_Zero_Relationship_IsCustomRelationship] DEFAULT ((0)) NOT NULL,
    [IsValidForAdvancedFind] BIT              CONSTRAINT [Set_To_Zero_Relationship_IsValidForAdvancedFind] DEFAULT ((0)) NOT NULL,
    [VersionNumber]          ROWVERSION       NOT NULL,
    [RelationshipRowId]      UNIQUEIDENTIFIER DEFAULT (newid()) NOT NULL,
    [SolutionId]             UNIQUEIDENTIFIER DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId]   UNIQUEIDENTIFIER DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [ComponentState]         TINYINT          DEFAULT ((0)) NOT NULL,
    [OverwriteTime]          DATETIME         DEFAULT ((0)) NOT NULL,
    [IsManaged]              BIT              DEFAULT ((0)) NOT NULL,
    [IntroducedVersion]      NVARCHAR (48)    NULL,
    CONSTRAINT [XPKRelationship] PRIMARY KEY CLUSTERED ([RelationshipId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC),
    CONSTRAINT [relationship_cascade_flag_values] CHECK (([CascadeDelete] IS NULL OR [CascadeDelete]>=(0) AND [CascadeDelete]<(4)) AND ([CascadeAssign] IS NULL OR [CascadeAssign]>=(0) AND [CascadeAssign]<(6)) AND ([CascadeShare] IS NULL OR [CascadeShare]>=(0) AND [CascadeShare]<(6)) AND ([CascadeUnShare] IS NULL OR [CascadeUnShare]>=(0) AND [CascadeUnShare]<(6)) AND ([CascadeMerge] IS NULL OR [CascadeMerge]>=(0) AND [CascadeMerge]<(4)) AND ([CascadeReparent] IS NULL OR [CascadeReparent]>=(0) AND [CascadeReparent]<(6))),
    CONSTRAINT [relationship_referenced_attribute] FOREIGN KEY ([ReferencedAttributeId]) REFERENCES [dbo].[AttributeIds] ([AttributeId]),
    CONSTRAINT [relationship_referenced_entity] FOREIGN KEY ([ReferencedEntityId]) REFERENCES [dbo].[EntityIds] ([EntityId]),
    CONSTRAINT [relationship_referencing_attribute] FOREIGN KEY ([ReferencingAttributeId]) REFERENCES [dbo].[AttributeIds] ([AttributeId]),
    CONSTRAINT [relationship_referencing_entity] FOREIGN KEY ([ReferencingEntityId]) REFERENCES [dbo].[EntityIds] ([EntityId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Relationship_Name]
    ON [MetadataSchema].[Relationship]([Name] ASC);


GO
CREATE NONCLUSTERED INDEX [ndx_Relationship_MetadataCache]
    ON [MetadataSchema].[Relationship]([SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC);

