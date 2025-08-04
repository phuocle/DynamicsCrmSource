CREATE TABLE [dbo].[SdkMessageRequestBase] (
    [CustomizationLevel]        INT              CONSTRAINT [DF_SdkMessageRequestBase_CustomizationLevel] DEFAULT ((0)) NOT NULL,
    [SdkMessagePairId]          UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [SdkMessageRequestIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_SdkMessageRequestBase_SdkMessageRequestIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [Name]                      NVARCHAR (256)   NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [SdkMessageRequestId]       UNIQUEIDENTIFIER NOT NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [PrimaryObjectTypeCode]     INT              NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_SdkMessageRequest] PRIMARY KEY CLUSTERED ([SdkMessageRequestId] ASC, [CustomizationLevel] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [createdby_sdkmessagerequest] FOREIGN KEY ([CreatedBy]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]) NOT FOR REPLICATION,
    CONSTRAINT [createdonbehalfby_sdkmessagerequest] FOREIGN KEY ([CreatedOnBehalfBy]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]) NOT FOR REPLICATION,
    CONSTRAINT [messagepair_sdkmessagerequest] FOREIGN KEY ([SdkMessagePairId]) REFERENCES [dbo].[SdkMessagePairBaseIds] ([SdkMessagePairId]) NOT FOR REPLICATION,
    CONSTRAINT [modifiedby_sdkmessagerequest] FOREIGN KEY ([ModifiedBy]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]) NOT FOR REPLICATION,
    CONSTRAINT [modifiedonbehalfby_sdkmessagerequest] FOREIGN KEY ([ModifiedOnBehalfBy]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]) NOT FOR REPLICATION,
    CONSTRAINT [UQ_SdkMessageRequestBase_SdkMessageRequestIdUnique] UNIQUE NONCLUSTERED ([SdkMessageRequestIdUnique] ASC)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SdkMessageRequestBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);

