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
   u uniqueidentifier,
   r sysname,
   s sysname
) 
as
begin
declare @basetablename sysname;
declare @tablecolumnname sysname;
select top(1) @basetablename = e.BaseTableName, @tablecolumnname = a.TableColumnName  from EntityView e
join AttributeView a on a.EntityId = e.EntityId
where e.ObjectTypeCode = @root_otc
and a.IsPKAttribute = 1
insert into @t values(@root_id,@root_otc,@old_owner,@tablecolumnname,@basetablename)
if(exists(select * from @t where t=1))begin insert into @t(o,t,u,r,s) select o.AccountId,1,o.OwnerId,'AccountId','AccountBase' from Account o,@t c where o.ParentAccountId=c.o and c.t=1
while(@@rowcount <> 0)if(exists(select * from @t where t=1))insert into @t(o,t,u,r,s) select o.AccountId,1,o.OwnerId,'AccountId','AccountBase' from Account o,@t c where o.ParentAccountId=c.o and c.t=1 and o.AccountId not in(select o from @t where o=o.AccountId and t=1) end
if(exists(select * from @t where t=9100))begin insert into @t(o,t,u,r,s) select o.ReportId,9100,o.OwnerId,'ReportId','ReportBase' from Report o,@t c where o.ParentReportId=c.o and c.t=9100
while(@@rowcount <> 0)if(exists(select * from @t where t=9100))insert into @t(o,t,u,r,s) select o.ReportId,9100,o.OwnerId,'ReportId','ReportBase' from Report o,@t c where o.ParentReportId=c.o and c.t=9100 and o.ReportId not in(select o from @t where o=o.ReportId and t=9100) end
if(exists(select * from @t where t in(4400,4406)))begin insert into @t(o,t,u,r,s) select o.ActivityId,4401,o.OwnerId,'ActivityId','ActivityPointerBase' from CampaignResponse o,@t c where o.RegardingObjectId=c.o and c.t in(4400,4406) end
if(exists(select * from @t where t=4400))begin insert into @t(o,t,u,r,s) select o.ActivityId,4402,o.OwnerId,'ActivityId','ActivityPointerBase' from CampaignActivity o,@t c where o.RegardingObjectId=c.o and c.t=4400 end
if(exists(select * from @t where t in(2,1)))begin insert into @t(o,t,u,r,s) select o.ContactId,2,o.OwnerId,'ContactId','ContactBase' from Contact o,@t c where o.ParentCustomerId=c.o and c.t in(2,1)
while(@@rowcount <> 0)if(exists(select * from @t where t=2))insert into @t(o,t,u,r,s) select o.ContactId,2,o.OwnerId,'ContactId','ContactBase' from Contact o,@t c where o.ParentCustomerId=c.o and c.t=2 and o.ContactId not in(select o from @t where o=o.ContactId and t=2) end
if(exists(select * from @t where t in(2,1)))begin insert into @t(o,t,u,r,s) select o.SocialProfileId,99,o.OwnerId,'SocialProfileId','SocialProfileBase' from SocialProfile o,@t c where o.CustomerId=c.o and c.t in(2,1) end
if(exists(select * from @t where t in(2,1)))begin insert into @t(o,t,u,r,s) select o.IncidentId,112,o.OwnerId,'IncidentId','IncidentBase' from Incident o,@t c where o.CustomerId=c.o and c.t in(2,1) end
if(exists(select * from @t where t=112))begin insert into @t(o,t,u,r,s) select o.ActivityId,4206,o.OwnerId,'ActivityId','ActivityPointerBase' from IncidentResolution o,@t c where o.IncidentId=c.o and c.t=112 end
if(exists(select * from @t where t in(2,1)))begin insert into @t(o,t,u,r,s) select o.QuoteId,1084,o.OwnerId,'QuoteId','QuoteBase' from Quote o,@t c where o.CustomerId=c.o and c.t in(2,1) end
if(exists(select * from @t where t=1084))begin insert into @t(o,t,u,r,s) select o.ActivityId,4211,o.OwnerId,'ActivityId','ActivityPointerBase' from QuoteClose o,@t c where o.QuoteId=c.o and c.t=1084 end
if(exists(select * from @t where t in(2,1)))begin insert into @t(o,t,u,r,s) select o.LeadId,4,o.OwnerId,'LeadId','LeadBase' from Lead o,@t c where o.CustomerId=c.o and c.t in(2,1) end
if(exists(select * from @t where t in(2,1)))begin insert into @t(o,t,u,r,s) select o.SalesOrderId,1088,o.OwnerId,'SalesOrderId','SalesOrderBase' from SalesOrder o,@t c where o.CustomerId=c.o and c.t in(2,1) end
if(exists(select * from @t where t=1088))begin insert into @t(o,t,u,r,s) select o.ActivityId,4209,o.OwnerId,'ActivityId','ActivityPointerBase' from OrderClose o,@t c where o.SalesOrderId=c.o and c.t=1088 end
if(exists(select * from @t where t=1144))begin insert into @t(o,t,u,r,s) select o.RatingValueId,1142,o.OwnerId,'RatingValueId','RatingValueBase' from RatingValue o,@t c where o.RatingModel=c.o and c.t=1144 end
if(exists(select * from @t where t=9953))begin insert into @t(o,t,u,r,s) select o.SharePointDocumentLocationId,9508,o.OwnerId,'SharePointDocumentLocationId','SharePointDocumentLocationBase' from SharePointDocumentLocation o,@t c where o.RegardingObjectId=c.o and c.t=9953 end
if(exists(select * from @t where t=1146))begin insert into @t(o,t,u,r,s) select o.BookableResourceBookingId,1145,o.OwnerId,'BookableResourceBookingId','BookableResourceBookingBase' from BookableResourceBooking o,@t c where o.Header=c.o and c.t=1146 end
if(exists(select * from @t where t in(2,1)))begin insert into @t(o,t,u,r,s) select o.OpportunityId,3,o.OwnerId,'OpportunityId','OpportunityBase' from Opportunity o,@t c where o.CustomerId=c.o and c.t in(2,1) end
if(exists(select * from @t where t=3))begin insert into @t(o,t,u,r,s) select o.ActivityId,4208,o.OwnerId,'ActivityId','ActivityPointerBase' from OpportunityClose o,@t c where o.OpportunityId=c.o and c.t=3 end
if(exists(select * from @t where t=3))begin insert into @t(o,t,u,r,s) select o.CustomerOpportunityRoleId,4503,o.OwnerId,'CustomerOpportunityRoleId','CustomerOpportunityRoleBase' from CustomerOpportunityRole o,@t c where o.OpportunityId=c.o and c.t=3 end
if(exists(select * from @t where t in(2,1)))begin insert into @t(o,t,u,r,s) select o.ContractId,1010,o.OwnerId,'ContractId','ContractBase' from Contract o,@t c where o.CustomerId=c.o and c.t in(2,1) end
if(exists(select * from @t where t=4200))begin insert into @t(o,t,u,r,s) select o.RuleId,4250,o.OwnerId,'RuleId','RecurrenceRuleBase' from RecurrenceRule o,@t c where o.ObjectId=c.o and c.t=4200 end
if(exists(select * from @t where t=1150))begin insert into @t(o,t,u,r,s) select o.BookableResourceCharacteristicId,1148,o.OwnerId,'BookableResourceCharacteristicId','BookableResourceCharacteristicBase' from BookableResourceCharacteristic o,@t c where o.Resource=c.o and c.t=1150 end
if(exists(select * from @t where t=1150))begin insert into @t(o,t,u,r,s) select o.BookableResourceCategoryAssnId,1149,o.OwnerId,'BookableResourceCategoryAssnId','BookableResourceCategoryAssnBase' from BookableResourceCategoryAssn o,@t c where o.Resource=c.o and c.t=1150 end
if(exists(select * from @t where t in(2,1)))begin insert into @t(o,t,u,r,s) select o.InvoiceId,1090,o.OwnerId,'InvoiceId','InvoiceBase' from Invoice o,@t c where o.CustomerId=c.o and c.t in(2,1) end
if(exists(select * from @t where t in(1090,1010,3,1146,9953,10000,1088,2,4400,9700,1,1145,1084,112,4,4406,4402)))begin insert into @t(o,t,u,r,s) select o.ActivityId,4210,o.OwnerId,'ActivityId','ActivityPointerBase' from PhoneCall o,@t c where o.RegardingObjectId=c.o and c.t in(1090,1010,3,1146,9953,10000,1088,2,4400,9700,1,1145,1084,112,4,4406,4402) end
if(exists(select * from @t where t in(1090,1010,3,1146,9953,10000,1088,2,4400,9700,1,1145,1084,112,4)))begin insert into @t(o,t,u,r,s) select o.ActivityId,4214,o.OwnerId,'ActivityId','ActivityPointerBase' from ServiceAppointment o,@t c where o.RegardingObjectId=c.o and c.t in(1090,1010,3,1146,9953,10000,1088,2,4400,9700,1,1145,1084,112,4) end
if(exists(select * from @t where t in(1090,1010,3,1146,9953,10000,1088,2,4400,9700,1,1145,1084,112,4,4402)))begin insert into @t(o,t,u,r,s) select o.ActivityId,4212,o.OwnerId,'ActivityId','ActivityPointerBase' from Task o,@t c where o.RegardingObjectId=c.o and c.t in(1090,1010,3,1146,9953,10000,1088,2,4400,9700,1,1145,1084,112,4,4402) end
if(exists(select * from @t where t in(1090,1010,3,1146,9953,10000,1088,2,4400,9700,1,1145,1084,112,4,4406,4402)))begin insert into @t(o,t,u,r,s) select o.ActivityId,4201,o.OwnerId,'ActivityId','ActivityPointerBase' from Appointment o,@t c where o.RegardingObjectId=c.o and c.t in(1090,1010,3,1146,9953,10000,1088,2,4400,9700,1,1145,1084,112,4,4406,4402) end
if(exists(select * from @t where t in(1090,1010,3,1146,9953,10000,1088,2,4400,9700,1,1145,1084,112,4,4406,4402)))begin insert into @t(o,t,u,r,s) select o.ActivityId,4207,o.OwnerId,'ActivityId','ActivityPointerBase' from Letter o,@t c where o.RegardingObjectId=c.o and c.t in(1090,1010,3,1146,9953,10000,1088,2,4400,9700,1,1145,1084,112,4,4406,4402) end
if(exists(select * from @t where t in(1090,4700,1010,3,1146,9953,10000,1088,2,4400,9700,1,1145,1084,112,4,4406,4402)))begin insert into @t(o,t,u,r,s) select o.ActivityId,4202,o.OwnerId,'ActivityId','ActivityPointerBase' from Email o,@t c where o.RegardingObjectId=c.o and c.t in(1090,4700,1010,3,1146,9953,10000,1088,2,4400,9700,1,1145,1084,112,4,4406,4402) end
if(exists(select * from @t where t in(1090,1010,3,1146,9953,10000,1088,2,4400,9700,1,1145,1084,112,4,4406,4402)))begin insert into @t(o,t,u,r,s) select o.ActivityId,4204,o.OwnerId,'ActivityId','ActivityPointerBase' from Fax o,@t c where o.RegardingObjectId=c.o and c.t in(1090,1010,3,1146,9953,10000,1088,2,4400,9700,1,1145,1084,112,4,4406,4402) end
if(exists(select * from @t where t in(1090,1010,3,1146,9953,10000,1088,2,4400,9700,1,1145,1084,112,4,4406,4402)))begin insert into @t(o,t,u,r,s) select o.ActivityId,4251,o.OwnerId,'ActivityId','ActivityPointerBase' from RecurringAppointmentMaster o,@t c where o.RegardingObjectId=c.o and c.t in(1090,1010,3,1146,9953,10000,1088,2,4400,9700,1,1145,1084,112,4,4406,4402) end
if(exists(select * from @t where t in(1090,4700,1010,3,1146,9953,10000,1088,2,9700,1,1145,1084,112,4,4406)))begin insert into @t(o,t,u,r,s) select o.ActivityId,4216,o.OwnerId,'ActivityId','ActivityPointerBase' from SocialActivity o,@t c where o.RegardingObjectId=c.o and c.t in(1090,4700,1010,3,1146,9953,10000,1088,2,9700,1,1145,1084,112,4,4406) end
if(exists(select * from @t where t in(1090,1150,9605,1010,4300,1149,3,9400,1146,9606,4703,9953,10000,9300,9750,1088,2,4400,4414,8181,9700,9507,9600,1,1145,1084,112,1151,1148,3005,4,4251,4204,4202,4206,4401,4207,4209,4201,4216,4208,4211,4212,4402,4214,4210)))begin insert into @t(o,t,u,r,s) select o.AnnotationId,5,o.OwnerId,'AnnotationId','AnnotationBase' from Annotation o,@t c where o.ObjectId=c.o and c.t in(1090,1150,9605,1010,4300,1149,3,9400,1146,9606,4703,9953,10000,9300,9750,1088,2,4400,4414,8181,9700,9507,9600,1,1145,1084,112,1151,1148,3005,4,4251,4204,4202,4206,4401,4207,4209,4201,4216,4208,4211,4212,4402,4214,4210) end
if(exists(select * from @t where t in(1090,4700,10004,1010,3,1146,10000,1088,2,4400,9700,1,1145,1084,112,4,4406,4402)))begin insert into @t(o,t,u,r,s) select o.MailboxTrackingFolderId,9608,o.OwnerId,'MailboxTrackingFolderId','MailboxTrackingFolderBase' from MailboxTrackingFolder o,@t c where o.RegardingObjectId=c.o and c.t in(1090,4700,10004,1010,3,1146,10000,1088,2,4400,9700,1,1145,1084,112,4,4406,4402) end
if(exists(select * from @t where t in(1090,1150,9752,9605,8003,9869,4710,10004,1010,4300,2020,1149,3,1141,9400,1146,9606,4703,9953,1144,10000,1142,9958,9508,5,3234,9106,1152,9750,1088,2,4400,4414,3008,9700,4411,9959,9602,4230,2010,9600,1147,9100,1,1145,1084,1112,4503,112,1151,1148,3005,99,4,9502,4251,4204,4202,4206,4406,4401,4207,4209,4201,4216,4208,4211,4212,4402,4214,4210)))begin insert into @t(o,t,u,r,s) select o.SyncErrorId,9869,o.OwnerId,'SyncErrorId','SyncErrorBase' from SyncError o,@t c where o.RegardingObjectId=c.o and c.t in(1090,1150,9752,9605,8003,9869,4710,10004,1010,4300,2020,1149,3,1141,9400,1146,9606,4703,9953,1144,10000,1142,9958,9508,5,3234,9106,1152,9750,1088,2,4400,4414,3008,9700,4411,9959,9602,4230,2010,9600,1147,9100,1,1145,1084,1112,4503,112,1151,1148,3005,99,4,9502,4251,4204,4202,4206,4406,4401,4207,4209,4201,4216,4208,4211,4212,4402,4214,4210)
while(@@rowcount <> 0)if(exists(select * from @t where t=9869))insert into @t(o,t,u,r,s) select o.SyncErrorId,9869,o.OwnerId,'SyncErrorId','SyncErrorBase' from SyncError o,@t c where o.RegardingObjectId=c.o and c.t=9869 and o.SyncErrorId not in(select o from @t where o=o.SyncErrorId and t=9869) end
return
end
