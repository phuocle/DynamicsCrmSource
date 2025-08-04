CREATE function fn_CollectForCascadeRemoveLink
(
@c CascadeCollectionTable READONLY,
@is_delete_entity_schema int,
@topType int,
@f int
)
returns @t table
( 
o uniqueidentifier NOT NULL,
t int NOT NULL,
c int NOT NULL,
PRIMARY KEY CLUSTERED(t,o,c)
)as begin
declare @y int
DECLARE yc CURSOR LOCAL FAST_FORWARD
FOR SELECT DISTINCT t FROM @c
OPEN yc
FETCH NEXT FROM yc INTO @y
while(0=@@FETCH_STATUS)begin
if (@topType = @y and @is_delete_entity_schema = 1) goto a
if(@y=2024)begin
insert into @t(o,t,c)select o.QueueId,2020,1 from Queue o,@c c where c.t=2024 and c.o=o.QueueId
goto a end
if(@y=2023)begin
insert into @t(o,t,c)select o.QueueId,2020,1 from Queue o,@c c where c.t=2023 and c.o=o.QueueId
goto a end
if(@y=9333)begin
insert into @t(o,t,c)select o.SolutionId,7100,36 from Solution o,@c c where c.t=9333 and c.o=o.ConfigurationPageId
goto a end
if(@y=3231)begin
insert into @t(o,t,c)select o.ConnectionId,3234,18 from Connection o,@c c where c.t=3231 and c.o=o.Record1RoleId
insert into @t(o,t,c)select o.ConnectionId,3234,16 from Connection o,@c c where c.t=3231 and c.o=o.Record2RoleId
goto a end
if(@y=113)begin
insert into @t(o,t,c)select o.IncidentId,112,1 from Incident o,@c c where c.t=113 and c.o=o.IncidentId
goto a end
if(@y=7100 and @f=0)begin
insert into @t(o,t,c)select o.DependencyNodeId,7106,5 from DependencyNode o,@c c where c.t=7100 and c.o=o.TopSolutionId
goto a end
if(@y=4703 and @f=0)begin
insert into @t(o,t,c)select o.AsyncOperationId,4700,32 from AsyncOperation o,@c c where c.t=4703 and c.o=o.WorkflowActivationId
goto a end
if(@y=4710 and @f=0)begin
insert into @t(o,t,c)select o.ProcessSessionId,4710,36 from ProcessSession o,@c c where c.t=4710 and c.o=o.PreviousLinkedSessionId
insert into @t(o,t,c)select o.ProcessSessionId,4710,24 from ProcessSession o,@c c where c.t=4710 and c.o=o.NextLinkedSessionId
insert into @t(o,t,c)select o.ProcessSessionId,4710,26 from ProcessSession o,@c c where c.t=4710 and c.o=o.OriginatingSessionId
goto a end
if(@y=129)begin
insert into @t(o,t,c)select o.SubjectId,129,6 from Subject o,@c c where c.t=129 and c.o=o.ParentSubject
goto a end
if(@y=1056)begin
insert into @t(o,t,c)select o.ProductPriceLevelId,1026,4 from ProductPriceLevel o,@c c where c.t=1056 and c.o=o.UoMScheduleId
insert into @t(o,t,c)select o.ContractDetailId,1011,31 from ContractDetail o,@c c where c.t=1056 and c.o=o.UoMScheduleId
goto a end
if(@y=4411 and @f=0)begin
insert into @t(o,t,c)select o.ImportFileId,4412,34 from ImportFile o,@c c where c.t=4411 and c.o=o.ImportMapId
goto a end
if(@y=4009)begin
insert into @t(o,t,c)select o.ResourceId,4002,10 from Resource o,@c c where c.t=4009 and c.o=o.SiteId
goto a end
if(@y=123)begin
insert into @t(o,t,c)select o.ActivityId,4208,12 from OpportunityClose o,@c c where c.t=123 and c.o=o.CompetitorId
goto a end
if(@y=9605)begin
insert into @t(o,t,c)select o.MailboxId,9606,50 from Mailbox o,@c c where c.t=9605 and c.o=o.EmailServerProfile
insert into @t(o,t,c)select o.OrganizationId,1019,237 from Organization o,@c c where c.t=9605 and c.o=o.DefaultEmailServerProfileId
goto a end
if(@y=4413 and @f=0)begin
insert into @t(o,t,c)select o.ImportLogId,4423,19 from ImportLog o,@c c where c.t=4413 and c.o=o.ImportDataId
goto a end
if(@y=4003)begin
insert into @t(o,t,c)select o.ServiceId,4001,15 from Service o,@c c where c.t=4003 and c.o=o.CalendarId
insert into @t(o,t,c)select o.BusinessUnitId,10,85 from BusinessUnit o,@c c where c.t=4003 and c.o=o.CalendarId
insert into @t(o,t,c)select o.CalendarRuleId,4004,25 from CalendarRule o,@c c where c.t=4003 and c.o=o.InnerCalendarId
insert into @t(o,t,c)select o.OrganizationId,1019,69 from Organization o,@c c where c.t=4003 and c.o=o.BusinessClosureCalendarId
insert into @t(o,t,c)select o.CalendarId,4003,38 from Calendar o,@c c where c.t=4003 and c.o=o.HolidayScheduleCalendarId
goto a end
if(@y=4000)begin
insert into @t(o,t,c)select o.AccountId,1,164 from Account o,@c c where c.t=4000 and c.o=o.PreferredEquipmentId
insert into @t(o,t,c)select o.ContactId,2,183 from Contact o,@c c where c.t=4000 and c.o=o.PreferredEquipmentId
goto a end
if(@y=2010)begin
insert into @t(o,t,c)select o.OrganizationId,1019,65 from Organization o,@c c where c.t=2010 and c.o=o.AcknowledgementTemplateId
goto a end
if(@y=8 and @f=0)begin
insert into @t(o,t,c)select o.msdyn_wallsavedqueryusersettingsId,10004,50 from msdyn_wallsavedqueryusersettings o,@c c where c.t=8 and c.o=o.msdyn_userid
goto a end
if(@y=4102 and @f=0)begin
insert into @t(o,t,c)select o.DisplayStringMapId,4101,3 from DisplayStringMapAsIfPublished o,@c c where c.t=4102 and c.o=o.DisplayStringId
goto a end
if(@y=4001)begin
insert into @t(o,t,c)select o.ActivityId,4200,10 from ActivityPointer o,@c c where c.t=4001 and c.o=o.ServiceId
insert into @t(o,t,c)select o.ContactId,2,174 from Contact o,@c c where c.t=4001 and c.o=o.PreferredServiceId
insert into @t(o,t,c)select o.AccountId,1,163 from Account o,@c c where c.t=4001 and c.o=o.PreferredServiceId
goto a end
if(@y=4500)begin
insert into @t(o,t,c)select o.CustomerOpportunityRoleId,4503,13 from CustomerOpportunityRole o,@c c where c.t=4500 and c.o=o.OpportunityRoleId
goto a end
if(@y=2020)begin
insert into @t(o,t,c)select o.TeamId,9,95 from Team o,@c c where c.t=2020 and c.o=o.QueueId
insert into @t(o,t,c)select o.SystemUserId,8,135 from SystemUser o,@c c where c.t=2020 and c.o=o.QueueId
goto a end
if(@y=9606)begin
insert into @t(o,t,c)select o.SystemUserId,8,155 from SystemUser o,@c c where c.t=9606 and c.o=o.DefaultMailbox
insert into @t(o,t,c)select o.QueueId,2020,113 from Queue o,@c c where c.t=9606 and c.o=o.DefaultMailbox
goto a end
if(@y=9750)begin
insert into @t(o,t,c)select o.IncidentId,112,130 from Incident o,@c c where c.t=9750 and c.o=o.SLAInvokedId
if(@f=0)begin
insert into @t(o,t,c)select o.EntitlementTemplateId,9702,43 from EntitlementTemplate o,@c c where c.t=9750 and c.o=o.SLAId
insert into @t(o,t,c)select o.EntitlementId,9700,47 from Entitlement o,@c c where c.t=9750 and c.o=o.SLAId
end goto a end
if(@y=9100)begin
insert into @t(o,t,c)select o.ReportId,9100,23 from ReportAsIfPublished o,@c c where c.t=9100 and c.o=o.ParentReportId
insert into @t(o,t,c)select o.ReportLinkId,9104,13 from ReportLink o,@c c where c.t=9100 and c.o=o.LinkedReportId
goto a end
if(@y=9702 and @f=0)begin
insert into @t(o,t,c)select o.EntitlementId,9700,52 from Entitlement o,@c c where c.t=9702 and c.o=o.EntitlementTemplateId
goto a end
if(@y=4400)begin
insert into @t(o,t,c)select o.SalesOrderId,1088,95 from SalesOrder o,@c c where c.t=4400 and c.o=o.CampaignId
insert into @t(o,t,c)select o.OpportunityId,3,63 from Opportunity o,@c c where c.t=4400 and c.o=o.CampaignId
insert into @t(o,t,c)select o.LeadId,4,133 from Lead o,@c c where c.t=4400 and c.o=o.CampaignId
insert into @t(o,t,c)select o.QuoteId,1084,90 from Quote o,@c c where c.t=4400 and c.o=o.CampaignId
goto a end
if(@y=9700)begin
insert into @t(o,t,c)select o.IncidentId,112,134 from Incident o,@c c where c.t=9700 and c.o=o.EntitlementId
goto a end
if(@y=1)begin
insert into @t(o,t,c)select o.AccountId,1,161 from Account o,@c c where c.t=1 and c.o=o.MasterId
insert into @t(o,t,c)select o.ActivityId,4202,94 from Email o,@c c where c.t=1 and c.o=o.SendersAccount and o.SendersAccountObjectTypeCode=1
insert into @t(o,t,c)select o.LeadId,4,174 from Lead o,@c c where c.t=1 and c.o=o.ParentAccountId
insert into @t(o,t,c)select o.AccountId,1,57 from Account o,@c c where c.t=1 and c.o=o.ParentAccountId
insert into @t(o,t,c)select o.OpportunityId,3,131 from Opportunity o,@c c where c.t=1 and c.o=o.ParentAccountId
if(@f=0)begin
insert into @t(o,t,c)select o.ActivityId,4216,101 from SocialActivity o,@c c where c.t=1 and c.o=o.PostAuthor and o.PostAuthorType=1
insert into @t(o,t,c)select o.ActivityId,4216,96 from SocialActivity o,@c c where c.t=1 and c.o=o.PostAuthorAccount and o.PostAuthorAccountType=1
insert into @t(o,t,c)select o.EntitlementId,9700,110 from Entitlement o,@c c where c.t=1 and c.o=o.AccountId and o.CustomerIdType=1
end goto a end
if(@y=2)begin
insert into @t(o,t,c)select o.OpportunityId,3,135 from Opportunity o,@c c where c.t=2 and c.o=o.ParentContactId
insert into @t(o,t,c)select o.IncidentId,112,330 from Incident o,@c c where c.t=2 and c.o=o.PrimaryContactId
insert into @t(o,t,c)select o.ContactId,2,175 from Contact o,@c c where c.t=2 and c.o=o.MasterId
insert into @t(o,t,c)select o.ContactId,2,179 from Contact o,@c c where c.t=2 and c.o=o.ParentCustomerId and o.ParentCustomerIdType=2
insert into @t(o,t,c)select o.LeadId,4,175 from Lead o,@c c where c.t=2 and c.o=o.ParentContactId
insert into @t(o,t,c)select o.AccountId,1,20 from Account o,@c c where c.t=2 and c.o=o.PrimaryContactId
insert into @t(o,t,c)select o.IncidentId,112,36 from Incident o,@c c where c.t=2 and c.o=o.ResponsibleContactId
if(@f=0)begin
insert into @t(o,t,c)select o.EntitlementId,9700,114 from Entitlement o,@c c where c.t=2 and c.o=o.ContactId
insert into @t(o,t,c)select o.ActivityId,4216,101 from SocialActivity o,@c c where c.t=2 and c.o=o.PostAuthor and o.PostAuthorType=2
insert into @t(o,t,c)select o.ActivityId,4216,96 from SocialActivity o,@c c where c.t=2 and c.o=o.PostAuthorAccount and o.PostAuthorAccountType=2
end goto a end
if(@y=99)begin
insert into @t(o,t,c)select o.IncidentId,112,119 from Incident o,@c c where c.t=99 and c.o=o.SocialProfileId
goto a end
if(@y=4)begin
insert into @t(o,t,c)select o.OpportunityId,3,23 from Opportunity o,@c c where c.t=4 and c.o=o.OriginatingLeadId
insert into @t(o,t,c)select o.LeadId,4,132 from Lead o,@c c where c.t=4 and c.o=o.MasterId
insert into @t(o,t,c)select o.AccountId,1,17 from Account o,@c c where c.t=4 and c.o=o.OriginatingLeadId
insert into @t(o,t,c)select o.ContactId,2,8 from Contact o,@c c where c.t=4 and c.o=o.OriginatingLeadId
goto a end
if(@y=4502)begin
insert into @t(o,t,c)select o.CustomerRelationshipId,4502,11 from CustomerRelationship o,@c c where c.t=4502 and c.o=o.ConverseRelationshipId
goto a end
if(@y=3)begin
insert into @t(o,t,c)select o.LeadId,4,214 from Lead o,@c c where c.t=3 and c.o=o.QualifyingOpportunityId
goto a end
if(@y=112)begin
insert into @t(o,t,c)select o.IncidentId,112,101 from Incident o,@c c where c.t=112 and c.o=o.ExistingCase
insert into @t(o,t,c)select o.LeadId,4,224 from Lead o,@c c where c.t=112 and c.o=o.OriginatingCaseId
insert into @t(o,t,c)select o.IncidentId,112,137 from Incident o,@c c where c.t=112 and c.o=o.MasterId
goto a end
if(@y=9600)begin
insert into @t(o,t,c)select o.GoalId,9600,39 from Goal o,@c c where c.t=9600 and c.o=o.ParentGoalId
goto a end
if(@y=1022)begin
insert into @t(o,t,c)select o.CampaignId,4400,8 from Campaign o,@c c where c.t=1022 and c.o=o.PriceListId
insert into @t(o,t,c)select o.OpportunityId,3,3 from Opportunity o,@c c where c.t=1022 and c.o=o.PriceLevelId
goto a end
if(@y=4202)begin
insert into @t(o,t,c)select o.ActivityId,4202,102 from Email o,@c c where c.t=4202 and c.o=o.ParentActivityId
goto a end
if(@y=4401)begin
insert into @t(o,t,c)select o.LeadId,4,182 from Lead o,@c c where c.t=4401 and c.o=o.RelatedObjectId
goto a end
if(@y=3234)begin
insert into @t(o,t,c)select o.ConnectionId,3234,10 from Connection o,@c c where c.t=3234 and c.o=o.RelatedConnectionId
goto a end
a:
if(@y in(1,2,3,4,112,1010,1084,1088,1090,4400,4402,4406,9700,9702,10000))
insert into @t(o,t,c)select o.ActivityId,4200,21 from ActivityPointer o,@c c where c.t=@y and c.o=o.RegardingObjectId and o.RegardingObjectTypeCode=@y
if(@y in(1,2,3,4,112,1010,1084,1088,1090,4400,9700))
insert into @t(o,t,c)select o.ActivityId,4214,32 from ServiceAppointment o,@c c where c.t=@y and c.o=o.RegardingObjectId and o.RegardingObjectTypeCode=@y
if(@y in(1,2,4,8,2020,4000))
insert into @t(o,t,c)select o.ActivityId,4202,90 from Email o,@c c where c.t=@y and c.o=o.EmailSender and o.EmailSenderObjectTypeCode=@y
if(1=@is_delete_entity_schema)begin
if(@y in(10000))
insert into @t(o,t,c)select o.ActivityId,4214,32 from ServiceAppointment o,@c c where c.t=@y and c.o=o.RegardingObjectId and o.RegardingObjectTypeCode=@y
if(@y in(10000))
insert into @t(o,t,c)select o.ActivityId,4216,64 from SocialActivity o,@c c where c.t=@y and c.o=o.RegardingObjectId and o.RegardingObjectTypeCode=@y
if(@y in(10000))
insert into @t(o,t,c)select o.ActivityId,4204,1 from Fax o,@c c where c.t=@y and c.o=o.RegardingObjectId and o.RegardingObjectTypeCode=@y
if(@y in(10000))
insert into @t(o,t,c)select o.ActivityId,4202,36 from Email o,@c c where c.t=@y and c.o=o.RegardingObjectId and o.RegardingObjectTypeCode=@y
if(@y in(10000))
insert into @t(o,t,c)select o.ActivityId,4210,10 from PhoneCall o,@c c where c.t=@y and c.o=o.RegardingObjectId and o.RegardingObjectTypeCode=@y
if(@y in(10000))
insert into @t(o,t,c)select o.ActivityId,4207,4 from Letter o,@c c where c.t=@y and c.o=o.RegardingObjectId and o.RegardingObjectTypeCode=@y
if(@y in(10000))
insert into @t(o,t,c)select o.ActivityId,4212,4 from Task o,@c c where c.t=@y and c.o=o.RegardingObjectId and o.RegardingObjectTypeCode=@y
if(@y in(10000))
insert into @t(o,t,c)select o.ActivityId,4251,38 from RecurringAppointmentMaster o,@c c where c.t=@y and c.o=o.RegardingObjectId and o.RegardingObjectTypeCode=@y
if(@y in(10000))
insert into @t(o,t,c)select o.ActivityId,4201,10 from Appointment o,@c c where c.t=@y and c.o=o.RegardingObjectId and o.RegardingObjectTypeCode=@y
end
FETCH NEXT FROM yc INTO @y
end
CLOSE yc
DEALLOCATE yc
return
end
