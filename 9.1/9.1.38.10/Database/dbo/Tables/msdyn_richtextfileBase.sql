CREATE TABLE [dbo].[msdyn_richtextfileBase] (
    [msdyn_richtextfileId]         UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                    DATETIME         NULL,
    [CreatedBy]                    UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                   DATETIME         NULL,
    [ModifiedBy]                   UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]            UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]           UNIQUEIDENTIFIER NULL,
    [OwnerId]                      UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]                  INT              CONSTRAINT [DF_msdyn_richtextfileBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]           UNIQUEIDENTIFIER NULL,
    [statecode]                    INT              NOT NULL,
    [statuscode]                   INT              NULL,
    [VersionNumber]                ROWVERSION       NULL,
    [ImportSequenceNumber]         INT              NULL,
    [OverriddenCreatedOn]          DATETIME         NULL,
    [TimeZoneRuleVersionNumber]    INT              NULL,
    [UTCConversionTimeZoneCode]    INT              NULL,
    [msdyn_name]                   NVARCHAR (100)   NULL,
    [msdyn_imageblobId]            UNIQUEIDENTIFIER NULL,
    [msdyn_parententity_fieldname] NVARCHAR (100)   NULL,
    [msdyn_parententityname]       NVARCHAR (100)   NULL,
    [msdyn_parentid]               NVARCHAR (100)   NULL,
    [msdyn_fileblob]               UNIQUEIDENTIFIER NULL,
    CONSTRAINT [PK_msdyn_richtextfileBase] PRIMARY KEY CLUSTERED ([msdyn_richtextfileId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [business_unit_msdyn_richtextfile] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [FileAttachment_msdyn_richtextfile_msdyn_fileblob] FOREIGN KEY ([msdyn_fileblob]) REFERENCES [dbo].[FileAttachmentBase] ([FileAttachmentId]),
    CONSTRAINT [owner_msdyn_richtextfile] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[msdyn_richtextfileBase]([OwnerId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_msdyn_richtextfiles]
    ON [dbo].[msdyn_richtextfileBase]([OwningBusinessUnit] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[msdyn_richtextfileBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[msdyn_richtextfileBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_msdyn_name]
    ON [dbo].[msdyn_richtextfileBase]([msdyn_name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_29C086B077F64BCF9F6C3D1298C9F132]
    ON [dbo].[msdyn_richtextfileBase]([msdyn_name] ASC, [msdyn_richtextfileId] ASC)
    INCLUDE([CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_29C086B077F64BCF9F6C3D1298C9F132]
    ON [dbo].[msdyn_richtextfileBase]([msdyn_richtextfileId] ASC)
    INCLUDE([msdyn_name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_29C086B077F64BCF9F6C3D1298C9F132]
    ON [dbo].[msdyn_richtextfileBase]([msdyn_richtextfileId] ASC)
    INCLUDE([msdyn_name], [CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

