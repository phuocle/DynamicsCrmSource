CREATE TABLE [dbo].[LeadBase]
(
[LeadId] [uniqueidentifier] NOT NULL,
[LeadSourceCode] [int] NULL,
[LeadQualityCode] [int] NULL,
[PriorityCode] [int] NULL,
[IndustryCode] [int] NULL,
[PreferredContactMethodCode] [int] NULL,
[SalesStageCode] [int] NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[Subject] [nvarchar] (300) COLLATE Latin1_General_CI_AI NULL,
[ParticipatesInWorkflow] [bit] NULL CONSTRAINT [Set_To_Zero116] DEFAULT ((0)),
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[EstimatedValue] [float] NULL,
[EstimatedCloseDate] [datetime] NULL,
[CompanyName] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[FirstName] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[MiddleName] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[LastName] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[Revenue] [money] NULL,
[NumberOfEmployees] [int] NULL,
[DoNotPhone] [bit] NULL CONSTRAINT [DF_LeadBase_DoNotPhone] DEFAULT ((0)),
[SIC] [nvarchar] (20) COLLATE Latin1_General_CI_AI NULL,
[DoNotFax] [bit] NULL CONSTRAINT [DF_LeadBase_DoNotFax] DEFAULT ((0)),
[EMailAddress1] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[JobTitle] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[Salutation] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[DoNotEMail] [bit] NULL CONSTRAINT [DF_LeadBase_DoNotEMail] DEFAULT ((0)),
[EMailAddress2] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[DoNotPostalMail] [bit] NULL CONSTRAINT [DF_LeadBase_DoNotPostalMail] DEFAULT ((0)),
[EMailAddress3] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[FullName] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[YomiFirstName] [nvarchar] (150) COLLATE Latin1_General_CI_AI NULL,
[WebSiteUrl] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[Telephone1] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[Telephone2] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[Telephone3] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[CreatedOn] [datetime] NULL,
[IsPrivate] [bit] NULL CONSTRAINT [Set_To_Zero117] DEFAULT ((0)),
[Fax] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[YomiMiddleName] [nvarchar] (150) COLLATE Latin1_General_CI_AI NULL,
[YomiLastName] [nvarchar] (150) COLLATE Latin1_General_CI_AI NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[YomiFullName] [nvarchar] (450) COLLATE Latin1_General_CI_AI NULL,
[MobilePhone] [nvarchar] (20) COLLATE Latin1_General_CI_AI NULL,
[StateCode] [int] NOT NULL,
[Pager] [nvarchar] (20) COLLATE Latin1_General_CI_AI NULL,
[StatusCode] [int] NULL,
[VersionNumber] [timestamp] NULL,
[MasterId] [uniqueidentifier] NULL,
[CampaignId] [uniqueidentifier] NULL,
[DoNotSendMM] [bit] NULL CONSTRAINT [DF_LeadBase_DoNotSendMM] DEFAULT ((0)),
[Merged] [bit] NULL CONSTRAINT [DF_LeadBase_Merged] DEFAULT ((0)),
[DoNotBulkEMail] [bit] NULL CONSTRAINT [DF_LeadBase_DoNotBulkEMail] DEFAULT ((0)),
[LastUsedInCampaign] [datetime] NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[ImportSequenceNumber] [int] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[EstimatedAmount] [money] NULL,
[EstimatedAmount_Base] [money] NULL,
[Revenue_Base] [money] NULL,
[YomiCompanyName] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[IsAutoCreate] [bit] NULL CONSTRAINT [DF_LeadBase_IsAutoCreate] DEFAULT ((0)),
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[OwnerId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_LeadBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[CustomerId] [uniqueidentifier] NULL,
[CustomerIdType] [int] NULL,
[CustomerIdName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_LeadBase_OwnerIdType] DEFAULT ((8)),
[CustomerIdYomiName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[StageId] [uniqueidentifier] NULL,
[DecisionMaker] [bit] NULL,
[Need] [int] NULL,
[BudgetAmount] [money] NULL,
[QualificationComments] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[QualifyingOpportunityId] [uniqueidentifier] NULL,
[ScheduleFollowUp_Qualify] [datetime] NULL,
[ConfirmInterest] [bit] NULL,
[ParentAccountId] [uniqueidentifier] NULL,
[OriginatingCaseId] [uniqueidentifier] NULL,
[ScheduleFollowUp_Prospect] [datetime] NULL,
[EntityImageId] [uniqueidentifier] NULL,
[ParentContactId] [uniqueidentifier] NULL,
[InitialCommunication] [int] NULL,
[SalesStage] [int] NULL,
[BudgetStatus] [int] NULL,
[ProcessId] [uniqueidentifier] NULL,
[PurchaseTimeFrame] [int] NULL,
[PurchaseProcess] [int] NULL,
[RelatedObjectId] [uniqueidentifier] NULL,
[EvaluateFit] [bit] NULL,
[BudgetAmount_Base] [money] NULL,
[TraversedPath] [nvarchar] (1250) COLLATE Latin1_General_CI_AI NULL,
[FollowEmail] [bit] NULL CONSTRAINT [DF_LeadBase_FollowEmail] DEFAULT ((1)),
[SLAInvokedId] [uniqueidentifier] NULL,
[TimeSpentByMeOnEmailAndMeetings] [nvarchar] (1250) COLLATE Latin1_General_CI_AI NULL,
[SLAId] [uniqueidentifier] NULL,
[OnHoldTime] [int] NULL,
[LastOnHoldTime] [datetime] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[LeadBase] ADD CONSTRAINT [cndx_PrimaryKey_Lead] PRIMARY KEY CLUSTERED  ([LeadId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_campaign_leads] ON [dbo].[LeadBase] ([CampaignId]) WHERE ([CampaignId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_companyname] ON [dbo].[LeadBase] ([CompanyName]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_lead_views] ON [dbo].[LeadBase] ([CreatedOn] DESC, [LeadId], [StateCode]) INCLUDE ([FullName], [StatusCode], [Subject]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_lead_customer_accounts] ON [dbo].[LeadBase] ([CustomerId], [CustomerIdType]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_firstname] ON [dbo].[LeadBase] ([FirstName]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_FullName] ON [dbo].[LeadBase] ([FullName]) WHERE ([FullName] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_oob_views] ON [dbo].[LeadBase] ([FullName], [LeadId]) INCLUDE ([CompanyName], [CreatedOn], [EMailAddress1], [Fax], [StatusCode], [Subject], [Telephone1]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_lastname] ON [dbo].[LeadBase] ([LastName]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_campaign_leads] ON [dbo].[LeadBase] ([LastUsedInCampaign], [CampaignId]) INCLUDE ([CreatedOn], [LeadQualityCode], [LeadSourceCode], [OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_lead_master_lead] ON [dbo].[LeadBase] ([MasterId]) WHERE ([MasterId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_originatingcaseid] ON [dbo].[LeadBase] ([OriginatingCaseId]) WHERE ([OriginatingCaseId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[LeadBase] ([OwnerId], [StateCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_leads] ON [dbo].[LeadBase] ([OwningBusinessUnit]) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_lead_parent_account] ON [dbo].[LeadBase] ([ParentAccountId]) WHERE ([ParentAccountId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_lead_parent_contact] ON [dbo].[LeadBase] ([ParentContactId]) WHERE ([ParentContactId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[LeadBase] ([StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_oob_charts] ON [dbo].[LeadBase] ([StateCode], [StatusCode]) INCLUDE ([LeadQualityCode], [LeadSourceCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_subject] ON [dbo].[LeadBase] ([Subject]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[LeadBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[LeadBase] ADD CONSTRAINT [business_unit_leads] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[LeadBase] ADD CONSTRAINT [campaign_leads] FOREIGN KEY ([CampaignId]) REFERENCES [dbo].[CampaignBase] ([CampaignId])
GO
ALTER TABLE [dbo].[LeadBase] ADD CONSTRAINT [lead_master_lead] FOREIGN KEY ([MasterId]) REFERENCES [dbo].[LeadBase] ([LeadId])
GO
ALTER TABLE [dbo].[LeadBase] ADD CONSTRAINT [lead_parent_account] FOREIGN KEY ([ParentAccountId]) REFERENCES [dbo].[AccountBase] ([AccountId])
GO
ALTER TABLE [dbo].[LeadBase] ADD CONSTRAINT [lead_parent_contact] FOREIGN KEY ([ParentContactId]) REFERENCES [dbo].[ContactBase] ([ContactId])
GO
ALTER TABLE [dbo].[LeadBase] ADD CONSTRAINT [lead_qualifying_opportunity] FOREIGN KEY ([QualifyingOpportunityId]) REFERENCES [dbo].[OpportunityBase] ([OpportunityId])
GO
ALTER TABLE [dbo].[LeadBase] ADD CONSTRAINT [manualsla_lead] FOREIGN KEY ([SLAId]) REFERENCES [dbo].[SLABaseIds] ([SLAId])
GO
ALTER TABLE [dbo].[LeadBase] ADD CONSTRAINT [OriginatingCase_Lead] FOREIGN KEY ([OriginatingCaseId]) REFERENCES [dbo].[IncidentBase] ([IncidentId])
GO
ALTER TABLE [dbo].[LeadBase] ADD CONSTRAINT [owner_leads] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[LeadBase] ADD CONSTRAINT [transactioncurrency_lead] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
