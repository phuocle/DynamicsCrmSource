USE [D365_MSCRM]
GO
/****** Object:  PartitionFunction [AuditPFN]    Script Date: 4/10/2017 9:59:16 PM ******/
CREATE PARTITION FUNCTION [AuditPFN](datetime) AS RANGE LEFT FOR VALUES (N'2017-06-30T23:59:59.997', N'2017-09-30T23:59:59.997')
GO
