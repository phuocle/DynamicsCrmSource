CREATE TABLE [dbo].[msdyn_knowledgearticleimageBase] (
    [msdyn_knowledgearticleimageId]  UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                      DATETIME         NULL,
    [CreatedBy]                      UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                     DATETIME         NULL,
    [ModifiedBy]                     UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]              UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]             UNIQUEIDENTIFIER NULL,
    [OwnerId]                        UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]                    INT              CONSTRAINT [DF_msdyn_knowledgearticleimageBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]             UNIQUEIDENTIFIER NULL,
    [statecode]                      INT              NOT NULL,
    [statuscode]                     INT              NULL,
    [VersionNumber]                  ROWVERSION       NULL,
    [ImportSequenceNumber]           INT              NULL,
    [OverriddenCreatedOn]            DATETIME         NULL,
    [TimeZoneRuleVersionNumber]      INT              NULL,
    [UTCConversionTimeZoneCode]      INT              NULL,
    [msdyn_FileName]                 NVARCHAR (100)   NULL,
    [msdyn_BlobFile]                 UNIQUEIDENTIFIER NULL,
    [msdyn_ParentKnowledgeArticleID] UNIQUEIDENTIFIER NULL,
    CONSTRAINT [PK_msdyn_knowledgearticleimageBase] PRIMARY KEY CLUSTERED ([msdyn_knowledgearticleimageId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [business_unit_msdyn_knowledgearticleimage] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [FileAttachment_msdyn_knowledgearticleimage_msdyn_BlobFile] FOREIGN KEY ([msdyn_BlobFile]) REFERENCES [dbo].[FileAttachmentBase] ([FileAttachmentId]),
    CONSTRAINT [owner_msdyn_knowledgearticleimage] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[msdyn_knowledgearticleimageBase]([OwnerId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_msdyn_knowledgearticleimages]
    ON [dbo].[msdyn_knowledgearticleimageBase]([OwningBusinessUnit] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[msdyn_knowledgearticleimageBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[msdyn_knowledgearticleimageBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_msdyn_FileName]
    ON [dbo].[msdyn_knowledgearticleimageBase]([msdyn_FileName] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_6954120D78514D8A870C2C47FB654FB8]
    ON [dbo].[msdyn_knowledgearticleimageBase]([msdyn_FileName] ASC, [msdyn_knowledgearticleimageId] ASC)
    INCLUDE([CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_6954120D78514D8A870C2C47FB654FB8]
    ON [dbo].[msdyn_knowledgearticleimageBase]([msdyn_knowledgearticleimageId] ASC)
    INCLUDE([msdyn_FileName], [CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_6954120D78514D8A870C2C47FB654FB8]
    ON [dbo].[msdyn_knowledgearticleimageBase]([msdyn_knowledgearticleimageId] ASC)
    INCLUDE([msdyn_FileName]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

