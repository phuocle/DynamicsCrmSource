CREATE function [dbo].[fn_CollectForCascadeShare]
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
if(exists(select * from @t where t=1))begin insert into @t(o,t,u) select o.AccountId,1,o.OwnerId from Account o,@t c where o.ParentAccountId=c.o and c.t=1
while(@@rowcount <> 0)if(exists(select * from @t where t=1))insert into @t(o,t,u) select o.AccountId,1,o.OwnerId from Account o,@t c where o.ParentAccountId=c.o and c.t=1 and o.AccountId not in(select o from @t where o=o.AccountId and t=1) end
if(exists(select * from @t where t in(2,1)))begin insert into @t(o,t,u) select o.ContactId,2,o.OwnerId from Contact o,@t c where o.ParentCustomerId=c.o and c.t in(2,1)
while(@@rowcount <> 0)if(exists(select * from @t where t=2))insert into @t(o,t,u) select o.ContactId,2,o.OwnerId from Contact o,@t c where o.ParentCustomerId=c.o and c.t=2 and o.ContactId not in(select o from @t where o=o.ContactId and t=2) end
if(exists(select * from @t where t in(2,1)))begin insert into @t(o,t,u) select o.InvoiceId,1090,o.OwnerId from Invoice o,@t c where o.CustomerId=c.o and c.t in(2,1) end
if(exists(select * from @t where t in(2,1)))begin insert into @t(o,t,u) select o.LeadId,4,o.OwnerId from Lead o,@t c where o.CustomerId=c.o and c.t in(2,1) end
if(exists(select * from @t where t in(2,1)))begin insert into @t(o,t,u) select o.OpportunityId,3,o.OwnerId from Opportunity o,@t c where o.CustomerId=c.o and c.t in(2,1) end
if(exists(select * from @t where t=3))begin insert into @t(o,t,u) select o.CustomerOpportunityRoleId,4503,o.OwnerId from CustomerOpportunityRole o,@t c where o.OpportunityId=c.o and c.t=3 end
if(exists(select * from @t where t in(2,1)))begin insert into @t(o,t,u) select o.SocialProfileId,99,o.OwnerId from SocialProfile o,@t c where o.CustomerId=c.o and c.t in(2,1) end
if(exists(select * from @t where t=3))begin insert into @t(o,t,u) select o.ActivityId,4208,o.OwnerId from OpportunityClose o,@t c where o.OpportunityId=c.o and c.t=3 end
if(exists(select * from @t where t in(2,1)))begin insert into @t(o,t,u) select o.SalesOrderId,1088,o.OwnerId from SalesOrder o,@t c where o.CustomerId=c.o and c.t in(2,1) end
if(exists(select * from @t where t=1088))begin insert into @t(o,t,u) select o.ActivityId,4209,o.OwnerId from OrderClose o,@t c where o.SalesOrderId=c.o and c.t=1088 end
if(exists(select * from @t where t in(2,1)))begin insert into @t(o,t,u) select o.ContractId,1010,o.OwnerId from Contract o,@t c where o.CustomerId=c.o and c.t in(2,1) end
if(exists(select * from @t where t in(2,1)))begin insert into @t(o,t,u) select o.IncidentId,112,o.OwnerId from Incident o,@t c where o.CustomerId=c.o and c.t in(2,1) end
if(exists(select * from @t where t=112))begin insert into @t(o,t,u) select o.ActivityId,4206,o.OwnerId from IncidentResolution o,@t c where o.IncidentId=c.o and c.t=112 end
if(exists(select * from @t where t in(2,1)))begin insert into @t(o,t,u) select o.QuoteId,1084,o.OwnerId from Quote o,@t c where o.CustomerId=c.o and c.t in(2,1) end
if(exists(select * from @t where t=1084))begin insert into @t(o,t,u) select o.ActivityId,4211,o.OwnerId from QuoteClose o,@t c where o.QuoteId=c.o and c.t=1084 end
if(exists(select * from @t where t in(1084,10000,112,1010,1088,2,1090,9700,3,4406,4700,4,1)))begin insert into @t(o,t,u) select o.ActivityId,4216,o.OwnerId from SocialActivity o,@t c where o.RegardingObjectId=c.o and c.t in(1084,10000,112,1010,1088,2,1090,9700,3,4406,4700,4,1) end
if(exists(select * from @t where t=9100))begin insert into @t(o,t,u) select o.ReportId,9100,o.OwnerId from Report o,@t c where o.ParentReportId=c.o and c.t=9100
while(@@rowcount <> 0)if(exists(select * from @t where t=9100))insert into @t(o,t,u) select o.ReportId,9100,o.OwnerId from Report o,@t c where o.ParentReportId=c.o and c.t=9100 and o.ReportId not in(select o from @t where o=o.ReportId and t=9100) end
if(exists(select * from @t where t in(4400,4406)))begin insert into @t(o,t,u) select o.ActivityId,4401,o.OwnerId from CampaignResponse o,@t c where o.RegardingObjectId=c.o and c.t in(4400,4406) end
if(exists(select * from @t where t in(4400,1084,10000,112,1010,1088,2,1090,9700,3,4,1)))begin insert into @t(o,t,u) select o.ActivityId,4214,o.OwnerId from ServiceAppointment o,@t c where o.RegardingObjectId=c.o and c.t in(4400,1084,10000,112,1010,1088,2,1090,9700,3,4,1) end
if(exists(select * from @t where t=4200))begin insert into @t(o,t,u) select o.RuleId,4250,o.OwnerId from RecurrenceRule o,@t c where o.ObjectId=c.o and c.t=4200 end
if(exists(select * from @t where t=4400))begin insert into @t(o,t,u) select o.ActivityId,4402,o.OwnerId from CampaignActivity o,@t c where o.RegardingObjectId=c.o and c.t=4400 end
if(exists(select * from @t where t in(4402,4400,1084,10000,112,1010,1088,2,1090,9700,3,4406,4,1)))begin insert into @t(o,t,u) select o.ActivityId,4210,o.OwnerId from PhoneCall o,@t c where o.RegardingObjectId=c.o and c.t in(4402,4400,1084,10000,112,1010,1088,2,1090,9700,3,4406,4,1) end
if(exists(select * from @t where t in(4402,4400,1084,10000,112,1010,1088,2,1090,9700,3,4406,4,1)))begin insert into @t(o,t,u) select o.ActivityId,4201,o.OwnerId from Appointment o,@t c where o.RegardingObjectId=c.o and c.t in(4402,4400,1084,10000,112,1010,1088,2,1090,9700,3,4406,4,1) end
if(exists(select * from @t where t in(4402,4400,1084,10000,112,1010,1088,2,1090,9700,3,4406,4,1)))begin insert into @t(o,t,u) select o.ActivityId,4207,o.OwnerId from Letter o,@t c where o.RegardingObjectId=c.o and c.t in(4402,4400,1084,10000,112,1010,1088,2,1090,9700,3,4406,4,1) end
if(exists(select * from @t where t in(4402,4400,1084,10000,112,1010,1088,2,1090,9700,3,4406,4700,4,1)))begin insert into @t(o,t,u) select o.ActivityId,4202,o.OwnerId from Email o,@t c where o.RegardingObjectId=c.o and c.t in(4402,4400,1084,10000,112,1010,1088,2,1090,9700,3,4406,4700,4,1) end
if(exists(select * from @t where t in(4402,4400,1084,10000,112,1010,1088,2,1090,9700,3,4406,4,1)))begin insert into @t(o,t,u) select o.ActivityId,4204,o.OwnerId from Fax o,@t c where o.RegardingObjectId=c.o and c.t in(4402,4400,1084,10000,112,1010,1088,2,1090,9700,3,4406,4,1) end
if(exists(select * from @t where t in(4402,4400,1084,10000,112,1010,1088,2,1090,9700,3,4,1)))begin insert into @t(o,t,u) select o.ActivityId,4212,o.OwnerId from Task o,@t c where o.RegardingObjectId=c.o and c.t in(4402,4400,1084,10000,112,1010,1088,2,1090,9700,3,4,1) end
if(exists(select * from @t where t in(4402,4400,1084,10000,112,1010,1088,2,1090,9700,3,4406,4,1)))begin insert into @t(o,t,u) select o.ActivityId,4251,o.OwnerId from RecurringAppointmentMaster o,@t c where o.RegardingObjectId=c.o and c.t in(4402,4400,1084,10000,112,1010,1088,2,1090,9700,3,4406,4,1) end
if(exists(select * from @t where t in(4402,4400,8181,4216,4300,9750,1084,10000,112,4214,4251,1010,9507,4212,1088,4208,2,4209,1090,4204,4202,4206,4703,4401,9700,4207,4211,3,4,4414,9600,1,9606,4201,9605,9300,4210)))begin insert into @t(o,t,u) select o.AnnotationId,5,o.OwnerId from Annotation o,@t c where o.ObjectId=c.o and c.t in(4402,4400,8181,4216,4300,9750,1084,10000,112,4214,4251,1010,9507,4212,1088,4208,2,4209,1090,4204,4202,4206,4703,4401,9700,4207,4211,3,4,4414,9600,1,9606,4201,9605,9300,4210) end
return
end
