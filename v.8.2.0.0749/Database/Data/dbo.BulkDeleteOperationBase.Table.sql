USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[BulkDeleteOperationBase]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BulkDeleteOperationBase](
	[OwningUser] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime] NULL,
	[BulkDeleteOperationId] [uniqueidentifier] NOT NULL,
	[IsRecurring] [bit] NOT NULL CONSTRAINT [DF_BulkDeleteOperationBase_IsRecurring]  DEFAULT ((0)),
	[ProcessingQEIndex] [int] NULL CONSTRAINT [DF_BulkDeleteOperationBase_ProcessingQEIndex]  DEFAULT ((0)),
	[AsyncOperationId] [uniqueidentifier] NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[OrderedQuerySetXml] [nvarchar](max) NULL,
	[FailureCount] [int] NULL CONSTRAINT [DF_BulkDeleteOperationBase_FailureCount]  DEFAULT ((0)),
	[ModifiedBy] [uniqueidentifier] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[SuccessCount] [int] NULL CONSTRAINT [DF_BulkDeleteOperationBase_SuccessCount]  DEFAULT ((0)),
	[CreatedOn] [datetime] NOT NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[OwnerId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_BulkDeleteOperationBase_OwnerId]  DEFAULT ('00000000-0000-0000-0000-000000000000'),
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_BulkDeleteOperationBase_OwnerIdType]  DEFAULT ((8)),
 CONSTRAINT [cndx_PrimaryKey_BulkDeleteOperation] PRIMARY KEY CLUSTERED 
