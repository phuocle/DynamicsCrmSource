CREATE TABLE [dbo].[msdyn_federatedarticleincidentBase] (
    [msdyn_federatedarticleincidentId] UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                        DATETIME         NULL,
    [CreatedBy]                        UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                       DATETIME         NULL,
    [ModifiedBy]                       UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]                UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]               UNIQUEIDENTIFIER NULL,
    [OrganizationId]                   UNIQUEIDENTIFIER NULL,
    [statecode]                        INT              NOT NULL,
    [statuscode]                       INT              NULL,
    [VersionNumber]                    ROWVERSION       NULL,
    [ImportSequenceNumber]             INT              NULL,
    [OverriddenCreatedOn]              DATETIME         NULL,
    [TimeZoneRuleVersionNumber]        INT              NULL,
    [UTCConversionTimeZoneCode]        INT              NULL,
    [msdyn_name]                       NVARCHAR (100)   NULL,
    [msdyn_searchproviderarticleid]    NVARCHAR (100)   NULL,
    [msdyn_incidentid]                 UNIQUEIDENTIFIER NULL,
    [msdyn_federatedarticleid]         UNIQUEIDENTIFIER NULL,
    CONSTRAINT [PK_msdyn_federatedarticleincidentBase] PRIMARY KEY CLUSTERED ([msdyn_federatedarticleincidentId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [msdyn_federatedarticle_msdyn_federatedarticleincident_federatedarticleId] FOREIGN KEY ([msdyn_federatedarticleid]) REFERENCES [dbo].[msdyn_federatedarticleBase] ([msdyn_federatedarticleId]),
    CONSTRAINT [msdyn_incident_msdyn_federatedarticleincident_IncidentId] FOREIGN KEY ([msdyn_incidentid]) REFERENCES [dbo].[IncidentBase] ([IncidentId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[msdyn_federatedarticleincidentBase]([OrganizationId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[msdyn_federatedarticleincidentBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[msdyn_federatedarticleincidentBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_msdyn_name]
    ON [dbo].[msdyn_federatedarticleincidentBase]([msdyn_name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_37D9DA9756A4496B86F40CDA882E9659]
    ON [dbo].[msdyn_federatedarticleincidentBase]([msdyn_name] ASC, [msdyn_federatedarticleincidentId] ASC)
    INCLUDE([CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_37D9DA9756A4496B86F40CDA882E9659]
    ON [dbo].[msdyn_federatedarticleincidentBase]([msdyn_federatedarticleincidentId] ASC)
    INCLUDE([msdyn_name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_37D9DA9756A4496B86F40CDA882E9659]
    ON [dbo].[msdyn_federatedarticleincidentBase]([msdyn_federatedarticleincidentId] ASC)
    INCLUDE([msdyn_name], [CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

