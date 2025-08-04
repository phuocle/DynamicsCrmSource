CREATE TABLE [dbo].[SocialProfileBase] (
    [Blocked]                   BIT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [Community]                 INT              NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OwnerId]                   UNIQUEIDENTIFIER CONSTRAINT [DF_SocialProfileBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [StateCode]                 INT              NOT NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [InfluenceScore]            FLOAT (53)       NULL,
    [CustomerId]                UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [StatusCode]                INT              NULL,
    [SocialProfileId]           UNIQUEIDENTIFIER NOT NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [CreatedOn]                 DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [ProfileFullName]           NVARCHAR (160)   NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [ProfileName]               NVARCHAR (100)   NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ProfileLink]               NVARCHAR (100)   NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [UniqueProfileID]           NVARCHAR (100)   NULL,
    [CustomerIdName]            NVARCHAR (4000)  NULL,
    [CustomerIdType]            INT              NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_SocialProfileBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [CustomerIdYomiName]        NVARCHAR (4000)  NULL,
    CONSTRAINT [ndx_PrimaryKey_SocialProfile] PRIMARY KEY CLUSTERED ([SocialProfileId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_socialprofiles] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]) NOT FOR REPLICATION,
    CONSTRAINT [owner_SocialProfile] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]) NOT FOR REPLICATION,
    CONSTRAINT [transactioncurrency_SocialProfile] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]) NOT FOR REPLICATION
);


GO
CREATE NONCLUSTERED INDEX [fndx_ProfileFullName]
    ON [dbo].[SocialProfileBase]([ProfileFullName] ASC)
    INCLUDE([TransactionCurrencyId]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_socialprofile_customer_accounts]
    ON [dbo].[SocialProfileBase]([CustomerId] ASC, [CustomerIdType] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_socialprofiles]
    ON [dbo].[SocialProfileBase]([OwningBusinessUnit] ASC) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_socialprofile_customer_contacts]
    ON [dbo].[SocialProfileBase]([CustomerId] ASC, [CustomerIdType] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_SocialProfile_ProfileName]
    ON [dbo].[SocialProfileBase]([ProfileName] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[SocialProfileBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_SocialProfile_Search]
    ON [dbo].[SocialProfileBase]([UniqueProfileID] ASC, [Community] ASC) WHERE ([Community] IS NOT NULL AND [UniqueProfileID] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[SocialProfileBase]([OwnerId] ASC, [StateCode] ASC) WITH (FILLFACTOR = 80);