(
	[BulkDeleteOperationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
INSERT [dbo].[BulkDeleteOperationBase] ([OwningUser], [ModifiedOn], [BulkDeleteOperationId], [IsRecurring], [ProcessingQEIndex], [AsyncOperationId], [UTCConversionTimeZoneCode], [OrderedQuerySetXml], [FailureCount], [ModifiedBy], [CreatedBy], [OwningBusinessUnit], [TimeZoneRuleVersionNumber], [SuccessCount], [CreatedOn], [ModifiedOnBehalfBy], [OwnerId], [CreatedOnBehalfBy], [OwnerIdType]) VALUES (N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', CAST(N'2017-04-10 14:29:50.000' AS DateTime), N'623e63ed-b897-403b-98d2-169a1e615769', 1, 0, N'e7467b27-fa1d-e711-80d3-00155d00662d', NULL, NULL, 0, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'c6acfcbe-f31d-e711-80d3-00155d00662d', NULL, 0, CAST(N'2017-04-10 14:29:50.000' AS DateTime), NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, 8)
INSERT [dbo].[BulkDeleteOperationBase] ([OwningUser], [ModifiedOn], [BulkDeleteOperationId], [IsRecurring], [ProcessingQEIndex], [AsyncOperationId], [UTCConversionTimeZoneCode], [OrderedQuerySetXml], [FailureCount], [ModifiedBy], [CreatedBy], [OwningBusinessUnit], [TimeZoneRuleVersionNumber], [SuccessCount], [CreatedOn], [ModifiedOnBehalfBy], [OwnerId], [CreatedOnBehalfBy], [OwnerIdType]) VALUES (N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', CAST(N'2017-04-10 13:56:45.000' AS DateTime), N'43f5d575-1807-4456-a1b1-342780b7f097', 1, 0, N'8e40c3a2-daf2-4b4d-bcba-3a4587e7affa', NULL, NULL, 0, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'c6acfcbe-f31d-e711-80d3-00155d00662d', NULL, 0, CAST(N'2017-04-10 13:56:45.000' AS DateTime), NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, 8)
INSERT [dbo].[BulkDeleteOperationBase] ([OwningUser], [ModifiedOn], [BulkDeleteOperationId], [IsRecurring], [ProcessingQEIndex], [AsyncOperationId], [UTCConversionTimeZoneCode], [OrderedQuerySetXml], [FailureCount], [ModifiedBy], [CreatedBy], [OwningBusinessUnit], [TimeZoneRuleVersionNumber], [SuccessCount], [CreatedOn], [ModifiedOnBehalfBy], [OwnerId], [CreatedOnBehalfBy], [OwnerIdType]) VALUES (N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', CAST(N'2017-04-10 14:33:00.000' AS DateTime), N'47a75f4f-2cb9-4c67-a58e-7a2b8a9b3a43', 0, 0, N'6acb1776-746f-43ec-8bb8-e18730ae2be4', NULL, N'<?xml version="1.0" encoding="utf-16"?>
<ArrayOfString xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <string>&lt;fetch distinct="false" no-lock="false" mapping="logical"&gt;&lt;entity name="plugintracelog"&gt;&lt;attribute name="plugintracelogid" /&gt;&lt;filter type="and"&gt;&lt;condition attribute="createdon" operator="olderthan-x-days" value="1" /&gt;&lt;/filter&gt;&lt;/entity&gt;&lt;/fetch&gt;</string>
</ArrayOfString>', 0, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'c6acfcbe-f31d-e711-80d3-00155d00662d', NULL, 0, CAST(N'2017-04-10 14:33:00.000' AS DateTime), NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, 8)
INSERT [dbo].[BulkDeleteOperationBase] ([OwningUser], [ModifiedOn], [BulkDeleteOperationId], [IsRecurring], [ProcessingQEIndex], [AsyncOperationId], [UTCConversionTimeZoneCode], [OrderedQuerySetXml], [FailureCount], [ModifiedBy], [CreatedBy], [OwningBusinessUnit], [TimeZoneRuleVersionNumber], [SuccessCount], [CreatedOn], [ModifiedOnBehalfBy], [OwnerId], [CreatedOnBehalfBy], [OwnerIdType]) VALUES (N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', CAST(N'2017-04-10 13:56:44.000' AS DateTime), N'04291697-17e2-432e-9cf5-8561c0c1a33e', 1, 0, N'e3573922-a451-476e-a5e9-37e136dc39c6', NULL, NULL, 0, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'c6acfcbe-f31d-e711-80d3-00155d00662d', NULL, 0, CAST(N'2017-04-10 13:56:44.000' AS DateTime), NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, 8)
INSERT [dbo].[BulkDeleteOperationBase] ([OwningUser], [ModifiedOn], [BulkDeleteOperationId], [IsRecurring], [ProcessingQEIndex], [AsyncOperationId], [UTCConversionTimeZoneCode], [OrderedQuerySetXml], [FailureCount], [ModifiedBy], [CreatedBy], [OwningBusinessUnit], [TimeZoneRuleVersionNumber], [SuccessCount], [CreatedOn], [ModifiedOnBehalfBy], [OwnerId], [CreatedOnBehalfBy], [OwnerIdType]) VALUES (N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', CAST(N'2017-04-10 14:29:50.000' AS DateTime), N'699415fa-4bd9-4686-8e6e-89af7a19c85b', 1, 0, N'ffcaa895-7db7-4b4a-bde8-3916859f5ca7', NULL, NULL, 0, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'c6acfcbe-f31d-e711-80d3-00155d00662d', NULL, 0, CAST(N'2017-04-10 14:29:50.000' AS DateTime), NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, 8)
INSERT [dbo].[BulkDeleteOperationBase] ([OwningUser], [ModifiedOn], [BulkDeleteOperationId], [IsRecurring], [ProcessingQEIndex], [AsyncOperationId], [UTCConversionTimeZoneCode], [OrderedQuerySetXml], [FailureCount], [ModifiedBy], [CreatedBy], [OwningBusinessUnit], [TimeZoneRuleVersionNumber], [SuccessCount], [CreatedOn], [ModifiedOnBehalfBy], [OwnerId], [CreatedOnBehalfBy], [OwnerIdType]) VALUES (N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', CAST(N'2017-04-10 14:32:40.000' AS DateTime), N'dfbec8d2-caff-42df-a952-8c089137c912', 0, 0, N'b9bc5d04-4331-437b-9cbc-603e41a9e1ef', NULL, N'<?xml version="1.0" encoding="utf-16"?>
<ArrayOfString xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <string>&lt;fetch distinct="false" no-lock="false" mapping="logical"&gt;&lt;entity name="actioncard"&gt;&lt;attribute name="actioncardid" /&gt;&lt;filter type="and"&gt;&lt;condition attribute="state" operator="eq" value="2" /&gt;&lt;/filter&gt;&lt;/entity&gt;&lt;/fetch&gt;</string>
  <string>&lt;fetch distinct="false" no-lock="false" mapping="logical"&gt;&lt;entity name="actioncard"&gt;&lt;attribute name="actioncardid" /&gt;&lt;filter type="and"&gt;&lt;condition attribute="expirydate" operator="olderthan-x-days" value="1" /&gt;&lt;/filter&gt;&lt;/entity&gt;&lt;/fetch&gt;</string>
</ArrayOfString>', 0, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'c6acfcbe-f31d-e711-80d3-00155d00662d', NULL, 0, CAST(N'2017-04-10 14:32:40.000' AS DateTime), NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, 8)
INSERT [dbo].[BulkDeleteOperationBase] ([OwningUser], [ModifiedOn], [BulkDeleteOperationId], [IsRecurring], [ProcessingQEIndex], [AsyncOperationId], [UTCConversionTimeZoneCode], [OrderedQuerySetXml], [FailureCount], [ModifiedBy], [CreatedBy], [OwningBusinessUnit], [TimeZoneRuleVersionNumber], [SuccessCount], [CreatedOn], [ModifiedOnBehalfBy], [OwnerId], [CreatedOnBehalfBy], [OwnerIdType]) VALUES (N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', CAST(N'2017-04-10 14:32:30.000' AS DateTime), N'67b781e6-aa62-4e0c-ba4e-d0fa0352b4f1', 0, 0, N'ada2c255-b34c-4aee-a14a-c1dd36776442', NULL, N'<?xml version="1.0" encoding="utf-16"?>
<ArrayOfString xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <string>&lt;fetch distinct="false" no-lock="false" mapping="logical"&gt;&lt;entity name="asyncoperation"&gt;&lt;attribute name="asyncoperationid" /&gt;&lt;filter type="and"&gt;&lt;condition attribute="statecode" operator="eq" value="3" /&gt;&lt;condition attribute="statuscode" operator="eq" value="30" /&gt;&lt;condition attribute="completedon" operator="olderthan-x-months" value="1" /&gt;&lt;condition attribute="operationtype" operator="not-in"&gt;&lt;value&gt;2&lt;/value&gt;&lt;value&gt;17&lt;/value&gt;&lt;value&gt;10&lt;/value&gt;&lt;/condition&gt;&lt;/filter&gt;&lt;/entity&gt;&lt;/fetch&gt;</string>
  <string>&lt;fetch distinct="false" no-lock="false" mapping="logical"&gt;&lt;entity name="asyncoperation"&gt;&lt;attribute name="asyncoperationid" /&gt;&lt;filter type="and"&gt;&lt;condition attribute="statecode" operator="eq" value="3" /&gt;&lt;condition attribute="statuscode" operator="eq" value="30" /&gt;&lt;condition attribute="operationtype" operator="eq" value="10" /&gt;&lt;/filter&gt;&lt;link-entity name="workflow" to="workflowactivationid" from="workflowid" link-type="inner"&gt;&lt;filter type="and"&gt;&lt;filter type="and"&gt;&lt;condition attribute="asyncautodelete" operator="eq" value="1" /&gt;&lt;/filter&gt;&lt;/filter&gt;&lt;/link-entity&gt;&lt;/entity&gt;&lt;/fetch&gt;</string>
</ArrayOfString>', 0, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'c6acfcbe-f31d-e711-80d3-00155d00662d', NULL, 0, CAST(N'2017-04-10 14:32:30.000' AS DateTime), NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, 8)
INSERT [dbo].[BulkDeleteOperationBase] ([OwningUser], [ModifiedOn], [BulkDeleteOperationId], [IsRecurring], [ProcessingQEIndex], [AsyncOperationId], [UTCConversionTimeZoneCode], [OrderedQuerySetXml], [FailureCount], [ModifiedBy], [CreatedBy], [OwningBusinessUnit], [TimeZoneRuleVersionNumber], [SuccessCount], [CreatedOn], [ModifiedOnBehalfBy], [OwnerId], [CreatedOnBehalfBy], [OwnerIdType]) VALUES (N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', CAST(N'2017-04-10 14:32:50.000' AS DateTime), N'242b80d2-4835-4912-8363-f2ad6a05145c', 0, 0, N'573a734b-9ba1-4acd-ac33-aae559e53720', NULL, N'<?xml version="1.0" encoding="utf-16"?>
<ArrayOfString xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <string>&lt;fetch distinct="false" no-lock="false" mapping="logical"&gt;&lt;entity name="processsession"&gt;&lt;attribute name="processid" /&gt;&lt;filter type="and"&gt;&lt;condition attribute="completedon" operator="olderthan-x-months" value="1" /&gt;&lt;/filter&gt;&lt;link-entity name="workflow" to="processid" from="workflowid" link-type="inner"&gt;&lt;filter type="and"&gt;&lt;filter type="or"&gt;&lt;filter type="and"&gt;&lt;condition attribute="category" operator="eq" value="0" /&gt;&lt;condition attribute="mode" operator="eq" value="1" /&gt;&lt;condition attribute="category" operator="eq" value="3" /&gt;&lt;/filter&gt;&lt;/filter&gt;&lt;/filter&gt;&lt;/link-entity&gt;&lt;/entity&gt;&lt;/fetch&gt;</string>
</ArrayOfString>', 0, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'c6acfcbe-f31d-e711-80d3-00155d00662d', NULL, 0, CAST(N'2017-04-10 14:32:50.000' AS DateTime), NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, 8)
/****** Object:  Index [fndx_for_cascaderelationship_AsyncOperation_BulkDeleteOperation]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_AsyncOperation_BulkDeleteOperation] ON [dbo].[BulkDeleteOperationBase]
(
	[AsyncOperationId] ASC
)
WHERE ([AsyncOperationId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_IsRecurring_BulkDeleteOperation]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_IsRecurring_BulkDeleteOperation] ON [dbo].[BulkDeleteOperationBase]
(
	[IsRecurring] ASC,
	[SuccessCount] ASC,
	[FailureCount] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[BulkDeleteOperationBase]
(
	[OwningUser] ASC,
	[OwningBusinessUnit] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[BulkDeleteOperationBase]  WITH CHECK ADD  CONSTRAINT [BulkDeleteOperation_BusinessUnit] FOREIGN KEY([OwningBusinessUnit])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[BulkDeleteOperationBase] CHECK CONSTRAINT [BulkDeleteOperation_BusinessUnit]
GO
