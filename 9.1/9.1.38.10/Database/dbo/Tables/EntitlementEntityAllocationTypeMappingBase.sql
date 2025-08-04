CREATE TABLE [dbo].[EntitlementEntityAllocationTypeMappingBase] (
    [EntitlementEntityAllocationTypeMappingId] UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                                DATETIME         NULL,
    [CreatedBy]                                UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                               DATETIME         NULL,
    [ModifiedBy]                               UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]                        UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]                       UNIQUEIDENTIFIER NULL,
    [OwnerId]                                  UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]                              INT              CONSTRAINT [DF_EntitlementEntityAllocationTypeMappingBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]                       UNIQUEIDENTIFIER NULL,
    [statecode]                                INT              NOT NULL,
    [statuscode]                               INT              NULL,
    [VersionNumber]                            ROWVERSION       NULL,
    [ImportSequenceNumber]                     INT              NULL,
    [OverriddenCreatedOn]                      DATETIME         NULL,
    [TimeZoneRuleVersionNumber]                INT              NULL,
    [UTCConversionTimeZoneCode]                INT              NULL,
    [name]                                     NVARCHAR (100)   NULL,
    [allocationtype]                           INT              NULL,
    [entitytype]                               INT              NULL,
    CONSTRAINT [PK_EntitlementEntityAllocationTypeMappingBase] PRIMARY KEY CLUSTERED ([EntitlementEntityAllocationTypeMappingId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [business_unit_entitlemententityallocationtypemapping] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_entitlemententityallocationtypemapping] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_4564E092EBD040D1942D6EBF2F8A7510]
    ON [dbo].[EntitlementEntityAllocationTypeMappingBase]([EntitlementEntityAllocationTypeMappingId] ASC)
    INCLUDE([name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_name]
    ON [dbo].[EntitlementEntityAllocationTypeMappingBase]([name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_4564E092EBD040D1942D6EBF2F8A7510]
    ON [dbo].[EntitlementEntityAllocationTypeMappingBase]([EntitlementEntityAllocationTypeMappingId] ASC)
    INCLUDE([name], [CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_4564E092EBD040D1942D6EBF2F8A7510]
    ON [dbo].[EntitlementEntityAllocationTypeMappingBase]([name] ASC, [EntitlementEntityAllocationTypeMappingId] ASC)
    INCLUDE([CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_business_unit_entitlemententityallocationtypemapping]
    ON [dbo].[EntitlementEntityAllocationTypeMappingBase]([OwningBusinessUnit] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_owner_entitlemententityallocationtypemapping]
    ON [dbo].[EntitlementEntityAllocationTypeMappingBase]([OwnerId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

