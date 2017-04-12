SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO
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
if(exists(select * from @t where t=1144))begin insert into @t(o,t,u,v,q,s,l) select o.RatingValueId,1142,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from RatingValue o,@t c where o.RatingModel=c.o and c.t=1144 end
if(exists(select * from @t where t=1146))begin insert into @t(o,t,u,v,q,s,l) select o.BookableResourceBookingId,1145,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from BookableResourceBooking o,@t c where o.Header=c.o and c.t=1146 end
if(exists(select * from @t where t=1))begin insert into @t(o,t,u,v,q,s,l) select o.AccountId,1,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from Account o,@t c where o.ParentAccountId=c.o and c.t=1
while(@@rowcount <> 0)if(exists(select * from @t where t=1))insert into @t(o,t,u,v,q,s,l) select o.AccountId,1,o.OwnerId,o.OwnerIdType,c.o,c.t,c.l +1 from Account o,@t c where o.ParentAccountId=c.o and c.t=1 and o.AccountId not in(select o from @t where o=o.AccountId and t=1) end
if(exists(select * from @t where t in(4406,4400)))begin insert into @t(o,t,u,v,q,s,l) select o.ActivityId,4401,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from CampaignResponse o,@t c where o.RegardingObjectId=c.o and c.t in(4406,4400) end
if(exists(select * from @t where t in(950,952,955,4710,951,4700,953,954)))begin insert into @t(o,t,u,v,q,s,l) select o.WorkflowLogId,4706,NULL,NULL, c.o, c.t, c.l +1 from WorkflowLog o,@t c where o.AsyncOperationId=c.o and c.t in(950,952,955,4710,951,4700,953,954) end
if(exists(select * from @t where t=1150))begin insert into @t(o,t,u,v,q,s,l) select o.BookableResourceCharacteristicId,1148,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from BookableResourceCharacteristic o,@t c where o.Resource=c.o and c.t=1150 end
if(exists(select * from @t where t=1150))begin insert into @t(o,t,u,v,q,s,l) select o.BookableResourceCategoryAssnId,1149,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from BookableResourceCategoryAssn o,@t c where o.Resource=c.o and c.t=1150 end
if(exists(select * from @t where t=9100))begin insert into @t(o,t,u,v,q,s,l) select o.ReportId,9100,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from Report o,@t c where o.ParentReportId=c.o and c.t=9100
while(@@rowcount <> 0)if(exists(select * from @t where t=9100))insert into @t(o,t,u,v,q,s,l) select o.ReportId,9100,o.OwnerId,o.OwnerIdType,c.o,c.t,c.l +1 from Report o,@t c where o.ParentReportId=c.o and c.t=9100 and o.ReportId not in(select o from @t where o=o.ReportId and t=9100) end
if(exists(select * from @t where t=4400))begin insert into @t(o,t,u,v,q,s,l) select o.ActivityId,4402,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from CampaignActivity o,@t c where o.RegardingObjectId=c.o and c.t=4400 end
if(exists(select * from @t where t in(2,1)))begin insert into @t(o,t,u,v,q,s,l) select o.ContactId,2,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from Contact o,@t c where o.ParentCustomerId=c.o and c.t in(2,1)
while(@@rowcount <> 0)if(exists(select * from @t where t=2))insert into @t(o,t,u,v,q,s,l) select o.ContactId,2,o.OwnerId,o.OwnerIdType,c.o,c.t,c.l +1 from Contact o,@t c where o.ParentCustomerId=c.o and c.t=2 and o.ContactId not in(select o from @t where o=o.ContactId and t=2) end
if(exists(select * from @t where t in(2,1)))begin insert into @t(o,t,u,v,q,s,l) select o.QuoteId,1084,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from Quote o,@t c where o.CustomerId=c.o and c.t in(2,1) end
if(exists(select * from @t where t in(2,1)))begin insert into @t(o,t,u,v,q,s,l) select o.OpportunityId,3,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from Opportunity o,@t c where o.CustomerId=c.o and c.t in(2,1) end
if(exists(select * from @t where t=3))begin insert into @t(o,t,u,v,q,s,l) select o.CustomerOpportunityRoleId,4503,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from CustomerOpportunityRole o,@t c where o.OpportunityId=c.o and c.t=3 end
if(exists(select * from @t where t=3))begin insert into @t(o,t,u,v,q,s,l) select o.ActivityId,4208,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from OpportunityClose o,@t c where o.OpportunityId=c.o and c.t=3 end
if(exists(select * from @t where t in(2,1)))begin insert into @t(o,t,u,v,q,s,l) select o.LeadId,4,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from Lead o,@t c where o.CustomerId=c.o and c.t in(2,1) end
if(exists(select * from @t where t in(2,1)))begin insert into @t(o,t,u,v,q,s,l) select o.IncidentId,112,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from Incident o,@t c where o.CustomerId=c.o and c.t in(2,1) end
if(exists(select * from @t where t=112))begin insert into @t(o,t,u,v,q,s,l) select o.ActivityId,4206,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from IncidentResolution o,@t c where o.IncidentId=c.o and c.t=112 end
if(exists(select * from @t where t in(2,1)))begin insert into @t(o,t,u,v,q,s,l) select o.SalesOrderId,1088,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from SalesOrder o,@t c where o.CustomerId=c.o and c.t in(2,1) end
if(exists(select * from @t where t=1088))begin insert into @t(o,t,u,v,q,s,l) select o.ActivityId,4209,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from OrderClose o,@t c where o.SalesOrderId=c.o and c.t=1088 end
if(exists(select * from @t where t in(2,1)))begin insert into @t(o,t,u,v,q,s,l) select o.ContractId,1010,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from Contract o,@t c where o.CustomerId=c.o and c.t in(2,1) end
if(exists(select * from @t where t in(2,1)))begin insert into @t(o,t,u,v,q,s,l) select o.InvoiceId,1090,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from Invoice o,@t c where o.CustomerId=c.o and c.t in(2,1) end
if(exists(select * from @t where t=7101))begin insert into @t(o,t,u,v,q,s,l) select o.SolutionId,7100,NULL,NULL, c.o, c.t, c.l +1 from Solution o,@t c where o.PublisherId=c.o and c.t=7101 end
if(exists(select * from @t where t=7100))begin insert into @t(o,t,u,v,q,s,l) select o.SolutionId,7100,NULL,NULL, c.o, c.t, c.l +1 from Solution o,@t c where o.ParentSolutionId=c.o and c.t=7100
while(@@rowcount <> 0)if(exists(select * from @t where t=7100))insert into @t(o,t,u,v,q,s,l) select o.SolutionId,7100,NULL,NULL,c.o,c.t,c.l +1 from Solution o,@t c where o.ParentSolutionId=c.o and c.t=7100 and o.SolutionId not in(select o from @t where o=o.SolutionId and t=7100) end
if(exists(select * from @t where t=7103))begin insert into @t(o,t,u,v,q,s,l) select o.SolutionComponentId,7103,NULL,NULL, c.o, c.t, c.l +1 from SolutionComponent o,@t c where o.RootSolutionComponentId=c.o and c.t=7103
while(@@rowcount <> 0)if(exists(select * from @t where t=7103))insert into @t(o,t,u,v,q,s,l) select o.SolutionComponentId,7103,NULL,NULL,c.o,c.t,c.l +1 from SolutionComponent o,@t c where o.RootSolutionComponentId=c.o and c.t=7103 and o.SolutionComponentId not in(select o from @t where o=o.SolutionComponentId and t=7103) end
if(exists(select * from @t where t=7100))begin insert into @t(o,t,u,v,q,s,l) select o.SolutionComponentId,7103,NULL,NULL, c.o, c.t, c.l +1 from SolutionComponent o,@t c where o.SolutionId=c.o and c.t=7100 end
if(exists(select * from @t where t=7101))begin insert into @t(o,t,u,v,q,s,l) select o.AppModuleId,9006,NULL,NULL, c.o, c.t, c.l +1 from AppModule o,@t c where o.PublisherId=c.o and c.t=7101 end
if(exists(select * from @t where t=9006))begin insert into @t(o,t,u,v,q,s,l) select o.AppModuleComponentId,9007,NULL,NULL, c.o, c.t, c.l +1 from AppModuleComponent o,@t c where o.AppModuleIdUnique=c.o and c.t=9006 end
if(exists(select * from @t where t=1084))begin insert into @t(o,t,u,v,q,s,l) select o.ActivityId,4211,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from QuoteClose o,@t c where o.QuoteId=c.o and c.t=1084 end
if(exists(select * from @t where t=10003))begin insert into @t(o,t,u,v,q,s,l) select o.msdyn_wallsavedqueryusersettingsId,10004,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from msdyn_wallsavedqueryusersettings o,@t c where o.msdyn_wallsavedqueryid=c.o and c.t=10003 end
if(exists(select * from @t where t in(10004,9702,2,4402,1090,4406,3,4400,1,1084,1145,4,10000,1146,1010,1088,4700,112,9700)))begin insert into @t(o,t,u,v,q,s,l) select o.MailboxTrackingFolderId,9608,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from MailboxTrackingFolder o,@t c where o.RegardingObjectId=c.o and c.t in(10004,9702,2,4402,1090,4406,3,4400,1,1084,1145,4,10000,1146,1010,1088,4700,112,9700) end
if(exists(select * from @t where t=7100))begin insert into @t(o,t,u,v,q,s,l) select o.DependencyNodeId,7106,NULL,NULL, c.o, c.t, c.l +1 from DependencyNode o,@t c where o.BaseSolutionId=c.o and c.t=7100 end
if(exists(select * from @t where t=7100))begin insert into @t(o,t,u,v,q,s,l) select o.DependencyNodeId,7106,NULL,NULL, c.o, c.t, c.l +1 from DependencyNode o,@t c where o.TopSolutionId=c.o and c.t=7100 end
if(exists(select * from @t where t=7106))begin insert into @t(o,t,u,v,q,s,l) select o.DependencyId,7105,NULL,NULL, c.o, c.t, c.l +1 from Dependency o,@t c where o.DependentComponentNodeId=c.o and c.t=7106 end
if(exists(select * from @t where t=7106))begin insert into @t(o,t,u,v,q,s,l) select o.DependencyId,7105,NULL,NULL, c.o, c.t, c.l +1 from Dependency o,@t c where o.RequiredComponentNodeId=c.o and c.t=7106 end
if(exists(select * from @t where t in(8,2020)))begin insert into @t(o,t,u,v,q,s,l) select o.MailboxId,9606,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from Mailbox o,@t c where o.RegardingObjectId=c.o and c.t in(8,2020) end
if(exists(select * from @t where t in(9606,9605)))begin insert into @t(o,t,u,v,q,s,l) select o.TraceRegardingId,8052,NULL,NULL, c.o, c.t, c.l +1 from TraceRegarding o,@t c where o.RegardingObjectId=c.o and c.t in(9606,9605) end
if(exists(select * from @t where t in(2,1)))begin insert into @t(o,t,u,v,q,s,l) select o.SocialProfileId,99,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from SocialProfile o,@t c where o.CustomerId=c.o and c.t in(2,1) end
if(exists(select * from @t where t in(9953,9702,2,1090,4406,3,1,1084,1145,4,10000,1146,1010,1088,4700,112,9700)))begin insert into @t(o,t,u,v,q,s,l) select o.ActivityId,4216,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from SocialActivity o,@t c where o.RegardingObjectId=c.o and c.t in(9953,9702,2,1090,4406,3,1,1084,1145,4,10000,1146,1010,1088,4700,112,9700) end
if(exists(select * from @t where t=9953))begin insert into @t(o,t,u,v,q,s,l) select o.SharePointDocumentLocationId,9508,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from SharePointDocumentLocation o,@t c where o.RegardingObjectId=c.o and c.t=9953 end
if(exists(select * from @t where t in(9953,9702,2,4402,1090,4406,3,4400,1,1084,1145,4,10000,1146,1010,1088,112,9700)))begin insert into @t(o,t,u,v,q,s,l) select o.ActivityId,4204,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from Fax o,@t c where o.RegardingObjectId=c.o and c.t in(9953,9702,2,4402,1090,4406,3,4400,1,1084,1145,4,10000,1146,1010,1088,112,9700) end
if(exists(select * from @t where t in(9953,9702,2,4402,1090,4406,3,4400,1,1084,1145,4,10000,1146,1010,1088,112,9700)))begin insert into @t(o,t,u,v,q,s,l) select o.ActivityId,4251,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from RecurringAppointmentMaster o,@t c where o.RegardingObjectId=c.o and c.t in(9953,9702,2,4402,1090,4406,3,4400,1,1084,1145,4,10000,1146,1010,1088,112,9700) end
if(exists(select * from @t where t in(9953,9702,2,4402,1090,4406,3,4400,1,1084,1145,4,10000,1146,1010,1088,112,9700)))begin insert into @t(o,t,u,v,q,s,l) select o.ActivityId,4210,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from PhoneCall o,@t c where o.RegardingObjectId=c.o and c.t in(9953,9702,2,4402,1090,4406,3,4400,1,1084,1145,4,10000,1146,1010,1088,112,9700) end
if(exists(select * from @t where t in(9953,9702,2,4402,1090,4406,3,4400,1,1084,1145,4,10000,1146,1010,1088,112,9700)))begin insert into @t(o,t,u,v,q,s,l) select o.ActivityId,4207,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from Letter o,@t c where o.RegardingObjectId=c.o and c.t in(9953,9702,2,4402,1090,4406,3,4400,1,1084,1145,4,10000,1146,1010,1088,112,9700) end
if(exists(select * from @t where t in(9953,3)))begin insert into @t(o,t,u,v,q,s,l) select o.TeamId,9,NULL,NULL, c.o, c.t, c.l +1 from Team o,@t c where o.RegardingObjectId=c.o and c.t in(9953,3) end
if(exists(select * from @t where t=92))begin insert into @t(o,t,u,v,q,s,l) select o.TeamId,9,NULL,NULL, c.o, c.t, c.l +1 from Team o,@t c where o.TeamTemplateId=c.o and c.t=92 end
if(exists(select * from @t where t in(9953,9702,2,4402,1090,3,4400,1,1084,1145,4,10000,1146,1010,1088,112,9700)))begin insert into @t(o,t,u,v,q,s,l) select o.ActivityId,4212,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from Task o,@t c where o.RegardingObjectId=c.o and c.t in(9953,9702,2,4402,1090,3,4400,1,1084,1145,4,10000,1146,1010,1088,112,9700) end
if(exists(select * from @t where t in(9953,9702,2,1090,3,4400,1,1084,1145,4,10000,1146,1010,1088,112,9700)))begin insert into @t(o,t,u,v,q,s,l) select o.ActivityId,4214,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from ServiceAppointment o,@t c where o.RegardingObjectId=c.o and c.t in(9953,9702,2,1090,3,4400,1,1084,1145,4,10000,1146,1010,1088,112,9700) end
if(exists(select * from @t where t in(9953,9702,2,4402,1090,4406,3,4400,1,1084,1145,4,10000,1146,1010,1088,4700,112,9700)))begin insert into @t(o,t,u,v,q,s,l) select o.ActivityId,4202,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from Email o,@t c where o.RegardingObjectId=c.o and c.t in(9953,9702,2,4402,1090,4406,3,4400,1,1084,1145,4,10000,1146,1010,1088,4700,112,9700) end
if(exists(select * from @t where t in(9953,9702,2,4402,1090,4406,3,4400,1,1084,1145,4,10000,1146,1010,1088,112,9700)))begin insert into @t(o,t,u,v,q,s,l) select o.ActivityId,4201,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from Appointment o,@t c where o.RegardingObjectId=c.o and c.t in(9953,9702,2,4402,1090,4406,3,4400,1,1084,1145,4,10000,1146,1010,1088,112,9700) end
if(exists(select * from @t where t in(9953,9600,9606,3005,9400,9401,8181,8199,4001,4211,9702,9507,9701,4201,2,4000,1011,4300,4402,1090,1150,4401,9605,4202,3,4400,1,127,4214,4212,1084,4207,4210,9300,1149,1145,4209,4,4703,4251,4216,4003,4204,10000,1146,4006,1010,4206,9750,4414,1088,4215,1148,4208,112,1151,9700)))begin insert into @t(o,t,u,v,q,s,l) select o.AnnotationId,5,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from Annotation o,@t c where o.ObjectId=c.o and c.t in(9953,9600,9606,3005,9400,9401,8181,8199,4001,4211,9702,9507,9701,4201,2,4000,1011,4300,4402,1090,1150,4401,9605,4202,3,4400,1,127,4214,4212,1084,4207,4210,9300,1149,1145,4209,4,4703,4251,4216,4003,4204,10000,1146,4006,1010,4206,9750,4414,1088,4215,1148,4208,112,1151,9700) end
if(exists(select * from @t where t in(9953,99,9600,9603,9604,9602,9606,50,92,3005,3008,9400,9401,9930,4001,10004,4211,9702,1083,2011,1085,1019,4411,2029,4201,4230,7101,123,8003,1038,1055,4712,9106,2,4000,5,4010,1011,4300,1111,1028,9955,4402,9751,9100,1089,1013,1090,9959,3234,1002,1091,1150,129,950,1056,1141,4401,9605,1026,9958,4406,952,955,10,9752,1036,9105,7100,9954,4202,3,4400,1152,1,127,4214,1201,8,4212,3231,1025,4710,1084,1001,4207,9102,9869,4210,1022,4503,1149,1145,4209,1071,4,951,4703,4002,4251,9987,2010,4216,4204,10000,1142,1146,1010,4009,4416,4206,9750,1016,4232,4414,9502,4724,2020,1080,1088,1144,1004,4005,953,9,2013,1148,4208,1200,1039,9508,1017,112,954,135,1151,1003,1147,1112,9700,1024)))begin insert into @t(o,t,u,v,q,s,l) select o.SyncErrorId,9869,o.OwnerId,o.OwnerIdType, c.o, c.t, c.l +1 from SyncError o,@t c where o.RegardingObjectId=c.o and c.t in(9953,99,9600,9603,9604,9602,9606,50,92,3005,3008,9400,9401,9930,4001,10004,4211,9702,1083,2011,1085,1019,4411,2029,4201,4230,7101,123,8003,1038,1055,4712,9106,2,4000,5,4010,1011,4300,1111,1028,9955,4402,9751,9100,1089,1013,1090,9959,3234,1002,1091,1150,129,950,1056,1141,4401,9605,1026,9958,4406,952,955,10,9752,1036,9105,7100,9954,4202,3,4400,1152,1,127,4214,1201,8,4212,3231,1025,4710,1084,1001,4207,9102,9869,4210,1022,4503,1149,1145,4209,1071,4,951,4703,4002,4251,9987,2010,4216,4204,10000,1142,1146,1010,4009,4416,4206,9750,1016,4232,4414,9502,4724,2020,1080,1088,1144,1004,4005,953,9,2013,1148,4208,1200,1039,9508,1017,112,954,135,1151,1003,1147,1112,9700,1024)
while(@@rowcount <> 0)if(exists(select * from @t where t=9869))insert into @t(o,t,u,v,q,s,l) select o.SyncErrorId,9869,o.OwnerId,o.OwnerIdType,c.o,c.t,c.l +1 from SyncError o,@t c where o.RegardingObjectId=c.o and c.t=9869 and o.SyncErrorId not in(select o from @t where o=o.SyncErrorId and t=9869) end
return
end
GO
