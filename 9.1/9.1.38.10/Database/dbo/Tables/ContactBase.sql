CREATE TABLE [dbo].[ContactBase] (
    [EmployeeId]                      NVARCHAR (50)    NULL,
    [AnnualIncome]                    MONEY            NULL,
    [GenderCode]                      INT              NULL,
    [ContactId]                       UNIQUEIDENTIFIER NOT NULL,
    [ModifiedOn]                      DATETIME         NULL,
    [DoNotFax]                        BIT              CONSTRAINT [DF_ContactBase_DoNotFax] DEFAULT ((0)) NULL,
    [OwnerId]                         UNIQUEIDENTIFIER CONSTRAINT [DF_ContactBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [ProcessId]                       UNIQUEIDENTIFIER NULL,
    [PreferredAppointmentDayCode]     INT              NULL,
    [CreditLimit]                     MONEY            NULL,
    [ShippingMethodCode]              INT              NULL,
    [ChildrensNames]                  NVARCHAR (255)   NULL,
    [DoNotEMail]                      BIT              CONSTRAINT [DF_ContactBase_DoNotEMail] DEFAULT ((0)) NULL,
    [Business2]                       NVARCHAR (50)    NULL,
    [EducationCode]                   INT              NULL,
    [SLAId]                           UNIQUEIDENTIFIER NULL,
    [EMailAddress2]                   NVARCHAR (100)   NULL,
    [TimeSpentByMeOnEmailAndMeetings] NVARCHAR (1250)  NULL,
    [CreatedOnBehalfBy]               UNIQUEIDENTIFIER NULL,
    [DoNotBulkEMail]                  BIT              CONSTRAINT [DF_ContactBase_DoNotBulkEMail] DEFAULT ((0)) NULL,
    [SLAInvokedId]                    UNIQUEIDENTIFIER NULL,
    [EntityImageId]                   UNIQUEIDENTIFIER NULL,
    [PaymentTermsCode]                INT              NULL,
    [ImportSequenceNumber]            INT              NULL,
    [PreferredContactMethodCode]      INT              NULL,
    [StatusCode]                      INT              NULL,
    [MarketingOnly]                   BIT              CONSTRAINT [DF_ContactBase_MarketingOnly] DEFAULT ((0)) NULL,
    [TraversedPath]                   NVARCHAR (1250)  NULL,
    [Pager]                           NVARCHAR (50)    NULL,
    [JobTitle]                        NVARCHAR (100)   NULL,
    [StateCode]                       INT              NOT NULL,
    [TransactionCurrencyId]           UNIQUEIDENTIFIER NULL,
    [OwningBusinessUnit]              UNIQUEIDENTIFIER NULL,
    [MobilePhone]                     NVARCHAR (50)    NULL,
    [Salutation]                      NVARCHAR (100)   NULL,
    [CreatedByExternalParty]          UNIQUEIDENTIFIER NULL,
    [Description]                     NVARCHAR (MAX)   NULL,
    [ModifiedBy]                      UNIQUEIDENTIFIER NULL,
    [TimeZoneRuleVersionNumber]       INT              NULL,
    [GovernmentId]                    NVARCHAR (50)    NULL,
    [WebSiteUrl]                      NVARCHAR (200)   NULL,
    [ExternalUserIdentifier]          NVARCHAR (50)    NULL,
    [PreferredAppointmentTimeCode]    INT              NULL,
    [FamilyStatusCode]                INT              NULL,
    [CreatedOn]                       DATETIME         NULL,
    [DoNotPostalMail]                 BIT              CONSTRAINT [DF_ContactBase_DoNotPostalMail] DEFAULT ((0)) NULL,
    [Telephone1]                      NVARCHAR (50)    NULL,
    [Aging60]                         MONEY            NULL,
    [ModifiedByExternalParty]         UNIQUEIDENTIFIER NULL,
    [Fax]                             NVARCHAR (50)    NULL,
    [HasChildrenCode]                 INT              NULL,
    [IsAutoCreate]                    BIT              CONSTRAINT [DF_ContactBase_IsAutoCreate] DEFAULT ((0)) NULL,
    [CustomerSizeCode]                INT              NULL,
    [DoNotPhone]                      BIT              CONSTRAINT [DF_ContactBase_DoNotPhone] DEFAULT ((0)) NULL,
    [AssistantPhone]                  NVARCHAR (50)    NULL,
    [Home2]                           NVARCHAR (50)    NULL,
    [LastUsedInCampaign]              DATETIME         NULL,
    [Telephone3]                      NVARCHAR (50)    NULL,
    [Suffix]                          NVARCHAR (10)    NULL,
    [CreatedBy]                       UNIQUEIDENTIFIER NULL,
    [Department]                      NVARCHAR (100)   NULL,
    [AssistantName]                   NVARCHAR (100)   NULL,
    [BirthDate]                       DATETIME         NULL,
    [EMailAddress1]                   NVARCHAR (100)   NULL,
    [TerritoryCode]                   INT              NULL,
    [LastName]                        NVARCHAR (50)    NULL,
    [SpousesName]                     NVARCHAR (100)   NULL,
    [CreditOnHold]                    BIT              NULL,
    [DoNotSendMM]                     BIT              CONSTRAINT [DF_ContactBase_DoNotSendMM] DEFAULT ((0)) NULL,
    [Aging30]                         MONEY            NULL,
    [OverriddenCreatedOn]             DATETIME         NULL,
    [FirstName]                       NVARCHAR (50)    NULL,
    [PreferredSystemUserId]           UNIQUEIDENTIFIER NULL,
    [UTCConversionTimeZoneCode]       INT              NULL,
    [LastOnHoldTime]                  DATETIME         NULL,
    [ExchangeRate]                    DECIMAL (23, 10) NULL,
    [NumberOfChildren]                INT              NULL,
    [DoNotBulkPostalMail]             BIT              CONSTRAINT [DF_ContactBase_DoNotBulkPostalMail] DEFAULT ((0)) NULL,
    [Aging90]                         MONEY            NULL,
    [FollowEmail]                     BIT              CONSTRAINT [DF_ContactBase_FollowEmail] DEFAULT ((1)) NULL,
    [EMailAddress3]                   NVARCHAR (100)   NULL,
    [MasterId]                        UNIQUEIDENTIFIER NULL,
    [Callback]                        NVARCHAR (50)    NULL,
    [IsBackofficeCustomer]            BIT              NULL,
    [Merged]                          BIT              CONSTRAINT [DF_ContactBase_Merged] DEFAULT ((0)) NULL,
    [VersionNumber]                   ROWVERSION       NULL,
    [Anniversary]                     DATETIME         NULL,
    [FullName]                        NVARCHAR (160)   NULL,
    [FtpSiteUrl]                      NVARCHAR (200)   NULL,
    [Company]                         NVARCHAR (50)    NULL,
    [AccountRoleCode]                 INT              NULL,
    [MiddleName]                      NVARCHAR (50)    NULL,
    [SubscriptionId]                  UNIQUEIDENTIFIER NULL,
    [Telephone2]                      NVARCHAR (50)    NULL,
    [ModifiedOnBehalfBy]              UNIQUEIDENTIFIER NULL,
    [ParentCustomerId]                UNIQUEIDENTIFIER NULL,
    [IsPrivate]                       BIT              CONSTRAINT [DF_ContactBase_IsPrivate] DEFAULT ((0)) NULL,
    [NickName]                        NVARCHAR (100)   NULL,
    [CustomerTypeCode]                INT              NULL,
    [OnHoldTime]                      INT              NULL,
    [ManagerPhone]                    NVARCHAR (50)    NULL,
    [StageId]                         UNIQUEIDENTIFIER NULL,
    [ParticipatesInWorkflow]          BIT              CONSTRAINT [DF_ContactBase_ParticipatesInWorkflow] DEFAULT ((0)) NULL,
    [LeadSourceCode]                  INT              NULL,
    [ManagerName]                     NVARCHAR (100)   NULL,
    [ParentCustomerIdType]            INT              NULL,
    [ParentCustomerIdName]            NVARCHAR (4000)  NULL,
    [OwnerIdType]                     INT              CONSTRAINT [DF_ContactBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [Aging30_Base]                    MONEY            NULL,
    [CreditLimit_Base]                MONEY            NULL,
    [Aging60_Base]                    MONEY            NULL,
    [Aging90_Base]                    MONEY            NULL,
    [AnnualIncome_Base]               MONEY            NULL,
    [YomiFullName]                    NVARCHAR (450)   NULL,
    [YomiMiddleName]                  NVARCHAR (150)   NULL,
    [YomiFirstName]                   NVARCHAR (150)   NULL,
    [ParentCustomerIdYomiName]        NVARCHAR (4000)  NULL,
    [YomiLastName]                    NVARCHAR (150)   NULL,
    [OriginatingLeadId]               UNIQUEIDENTIFIER NULL,
    [DefaultPriceLevelId]             UNIQUEIDENTIFIER NULL,
    [PreferredEquipmentId]            UNIQUEIDENTIFIER NULL,
    [PreferredServiceId]              UNIQUEIDENTIFIER NULL,
    [msdyn_gdproptout]                BIT              NULL,
    [TeamsFollowed]                   INT              NULL,
    [BusinessCard]                    NVARCHAR (MAX)   NULL,
    [BusinessCardAttributes]          NVARCHAR (256)   NULL,
    [msdyn_orgchangestatus]           INT              NULL,
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
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[ContactBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[ContactBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[ContactBase]([OwnerId] ASC, [StateCode] ASC, [FullName] ASC)
    INCLUDE([ParentCustomerId], [Telephone1], [EMailAddress1], [ContactId], [ProcessId], [VersionNumber], [ParentCustomerIdYomiName], [ParentCustomerIdType], [ParentCustomerIdName]) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ContactBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[ContactBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_mobilephone]
    ON [dbo].[ContactBase]([MobilePhone] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_FullName]
    ON [dbo].[ContactBase]([FullName] ASC)
    INCLUDE([TransactionCurrencyId]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_ContactCover]
    ON [dbo].[ContactBase]([FirstName] ASC, [LastName] ASC, [FullName] ASC, [YomiFirstName] ASC, [YomiLastName] ASC, [YomiFullName] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_parentcustomeridname]
    ON [dbo].[ContactBase]([ParentCustomerIdName] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_emailaddress1]
    ON [dbo].[ContactBase]([EMailAddress1] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_contact_customer_accounts]
    ON [dbo].[ContactBase]([ParentCustomerId] ASC, [ParentCustomerIdType] ASC)
    INCLUDE([VersionNumber], [ParentCustomerIdYomiName], [ParentCustomerIdName]) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_lastname]
    ON [dbo].[ContactBase]([LastName] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_contacts]
    ON [dbo].[ContactBase]([OwningBusinessUnit] ASC) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_telephone1]
    ON [dbo].[ContactBase]([Telephone1] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_system_user_contacts]
    ON [dbo].[ContactBase]([PreferredSystemUserId] ASC) WHERE ([PreferredSystemUserId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Email2]
    ON [dbo].[ContactBase]([DoNotEMail] ASC, [DoNotBulkEMail] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_middlename]
    ON [dbo].[ContactBase]([MiddleName] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_contact_master_contact]
    ON [dbo].[ContactBase]([MasterId] ASC) WHERE ([MasterId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_createdondesc]
    ON [dbo].[ContactBase]([CreatedOn] DESC, [ContactId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_service_contacts]
    ON [dbo].[ContactBase]([PreferredServiceId] ASC) WHERE ([PreferredServiceId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_modifiedondesc]
    ON [dbo].[ContactBase]([ModifiedOn] DESC, [ContactId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_contact_originating_lead]
    ON [dbo].[ContactBase]([OriginatingLeadId] ASC) WHERE ([OriginatingLeadId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_8DF19B44A07340C39D6DEE1355D8C4BA]
    ON [dbo].[ContactBase]([ContactId] ASC)
    INCLUDE([FullName], [ParentCustomerId], [ParentCustomerIdType], [ParentCustomerIdName], [ParentCustomerIdYomiName], [Telephone1], [EMailAddress1], [StateCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_8DF19B44A07340C39D6DEE1355D8C4BA]
    ON [dbo].[ContactBase]([ContactId] ASC)
    INCLUDE([FullName], [FirstName], [LastName], [MiddleName], [EMailAddress1], [ParentCustomerIdName], [Telephone1], [MobilePhone]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_8DF19B44A07340C39D6DEE1355D8C4BA]
    ON [dbo].[ContactBase]([FullName] ASC, [ContactId] ASC)
    INCLUDE([ParentCustomerId], [ParentCustomerIdType], [ParentCustomerIdName], [ParentCustomerIdYomiName], [Telephone1], [EMailAddress1], [StateCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_price_level_contacts]
    ON [dbo].[ContactBase]([DefaultPriceLevelId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

