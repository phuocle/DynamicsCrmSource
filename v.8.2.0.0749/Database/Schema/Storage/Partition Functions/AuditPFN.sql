CREATE PARTITION FUNCTION [AuditPFN] ([datetime]) 
AS RANGE LEFT 
FOR VALUES (N'2017-06-30 23:59:59.997', N'2017-09-30 23:59:59.997')
GO
