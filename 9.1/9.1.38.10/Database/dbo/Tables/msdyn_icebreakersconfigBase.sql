CREATE TABLE [dbo].[msdyn_icebreakersconfigBase] (
    [msdyn_icebreakersconfigId]            UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                            DATETIME         NULL,
    [CreatedBy]                            UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                           DATETIME         NULL,
    [ModifiedBy]                           UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]                    UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]                   UNIQUEIDENTIFIER NULL,
    [OwnerId]                              UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]                          INT              CONSTRAINT [DF_msdyn_icebreakersconfigBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]                   UNIQUEIDENTIFIER NULL,
    [statecode]                            INT              NOT NULL,
    [statuscode]                           INT              NULL,
    [VersionNumber]                        ROWVERSION       NULL,
    [ImportSequenceNumber]                 INT              NULL,
    [OverriddenCreatedOn]                  DATETIME         NULL,
    [TimeZoneRuleVersionNumber]            INT              NULL,
    [UTCConversionTimeZoneCode]            INT              NULL,
    [msdyn_name]                           NVARCHAR (100)   NULL,
    [msdyn_isadminsettingenabled]          BIT              NULL,
    [msdyn_ishealthcategoryenabled]        BIT              NULL,
    [msdyn_isfamilycategoryenabled]        BIT              NULL,
    [msdyn_issportscategoryenabled]        BIT              NULL,
    [msdyn_isentertainmentcategoryenabled] BIT              NULL,
    [msdyn_aretermsaccepted]               BIT              NULL,
    CONSTRAINT [PK_msdyn_icebreakersconfigBase] PRIMARY KEY CLUSTERED ([msdyn_icebreakersconfigId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [business_unit_msdyn_icebreakersconfig] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_msdyn_icebreakersconfig] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[msdyn_icebreakersconfigBase]([OwnerId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_msdyn_icebreakersconfigs]
    ON [dbo].[msdyn_icebreakersconfigBase]([OwningBusinessUnit] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[msdyn_icebreakersconfigBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[msdyn_icebreakersconfigBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_msdyn_name]
    ON [dbo].[msdyn_icebreakersconfigBase]([msdyn_name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_9C11FCEF739346E6A3C95EDA255F11F2]
    ON [dbo].[msdyn_icebreakersconfigBase]([msdyn_icebreakersconfigId] ASC)
    INCLUDE([msdyn_name], [CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_9C11FCEF739346E6A3C95EDA255F11F2]
    ON [dbo].[msdyn_icebreakersconfigBase]([msdyn_name] ASC, [msdyn_icebreakersconfigId] ASC)
    INCLUDE([CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_9C11FCEF739346E6A3C95EDA255F11F2]
    ON [dbo].[msdyn_icebreakersconfigBase]([msdyn_icebreakersconfigId] ASC)
    INCLUDE([msdyn_name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

