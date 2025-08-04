CREATE TABLE [dbo].[AppModuleComponentNodeBase] (
    [AppModuleComponentNodeId]  UNIQUEIDENTIFIER NOT NULL,
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
    [ComponentDatabaseVersion]  NVARCHAR (100)   NULL,
    [ComponentObjectId]         NVARCHAR (100)   NULL,
    [ComponentType]             INT              NULL,
    [SnapshotVersionNumber]     INT              NULL,
    [ValidationResult]          NVARCHAR (4000)  NULL,
    [ValidationStatus]          INT              NULL,
    CONSTRAINT [PK_AppModuleComponentNodeBase] PRIMARY KEY CLUSTERED ([AppModuleComponentNodeId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW)
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[AppModuleComponentNodeBase]([OrganizationId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[AppModuleComponentNodeBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[AppModuleComponentNodeBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Name]
    ON [dbo].[AppModuleComponentNodeBase]([Name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

