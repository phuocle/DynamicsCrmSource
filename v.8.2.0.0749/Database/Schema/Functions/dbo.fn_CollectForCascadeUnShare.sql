SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO
CREATE function [dbo].[fn_CollectForCascadeUnShare]
(
  @root_id uniqueidentifier,
  @root_otc int,
  @isoffline int,
  @old_owner uniqueidentifier
)
returns @t table
( 	
   o uniqueidentifier,
   t int,
   u uniqueidentifier
) 
as
begin
insert into @t values(@root_id,@root_otc,@old_owner)
if(exists(select * from @t where t=4200))begin insert into @t(o,t,u) select o.RuleId,4250,o.OwnerId from RecurrenceRule o,@t c where o.ObjectId=c.o and c.t=4200 end
if(exists(select * from @t where t=1144))begin insert into @t(o,t,u) select o.RatingValueId,1142,o.OwnerId from RatingValue o,@t c where o.RatingModel=c.o and c.t=1144 end
if(exists(select * from @t where t=1146))begin insert into @t(o,t,u) select o.BookableResourceBookingId,1145,o.OwnerId from BookableResourceBooking o,@t c where o.Header=c.o and c.t=1146 end
if(exists(select * from @t where t=9100))begin insert into @t(o,t,u) select o.ReportId,9100,o.OwnerId from Report o,@t c where o.ParentReportId=c.o and c.t=9100
while(@@rowcount <> 0)if(exists(select * from @t where t=9100))insert into @t(o,t,u) select o.ReportId,9100,o.OwnerId from Report o,@t c where o.ParentReportId=c.o and c.t=9100 and o.ReportId not in(select o from @t where o=o.ReportId and t=9100) end
if(exists(select * from @t where t=1))begin insert into @t(o,t,u) select o.AccountId,1,o.OwnerId from Account o,@t c where o.ParentAccountId=c.o and c.t=1
while(@@rowcount <> 0)if(exists(select * from @t where t=1))insert into @t(o,t,u) select o.AccountId,1,o.OwnerId from Account o,@t c where o.ParentAccountId=c.o and c.t=1 and o.AccountId not in(select o from @t where o=o.AccountId and t=1) end
if(exists(select * from @t where t=1150))begin insert into @t(o,t,u) select o.BookableResourceCategoryAssnId,1149,o.OwnerId from BookableResourceCategoryAssn o,@t c where o.Resource=c.o and c.t=1150 end
if(exists(select * from @t where t=1150))begin insert into @t(o,t,u) select o.BookableResourceCharacteristicId,1148,o.OwnerId from BookableResourceCharacteristic o,@t c where o.Resource=c.o and c.t=1150 end
if(exists(select * from @t where t in(4400,4406)))begin insert into @t(o,t,u) select o.ActivityId,4401,o.OwnerId from CampaignResponse o,@t c where o.RegardingObjectId=c.o and c.t in(4400,4406) end
if(exists(select * from @t where t=9953))begin insert into @t(o,t,u) select o.SharePointDocumentLocationId,9508,o.OwnerId from SharePointDocumentLocation o,@t c where o.RegardingObjectId=c.o and c.t=9953 end
if(exists(select * from @t where t=4400))begin insert into @t(o,t,u) select o.ActivityId,4402,o.OwnerId from CampaignActivity o,@t c where o.RegardingObjectId=c.o and c.t=4400 end
if(exists(select * from @t where t in(2,1)))begin insert into @t(o,t,u) select o.ContactId,2,o.OwnerId from Contact o,@t c where o.ParentCustomerId=c.o and c.t in(2,1)
while(@@rowcount <> 0)if(exists(select * from @t where t=2))insert into @t(o,t,u) select o.ContactId,2,o.OwnerId from Contact o,@t c where o.ParentCustomerId=c.o and c.t=2 and o.ContactId not in(select o from @t where o=o.ContactId and t=2) end
if(exists(select * from @t where t in(2,1)))begin insert into @t(o,t,u) select o.SocialProfileId,99,o.OwnerId from SocialProfile o,@t c where o.CustomerId=c.o and c.t in(2,1) end
if(exists(select * from @t where t in(1,2)))begin insert into @t(o,t,u) select o.IncidentId,112,o.OwnerId from Incident o,@t c where o.CustomerId=c.o and c.t in(1,2) end
if(exists(select * from @t where t=112))begin insert into @t(o,t,u) select o.ActivityId,4206,o.OwnerId from IncidentResolution o,@t c where o.IncidentId=c.o and c.t=112 end
if(exists(select * from @t where t in(2,1)))begin insert into @t(o,t,u) select o.InvoiceId,1090,o.OwnerId from Invoice o,@t c where o.CustomerId=c.o and c.t in(2,1) end
if(exists(select * from @t where t in(1,2)))begin insert into @t(o,t,u) select o.QuoteId,1084,o.OwnerId from Quote o,@t c where o.CustomerId=c.o and c.t in(1,2) end
if(exists(select * from @t where t=1084))begin insert into @t(o,t,u) select o.ActivityId,4211,o.OwnerId from QuoteClose o,@t c where o.QuoteId=c.o and c.t=1084 end
if(exists(select * from @t where t in(2,1)))begin insert into @t(o,t,u) select o.LeadId,4,o.OwnerId from Lead o,@t c where o.CustomerId=c.o and c.t in(2,1) end
if(exists(select * from @t where t in(2,1)))begin insert into @t(o,t,u) select o.OpportunityId,3,o.OwnerId from Opportunity o,@t c where o.CustomerId=c.o and c.t in(2,1) end
if(exists(select * from @t where t=3))begin insert into @t(o,t,u) select o.ActivityId,4208,o.OwnerId from OpportunityClose o,@t c where o.OpportunityId=c.o and c.t=3 end
if(exists(select * from @t where t=3))begin insert into @t(o,t,u) select o.CustomerOpportunityRoleId,4503,o.OwnerId from CustomerOpportunityRole o,@t c where o.OpportunityId=c.o and c.t=3 end
if(exists(select * from @t where t in(2,1)))begin insert into @t(o,t,u) select o.ContractId,1010,o.OwnerId from Contract o,@t c where o.CustomerId=c.o and c.t in(2,1) end
if(exists(select * from @t where t in(2,1)))begin insert into @t(o,t,u) select o.SalesOrderId,1088,o.OwnerId from SalesOrder o,@t c where o.CustomerId=c.o and c.t in(2,1) end
if(exists(select * from @t where t in(1010,10004,1146,4402,9700,10000,4406,112,4,1,1090,4400,3,1088,2,4700,1084,1145)))begin insert into @t(o,t,u) select o.MailboxTrackingFolderId,9608,o.OwnerId from MailboxTrackingFolder o,@t c where o.RegardingObjectId=c.o and c.t in(1010,10004,1146,4402,9700,10000,4406,112,4,1,1090,4400,3,1088,2,4700,1084,1145) end
if(exists(select * from @t where t in(4406,4,4700,1146,10000,1010,9700,1088,2,3,1084,1090,112,9953,1,1145)))begin insert into @t(o,t,u) select o.ActivityId,4216,o.OwnerId from SocialActivity o,@t c where o.RegardingObjectId=c.o and c.t in(4406,4,4700,1146,10000,1010,9700,1088,2,3,1084,1090,112,9953,1,1145) end
if(exists(select * from @t where t in(4402,4406,112,4400,1010,9953,4,10000,1145,9700,1,1146,1090,1088,3,1084,2)))begin insert into @t(o,t,u) select o.ActivityId,4210,o.OwnerId from PhoneCall o,@t c where o.RegardingObjectId=c.o and c.t in(4402,4406,112,4400,1010,9953,4,10000,1145,9700,1,1146,1090,1088,3,1084,2) end
if(exists(select * from @t where t in(9953,10000,4,4402,112,1,4700,4400,9700,2,1090,1146,1010,4406,1088,1145,3,1084)))begin insert into @t(o,t,u) select o.ActivityId,4202,o.OwnerId from Email o,@t c where o.RegardingObjectId=c.o and c.t in(9953,10000,4,4402,112,1,4700,4400,9700,2,1090,1146,1010,4406,1088,1145,3,1084) end
if(exists(select * from @t where t=1088))begin insert into @t(o,t,u) select o.ActivityId,4209,o.OwnerId from OrderClose o,@t c where o.SalesOrderId=c.o and c.t=1088 end
if(exists(select * from @t where t in(9953,112,9700,1090,3,1010,1088,1146,4402,1,10000,1084,1145,2,4,4400)))begin insert into @t(o,t,u) select o.ActivityId,4212,o.OwnerId from Task o,@t c where o.RegardingObjectId=c.o and c.t in(9953,112,9700,1090,3,1010,1088,1146,4402,1,10000,1084,1145,2,4,4400) end
if(exists(select * from @t where t in(1084,4400,4,4406,1090,1146,10000,1145,1010,1088,2,3,1,112,9953,9700,4402)))begin insert into @t(o,t,u) select o.ActivityId,4201,o.OwnerId from Appointment o,@t c where o.RegardingObjectId=c.o and c.t in(1084,4400,4,4406,1090,1146,10000,1145,1010,1088,2,3,1,112,9953,9700,4402) end
if(exists(select * from @t where t in(1088,4,1146,3,2,4400,9700,1084,1090,1010,9953,1,1145,10000,112)))begin insert into @t(o,t,u) select o.ActivityId,4214,o.OwnerId from ServiceAppointment o,@t c where o.RegardingObjectId=c.o and c.t in(1088,4,1146,3,2,4400,9700,1084,1090,1010,9953,1,1145,10000,112) end
if(exists(select * from @t where t in(1090,112,1088,9953,1084,2,1,4,10000,4406,1146,3,1010,9700,4402,4400,1145)))begin insert into @t(o,t,u) select o.ActivityId,4251,o.OwnerId from RecurringAppointmentMaster o,@t c where o.RegardingObjectId=c.o and c.t in(1090,112,1088,9953,1084,2,1,4,10000,4406,1146,3,1010,9700,4402,4400,1145) end
if(exists(select * from @t where t in(1010,10000,4406,1088,4400,4402,4,9700,9953,112,1,1146,2,1084,1090,3,1145)))begin insert into @t(o,t,u) select o.ActivityId,4207,o.OwnerId from Letter o,@t c where o.RegardingObjectId=c.o and c.t in(1010,10000,4406,1088,4400,4402,4,9700,9953,112,1,1146,2,1084,1090,3,1145) end
if(exists(select * from @t where t in(1084,2,4400,1090,9700,1010,1146,1145,4406,1,112,4,1088,10000,9953,4402,3)))begin insert into @t(o,t,u) select o.ActivityId,4204,o.OwnerId from Fax o,@t c where o.RegardingObjectId=c.o and c.t in(1084,2,4400,1090,9700,1010,1146,1145,4406,1,112,4,1088,10000,9953,4402,3) end
if(exists(select * from @t where t in(9300,4204,3005,112,4207,9605,9606,3,9600,1149,1090,1151,9700,1148,8181,4208,1146,10000,4214,4212,4400,2,4402,4206,4216,1,4211,1084,4414,4300,1145,4401,9953,9400,4210,4201,9507,1088,9750,4209,1150,4251,1010,4202,4703,4)))begin insert into @t(o,t,u) select o.AnnotationId,5,o.OwnerId from Annotation o,@t c where o.ObjectId=c.o and c.t in(9300,4204,3005,112,4207,9605,9606,3,9600,1149,1090,1151,9700,1148,8181,4208,1146,10000,4214,4212,4400,2,4402,4206,4216,1,4211,1084,4414,4300,1145,4401,9953,9400,4210,4201,9507,1088,9750,4209,1150,4251,1010,4202,4703,4) end
if(exists(select * from @t where t in(4209,1152,1010,4202,1141,4300,4401,4216,9100,2020,4414,4211,10000,1145,1084,4503,4207,1,1150,1148,9502,3234,9752,4,8003,4251,4212,4703,9700,4208,4406,4201,1147,9400,4210,9959,1151,9600,9869,1090,1144,5,4400,99,4411,4206,9602,2010,1142,9605,3005,9958,9508,3,1088,9953,1112,9750,4710,9106,4204,4230,1149,1146,4214,2,4402,3008,10004,9606,112)))begin insert into @t(o,t,u) select o.SyncErrorId,9869,o.OwnerId from SyncError o,@t c where o.RegardingObjectId=c.o and c.t in(4209,1152,1010,4202,1141,4300,4401,4216,9100,2020,4414,4211,10000,1145,1084,4503,4207,1,1150,1148,9502,3234,9752,4,8003,4251,4212,4703,9700,4208,4406,4201,1147,9400,4210,9959,1151,9600,9869,1090,1144,5,4400,99,4411,4206,9602,2010,1142,9605,3005,9958,9508,3,1088,9953,1112,9750,4710,9106,4204,4230,1149,1146,4214,2,4402,3008,10004,9606,112)
while(@@rowcount <> 0)if(exists(select * from @t where t=9869))insert into @t(o,t,u) select o.SyncErrorId,9869,o.OwnerId from SyncError o,@t c where o.RegardingObjectId=c.o and c.t=9869 and o.SyncErrorId not in(select o from @t where o=o.SyncErrorId and t=9869) end
return
end
GO
