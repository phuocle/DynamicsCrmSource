CREATE TABLE [dbo].[PrincipalObjectAttributeAccessBase] (
    [ObjectId]                         UNIQUEIDENTIFIER NOT NULL,
    [OrganizationId]                   UNIQUEIDENTIFIER NOT NULL,
    [PrincipalId]                      UNIQUEIDENTIFIER NOT NULL,
    [AttributeId]                      UNIQUEIDENTIFIER NOT NULL,
    [ReadAccess]                       BIT              CONSTRAINT [DF_PrincipalObjectAttributeAccessBase_ReadAccess] DEFAULT ((0)) NOT NULL,
    [PrincipalObjectAttributeAccessId] UNIQUEIDENTIFIER CONSTRAINT [DF_PrincipalObjectAttributeAccessBase_PrincipalObjectAttributeAccessId] DEFAULT (newid()) NOT NULL,
    [UpdateAccess]                     BIT              CONSTRAINT [DF_PrincipalObjectAttributeAccessBase_UpdateAccess] DEFAULT ((0)) NOT NULL,
    [VersionNumber]                    ROWVERSION       NULL,
    [PrincipalIdType]                  INT              NOT NULL,
    [ObjectTypeCode]                   INT              NOT NULL,
    CONSTRAINT [ndx_PrimaryKey_PrincipalObjectAttributeAccess] PRIMARY KEY NONCLUSTERED ([PrincipalObjectAttributeAccessId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE UNIQUE CLUSTERED INDEX [cndx_Security]
    ON [dbo].[PrincipalObjectAttributeAccessBase]([PrincipalId] ASC, [AttributeId] ASC, [ObjectId] ASC, [ObjectTypeCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[PrincipalObjectAttributeAccessBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_team_principalobjectattributeaccess_principalid]
    ON [dbo].[PrincipalObjectAttributeAccessBase]([PrincipalId] ASC, [PrincipalIdType] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_SecuredEntity_PrincipalObjectAttributeAccess]
    ON [dbo].[PrincipalObjectAttributeAccessBase]([ObjectId] ASC, [ObjectTypeCode] ASC) WITH (FILLFACTOR = 80);

