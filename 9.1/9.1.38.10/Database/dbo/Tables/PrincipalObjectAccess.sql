CREATE TABLE [dbo].[PrincipalObjectAccess] (
    [PrincipalId]               UNIQUEIDENTIFIER NOT NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [ObjectId]                  UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [PrincipalObjectAccessId]   UNIQUEIDENTIFIER CONSTRAINT [DF_PrincipalObjectAccess_PrincipalObjectAccessId] DEFAULT (newid()) NOT NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [PrincipalTypeCode]         INT              NULL,
    [ChangedOn]                 DATETIME         NULL,
    [AccessRightsMask]          INT              NULL,
    [InheritedAccessRightsMask] INT              CONSTRAINT [DF_PrincipalObjectAccess_InheritedAccessRightsMask] DEFAULT ((0)) NOT NULL,
    [ObjectTypeCode]            INT              NOT NULL,
    CONSTRAINT [ndx_PrimaryKey_PrincipalObjectAccess] PRIMARY KEY NONCLUSTERED ([PrincipalObjectAccessId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_PrincipalObjectAccess] UNIQUE NONCLUSTERED ([PrincipalId] ASC, [ObjectId] ASC, [ObjectTypeCode] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[PrincipalObjectAccess] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE CLUSTERED INDEX [cndx_PrincipalObjectAccess]
    ON [dbo].[PrincipalObjectAccess]([ObjectId] ASC, [PrincipalId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[PrincipalObjectAccess]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Cover]
    ON [dbo].[PrincipalObjectAccess]([ObjectTypeCode] ASC, [PrincipalId] ASC, [ObjectId] ASC, [AccessRightsMask] ASC, [InheritedAccessRightsMask] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_MaxVersion]
    ON [dbo].[PrincipalObjectAccess]([PrincipalId] ASC, [ObjectTypeCode] ASC)
    INCLUDE([VersionNumber]) WHERE ([ObjectTypeCode] IN ((1031), (4230), (1112))) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_PrincipalId_ObjectTypeCode]
    ON [dbo].[PrincipalObjectAccess]([PrincipalId] ASC, [ObjectTypeCode] ASC)
    INCLUDE([AccessRightsMask], [InheritedAccessRightsMask]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_POARecordCountSnapshot]
    ON [dbo].[PrincipalObjectAccess]([PrincipalTypeCode] ASC)
    INCLUDE([ObjectTypeCode], [AccessRightsMask], [InheritedAccessRightsMask]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

