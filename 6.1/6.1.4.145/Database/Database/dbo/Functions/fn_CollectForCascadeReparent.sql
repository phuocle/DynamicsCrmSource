CREATE function [dbo].[fn_CollectForCascadeReparent]
(
  @root_id uniqueidentifier,
  @root_otc int,
  @isoffline int,
  @old_owner uniqueidentifier,
  @old_owner_type int
)
returns @t table
( 	
   o uniqueidentifier,
   t int,
   u uniqueidentifier,
   v int,
   q uniqueidentifier,
   s int,
   l int
) 
as
begin
insert into @t values(@root_id,@root_otc,@old_owner, @old_owner_type, N'00000000-0000-0000-0000-000000000000', 0, 0)
if(exists(select * from @t where t=10001))begin insert into @t(o,t,u,v,q,s,l) select o.msdyn_PostRuleConfigId,10002,NULL,NULL, c.o, c.t, c.l +1 from msdyn_PostRuleConfig o,@t c where o.msdyn_PostConfigId=c.o and c.t=10001 end
if(exists(select * from @t where t=10001))begin insert into @t(o,t,u,v,q,s,l) select o.msdyn_wallsavedqueryId,10003,NULL,NULL, c.o, c.t, c.l +1 from msdyn_wallsavedquery o,@t c where o.msdyn_postconfigurationid=c.o and c.t=10001 end
if(exists(select * from @t where t=10003))begin insert into @t(o,t,u,v,q,s,l) select o.msdyn_wallsavedqueryusersettingsId,10004,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from msdyn_wallsavedqueryusersettings o,@t c where o.msdyn_wallsavedqueryid=c.o and c.t=10003 end
if(exists(select * from @t where t=9100))begin insert into @t(o,t,u,v,q,s,l) select o.ReportId,9100,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from Report o,@t c where o.ParentReportId=c.o and c.t=9100
while(@@rowcount <> 0)if(exists(select * from @t where t=9100))insert into @t(o,t,u,v,q,s,l) select o.ReportId,9100,o.OwnerId,o.OwnerIdType,c.o,c.t,c.l +1 from Report o,@t c where o.ParentReportId=c.o and c.t=9100 and o.ReportId not in(select o from @t where o=o.ReportId and t=9100) end
if(exists(select * from @t where t in(4400,4406)))begin insert into @t(o,t,u,v,q,s,l) select o.ActivityId,4401,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from CampaignResponse o,@t c where o.RegardingObjectId=c.o and c.t in(4400,4406) end
if(exists(select * from @t where t=4400))begin insert into @t(o,t,u,v,q,s,l) select o.ActivityId,4402,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from CampaignActivity o,@t c where o.RegardingObjectId=c.o and c.t=4400 end
if(exists(select * from @t where t in(4700,4710)))begin insert into @t(o,t,u,v,q,s,l) select o.WorkflowLogId,4706,NULL,NULL, c.o, c.t, c.l +1 from WorkflowLog o,@t c where o.AsyncOperationId=c.o and c.t in(4700,4710) end
if(exists(select * from @t where t=7101))begin insert into @t(o,t,u,v,q,s,l) select o.SolutionId,7100,NULL,NULL, c.o, c.t, c.l +1 from Solution o,@t c where o.PublisherId=c.o and c.t=7101 end
if(exists(select * from @t where t=7100))begin insert into @t(o,t,u,v,q,s,l) select o.SolutionComponentId,7103,NULL,NULL, c.o, c.t, c.l +1 from SolutionComponent o,@t c where o.SolutionId=c.o and c.t=7100 end
if(exists(select * from @t where t=7100))begin insert into @t(o,t,u,v,q,s,l) select o.DependencyNodeId,7106,NULL,NULL, c.o, c.t, c.l +1 from DependencyNode o,@t c where o.BaseSolutionId=c.o and c.t=7100 end
if(exists(select * from @t where t=7100))begin insert into @t(o,t,u,v,q,s,l) select o.DependencyNodeId,7106,NULL,NULL, c.o, c.t, c.l +1 from DependencyNode o,@t c where o.TopSolutionId=c.o and c.t=7100 end
if(exists(select * from @t where t=7106))begin insert into @t(o,t,u,v,q,s,l) select o.DependencyId,7105,NULL,NULL, c.o, c.t, c.l +1 from Dependency o,@t c where o.DependentComponentNodeId=c.o and c.t=7106 end
if(exists(select * from @t where t=7106))begin insert into @t(o,t,u,v,q,s,l) select o.DependencyId,7105,NULL,NULL, c.o, c.t, c.l +1 from Dependency o,@t c where o.RequiredComponentNodeId=c.o and c.t=7106 end
if(exists(select * from @t where t in(8,2020)))begin insert into @t(o,t,u,v,q,s,l) select o.MailboxId,9606,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from Mailbox o,@t c where o.RegardingObjectId=c.o and c.t in(8,2020) end
if(exists(select * from @t where t in(9606,9605)))begin insert into @t(o,t,u,v,q,s,l) select o.TraceRegardingId,8052,NULL,NULL, c.o, c.t, c.l +1 from TraceRegarding o,@t c where o.RegardingObjectId=c.o and c.t in(9606,9605) end
if(exists(select * from @t where t=1))begin insert into @t(o,t,u,v,q,s,l) select o.AccountId,1,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from Account o,@t c where o.ParentAccountId=c.o and c.t=1
while(@@rowcount <> 0)if(exists(select * from @t where t=1))insert into @t(o,t,u,v,q,s,l) select o.AccountId,1,o.OwnerId,o.OwnerIdType,c.o,c.t,c.l +1 from Account o,@t c where o.ParentAccountId=c.o and c.t=1 and o.AccountId not in(select o from @t where o=o.AccountId and t=1) end
if(exists(select * from @t where t in(2,1)))begin insert into @t(o,t,u,v,q,s,l) select o.ContactId,2,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from Contact o,@t c where o.ParentCustomerId=c.o and c.t in(2,1)
while(@@rowcount <> 0)if(exists(select * from @t where t=2))insert into @t(o,t,u,v,q,s,l) select o.ContactId,2,o.OwnerId,o.OwnerIdType,c.o,c.t,c.l +1 from Contact o,@t c where o.ParentCustomerId=c.o and c.t=2 and o.ContactId not in(select o from @t where o=o.ContactId and t=2) end
if(exists(select * from @t where t in(1,2)))begin insert into @t(o,t,u,v,q,s,l) select o.IncidentId,112,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from Incident o,@t c where o.CustomerId=c.o and c.t in(1,2) end
if(exists(select * from @t where t=112))begin insert into @t(o,t,u,v,q,s,l) select o.ActivityId,4206,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from IncidentResolution o,@t c where o.IncidentId=c.o and c.t=112 end
if(exists(select * from @t where t in(2,1)))begin insert into @t(o,t,u,v,q,s,l) select o.SalesOrderId,1088,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from SalesOrder o,@t c where o.CustomerId=c.o and c.t in(2,1) end
if(exists(select * from @t where t=1088))begin insert into @t(o,t,u,v,q,s,l) select o.ActivityId,4209,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from OrderClose o,@t c where o.SalesOrderId=c.o and c.t=1088 end
if(exists(select * from @t where t in(2,1)))begin insert into @t(o,t,u,v,q,s,l) select o.ContractId,1010,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from Contract o,@t c where o.CustomerId=c.o and c.t in(2,1) end
if(exists(select * from @t where t in(2,1)))begin insert into @t(o,t,u,v,q,s,l) select o.LeadId,4,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from Lead o,@t c where o.CustomerId=c.o and c.t in(2,1) end
if(exists(select * from @t where t in(1,2)))begin insert into @t(o,t,u,v,q,s,l) select o.QuoteId,1084,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from Quote o,@t c where o.CustomerId=c.o and c.t in(1,2) end
if(exists(select * from @t where t=1084))begin insert into @t(o,t,u,v,q,s,l) select o.ActivityId,4211,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from QuoteClose o,@t c where o.QuoteId=c.o and c.t=1084 end
if(exists(select * from @t where t in(2,1)))begin insert into @t(o,t,u,v,q,s,l) select o.OpportunityId,3,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from Opportunity o,@t c where o.CustomerId=c.o and c.t in(2,1) end
if(exists(select * from @t where t=3))begin insert into @t(o,t,u,v,q,s,l) select o.ActivityId,4208,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from OpportunityClose o,@t c where o.OpportunityId=c.o and c.t=3 end
if(exists(select * from @t where t=92))begin insert into @t(o,t,u,v,q,s,l) select o.TeamId,9,NULL,NULL, c.o, c.t, c.l +1 from Team o,@t c where o.TeamTemplateId=c.o and c.t=92 end
if(exists(select * from @t where t=3))begin insert into @t(o,t,u,v,q,s,l) select o.TeamId,9,NULL,NULL, c.o, c.t, c.l +1 from Team o,@t c where o.RegardingObjectId=c.o and c.t=3 end
if(exists(select * from @t where t=3))begin insert into @t(o,t,u,v,q,s,l) select o.CustomerOpportunityRoleId,4503,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from CustomerOpportunityRole o,@t c where o.OpportunityId=c.o and c.t=3 end
if(exists(select * from @t where t in(2,1)))begin insert into @t(o,t,u,v,q,s,l) select o.InvoiceId,1090,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from Invoice o,@t c where o.CustomerId=c.o and c.t in(2,1) end
if(exists(select * from @t where t in(10000,1084,2,4400,1090,9700,1088,4402,3,1010,4406,9702,1,112,4)))begin insert into @t(o,t,u,v,q,s,l) select o.ActivityId,4204,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from Fax o,@t c where o.RegardingObjectId=c.o and c.t in(10000,1084,2,4400,1090,9700,1088,4402,3,1010,4406,9702,1,112,4) end
if(exists(select * from @t where t in(1090,112,1088,1084,2,1,9700,4402,4400,4,9702,4406,3,10000,1010)))begin insert into @t(o,t,u,v,q,s,l) select o.ActivityId,4251,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from RecurringAppointmentMaster o,@t c where o.RegardingObjectId=c.o and c.t in(1090,112,1088,1084,2,1,9700,4402,4400,4,9702,4406,3,10000,1010) end
if(exists(select * from @t where t in(4402,4406,112,4400,1010,4,3,1084,2,9700,1,9702,1090,10000,1088)))begin insert into @t(o,t,u,v,q,s,l) select o.ActivityId,4210,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from PhoneCall o,@t c where o.RegardingObjectId=c.o and c.t in(4402,4406,112,4400,1010,4,3,1084,2,9700,1,9702,1090,10000,1088) end
if(exists(select * from @t where t in(9702,1010,4406,1088,4400,4402,1084,1090,3,4,9700,112,1,2,10000)))begin insert into @t(o,t,u,v,q,s,l) select o.ActivityId,4207,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from Letter o,@t c where o.RegardingObjectId=c.o and c.t in(9702,1010,4406,1088,4400,4402,1084,1090,3,4,9700,112,1,2,10000) end
if(exists(select * from @t where t in(112,9700,9702,1090,3,1010,2,4,4400,10000,1088,4402,1,1084)))begin insert into @t(o,t,u,v,q,s,l) select o.ActivityId,4212,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from Task o,@t c where o.RegardingObjectId=c.o and c.t in(112,9700,9702,1090,3,1010,2,4,4400,10000,1088,4402,1,1084) end
if(exists(select * from @t where t in(1088,4,10000,3,2,4400,9702,9700,1084,1090,1010,1,112)))begin insert into @t(o,t,u,v,q,s,l) select o.ActivityId,4214,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from ServiceAppointment o,@t c where o.RegardingObjectId=c.o and c.t in(1088,4,10000,3,2,4400,9702,9700,1084,1090,1010,1,112) end
if(exists(select * from @t where t in(4,4402,112,1,4700,4400,1088,3,1084,10000,9700,2,9702,1090,1010,4406)))begin insert into @t(o,t,u,v,q,s,l) select o.ActivityId,4202,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from Email o,@t c where o.RegardingObjectId=c.o and c.t in(4,4402,112,1,4700,4400,1088,3,1084,10000,9700,2,9702,1090,1010,4406) end
if(exists(select * from @t where t in(1084,10000,9702,4400,4,4406,112,9700,4402,1090,1010,1088,2,3,1)))begin insert into @t(o,t,u,v,q,s,l) select o.ActivityId,4201,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from Appointment o,@t c where o.RegardingObjectId=c.o and c.t in(1084,10000,9702,4400,4,4406,112,9700,4402,1090,1010,1088,2,3,1) end
if(exists(select * from @t where t in(10000,4406,4,4700,1010,9700,112,1,1088,9702,2,3,1084,1090)))begin insert into @t(o,t,u,v,q,s,l) select o.ActivityId,4216,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from SocialActivity o,@t c where o.RegardingObjectId=c.o and c.t in(10000,4406,4,4700,1010,9700,112,1,1088,9702,2,3,1084,1090) end
if(exists(select * from @t where t in(9300,4204,112,4207,9605,4006,1010,4202,4703,4,127,4201,9507,1088,9750,4209,4251,4401,4215,4000,8199,4210,1011,4414,4003,4300,4001,9702,9701,4206,10000,4216,1,4211,1084,4208,4214,4212,4400,2,4402,9606,3,9600,1090,9700,8181)))begin insert into @t(o,t,u,v,q,s,l) select o.AnnotationId,5,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from Annotation o,@t c where o.ObjectId=c.o and c.t in(9300,4204,112,4207,9605,4006,1010,4202,4703,4,127,4201,9507,1088,9750,4209,4251,4401,4215,4000,8199,4210,1011,4414,4003,4300,4001,9702,9701,4206,10000,4216,1,4211,1084,4208,4214,4212,4400,2,4402,9606,3,9600,1090,9700,8181) end
if(exists(select * from @t where t in(2,1)))begin insert into @t(o,t,u,v,q,s,l) select o.SocialProfileId,99,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from SocialProfile o,@t c where o.CustomerId=c.o and c.t in(2,1) end
return
end
