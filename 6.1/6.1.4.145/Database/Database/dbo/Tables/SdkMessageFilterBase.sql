CREATE TABLE [dbo].[SdkMessageFilterBase] (
    [CreatedBy]                     UNIQUEIDENTIFIER NULL,
    [SdkMessageFilterId]            UNIQUEIDENTIFIER NOT NULL,
    [OrganizationId]                UNIQUEIDENTIFIER NOT NULL,
    [PrimaryObjectTypeCode]         INT              NOT NULL,
    [VersionNumber]                 ROWVERSION       NULL,
    [ModifiedBy]                    UNIQUEIDENTIFIER NULL,
    [CustomizationLevel]            INT              CONSTRAINT [DF_SdkMessageFilterBase_CustomizationLevel] DEFAULT ((0)) NOT NULL,
    [SecondaryObjectTypeCode]       INT              NOT NULL,
    [SdkMessageFilterIdUnique]      UNIQUEIDENTIFIER CONSTRAINT [DF_SdkMessageFilterBase_SdkMessageFilterIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [ModifiedOn]                    DATETIME         NULL,
    [IsCustomProcessingStepAllowed] BIT              CONSTRAINT [DF_SdkMessageFilterBase_IsCustomProcessingStepAllowed] DEFAULT ((0)) NOT NULL,
    [CreatedOn]                     DATETIME         NULL,
    [Availability]                  INT              NOT NULL,
    [SdkMessageId]                  UNIQUEIDENTIFIER NOT NULL,
    [IsVisible]                     BIT              CONSTRAINT [DF_SdkMessageFilterBase_IsVisible] DEFAULT ((1)) NOT NULL,
    [ModifiedOnBehalfBy]            UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]             UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_SdkMessageFilter] PRIMARY KEY CLUSTERED ([SdkMessageFilterId] ASC, [CustomizationLevel] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [createdby_sdkmessagefilter] FOREIGN KEY ([CreatedBy]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]) NOT FOR REPLICATION,
    CONSTRAINT [createdonbehalfby_sdkmessagefilter] FOREIGN KEY ([CreatedOnBehalfBy]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]) NOT FOR REPLICATION,
    CONSTRAINT [modifiedby_sdkmessagefilter] FOREIGN KEY ([ModifiedBy]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]) NOT FOR REPLICATION,
    CONSTRAINT [modifiedonbehalfby_sdkmessagefilter] FOREIGN KEY ([ModifiedOnBehalfBy]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]) NOT FOR REPLICATION,
    CONSTRAINT [sdkmessageid_sdkmessagefilter] FOREIGN KEY ([SdkMessageId]) REFERENCES [dbo].[SdkMessageBaseIds] ([SdkMessageId]) NOT FOR REPLICATION,
    CONSTRAINT [UQ_SdkMessageFilterBase_SdkMessageFilterIdUnique] UNIQUE NONCLUSTERED ([SdkMessageFilterIdUnique] ASC)
);


GO
CREATE NONCLUSTERED INDEX [ndx_Cover_SdkMessageFilter]
    ON [dbo].[SdkMessageFilterBase]([SdkMessageId] ASC, [PrimaryObjectTypeCode] ASC, [SecondaryObjectTypeCode] ASC)
    INCLUDE([CustomizationLevel], [SdkMessageFilterIdUnique]) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SdkMessageFilterBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);

