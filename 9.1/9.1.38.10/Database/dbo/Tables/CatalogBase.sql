CREATE TABLE [dbo].[CatalogBase] (
    [CatalogId]                 UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NULL,
    [statecode]                 INT              NOT NULL,
    [statuscode]                INT              NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [Name]                      NVARCHAR (100)   NULL,
    [OverwriteTime]             DATETIME         CONSTRAINT [DF_CatalogBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [SolutionId]                UNIQUEIDENTIFIER CONSTRAINT [DF_CatalogBase_SolutionId] DEFAULT ('fd140aae-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId]      UNIQUEIDENTIFIER NULL,
    [ComponentState]            INT              CONSTRAINT [DF_CatalogBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [ComponentIdUnique]         UNIQUEIDENTIFIER CONSTRAINT [DF_CatalogBase_ComponentIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [IsManaged]                 BIT              CONSTRAINT [DF_CatalogBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [IsCustomizable]            BIT              CONSTRAINT [DF_CatalogBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [Description]               NVARCHAR (100)   NULL,
    [DisplayName]               NVARCHAR (100)   NULL,
    [ParentCatalogId]           UNIQUEIDENTIFIER NULL,
    [UniqueName]                NVARCHAR (128)   NULL,
    CONSTRAINT [cndx_PrimaryKey_Catalog] PRIMARY KEY CLUSTERED ([CatalogId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [parentcatalog_catalog] FOREIGN KEY ([ParentCatalogId]) REFERENCES [dbo].[CatalogBaseIds] ([CatalogId]),
    CONSTRAINT [UQ_CatalogBase_ComponentIdUnique] UNIQUE NONCLUSTERED ([ComponentIdUnique] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW)
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[CatalogBase]([OrganizationId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[CatalogBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[CatalogBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Name]
    ON [dbo].[CatalogBase]([Name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[CatalogBase]([CatalogId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_parentcatalog_catalog]
    ON [dbo].[CatalogBase]([ParentCatalogId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_for_entitykey_CatalogExportKey]
    ON [dbo].[CatalogBase]([ComponentState] ASC, [OverwriteTime] ASC, [UniqueName] ASC)
    INCLUDE([CatalogId]) WHERE ([ComponentState] IS NOT NULL AND [OverwriteTime] IS NOT NULL AND [UniqueName] IS NOT NULL) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_A6D13CC793A141B4B27219A8D2684D68]
    ON [dbo].[CatalogBase]([CatalogId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_A6D13CC793A141B4B27219A8D2684D68]
    ON [dbo].[CatalogBase]([Name] ASC, [CatalogId] ASC)
    INCLUDE([CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_A6D13CC793A141B4B27219A8D2684D68]
    ON [dbo].[CatalogBase]([CatalogId] ASC)
    INCLUDE([Name], [CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

