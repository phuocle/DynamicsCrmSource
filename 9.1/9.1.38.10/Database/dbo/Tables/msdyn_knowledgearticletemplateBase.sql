CREATE TABLE [dbo].[msdyn_knowledgearticletemplateBase] (
    [msdyn_knowledgearticletemplateId] UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                        DATETIME         NULL,
    [CreatedBy]                        UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                       DATETIME         NULL,
    [ModifiedBy]                       UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]                UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]               UNIQUEIDENTIFIER NULL,
    [OwnerId]                          UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]                      INT              CONSTRAINT [DF_msdyn_knowledgearticletemplateBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]               UNIQUEIDENTIFIER NULL,
    [statecode]                        INT              NOT NULL,
    [statuscode]                       INT              NULL,
    [VersionNumber]                    ROWVERSION       NULL,
    [ImportSequenceNumber]             INT              NULL,
    [OverriddenCreatedOn]              DATETIME         NULL,
    [TimeZoneRuleVersionNumber]        INT              NULL,
    [UTCConversionTimeZoneCode]        INT              NULL,
    [msdyn_name]                       NVARCHAR (4000)  NULL,
    [msdyn_Content]                    NVARCHAR (MAX)   NULL,
    [msdyn_Description]                NVARCHAR (155)   NULL,
    [msdyn_isinternal]                 BIT              NULL,
    [msdyn_keywords]                   NVARCHAR (MAX)   NULL,
    [msdyn_subjectid]                  UNIQUEIDENTIFIER NULL,
    [msdyn_title]                      NVARCHAR (4000)  NULL,
    [msdyn_languagelocaleid]           NVARCHAR (36)    NULL,
    [msdyn_LanguageLocaleIdName]       NVARCHAR (320)   NULL,
    [msdyn_name_QF_prefix]             AS               (CONVERT([nvarchar](850),substring([msdyn_name],(1),(850)))),
    CONSTRAINT [PK_msdyn_knowledgearticletemplateBase] PRIMARY KEY CLUSTERED ([msdyn_knowledgearticletemplateId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [business_unit_msdyn_knowledgearticletemplate] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [msdyn_subject_knowledgearticletemplate_subjectid] FOREIGN KEY ([msdyn_subjectid]) REFERENCES [dbo].[SubjectBase] ([SubjectId]),
    CONSTRAINT [owner_msdyn_knowledgearticletemplate] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[msdyn_knowledgearticletemplateBase]([OwnerId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_msdyn_knowledgearticletemplates]
    ON [dbo].[msdyn_knowledgearticletemplateBase]([OwningBusinessUnit] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[msdyn_knowledgearticletemplateBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[msdyn_knowledgearticletemplateBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_69635C00CD924B98AE346B7B9E1A6D52]
    ON [dbo].[msdyn_knowledgearticletemplateBase]([msdyn_knowledgearticletemplateId] ASC)
    INCLUDE([msdyn_name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_69635C00CD924B98AE346B7B9E1A6D52]
    ON [dbo].[msdyn_knowledgearticletemplateBase]([msdyn_knowledgearticletemplateId] ASC)
    INCLUDE([msdyn_name], [CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_msdyn_name]
    ON [dbo].[msdyn_knowledgearticletemplateBase]([msdyn_name_QF_prefix] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

