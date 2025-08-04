CREATE TABLE [dbo].[SdkMessagePairBase] (
    [ModifiedBy]             UNIQUEIDENTIFIER NULL,
    [SdkMessagePairId]       UNIQUEIDENTIFIER NOT NULL,
    [CustomizationLevel]     INT              CONSTRAINT [DF_SdkMessagePairBase_CustomizationLevel] DEFAULT ((0)) NOT NULL,
    [CreatedOn]              DATETIME         NULL,
    [SdkMessagePairIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_SdkMessagePairBase_SdkMessagePairIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [Endpoint]               NVARCHAR (128)   NOT NULL,
    [OrganizationId]         UNIQUEIDENTIFIER NOT NULL,
    [CreatedBy]              UNIQUEIDENTIFIER NULL,
    [ModifiedOn]             DATETIME         NULL,
    [VersionNumber]          ROWVERSION       NULL,
    [Namespace]              NVARCHAR (256)   NOT NULL,
    [SdkMessageId]           UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]      UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]     UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_SdkMessagePair] PRIMARY KEY CLUSTERED ([SdkMessagePairId] ASC, [CustomizationLevel] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [createdby_sdkmessagepair] FOREIGN KEY ([CreatedBy]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]) NOT FOR REPLICATION,
    CONSTRAINT [createdonbehalfby_sdkmessagepair] FOREIGN KEY ([CreatedOnBehalfBy]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]) NOT FOR REPLICATION,
    CONSTRAINT [message_sdkmessagepair] FOREIGN KEY ([SdkMessageId]) REFERENCES [dbo].[SdkMessageBaseIds] ([SdkMessageId]) NOT FOR REPLICATION,
    CONSTRAINT [modifiedby_sdkmessagepair] FOREIGN KEY ([ModifiedBy]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]) NOT FOR REPLICATION,
    CONSTRAINT [modifiedonbehalfby_sdkmessagepair] FOREIGN KEY ([ModifiedOnBehalfBy]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]) NOT FOR REPLICATION,
    CONSTRAINT [UQ_SdkMessagePairBase_SdkMessagePairIdUnique] UNIQUE NONCLUSTERED ([SdkMessagePairIdUnique] ASC)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SdkMessagePairBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);

