CREATE TABLE [dbo].[SdkMessageResponseBase] (
    [VersionNumber]              ROWVERSION       NULL,
    [SdkMessageResponseIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_SdkMessageResponseBase_SdkMessageResponseIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [ModifiedBy]                 UNIQUEIDENTIFIER NULL,
    [CustomizationLevel]         INT              CONSTRAINT [DF_SdkMessageResponseBase_CustomizationLevel] DEFAULT ((0)) NOT NULL,
    [SdkMessageRequestId]        UNIQUEIDENTIFIER NULL,
    [CreatedBy]                  UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                 DATETIME         NULL,
    [CreatedOn]                  DATETIME         NULL,
    [OrganizationId]             UNIQUEIDENTIFIER NOT NULL,
    [SdkMessageResponseId]       UNIQUEIDENTIFIER NOT NULL,
    [CreatedOnBehalfBy]          UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_SdkMessageResponse] PRIMARY KEY CLUSTERED ([SdkMessageResponseId] ASC, [CustomizationLevel] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [createdby_sdkmessageresponse] FOREIGN KEY ([CreatedBy]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]) NOT FOR REPLICATION,
    CONSTRAINT [createdonbehalfby_sdkmessageresponse] FOREIGN KEY ([CreatedOnBehalfBy]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]) NOT FOR REPLICATION,
    CONSTRAINT [messagerequest_sdkmessageresponse] FOREIGN KEY ([SdkMessageRequestId]) REFERENCES [dbo].[SdkMessageRequestBaseIds] ([SdkMessageRequestId]) NOT FOR REPLICATION,
    CONSTRAINT [modifiedby_sdkmessageresponse] FOREIGN KEY ([ModifiedBy]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]) NOT FOR REPLICATION,
    CONSTRAINT [modifiedonbehalfby_sdkmessageresponse] FOREIGN KEY ([ModifiedOnBehalfBy]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]) NOT FOR REPLICATION,
    CONSTRAINT [UQ_SdkMessageResponseBase_SdkMessageResponseIdUnique] UNIQUE NONCLUSTERED ([SdkMessageResponseIdUnique] ASC)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SdkMessageResponseBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);

