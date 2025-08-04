CREATE TABLE [dbo].[msdyn_salesinsightssettingsBase] (
    [msdyn_salesinsightssettingsId] UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                     DATETIME         NULL,
    [CreatedBy]                     UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                    DATETIME         NULL,
    [ModifiedBy]                    UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]             UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]            UNIQUEIDENTIFIER NULL,
    [OwnerId]                       UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]                   INT              CONSTRAINT [DF_msdyn_salesinsightssettingsBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]            UNIQUEIDENTIFIER NULL,
    [statecode]                     INT              NOT NULL,
    [statuscode]                    INT              NULL,
    [VersionNumber]                 ROWVERSION       NULL,
    [ImportSequenceNumber]          INT              NULL,
    [OverriddenCreatedOn]           DATETIME         NULL,
    [TimeZoneRuleVersionNumber]     INT              NULL,
    [UTCConversionTimeZoneCode]     INT              NULL,
    [msdyn_name]                    NVARCHAR (100)   NULL,
    [msdyn_ispreviewenabled]        BIT              NULL,
    [msdyn_isoctpreviewenabled]     BIT              NULL,
    [msdyn_islicensepurchased]      BIT              NULL,
    CONSTRAINT [PK_msdyn_salesinsightssettingsBase] PRIMARY KEY CLUSTERED ([msdyn_salesinsightssettingsId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [business_unit_msdyn_salesinsightssettings] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_msdyn_salesinsightssettings] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[msdyn_salesinsightssettingsBase]([OwnerId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_msdyn_salesinsightssettingss]
    ON [dbo].[msdyn_salesinsightssettingsBase]([OwningBusinessUnit] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[msdyn_salesinsightssettingsBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[msdyn_salesinsightssettingsBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_msdyn_name]
    ON [dbo].[msdyn_salesinsightssettingsBase]([msdyn_name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_BA9E8E0B2D5943D3AB97C1D80A5EC51C]
    ON [dbo].[msdyn_salesinsightssettingsBase]([msdyn_salesinsightssettingsId] ASC)
    INCLUDE([msdyn_name], [CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_BA9E8E0B2D5943D3AB97C1D80A5EC51C]
    ON [dbo].[msdyn_salesinsightssettingsBase]([msdyn_name] ASC, [msdyn_salesinsightssettingsId] ASC)
    INCLUDE([CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_BA9E8E0B2D5943D3AB97C1D80A5EC51C]
    ON [dbo].[msdyn_salesinsightssettingsBase]([msdyn_salesinsightssettingsId] ASC)
    INCLUDE([msdyn_name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

