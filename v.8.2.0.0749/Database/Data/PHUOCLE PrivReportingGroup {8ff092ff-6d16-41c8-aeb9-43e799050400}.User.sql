USE [D365_MSCRM]
GO
/****** Object:  User [PHUOCLE\PrivReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]    Script Date: 4/10/2017 9:59:16 PM ******/
CREATE USER [PHUOCLE\PrivReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}] FOR LOGIN [PHUOCLE\PrivReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}] WITH DEFAULT_SCHEMA=[dbo]
GO
ALTER ROLE [CRMReaderRole] ADD MEMBER [PHUOCLE\PrivReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
