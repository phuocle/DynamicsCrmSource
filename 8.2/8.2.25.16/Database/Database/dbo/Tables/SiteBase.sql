CREATE TABLE [dbo].[SiteBase] (
    [VersionNumber]        ROWVERSION       NULL,
    [OrganizationId]       UNIQUEIDENTIFIER NOT NULL,
    [EMailAddress]         NVARCHAR (100)   NULL,
    [Name]                 NVARCHAR (160)   NOT NULL,
    [ModifiedOn]           DATETIME         NULL,
    [SiteId]               UNIQUEIDENTIFIER NOT NULL,
    [ModifiedBy]           UNIQUEIDENTIFIER NULL,
    [CreatedOn]            DATETIME         NULL,
    [TimeZoneCode]         INT              NOT NULL,
    [CreatedBy]            UNIQUEIDENTIFIER NULL,
    [ImportSequenceNumber] INT              NULL,
    [OverriddenCreatedOn]  DATETIME         NULL,
    [CreatedOnBehalfBy]    UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]   UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_Site] PRIMARY KEY CLUSTERED ([SiteId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SiteBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[SiteBase]([Name] ASC) WITH (FILLFACTOR = 80);

