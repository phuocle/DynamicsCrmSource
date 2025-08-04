CREATE TABLE [dbo].[msdyn_playbookactivityattributeBase] (
    [msdyn_playbookactivityattributeId] UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                         DATETIME         NULL,
    [CreatedBy]                         UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                        DATETIME         NULL,
    [ModifiedBy]                        UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]                UNIQUEIDENTIFIER NULL,
    [OwnerId]                           UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]                       INT              CONSTRAINT [DF_msdyn_playbookactivityattributeBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]                UNIQUEIDENTIFIER NULL,
    [statecode]                         INT              NOT NULL,
    [statuscode]                        INT              NULL,
    [VersionNumber]                     ROWVERSION       NULL,
    [ImportSequenceNumber]              INT              NULL,
    [OverriddenCreatedOn]               DATETIME         NULL,
    [TimeZoneRuleVersionNumber]         INT              NULL,
    [UTCConversionTimeZoneCode]         INT              NULL,
    [msdyn_attributeLogicalName]        NVARCHAR (128)   NULL,
    [msdyn_playbookactivityid]          UNIQUEIDENTIFIER NULL,
    [msdyn_attributeType]               INT              NULL,
    [msdyn_attributeValue]              NVARCHAR (200)   NULL,
    CONSTRAINT [PK_msdyn_playbookactivityattributeBase] PRIMARY KEY CLUSTERED ([msdyn_playbookactivityattributeId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [business_unit_msdyn_playbookactivityattribute] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [msdyn_playbookactivity_msdyn_playbookactivityattribute] FOREIGN KEY ([msdyn_playbookactivityid]) REFERENCES [dbo].[msdyn_playbookactivityBase] ([msdyn_playbookactivityId]),
    CONSTRAINT [owner_msdyn_playbookactivityattribute] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[msdyn_playbookactivityattributeBase]([OwnerId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_msdyn_playbookactivityattributes]
    ON [dbo].[msdyn_playbookactivityattributeBase]([OwningBusinessUnit] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[msdyn_playbookactivityattributeBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[msdyn_playbookactivityattributeBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_msdyn_attributeLogicalName]
    ON [dbo].[msdyn_playbookactivityattributeBase]([msdyn_attributeLogicalName] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_msdyn_playbookactivity_msdyn_playbookactivityattribute]
    ON [dbo].[msdyn_playbookactivityattributeBase]([msdyn_playbookactivityid] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_4B3DA84665F140F299252CB9DF7E6479]
    ON [dbo].[msdyn_playbookactivityattributeBase]([msdyn_playbookactivityattributeId] ASC)
    INCLUDE([msdyn_attributeLogicalName]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_4B3DA84665F140F299252CB9DF7E6479]
    ON [dbo].[msdyn_playbookactivityattributeBase]([msdyn_attributeLogicalName] ASC, [msdyn_playbookactivityattributeId] ASC)
    INCLUDE([CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_4B3DA84665F140F299252CB9DF7E6479]
    ON [dbo].[msdyn_playbookactivityattributeBase]([msdyn_playbookactivityattributeId] ASC)
    INCLUDE([msdyn_attributeLogicalName], [CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

