USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[FilterTemplate]    Script Date: 4/10/2017 9:59:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FilterTemplate](
	[FetchXml] [nvarchar](max) NULL,
	[Description] [nvarchar](max) NULL,
	[QueryType] [int] NOT NULL,
	[FilterTemplateId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_FilterTemplate_FilterTemplateId]  DEFAULT (newid()),
	[ReturnedTypeCode] [int] NOT NULL,
	[Name] [nvarchar](100) NOT NULL,
 CONSTRAINT [cndx_PrimaryKey_FilterTemplate] PRIMARY KEY CLUSTERED 
(
	[FilterTemplateId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
INSERT [dbo].[FilterTemplate] ([FetchXml], [Description], [QueryType], [FilterTemplateId], [ReturnedTypeCode], [Name]) VALUES (N'<fetch version="1.0" output-format="xml-platform" mapping="logical"><entity name="systemuser"><attribute name="systemuserid" /><filter type="and"><condition attribute="isdisabled" operator="eq" value="0" /><condition attribute="internalemailaddress" operator="not-null" /><condition attribute="internalemailaddress" operator="ne" value="" /></filter></entity></fetch>', N'My users with email address', 512, N'0824940f-9aae-48a8-bd03-18f74c05aac5', 8, N'My Address Book Users')
INSERT [dbo].[FilterTemplate] ([FetchXml], [Description], [QueryType], [FilterTemplateId], [ReturnedTypeCode], [Name]) VALUES (N'<fetch version="1.0" output-format="xml-platform" mapping="logical"><entity name="equipment"><attribute name="equipmentid" /><filter type="and"><condition attribute="isdisabled" operator="eq" value="0" /><condition attribute="emailaddress" operator="not-null" /><condition attribute="emailaddress" operator="ne" value="" /></filter></entity></fetch>', N'My equipments with email address', 512, N'93af78ee-d809-4e4a-85af-3fe22044f5ee', 4000, N'My Address Book Equipments')
INSERT [dbo].[FilterTemplate] ([FetchXml], [Description], [QueryType], [FilterTemplateId], [ReturnedTypeCode], [Name]) VALUES (N'', N'My contacts with email address', 512, N'5921304b-c0e4-40f3-9ef8-6e239e7505b0', 2, N'My Address Book Contacts')
INSERT [dbo].[FilterTemplate] ([FetchXml], [Description], [QueryType], [FilterTemplateId], [ReturnedTypeCode], [Name]) VALUES (N'<fetch version="1.0" output-format="xml-platform" mapping="logical"><entity name="queue"><attribute name="queueid" /><filter type="and"><condition attribute="emailaddress" operator="not-null" /><condition attribute="emailaddress" operator="ne" value="" /></filter></entity></fetch>', N'My queues with email address', 512, N'e24eb014-3f22-4060-b318-75e628d6bad2', 2020, N'My Address Book Queues')
INSERT [dbo].[FilterTemplate] ([FetchXml], [Description], [QueryType], [FilterTemplateId], [ReturnedTypeCode], [Name]) VALUES (N'<fetch version="1.0" output-format="xml-platform" mapping="logical"><entity name="account"><attribute name="accountid" /><filter type="and"><condition attribute="ownerid" operator="eq-userid" /><condition attribute="statecode" operator="eq" value="0" /><condition attribute="emailaddress1" operator="not-null" /><condition attribute="emailaddress1" operator="ne" value="" /></filter></entity></fetch>', N'My accounts with email address', 512, N'280a67b1-66d9-4c1d-ae9b-78e4b5044823', 1, N'My Address Book Accounts')
INSERT [dbo].[FilterTemplate] ([FetchXml], [Description], [QueryType], [FilterTemplateId], [ReturnedTypeCode], [Name]) VALUES (N'<fetch version="1.0" output-format="xml-platform" mapping="logical"><entity name="lead"><attribute name="leadid" /><filter type="and"><condition attribute="ownerid" operator="eq-userid" /><condition attribute="statecode" operator="eq" value="0" /><condition attribute="emailaddress1" operator="not-null" /><condition attribute="emailaddress1" operator="ne" value="" /></filter></entity></fetch>', N'My leads with email address', 512, N'7e08af5e-b0a4-4510-bf15-d8372ee09329', 4, N'My Address Book Leads')
