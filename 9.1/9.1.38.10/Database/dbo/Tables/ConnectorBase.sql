CREATE TABLE [dbo].[ConnectorBase] (
    [connectorId]               UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [OwnerId]                   UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_ConnectorBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [statecode]                 INT              NOT NULL,
    [statuscode]                INT              NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [ConnectorIdUnique]         UNIQUEIDENTIFIER CONSTRAINT [DF_ConnectorBase_ConnectorIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [ConnectorType]             INT              NULL,
    [Description]               NVARCHAR (500)   NULL,
    [DisplayName]               NVARCHAR (200)   NULL,
    [IconBrandColor]            NVARCHAR (100)   NULL,
    [IconBlobId]                UNIQUEIDENTIFIER NULL,
    [Name]                      NVARCHAR (250)   NULL,
    [OpenApiDefinition]         NVARCHAR (MAX)   NULL,
    [ConnectionParameters]      NVARCHAR (MAX)   NULL,
    [PolicyTemplateInstances]   NVARCHAR (MAX)   NULL,
    [ConnectorInternalId]       NVARCHAR (200)   NULL,
    [IsCustomizable]            BIT              CONSTRAINT [DF_ConnectorBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [SolutionId]                UNIQUEIDENTIFIER CONSTRAINT [DF_ConnectorBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId]      UNIQUEIDENTIFIER NULL,
    [ComponentState]            INT              CONSTRAINT [DF_ConnectorBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [OverwriteTime]             DATETIME         CONSTRAINT [DF_ConnectorBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [IsManaged]                 BIT              CONSTRAINT [DF_ConnectorBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [IntroducedVersion]         NVARCHAR (48)    NULL,
    CONSTRAINT [PK_ConnectorBase] PRIMARY KEY CLUSTERED ([connectorId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [business_unit_connector] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_connector] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [ndx_connector_name] UNIQUE NONCLUSTERED ([Name] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [UQ_ConnectorBase_ConnectorIdUnique] UNIQUE NONCLUSTERED ([ConnectorIdUnique] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW)
);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_D04F964E89654A99B2A5DDC35538AB19]
    ON [dbo].[ConnectorBase]([connectorId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_D04F964E89654A99B2A5DDC35538AB19]
    ON [dbo].[ConnectorBase]([connectorId] ASC)
    INCLUDE([Name], [CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_D04F964E89654A99B2A5DDC35538AB19]
    ON [dbo].[ConnectorBase]([Name] ASC, [connectorId] ASC)
    INCLUDE([CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

