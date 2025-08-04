CREATE TABLE [dbo].[msdyn_kmfederatedsearchconfigBase] (
    [msdyn_kmfederatedsearchconfigId] UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                       DATETIME         NULL,
    [CreatedBy]                       UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                      DATETIME         NULL,
    [ModifiedBy]                      UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]               UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]              UNIQUEIDENTIFIER NULL,
    [OwnerId]                         UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]                     INT              CONSTRAINT [DF_msdyn_kmfederatedsearchconfigBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]              UNIQUEIDENTIFIER NULL,
    [statecode]                       INT              NOT NULL,
    [statuscode]                      INT              NULL,
    [VersionNumber]                   ROWVERSION       NULL,
    [ImportSequenceNumber]            INT              NULL,
    [OverriddenCreatedOn]             DATETIME         NULL,
    [TimeZoneRuleVersionNumber]       INT              NULL,
    [UTCConversionTimeZoneCode]       INT              NULL,
    [msdyn_Name]                      NVARCHAR (100)   NULL,
    [IsDefault]                       BIT              NULL,
    [msdyn_Description]               NVARCHAR (MAX)   NULL,
    [Organization]                    NVARCHAR (100)   NULL,
    [SearchType]                      INT              NULL,
    [SharepointURL]                   NVARCHAR (100)   NULL,
    [ConnectionId]                    NVARCHAR (1250)  NULL,
    CONSTRAINT [PK_msdyn_kmfederatedsearchconfigBase] PRIMARY KEY CLUSTERED ([msdyn_kmfederatedsearchconfigId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [business_unit_msdyn_kmfederatedsearchconfig] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_msdyn_kmfederatedsearchconfig] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[msdyn_kmfederatedsearchconfigBase]([OwnerId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_msdyn_kmfederatedsearchconfigs]
    ON [dbo].[msdyn_kmfederatedsearchconfigBase]([OwningBusinessUnit] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[msdyn_kmfederatedsearchconfigBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[msdyn_kmfederatedsearchconfigBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_msdyn_Name]
    ON [dbo].[msdyn_kmfederatedsearchconfigBase]([msdyn_Name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

