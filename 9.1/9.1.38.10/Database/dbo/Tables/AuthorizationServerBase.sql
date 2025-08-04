CREATE TABLE [dbo].[AuthorizationServerBase] (
    [StateCode]                 INT              NOT NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NOT NULL,
    [StatusCode]                INT              NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [AuthorizationServerType]   INT              CONSTRAINT [DF_AuthorizationServerBase_AuthorizationServerType] DEFAULT ((0)) NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [Realm]                     NVARCHAR (100)   NULL,
    [AuthorizationServerId]     UNIQUEIDENTIFIER NOT NULL,
    [PrincipalId]               NVARCHAR (100)   NOT NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [TenantId]                  UNIQUEIDENTIFIER NULL,
    [MetadataUrl]               NVARCHAR (1024)  NULL,
    [Name]                      NVARCHAR (100)   NOT NULL,
    [MetadataRefreshedOn]       DATETIME         NULL,
    [Metadata]                  NVARCHAR (MAX)   NULL,
    [CreatedOn]                 DATETIME         NULL,
    CONSTRAINT [PK_authorizationserver] PRIMARY KEY CLUSTERED ([AuthorizationServerId] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[AuthorizationServerBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[AuthorizationServerBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[AuthorizationServerBase]([OrganizationId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[AuthorizationServerBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);

