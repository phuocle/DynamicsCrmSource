CREATE TABLE [dbo].[InternalCatalogAssignmentBase] (
    [InternalCatalogAssignmentId] UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                   DATETIME         NULL,
    [CreatedBy]                   UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                  DATETIME         NULL,
    [ModifiedBy]                  UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]           UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]          UNIQUEIDENTIFIER NULL,
    [OrganizationId]              UNIQUEIDENTIFIER NULL,
    [statecode]                   INT              NOT NULL,
    [statuscode]                  INT              NULL,
    [VersionNumber]               ROWVERSION       NULL,
    [ImportSequenceNumber]        INT              NULL,
    [OverriddenCreatedOn]         DATETIME         NULL,
    [TimeZoneRuleVersionNumber]   INT              NULL,
    [UTCConversionTimeZoneCode]   INT              NULL,
    [Name]                        NVARCHAR (100)   NULL,
    [OverwriteTime]               DATETIME         CONSTRAINT [DF_InternalCatalogAssignmentBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [SolutionId]                  UNIQUEIDENTIFIER CONSTRAINT [DF_InternalCatalogAssignmentBase_SolutionId] DEFAULT ('fd140aae-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId]        UNIQUEIDENTIFIER NULL,
    [ComponentState]              INT              CONSTRAINT [DF_InternalCatalogAssignmentBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [ComponentIdUnique]           UNIQUEIDENTIFIER CONSTRAINT [DF_InternalCatalogAssignmentBase_ComponentIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [IsManaged]                   BIT              CONSTRAINT [DF_InternalCatalogAssignmentBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [IsCustomizable]              BIT              CONSTRAINT [DF_InternalCatalogAssignmentBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [CatalogId]                   UNIQUEIDENTIFIER NULL,
    [Object]                      UNIQUEIDENTIFIER NULL,
    [ObjectIdType]                INT              NULL,
    [ObjectName]                  NVARCHAR (1000)  NULL,
    [ObjectYomiName]              NVARCHAR (1000)  NULL,
    CONSTRAINT [cndx_PrimaryKey_InternalCatalogAssignment] PRIMARY KEY CLUSTERED ([InternalCatalogAssignmentId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [catalog_internalcatalogassignment] FOREIGN KEY ([CatalogId]) REFERENCES [dbo].[CatalogBaseIds] ([CatalogId]),
    CONSTRAINT [UQ_InternalCatalogAssignmentBase_ComponentIdUnique] UNIQUE NONCLUSTERED ([ComponentIdUnique] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW)
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[InternalCatalogAssignmentBase]([OrganizationId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[InternalCatalogAssignmentBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[InternalCatalogAssignmentBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Name]
    ON [dbo].[InternalCatalogAssignmentBase]([Name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[InternalCatalogAssignmentBase]([InternalCatalogAssignmentId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_for_entitykey_InternalCatalogAssignmentExportKey]
    ON [dbo].[InternalCatalogAssignmentBase]([CatalogId] ASC, [ComponentState] ASC, [Object] ASC, [ObjectIdType] ASC, [OverwriteTime] ASC)
    INCLUDE([InternalCatalogAssignmentId]) WHERE ([CatalogId] IS NOT NULL AND [ComponentState] IS NOT NULL AND [Object] IS NOT NULL AND [ObjectIdType] IS NOT NULL AND [OverwriteTime] IS NOT NULL) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

