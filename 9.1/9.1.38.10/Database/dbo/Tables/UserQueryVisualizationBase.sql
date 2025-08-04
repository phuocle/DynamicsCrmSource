CREATE TABLE [dbo].[UserQueryVisualizationBase] (
    [ChartType]                INT              CONSTRAINT [DF_UserQueryVisualizationBase_ChartType] DEFAULT ((0)) NULL,
    [DataDescription]          NVARCHAR (MAX)   NULL,
    [Name]                     NVARCHAR (100)   NOT NULL,
    [VersionNumber]            ROWVERSION       NULL,
    [CreatedOn]                DATETIME         NOT NULL,
    [WebResourceId]            UNIQUEIDENTIFIER NULL,
    [IsDefault]                BIT              CONSTRAINT [DF_UserQueryVisualizationBase_IsDefault] DEFAULT ((0)) NOT NULL,
    [OwnerId]                  UNIQUEIDENTIFIER CONSTRAINT [DF_UserQueryVisualizationBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [PrimaryEntityTypeCode]    INT              CONSTRAINT [DF_UserQueryVisualizationBase_PrimaryEntityTypeCode] DEFAULT ((0)) NOT NULL,
    [Description]              NVARCHAR (MAX)   NULL,
    [ModifiedBy]               UNIQUEIDENTIFIER NOT NULL,
    [UserQueryVisualizationId] UNIQUEIDENTIFIER NOT NULL,
    [OwningBusinessUnit]       UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]       UNIQUEIDENTIFIER NULL,
    [PresentationDescription]  NVARCHAR (MAX)   NULL,
    [ModifiedOn]               DATETIME         NOT NULL,
    [CreatedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [CreatedBy]                UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]              INT              CONSTRAINT [DF_UserQueryVisualizationBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_UserQueryVisualization] PRIMARY KEY CLUSTERED ([UserQueryVisualizationId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_userqueryvisualizations] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_userqueryvisualizations] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[UserQueryVisualizationBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[UserQueryVisualizationBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[UserQueryVisualizationBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_owner_userqueryvisualizations]
    ON [dbo].[UserQueryVisualizationBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_webresource_userqueryvisualizations]
    ON [dbo].[UserQueryVisualizationBase]([WebResourceId] ASC) WHERE ([WebResourceId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_A87CEFE0BE464665927D7F8228AA3F9E]
    ON [dbo].[UserQueryVisualizationBase]([UserQueryVisualizationId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_A87CEFE0BE464665927D7F8228AA3F9E]
    ON [dbo].[UserQueryVisualizationBase]([UserQueryVisualizationId] ASC)
    INCLUDE([Name], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[UserQueryVisualizationBase]([Name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_A87CEFE0BE464665927D7F8228AA3F9E]
    ON [dbo].[UserQueryVisualizationBase]([Name] ASC, [UserQueryVisualizationId] ASC)
    INCLUDE([VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

