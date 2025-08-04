CREATE TABLE [dbo].[UserQueryVisualizationBase] (
    [Name]                     NVARCHAR (100)   NOT NULL,
    [CreatedOn]                DATETIME         NOT NULL,
    [VersionNumber]            ROWVERSION       NULL,
    [DataDescription]          NVARCHAR (MAX)   NULL,
    [UserQueryVisualizationId] UNIQUEIDENTIFIER NOT NULL,
    [IsDefault]                BIT              CONSTRAINT [DF_UserQueryVisualizationBase_IsDefault] DEFAULT ((0)) NOT NULL,
    [WebResourceId]            UNIQUEIDENTIFIER NULL,
    [ModifiedOn]               DATETIME         NOT NULL,
    [OwnerId]                  UNIQUEIDENTIFIER CONSTRAINT [DF_UserQueryVisualizationBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [PrimaryEntityTypeCode]    INT              CONSTRAINT [DF_UserQueryVisualizationBase_PrimaryEntityTypeCode] DEFAULT ((0)) NOT NULL,
    [CreatedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [Description]              NVARCHAR (MAX)   NULL,
    [ModifiedBy]               UNIQUEIDENTIFIER NOT NULL,
    [OwningBusinessUnit]       UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]       UNIQUEIDENTIFIER NULL,
    [PresentationDescription]  NVARCHAR (MAX)   NULL,
    [CreatedBy]                UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]              INT              CONSTRAINT [DF_UserQueryVisualizationBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_UserQueryVisualization] PRIMARY KEY CLUSTERED ([UserQueryVisualizationId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_userqueryvisualizations] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]) NOT FOR REPLICATION,
    CONSTRAINT [owner_userqueryvisualizations] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]) NOT FOR REPLICATION
);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_webresource_userqueryvisualizations]
    ON [dbo].[UserQueryVisualizationBase]([WebResourceId] ASC) WHERE ([WebResourceId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_owner_userqueryvisualizations]
    ON [dbo].[UserQueryVisualizationBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[UserQueryVisualizationBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[UserQueryVisualizationBase]([Name] ASC) WITH (FILLFACTOR = 80);

