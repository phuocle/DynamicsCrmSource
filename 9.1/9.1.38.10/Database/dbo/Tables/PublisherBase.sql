CREATE TABLE [dbo].[PublisherBase] (
    [EMailAddress]                   NVARCHAR (100)   NULL,
    [CustomizationPrefix]            NVARCHAR (8)     NOT NULL,
    [Description]                    NVARCHAR (2000)  NULL,
    [ModifiedBy]                     UNIQUEIDENTIFIER NULL,
    [CustomizationOptionValuePrefix] INT              NULL,
    [ModifiedOnBehalfBy]             UNIQUEIDENTIFIER NULL,
    [PinpointPublisherId]            BIGINT           NULL,
    [EntityImageId]                  UNIQUEIDENTIFIER NULL,
    [PublisherId]                    UNIQUEIDENTIFIER NOT NULL,
    [ModifiedOn]                     DATETIME         NULL,
    [VersionNumber]                  ROWVERSION       NULL,
    [PinpointPublisherDefaultLocale] NVARCHAR (16)    NULL,
    [CreatedOnBehalfBy]              UNIQUEIDENTIFIER NULL,
    [OrganizationId]                 UNIQUEIDENTIFIER NOT NULL,
    [SupportingWebsiteUrl]           NVARCHAR (200)   NULL,
    [CreatedOn]                      DATETIME         NULL,
    [UniqueName]                     NVARCHAR (256)   CONSTRAINT [DF_PublisherBase_UniqueName] DEFAULT ('') NOT NULL,
    [CreatedBy]                      UNIQUEIDENTIFIER NULL,
    [IsReadonly]                     BIT              CONSTRAINT [DF_PublisherBase_IsReadonly] DEFAULT ((0)) NOT NULL,
    [FriendlyName]                   NVARCHAR (256)   CONSTRAINT [DF_PublisherBase_FriendlyName] DEFAULT ('') NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_Publisher] PRIMARY KEY CLUSTERED ([PublisherId] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[PublisherBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_UniqueName]
    ON [dbo].[PublisherBase]([UniqueName] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[PublisherBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_182100A4932D4F45B0DE0820CEF41101]
    ON [dbo].[PublisherBase]([PublisherId] ASC)
    INCLUDE([FriendlyName], [UniqueName], [Description], [EMailAddress], [SupportingWebsiteUrl], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_182100A4932D4F45B0DE0820CEF41101]
    ON [dbo].[PublisherBase]([PublisherId] ASC)
    INCLUDE([FriendlyName], [UniqueName]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

