USE [D365_MSCRM]
GO
USE [D365_MSCRM]
GO
/****** Object:  Sequence [dbo].[SO_NextEmailTrackingNumber]    Script Date: 4/10/2017 9:59:16 PM ******/
CREATE SEQUENCE [dbo].[SO_NextEmailTrackingNumber] 
 AS [int]
 START WITH 0
 INCREMENT BY 1
 MINVALUE 0
 MAXVALUE 999
 CYCLE 
 CACHE  10 
GO
