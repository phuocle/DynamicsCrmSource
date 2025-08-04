CREATE TABLE [dbo].[AuthorizationServerBase] (
    [StateCode]                 INT              NOT NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NOT NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [Realm]                     NVARCHAR (100)   NULL,
    [PrincipalId]               NVARCHAR (100)   NOT NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [TenantId]                  UNIQUEIDENTIFIER NULL,
    [MetadataUrl]               NVARCHAR (1024)  NULL,
    [StatusCode]                INT              NULL,
    [Name]                      NVARCHAR (100)   NOT NULL,
    [AuthorizationServerId]     UNIQUEIDENTIFIER NOT NULL,
    [MetadataRefreshedOn]       DATETIME         NULL,
    [Metadata]                  NVARCHAR (MAX)   NULL,
    [CreatedOn]                 DATETIME         NULL,
    CONSTRAINT [PK_authorizationserver] PRIMARY KEY CLUSTERED ([AuthorizationServerId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[AuthorizationServerBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[AuthorizationServerBase]([OrganizationId] ASC) WITH (FILLFACTOR = 80);

