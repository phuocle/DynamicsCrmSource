CREATE TABLE [dbo].[msdyn_knowledgesearchinsightBase] (
    [msdyn_knowledgesearchinsightId] UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                      DATETIME         NULL,
    [CreatedBy]                      UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                     DATETIME         NULL,
    [ModifiedBy]                     UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]              UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]             UNIQUEIDENTIFIER NULL,
    [OwnerId]                        UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]                    INT              CONSTRAINT [DF_msdyn_knowledgesearchinsightBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]             UNIQUEIDENTIFIER NULL,
    [statecode]                      INT              NOT NULL,
    [statuscode]                     INT              NULL,
    [VersionNumber]                  ROWVERSION       NULL,
    [ImportSequenceNumber]           INT              NULL,
    [OverriddenCreatedOn]            DATETIME         NULL,
    [TimeZoneRuleVersionNumber]      INT              NULL,
    [UTCConversionTimeZoneCode]      INT              NULL,
    [msdyn_SearchTerm]               NVARCHAR (256)   NULL,
    [msdyn_TimeStamp]                DATETIME         NULL,
    [msdyn_ResultCount]              INT              NULL,
    [msdyn_ApplicationName]          NVARCHAR (100)   NULL,
    [msdyn_EntityType]               NVARCHAR (100)   NULL,
    [msdyn_EntityRecordId]           NVARCHAR (36)    NULL,
    [msdyn_CorrelationId]            NVARCHAR (36)    NULL,
    [msdyn_SearchProviderName]       NVARCHAR (100)   NULL,
    [msdyn_SearchProviderId]         NVARCHAR (36)    NULL,
    [msdyn_CustomControlId]          NVARCHAR (200)   NULL,
    [msdyn_SortBy]                   NVARCHAR (100)   NULL,
    [msdyn_Filters]                  NVARCHAR (1000)  NULL,
    [msdyn_ResponseTime]             INT              NULL,
    [msdyn_SearchType]               NVARCHAR (100)   NULL,
    [msdyn_InitiatedBy]              NVARCHAR (50)    NULL,
    CONSTRAINT [PK_msdyn_knowledgesearchinsightBase] PRIMARY KEY CLUSTERED ([msdyn_knowledgesearchinsightId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [business_unit_msdyn_knowledgesearchinsight] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_msdyn_knowledgesearchinsight] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[msdyn_knowledgesearchinsightBase]([OwnerId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_msdyn_knowledgesearchinsights]
    ON [dbo].[msdyn_knowledgesearchinsightBase]([OwningBusinessUnit] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[msdyn_knowledgesearchinsightBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[msdyn_knowledgesearchinsightBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_msdyn_SearchTerm]
    ON [dbo].[msdyn_knowledgesearchinsightBase]([msdyn_SearchTerm] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_B30343E4253A4203AC9F69CB8F17CF26]
    ON [dbo].[msdyn_knowledgesearchinsightBase]([msdyn_knowledgesearchinsightId] ASC)
    INCLUDE([msdyn_SearchTerm]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_B30343E4253A4203AC9F69CB8F17CF26]
    ON [dbo].[msdyn_knowledgesearchinsightBase]([msdyn_SearchTerm] ASC, [msdyn_knowledgesearchinsightId] ASC)
    INCLUDE([CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_B30343E4253A4203AC9F69CB8F17CF26]
    ON [dbo].[msdyn_knowledgesearchinsightBase]([msdyn_knowledgesearchinsightId] ASC)
    INCLUDE([msdyn_SearchTerm], [CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

