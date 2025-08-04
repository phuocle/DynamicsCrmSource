CREATE ROLE [CRMReaderRole]
AUTHORIZATION [dbo]
GO
EXEC sp_addrolemember N'CRMReaderRole', N'NT AUTHORITY\NETWORK SERVICE'
GO
EXEC sp_addrolemember N'CRMReaderRole', N'PHUOCLE\PrivReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}'
GO
