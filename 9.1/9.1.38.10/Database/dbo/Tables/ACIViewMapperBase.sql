CREATE TABLE [dbo].[ACIViewMapperBase] (
    [WebApplicationEndPoint]    NVARCHAR (1250)  NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NOT NULL,
    [ModifiedOn]                DATETIME         NOT NULL,
    [ViewName]                  NVARCHAR (1250)  NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [ACIViewMapperId]           UNIQUEIDENTIFIER NOT NULL,
    [StatusCode]                INT              NULL,
    [statecode]                 INT              NOT NULL,
    [CreatedOn]                 DATETIME         NOT NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL
);


GO
ALTER TABLE [dbo].[ACIViewMapperBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ACIViewMapperBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);

