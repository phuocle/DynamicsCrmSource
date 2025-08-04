CREATE TABLE [dbo].[ServiceEndpointBase] (
    [ModifiedOn]              DATETIME         NULL,
    [SupportingSolutionId]    UNIQUEIDENTIFIER NULL,
    [Description]             NVARCHAR (MAX)   NULL,
    [Name]                    NVARCHAR (256)   CONSTRAINT [DF_ServiceEndpointBase_Name] DEFAULT ('') NOT NULL,
    [Contract]                INT              CONSTRAINT [DF_ServiceEndpointBase_Contract] DEFAULT ((1)) NOT NULL,
    [NamespaceFormat]         INT              CONSTRAINT [DF_ServiceEndpointBase_NamespaceFormat] DEFAULT ((1)) NULL,
    [ServiceEndpointIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_ServiceEndpointBase_ServiceEndpointIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [IsCustomizable]          BIT              CONSTRAINT [DF_ServiceEndpointBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [OrganizationId]          UNIQUEIDENTIFIER NOT NULL,
    [UserClaim]               INT              CONSTRAINT [DF_ServiceEndpointBase_UserClaim] DEFAULT ((1)) NOT NULL,
    [SASKeyName]              NVARCHAR (256)   NULL,
    [AuthType]                INT              CONSTRAINT [DF_ServiceEndpointBase_AuthType] DEFAULT ((1)) NULL,
    [AuthValue]               VARBINARY (MAX)  NULL,
    [Path]                    NVARCHAR (160)   NOT NULL,
    [CreatedOnBehalfBy]       UNIQUEIDENTIFIER NULL,
    [ServiceEndpointId]       UNIQUEIDENTIFIER NOT NULL,
    [MessageFormat]           INT              CONSTRAINT [DF_ServiceEndpointBase_MessageFormat] DEFAULT ((1)) NULL,
    [ConnectionMode]          INT              CONSTRAINT [DF_ServiceEndpointBase_ConnectionMode] DEFAULT ((1)) NOT NULL,
    [IsManaged]               BIT              CONSTRAINT [DF_ServiceEndpointBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [CreatedBy]               UNIQUEIDENTIFIER NULL,
    [CreatedOn]               DATETIME         NULL,
    [ModifiedBy]              UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]      UNIQUEIDENTIFIER NULL,
    [OverwriteTime]           DATETIME         CONSTRAINT [DF_ServiceEndpointBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [SASKey]                  VARBINARY (MAX)  NULL,
    [NamespaceAddress]        NVARCHAR (255)   NULL,
    [ComponentState]          INT              CONSTRAINT [DF_ServiceEndpointBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [IntroducedVersion]       NVARCHAR (48)    NULL,
    [SolutionNamespace]       NVARCHAR (160)   NOT NULL,
    [Url]                     NVARCHAR (2000)  NULL,
    [SASToken]                VARBINARY (MAX)  NULL,
    [SolutionId]              UNIQUEIDENTIFIER CONSTRAINT [DF_ServiceEndpointBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_ServiceEndpoint] PRIMARY KEY CLUSTERED ([ServiceEndpointId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_ServiceEndpointBase_ServiceEndpointIdUnique] UNIQUE NONCLUSTERED ([ServiceEndpointIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[ServiceEndpointBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[ServiceEndpointBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[ServiceEndpointBase]([ServiceEndpointId] ASC) WHERE ([OverwriteTime]=(0) AND [ComponentState]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_2CD4C3DD22F944A4A05231C911F2B3EF]
    ON [dbo].[ServiceEndpointBase]([ServiceEndpointId] ASC)
    INCLUDE([Name], [SolutionNamespace], [Path]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_2CD4C3DD22F944A4A05231C911F2B3EF]
    ON [dbo].[ServiceEndpointBase]([Name] ASC, [ServiceEndpointId] ASC)
    INCLUDE([SolutionNamespace], [Path], [Contract], [ConnectionMode]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_2CD4C3DD22F944A4A05231C911F2B3EF]
    ON [dbo].[ServiceEndpointBase]([ServiceEndpointId] ASC)
    INCLUDE([Name], [SolutionNamespace], [Path], [Contract], [ConnectionMode]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SolutionNamespace]
    ON [dbo].[ServiceEndpointBase]([SolutionNamespace] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[ServiceEndpointBase]([Name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Path]
    ON [dbo].[ServiceEndpointBase]([Path] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

