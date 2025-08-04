CREATE TABLE [dbo].[msdyn_entityrankingruleBase] (
    [msdyn_entityrankingruleId] UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [OwnerId]                   UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_msdyn_entityrankingruleBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [statecode]                 INT              NOT NULL,
    [statuscode]                INT              NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [msdyn_name]                NVARCHAR (100)   NULL,
    [msdyn_FetchXmlRule]        NVARCHAR (MAX)   NULL,
    [msdyn_entityname]          NVARCHAR (256)   NULL,
    [msdyn_ObjectTypeCode]      INT              NULL,
    [msdyn_OOBRule]             BIT              NULL,
    [msdyn_enabled]             BIT              NULL,
    [msdyn_overriddenrank]      INT              NULL,
    [msdyn_RulePriority]        INT              NULL,
    CONSTRAINT [PK_msdyn_entityrankingruleBase] PRIMARY KEY CLUSTERED ([msdyn_entityrankingruleId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [business_unit_msdyn_entityrankingrule] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_msdyn_entityrankingrule] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[msdyn_entityrankingruleBase]([OwnerId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_msdyn_entityrankingrules]
    ON [dbo].[msdyn_entityrankingruleBase]([OwningBusinessUnit] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[msdyn_entityrankingruleBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[msdyn_entityrankingruleBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_msdyn_name]
    ON [dbo].[msdyn_entityrankingruleBase]([msdyn_name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_EDB16CBDCE73497A9E6B653CD885D527]
    ON [dbo].[msdyn_entityrankingruleBase]([msdyn_entityrankingruleId] ASC)
    INCLUDE([msdyn_entityname]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_EDB16CBDCE73497A9E6B653CD885D527]
    ON [dbo].[msdyn_entityrankingruleBase]([msdyn_name] ASC, [msdyn_entityrankingruleId] ASC)
    INCLUDE([CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_EDB16CBDCE73497A9E6B653CD885D527]
    ON [dbo].[msdyn_entityrankingruleBase]([msdyn_entityrankingruleId] ASC)
    INCLUDE([msdyn_name], [CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_msdyn_entityname]
    ON [dbo].[msdyn_entityrankingruleBase]([msdyn_entityname] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

