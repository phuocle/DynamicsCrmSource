CREATE TABLE [dbo].[msdynce_botcontentBase] (
    [msdynce_botcontentId]      UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [OwnerId]                   UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_msdynce_botcontentBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [statecode]                 INT              NOT NULL,
    [statuscode]                INT              NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [msdynce_autonumber]        NVARCHAR (100)   NULL,
    [msdynce_botid]             NVARCHAR (100)   NULL,
    [msdynce_state]             INT              NULL,
    CONSTRAINT [PK_msdynce_botcontentBase] PRIMARY KEY CLUSTERED ([msdynce_botcontentId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [business_unit_msdynce_botcontent] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_msdynce_botcontent] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[msdynce_botcontentBase]([OwnerId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_msdynce_botcontents]
    ON [dbo].[msdynce_botcontentBase]([OwningBusinessUnit] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[msdynce_botcontentBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[msdynce_botcontentBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_msdynce_autonumber]
    ON [dbo].[msdynce_botcontentBase]([msdynce_autonumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_8FA3BFB4814D46A5B8F2DA6BBCC53303]
    ON [dbo].[msdynce_botcontentBase]([msdynce_botcontentId] ASC)
    INCLUDE([msdynce_autonumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_8FA3BFB4814D46A5B8F2DA6BBCC53303]
    ON [dbo].[msdynce_botcontentBase]([msdynce_botcontentId] ASC)
    INCLUDE([msdynce_autonumber], [CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_8FA3BFB4814D46A5B8F2DA6BBCC53303]
    ON [dbo].[msdynce_botcontentBase]([msdynce_autonumber] ASC, [msdynce_botcontentId] ASC)
    INCLUDE([CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

