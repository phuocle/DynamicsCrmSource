CREATE TABLE [dbo].[msdyn_actioncardregardingBase] (
    [msdyn_actioncardregardingId] UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                   DATETIME         NULL,
    [CreatedBy]                   UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                  DATETIME         NULL,
    [ModifiedBy]                  UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]           UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]          UNIQUEIDENTIFIER NULL,
    [OwnerId]                     UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]                 INT              CONSTRAINT [DF_msdyn_actioncardregardingBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]          UNIQUEIDENTIFIER NULL,
    [statecode]                   INT              NOT NULL,
    [statuscode]                  INT              NULL,
    [VersionNumber]               ROWVERSION       NULL,
    [ImportSequenceNumber]        INT              NULL,
    [OverriddenCreatedOn]         DATETIME         NULL,
    [TimeZoneRuleVersionNumber]   INT              NULL,
    [UTCConversionTimeZoneCode]   INT              NULL,
    [msdyn_name]                  NVARCHAR (100)   NULL,
    [msdyn_actioncardid]          NVARCHAR (36)    NULL,
    CONSTRAINT [PK_msdyn_actioncardregardingBase] PRIMARY KEY CLUSTERED ([msdyn_actioncardregardingId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [business_unit_msdyn_actioncardregarding] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_msdyn_actioncardregarding] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[msdyn_actioncardregardingBase]([OwnerId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_msdyn_actioncardregardings]
    ON [dbo].[msdyn_actioncardregardingBase]([OwningBusinessUnit] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[msdyn_actioncardregardingBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[msdyn_actioncardregardingBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_msdyn_name]
    ON [dbo].[msdyn_actioncardregardingBase]([msdyn_name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_5E3D91588DAD4B31803EE5CB36D91F00]
    ON [dbo].[msdyn_actioncardregardingBase]([msdyn_name] ASC, [msdyn_actioncardregardingId] ASC)
    INCLUDE([CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_5E3D91588DAD4B31803EE5CB36D91F00]
    ON [dbo].[msdyn_actioncardregardingBase]([msdyn_actioncardregardingId] ASC)
    INCLUDE([msdyn_name], [CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_5E3D91588DAD4B31803EE5CB36D91F00]
    ON [dbo].[msdyn_actioncardregardingBase]([msdyn_actioncardregardingId] ASC)
    INCLUDE([msdyn_name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

