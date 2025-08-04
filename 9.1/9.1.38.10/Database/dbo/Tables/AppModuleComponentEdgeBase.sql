CREATE TABLE [dbo].[AppModuleComponentEdgeBase] (
    [AppModuleComponentEdgeId]  UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NULL,
    [statecode]                 INT              NOT NULL,
    [statuscode]                INT              NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [Name]                      NVARCHAR (100)   NULL,
    [ComponentNodeFrom]         UNIQUEIDENTIFIER NULL,
    [ComponentNodeTo]           UNIQUEIDENTIFIER NULL,
    CONSTRAINT [PK_AppModuleComponentEdgeBase] PRIMARY KEY CLUSTERED ([AppModuleComponentEdgeId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [appmodulecomponentnode_appmodulecomponentedge_ComponentNodeFrom] FOREIGN KEY ([ComponentNodeFrom]) REFERENCES [dbo].[AppModuleComponentNodeBase] ([AppModuleComponentNodeId]),
    CONSTRAINT [appmodulecomponentnode_appmodulecomponentedge_ComponentNodeTo] FOREIGN KEY ([ComponentNodeTo]) REFERENCES [dbo].[AppModuleComponentNodeBase] ([AppModuleComponentNodeId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[AppModuleComponentEdgeBase]([OrganizationId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[AppModuleComponentEdgeBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[AppModuleComponentEdgeBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Name]
    ON [dbo].[AppModuleComponentEdgeBase]([Name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

