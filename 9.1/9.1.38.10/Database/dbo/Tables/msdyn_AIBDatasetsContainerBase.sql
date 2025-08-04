CREATE TABLE [dbo].[msdyn_AIBDatasetsContainerBase] (
    [msdyn_AIBDatasetsContainerId] UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                    DATETIME         NULL,
    [CreatedBy]                    UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                   DATETIME         NULL,
    [ModifiedBy]                   UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]            UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]           UNIQUEIDENTIFIER NULL,
    [OwnerId]                      UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]                  INT              CONSTRAINT [DF_msdyn_AIBDatasetsContainerBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]           UNIQUEIDENTIFIER NULL,
    [statecode]                    INT              NOT NULL,
    [statuscode]                   INT              NULL,
    [VersionNumber]                ROWVERSION       NULL,
    [ImportSequenceNumber]         INT              NULL,
    [OverriddenCreatedOn]          DATETIME         NULL,
    [TimeZoneRuleVersionNumber]    INT              NULL,
    [UTCConversionTimeZoneCode]    INT              NULL,
    [msdyn_Name]                   NVARCHAR (100)   NULL,
    [msdyn_AIModelId]              UNIQUEIDENTIFIER NULL,
    CONSTRAINT [PK_msdyn_AIBDatasetsContainerBase] PRIMARY KEY CLUSTERED ([msdyn_AIBDatasetsContainerId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [business_unit_msdyn_aibdatasetscontainer] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [msdyn_AIBDatasetsContainer_msdyn_AIModelI] FOREIGN KEY ([msdyn_AIModelId]) REFERENCES [dbo].[msdyn_AIModelBaseIds] ([msdyn_AIModelId]),
    CONSTRAINT [owner_msdyn_aibdatasetscontainer] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[msdyn_AIBDatasetsContainerBase]([OwnerId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_msdyn_AIBDatasetsContainers]
    ON [dbo].[msdyn_AIBDatasetsContainerBase]([OwningBusinessUnit] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[msdyn_AIBDatasetsContainerBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[msdyn_AIBDatasetsContainerBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_msdyn_Name]
    ON [dbo].[msdyn_AIBDatasetsContainerBase]([msdyn_Name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_msdyn_AIBDatasetsContainer_msdyn_AIModelI]
    ON [dbo].[msdyn_AIBDatasetsContainerBase]([msdyn_AIModelId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_44BDFC3138474D3FBDA94F60ADDC6FF1]
    ON [dbo].[msdyn_AIBDatasetsContainerBase]([msdyn_Name] ASC, [msdyn_AIBDatasetsContainerId] ASC)
    INCLUDE([CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_44BDFC3138474D3FBDA94F60ADDC6FF1]
    ON [dbo].[msdyn_AIBDatasetsContainerBase]([msdyn_AIBDatasetsContainerId] ASC)
    INCLUDE([msdyn_Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_44BDFC3138474D3FBDA94F60ADDC6FF1]
    ON [dbo].[msdyn_AIBDatasetsContainerBase]([msdyn_AIBDatasetsContainerId] ASC)
    INCLUDE([msdyn_Name], [CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

