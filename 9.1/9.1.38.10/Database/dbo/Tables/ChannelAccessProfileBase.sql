CREATE TABLE [dbo].[ChannelAccessProfileBase] (
    [VersionNumber]                ROWVERSION       NULL,
    [WebAccess]                    BIT              NULL,
    [OwningBusinessUnit]           UNIQUEIDENTIFIER NULL,
    [TransactionCurrencyId]        UNIQUEIDENTIFIER NULL,
    [RateKnowledgeArticles]        BIT              NULL,
    [ViewArticleRating]            BIT              NULL,
    [EmailAccess]                  BIT              NULL,
    [SubmitFeedback]               BIT              NULL,
    [ChannelAccessProfileIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_ChannelAccessProfileBase_ChannelAccessProfileIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [TwitterAccess]                BIT              NULL,
    [OwnerId]                      UNIQUEIDENTIFIER NOT NULL,
    [ChannelAccessProfileId]       UNIQUEIDENTIFIER NOT NULL,
    [OverwriteTime]                DATETIME         CONSTRAINT [DF_ChannelAccessProfileBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [StatusCode]                   INT              NULL,
    [HavePrivilegesChanged]        BIT              CONSTRAINT [DF_ChannelAccessProfileBase_HavePrivilegesChanged] DEFAULT ((0)) NULL,
    [StateCode]                    INT              NOT NULL,
    [CreatedOnBehalfBy]            UNIQUEIDENTIFIER NULL,
    [SupportingSolutionId]         UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                   UNIQUEIDENTIFIER NULL,
    [PhoneAccess]                  BIT              NULL,
    [CreatedOn]                    DATETIME         NULL,
    [ComponentState]               INT              CONSTRAINT [DF_ChannelAccessProfileBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [ViewKnowledgeArticles]        BIT              NULL,
    [UTCConversionTimeZoneCode]    INT              NULL,
    [ExchangeRate]                 DECIMAL (23, 10) NULL,
    [ImportSequenceNumber]         INT              NULL,
    [CreatedBy]                    UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                   DATETIME         NULL,
    [IntroducedVersion]            NVARCHAR (48)    NULL,
    [IsManaged]                    BIT              CONSTRAINT [DF_ChannelAccessProfileBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [FacebookAccess]               BIT              NULL,
    [IsGuestProfile]               BIT              CONSTRAINT [DF_ChannelAccessProfileBase_IsGuestProfile] DEFAULT ((0)) NULL,
    [TimeZoneRuleVersionNumber]    INT              NULL,
    [OverriddenCreatedOn]          DATETIME         NULL,
    [ModifiedOnBehalfBy]           UNIQUEIDENTIFIER NULL,
    [SolutionId]                   UNIQUEIDENTIFIER CONSTRAINT [DF_ChannelAccessProfileBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [Name]                         NVARCHAR (150)   NULL,
    [OwnerIdType]                  INT              CONSTRAINT [DF_ChannelAccessProfileBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_ChannelAccessProfile] PRIMARY KEY CLUSTERED ([ChannelAccessProfileId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[ChannelAccessProfileBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[ChannelAccessProfileBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ChannelAccessProfileBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[ChannelAccessProfileBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Name]
    ON [dbo].[ChannelAccessProfileBase]([Name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[ChannelAccessProfileBase]([ChannelAccessProfileId] ASC) WHERE ([OverwriteTime]=(0) AND [ComponentState]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_37CE42B88D4B48C8BB4AB1ABE5B42F11]
    ON [dbo].[ChannelAccessProfileBase]([ChannelAccessProfileId] ASC)
    INCLUDE([Name], [OwnerId], [OwnerIdType], [StateCode], [CreatedOn], [CreatedBy], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_37CE42B88D4B48C8BB4AB1ABE5B42F11]
    ON [dbo].[ChannelAccessProfileBase]([Name] ASC, [ChannelAccessProfileId] ASC)
    INCLUDE([OwnerId], [OwnerIdType], [StateCode], [CreatedOn], [CreatedBy], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_37CE42B88D4B48C8BB4AB1ABE5B42F11]
    ON [dbo].[ChannelAccessProfileBase]([ChannelAccessProfileId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

