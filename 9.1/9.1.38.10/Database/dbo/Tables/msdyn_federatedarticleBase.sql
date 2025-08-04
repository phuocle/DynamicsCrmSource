CREATE TABLE [dbo].[msdyn_federatedarticleBase] (
    [msdyn_federatedarticleId]      UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                     DATETIME         NULL,
    [CreatedBy]                     UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                    DATETIME         NULL,
    [ModifiedBy]                    UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]             UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]            UNIQUEIDENTIFIER NULL,
    [OwnerId]                       UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]                   INT              CONSTRAINT [DF_msdyn_federatedarticleBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]            UNIQUEIDENTIFIER NULL,
    [statecode]                     INT              NOT NULL,
    [statuscode]                    INT              NULL,
    [VersionNumber]                 ROWVERSION       NULL,
    [ImportSequenceNumber]          INT              NULL,
    [OverriddenCreatedOn]           DATETIME         NULL,
    [TimeZoneRuleVersionNumber]     INT              NULL,
    [UTCConversionTimeZoneCode]     INT              NULL,
    [msdyn_title]                   NVARCHAR (100)   NULL,
    [msdyn_searchproviderarticleid] NVARCHAR (100)   NULL,
    [msdyn_searchproviderid]        UNIQUEIDENTIFIER NULL,
    [msdyn_url]                     NVARCHAR (1000)  NULL,
    CONSTRAINT [PK_msdyn_federatedarticleBase] PRIMARY KEY CLUSTERED ([msdyn_federatedarticleId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [business_unit_msdyn_federatedarticle] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [IK_msdyn_kmfederatedsearchconfig_msdyn_federatedarticle_searchproviderid] FOREIGN KEY ([msdyn_searchproviderid]) REFERENCES [dbo].[msdyn_kmfederatedsearchconfigBase] ([msdyn_kmfederatedsearchconfigId]),
    CONSTRAINT [owner_msdyn_federatedarticle] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[msdyn_federatedarticleBase]([OwnerId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_msdyn_federatedarticles]
    ON [dbo].[msdyn_federatedarticleBase]([OwningBusinessUnit] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[msdyn_federatedarticleBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[msdyn_federatedarticleBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_msdyn_title]
    ON [dbo].[msdyn_federatedarticleBase]([msdyn_title] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

