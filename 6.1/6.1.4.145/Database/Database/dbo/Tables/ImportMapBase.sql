CREATE TABLE [dbo].[ImportMapBase] (
    [StatusCode]                                      INT              CONSTRAINT [DF_ImportMapBase_StatusCode] DEFAULT ((1)) NOT NULL,
    [ModifiedBy]                                      UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                                      DATETIME         NOT NULL,
    [TargetEntity]                                    INT              NULL,
    [ImportMapType]                                   INT              CONSTRAINT [DF_ImportMapBase_ImportMapType] DEFAULT ((1)) NULL,
    [TargetUserIdentifierForSourceCRMUserLink]        NVARCHAR (160)   NULL,
    [IsWizardCreated]                                 BIT              CONSTRAINT [DF_ImportMapBase_IsWizardCreated] DEFAULT ((0)) NULL,
    [CreatedOn]                                       DATETIME         NOT NULL,
    [CreatedBy]                                       UNIQUEIDENTIFIER NULL,
    [ImportMapId]                                     UNIQUEIDENTIFIER NOT NULL,
    [Description]                                     NVARCHAR (MAX)   NULL,
    [Name]                                            NVARCHAR (320)   NULL,
    [SourceUserIdentifierForSourceDataSourceUserLink] NVARCHAR (160)   NULL,
    [SourceUserIdentifierForSourceCRMUserLink]        NVARCHAR (160)   NULL,
    [StateCode]                                       INT              CONSTRAINT [DF_ImportMapBase_StateCode] DEFAULT ((0)) NOT NULL,
    [OwningBusinessUnit]                              UNIQUEIDENTIFIER NULL,
    [Source]                                          NVARCHAR (160)   NULL,
    [IsValidForImport]                                BIT              CONSTRAINT [DF_ImportMapBase_IsValidForImport] DEFAULT ((0)) NULL,
    [CreatedOnBehalfBy]                               UNIQUEIDENTIFIER NULL,
    [OwnerId]                                         UNIQUEIDENTIFIER CONSTRAINT [DF_ImportMapBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [SourceType]                                      INT              NULL,
    [MapCustomizations]                               NVARCHAR (MAX)   NULL,
    [EntitiesPerFile]                                 INT              CONSTRAINT [DF_ImportMapBase_EntitiesPerFile] DEFAULT ((1)) NOT NULL,
    [ModifiedOnBehalfBy]                              UNIQUEIDENTIFIER NULL,
    [OwnerIdType]                                     INT              CONSTRAINT [DF_ImportMapBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_ImportMap] PRIMARY KEY CLUSTERED ([ImportMapId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [BusinessUnit_ImportMaps] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]) NOT FOR REPLICATION,
    CONSTRAINT [owner_importmaps] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]) NOT FOR REPLICATION
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Name]
    ON [dbo].[ImportMapBase]([Name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[ImportMapBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[ImportMapBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_BusinessUnit_ImportMaps]
    ON [dbo].[ImportMapBase]([OwningBusinessUnit] ASC) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR = 80);

