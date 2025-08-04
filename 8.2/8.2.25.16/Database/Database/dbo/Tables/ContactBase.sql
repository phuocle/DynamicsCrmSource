CREATE TABLE [dbo].[ContactBase] (
    [ContactId]                       UNIQUEIDENTIFIER NOT NULL,
    [DefaultPriceLevelId]             UNIQUEIDENTIFIER NULL,
    [CustomerSizeCode]                INT              NULL,
    [CustomerTypeCode]                INT              NULL,
    [PreferredContactMethodCode]      INT              NULL,
    [LeadSourceCode]                  INT              NULL,
    [OriginatingLeadId]               UNIQUEIDENTIFIER NULL,
    [OwningBusinessUnit]              UNIQUEIDENTIFIER NULL,
    [PaymentTermsCode]                INT              NULL,
    [ShippingMethodCode]              INT              NULL,
    [ParticipatesInWorkflow]          BIT              CONSTRAINT [Set_To_Zero103] DEFAULT ((0)) NULL,
    [IsBackofficeCustomer]            BIT              NULL,
    [Salutation]                      NVARCHAR (100)   NULL,
    [JobTitle]                        NVARCHAR (100)   NULL,
    [FirstName]                       NVARCHAR (50)    NULL,
    [Department]                      NVARCHAR (100)   NULL,
    [NickName]                        NVARCHAR (50)    NULL,
    [MiddleName]                      NVARCHAR (50)    NULL,
    [LastName]                        NVARCHAR (50)    NULL,
    [Suffix]                          NVARCHAR (10)    NULL,
    [YomiFirstName]                   NVARCHAR (150)   NULL,
    [FullName]                        NVARCHAR (160)   NULL,
    [YomiMiddleName]                  NVARCHAR (150)   NULL,
    [YomiLastName]                    NVARCHAR (150)   NULL,
    [Anniversary]                     DATETIME         NULL,
    [BirthDate]                       DATETIME         NULL,
    [GovernmentId]                    NVARCHAR (50)    NULL,
    [YomiFullName]                    NVARCHAR (450)   NULL,
    [Description]                     NVARCHAR (MAX)   NULL,
    [EmployeeId]                      NVARCHAR (50)    NULL,
    [GenderCode]                      INT              NULL,
    [AnnualIncome]                    MONEY            NULL,
    [HasChildrenCode]                 INT              NULL,
    [EducationCode]                   INT              NULL,
    [WebSiteUrl]                      NVARCHAR (200)   NULL,
    [FamilyStatusCode]                INT              NULL,
    [FtpSiteUrl]                      NVARCHAR (200)   NULL,
    [EMailAddress1]                   NVARCHAR (100)   NULL,
    [SpousesName]                     NVARCHAR (100)   NULL,
    [AssistantName]                   NVARCHAR (100)   NULL,
    [EMailAddress2]                   NVARCHAR (100)   NULL,
    [AssistantPhone]                  NVARCHAR (50)    NULL,
    [EMailAddress3]                   NVARCHAR (100)   NULL,
    [DoNotPhone]                      BIT              CONSTRAINT [DF_ContactBase_DoNotPhone] DEFAULT ((0)) NULL,
    [ManagerName]                     NVARCHAR (100)   NULL,
    [ManagerPhone]                    NVARCHAR (50)    NULL,
    [DoNotFax]                        BIT              CONSTRAINT [DF_ContactBase_DoNotFax] DEFAULT ((0)) NULL,
    [DoNotEMail]                      BIT              CONSTRAINT [DF_ContactBase_DoNotEMail] DEFAULT ((0)) NULL,
    [DoNotPostalMail]                 BIT              CONSTRAINT [DF_ContactBase_DoNotPostalMail] DEFAULT ((0)) NULL,
    [DoNotBulkEMail]                  BIT              CONSTRAINT [DF_ContactBase_DoNotBulkEMail] DEFAULT ((0)) NULL,
    [DoNotBulkPostalMail]             BIT              CONSTRAINT [DF_ContactBase_DoNotBulkPostalMail] DEFAULT ((0)) NULL,
    [AccountRoleCode]                 INT              NULL,
    [TerritoryCode]                   INT              NULL,
    [IsPrivate]                       BIT              CONSTRAINT [Set_To_Zero104] DEFAULT ((0)) NULL,
    [CreditLimit]                     MONEY            NULL,
    [CreatedOn]                       DATETIME         NULL,
    [CreditOnHold]                    BIT              NULL,
    [CreatedBy]                       UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                      DATETIME         NULL,
    [ModifiedBy]                      UNIQUEIDENTIFIER NULL,
    [NumberOfChildren]                INT              NULL,
    [ChildrensNames]                  NVARCHAR (255)   NULL,
    [VersionNumber]                   ROWVERSION       NULL,
    [MobilePhone]                     NVARCHAR (50)    NULL,
    [Pager]                           NVARCHAR (50)    NULL,
    [Telephone1]                      NVARCHAR (50)    NULL,
    [Telephone2]                      NVARCHAR (50)    NULL,
    [Telephone3]                      NVARCHAR (50)    NULL,
    [Fax]                             NVARCHAR (50)    NULL,
    [Aging30]                         MONEY            NULL,
    [StateCode]                       INT              NOT NULL,
    [Aging60]                         MONEY            NULL,
    [StatusCode]                      INT              NULL,
    [Aging90]                         MONEY            NULL,
    [PreferredSystemUserId]           UNIQUEIDENTIFIER NULL,
    [PreferredServiceId]              UNIQUEIDENTIFIER NULL,
    [MasterId]                        UNIQUEIDENTIFIER NULL,
    [PreferredAppointmentDayCode]     INT              NULL,
    [PreferredAppointmentTimeCode]    INT              NULL,
    [DoNotSendMM]                     BIT              CONSTRAINT [DF_ContactBase_DoNotSendMM] DEFAULT ((0)) NULL,
    [Merged]                          BIT              CONSTRAINT [DF_ContactBase_Merged] DEFAULT ((0)) NULL,
    [ExternalUserIdentifier]          NVARCHAR (50)    NULL,
    [SubscriptionId]                  UNIQUEIDENTIFIER NULL,
    [PreferredEquipmentId]            UNIQUEIDENTIFIER NULL,
    [LastUsedInCampaign]              DATETIME         NULL,
    [TransactionCurrencyId]           UNIQUEIDENTIFIER NULL,
    [OverriddenCreatedOn]             DATETIME         NULL,
    [ExchangeRate]                    DECIMAL (23, 10) NULL,
    [ImportSequenceNumber]            INT              NULL,
    [TimeZoneRuleVersionNumber]       INT              NULL,
    [UTCConversionTimeZoneCode]       INT              NULL,
    [AnnualIncome_Base]               MONEY            NULL,
    [CreditLimit_Base]                MONEY            NULL,
    [Aging60_Base]                    MONEY            NULL,
    [Aging90_Base]                    MONEY            NULL,
    [Aging30_Base]                    MONEY            NULL,
    [OwnerId]                         UNIQUEIDENTIFIER CONSTRAINT [DF_ContactBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [CreatedOnBehalfBy]               UNIQUEIDENTIFIER NULL,
    [IsAutoCreate]                    BIT              CONSTRAINT [DF_ContactBase_IsAutoCreate] DEFAULT ((0)) NULL,
    [ModifiedOnBehalfBy]              UNIQUEIDENTIFIER NULL,
    [ParentCustomerId]                UNIQUEIDENTIFIER NULL,
    [ParentCustomerIdType]            INT              NULL,
    [ParentCustomerIdName]            NVARCHAR (4000)  NULL,
    [OwnerIdType]                     INT              CONSTRAINT [DF_ContactBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [ParentCustomerIdYomiName]        NVARCHAR (4000)  NULL,
    [ProcessId]                       UNIQUEIDENTIFIER NULL,
    [EntityImageId]                   UNIQUEIDENTIFIER NULL,
    [StageId]                         UNIQUEIDENTIFIER NULL,
    [Business2]                       NVARCHAR (50)    NULL,
    [Company]                         NVARCHAR (50)    NULL,
    [TraversedPath]                   NVARCHAR (1250)  NULL,
    [Home2]                           NVARCHAR (50)    NULL,
    [Callback]                        NVARCHAR (50)    NULL,
    [CreatedByExternalParty]          UNIQUEIDENTIFIER NULL,
    [ModifiedByExternalParty]         UNIQUEIDENTIFIER NULL,
    [LastOnHoldTime]                  DATETIME         NULL,
    [SLAId]                           UNIQUEIDENTIFIER NULL,
    [TimeSpentByMeOnEmailAndMeetings] NVARCHAR (1250)  NULL,
    [OnHoldTime]                      INT              NULL,
    [FollowEmail]                     BIT              CONSTRAINT [DF_ContactBase_FollowEmail] DEFAULT ((1)) NULL,
    [SLAInvokedId]                    UNIQUEIDENTIFIER NULL,
    [MarketingOnly]                   BIT              CONSTRAINT [DF_ContactBase_MarketingOnly] DEFAULT ((0)) NULL,
    CONSTRAINT [cndx_PrimaryKey_Contact] PRIMARY KEY CLUSTERED ([ContactId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_contacts] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [contact_master_contact] FOREIGN KEY ([MasterId]) REFERENCES [dbo].[ContactBase] ([ContactId]),
    CONSTRAINT [contact_originating_lead] FOREIGN KEY ([OriginatingLeadId]) REFERENCES [dbo].[LeadBase] ([LeadId]),
    CONSTRAINT [equipment_contacts] FOREIGN KEY ([PreferredEquipmentId]) REFERENCES [dbo].[EquipmentBase] ([EquipmentId]),
    CONSTRAINT [manualsla_contact] FOREIGN KEY ([SLAId]) REFERENCES [dbo].[SLABaseIds] ([SLAId]),
    CONSTRAINT [owner_contacts] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [price_level_contacts] FOREIGN KEY ([DefaultPriceLevelId]) REFERENCES [dbo].[PriceLevelBase] ([PriceLevelId]),
    CONSTRAINT [service_contacts] FOREIGN KEY ([PreferredServiceId]) REFERENCES [dbo].[ServiceBase] ([ServiceId]),
    CONSTRAINT [system_user_contacts] FOREIGN KEY ([PreferredSystemUserId]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]),
    CONSTRAINT [transactioncurrency_contact] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[ContactBase]', @OptionName = N'text in row', @OptionValue = N'7000';


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[ContactBase]([OwnerId] ASC, [StateCode] ASC, [FullName] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ContactBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_service_contacts]
    ON [dbo].[ContactBase]([PreferredServiceId] ASC) WHERE ([PreferredServiceId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_contact_customer_accounts]
    ON [dbo].[ContactBase]([ParentCustomerId] ASC, [ParentCustomerIdType] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_middlename]
    ON [dbo].[ContactBase]([MiddleName] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_mobilephone]
    ON [dbo].[ContactBase]([MobilePhone] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_system_user_contacts]
    ON [dbo].[ContactBase]([PreferredSystemUserId] ASC) WHERE ([PreferredSystemUserId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_FullName]
    ON [dbo].[ContactBase]([FullName] ASC)
    INCLUDE([TransactionCurrencyId]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[ContactBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_lastname]
    ON [dbo].[ContactBase]([LastName] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_ContactCover]
    ON [dbo].[ContactBase]([FirstName] ASC, [LastName] ASC, [FullName] ASC, [YomiFirstName] ASC, [YomiLastName] ASC, [YomiFullName] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_contact_master_contact]
    ON [dbo].[ContactBase]([MasterId] ASC) WHERE ([MasterId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_parentcustomeridname]
    ON [dbo].[ContactBase]([ParentCustomerIdName] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Email2]
    ON [dbo].[ContactBase]([DoNotEMail] ASC, [DoNotBulkEMail] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_emailaddress1]
    ON [dbo].[ContactBase]([EMailAddress1] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_telephone1]
    ON [dbo].[ContactBase]([Telephone1] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_contacts]
    ON [dbo].[ContactBase]([OwningBusinessUnit] ASC) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_contact_originating_lead]
    ON [dbo].[ContactBase]([OriginatingLeadId] ASC) WHERE ([OriginatingLeadId] IS NOT NULL) WITH (FILLFACTOR = 80);

