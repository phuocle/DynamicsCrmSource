CREATE TABLE [dbo].[PartnerApplicationBase] (
    [CreatedOn]                 DATETIME         NULL,
    [StateCode]                 INT              NOT NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [MetadataUrl]               NVARCHAR (1024)  NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [UseAuthorizationServer]    BIT              CONSTRAINT [DF_PartnerApplicationBase_UseAuthorizationServer] DEFAULT ((1)) NULL,
    [PrincipalId]               NVARCHAR (100)   NOT NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [Name]                      NVARCHAR (100)   NOT NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NOT NULL,
    [Realm]                     NVARCHAR (100)   NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [PartnerApplicationId]      UNIQUEIDENTIFIER NOT NULL,
    [StatusCode]                INT              NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ApplicationRole]           INT              CONSTRAINT [DF_PartnerApplicationBase_ApplicationRole] DEFAULT ((1)) NOT NULL,
    [TenantId]                  UNIQUEIDENTIFIER NULL,
    CONSTRAINT [PK_PartnerApplication] PRIMARY KEY CLUSTERED ([PartnerApplicationId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[PartnerApplicationBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[PartnerApplicationBase]([OrganizationId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_PartnerApplication_Name]
    ON [dbo].[PartnerApplicationBase]([Name] ASC) WITH (FILLFACTOR = 80);

