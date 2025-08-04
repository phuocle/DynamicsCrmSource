CREATE TABLE [dbo].[ChannelAccessProfileBase] (
    [ModifiedOnBehalfBy]           UNIQUEIDENTIFIER NULL,
    [ChannelAccessProfileId]       UNIQUEIDENTIFIER NOT NULL,
    [TimeZoneRuleVersionNumber]    INT              NULL,
    [SupportingSolutionId]         UNIQUEIDENTIFIER NULL,
    [ViewKnowledgeArticles]        BIT              NULL,
    [CreatedOn]                    DATETIME         NULL,
    [SubmitFeedback]               BIT              NULL,
    [Name]                         NVARCHAR (150)   NULL,
    [OverriddenCreatedOn]          DATETIME         NULL,
    [WebAccess]                    BIT              NULL,
    [IsGuestProfile]               BIT              CONSTRAINT [DF_ChannelAccessProfileBase_IsGuestProfile] DEFAULT ((0)) NULL,
    [OwningBusinessUnit]           UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]            UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                   DATETIME         NULL,
    [HavePrivilegesChanged]        BIT              CONSTRAINT [DF_ChannelAccessProfileBase_IsChildDirty] DEFAULT ((0)) NULL,
    [IsManaged]                    BIT              CONSTRAINT [DF_ChannelAccessProfileBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [OverwriteTime]                DATETIME         CONSTRAINT [DF_ChannelAccessProfileBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [CreatedBy]                    UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                   UNIQUEIDENTIFIER NULL,
    [ExchangeRate]                 DECIMAL (23, 10) NULL,
    [StateCode]                    INT              NOT NULL,
    [FacebookAccess]               BIT              NULL,
    [TwitterAccess]                BIT              NULL,
    [VersionNumber]                ROWVERSION       NULL,
    [OwnerId]                      UNIQUEIDENTIFIER NOT NULL,
    [ChannelAccessProfileIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_ChannelAccessProfileBase_ChannelAccessProfileIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [EmailAccess]                  BIT              NULL,
    [IntroducedVersion]            NVARCHAR (48)    NULL,
    [RateKnowledgeArticles]        BIT              NULL,
    [ViewArticleRating]            BIT              NULL,
    [SolutionId]                   UNIQUEIDENTIFIER CONSTRAINT [DF_ChannelAccessProfileBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [TransactionCurrencyId]        UNIQUEIDENTIFIER NULL,
    [PhoneAccess]                  BIT              NULL,
    [ImportSequenceNumber]         INT              NULL,
    [StatusCode]                   INT              NULL,
    [ComponentState]               INT              CONSTRAINT [DF_ChannelAccessProfileBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [UTCConversionTimeZoneCode]    INT              NULL,
    [OwnerIdType]                  INT              CONSTRAINT [DF_ChannelAccessProfileBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_ChannelAccessProfile] PRIMARY KEY CLUSTERED ([ChannelAccessProfileId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80)
);


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

