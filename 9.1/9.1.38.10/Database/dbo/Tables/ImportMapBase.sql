CREATE TABLE [dbo].[ImportMapBase] (
    [CreatedOnBehalfBy]                               UNIQUEIDENTIFIER NULL,
    [OwnerId]                                         UNIQUEIDENTIFIER CONSTRAINT [DF_ImportMapBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [CreatedOn]                                       DATETIME         NOT NULL,
    [ImportMapId]                                     UNIQUEIDENTIFIER NOT NULL,
    [CreatedBy]                                       UNIQUEIDENTIFIER NULL,
    [SolutionId]                                      UNIQUEIDENTIFIER CONSTRAINT [DF_ImportMapBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [Name]                                            NVARCHAR (320)   NULL,
    [SourceUserIdentifierForSourceDataSourceUserLink] NVARCHAR (160)   NULL,
    [ModifiedOn]                                      DATETIME         NOT NULL,
    [IsManaged]                                       BIT              CONSTRAINT [DF_ImportMapBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [IsValidForImport]                                BIT              CONSTRAINT [DF_ImportMapBase_IsValidForImport] DEFAULT ((0)) NULL,
    [SourceType]                                      INT              NULL,
    [OwningBusinessUnit]                              UNIQUEIDENTIFIER NULL,
    [MapCustomizations]                               NVARCHAR (MAX)   NULL,
    [EntitiesPerFile]                                 INT              CONSTRAINT [DF_ImportMapBase_EntitiesPerFile] DEFAULT ((1)) NOT NULL,
    [IntroducedVersion]                               NVARCHAR (48)    NULL,
    [ModifiedBy]                                      UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]                              UNIQUEIDENTIFIER NULL,
    [StateCode]                                       INT              CONSTRAINT [DF_ImportMapBase_StateCode] DEFAULT ((0)) NOT NULL,
    [ComponentState]                                  INT              CONSTRAINT [DF_ImportMapBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [StatusCode]                                      INT              CONSTRAINT [DF_ImportMapBase_StatusCode] DEFAULT ((1)) NOT NULL,
    [TargetUserIdentifierForSourceCRMUserLink]        NVARCHAR (160)   NULL,
    [IsWizardCreated]                                 BIT              CONSTRAINT [DF_ImportMapBase_IsWizardCreated] DEFAULT ((0)) NULL,
    [OverwriteTime]                                   DATETIME         CONSTRAINT [DF_ImportMapBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [Source]                                          NVARCHAR (160)   NULL,
    [ImportMapIdUnique]                               UNIQUEIDENTIFIER CONSTRAINT [DF_ImportMapBase_ImportMapIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [Description]                                     NVARCHAR (MAX)   NULL,
    [SourceUserIdentifierForSourceCRMUserLink]        NVARCHAR (160)   NULL,
    [SupportingSolutionId]                            UNIQUEIDENTIFIER NULL,
    [ImportMapType]                                   INT              CONSTRAINT [DF_ImportMapBase_ImportMapType] DEFAULT ((1)) NULL,
    [TargetEntity]                                    INT              NULL,
    [OwnerIdType]                                     INT              CONSTRAINT [DF_ImportMapBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_ImportMap] PRIMARY KEY CLUSTERED ([ImportMapId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[ImportMapBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[ImportMapBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[ImportMapBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[ImportMapBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Name]
    ON [dbo].[ImportMapBase]([Name] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_BusinessUnit_ImportMaps]
    ON [dbo].[ImportMapBase]([OwningBusinessUnit] ASC) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[ImportMapBase]([ImportMapId] ASC) WHERE ([OverwriteTime]=(0) AND [ComponentState]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_ImportMapBase_ImportMapIdUnique]
    ON [dbo].[ImportMapBase]([ImportMapIdUnique] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_DF365C20D3FA4D0FA0ABA4286D4279E5]
    ON [dbo].[ImportMapBase]([ImportMapId] ASC)
    INCLUDE([Name], [OwnerId], [OwnerIdType], [Description], [ModifiedOn], [CreatedOn], [IsValidForImport], [ImportMapType]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_DF365C20D3FA4D0FA0ABA4286D4279E5]
    ON [dbo].[ImportMapBase]([Name] ASC, [ImportMapId] ASC)
    INCLUDE([OwnerId], [OwnerIdType], [Description], [ModifiedOn], [CreatedOn], [IsValidForImport], [ImportMapType]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_DF365C20D3FA4D0FA0ABA4286D4279E5]
    ON [dbo].[ImportMapBase]([ImportMapId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

