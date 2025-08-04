CREATE TABLE [dbo].[PrincipalObjectAccess] (
    [PrincipalId]               UNIQUEIDENTIFIER NOT NULL,
    [ObjectId]                  UNIQUEIDENTIFIER NOT NULL,
    [ObjectTypeCode]            INT              NOT NULL,
    [PrincipalTypeCode]         INT              NULL,
    [AccessRightsMask]          INT              NULL,
    [ChangedOn]                 DATETIME         NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [InheritedAccessRightsMask] INT              CONSTRAINT [DF_PrincipalObjectAccess_InheritedAccessRightsMask] DEFAULT ((0)) NOT NULL,
    [PrincipalObjectAccessId]   UNIQUEIDENTIFIER CONSTRAINT [DF_PrincipalObjectAccess_PrincipalObjectAccessId] DEFAULT (newid()) NOT NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    CONSTRAINT [ndx_PrimaryKey_PrincipalObjectAccess] PRIMARY KEY NONCLUSTERED ([PrincipalObjectAccessId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_PrincipalObjectAccess] UNIQUE NONCLUSTERED ([PrincipalId] ASC, [ObjectId] ASC, [ObjectTypeCode] ASC)
);


GO
CREATE CLUSTERED INDEX [cndx_PrincipalObjectAccess]
    ON [dbo].[PrincipalObjectAccess]([ObjectId] ASC, [PrincipalId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[PrincipalObjectAccess]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Cover]
    ON [dbo].[PrincipalObjectAccess]([ObjectTypeCode] ASC, [PrincipalId] ASC, [ObjectId] ASC, [AccessRightsMask] ASC, [InheritedAccessRightsMask] ASC) WITH (FILLFACTOR = 80);

