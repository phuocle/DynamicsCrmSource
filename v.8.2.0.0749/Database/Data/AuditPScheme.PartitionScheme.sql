USE [D365_MSCRM]
GO
/****** Object:  PartitionScheme [AuditPScheme]    Script Date: 4/10/2017 9:59:16 PM ******/
CREATE PARTITION SCHEME [AuditPScheme] AS PARTITION [AuditPFN] TO ([PRIMARY], [PRIMARY], [PRIMARY])
GO
