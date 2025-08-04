CREATE TABLE [dbo].[PartnerApplicationBase] (
    [CreatedOn]                 DATETIME         NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [MetadataUrl]               NVARCHAR (1024)  NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [PrincipalId]               NVARCHAR (100)   NOT NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [StateCode]                 INT              NOT NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [Name]                      NVARCHAR (100)   NOT NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NOT NULL,
    [Realm]                     NVARCHAR (256)   NULL,
    [UseAuthorizationServer]    BIT              CONSTRAINT [DF_PartnerApplicationBase_UseAuthorizationServer] DEFAULT ((1)) NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [PartnerApplicationId]      UNIQUEIDENTIFIER NOT NULL,
    [StatusCode]                INT              NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ApplicationRole]           INT              CONSTRAINT [DF_PartnerApplicationBase_ApplicationRole] DEFAULT ((1)) NOT NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [TenantId]                  UNIQUEIDENTIFIER NULL,
    CONSTRAINT [PK_PartnerApplication] PRIMARY KEY CLUSTERED ([PartnerApplicationId] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[PartnerApplicationBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[PartnerApplicationBase]([OrganizationId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[PartnerApplicationBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_PartnerApplication_Name]
    ON [dbo].[PartnerApplicationBase]([Name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_089785B2111F40BA93E8A24DE27C1035]
    ON [dbo].[PartnerApplicationBase]([Name] ASC, [PartnerApplicationId] ASC)
    INCLUDE([PrincipalId], [ApplicationRole], [UseAuthorizationServer], [StateCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_089785B2111F40BA93E8A24DE27C1035]
    ON [dbo].[PartnerApplicationBase]([PartnerApplicationId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_089785B2111F40BA93E8A24DE27C1035]
    ON [dbo].[PartnerApplicationBase]([PartnerApplicationId] ASC)
    INCLUDE([Name], [PrincipalId], [ApplicationRole], [UseAuthorizationServer], [StateCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

