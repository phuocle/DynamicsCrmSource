USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[AsyncOperationBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[AsyncOperationBase](
	[MessageName] [nvarchar](160) NULL,
	[Depth] [int] NOT NULL,
	[PrimaryEntityType] [int] NULL,
	[Data] [nvarchar](max) NULL,
	[RegardingObjectId] [uniqueidentifier] NULL,
	[WorkflowStageName] [nvarchar](256) NULL,
	[OperationType] [int] NULL,
	[DependencyToken] [nvarchar](256) NULL,
	[RecurrencePattern] [nvarchar](256) NULL,
	[Name] [nvarchar](256) NULL,
	[PostponeUntil] [datetime] NULL,
	[WorkflowState] [varchar](max) NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[OwningBusinessUnit] [uniqueidentifier] NOT NULL,
	[IsWaitingForEvent] [bit] NULL,
	[CreatedBy] [uniqueidentifier] NOT NULL,
	[ErrorCode] [int] NULL,
	[ModifiedBy] [uniqueidentifier] NOT NULL,
	[CorrelationId] [uniqueidentifier] NOT NULL,
	[RecurrenceStartTime] [datetime] NULL,
	[StatusCode] [int] NULL,
	[AsyncOperationId] [uniqueidentifier] NOT NULL,
	[Sequence] [bigint] IDENTITY(1,1) NOT NULL,
	[RequestId] [uniqueidentifier] NULL,
	[WorkflowIsBlocked] [bit] NULL,
	[ModifiedOn] [datetime] NULL,
	[Message] [nvarchar](max) NULL,
	[StartedOn] [datetime] NULL,
	[HostId] [nvarchar](256) NULL,
	[StateCode] [int] NOT NULL,
	[WorkflowActivationId] [uniqueidentifier] NULL,
	[CompletedOn] [datetime] NULL,
	[CorrelationUpdatedTime] [datetime] NOT NULL CONSTRAINT [DF_AsyncOperationBase_CorrelationUpdatedTime]  DEFAULT (getutcdate()),
	[UTCConversionTimeZoneCode] [int] NULL,
	[RetryCount] [int] NULL,
	[CreatedOn] [datetime] NULL,
	[RegardingObjectIdName] [nvarchar](4000) NULL,
	[RegardingObjectTypeCode] [int] NULL,
	[RegardingObjectIdYomiName] [nvarchar](4000) NULL,
	[FriendlyMessage] [nvarchar](max) NULL,
	[ExecutionTimeSpan] [float] NOT NULL CONSTRAINT [DF_AsyncOperationBase_ExecutionTimeSpan]  DEFAULT ((0)),
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[OwningExtensionId] [uniqueidentifier] NULL,
	[OwnerId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_AsyncOperationBase_OwnerId]  DEFAULT ('00000000-0000-0000-0000-000000000000'),
	[OwningExtensionIdName] [nvarchar](4000) NULL,
	[OwningExtensionTypeCode] [int] NULL,
	[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_AsyncOperationBase_OwnerIdType]  DEFAULT ((8)),
	[Subtype] [int] NULL CONSTRAINT [DF_AsyncOperationBase_Subtype]  DEFAULT ((1)),
	[ParentPluginExecutionId] [uniqueidentifier] NULL,
 CONSTRAINT [cndx_PrimaryKey_AsyncOperation] PRIMARY KEY CLUSTERED 
(
	[AsyncOperationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING ON
GO
SET IDENTITY_INSERT [dbo].[AsyncOperationBase] ON 

INSERT [dbo].[AsyncOperationBase] ([MessageName], [Depth], [PrimaryEntityType], [Data], [RegardingObjectId], [WorkflowStageName], [OperationType], [DependencyToken], [RecurrencePattern], [Name], [PostponeUntil], [WorkflowState], [TimeZoneRuleVersionNumber], [OwningBusinessUnit], [IsWaitingForEvent], [CreatedBy], [ErrorCode], [ModifiedBy], [CorrelationId], [RecurrenceStartTime], [StatusCode], [AsyncOperationId], [Sequence], [RequestId], [WorkflowIsBlocked], [ModifiedOn], [Message], [StartedOn], [HostId], [StateCode], [WorkflowActivationId], [CompletedOn], [CorrelationUpdatedTime], [UTCConversionTimeZoneCode], [RetryCount], [CreatedOn], [RegardingObjectIdName], [RegardingObjectTypeCode], [RegardingObjectIdYomiName], [FriendlyMessage], [ExecutionTimeSpan], [ModifiedOnBehalfBy], [CreatedOnBehalfBy], [OwningExtensionId], [OwnerId], [OwningExtensionIdName], [OwningExtensionTypeCode], [OwnerIdType], [Subtype], [ParentPluginExecutionId]) VALUES (NULL, 0, NULL, NULL, N'e68d2246-d8b0-4e85-967d-07d82a3d61eb', NULL, 7, NULL, NULL, N'Accounts with the same website', NULL, NULL, 0, N'c6acfcbe-f31d-e711-80d3-00155d00662d', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'5a7265e4-826e-45ae-8a88-ed020e3812b3', NULL, 30, N'b3e65c6c-f51d-e711-80d3-00155d00662d', 1, NULL, NULL, CAST(N'2017-04-10 14:32:18.000' AS DateTime), NULL, CAST(N'2017-04-10 14:32:15.000' AS DateTime), N'CRM.MSCRMAsyncService.166c4197-86a3-48c5-94aa-2efa8734a50c', 3, NULL, CAST(N'2017-04-10 14:32:18.000' AS DateTime), CAST(N'2017-04-10 13:56:02.000' AS DateTime), NULL, 0, CAST(N'2017-04-10 13:56:03.000' AS DateTime), N'Accounts with the same website', 4414, NULL, NULL, 1.531, NULL, NULL, NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, NULL, 8, 1, NULL)
INSERT [dbo].[AsyncOperationBase] ([MessageName], [Depth], [PrimaryEntityType], [Data], [RegardingObjectId], [WorkflowStageName], [OperationType], [DependencyToken], [RecurrencePattern], [Name], [PostponeUntil], [WorkflowState], [TimeZoneRuleVersionNumber], [OwningBusinessUnit], [IsWaitingForEvent], [CreatedBy], [ErrorCode], [ModifiedBy], [CorrelationId], [RecurrenceStartTime], [StatusCode], [AsyncOperationId], [Sequence], [RequestId], [WorkflowIsBlocked], [ModifiedOn], [Message], [StartedOn], [HostId], [StateCode], [WorkflowActivationId], [CompletedOn], [CorrelationUpdatedTime], [UTCConversionTimeZoneCode], [RetryCount], [CreatedOn], [RegardingObjectIdName], [RegardingObjectTypeCode], [RegardingObjectIdYomiName], [FriendlyMessage], [ExecutionTimeSpan], [ModifiedOnBehalfBy], [CreatedOnBehalfBy], [OwningExtensionId], [OwnerId], [OwningExtensionIdName], [OwningExtensionTypeCode], [OwnerIdType], [Subtype], [ParentPluginExecutionId]) VALUES (NULL, 0, NULL, NULL, N'0c16fb72-201d-4581-9ed9-1d4ac969af81', NULL, 7, NULL, NULL, N'Contacts with the same first name and last name', NULL, NULL, 0, N'c6acfcbe-f31d-e711-80d3-00155d00662d', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'5a7265e4-826e-45ae-8a88-ed020e3812b3', NULL, 30, N'b4e65c6c-f51d-e711-80d3-00155d00662d', 2, NULL, NULL, CAST(N'2017-04-10 14:32:18.000' AS DateTime), NULL, CAST(N'2017-04-10 14:32:15.000' AS DateTime), N'CRM.MSCRMAsyncService.166c4197-86a3-48c5-94aa-2efa8734a50c', 3, NULL, CAST(N'2017-04-10 14:32:18.000' AS DateTime), CAST(N'2017-04-10 13:56:02.000' AS DateTime), NULL, 0, CAST(N'2017-04-10 13:56:03.000' AS DateTime), N'Contacts with the same first name and last name', 4414, NULL, NULL, 1.625, NULL, NULL, NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, NULL, 8, 1, NULL)
INSERT [dbo].[AsyncOperationBase] ([MessageName], [Depth], [PrimaryEntityType], [Data], [RegardingObjectId], [WorkflowStageName], [OperationType], [DependencyToken], [RecurrencePattern], [Name], [PostponeUntil], [WorkflowState], [TimeZoneRuleVersionNumber], [OwningBusinessUnit], [IsWaitingForEvent], [CreatedBy], [ErrorCode], [ModifiedBy], [CorrelationId], [RecurrenceStartTime], [StatusCode], [AsyncOperationId], [Sequence], [RequestId], [WorkflowIsBlocked], [ModifiedOn], [Message], [StartedOn], [HostId], [StateCode], [WorkflowActivationId], [CompletedOn], [CorrelationUpdatedTime], [UTCConversionTimeZoneCode], [RetryCount], [CreatedOn], [RegardingObjectIdName], [RegardingObjectTypeCode], [RegardingObjectIdYomiName], [FriendlyMessage], [ExecutionTimeSpan], [ModifiedOnBehalfBy], [CreatedOnBehalfBy], [OwningExtensionId], [OwnerId], [OwningExtensionIdName], [OwningExtensionTypeCode], [OwnerIdType], [Subtype], [ParentPluginExecutionId]) VALUES (NULL, 0, NULL, NULL, N'7fc828b5-5703-4320-95ae-38b835f9091b', NULL, 7, NULL, NULL, N'Contacts with the same business phone number', NULL, NULL, 0, N'c6acfcbe-f31d-e711-80d3-00155d00662d', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'5a7265e4-826e-45ae-8a88-ed020e3812b3', NULL, 30, N'b5e65c6c-f51d-e711-80d3-00155d00662d', 3, NULL, NULL, CAST(N'2017-04-10 14:32:19.000' AS DateTime), NULL, CAST(N'2017-04-10 14:32:15.000' AS DateTime), N'CRM.MSCRMAsyncService.166c4197-86a3-48c5-94aa-2efa8734a50c', 3, NULL, CAST(N'2017-04-10 14:32:19.000' AS DateTime), CAST(N'2017-04-10 13:56:02.000' AS DateTime), NULL, 0, CAST(N'2017-04-10 13:56:03.000' AS DateTime), N'Contacts with the same business phone number', 4414, NULL, NULL, 2.203, NULL, NULL, NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, NULL, 8, 1, NULL)
INSERT [dbo].[AsyncOperationBase] ([MessageName], [Depth], [PrimaryEntityType], [Data], [RegardingObjectId], [WorkflowStageName], [OperationType], [DependencyToken], [RecurrencePattern], [Name], [PostponeUntil], [WorkflowState], [TimeZoneRuleVersionNumber], [OwningBusinessUnit], [IsWaitingForEvent], [CreatedBy], [ErrorCode], [ModifiedBy], [CorrelationId], [RecurrenceStartTime], [StatusCode], [AsyncOperationId], [Sequence], [RequestId], [WorkflowIsBlocked], [ModifiedOn], [Message], [StartedOn], [HostId], [StateCode], [WorkflowActivationId], [CompletedOn], [CorrelationUpdatedTime], [UTCConversionTimeZoneCode], [RetryCount], [CreatedOn], [RegardingObjectIdName], [RegardingObjectTypeCode], [RegardingObjectIdYomiName], [FriendlyMessage], [ExecutionTimeSpan], [ModifiedOnBehalfBy], [CreatedOnBehalfBy], [OwningExtensionId], [OwnerId], [OwningExtensionIdName], [OwningExtensionTypeCode], [OwnerIdType], [Subtype], [ParentPluginExecutionId]) VALUES (NULL, 0, NULL, NULL, N'0c56882e-35a2-4898-b094-8575f1368160', NULL, 7, NULL, NULL, N'Contacts with the same e-mail address', NULL, NULL, 0, N'c6acfcbe-f31d-e711-80d3-00155d00662d', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'5a7265e4-826e-45ae-8a88-ed020e3812b3', NULL, 30, N'b6e65c6c-f51d-e711-80d3-00155d00662d', 4, NULL, NULL, CAST(N'2017-04-10 14:32:19.000' AS DateTime), NULL, CAST(N'2017-04-10 14:32:15.000' AS DateTime), N'CRM.MSCRMAsyncService.166c4197-86a3-48c5-94aa-2efa8734a50c', 3, NULL, CAST(N'2017-04-10 14:32:19.000' AS DateTime), CAST(N'2017-04-10 13:56:02.000' AS DateTime), NULL, 0, CAST(N'2017-04-10 13:56:03.000' AS DateTime), N'Contacts with the same e-mail address', 4414, NULL, NULL, 2.203, NULL, NULL, NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, NULL, 8, 1, NULL)
INSERT [dbo].[AsyncOperationBase] ([MessageName], [Depth], [PrimaryEntityType], [Data], [RegardingObjectId], [WorkflowStageName], [OperationType], [DependencyToken], [RecurrencePattern], [Name], [PostponeUntil], [WorkflowState], [TimeZoneRuleVersionNumber], [OwningBusinessUnit], [IsWaitingForEvent], [CreatedBy], [ErrorCode], [ModifiedBy], [CorrelationId], [RecurrenceStartTime], [StatusCode], [AsyncOperationId], [Sequence], [RequestId], [WorkflowIsBlocked], [ModifiedOn], [Message], [StartedOn], [HostId], [StateCode], [WorkflowActivationId], [CompletedOn], [CorrelationUpdatedTime], [UTCConversionTimeZoneCode], [RetryCount], [CreatedOn], [RegardingObjectIdName], [RegardingObjectTypeCode], [RegardingObjectIdYomiName], [FriendlyMessage], [ExecutionTimeSpan], [ModifiedOnBehalfBy], [CreatedOnBehalfBy], [OwningExtensionId], [OwnerId], [OwningExtensionIdName], [OwningExtensionTypeCode], [OwnerIdType], [Subtype], [ParentPluginExecutionId]) VALUES (NULL, 0, NULL, NULL, N'e4e8866a-97c2-4938-8b71-8743731e59c8', NULL, 7, NULL, NULL, N'Accounts with the same phone number', NULL, NULL, 0, N'c6acfcbe-f31d-e711-80d3-00155d00662d', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'5a7265e4-826e-45ae-8a88-ed020e3812b3', NULL, 30, N'b7e65c6c-f51d-e711-80d3-00155d00662d', 5, NULL, NULL, CAST(N'2017-04-10 14:32:19.000' AS DateTime), NULL, CAST(N'2017-04-10 14:32:15.000' AS DateTime), N'CRM.MSCRMAsyncService.166c4197-86a3-48c5-94aa-2efa8734a50c', 3, NULL, CAST(N'2017-04-10 14:32:19.000' AS DateTime), CAST(N'2017-04-10 13:56:02.000' AS DateTime), NULL, 0, CAST(N'2017-04-10 13:56:03.000' AS DateTime), N'Accounts with the same phone number', 4414, NULL, NULL, 2.203, NULL, NULL, NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, NULL, 8, 1, NULL)
INSERT [dbo].[AsyncOperationBase] ([MessageName], [Depth], [PrimaryEntityType], [Data], [RegardingObjectId], [WorkflowStageName], [OperationType], [DependencyToken], [RecurrencePattern], [Name], [PostponeUntil], [WorkflowState], [TimeZoneRuleVersionNumber], [OwningBusinessUnit], [IsWaitingForEvent], [CreatedBy], [ErrorCode], [ModifiedBy], [CorrelationId], [RecurrenceStartTime], [StatusCode], [AsyncOperationId], [Sequence], [RequestId], [WorkflowIsBlocked], [ModifiedOn], [Message], [StartedOn], [HostId], [StateCode], [WorkflowActivationId], [CompletedOn], [CorrelationUpdatedTime], [UTCConversionTimeZoneCode], [RetryCount], [CreatedOn], [RegardingObjectIdName], [RegardingObjectTypeCode], [RegardingObjectIdYomiName], [FriendlyMessage], [ExecutionTimeSpan], [ModifiedOnBehalfBy], [CreatedOnBehalfBy], [OwningExtensionId], [OwnerId], [OwningExtensionIdName], [OwningExtensionTypeCode], [OwnerIdType], [Subtype], [ParentPluginExecutionId]) VALUES (NULL, 0, NULL, NULL, N'9c552bd0-52f0-41ea-a9fd-a3df4a399f4a', NULL, 7, NULL, NULL, N'Leads with the same e-mail address', NULL, NULL, 0, N'c6acfcbe-f31d-e711-80d3-00155d00662d', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'5a7265e4-826e-45ae-8a88-ed020e3812b3', NULL, 30, N'b8e65c6c-f51d-e711-80d3-00155d00662d', 6, NULL, NULL, CAST(N'2017-04-10 14:32:18.000' AS DateTime), NULL, CAST(N'2017-04-10 14:32:15.000' AS DateTime), N'CRM.MSCRMAsyncService.166c4197-86a3-48c5-94aa-2efa8734a50c', 3, NULL, CAST(N'2017-04-10 14:32:18.000' AS DateTime), CAST(N'2017-04-10 13:56:02.000' AS DateTime), NULL, 0, CAST(N'2017-04-10 13:56:03.000' AS DateTime), N'Leads with the same e-mail address', 4414, NULL, NULL, 1.718, NULL, NULL, NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, NULL, 8, 1, NULL)
INSERT [dbo].[AsyncOperationBase] ([MessageName], [Depth], [PrimaryEntityType], [Data], [RegardingObjectId], [WorkflowStageName], [OperationType], [DependencyToken], [RecurrencePattern], [Name], [PostponeUntil], [WorkflowState], [TimeZoneRuleVersionNumber], [OwningBusinessUnit], [IsWaitingForEvent], [CreatedBy], [ErrorCode], [ModifiedBy], [CorrelationId], [RecurrenceStartTime], [StatusCode], [AsyncOperationId], [Sequence], [RequestId], [WorkflowIsBlocked], [ModifiedOn], [Message], [StartedOn], [HostId], [StateCode], [WorkflowActivationId], [CompletedOn], [CorrelationUpdatedTime], [UTCConversionTimeZoneCode], [RetryCount], [CreatedOn], [RegardingObjectIdName], [RegardingObjectTypeCode], [RegardingObjectIdYomiName], [FriendlyMessage], [ExecutionTimeSpan], [ModifiedOnBehalfBy], [CreatedOnBehalfBy], [OwningExtensionId], [OwnerId], [OwningExtensionIdName], [OwningExtensionTypeCode], [OwnerIdType], [Subtype], [ParentPluginExecutionId]) VALUES (NULL, 0, NULL, NULL, N'eb211e6a-e9b9-46f5-8db0-b1932db0fd9a', NULL, 7, NULL, NULL, N'Accounts with the same e-mail address', NULL, NULL, 0, N'c6acfcbe-f31d-e711-80d3-00155d00662d', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'5a7265e4-826e-45ae-8a88-ed020e3812b3', NULL, 30, N'b9e65c6c-f51d-e711-80d3-00155d00662d', 7, NULL, NULL, CAST(N'2017-04-10 14:32:18.000' AS DateTime), NULL, CAST(N'2017-04-10 14:32:15.000' AS DateTime), N'CRM.MSCRMAsyncService.166c4197-86a3-48c5-94aa-2efa8734a50c', 3, NULL, CAST(N'2017-04-10 14:32:18.000' AS DateTime), CAST(N'2017-04-10 13:56:02.000' AS DateTime), NULL, 0, CAST(N'2017-04-10 13:56:03.000' AS DateTime), N'Accounts with the same e-mail address', 4414, NULL, NULL, 0.157, NULL, NULL, NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, NULL, 8, 1, NULL)
INSERT [dbo].[AsyncOperationBase] ([MessageName], [Depth], [PrimaryEntityType], [Data], [RegardingObjectId], [WorkflowStageName], [OperationType], [DependencyToken], [RecurrencePattern], [Name], [PostponeUntil], [WorkflowState], [TimeZoneRuleVersionNumber], [OwningBusinessUnit], [IsWaitingForEvent], [CreatedBy], [ErrorCode], [ModifiedBy], [CorrelationId], [RecurrenceStartTime], [StatusCode], [AsyncOperationId], [Sequence], [RequestId], [WorkflowIsBlocked], [ModifiedOn], [Message], [StartedOn], [HostId], [StateCode], [WorkflowActivationId], [CompletedOn], [CorrelationUpdatedTime], [UTCConversionTimeZoneCode], [RetryCount], [CreatedOn], [RegardingObjectIdName], [RegardingObjectTypeCode], [RegardingObjectIdYomiName], [FriendlyMessage], [ExecutionTimeSpan], [ModifiedOnBehalfBy], [CreatedOnBehalfBy], [OwningExtensionId], [OwnerId], [OwningExtensionIdName], [OwningExtensionTypeCode], [OwnerIdType], [Subtype], [ParentPluginExecutionId]) VALUES (NULL, 0, NULL, NULL, N'd8d2e6cc-3a9b-48f8-a0c6-b9a1f10b9fb4', NULL, 7, NULL, NULL, N'Accounts with the same Account Name', NULL, NULL, 0, N'c6acfcbe-f31d-e711-80d3-00155d00662d', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'5a7265e4-826e-45ae-8a88-ed020e3812b3', NULL, 30, N'bae65c6c-f51d-e711-80d3-00155d00662d', 8, NULL, NULL, CAST(N'2017-04-10 14:32:18.000' AS DateTime), NULL, CAST(N'2017-04-10 14:32:15.000' AS DateTime), N'CRM.MSCRMAsyncService.166c4197-86a3-48c5-94aa-2efa8734a50c', 3, NULL, CAST(N'2017-04-10 14:32:18.000' AS DateTime), CAST(N'2017-04-10 13:56:02.000' AS DateTime), NULL, 0, CAST(N'2017-04-10 13:56:03.000' AS DateTime), N'Accounts with the same Account Name', 4414, NULL, NULL, 0.078, NULL, NULL, NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, NULL, 8, 1, NULL)
INSERT [dbo].[AsyncOperationBase] ([MessageName], [Depth], [PrimaryEntityType], [Data], [RegardingObjectId], [WorkflowStageName], [OperationType], [DependencyToken], [RecurrencePattern], [Name], [PostponeUntil], [WorkflowState], [TimeZoneRuleVersionNumber], [OwningBusinessUnit], [IsWaitingForEvent], [CreatedBy], [ErrorCode], [ModifiedBy], [CorrelationId], [RecurrenceStartTime], [StatusCode], [AsyncOperationId], [Sequence], [RequestId], [WorkflowIsBlocked], [ModifiedOn], [Message], [StartedOn], [HostId], [StateCode], [WorkflowActivationId], [CompletedOn], [CorrelationUpdatedTime], [UTCConversionTimeZoneCode], [RetryCount], [CreatedOn], [RegardingObjectIdName], [RegardingObjectTypeCode], [RegardingObjectIdYomiName], [FriendlyMessage], [ExecutionTimeSpan], [ModifiedOnBehalfBy], [CreatedOnBehalfBy], [OwningExtensionId], [OwnerId], [OwningExtensionIdName], [OwningExtensionTypeCode], [OwnerIdType], [Subtype], [ParentPluginExecutionId]) VALUES (NULL, 0, NULL, NULL, N'b99f9d91-6bcd-4ae7-8585-d1ae2046622d', NULL, 7, NULL, NULL, N'Social profiles with same full name and social channel', NULL, NULL, 0, N'c6acfcbe-f31d-e711-80d3-00155d00662d', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'5a7265e4-826e-45ae-8a88-ed020e3812b3', NULL, 30, N'bbe65c6c-f51d-e711-80d3-00155d00662d', 9, NULL, NULL, CAST(N'2017-04-10 14:32:18.000' AS DateTime), NULL, CAST(N'2017-04-10 14:32:15.000' AS DateTime), N'CRM.MSCRMAsyncService.166c4197-86a3-48c5-94aa-2efa8734a50c', 3, NULL, CAST(N'2017-04-10 14:32:18.000' AS DateTime), CAST(N'2017-04-10 13:56:02.000' AS DateTime), NULL, 0, CAST(N'2017-04-10 13:56:04.000' AS DateTime), N'Social profiles with same full name and social channel', 4414, NULL, NULL, 0.23399999999999999, NULL, NULL, NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, NULL, 8, 1, NULL)
INSERT [dbo].[AsyncOperationBase] ([MessageName], [Depth], [PrimaryEntityType], [Data], [RegardingObjectId], [WorkflowStageName], [OperationType], [DependencyToken], [RecurrencePattern], [Name], [PostponeUntil], [WorkflowState], [TimeZoneRuleVersionNumber], [OwningBusinessUnit], [IsWaitingForEvent], [CreatedBy], [ErrorCode], [ModifiedBy], [CorrelationId], [RecurrenceStartTime], [StatusCode], [AsyncOperationId], [Sequence], [RequestId], [WorkflowIsBlocked], [ModifiedOn], [Message], [StartedOn], [HostId], [StateCode], [WorkflowActivationId], [CompletedOn], [CorrelationUpdatedTime], [UTCConversionTimeZoneCode], [RetryCount], [CreatedOn], [RegardingObjectIdName], [RegardingObjectTypeCode], [RegardingObjectIdYomiName], [FriendlyMessage], [ExecutionTimeSpan], [ModifiedOnBehalfBy], [CreatedOnBehalfBy], [OwningExtensionId], [OwnerId], [OwningExtensionIdName], [OwningExtensionTypeCode], [OwnerIdType], [Subtype], [ParentPluginExecutionId]) VALUES (NULL, 1, NULL, N'7VVNT8JQEJyzif+h4eCtfJl40FoSxZua+HHwWvsBDaXF9oH6753dtgJSUBMTPZiXUrrzdnZ23lIcDPCCKRJYWCBEjgIxMqQ4RQs9tNHl3SKSwmc8IJpipOgcBhFs7jri0wAu9rEHB2dEEkwwZFbCy/AawuPdI1NZLWWdY34vyChcY6IGM8Y6XM+62rwO+ZlR1YjRPrV0Wa2DB1zhEndUNCb3lLytBub4R5ht7bhQ9eJBSM6yU4vLwQ27Fd9emSW9LrESl8y8cs3FARUanNA32StVLPVUdsXKb1R1xGoJo6F2llKpzeeM+KQBF50zruXZyN4Rn33d12Ldkdat68t5SkVD3cLvkSPUTE81lDMg2Tn1beZ76qr09ahzEH6BJVYmiy5/ZIuIJcqSExdNs3eetLG+r8yBdlBWsRo0CUN5cqZyKlPmXCNy+rIjxJNiC/VqXuX1t2jtrKndRFedbcqtz73GHEbXZ+R/fv7S/IR8l4gz8gsPPpmkjOyBRg1PRmrbzLY175Vub05Z79enTJDt7zBHI+LUhU6JaLpmn1I7quajdtBdmSph/U7mst49I7fM9ImJ72Wnhbq0uu+ca/c+0bDrv8jFGw==', NULL, NULL, 13, N'MSCRM_BULKDELETE_94f9b696-f31d-e711-80d3-00155d00662d', N'FREQ=DAILY', N'Delete expired action cards for Relationship Assistant', CAST(N'2017-04-11 14:29:50.000' AS DateTime), NULL, 0, N'c6acfcbe-f31d-e711-80d3-00155d00662d', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'aec0f829-9423-4d36-a242-7d81e78b4434', CAST(N'2017-04-10 14:29:50.000' AS DateTime), 10, N'e7467b27-fa1d-e711-80d3-00155d00662d', 27, NULL, NULL, CAST(N'2017-04-10 14:32:20.000' AS DateTime), NULL, CAST(N'2017-04-10 14:32:20.000' AS DateTime), N'CRM.MSCRMAsyncService.166c4197-86a3-48c5-94aa-2efa8734a50c', 1, NULL, NULL, CAST(N'2017-04-10 14:29:50.000' AS DateTime), NULL, 0, CAST(N'2017-04-10 14:29:50.000' AS DateTime), NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, NULL, 8, 1, NULL)
INSERT [dbo].[AsyncOperationBase] ([MessageName], [Depth], [PrimaryEntityType], [Data], [RegardingObjectId], [WorkflowStageName], [OperationType], [DependencyToken], [RecurrencePattern], [Name], [PostponeUntil], [WorkflowState], [TimeZoneRuleVersionNumber], [OwningBusinessUnit], [IsWaitingForEvent], [CreatedBy], [ErrorCode], [ModifiedBy], [CorrelationId], [RecurrenceStartTime], [StatusCode], [AsyncOperationId], [Sequence], [RequestId], [WorkflowIsBlocked], [ModifiedOn], [Message], [StartedOn], [HostId], [StateCode], [WorkflowActivationId], [CompletedOn], [CorrelationUpdatedTime], [UTCConversionTimeZoneCode], [RetryCount], [CreatedOn], [RegardingObjectIdName], [RegardingObjectTypeCode], [RegardingObjectIdYomiName], [FriendlyMessage], [ExecutionTimeSpan], [ModifiedOnBehalfBy], [CreatedOnBehalfBy], [OwningExtensionId], [OwnerId], [OwningExtensionIdName], [OwningExtensionTypeCode], [OwnerIdType], [Subtype], [ParentPluginExecutionId]) VALUES (NULL, 0, NULL, NULL, NULL, NULL, 57, NULL, NULL, N'Calculate rollup fields for the knowledgearticle entity', NULL, NULL, NULL, N'c6acfcbe-f31d-e711-80d3-00155d00662d', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'fa71bc6c-33dc-4828-86b4-ec8f1c36539c', NULL, 30, N'4f519cac-33d7-49aa-acb2-046b215c0ece', 44, NULL, NULL, CAST(N'2017-04-10 14:58:59.000' AS DateTime), NULL, CAST(N'2017-04-10 14:58:59.000' AS DateTime), N'CRM.MSCRMAsyncService.166c4197-86a3-48c5-94aa-2efa8734a50c', 3, NULL, CAST(N'2017-04-10 14:58:59.000' AS DateTime), CAST(N'2017-04-10 13:57:48.000' AS DateTime), NULL, 0, CAST(N'2017-04-10 14:58:44.000' AS DateTime), NULL, NULL, NULL, NULL, 0.016, NULL, NULL, NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, NULL, 8, 1, NULL)
INSERT [dbo].[AsyncOperationBase] ([MessageName], [Depth], [PrimaryEntityType], [Data], [RegardingObjectId], [WorkflowStageName], [OperationType], [DependencyToken], [RecurrencePattern], [Name], [PostponeUntil], [WorkflowState], [TimeZoneRuleVersionNumber], [OwningBusinessUnit], [IsWaitingForEvent], [CreatedBy], [ErrorCode], [ModifiedBy], [CorrelationId], [RecurrenceStartTime], [StatusCode], [AsyncOperationId], [Sequence], [RequestId], [WorkflowIsBlocked], [ModifiedOn], [Message], [StartedOn], [HostId], [StateCode], [WorkflowActivationId], [CompletedOn], [CorrelationUpdatedTime], [UTCConversionTimeZoneCode], [RetryCount], [CreatedOn], [RegardingObjectIdName], [RegardingObjectTypeCode], [RegardingObjectIdYomiName], [FriendlyMessage], [ExecutionTimeSpan], [ModifiedOnBehalfBy], [CreatedOnBehalfBy], [OwningExtensionId], [OwnerId], [OwningExtensionIdName], [OwningExtensionTypeCode], [OwnerIdType], [Subtype], [ParentPluginExecutionId]) VALUES (NULL, 0, NULL, N'HYqJCcAwEMO0UCFpHm6dttfsP0JEMDbCdqMwCTqDn8UldZvn0G03pCDdQqrqo5mvn6XTT7IB', NULL, NULL, 58, N'account', N'FREQ=YEARLY;INTERVAL=10', N'Mass calculate the account.openrevenue rollup field', CAST(N'2027-04-10 14:57:48.000' AS DateTime), NULL, 0, N'c6acfcbe-f31d-e711-80d3-00155d00662d', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'48bb4226-99fe-455a-bc64-052f4fd879c8', CAST(N'2017-04-10 14:57:48.000' AS DateTime), 10, N'e8989373-f193-4c80-ac08-051879e24ada', 23, NULL, NULL, CAST(N'2017-04-10 14:58:44.000' AS DateTime), NULL, CAST(N'2017-04-10 14:58:44.000' AS DateTime), N'CRM.MSCRMAsyncService.166c4197-86a3-48c5-94aa-2efa8734a50c', 1, NULL, NULL, CAST(N'2017-04-10 13:57:48.000' AS DateTime), NULL, 0, CAST(N'2017-04-10 13:57:48.000' AS DateTime), NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, NULL, 8, 1, NULL)
INSERT [dbo].[AsyncOperationBase] ([MessageName], [Depth], [PrimaryEntityType], [Data], [RegardingObjectId], [WorkflowStageName], [OperationType], [DependencyToken], [RecurrencePattern], [Name], [PostponeUntil], [WorkflowState], [TimeZoneRuleVersionNumber], [OwningBusinessUnit], [IsWaitingForEvent], [CreatedBy], [ErrorCode], [ModifiedBy], [CorrelationId], [RecurrenceStartTime], [StatusCode], [AsyncOperationId], [Sequence], [RequestId], [WorkflowIsBlocked], [ModifiedOn], [Message], [StartedOn], [HostId], [StateCode], [WorkflowActivationId], [CompletedOn], [CorrelationUpdatedTime], [UTCConversionTimeZoneCode], [RetryCount], [CreatedOn], [RegardingObjectIdName], [RegardingObjectTypeCode], [RegardingObjectIdYomiName], [FriendlyMessage], [ExecutionTimeSpan], [ModifiedOnBehalfBy], [CreatedOnBehalfBy], [OwningExtensionId], [OwnerId], [OwningExtensionIdName], [OwningExtensionTypeCode], [OwnerIdType], [Subtype], [ParentPluginExecutionId]) VALUES (NULL, 0, NULL, NULL, NULL, NULL, 65, NULL, N'FREQ=DAILY', N'Update Knowledge Article States job', CAST(N'2017-04-11 21:32:21.000' AS DateTime), NULL, 0, N'c6acfcbe-f31d-e711-80d3-00155d00662d', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'c3845b93-7b31-46d8-9832-b847633c1614', CAST(N'2017-04-09 17:00:00.000' AS DateTime), 10, N'ee2dcf9b-9f60-495a-8cda-0bc9ed69f67a', 14, NULL, NULL, CAST(N'2017-04-10 14:32:21.000' AS DateTime), NULL, CAST(N'2017-04-10 14:32:15.000' AS DateTime), N'CRM.MSCRMAsyncService.166c4197-86a3-48c5-94aa-2efa8734a50c', 1, NULL, NULL, CAST(N'2017-04-10 13:56:44.000' AS DateTime), NULL, 0, CAST(N'2017-04-10 13:56:44.000' AS DateTime), NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, NULL, 8, 1, NULL)
INSERT [dbo].[AsyncOperationBase] ([MessageName], [Depth], [PrimaryEntityType], [Data], [RegardingObjectId], [WorkflowStageName], [OperationType], [DependencyToken], [RecurrencePattern], [Name], [PostponeUntil], [WorkflowState], [TimeZoneRuleVersionNumber], [OwningBusinessUnit], [IsWaitingForEvent], [CreatedBy], [ErrorCode], [ModifiedBy], [CorrelationId], [RecurrenceStartTime], [StatusCode], [AsyncOperationId], [Sequence], [RequestId], [WorkflowIsBlocked], [ModifiedOn], [Message], [StartedOn], [HostId], [StateCode], [WorkflowActivationId], [CompletedOn], [CorrelationUpdatedTime], [UTCConversionTimeZoneCode], [RetryCount], [CreatedOn], [RegardingObjectIdName], [RegardingObjectTypeCode], [RegardingObjectIdYomiName], [FriendlyMessage], [ExecutionTimeSpan], [ModifiedOnBehalfBy], [CreatedOnBehalfBy], [OwningExtensionId], [OwnerId], [OwningExtensionIdName], [OwningExtensionTypeCode], [OwnerIdType], [Subtype], [ParentPluginExecutionId]) VALUES (NULL, 0, NULL, NULL, NULL, NULL, 58, N'account', NULL, N'Mass calculate the account.opendeals rollup field', NULL, NULL, NULL, N'c6acfcbe-f31d-e711-80d3-00155d00662d', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'29564ea8-730d-40c6-8fe6-b44a0329c3c5', NULL, 30, N'84b475ed-140a-41a8-bf9e-124703e8ea6f', 42, NULL, NULL, CAST(N'2017-04-10 14:59:10.000' AS DateTime), NULL, CAST(N'2017-04-10 14:59:04.000' AS DateTime), N'CRM.MSCRMAsyncService.166c4197-86a3-48c5-94aa-2efa8734a50c', 3, NULL, CAST(N'2017-04-10 14:59:10.000' AS DateTime), CAST(N'2017-04-10 13:57:47.000' AS DateTime), NULL, 0, CAST(N'2017-04-10 14:58:44.000' AS DateTime), NULL, NULL, NULL, N'Step Name,Time in Milliseconds
CleanupObjects (1),35
CleanupObjects (1),3
CopyIndex (2),89
CopyIndex (3),2
CopyIndex (4),2
FlattenTable (5),507
FlattenTable (5),12
FlattenTable (5),17
FlattenTable (5),7
FlattenTable (5),89
FlattenTable (5),45
FlattenTable (5),26
FlattenTable (5),48
FlattenTable (5),19
FlattenTable (5),11
FlattenTable (5),12
FlattenTable (5),19
FlattenTable (5),6
FlattenTable (5),8
FlattenTable (5),15
FlattenTable (5),11
FlattenTable (5),8
FlattenTable (5),13
FlattenTable (5),9
FlattenTable (5),24
FlattenTable (5),14
FlattenTable (5),6
FlattenTable (5),9
FlattenTable (5),10
FlattenTable (5),6
FlattenTable (5),15
FlattenTable (5),7
FlattenTable (5),28
FlattenTable (5),5
FlattenTable (5),5
FlattenTable (5),6
FlattenTable (5),9
FlattenTable (5),7
FlattenTable (5),7
FlattenTable (5),118
FlattenTable (5),9
FlattenTable (5),6
FlattenTable (5),7
FlattenTable (5),6
FlattenTable (5),6
FlattenTable (5),10
FlattenTable (5),7
FlattenTable (5),9
FlattenTable (5),6
FlattenTable (5),6
FlattenTable (5),17
FlattenTable (5),10
FlattenTable (5),7
FlattenTable (5),8
FlattenTable (5),21
FlattenTable (5),7
FlattenTable (5),8
FlattenTable (5),6
FlattenTable (5),7
FlattenTable (5),8
FlattenTable (5),7
FlattenTable (5),7
FlattenTable (5),6
FlattenTable (5),34
FlattenTable (5),4
FlattenTable (5),4
FlattenTable (5),7
FlattenTable (5),17
FlattenTable (5),6
FlattenTable (5),6
FlattenTable (5),6
FlattenTable (5),5
FlattenTable (5),11
FlattenTable (5),5
FlattenTable (5),5
FlattenTable (5),5
FlattenTable (5),4
FlattenTable (5),5
FlattenTable (5),5
FlattenTable (5),5
FlattenTable (5),5
FlattenTable (5),11
FlattenTable (5),4
FlattenTable (5),5
FlattenTable (5),5
FlattenTable (5),5
FlattenTable (5),5
FlattenTable (5),6
FlattenTable (5),5
FlattenTable (5),4
FlattenTable (5),5
FlattenTable (5),4
FlattenTable (5),35
FlattenTable (5),5
FlattenTable (5),5
FlattenTable (5),5
FlattenTable (5),5
FlattenTable (5),11
FlattenTable (5),8
FlattenTable (5),12
FlattenTable (5),298
FlattenTable (5),18
FlattenTable (5),96
FlattenTable (5),33
FlattenTable (5),60
FlattenTable (5),96
FlattenTable (5),264
CalculateLeaves (6),305
CalculateTree (7),15
CalculateTree (7),8
CalculateTree (7),11
CalculateTree (7),6
CalculateTree (7),9
CalculateTree (7),16
CalculateTree (7),8
CalculateTree (7),8
CalculateTree (7),13
CalculateTree (7),6
CalculateTree (7),10
CalculateTree (7),5
CalculateTree (7),5
CalculateTree (7),3
CalculateTree (7),5
CalculateTree (7),6
CalculateTree (7),2
CalculateTree (7),10
CalculateTree (7),2
CalculateTree (7),8
CalculateTree (7),4
CalculateTree (7),2
CalculateTree (7),4
CalculateTree (7),3
CalculateTree (7),3
CalculateTree (7),22
CalculateTree (7),41
CalculateTree (7),4
CalculateTree (7),2
CalculateTree (7),2
CalculateTree (7),3
CalculateTree (7),6
CalculateTree (7),7
CalculateTree (7),16
CalculateTree (7),4
CalculateTree (7),1
CalculateTree (7),2
CalculateTree (7),4
CalculateTree (7),2
CalculateTree (7),2
CalculateTree (7),4
CalculateTree (7),1
CalculateTree (7),3
CalculateTree (7),1
CalculateTree (7),1
CalculateTree (7),1
CalculateTree (7),4
CalculateTree (7),3
CalculateTree (7),2
CalculateTree (7),3
CalculateTree (7),1
CalculateTree (7),2
CalculateTree (7),1
CalculateTree (7),1
CalculateTree (7),2
CalculateTree (7),2
CalculateTree (7),1
CalculateTree (7),2
CalculateTree (7),2
CalculateTree (7),2
CalculateTree (7),2
CalculateTree (7),3
CalculateTree (7),2
CalculateTree (7),1
CalculateTree (7),2
CalculateTree (7),2
CalculateTree (7),2
CalculateTree (7),2
CalculateTree (7),2
CalculateTree (7),1
CalculateTree (7),1
CalculateTree (7),1
CalculateTree (7),1
CalculateTree (7),1
CalculateTree (7),1
CalculateTree (7),1
CalculateTree (7),1
CalculateTree (7),1
CalculateTree (7),1
CalculateTree (7),13
CalculateTree (7),2
CalculateTree (7),1
CalculateTree (7),1
CalculateTree (7),1
CalculateTree (7),1
CalculateTree (7),1
CalculateTree (7),1
CalculateTree (7),11
CalculateTree (7),1
CalculateTree (7),2
CalculateTree (7),2
CalculateTree (7),2
CalculateTree (7),2
CalculateTree (7),2
CalculateTree (7),2
CalculateTree (7),2
CalculateTree (7),2
CalculateTree (7),3
CalculateTree (7),2
CalculateTree (7),2
CalculateTree (7),2
CalculateTree (7),2
CalculateTree (7),4
UpdateRollupField (8),58
RetryFailedRecords (9),1
CheckOrphans (10),4
ProcessQueuedRollupJobEntries (22),1
MarkCompletion (23),8
', 5.813, NULL, NULL, NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, NULL, 8, 1, NULL)
INSERT [dbo].[AsyncOperationBase] ([MessageName], [Depth], [PrimaryEntityType], [Data], [RegardingObjectId], [WorkflowStageName], [OperationType], [DependencyToken], [RecurrencePattern], [Name], [PostponeUntil], [WorkflowState], [TimeZoneRuleVersionNumber], [OwningBusinessUnit], [IsWaitingForEvent], [CreatedBy], [ErrorCode], [ModifiedBy], [CorrelationId], [RecurrenceStartTime], [StatusCode], [AsyncOperationId], [Sequence], [RequestId], [WorkflowIsBlocked], [ModifiedOn], [Message], [StartedOn], [HostId], [StateCode], [WorkflowActivationId], [CompletedOn], [CorrelationUpdatedTime], [UTCConversionTimeZoneCode], [RetryCount], [CreatedOn], [RegardingObjectIdName], [RegardingObjectTypeCode], [RegardingObjectIdYomiName], [FriendlyMessage], [ExecutionTimeSpan], [ModifiedOnBehalfBy], [CreatedOnBehalfBy], [OwningExtensionId], [OwnerId], [OwningExtensionIdName], [OwningExtensionTypeCode], [OwnerIdType], [Subtype], [ParentPluginExecutionId]) VALUES (NULL, 1, NULL, N'7VdNb9NQEJwzEv/ByoFb6qSVQAKTSlBugMTHgatJnMSKY4fEaei/Z3Zs16Z+DjilEofKchK/2Z2d3bdvkwS4xE+skcDDNSJssUOMDCleY4AxzjDiu0ckxZTrM6IpFkL3yDHHkFbP+XSJCZ7iCQK8IZJghSt6Jbxz3lcI+R6SqYiWMs5Lft6R0biWRHNsuObzOug6433B14yqFlw9p5YRo/n4hg94jy9UtCT3mrwDB3P8T5iHyngn9VaDiJxFph6vAJ+YrdXthl6Wa40VuHluy6pN8IwKc7xi3czWoniqqVnF4s+les5oCVcjZZZS6ZDPGfGVAzedG1713pjtgs9T2Q0Yd6G4VXzbT4uYU7fxh+SI5BmS9abc7Y0yC2VpPdHmCVVdy++7+iHqwRYzc1Pvt1jnxBKxbYmbxs0tXyqvux5TMc6UUcHuObQZQ7GT9lT0c1HBpjrrCrOM8EPYtWq4L/0vOjT3V7Dnp1M1jO6twizXjFid0Fm5w24dGe1mWs3Zs7YLQ56xIRkyddKSubR1ju+tst01VTd0KbWzkpentt0ntb4KOb/FfAfa7TfGi5M9R3/l6Tvq1LZpnpU22jznLt9qClVYwNXfJ9bjNHucZv//NOs/J9xaxp1ajp+0RN26Yl939+JBsVfksX4+KI7pcWGhzk4sdXc7bE5Lm90uv8qm1tPsN1tLpb/dc/279CH7uj5poVaLvqq+q/ru6Sk7+ifUveMPOYEN6f61GWjFqvtOE9S0f9R3YaxMpo1OmjQmrrH28azjfeXKZ02eWNO6yHSnWjft3vI6bmcajv1rmOAX', NULL, NULL, 13, N'MSCRM_BULKDELETE_94f9b696-f31d-e711-80d3-00155d00662d', N'FREQ=DAILY', N'Delete completed system jobs', CAST(N'2017-04-11 13:56:44.000' AS DateTime), NULL, 0, N'c6acfcbe-f31d-e711-80d3-00155d00662d', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'4daeef2d-e807-4e64-a869-dd8d932a6310', CAST(N'2017-04-10 13:56:44.000' AS DateTime), 10, N'e3573922-a451-476e-a5e9-37e136dc39c6', 16, NULL, NULL, CAST(N'2017-04-10 14:32:20.000' AS DateTime), NULL, CAST(N'2017-04-10 14:32:20.000' AS DateTime), N'CRM.MSCRMAsyncService.166c4197-86a3-48c5-94aa-2efa8734a50c', 1, NULL, NULL, CAST(N'2017-04-10 13:56:44.000' AS DateTime), NULL, 0, CAST(N'2017-04-10 13:56:44.000' AS DateTime), NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, NULL, 8, 1, NULL)
INSERT [dbo].[AsyncOperationBase] ([MessageName], [Depth], [PrimaryEntityType], [Data], [RegardingObjectId], [WorkflowStageName], [OperationType], [DependencyToken], [RecurrencePattern], [Name], [PostponeUntil], [WorkflowState], [TimeZoneRuleVersionNumber], [OwningBusinessUnit], [IsWaitingForEvent], [CreatedBy], [ErrorCode], [ModifiedBy], [CorrelationId], [RecurrenceStartTime], [StatusCode], [AsyncOperationId], [Sequence], [RequestId], [WorkflowIsBlocked], [ModifiedOn], [Message], [StartedOn], [HostId], [StateCode], [WorkflowActivationId], [CompletedOn], [CorrelationUpdatedTime], [UTCConversionTimeZoneCode], [RetryCount], [CreatedOn], [RegardingObjectIdName], [RegardingObjectTypeCode], [RegardingObjectIdYomiName], [FriendlyMessage], [ExecutionTimeSpan], [ModifiedOnBehalfBy], [CreatedOnBehalfBy], [OwningExtensionId], [OwnerId], [OwningExtensionIdName], [OwningExtensionTypeCode], [OwnerIdType], [Subtype], [ParentPluginExecutionId]) VALUES (NULL, 1, NULL, N'rVRNT4NQEJyzif+B9OCN0mriQZEmWm9q4sehV4QHJaVAgFb9984uENoUmzQxL7RlZ3d2dt+kLmb4xhopLGxhUKJCghwZ7jDCFGNM+G0RyRAwHhLNECu6QY0INrOu+TaDh3OcwcU9kRQrzFmV8qn5zOHz2ydT0y1jnxv+rsgoXEuiNQrGHJ4vPWM+V/zMqSpm9JJaJuzmYIFnPOGdipbkXpN3NMCc/AuzrRNXql52YMjZTGrxuHjltLK3H1bJrD3W4FJZtlvzcEGFNW65N8mVLpbuVLIS5a9VdcRuKaNGJ8uo1OZ7Tnw1gIvOgqe/G8mN+R5o3oh9Y+3b9Zf7lI41dQu/Tw6jlQUzNlqbqXJfZ274Dnl83a7M96l+MCewJZxc1DsHrBGxVNlK4qKxaPnkDsIBHYF6NtSJGv9aA9qEIWDEKGaYL5miIdcOpcbFFZKZkzvUaM17ks42fWUz5lNRpXVb3e+m5Z7+MY+zN9EhunsbQ7WdVzrMZXTfV70fnSOOdDUie3pUz4imF84pvaPWLd3+vB2PCesplX2/D0beWBkQE382k1a6pd28B57jeaLh2D+Lh18=', NULL, NULL, 13, N'MSCRM_BULKDELETE_94f9b696-f31d-e711-80d3-00155d00662d', N'FREQ=DAILY', N'Delete Plug-in Trace Log Records', CAST(N'2017-04-11 14:29:50.000' AS DateTime), NULL, 0, N'c6acfcbe-f31d-e711-80d3-00155d00662d', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'3ff36bc4-fefe-4d70-b1c1-3b95bf8aab6b', CAST(N'2017-04-10 14:29:50.000' AS DateTime), 10, N'ffcaa895-7db7-4b4a-bde8-3916859f5ca7', 26, NULL, NULL, CAST(N'2017-04-10 14:32:20.000' AS DateTime), NULL, CAST(N'2017-04-10 14:32:20.000' AS DateTime), N'CRM.MSCRMAsyncService.166c4197-86a3-48c5-94aa-2efa8734a50c', 1, NULL, NULL, CAST(N'2017-04-10 14:29:50.000' AS DateTime), NULL, 0, CAST(N'2017-04-10 14:29:50.000' AS DateTime), NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, NULL, 8, 1, NULL)
INSERT [dbo].[AsyncOperationBase] ([MessageName], [Depth], [PrimaryEntityType], [Data], [RegardingObjectId], [WorkflowStageName], [OperationType], [DependencyToken], [RecurrencePattern], [Name], [PostponeUntil], [WorkflowState], [TimeZoneRuleVersionNumber], [OwningBusinessUnit], [IsWaitingForEvent], [CreatedBy], [ErrorCode], [ModifiedBy], [CorrelationId], [RecurrenceStartTime], [StatusCode], [AsyncOperationId], [Sequence], [RequestId], [WorkflowIsBlocked], [ModifiedOn], [Message], [StartedOn], [HostId], [StateCode], [WorkflowActivationId], [CompletedOn], [CorrelationUpdatedTime], [UTCConversionTimeZoneCode], [RetryCount], [CreatedOn], [RegardingObjectIdName], [RegardingObjectTypeCode], [RegardingObjectIdYomiName], [FriendlyMessage], [ExecutionTimeSpan], [ModifiedOnBehalfBy], [CreatedOnBehalfBy], [OwningExtensionId], [OwnerId], [OwningExtensionIdName], [OwningExtensionTypeCode], [OwnerIdType], [Subtype], [ParentPluginExecutionId]) VALUES (NULL, 1, NULL, N'vVXLbptQFJx1pfwD8qI7gtNIXaTUkdp011Zqk0W2xDxsmVcNqZu/78wBhFMDipOousLAeczMOedy7eMSf5AhhYPfiLBFhTUK5PiIGc5wijnvDj05lrSH9OZIzHuPGjFcRr3n2yUWOMEb+PhET4oNrpiV8qp5XSHgPSBSw5aT54LPFRGFtaK3Rkmbx7WzdcrrnL8FVSW0vqOWOdk83OIbvuKailbEzog7G0BevwqyaxVXpl49iIjZVOpw+fjBatW3B2ap1t7X+JW5bbu2wFsqrPGBfVOsWBzrqaLWhl+b6phsKa2RVZZTqcv3gv7NgF86S65+NopN+L60uBl5E+Pt+DVPMdbULfyAGJFlllRbWJ2Vrebe7IlDnMC6q/rubD9Ek2hr1iq93gFOTF9q+Vv6papsEdT1cIB5aYpCq6FR5wyoEYIiM+J1ezFsa3F4L41RedoLii4YF5q15nTE7nI3uUQorGcr1jGzr0WdvW85zkbq8h5V9q83tYltiD4+j50p2xBHM90Zj9SOdzc2azaY3cX0zPu9li03pYf9Pn5C4xnFKzEcswcCe06M+2F0+hF+DUx3PjLdp/NndnZGR/KO7ar/Vff5s3b1y7zD38Rh3LS3P187n0/r47O4P8O9iVPcN4u6/cXOWWn/zr6JO25P2G4Ki71zWajHZPZ8N7T8ZOaSPp3pTaWVTWI/7jPXdJw0TP0bL/AX', NULL, NULL, 13, N'MSCRM_BULKDELETE_94f9b696-f31d-e711-80d3-00155d00662d', N'FREQ=DAILY', N'Delete completed process sessions for Sync Workflows', CAST(N'2017-04-11 13:56:45.000' AS DateTime), NULL, 0, N'c6acfcbe-f31d-e711-80d3-00155d00662d', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'9af88752-fe3b-44f1-b873-6108d3ccff59', CAST(N'2017-04-10 13:56:45.000' AS DateTime), 10, N'8e40c3a2-daf2-4b4d-bcba-3a4587e7affa', 17, NULL, NULL, CAST(N'2017-04-10 14:32:20.000' AS DateTime), NULL, CAST(N'2017-04-10 14:32:20.000' AS DateTime), N'CRM.MSCRMAsyncService.166c4197-86a3-48c5-94aa-2efa8734a50c', 1, NULL, NULL, CAST(N'2017-04-10 13:56:45.000' AS DateTime), NULL, 0, CAST(N'2017-04-10 13:56:45.000' AS DateTime), NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, NULL, 8, 1, NULL)
INSERT [dbo].[AsyncOperationBase] ([MessageName], [Depth], [PrimaryEntityType], [Data], [RegardingObjectId], [WorkflowStageName], [OperationType], [DependencyToken], [RecurrencePattern], [Name], [PostponeUntil], [WorkflowState], [TimeZoneRuleVersionNumber], [OwningBusinessUnit], [IsWaitingForEvent], [CreatedBy], [ErrorCode], [ModifiedBy], [CorrelationId], [RecurrenceStartTime], [StatusCode], [AsyncOperationId], [Sequence], [RequestId], [WorkflowIsBlocked], [ModifiedOn], [Message], [StartedOn], [HostId], [StateCode], [WorkflowActivationId], [CompletedOn], [CorrelationUpdatedTime], [UTCConversionTimeZoneCode], [RetryCount], [CreatedOn], [RegardingObjectIdName], [RegardingObjectTypeCode], [RegardingObjectIdYomiName], [FriendlyMessage], [ExecutionTimeSpan], [ModifiedOnBehalfBy], [CreatedOnBehalfBy], [OwningExtensionId], [OwnerId], [OwningExtensionIdName], [OwningExtensionTypeCode], [OwnerIdType], [Subtype], [ParentPluginExecutionId]) VALUES (NULL, 0, NULL, NULL, NULL, NULL, 35, NULL, N'FREQ=WEEKLY', N'Recurring Series Expansion job', CAST(N'9999-12-30 23:59:59.000' AS DateTime), NULL, 0, N'c6acfcbe-f31d-e711-80d3-00155d00662d', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'dae2d88a-516c-40be-9a7b-60523a1df7a3', CAST(N'2017-04-09 17:00:00.000' AS DateTime), 10, N'e4c26607-554a-4bd2-8ccc-433bec02ab5d', 15, NULL, NULL, CAST(N'2017-04-10 14:32:21.000' AS DateTime), NULL, CAST(N'2017-04-10 14:32:15.000' AS DateTime), N'CRM.MSCRMAsyncService.166c4197-86a3-48c5-94aa-2efa8734a50c', 1, NULL, NULL, CAST(N'2017-04-10 13:56:44.000' AS DateTime), NULL, 0, CAST(N'2017-04-10 13:56:44.000' AS DateTime), NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, NULL, 8, 1, NULL)
INSERT [dbo].[AsyncOperationBase] ([MessageName], [Depth], [PrimaryEntityType], [Data], [RegardingObjectId], [WorkflowStageName], [OperationType], [DependencyToken], [RecurrencePattern], [Name], [PostponeUntil], [WorkflowState], [TimeZoneRuleVersionNumber], [OwningBusinessUnit], [IsWaitingForEvent], [CreatedBy], [ErrorCode], [ModifiedBy], [CorrelationId], [RecurrenceStartTime], [StatusCode], [AsyncOperationId], [Sequence], [RequestId], [WorkflowIsBlocked], [ModifiedOn], [Message], [StartedOn], [HostId], [StateCode], [WorkflowActivationId], [CompletedOn], [CorrelationUpdatedTime], [UTCConversionTimeZoneCode], [RetryCount], [CreatedOn], [RegardingObjectIdName], [RegardingObjectTypeCode], [RegardingObjectIdYomiName], [FriendlyMessage], [ExecutionTimeSpan], [ModifiedOnBehalfBy], [CreatedOnBehalfBy], [OwningExtensionId], [OwnerId], [OwningExtensionIdName], [OwningExtensionTypeCode], [OwnerIdType], [Subtype], [ParentPluginExecutionId]) VALUES (NULL, 0, NULL, NULL, NULL, NULL, 25, NULL, N'FREQ=DAILY;INTERVAL=15', N'Full Text Catalog job', CAST(N'2017-04-24 17:00:00.000' AS DateTime), NULL, 0, N'c6acfcbe-f31d-e711-80d3-00155d00662d', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'7226e0d5-cbbe-4cc4-97fc-150c1e1ff9fb', CAST(N'2017-04-09 17:00:00.000' AS DateTime), 10, N'9f4a0046-9722-4284-a157-4d1c29a8a66c', 11, NULL, NULL, CAST(N'2017-04-10 14:32:18.000' AS DateTime), NULL, CAST(N'2017-04-10 14:32:15.000' AS DateTime), N'CRM.MSCRMAsyncService.166c4197-86a3-48c5-94aa-2efa8734a50c', 1, NULL, NULL, CAST(N'2017-04-10 13:56:44.000' AS DateTime), NULL, 0, CAST(N'2017-04-10 13:56:44.000' AS DateTime), NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, NULL, 8, 1, NULL)
INSERT [dbo].[AsyncOperationBase] ([MessageName], [Depth], [PrimaryEntityType], [Data], [RegardingObjectId], [WorkflowStageName], [OperationType], [DependencyToken], [RecurrencePattern], [Name], [PostponeUntil], [WorkflowState], [TimeZoneRuleVersionNumber], [OwningBusinessUnit], [IsWaitingForEvent], [CreatedBy], [ErrorCode], [ModifiedBy], [CorrelationId], [RecurrenceStartTime], [StatusCode], [AsyncOperationId], [Sequence], [RequestId], [WorkflowIsBlocked], [ModifiedOn], [Message], [StartedOn], [HostId], [StateCode], [WorkflowActivationId], [CompletedOn], [CorrelationUpdatedTime], [UTCConversionTimeZoneCode], [RetryCount], [CreatedOn], [RegardingObjectIdName], [RegardingObjectTypeCode], [RegardingObjectIdYomiName], [FriendlyMessage], [ExecutionTimeSpan], [ModifiedOnBehalfBy], [CreatedOnBehalfBy], [OwningExtensionId], [OwnerId], [OwningExtensionIdName], [OwningExtensionTypeCode], [OwnerIdType], [Subtype], [ParentPluginExecutionId]) VALUES (NULL, 1, NULL, N'7VVNT8JQEJyzif+h4eCtfJl40FoSxZua+HHwWvsBDaXF9oH6753dtgJSUBMTPZiXUrrzdnZ23lIcDPCCKRJYWCBEjgIxMqQ4RQs9tNHl3SKSwmc8IJpipOgcBhFs7jri0wAu9rEHB2dEEkwwZFbCy/AawuPdI1NZLWWdY34vyChcY6IGM8Y6XM+62rwO+ZlR1YjRPrV0Wa2DB1zhEndUNCb3lLytBub4R5ht7bhQ9eJBSM6yU4vLwQ27Fd9emSW9LrESl8y8cs3FARUanNA32StVLPVUdsXKb1R1xGoJo6F2llKpzeeM+KQBF50zruXZyN4Rn33d12Ldkdat68t5SkVD3cLvkSPUTE81lDMg2Tn1beZ76qr09ahzEH6BJVYmiy5/ZIuIJcqSExdNs3eetLG+r8yBdlBWsRo0CUN5cqZyKlPmXCNy+rIjxJNiC/VqXuX1t2jtrKndRFedbcqtz73GHEbXZ+R/fv7S/IR8l4gz8gsPPpmkjOyBRg1PRmrbzLY175Vub05Z79enTJDt7zBHI+LUhU6JaLpmn1I7quajdtBdmSph/U7mst49I7fM9ImJ72Wnhbq0uu+ca/c+0bDrv8jFGw==', NULL, NULL, 13, N'MSCRM_BULKDELETE_94f9b696-f31d-e711-80d3-00155d00662d', NULL, N'Delete expired action cards for Relationship Assistant', NULL, NULL, NULL, N'c6acfcbe-f31d-e711-80d3-00155d00662d', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'aec0f829-9423-4d36-a242-7d81e78b4434', NULL, 30, N'b9bc5d04-4331-437b-9cbc-603e41a9e1ef', 37, NULL, NULL, CAST(N'2017-04-10 14:32:41.000' AS DateTime), NULL, CAST(N'2017-04-10 14:32:40.000' AS DateTime), N'CRM.MSCRMAsyncService.166c4197-86a3-48c5-94aa-2efa8734a50c', 3, NULL, CAST(N'2017-04-10 14:32:41.000' AS DateTime), CAST(N'2017-04-10 14:29:50.000' AS DateTime), NULL, 0, CAST(N'2017-04-10 14:32:20.000' AS DateTime), NULL, NULL, NULL, NULL, 0.484, NULL, NULL, NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, NULL, 8, 1, NULL)
INSERT [dbo].[AsyncOperationBase] ([MessageName], [Depth], [PrimaryEntityType], [Data], [RegardingObjectId], [WorkflowStageName], [OperationType], [DependencyToken], [RecurrencePattern], [Name], [PostponeUntil], [WorkflowState], [TimeZoneRuleVersionNumber], [OwningBusinessUnit], [IsWaitingForEvent], [CreatedBy], [ErrorCode], [ModifiedBy], [CorrelationId], [RecurrenceStartTime], [StatusCode], [AsyncOperationId], [Sequence], [RequestId], [WorkflowIsBlocked], [ModifiedOn], [Message], [StartedOn], [HostId], [StateCode], [WorkflowActivationId], [CompletedOn], [CorrelationUpdatedTime], [UTCConversionTimeZoneCode], [RetryCount], [CreatedOn], [RegardingObjectIdName], [RegardingObjectTypeCode], [RegardingObjectIdYomiName], [FriendlyMessage], [ExecutionTimeSpan], [ModifiedOnBehalfBy], [CreatedOnBehalfBy], [OwningExtensionId], [OwnerId], [OwningExtensionIdName], [OwningExtensionTypeCode], [OwnerIdType], [Subtype], [ParentPluginExecutionId]) VALUES (NULL, 0, NULL, NULL, NULL, NULL, 56, NULL, N'FREQ=DAILY', N'Update Entitlement States job', CAST(N'9999-12-31 23:59:59.000' AS DateTime), NULL, 0, N'c6acfcbe-f31d-e711-80d3-00155d00662d', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'd8b11812-8a97-4219-84ff-4d38670586b8', CAST(N'2017-04-09 17:00:00.000' AS DateTime), 10, N'46eb574a-d4e0-4be1-96ea-731b9d5baf3a', 13, NULL, NULL, CAST(N'2017-04-10 14:32:20.000' AS DateTime), NULL, CAST(N'2017-04-10 14:32:15.000' AS DateTime), N'CRM.MSCRMAsyncService.166c4197-86a3-48c5-94aa-2efa8734a50c', 1, NULL, NULL, CAST(N'2017-04-10 13:56:44.000' AS DateTime), NULL, 0, CAST(N'2017-04-10 13:56:44.000' AS DateTime), NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, NULL, 8, 1, NULL)
INSERT [dbo].[AsyncOperationBase] ([MessageName], [Depth], [PrimaryEntityType], [Data], [RegardingObjectId], [WorkflowStageName], [OperationType], [DependencyToken], [RecurrencePattern], [Name], [PostponeUntil], [WorkflowState], [TimeZoneRuleVersionNumber], [OwningBusinessUnit], [IsWaitingForEvent], [CreatedBy], [ErrorCode], [ModifiedBy], [CorrelationId], [RecurrenceStartTime], [StatusCode], [AsyncOperationId], [Sequence], [RequestId], [WorkflowIsBlocked], [ModifiedOn], [Message], [StartedOn], [HostId], [StateCode], [WorkflowActivationId], [CompletedOn], [CorrelationUpdatedTime], [UTCConversionTimeZoneCode], [RetryCount], [CreatedOn], [RegardingObjectIdName], [RegardingObjectTypeCode], [RegardingObjectIdYomiName], [FriendlyMessage], [ExecutionTimeSpan], [ModifiedOnBehalfBy], [CreatedOnBehalfBy], [OwningExtensionId], [OwnerId], [OwningExtensionIdName], [OwningExtensionTypeCode], [OwnerIdType], [Subtype], [ParentPluginExecutionId]) VALUES (NULL, 0, NULL, N'S2RIBsJ8hlKGPIYSBgA=', NULL, NULL, 57, NULL, N'FREQ=HOURLY;INTERVAL=1', N'Calculate rollup fields for the account entity', CAST(N'2017-04-10 15:57:47.000' AS DateTime), NULL, 0, N'c6acfcbe-f31d-e711-80d3-00155d00662d', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'fd1722d6-ad0b-4901-83f0-0111a92d3e60', CAST(N'2017-04-10 14:57:47.000' AS DateTime), 10, N'5ebaf16e-0b63-4713-915d-752732899802', 21, NULL, NULL, CAST(N'2017-04-10 14:58:39.000' AS DateTime), NULL, CAST(N'2017-04-10 14:58:39.000' AS DateTime), N'CRM.MSCRMAsyncService.166c4197-86a3-48c5-94aa-2efa8734a50c', 1, NULL, NULL, CAST(N'2017-04-10 13:57:47.000' AS DateTime), NULL, 0, CAST(N'2017-04-10 13:57:47.000' AS DateTime), NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, NULL, 8, 1, NULL)
INSERT [dbo].[AsyncOperationBase] ([MessageName], [Depth], [PrimaryEntityType], [Data], [RegardingObjectId], [WorkflowStageName], [OperationType], [DependencyToken], [RecurrencePattern], [Name], [PostponeUntil], [WorkflowState], [TimeZoneRuleVersionNumber], [OwningBusinessUnit], [IsWaitingForEvent], [CreatedBy], [ErrorCode], [ModifiedBy], [CorrelationId], [RecurrenceStartTime], [StatusCode], [AsyncOperationId], [Sequence], [RequestId], [WorkflowIsBlocked], [ModifiedOn], [Message], [StartedOn], [HostId], [StateCode], [WorkflowActivationId], [CompletedOn], [CorrelationUpdatedTime], [UTCConversionTimeZoneCode], [RetryCount], [CreatedOn], [RegardingObjectIdName], [RegardingObjectTypeCode], [RegardingObjectIdYomiName], [FriendlyMessage], [ExecutionTimeSpan], [ModifiedOnBehalfBy], [CreatedOnBehalfBy], [OwningExtensionId], [OwnerId], [OwningExtensionIdName], [OwningExtensionTypeCode], [OwnerIdType], [Subtype], [ParentPluginExecutionId]) VALUES (NULL, 0, NULL, NULL, NULL, NULL, 58, N'knowledgearticle', NULL, N'Mass calculate the knowledgearticle.knowledgearticleviews rollup field', NULL, NULL, NULL, N'c6acfcbe-f31d-e711-80d3-00155d00662d', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'c4473377-1518-4d8b-8b2d-9ce61bde892b', NULL, 30, N'6c6ddf66-1f23-4f69-a13e-838853c08d47', 43, NULL, NULL, CAST(N'2017-04-10 14:59:02.000' AS DateTime), NULL, CAST(N'2017-04-10 14:58:59.000' AS DateTime), N'CRM.MSCRMAsyncService.166c4197-86a3-48c5-94aa-2efa8734a50c', 3, NULL, CAST(N'2017-04-10 14:59:02.000' AS DateTime), CAST(N'2017-04-10 13:57:48.000' AS DateTime), NULL, 0, CAST(N'2017-04-10 14:58:44.000' AS DateTime), NULL, NULL, NULL, N'Step Name,Time in Milliseconds
CleanupObjects (1),13
CleanupObjects (1),1
CopyIndex (2),15
CopyIndex (3),1
CopyIndex (4),0
FlattenTable (5),96
FlattenTable (5),3
FlattenTable (5),2
FlattenTable (5),4
FlattenTable (5),2
FlattenTable (5),2
FlattenTable (5),2
FlattenTable (5),2
FlattenTable (5),2
FlattenTable (5),11
FlattenTable (5),2
FlattenTable (5),2
FlattenTable (5),11
FlattenTable (5),9
FlattenTable (5),2
FlattenTable (5),2
FlattenTable (5),2
FlattenTable (5),2
FlattenTable (5),2
FlattenTable (5),2
FlattenTable (5),2
FlattenTable (5),2
FlattenTable (5),3
FlattenTable (5),3
FlattenTable (5),2
FlattenTable (5),2
FlattenTable (5),2
FlattenTable (5),2
FlattenTable (5),3
FlattenTable (5),4
FlattenTable (5),2
FlattenTable (5),2
FlattenTable (5),3
FlattenTable (5),2
FlattenTable (5),2
FlattenTable (5),3
FlattenTable (5),3
FlattenTable (5),3
FlattenTable (5),3
FlattenTable (5),3
FlattenTable (5),3
FlattenTable (5),3
FlattenTable (5),2
FlattenTable (5),3
FlattenTable (5),3
FlattenTable (5),8
FlattenTable (5),2
FlattenTable (5),2
FlattenTable (5),1
FlattenTable (5),2
FlattenTable (5),1
FlattenTable (5),1
FlattenTable (5),2
FlattenTable (5),2
FlattenTable (5),2
FlattenTable (5),2
FlattenTable (5),3
FlattenTable (5),3
FlattenTable (5),3
FlattenTable (5),3
FlattenTable (5),2
FlattenTable (5),3
FlattenTable (5),3
FlattenTable (5),4
FlattenTable (5),3
FlattenTable (5),4
FlattenTable (5),4
FlattenTable (5),3
FlattenTable (5),3
FlattenTable (5),3
FlattenTable (5),3
FlattenTable (5),4
FlattenTable (5),4
FlattenTable (5),2
FlattenTable (5),2
FlattenTable (5),2
FlattenTable (5),2
FlattenTable (5),2
FlattenTable (5),2
FlattenTable (5),2
FlattenTable (5),11
FlattenTable (5),2
FlattenTable (5),2
FlattenTable (5),3
FlattenTable (5),2
FlattenTable (5),2
FlattenTable (5),3
FlattenTable (5),2
FlattenTable (5),2
FlattenTable (5),2
FlattenTable (5),11
FlattenTable (5),2
FlattenTable (5),2
FlattenTable (5),2
FlattenTable (5),3
FlattenTable (5),3
FlattenTable (5),2
FlattenTable (5),2
FlattenTable (5),3
FlattenTable (5),2
FlattenTable (5),2
FlattenTable (5),20
CalculateLeaves (6),46
CalculateTree (7),2
CalculateTree (7),1
CalculateTree (7),1
CalculateTree (7),1
CalculateTree (7),2
CalculateTree (7),1
CalculateTree (7),2
CalculateTree (7),5
CalculateTree (7),3
CalculateTree (7),3
CalculateTree (7),3
CalculateTree (7),3
CalculateTree (7),3
CalculateTree (7),4
CalculateTree (7),4
CalculateTree (7),3
CalculateTree (7),5
CalculateTree (7),4
CalculateTree (7),3
CalculateTree (7),6
CalculateTree (7),3
CalculateTree (7),4
CalculateTree (7),5
CalculateTree (7),5
CalculateTree (7),4
CalculateTree (7),3
CalculateTree (7),4
CalculateTree (7),3
CalculateTree (7),6
CalculateTree (7),4
CalculateTree (7),3
CalculateTree (7),4
CalculateTree (7),3
CalculateTree (7),3
CalculateTree (7),3
CalculateTree (7),12
CalculateTree (7),5
CalculateTree (7),5
CalculateTree (7),4
CalculateTree (7),3
CalculateTree (7),3
CalculateTree (7),4
CalculateTree (7),3
CalculateTree (7),4
CalculateTree (7),3
CalculateTree (7),6
CalculateTree (7),3
CalculateTree (7),3
CalculateTree (7),3
CalculateTree (7),5
CalculateTree (7),5
CalculateTree (7),5
CalculateTree (7),5
CalculateTree (7),5
CalculateTree (7),3
CalculateTree (7),9
CalculateTree (7),3
CalculateTree (7),3
CalculateTree (7),3
CalculateTree (7),3
CalculateTree (7),3
CalculateTree (7),3
CalculateTree (7),3
CalculateTree (7),3
CalculateTree (7),3
CalculateTree (7),3
CalculateTree (7),3
CalculateTree (7),3
CalculateTree (7),3
CalculateTree (7),3
CalculateTree (7),3
CalculateTree (7),4
CalculateTree (7),3
CalculateTree (7),4
CalculateTree (7),5
CalculateTree (7),5
CalculateTree (7),4
CalculateTree (7),5
CalculateTree (7),14
CalculateTree (7),7
CalculateTree (7),13
CalculateTree (7),9
CalculateTree (7),5
CalculateTree (7),7
CalculateTree (7),5
CalculateTree (7),5
CalculateTree (7),5
CalculateTree (7),5
CalculateTree (7),98
CalculateTree (7),5
CalculateTree (7),3
CalculateTree (7),5
CalculateTree (7),7
CalculateTree (7),4
CalculateTree (7),4
CalculateTree (7),5
CalculateTree (7),5
CalculateTree (7),5
CalculateTree (7),7
CalculateTree (7),10
CalculateTree (7),5
CalculateTree (7),4
CalculateTree (7),9
UpdateRollupField (8),103
RetryFailedRecords (9),2
CheckOrphans (10),6
ProcessQueuedRollupJobEntries (22),4
MarkCompletion (23),32
', 2.6109999999999998, NULL, NULL, NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, NULL, 8, 1, NULL)
INSERT [dbo].[AsyncOperationBase] ([MessageName], [Depth], [PrimaryEntityType], [Data], [RegardingObjectId], [WorkflowStageName], [OperationType], [DependencyToken], [RecurrencePattern], [Name], [PostponeUntil], [WorkflowState], [TimeZoneRuleVersionNumber], [OwningBusinessUnit], [IsWaitingForEvent], [CreatedBy], [ErrorCode], [ModifiedBy], [CorrelationId], [RecurrenceStartTime], [StatusCode], [AsyncOperationId], [Sequence], [RequestId], [WorkflowIsBlocked], [ModifiedOn], [Message], [StartedOn], [HostId], [StateCode], [WorkflowActivationId], [CompletedOn], [CorrelationUpdatedTime], [UTCConversionTimeZoneCode], [RetryCount], [CreatedOn], [RegardingObjectIdName], [RegardingObjectTypeCode], [RegardingObjectIdYomiName], [FriendlyMessage], [ExecutionTimeSpan], [ModifiedOnBehalfBy], [CreatedOnBehalfBy], [OwningExtensionId], [OwnerId], [OwningExtensionIdName], [OwningExtensionTypeCode], [OwnerIdType], [Subtype], [ParentPluginExecutionId]) VALUES (NULL, 0, NULL, NULL, NULL, NULL, 65, NULL, NULL, N'Update Knowledge Article States job', NULL, NULL, NULL, N'c6acfcbe-f31d-e711-80d3-00155d00662d', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'c3845b93-7b31-46d8-9832-b847633c1614', NULL, 30, N'b0d24c5e-eda9-421c-b2f2-9311310532a6', 29, NULL, NULL, CAST(N'2017-04-10 14:32:21.000' AS DateTime), NULL, CAST(N'2017-04-10 14:32:20.000' AS DateTime), N'CRM.MSCRMAsyncService.166c4197-86a3-48c5-94aa-2efa8734a50c', 3, NULL, CAST(N'2017-04-10 14:32:21.000' AS DateTime), CAST(N'2017-04-10 13:56:44.000' AS DateTime), NULL, 0, CAST(N'2017-04-10 14:32:18.000' AS DateTime), NULL, NULL, NULL, NULL, 0.211, NULL, NULL, NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, NULL, 8, 1, NULL)
INSERT [dbo].[AsyncOperationBase] ([MessageName], [Depth], [PrimaryEntityType], [Data], [RegardingObjectId], [WorkflowStageName], [OperationType], [DependencyToken], [RecurrencePattern], [Name], [PostponeUntil], [WorkflowState], [TimeZoneRuleVersionNumber], [OwningBusinessUnit], [IsWaitingForEvent], [CreatedBy], [ErrorCode], [ModifiedBy], [CorrelationId], [RecurrenceStartTime], [StatusCode], [AsyncOperationId], [Sequence], [RequestId], [WorkflowIsBlocked], [ModifiedOn], [Message], [StartedOn], [HostId], [StateCode], [WorkflowActivationId], [CompletedOn], [CorrelationUpdatedTime], [UTCConversionTimeZoneCode], [RetryCount], [CreatedOn], [RegardingObjectIdName], [RegardingObjectTypeCode], [RegardingObjectIdYomiName], [FriendlyMessage], [ExecutionTimeSpan], [ModifiedOnBehalfBy], [CreatedOnBehalfBy], [OwningExtensionId], [OwnerId], [OwningExtensionIdName], [OwningExtensionTypeCode], [OwnerIdType], [Subtype], [ParentPluginExecutionId]) VALUES (NULL, 0, NULL, NULL, NULL, NULL, 27, NULL, N'FREQ=DAILY', N'Update Contract States job', CAST(N'9999-12-31 23:59:59.000' AS DateTime), NULL, 0, N'c6acfcbe-f31d-e711-80d3-00155d00662d', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'e7182330-5e92-4c54-9ee5-b986a771bfbe', CAST(N'2017-04-09 17:00:00.000' AS DateTime), 10, N'5eb14ecb-60ed-4f59-800d-a6c09455c9d8', 12, NULL, NULL, CAST(N'2017-04-10 14:32:21.000' AS DateTime), NULL, CAST(N'2017-04-10 14:32:15.000' AS DateTime), N'CRM.MSCRMAsyncService.166c4197-86a3-48c5-94aa-2efa8734a50c', 1, NULL, NULL, CAST(N'2017-04-10 13:56:44.000' AS DateTime), NULL, 0, CAST(N'2017-04-10 13:56:44.000' AS DateTime), NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, NULL, 8, 1, NULL)
INSERT [dbo].[AsyncOperationBase] ([MessageName], [Depth], [PrimaryEntityType], [Data], [RegardingObjectId], [WorkflowStageName], [OperationType], [DependencyToken], [RecurrencePattern], [Name], [PostponeUntil], [WorkflowState], [TimeZoneRuleVersionNumber], [OwningBusinessUnit], [IsWaitingForEvent], [CreatedBy], [ErrorCode], [ModifiedBy], [CorrelationId], [RecurrenceStartTime], [StatusCode], [AsyncOperationId], [Sequence], [RequestId], [WorkflowIsBlocked], [ModifiedOn], [Message], [StartedOn], [HostId], [StateCode], [WorkflowActivationId], [CompletedOn], [CorrelationUpdatedTime], [UTCConversionTimeZoneCode], [RetryCount], [CreatedOn], [RegardingObjectIdName], [RegardingObjectTypeCode], [RegardingObjectIdYomiName], [FriendlyMessage], [ExecutionTimeSpan], [ModifiedOnBehalfBy], [CreatedOnBehalfBy], [OwningExtensionId], [OwnerId], [OwningExtensionIdName], [OwningExtensionTypeCode], [OwnerIdType], [Subtype], [ParentPluginExecutionId]) VALUES (NULL, 0, NULL, NULL, NULL, NULL, 58, N'account', NULL, N'Mass calculate the account.openrevenue rollup field', NULL, NULL, NULL, N'c6acfcbe-f31d-e711-80d3-00155d00662d', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'48bb4226-99fe-455a-bc64-052f4fd879c8', NULL, 30, N'9e8a3e65-58cc-49b2-a5f1-a7bae8f3f29c', 41, NULL, NULL, CAST(N'2017-04-10 14:58:56.000' AS DateTime), NULL, CAST(N'2017-04-10 14:58:54.000' AS DateTime), N'CRM.MSCRMAsyncService.166c4197-86a3-48c5-94aa-2efa8734a50c', 3, NULL, CAST(N'2017-04-10 14:58:56.000' AS DateTime), CAST(N'2017-04-10 13:57:48.000' AS DateTime), NULL, 0, CAST(N'2017-04-10 14:58:44.000' AS DateTime), NULL, NULL, NULL, N'Step Name,Time in Milliseconds
CleanupObjects (1),41
CleanupObjects (1),7
CopyIndex (2),45
CopyIndex (3),1
CopyIndex (4),1
FlattenTable (5),133
FlattenTable (5),4
FlattenTable (5),3
FlattenTable (5),3
FlattenTable (5),3
FlattenTable (5),3
FlattenTable (5),2
FlattenTable (5),3
FlattenTable (5),2
FlattenTable (5),2
FlattenTable (5),4
FlattenTable (5),2
FlattenTable (5),2
FlattenTable (5),2
FlattenTable (5),9
FlattenTable (5),3
FlattenTable (5),4
FlattenTable (5),3
FlattenTable (5),4
FlattenTable (5),3
FlattenTable (5),4
FlattenTable (5),3
FlattenTable (5),3
FlattenTable (5),3
FlattenTable (5),3
FlattenTable (5),3
FlattenTable (5),3
FlattenTable (5),2
FlattenTable (5),3
FlattenTable (5),3
FlattenTable (5),3
FlattenTable (5),3
FlattenTable (5),10
FlattenTable (5),3
FlattenTable (5),3
FlattenTable (5),2
FlattenTable (5),3
FlattenTable (5),3
FlattenTable (5),2
FlattenTable (5),3
FlattenTable (5),2
FlattenTable (5),2
FlattenTable (5),3
FlattenTable (5),3
FlattenTable (5),2
FlattenTable (5),3
FlattenTable (5),4
FlattenTable (5),5
FlattenTable (5),4
FlattenTable (5),3
FlattenTable (5),3
FlattenTable (5),3
FlattenTable (5),2
FlattenTable (5),3
FlattenTable (5),3
FlattenTable (5),3
FlattenTable (5),3
FlattenTable (5),3
FlattenTable (5),2
FlattenTable (5),3
FlattenTable (5),3
FlattenTable (5),2
FlattenTable (5),2
FlattenTable (5),3
FlattenTable (5),4
FlattenTable (5),3
FlattenTable (5),3
FlattenTable (5),3
FlattenTable (5),4
FlattenTable (5),5
FlattenTable (5),3
FlattenTable (5),3
FlattenTable (5),3
FlattenTable (5),3
FlattenTable (5),3
FlattenTable (5),2
FlattenTable (5),4
FlattenTable (5),3
FlattenTable (5),5
FlattenTable (5),6
FlattenTable (5),5
FlattenTable (5),4
FlattenTable (5),5
FlattenTable (5),5
FlattenTable (5),5
FlattenTable (5),5
FlattenTable (5),4
FlattenTable (5),5
FlattenTable (5),5
FlattenTable (5),5
FlattenTable (5),4
FlattenTable (5),5
FlattenTable (5),4
FlattenTable (5),16
FlattenTable (5),5
FlattenTable (5),4
FlattenTable (5),5
FlattenTable (5),5
FlattenTable (5),5
FlattenTable (5),4
FlattenTable (5),4
FlattenTable (5),35
CalculateLeaves (6),64
CalculateTree (7),5
CalculateTree (7),3
CalculateTree (7),2
CalculateTree (7),2
CalculateTree (7),4
CalculateTree (7),3
CalculateTree (7),3
CalculateTree (7),9
CalculateTree (7),2
CalculateTree (7),3
CalculateTree (7),17
CalculateTree (7),2
CalculateTree (7),2
CalculateTree (7),2
CalculateTree (7),2
CalculateTree (7),2
CalculateTree (7),3
CalculateTree (7),2
CalculateTree (7),2
CalculateTree (7),3
CalculateTree (7),2
CalculateTree (7),2
CalculateTree (7),2
CalculateTree (7),13
CalculateTree (7),2
CalculateTree (7),3
CalculateTree (7),2
CalculateTree (7),2
CalculateTree (7),3
CalculateTree (7),3
CalculateTree (7),2
CalculateTree (7),3
CalculateTree (7),4
CalculateTree (7),3
CalculateTree (7),5
CalculateTree (7),3
CalculateTree (7),5
CalculateTree (7),3
CalculateTree (7),3
CalculateTree (7),2
CalculateTree (7),2
CalculateTree (7),2
CalculateTree (7),2
CalculateTree (7),2
CalculateTree (7),2
CalculateTree (7),2
CalculateTree (7),3
CalculateTree (7),2
CalculateTree (7),2
CalculateTree (7),2
CalculateTree (7),3
CalculateTree (7),3
CalculateTree (7),2
CalculateTree (7),2
CalculateTree (7),2
CalculateTree (7),2
CalculateTree (7),2
CalculateTree (7),2
CalculateTree (7),2
CalculateTree (7),3
CalculateTree (7),2
CalculateTree (7),1
CalculateTree (7),1
CalculateTree (7),1
CalculateTree (7),1
CalculateTree (7),1
CalculateTree (7),1
CalculateTree (7),14
CalculateTree (7),1
CalculateTree (7),1
CalculateTree (7),1
CalculateTree (7),2
CalculateTree (7),2
CalculateTree (7),2
CalculateTree (7),2
CalculateTree (7),2
CalculateTree (7),2
CalculateTree (7),1
CalculateTree (7),1
CalculateTree (7),1
CalculateTree (7),1
CalculateTree (7),1
CalculateTree (7),1
CalculateTree (7),3
CalculateTree (7),2
CalculateTree (7),1
CalculateTree (7),1
CalculateTree (7),1
CalculateTree (7),2
CalculateTree (7),1
CalculateTree (7),1
CalculateTree (7),1
CalculateTree (7),1
CalculateTree (7),2
CalculateTree (7),2
CalculateTree (7),2
CalculateTree (7),1
CalculateTree (7),1
CalculateTree (7),1
CalculateTree (7),1
CalculateTree (7),1
CalculateTree (7),1
CalculateTree (7),3
UpdateRollupField (8),56
RetryFailedRecords (9),2
CheckOrphans (10),7
ProcessQueuedRollupJobEntries (22),25
MarkCompletion (23),34
', 2.3129999999999997, NULL, NULL, NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, NULL, 8, 1, NULL)
INSERT [dbo].[AsyncOperationBase] ([MessageName], [Depth], [PrimaryEntityType], [Data], [RegardingObjectId], [WorkflowStageName], [OperationType], [DependencyToken], [RecurrencePattern], [Name], [PostponeUntil], [WorkflowState], [TimeZoneRuleVersionNumber], [OwningBusinessUnit], [IsWaitingForEvent], [CreatedBy], [ErrorCode], [ModifiedBy], [CorrelationId], [RecurrenceStartTime], [StatusCode], [AsyncOperationId], [Sequence], [RequestId], [WorkflowIsBlocked], [ModifiedOn], [Message], [StartedOn], [HostId], [StateCode], [WorkflowActivationId], [CompletedOn], [CorrelationUpdatedTime], [UTCConversionTimeZoneCode], [RetryCount], [CreatedOn], [RegardingObjectIdName], [RegardingObjectTypeCode], [RegardingObjectIdYomiName], [FriendlyMessage], [ExecutionTimeSpan], [ModifiedOnBehalfBy], [CreatedOnBehalfBy], [OwningExtensionId], [OwnerId], [OwningExtensionIdName], [OwningExtensionTypeCode], [OwnerIdType], [Subtype], [ParentPluginExecutionId]) VALUES (NULL, 1, NULL, N'vVXLbptQFJx1pfwD8qI7gtNIXaTUkdp011Zqk0W2xDxsmVcNqZu/78wBhFMDipOousLAeczMOedy7eMSf5AhhYPfiLBFhTUK5PiIGc5wijnvDj05lrSH9OZIzHuPGjFcRr3n2yUWOMEb+PhET4oNrpiV8qp5XSHgPSBSw5aT54LPFRGFtaK3Rkmbx7WzdcrrnL8FVSW0vqOWOdk83OIbvuKailbEzog7G0BevwqyaxVXpl49iIjZVOpw+fjBatW3B2ap1t7X+JW5bbu2wFsqrPGBfVOsWBzrqaLWhl+b6phsKa2RVZZTqcv3gv7NgF86S65+NopN+L60uBl5E+Pt+DVPMdbULfyAGJFlllRbWJ2Vrebe7IlDnMC6q/rubD9Ek2hr1iq93gFOTF9q+Vv6papsEdT1cIB5aYpCq6FR5wyoEYIiM+J1ezFsa3F4L41RedoLii4YF5q15nTE7nI3uUQorGcr1jGzr0WdvW85zkbq8h5V9q83tYltiD4+j50p2xBHM90Zj9SOdzc2azaY3cX0zPu9li03pYf9Pn5C4xnFKzEcswcCe06M+2F0+hF+DUx3PjLdp/NndnZGR/KO7ar/Vff5s3b1y7zD38Rh3LS3P187n0/r47O4P8O9iVPcN4u6/cXOWWn/zr6JO25P2G4Ki71zWajHZPZ8N7T8ZOaSPp3pTaWVTWI/7jPXdJw0TP0bL/AX', NULL, NULL, 13, N'MSCRM_BULKDELETE_94f9b696-f31d-e711-80d3-00155d00662d', NULL, N'Delete completed process sessions for Sync Workflows', NULL, NULL, NULL, N'c6acfcbe-f31d-e711-80d3-00155d00662d', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'9af88752-fe3b-44f1-b873-6108d3ccff59', NULL, 30, N'573a734b-9ba1-4acd-ac33-aae559e53720', 38, NULL, NULL, CAST(N'2017-04-10 14:32:50.000' AS DateTime), NULL, CAST(N'2017-04-10 14:32:50.000' AS DateTime), N'CRM.MSCRMAsyncService.166c4197-86a3-48c5-94aa-2efa8734a50c', 3, NULL, CAST(N'2017-04-10 14:32:50.000' AS DateTime), CAST(N'2017-04-10 13:56:45.000' AS DateTime), NULL, 0, CAST(N'2017-04-10 14:32:20.000' AS DateTime), NULL, NULL, NULL, NULL, 0.172, NULL, NULL, NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, NULL, 8, 1, NULL)
INSERT [dbo].[AsyncOperationBase] ([MessageName], [Depth], [PrimaryEntityType], [Data], [RegardingObjectId], [WorkflowStageName], [OperationType], [DependencyToken], [RecurrencePattern], [Name], [PostponeUntil], [WorkflowState], [TimeZoneRuleVersionNumber], [OwningBusinessUnit], [IsWaitingForEvent], [CreatedBy], [ErrorCode], [ModifiedBy], [CorrelationId], [RecurrenceStartTime], [StatusCode], [AsyncOperationId], [Sequence], [RequestId], [WorkflowIsBlocked], [ModifiedOn], [Message], [StartedOn], [HostId], [StateCode], [WorkflowActivationId], [CompletedOn], [CorrelationUpdatedTime], [UTCConversionTimeZoneCode], [RetryCount], [CreatedOn], [RegardingObjectIdName], [RegardingObjectTypeCode], [RegardingObjectIdYomiName], [FriendlyMessage], [ExecutionTimeSpan], [ModifiedOnBehalfBy], [CreatedOnBehalfBy], [OwningExtensionId], [OwnerId], [OwningExtensionIdName], [OwningExtensionTypeCode], [OwnerIdType], [Subtype], [ParentPluginExecutionId]) VALUES (NULL, 0, NULL, NULL, NULL, NULL, 35, NULL, NULL, N'Recurring Series Expansion job', NULL, NULL, NULL, N'c6acfcbe-f31d-e711-80d3-00155d00662d', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'dae2d88a-516c-40be-9a7b-60523a1df7a3', NULL, 30, N'856c611c-c510-4b0d-a9f4-ad370e848229', 28, NULL, NULL, CAST(N'2017-04-10 14:32:21.000' AS DateTime), NULL, CAST(N'2017-04-10 14:32:20.000' AS DateTime), N'CRM.MSCRMAsyncService.166c4197-86a3-48c5-94aa-2efa8734a50c', 3, NULL, CAST(N'2017-04-10 14:32:21.000' AS DateTime), CAST(N'2017-04-10 13:56:44.000' AS DateTime), NULL, 0, CAST(N'2017-04-10 14:32:18.000' AS DateTime), NULL, NULL, NULL, NULL, 0.52, NULL, NULL, NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, NULL, 8, 1, NULL)
INSERT [dbo].[AsyncOperationBase] ([MessageName], [Depth], [PrimaryEntityType], [Data], [RegardingObjectId], [WorkflowStageName], [OperationType], [DependencyToken], [RecurrencePattern], [Name], [PostponeUntil], [WorkflowState], [TimeZoneRuleVersionNumber], [OwningBusinessUnit], [IsWaitingForEvent], [CreatedBy], [ErrorCode], [ModifiedBy], [CorrelationId], [RecurrenceStartTime], [StatusCode], [AsyncOperationId], [Sequence], [RequestId], [WorkflowIsBlocked], [ModifiedOn], [Message], [StartedOn], [HostId], [StateCode], [WorkflowActivationId], [CompletedOn], [CorrelationUpdatedTime], [UTCConversionTimeZoneCode], [RetryCount], [CreatedOn], [RegardingObjectIdName], [RegardingObjectTypeCode], [RegardingObjectIdYomiName], [FriendlyMessage], [ExecutionTimeSpan], [ModifiedOnBehalfBy], [CreatedOnBehalfBy], [OwningExtensionId], [OwnerId], [OwningExtensionIdName], [OwningExtensionTypeCode], [OwnerIdType], [Subtype], [ParentPluginExecutionId]) VALUES (NULL, 0, NULL, NULL, NULL, NULL, 9, NULL, N'FREQ=DAILY', N'SQM Data Collection', CAST(N'2017-04-10 17:00:00.000' AS DateTime), NULL, 0, N'c6acfcbe-f31d-e711-80d3-00155d00662d', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'ba073fc2-4b84-4929-b453-f505991a5c92', CAST(N'2017-04-09 17:00:00.000' AS DateTime), 10, N'991638a5-0ac7-46cb-9d86-afebac2a8856', 10, NULL, NULL, CAST(N'2017-04-10 14:32:18.000' AS DateTime), NULL, CAST(N'2017-04-10 14:32:15.000' AS DateTime), N'CRM.MSCRMAsyncService.166c4197-86a3-48c5-94aa-2efa8734a50c', 1, NULL, NULL, CAST(N'2017-04-10 13:56:44.000' AS DateTime), NULL, 0, CAST(N'2017-04-10 13:56:44.000' AS DateTime), NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, NULL, 8, 1, NULL)
INSERT [dbo].[AsyncOperationBase] ([MessageName], [Depth], [PrimaryEntityType], [Data], [RegardingObjectId], [WorkflowStageName], [OperationType], [DependencyToken], [RecurrencePattern], [Name], [PostponeUntil], [WorkflowState], [TimeZoneRuleVersionNumber], [OwningBusinessUnit], [IsWaitingForEvent], [CreatedBy], [ErrorCode], [ModifiedBy], [CorrelationId], [RecurrenceStartTime], [StatusCode], [AsyncOperationId], [Sequence], [RequestId], [WorkflowIsBlocked], [ModifiedOn], [Message], [StartedOn], [HostId], [StateCode], [WorkflowActivationId], [CompletedOn], [CorrelationUpdatedTime], [UTCConversionTimeZoneCode], [RetryCount], [CreatedOn], [RegardingObjectIdName], [RegardingObjectTypeCode], [RegardingObjectIdYomiName], [FriendlyMessage], [ExecutionTimeSpan], [ModifiedOnBehalfBy], [CreatedOnBehalfBy], [OwningExtensionId], [OwnerId], [OwningExtensionIdName], [OwningExtensionTypeCode], [OwnerIdType], [Subtype], [ParentPluginExecutionId]) VALUES (NULL, 0, NULL, NULL, NULL, NULL, 57, NULL, NULL, N'Calculate rollup fields for the account entity', NULL, NULL, NULL, N'c6acfcbe-f31d-e711-80d3-00155d00662d', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'fd1722d6-ad0b-4901-83f0-0111a92d3e60', NULL, 30, N'c53c357c-9a1a-4889-8110-c14d2d856b16', 40, NULL, NULL, CAST(N'2017-04-10 14:58:45.000' AS DateTime), NULL, CAST(N'2017-04-10 14:58:44.000' AS DateTime), N'CRM.MSCRMAsyncService.166c4197-86a3-48c5-94aa-2efa8734a50c', 3, NULL, CAST(N'2017-04-10 14:58:45.000' AS DateTime), CAST(N'2017-04-10 13:57:47.000' AS DateTime), NULL, 0, CAST(N'2017-04-10 14:58:39.000' AS DateTime), NULL, NULL, NULL, NULL, 1.2349999999999999, NULL, NULL, NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, NULL, 8, 1, NULL)
INSERT [dbo].[AsyncOperationBase] ([MessageName], [Depth], [PrimaryEntityType], [Data], [RegardingObjectId], [WorkflowStageName], [OperationType], [DependencyToken], [RecurrencePattern], [Name], [PostponeUntil], [WorkflowState], [TimeZoneRuleVersionNumber], [OwningBusinessUnit], [IsWaitingForEvent], [CreatedBy], [ErrorCode], [ModifiedBy], [CorrelationId], [RecurrenceStartTime], [StatusCode], [AsyncOperationId], [Sequence], [RequestId], [WorkflowIsBlocked], [ModifiedOn], [Message], [StartedOn], [HostId], [StateCode], [WorkflowActivationId], [CompletedOn], [CorrelationUpdatedTime], [UTCConversionTimeZoneCode], [RetryCount], [CreatedOn], [RegardingObjectIdName], [RegardingObjectTypeCode], [RegardingObjectIdYomiName], [FriendlyMessage], [ExecutionTimeSpan], [ModifiedOnBehalfBy], [CreatedOnBehalfBy], [OwningExtensionId], [OwnerId], [OwningExtensionIdName], [OwningExtensionTypeCode], [OwnerIdType], [Subtype], [ParentPluginExecutionId]) VALUES (NULL, 1, NULL, N'7VdNb9NQEJwzEv/ByoFb6qSVQAKTSlBugMTHgatJnMSKY4fEaei/Z3Zs16Z+DjilEofKchK/2Z2d3bdvkwS4xE+skcDDNSJssUOMDCleY4AxzjDiu0ckxZTrM6IpFkL3yDHHkFbP+XSJCZ7iCQK8IZJghSt6Jbxz3lcI+R6SqYiWMs5Lft6R0biWRHNsuObzOug6433B14yqFlw9p5YRo/n4hg94jy9UtCT3mrwDB3P8T5iHyngn9VaDiJxFph6vAJ+YrdXthl6Wa40VuHluy6pN8IwKc7xi3czWoniqqVnF4s+les5oCVcjZZZS6ZDPGfGVAzedG1713pjtgs9T2Q0Yd6G4VXzbT4uYU7fxh+SI5BmS9abc7Y0yC2VpPdHmCVVdy++7+iHqwRYzc1Pvt1jnxBKxbYmbxs0tXyqvux5TMc6UUcHuObQZQ7GT9lT0c1HBpjrrCrOM8EPYtWq4L/0vOjT3V7Dnp1M1jO6twizXjFid0Fm5w24dGe1mWs3Zs7YLQ56xIRkyddKSubR1ju+tst01VTd0KbWzkpentt0ntb4KOb/FfAfa7TfGi5M9R3/l6Tvq1LZpnpU22jznLt9qClVYwNXfJ9bjNHucZv//NOs/J9xaxp1ajp+0RN26Yl939+JBsVfksX4+KI7pcWGhzk4sdXc7bE5Lm90uv8qm1tPsN1tLpb/dc/279CH7uj5poVaLvqq+q/ru6Sk7+ifUveMPOYEN6f61GWjFqvtOE9S0f9R3YaxMpo1OmjQmrrH28azjfeXKZ02eWNO6yHSnWjft3vI6bmcajv1rmOAX', NULL, NULL, 13, N'MSCRM_BULKDELETE_94f9b696-f31d-e711-80d3-00155d00662d', NULL, N'Delete completed system jobs', NULL, NULL, NULL, N'c6acfcbe-f31d-e711-80d3-00155d00662d', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'4daeef2d-e807-4e64-a869-dd8d932a6310', NULL, 30, N'ada2c255-b34c-4aee-a14a-c1dd36776442', 36, NULL, NULL, CAST(N'2017-04-10 14:32:31.000' AS DateTime), NULL, CAST(N'2017-04-10 14:32:30.000' AS DateTime), N'CRM.MSCRMAsyncService.166c4197-86a3-48c5-94aa-2efa8734a50c', 3, NULL, CAST(N'2017-04-10 14:32:31.000' AS DateTime), CAST(N'2017-04-10 13:56:44.000' AS DateTime), NULL, 0, CAST(N'2017-04-10 14:32:20.000' AS DateTime), NULL, NULL, NULL, NULL, 0.54699999999999993, NULL, NULL, NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, NULL, 8, 1, NULL)
INSERT [dbo].[AsyncOperationBase] ([MessageName], [Depth], [PrimaryEntityType], [Data], [RegardingObjectId], [WorkflowStageName], [OperationType], [DependencyToken], [RecurrencePattern], [Name], [PostponeUntil], [WorkflowState], [TimeZoneRuleVersionNumber], [OwningBusinessUnit], [IsWaitingForEvent], [CreatedBy], [ErrorCode], [ModifiedBy], [CorrelationId], [RecurrenceStartTime], [StatusCode], [AsyncOperationId], [Sequence], [RequestId], [WorkflowIsBlocked], [ModifiedOn], [Message], [StartedOn], [HostId], [StateCode], [WorkflowActivationId], [CompletedOn], [CorrelationUpdatedTime], [UTCConversionTimeZoneCode], [RetryCount], [CreatedOn], [RegardingObjectIdName], [RegardingObjectTypeCode], [RegardingObjectIdYomiName], [FriendlyMessage], [ExecutionTimeSpan], [ModifiedOnBehalfBy], [CreatedOnBehalfBy], [OwningExtensionId], [OwnerId], [OwningExtensionIdName], [OwningExtensionTypeCode], [OwnerIdType], [Subtype], [ParentPluginExecutionId]) VALUES (NULL, 0, NULL, NULL, NULL, NULL, 49, NULL, N'FREQ=YEARLY;INTERVAL=10', N'Post To Yammer job', CAST(N'2027-04-09 17:00:00.000' AS DateTime), NULL, 0, N'c6acfcbe-f31d-e711-80d3-00155d00662d', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'3d3f16ca-7898-4fbb-9437-4d0ac56f3168', CAST(N'2017-04-09 17:00:00.000' AS DateTime), 10, N'6ef45a82-1aab-48ab-8301-cd753f265214', 19, NULL, NULL, CAST(N'2017-04-10 14:32:18.000' AS DateTime), NULL, CAST(N'2017-04-10 14:32:15.000' AS DateTime), N'CRM.MSCRMAsyncService.166c4197-86a3-48c5-94aa-2efa8734a50c', 1, NULL, NULL, CAST(N'2017-04-10 13:56:45.000' AS DateTime), NULL, 0, CAST(N'2017-04-10 13:56:45.000' AS DateTime), NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, NULL, 8, 1, NULL)
INSERT [dbo].[AsyncOperationBase] ([MessageName], [Depth], [PrimaryEntityType], [Data], [RegardingObjectId], [WorkflowStageName], [OperationType], [DependencyToken], [RecurrencePattern], [Name], [PostponeUntil], [WorkflowState], [TimeZoneRuleVersionNumber], [OwningBusinessUnit], [IsWaitingForEvent], [CreatedBy], [ErrorCode], [ModifiedBy], [CorrelationId], [RecurrenceStartTime], [StatusCode], [AsyncOperationId], [Sequence], [RequestId], [WorkflowIsBlocked], [ModifiedOn], [Message], [StartedOn], [HostId], [StateCode], [WorkflowActivationId], [CompletedOn], [CorrelationUpdatedTime], [UTCConversionTimeZoneCode], [RetryCount], [CreatedOn], [RegardingObjectIdName], [RegardingObjectTypeCode], [RegardingObjectIdYomiName], [FriendlyMessage], [ExecutionTimeSpan], [ModifiedOnBehalfBy], [CreatedOnBehalfBy], [OwningExtensionId], [OwnerId], [OwningExtensionIdName], [OwningExtensionTypeCode], [OwnerIdType], [Subtype], [ParentPluginExecutionId]) VALUES (NULL, 0, NULL, NULL, NULL, NULL, 40, NULL, N'FREQ=DAILY', N'Goal Rollup job', CAST(N'2017-04-10 17:00:00.000' AS DateTime), NULL, 0, N'c6acfcbe-f31d-e711-80d3-00155d00662d', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'60780a50-d0cc-4055-a03c-31affb3163a9', CAST(N'2017-04-09 17:00:00.000' AS DateTime), 10, N'4d1d25d5-8a71-4e31-bab5-d1866147e5db', 18, NULL, NULL, CAST(N'2017-04-10 14:32:18.000' AS DateTime), NULL, CAST(N'2017-04-10 14:32:15.000' AS DateTime), N'CRM.MSCRMAsyncService.166c4197-86a3-48c5-94aa-2efa8734a50c', 1, NULL, NULL, CAST(N'2017-04-10 13:56:45.000' AS DateTime), NULL, 0, CAST(N'2017-04-10 13:56:45.000' AS DateTime), NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, NULL, 8, 1, NULL)
INSERT [dbo].[AsyncOperationBase] ([MessageName], [Depth], [PrimaryEntityType], [Data], [RegardingObjectId], [WorkflowStageName], [OperationType], [DependencyToken], [RecurrencePattern], [Name], [PostponeUntil], [WorkflowState], [TimeZoneRuleVersionNumber], [OwningBusinessUnit], [IsWaitingForEvent], [CreatedBy], [ErrorCode], [ModifiedBy], [CorrelationId], [RecurrenceStartTime], [StatusCode], [AsyncOperationId], [Sequence], [RequestId], [WorkflowIsBlocked], [ModifiedOn], [Message], [StartedOn], [HostId], [StateCode], [WorkflowActivationId], [CompletedOn], [CorrelationUpdatedTime], [UTCConversionTimeZoneCode], [RetryCount], [CreatedOn], [RegardingObjectIdName], [RegardingObjectTypeCode], [RegardingObjectIdYomiName], [FriendlyMessage], [ExecutionTimeSpan], [ModifiedOnBehalfBy], [CreatedOnBehalfBy], [OwningExtensionId], [OwnerId], [OwningExtensionIdName], [OwningExtensionTypeCode], [OwnerIdType], [Subtype], [ParentPluginExecutionId]) VALUES (NULL, 0, NULL, NULL, NULL, NULL, 68, NULL, N'FREQ=MINUTELY;INTERVAL=30', N'Resource Booking Sync job', CAST(N'9999-12-31 23:59:59.000' AS DateTime), NULL, 0, N'c6acfcbe-f31d-e711-80d3-00155d00662d', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'7d74995d-ba6b-4e83-8f8a-274581cb6000', CAST(N'2017-04-09 17:00:00.000' AS DateTime), 10, N'b30c3545-c8e6-46df-9736-d1d1c224493c', 20, NULL, NULL, CAST(N'2017-04-10 13:56:45.000' AS DateTime), NULL, NULL, NULL, 1, NULL, NULL, CAST(N'2017-04-10 13:56:45.000' AS DateTime), NULL, NULL, CAST(N'2017-04-10 13:56:45.000' AS DateTime), NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, NULL, 8, 1, NULL)
INSERT [dbo].[AsyncOperationBase] ([MessageName], [Depth], [PrimaryEntityType], [Data], [RegardingObjectId], [WorkflowStageName], [OperationType], [DependencyToken], [RecurrencePattern], [Name], [PostponeUntil], [WorkflowState], [TimeZoneRuleVersionNumber], [OwningBusinessUnit], [IsWaitingForEvent], [CreatedBy], [ErrorCode], [ModifiedBy], [CorrelationId], [RecurrenceStartTime], [StatusCode], [AsyncOperationId], [Sequence], [RequestId], [WorkflowIsBlocked], [ModifiedOn], [Message], [StartedOn], [HostId], [StateCode], [WorkflowActivationId], [CompletedOn], [CorrelationUpdatedTime], [UTCConversionTimeZoneCode], [RetryCount], [CreatedOn], [RegardingObjectIdName], [RegardingObjectTypeCode], [RegardingObjectIdYomiName], [FriendlyMessage], [ExecutionTimeSpan], [ModifiedOnBehalfBy], [CreatedOnBehalfBy], [OwningExtensionId], [OwnerId], [OwningExtensionIdName], [OwningExtensionTypeCode], [OwnerIdType], [Subtype], [ParentPluginExecutionId]) VALUES (NULL, 1, NULL, N'rVRNT4NQEJyzif+B9OCN0mriQZEmWm9q4sehV4QHJaVAgFb9984uENoUmzQxL7RlZ3d2dt+kLmb4xhopLGxhUKJCghwZ7jDCFGNM+G0RyRAwHhLNECu6QY0INrOu+TaDh3OcwcU9kRQrzFmV8qn5zOHz2ydT0y1jnxv+rsgoXEuiNQrGHJ4vPWM+V/zMqSpm9JJaJuzmYIFnPOGdipbkXpN3NMCc/AuzrRNXql52YMjZTGrxuHjltLK3H1bJrD3W4FJZtlvzcEGFNW65N8mVLpbuVLIS5a9VdcRuKaNGJ8uo1OZ7Tnw1gIvOgqe/G8mN+R5o3oh9Y+3b9Zf7lI41dQu/Tw6jlQUzNlqbqXJfZ274Dnl83a7M96l+MCewJZxc1DsHrBGxVNlK4qKxaPnkDsIBHYF6NtSJGv9aA9qEIWDEKGaYL5miIdcOpcbFFZKZkzvUaM17ks42fWUz5lNRpXVb3e+m5Z7+MY+zN9EhunsbQ7WdVzrMZXTfV70fnSOOdDUie3pUz4imF84pvaPWLd3+vB2PCesplX2/D0beWBkQE382k1a6pd28B57jeaLh2D+Lh18=', NULL, NULL, 13, N'MSCRM_BULKDELETE_94f9b696-f31d-e711-80d3-00155d00662d', NULL, N'Delete Plug-in Trace Log Records', NULL, NULL, NULL, N'c6acfcbe-f31d-e711-80d3-00155d00662d', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'3ff36bc4-fefe-4d70-b1c1-3b95bf8aab6b', NULL, 30, N'6acb1776-746f-43ec-8bb8-e18730ae2be4', 39, NULL, NULL, CAST(N'2017-04-10 14:33:01.000' AS DateTime), NULL, CAST(N'2017-04-10 14:33:00.000' AS DateTime), N'CRM.MSCRMAsyncService.166c4197-86a3-48c5-94aa-2efa8734a50c', 3, NULL, CAST(N'2017-04-10 14:33:01.000' AS DateTime), CAST(N'2017-04-10 14:29:50.000' AS DateTime), NULL, 0, CAST(N'2017-04-10 14:32:20.000' AS DateTime), NULL, NULL, NULL, NULL, 0.313, NULL, NULL, NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, NULL, 8, 1, NULL)
INSERT [dbo].[AsyncOperationBase] ([MessageName], [Depth], [PrimaryEntityType], [Data], [RegardingObjectId], [WorkflowStageName], [OperationType], [DependencyToken], [RecurrencePattern], [Name], [PostponeUntil], [WorkflowState], [TimeZoneRuleVersionNumber], [OwningBusinessUnit], [IsWaitingForEvent], [CreatedBy], [ErrorCode], [ModifiedBy], [CorrelationId], [RecurrenceStartTime], [StatusCode], [AsyncOperationId], [Sequence], [RequestId], [WorkflowIsBlocked], [ModifiedOn], [Message], [StartedOn], [HostId], [StateCode], [WorkflowActivationId], [CompletedOn], [CorrelationUpdatedTime], [UTCConversionTimeZoneCode], [RetryCount], [CreatedOn], [RegardingObjectIdName], [RegardingObjectTypeCode], [RegardingObjectIdYomiName], [FriendlyMessage], [ExecutionTimeSpan], [ModifiedOnBehalfBy], [CreatedOnBehalfBy], [OwningExtensionId], [OwnerId], [OwningExtensionIdName], [OwningExtensionTypeCode], [OwnerIdType], [Subtype], [ParentPluginExecutionId]) VALUES (NULL, 0, NULL, N'DYrBDcAgEMO8EBIgoHQc4Oj+I9TKI46VSyFzCNNMorsePqmx5CktbfhMbKpdtK80/FVd8AM=', NULL, NULL, 58, N'account', N'FREQ=YEARLY;INTERVAL=10', N'Mass calculate the account.opendeals rollup field', CAST(N'2027-04-10 14:57:47.000' AS DateTime), NULL, 0, N'c6acfcbe-f31d-e711-80d3-00155d00662d', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'29564ea8-730d-40c6-8fe6-b44a0329c3c5', CAST(N'2017-04-10 14:57:47.000' AS DateTime), 10, N'04aa7dee-3e0c-4eb0-936c-e523751cb4b1', 22, NULL, NULL, CAST(N'2017-04-10 14:58:44.000' AS DateTime), NULL, CAST(N'2017-04-10 14:58:44.000' AS DateTime), N'CRM.MSCRMAsyncService.166c4197-86a3-48c5-94aa-2efa8734a50c', 1, NULL, NULL, CAST(N'2017-04-10 13:57:47.000' AS DateTime), NULL, 0, CAST(N'2017-04-10 13:57:47.000' AS DateTime), NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, NULL, 8, 1, NULL)
INSERT [dbo].[AsyncOperationBase] ([MessageName], [Depth], [PrimaryEntityType], [Data], [RegardingObjectId], [WorkflowStageName], [OperationType], [DependencyToken], [RecurrencePattern], [Name], [PostponeUntil], [WorkflowState], [TimeZoneRuleVersionNumber], [OwningBusinessUnit], [IsWaitingForEvent], [CreatedBy], [ErrorCode], [ModifiedBy], [CorrelationId], [RecurrenceStartTime], [StatusCode], [AsyncOperationId], [Sequence], [RequestId], [WorkflowIsBlocked], [ModifiedOn], [Message], [StartedOn], [HostId], [StateCode], [WorkflowActivationId], [CompletedOn], [CorrelationUpdatedTime], [UTCConversionTimeZoneCode], [RetryCount], [CreatedOn], [RegardingObjectIdName], [RegardingObjectTypeCode], [RegardingObjectIdYomiName], [FriendlyMessage], [ExecutionTimeSpan], [ModifiedOnBehalfBy], [CreatedOnBehalfBy], [OwningExtensionId], [OwnerId], [OwningExtensionIdName], [OwningExtensionTypeCode], [OwnerIdType], [Subtype], [ParentPluginExecutionId]) VALUES (NULL, 0, NULL, N'JYoBDoAgDMT6IRNRCH7HAfv/Eywxy+2arcHLYBHOtA8Kj31Jldtvl0JK9779ZmqEGZzajQ8=', NULL, NULL, 58, N'knowledgearticle', N'FREQ=YEARLY;INTERVAL=10', N'Mass calculate the knowledgearticle.knowledgearticleviews rollup field', CAST(N'2027-04-10 14:57:48.000' AS DateTime), NULL, 0, N'c6acfcbe-f31d-e711-80d3-00155d00662d', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'c4473377-1518-4d8b-8b2d-9ce61bde892b', CAST(N'2017-04-10 14:57:48.000' AS DateTime), 10, N'0e36019a-e3e5-4edd-a2ac-f83deb1ca4a7', 25, NULL, NULL, CAST(N'2017-04-10 14:58:44.000' AS DateTime), NULL, CAST(N'2017-04-10 14:58:44.000' AS DateTime), N'CRM.MSCRMAsyncService.166c4197-86a3-48c5-94aa-2efa8734a50c', 1, NULL, NULL, CAST(N'2017-04-10 13:57:48.000' AS DateTime), NULL, 0, CAST(N'2017-04-10 13:57:48.000' AS DateTime), NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, NULL, 8, 1, NULL)
INSERT [dbo].[AsyncOperationBase] ([MessageName], [Depth], [PrimaryEntityType], [Data], [RegardingObjectId], [WorkflowStageName], [OperationType], [DependencyToken], [RecurrencePattern], [Name], [PostponeUntil], [WorkflowState], [TimeZoneRuleVersionNumber], [OwningBusinessUnit], [IsWaitingForEvent], [CreatedBy], [ErrorCode], [ModifiedBy], [CorrelationId], [RecurrenceStartTime], [StatusCode], [AsyncOperationId], [Sequence], [RequestId], [WorkflowIsBlocked], [ModifiedOn], [Message], [StartedOn], [HostId], [StateCode], [WorkflowActivationId], [CompletedOn], [CorrelationUpdatedTime], [UTCConversionTimeZoneCode], [RetryCount], [CreatedOn], [RegardingObjectIdName], [RegardingObjectTypeCode], [RegardingObjectIdYomiName], [FriendlyMessage], [ExecutionTimeSpan], [ModifiedOnBehalfBy], [CreatedOnBehalfBy], [OwningExtensionId], [OwnerId], [OwningExtensionIdName], [OwningExtensionTypeCode], [OwnerIdType], [Subtype], [ParentPluginExecutionId]) VALUES (NULL, 0, NULL, N'y2bIY8hnKGfIYUhlSGFIB5KJDEUMJQyZDMlgMQA=', NULL, NULL, 57, NULL, N'FREQ=HOURLY;INTERVAL=1', N'Calculate rollup fields for the knowledgearticle entity', CAST(N'2017-04-10 15:57:48.000' AS DateTime), NULL, 0, N'c6acfcbe-f31d-e711-80d3-00155d00662d', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'fa71bc6c-33dc-4828-86b4-ec8f1c36539c', CAST(N'2017-04-10 14:57:48.000' AS DateTime), 10, N'c805522d-bbb3-4375-815d-fe9bcb847978', 24, NULL, NULL, CAST(N'2017-04-10 14:58:44.000' AS DateTime), NULL, CAST(N'2017-04-10 14:58:44.000' AS DateTime), N'CRM.MSCRMAsyncService.166c4197-86a3-48c5-94aa-2efa8734a50c', 1, NULL, NULL, CAST(N'2017-04-10 13:57:48.000' AS DateTime), NULL, 0, CAST(N'2017-04-10 13:57:48.000' AS DateTime), NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, NULL, 8, 1, NULL)
SET IDENTITY_INSERT [dbo].[AsyncOperationBase] OFF
/****** Object:  Index [fndx_for_cascaderelationship_lk_asyncoperation_workflowactivationid]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_lk_asyncoperation_workflowactivationid] ON [dbo].[AsyncOperationBase]
(
	[WorkflowActivationId] ASC
)
INCLUDE ( 	[OperationType]) 
WHERE ([WorkflowActivationId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_RegardingObjectId_AsyncOperation]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_RegardingObjectId_AsyncOperation] ON [dbo].[AsyncOperationBase]
(
	[RegardingObjectId] ASC
)
INCLUDE ( 	[RegardingObjectTypeCode],
	[StatusCode],
	[StateCode],
	[OperationType]) 
WHERE ([RegardingObjectId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_RequestId_AsyncOperation]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_RequestId_AsyncOperation] ON [dbo].[AsyncOperationBase]
(
	[RequestId] ASC
)
WHERE ([RequestId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_StartedOn_AsyncOperation]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_StartedOn_AsyncOperation] ON [dbo].[AsyncOperationBase]
(
	[StartedOn] DESC
)
INCLUDE ( 	[RegardingObjectTypeCode]) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_Cover_AsyncOperation]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Cover_AsyncOperation] ON [dbo].[AsyncOperationBase]
(
	[StateCode] ASC,
	[Sequence] ASC,
	[DependencyToken] ASC,
	[PostponeUntil] ASC,
	[Subtype] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_business_unit_asyncoperation]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_business_unit_asyncoperation] ON [dbo].[AsyncOperationBase]
(
	[OwningBusinessUnit] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_OperationType_StartedOn_AsyncOperation]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_OperationType_StartedOn_AsyncOperation] ON [dbo].[AsyncOperationBase]
(
	[OperationType] ASC,
	[StartedOn] DESC
)
INCLUDE ( 	[RegardingObjectTypeCode]) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_RecurrenceStateTime_AsyncOperation]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_RecurrenceStateTime_AsyncOperation] ON [dbo].[AsyncOperationBase]
(
	[RecurrenceStartTime] ASC,
	[Name] ASC,
	[StatusCode] ASC,
	[OwnerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_SpecialTransitions_AsyncOperation]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_SpecialTransitions_AsyncOperation] ON [dbo].[AsyncOperationBase]
(
	[HostId] ASC,
	[StateCode] ASC,
	[StatusCode] ASC
)
INCLUDE ( 	[AsyncOperationId]) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_StateStatus_AsyncOperation]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_StateStatus_AsyncOperation] ON [dbo].[AsyncOperationBase]
(
	[AsyncOperationId] ASC,
	[StateCode] ASC
)
INCLUDE ( 	[StatusCode],
	[CreatedBy]) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
