CREATE TABLE [dbo].[msdyn_relationshipinsightsunifiedconfigBase] (
    [msdyn_relationshipinsightsunifiedconfigId] UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                                 DATETIME         NULL,
    [CreatedBy]                                 UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                                DATETIME         NULL,
    [ModifiedBy]                                UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]                         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]                        UNIQUEIDENTIFIER NULL,
    [OwnerId]                                   UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]                               INT              CONSTRAINT [DF_msdyn_relationshipinsightsunifiedconfigBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]                        UNIQUEIDENTIFIER NULL,
    [statecode]                                 INT              NOT NULL,
    [statuscode]                                INT              NULL,
    [VersionNumber]                             ROWVERSION       NULL,
    [ImportSequenceNumber]                      INT              NULL,
    [OverriddenCreatedOn]                       DATETIME         NULL,
    [TimeZoneRuleVersionNumber]                 INT              NULL,
    [UTCConversionTimeZoneCode]                 INT              NULL,
    [new_name]                                  NVARCHAR (100)   NULL,
    [msdyn_usenewconfigexperience]              BIT              NULL,
    CONSTRAINT [PK_msdyn_relationshipinsightsunifiedconfigBase] PRIMARY KEY CLUSTERED ([msdyn_relationshipinsightsunifiedconfigId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_msdyn_relationshipinsightsunifiedconfig] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_msdyn_relationshipinsightsunifiedconfig] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
ALTER TABLE [dbo].[msdyn_relationshipinsightsunifiedconfigBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[msdyn_relationshipinsightsunifiedconfigBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_msdyn_relationshipinsightsunifiedconfigs]
    ON [dbo].[msdyn_relationshipinsightsunifiedconfigBase]([OwningBusinessUnit] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[msdyn_relationshipinsightsunifiedconfigBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[msdyn_relationshipinsightsunifiedconfigBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_new_name]
    ON [dbo].[msdyn_relationshipinsightsunifiedconfigBase]([new_name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_E345D2E04B514A9B9E16B98D28645515]
    ON [dbo].[msdyn_relationshipinsightsunifiedconfigBase]([msdyn_relationshipinsightsunifiedconfigId] ASC)
    INCLUDE([new_name], [CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_E345D2E04B514A9B9E16B98D28645515]
    ON [dbo].[msdyn_relationshipinsightsunifiedconfigBase]([msdyn_relationshipinsightsunifiedconfigId] ASC)
    INCLUDE([new_name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_E345D2E04B514A9B9E16B98D28645515]
    ON [dbo].[msdyn_relationshipinsightsunifiedconfigBase]([new_name] ASC, [msdyn_relationshipinsightsunifiedconfigId] ASC)
    INCLUDE([CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

