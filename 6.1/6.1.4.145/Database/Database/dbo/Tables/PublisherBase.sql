CREATE TABLE [dbo].[PublisherBase] (
    [PinpointPublisherId]            BIGINT           NULL,
    [CustomizationPrefix]            NVARCHAR (8)     NOT NULL,
    [ModifiedOn]                     DATETIME         NULL,
    [EMailAddress]                   NVARCHAR (100)   NULL,
    [VersionNumber]                  ROWVERSION       NULL,
    [ModifiedOnBehalfBy]             UNIQUEIDENTIFIER NULL,
    [PublisherId]                    UNIQUEIDENTIFIER NOT NULL,
    [PinpointPublisherDefaultLocale] NVARCHAR (16)    NULL,
    [Description]                    NVARCHAR (2000)  NULL,
    [CustomizationOptionValuePrefix] INT              NULL,
    [CreatedOnBehalfBy]              UNIQUEIDENTIFIER NULL,
    [OrganizationId]                 UNIQUEIDENTIFIER NOT NULL,
    [SupportingWebsiteUrl]           NVARCHAR (200)   NULL,
    [ModifiedBy]                     UNIQUEIDENTIFIER NULL,
    [CreatedOn]                      DATETIME         NULL,
    [UniqueName]                     NVARCHAR (256)   CONSTRAINT [DF_PublisherBase_UniqueName] DEFAULT ('') NOT NULL,
    [CreatedBy]                      UNIQUEIDENTIFIER NULL,
    [IsReadonly]                     BIT              CONSTRAINT [DF_PublisherBase_IsReadonly] DEFAULT ((0)) NOT NULL,
    [FriendlyName]                   NVARCHAR (256)   CONSTRAINT [DF_PublisherBase_FriendlyName] DEFAULT ('') NOT NULL,
    [EntityImageId]                  UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_Publisher] PRIMARY KEY CLUSTERED ([PublisherId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[PublisherBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_UniqueName]
    ON [dbo].[PublisherBase]([UniqueName] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_FriendlyName]
    ON [dbo].[PublisherBase]([FriendlyName] ASC) WITH (FILLFACTOR = 80);

