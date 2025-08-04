CREATE TABLE [dbo].[PrincipalSyncAttributeMapBase] (
    [MappingName]                           NVARCHAR (100)   NOT NULL,
    [AttributeCRMName]                      NVARCHAR (100)   NULL,
    [EntityTypeCode]                        INT              NOT NULL,
    [OrganizationId]                        UNIQUEIDENTIFIER NOT NULL,
    [AttributeExchangeName]                 NVARCHAR (100)   NULL,
    [ParentPrincipalSyncAttributeMappingId] UNIQUEIDENTIFIER NULL,
    [AttributeExchangeDisplayName]          NVARCHAR (100)   NULL,
    [DefaultSyncDirection]                  INT              CONSTRAINT [DF_PrincipalSyncAttributeMapBase_DefaultSyncDirection] DEFAULT ((0)) NOT NULL,
    [SyncDirection]                         INT              CONSTRAINT [DF_PrincipalSyncAttributeMapBase_SyncDirection] DEFAULT ((0)) NOT NULL,
    [PrincipalId]                           UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]                         ROWVERSION       NULL,
    [PrincipalSyncAttributeMapId]           UNIQUEIDENTIFIER CONSTRAINT [DF_PrincipalSyncAttributeMapBase_PrincipalSyncAttributeMapId] DEFAULT (newid()) NOT NULL,
    [ComputedProperties]                    NVARCHAR (500)   NULL,
    [AttributeCRMDisplayName]               NVARCHAR (100)   NULL,
    [IsComputed]                            BIT              CONSTRAINT [DF_PrincipalSyncAttributeMapBase_IsComputed] DEFAULT ((0)) NOT NULL,
    [AllowedSyncDirection]                  TINYINT          CONSTRAINT [DF_PrincipalSyncAttributeMapBase_AllowedSyncDirection] DEFAULT ((0)) NOT NULL
);


GO
ALTER TABLE [dbo].[PrincipalSyncAttributeMapBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[PrincipalSyncAttributeMapBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);

