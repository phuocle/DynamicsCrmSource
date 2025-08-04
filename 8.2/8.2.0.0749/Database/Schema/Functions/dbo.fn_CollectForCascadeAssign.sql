SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO
CREATE function [dbo].[fn_CollectForCascadeAssign]
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
   u uniqueidentifier,
   q uniqueidentifier,
   s int,
   y bit,
   l int
) 
as
begin
declare @l int
insert into @t values(@root_id,@root_otc,@old_owner,N'00000000-0000-0000-0000-000000000000',0,0,0)
set @l=0
set @l=@l+1 if(exists(select * from @t where t=1))begin insert into @t(o,t,u,q,s,y,l) select o.AccountId,1,o.OwnerId,c.o,c.t,1,@l from Account o,@t c where o.ParentAccountId=c.o and c.t=1
while(@@rowcount <> 0) begin set @l=@l+1 if(exists(select * from @t where t=1))insert into @t(o,t,u,q,s,y,l) select o.AccountId,1,o.OwnerId,c.o,c.t,1,@l from Account o,@t c where o.ParentAccountId=c.o and c.t=1 and o.AccountId not in(select o from @t where t=1) end end
set @l=@l+1 if(exists(select * from @t where t=9100))begin insert into @t(o,t,u,q,s,y,l) select o.ReportId,9100,o.OwnerId,c.o,c.t,1,@l from Report o,@t c where o.ParentReportId=c.o and c.t=9100
while(@@rowcount <> 0) begin set @l=@l+1 if(exists(select * from @t where t=9100))insert into @t(o,t,u,q,s,y,l) select o.ReportId,9100,o.OwnerId,c.o,c.t,1,@l from Report o,@t c where o.ParentReportId=c.o and c.t=9100 and o.ReportId not in(select o from @t where t=9100) end end
set @l=@l+1 if(exists(select * from @t where t=4400))begin insert into @t(o,t,u,q,s,y,l) select o.ActivityId,4402,o.OwnerId,c.o,c.t,1,@l from CampaignActivity o,@t c where o.RegardingObjectId=c.o and c.t=4400 end
set @l=@l+1 if(exists(select * from @t where t in(4400,4406)))begin insert into @t(o,t,u,q,s,y,l) select o.ActivityId,4401,o.OwnerId,c.o,c.t,1,@l from CampaignResponse o,@t c where o.RegardingObjectId=c.o and c.t in(4400,4406) end
set @l=@l+1 if(exists(select * from @t where t in(2,1)))begin insert into @t(o,t,u,q,s,y,l) select o.ContactId,2,o.OwnerId,c.o,c.t,1,@l from Contact o,@t c where o.ParentCustomerId=c.o and c.t in(2,1)
while(@@rowcount <> 0) begin set @l=@l+1 if(exists(select * from @t where t=2))insert into @t(o,t,u,q,s,y,l) select o.ContactId,2,o.OwnerId,c.o,c.t,1,@l from Contact o,@t c where o.ParentCustomerId=c.o and c.t=2 and o.ContactId not in(select o from @t where t=2) end end
set @l=@l+1 if(exists(select * from @t where t in(2,1)))begin insert into @t(o,t,u,q,s,y,l) select o.SocialProfileId,99,o.OwnerId,c.o,c.t,1,@l from SocialProfile o,@t c where o.CustomerId=c.o and c.t in(2,1) end
set @l=@l+1 if(exists(select * from @t where t in(2,1)))begin insert into @t(o,t,u,q,s,y,l) select o.IncidentId,112,o.OwnerId,c.o,c.t,1,@l from Incident o,@t c where o.CustomerId=c.o and c.t in(2,1) end
set @l=@l+1 if(exists(select * from @t where t=112))begin insert into @t(o,t,u,q,s,y,l) select o.ActivityId,4206,o.OwnerId,c.o,c.t,1,@l from IncidentResolution o,@t c where o.IncidentId=c.o and c.t=112 end
set @l=@l+1 if(exists(select * from @t where t in(2,1)))begin insert into @t(o,t,u,q,s,y,l) select o.LeadId,4,o.OwnerId,c.o,c.t,1,@l from Lead o,@t c where o.CustomerId=c.o and c.t in(2,1) end
set @l=@l+1 if(exists(select * from @t where t=1144))begin insert into @t(o,t,u,q,s,y,l) select o.RatingValueId,1142,o.OwnerId,c.o,c.t,1,@l from RatingValue o,@t c where o.RatingModel=c.o and c.t=1144 end
set @l=@l+1 if(exists(select * from @t where t=1146))begin insert into @t(o,t,u,q,s,y,l) select o.BookableResourceBookingId,1145,o.OwnerId,c.o,c.t,1,@l from BookableResourceBooking o,@t c where o.Header=c.o and c.t=1146 end
set @l=@l+1 if(exists(select * from @t where t in(2,1)))begin insert into @t(o,t,u,q,s,y,l) select o.OpportunityId,3,o.OwnerId,c.o,c.t,1,@l from Opportunity o,@t c where o.CustomerId=c.o and c.t in(2,1) end
set @l=@l+1 if(exists(select * from @t where t in(3,9953)))begin insert into @t(o,t,u,q,s,y,l) select o.SharePointDocumentLocationId,9508,o.OwnerId,c.o,c.t,1,@l from SharePointDocumentLocation o,@t c where o.RegardingObjectId=c.o and c.t in(3,9953) end
set @l=@l+1 if(exists(select * from @t where t=3))begin insert into @t(o,t,u,q,s,y,l) select o.SharePointDocumentId,9507,o.OwnerId,c.o,c.t,1,@l from SharePointDocument o,@t c where o.RegardingObjectId=c.o and c.t=3 end
set @l=@l+1 if(exists(select * from @t where t=3))begin insert into @t(o,t,u,q,s,y,l) select o.CustomerOpportunityRoleId,4503,o.OwnerId,c.o,c.t,1,@l from CustomerOpportunityRole o,@t c where o.OpportunityId=c.o and c.t=3 end
set @l=@l+1 if(exists(select * from @t where t=3))begin insert into @t(o,t,u,q,s,y,l) select o.ActivityId,4208,o.OwnerId,c.o,c.t,1,@l from OpportunityClose o,@t c where o.OpportunityId=c.o and c.t=3 end
set @l=@l+1 if(exists(select * from @t where t=3))begin insert into @t(o,t,u,q,s,y,l) select o.SalesOrderId,1088,o.OwnerId,c.o,c.t,1,@l from SalesOrder o,@t c where o.OpportunityId=c.o and c.t=3 end
set @l=@l+1 if(exists(select * from @t where t in(2,1)))begin insert into @t(o,t,u,q,s,y,l) select o.SalesOrderId,1088,o.OwnerId,c.o,c.t,1,@l from SalesOrder o,@t c where o.CustomerId=c.o and c.t in(2,1) and o.SalesOrderId not in(select o from @t where t=1088) end
set @l=@l+1 if(exists(select * from @t where t=1088))begin insert into @t(o,t,u,q,s,y,l) select o.ActivityId,4209,o.OwnerId,c.o,c.t,1,@l from OrderClose o,@t c where o.SalesOrderId=c.o and c.t=1088 end
set @l=@l+1 if(exists(select * from @t where t=3))begin insert into @t(o,t,u,q,s,y,l) select o.QuoteId,1084,o.OwnerId,c.o,c.t,1,@l from Quote o,@t c where o.OpportunityId=c.o and c.t=3 end
set @l=@l+1 if(exists(select * from @t where t in(2,1)))begin insert into @t(o,t,u,q,s,y,l) select o.QuoteId,1084,o.OwnerId,c.o,c.t,1,@l from Quote o,@t c where o.CustomerId=c.o and c.t in(2,1) and o.QuoteId not in(select o from @t where t=1084) end
set @l=@l+1 if(exists(select * from @t where t=1084))begin insert into @t(o,t,u,q,s,y,l) select o.ActivityId,4211,o.OwnerId,c.o,c.t,1,@l from QuoteClose o,@t c where o.QuoteId=c.o and c.t=1084 end
set @l=@l+1 if(exists(select * from @t where t=2020))begin insert into @t(o,t,u,q,s,y,l) select o.MailboxId,9606,o.OwnerId,c.o,c.t,1,@l from Mailbox o,@t c where o.RegardingObjectId=c.o and c.t=2020 end
set @l=@l+1 if(exists(select * from @t where t in(2,1)))begin insert into @t(o,t,u,q,s,y,l) select o.ContractId,1010,o.OwnerId,c.o,c.t,1,@l from Contract o,@t c where o.CustomerId=c.o and c.t in(2,1) end
set @l=@l+1 if(exists(select * from @t where t=3))begin insert into @t(o,t,u,q,s,y,l) select o.ProcessSessionId,4710,o.OwnerId,c.o,c.t,1,@l from ProcessSession o,@t c where o.RegardingObjectId=c.o and c.t=3 end
set @l=@l+1 if(exists(select * from @t where t=4200))begin insert into @t(o,t,u,q,s,y,l) select o.RuleId,4250,o.OwnerId,c.o,c.t,1,@l from RecurrenceRule o,@t c where o.ObjectId=c.o and c.t=4200 end
set @l=@l+1 if(exists(select * from @t where t=1150))begin insert into @t(o,t,u,q,s,y,l) select o.BookableResourceCategoryAssnId,1149,o.OwnerId,c.o,c.t,1,@l from BookableResourceCategoryAssn o,@t c where o.Resource=c.o and c.t=1150 end
set @l=@l+1 if(exists(select * from @t where t=1150))begin insert into @t(o,t,u,q,s,y,l) select o.BookableResourceCharacteristicId,1148,o.OwnerId,c.o,c.t,1,@l from BookableResourceCharacteristic o,@t c where o.Resource=c.o and c.t=1150 end
set @l=@l+1 if(exists(select * from @t where t in(2,1)))begin insert into @t(o,t,u,q,s,y,l) select o.InvoiceId,1090,o.OwnerId,c.o,c.t,1,@l from Invoice o,@t c where o.CustomerId=c.o and c.t in(2,1) end
set @l=@l+1 if(exists(select * from @t where t in(1090,4700,1010,3,1146,9953,1088,2,9700,10000,1,1145,1084,112,4,4406)))begin insert into @t(o,t,u,q,s,y,l) select o.ActivityId,4216,o.OwnerId,c.o,c.t,1,@l from SocialActivity o,@t c where o.RegardingObjectId=c.o and c.t in(1090,4700,1010,3,1146,9953,1088,2,9700,10000,1,1145,1084,112,4,4406) end
set @l=@l+1 if(exists(select * from @t where t in(1090,4700,1010,3,1146,10004,1088,2,4400,9700,10000,1,1145,1084,112,4,4406,4402)))begin insert into @t(o,t,u,q,s,y,l) select o.MailboxTrackingFolderId,9608,o.OwnerId,c.o,c.t,1,@l from MailboxTrackingFolder o,@t c where o.RegardingObjectId=c.o and c.t in(1090,4700,1010,3,1146,10004,1088,2,4400,9700,10000,1,1145,1084,112,4,4406,4402) end
set @l=@l+1 if(exists(select * from @t where t in(1090,1010,3,1146,9953,1088,2,4400,9700,10000,1,1145,1084,112,4,4406,4402)))begin insert into @t(o,t,u,q,s,y,l) select o.ActivityId,4207,o.OwnerId,c.o,c.t,1,@l from Letter o,@t c where o.RegardingObjectId=c.o and c.t in(1090,1010,3,1146,9953,1088,2,4400,9700,10000,1,1145,1084,112,4,4406,4402) end
set @l=@l+1 if(exists(select * from @t where t in(1090,1010,3,1146,9953,1088,2,4400,9700,10000,1,1145,1084,112,4,4406,4402)))begin insert into @t(o,t,u,q,s,y,l) select o.ActivityId,4210,o.OwnerId,c.o,c.t,1,@l from PhoneCall o,@t c where o.RegardingObjectId=c.o and c.t in(1090,1010,3,1146,9953,1088,2,4400,9700,10000,1,1145,1084,112,4,4406,4402) end
set @l=@l+1 if(exists(select * from @t where t in(1090,4700,1010,3,1146,9953,1088,2,4400,9700,10000,1,1145,1084,112,4,4406,4402)))begin insert into @t(o,t,u,q,s,y,l) select o.ActivityId,4202,o.OwnerId,c.o,c.t,1,@l from Email o,@t c where o.RegardingObjectId=c.o and c.t in(1090,4700,1010,3,1146,9953,1088,2,4400,9700,10000,1,1145,1084,112,4,4406,4402) end
set @l=@l+1 if(exists(select * from @t where t in(1090,1010,3,1146,9953,1088,2,4400,9700,10000,1,1145,1084,112,4)))begin insert into @t(o,t,u,q,s,y,l) select o.ActivityId,4214,o.OwnerId,c.o,c.t,1,@l from ServiceAppointment o,@t c where o.RegardingObjectId=c.o and c.t in(1090,1010,3,1146,9953,1088,2,4400,9700,10000,1,1145,1084,112,4) end
set @l=@l+1 if(exists(select * from @t where t in(1090,1010,3,1146,9953,1088,2,4400,9700,10000,1,1145,1084,112,4,4402)))begin insert into @t(o,t,u,q,s,y,l) select o.ActivityId,4212,o.OwnerId,c.o,c.t,1,@l from Task o,@t c where o.RegardingObjectId=c.o and c.t in(1090,1010,3,1146,9953,1088,2,4400,9700,10000,1,1145,1084,112,4,4402) end
set @l=@l+1 if(exists(select * from @t where t in(1090,1010,3,1146,9953,1088,2,4400,9700,10000,1,1145,1084,112,4,4406,4402)))begin insert into @t(o,t,u,q,s,y,l) select o.ActivityId,4204,o.OwnerId,c.o,c.t,1,@l from Fax o,@t c where o.RegardingObjectId=c.o and c.t in(1090,1010,3,1146,9953,1088,2,4400,9700,10000,1,1145,1084,112,4,4406,4402) end
set @l=@l+1 if(exists(select * from @t where t in(1090,1010,3,1146,9953,1088,2,4400,9700,10000,1,1145,1084,112,4,4406,4402)))begin insert into @t(o,t,u,q,s,y,l) select o.ActivityId,4251,o.OwnerId,c.o,c.t,1,@l from RecurringAppointmentMaster o,@t c where o.RegardingObjectId=c.o and c.t in(1090,1010,3,1146,9953,1088,2,4400,9700,10000,1,1145,1084,112,4,4406,4402) end
set @l=@l+1 if(exists(select * from @t where t in(1090,1010,3,1146,9953,1088,2,4400,9700,10000,1,1145,1084,112,4,4406,4402)))begin insert into @t(o,t,u,q,s,y,l) select o.ActivityId,4201,o.OwnerId,c.o,c.t,1,@l from Appointment o,@t c where o.RegardingObjectId=c.o and c.t in(1090,1010,3,1146,9953,1088,2,4400,9700,10000,1,1145,1084,112,4,4406,4402) end
set @l=@l+1 if(exists(select * from @t where t=4251))begin insert into @t(o,t,u,q,s,y,l) select o.ActivityId,4201,o.OwnerId,c.o,c.t,1,@l from Appointment o,@t c where o.SeriesId=c.o and c.t=4251 and o.ActivityId not in(select o from @t where t=4201) end
set @l=@l+1 if(exists(select * from @t where t in(1090,1150,9605,1010,4300,1149,3,9400,1146,9606,4703,9953,9300,9750,1088,2,4400,4414,8181,9700,9507,9600,10000,1,1145,1084,112,1151,1148,3005,4,4251,4204,4202,4206,4401,4207,4209,4201,4216,4208,4211,4212,4402,4214,4210)))begin insert into @t(o,t,u,q,s,y,l) select o.AnnotationId,5,o.OwnerId,c.o,c.t,1,@l from Annotation o,@t c where o.ObjectId=c.o and c.t in(1090,1150,9605,1010,4300,1149,3,9400,1146,9606,4703,9953,9300,9750,1088,2,4400,4414,8181,9700,9507,9600,10000,1,1145,1084,112,1151,1148,3005,4,4251,4204,4202,4206,4401,4207,4209,4201,4216,4208,4211,4212,4402,4214,4210) end
set @l=@l+1 if(exists(select * from @t where t in(3,2,1,112,4,4251,4204,4202,4207,4201,4212,4214,4210)))begin insert into @t(o,t,u,q,s,y,l) select o.ActionCardId,9962,o.OwnerId,c.o,c.t,1,@l from ActionCard o,@t c where o.RegardingObjectId=c.o and c.t in(3,2,1,112,4,4251,4204,4202,4207,4201,4212,4214,4210) end
set @l=@l+1 if(exists(select * from @t where t in(1090,1150,9752,9605,8003,9869,4710,1010,4300,2020,1149,3,1141,9400,1146,9606,4703,9953,1144,1142,9958,9508,5,3234,9106,10004,1152,9750,1088,2,4400,4414,3008,9700,4411,9959,9602,4230,2010,9600,10000,1147,9100,1,1145,1084,1112,4503,112,1151,1148,3005,99,4,9502,4251,4204,4202,4206,4406,4401,4207,4209,4201,4216,4208,4211,4212,4402,4214,4210)))begin insert into @t(o,t,u,q,s,y,l) select o.SyncErrorId,9869,o.OwnerId,c.o,c.t,1,@l from SyncError o,@t c where o.RegardingObjectId=c.o and c.t in(1090,1150,9752,9605,8003,9869,4710,1010,4300,2020,1149,3,1141,9400,1146,9606,4703,9953,1144,1142,9958,9508,5,3234,9106,10004,1152,9750,1088,2,4400,4414,3008,9700,4411,9959,9602,4230,2010,9600,10000,1147,9100,1,1145,1084,1112,4503,112,1151,1148,3005,99,4,9502,4251,4204,4202,4206,4406,4401,4207,4209,4201,4216,4208,4211,4212,4402,4214,4210)
while(@@rowcount <> 0) begin set @l=@l+1 if(exists(select * from @t where t=9869))insert into @t(o,t,u,q,s,y,l) select o.SyncErrorId,9869,o.OwnerId,c.o,c.t,1,@l from SyncError o,@t c where o.RegardingObjectId=c.o and c.t=9869 and o.SyncErrorId not in(select o from @t where t=9869) end end
return
end
GO
