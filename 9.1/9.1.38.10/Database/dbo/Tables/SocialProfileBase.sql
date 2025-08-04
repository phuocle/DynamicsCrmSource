CREATE TABLE [dbo].[SocialProfileBase] (
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ModifiedOn]                DATETIME         NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [Community]                 INT              NULL,
    [Blocked]                   BIT              NULL,
    [ProfileName]               NVARCHAR (100)   NULL,
    [ImportSequenceNumber]      INT              NULL,
    [CreatedOn]                 DATETIME         NULL,
    [InfluenceScore]            FLOAT (53)       NULL,
    [StatusCode]                INT              NULL,
    [CustomerId]                UNIQUEIDENTIFIER NULL,
    [ProfileLink]               NVARCHAR (100)   NULL,
    [SocialProfileId]           UNIQUEIDENTIFIER NOT NULL,
    [ProfileFullName]           NVARCHAR (160)   NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [StateCode]                 INT              NOT NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [OwnerId]                   UNIQUEIDENTIFIER CONSTRAINT [DF_SocialProfileBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [UniqueProfileID]           NVARCHAR (100)   NULL,
    [CustomerIdName]            NVARCHAR (4000)  NULL,
    [CustomerIdType]            INT              NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_SocialProfileBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [CustomerIdYomiName]        NVARCHAR (4000)  NULL,
    CONSTRAINT [ndx_PrimaryKey_SocialProfile] PRIMARY KEY CLUSTERED ([SocialProfileId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_socialprofiles] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_SocialProfile] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [transactioncurrency_SocialProfile] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
ALTER TABLE [dbo].[SocialProfileBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[SocialProfileBase]([OwnerId] ASC, [StateCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_SocialProfile_ProfileName]
    ON [dbo].[SocialProfileBase]([ProfileName] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[SocialProfileBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_socialprofile_customer_accounts]
    ON [dbo].[SocialProfileBase]([CustomerId] ASC, [CustomerIdType] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_socialprofiles]
    ON [dbo].[SocialProfileBase]([OwningBusinessUnit] ASC) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_SocialProfile_Search]
    ON [dbo].[SocialProfileBase]([UniqueProfileID] ASC, [Community] ASC) WHERE ([UniqueProfileID] IS NOT NULL AND [Community] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_ProfileFullName]
    ON [dbo].[SocialProfileBase]([ProfileFullName] ASC)
    INCLUDE([TransactionCurrencyId]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_1FFAF0F664DC40208F296135D61E3D81]
    ON [dbo].[SocialProfileBase]([ProfileName] ASC, [SocialProfileId] ASC)
    INCLUDE([CreatedOn], [Community], [CustomerId], [CustomerIdType], [CustomerIdName], [CustomerIdYomiName], [Blocked], [ProfileFullName], [StateCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_1FFAF0F664DC40208F296135D61E3D81]
    ON [dbo].[SocialProfileBase]([SocialProfileId] ASC)
    INCLUDE([ProfileName], [CreatedOn], [Community], [CustomerId], [CustomerIdType], [CustomerIdName], [CustomerIdYomiName], [Blocked], [ProfileFullName], [StateCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_1FFAF0F664DC40208F296135D61E3D81]
    ON [dbo].[SocialProfileBase]([SocialProfileId] ASC)
    INCLUDE([ProfileName], [ProfileFullName]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

