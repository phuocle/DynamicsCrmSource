CREATE TABLE [dbo].[msdyn_AIOdTrainingBoundingBoxBase] (
    [msdyn_AIOdTrainingBoundingBoxId] UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                       DATETIME         NULL,
    [CreatedBy]                       UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                      DATETIME         NULL,
    [ModifiedBy]                      UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]               UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]              UNIQUEIDENTIFIER NULL,
    [OwnerId]                         UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]                     INT              CONSTRAINT [DF_msdyn_AIOdTrainingBoundingBoxBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]              UNIQUEIDENTIFIER NULL,
    [statecode]                       INT              NOT NULL,
    [statuscode]                      INT              NULL,
    [VersionNumber]                   ROWVERSION       NULL,
    [ImportSequenceNumber]            INT              NULL,
    [OverriddenCreatedOn]             DATETIME         NULL,
    [TimeZoneRuleVersionNumber]       INT              NULL,
    [UTCConversionTimeZoneCode]       INT              NULL,
    [msdyn_name]                      NVARCHAR (100)   NULL,
    [msdyn_Height]                    FLOAT (53)       NULL,
    [msdyn_AIOdLabelId]               UNIQUEIDENTIFIER NULL,
    [msdyn_Left]                      FLOAT (53)       NULL,
    [msdyn_Top]                       FLOAT (53)       NULL,
    [msdyn_AIOdTrainingImageId]       UNIQUEIDENTIFIER NULL,
    [msdyn_Width]                     FLOAT (53)       NULL,
    CONSTRAINT [PK_msdyn_AIOdTrainingBoundingBoxBase] PRIMARY KEY CLUSTERED ([msdyn_AIOdTrainingBoundingBoxId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [business_unit_msdyn_aiodtrainingboundingbox] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [msdyn_aiodlabel_msdyn_aiodtrainingboundingbox] FOREIGN KEY ([msdyn_AIOdLabelId]) REFERENCES [dbo].[msdyn_AIOdLabelBase] ([msdyn_AIOdLabelId]),
    CONSTRAINT [msdyn_aiodtrainingimage_msdyn_aiodtrainingboundingbox] FOREIGN KEY ([msdyn_AIOdTrainingImageId]) REFERENCES [dbo].[msdyn_AIOdTrainingImageBase] ([msdyn_AIOdTrainingImageId]),
    CONSTRAINT [owner_msdyn_aiodtrainingboundingbox] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[msdyn_AIOdTrainingBoundingBoxBase]([OwnerId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_msdyn_AIOdTrainingBoundingBoxs]
    ON [dbo].[msdyn_AIOdTrainingBoundingBoxBase]([OwningBusinessUnit] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[msdyn_AIOdTrainingBoundingBoxBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[msdyn_AIOdTrainingBoundingBoxBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_msdyn_name]
    ON [dbo].[msdyn_AIOdTrainingBoundingBoxBase]([msdyn_name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_DAA7D09A7957485A827CDA110D2F5BBE]
    ON [dbo].[msdyn_AIOdTrainingBoundingBoxBase]([msdyn_AIOdTrainingBoundingBoxId] ASC)
    INCLUDE([msdyn_name], [CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_DAA7D09A7957485A827CDA110D2F5BBE]
    ON [dbo].[msdyn_AIOdTrainingBoundingBoxBase]([msdyn_name] ASC, [msdyn_AIOdTrainingBoundingBoxId] ASC)
    INCLUDE([CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_DAA7D09A7957485A827CDA110D2F5BBE]
    ON [dbo].[msdyn_AIOdTrainingBoundingBoxBase]([msdyn_AIOdTrainingBoundingBoxId] ASC)
    INCLUDE([msdyn_name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

