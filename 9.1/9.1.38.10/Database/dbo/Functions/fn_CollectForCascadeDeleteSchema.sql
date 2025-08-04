CREATE function [dbo].[fn_CollectForCascadeDeleteSchema]
(
@root_otc int,
@f int
)
returns @t table
(
	o uniqueidentifier	not null,			-- entity's object id
	t int				not null,			-- entity's object type code
	d int				not null,			-- depth

primary key clustered(t, o, d)
)
as
begin
declare @y int=@root_otc 
declare @n int=-1

if (@y=10002)begin
insert into @t(o,t,d)select msdyn_solutioncomponentdatasourceId,10002,@n from msdyn_solutioncomponentdatasource
goto a end
if (@y=10108)begin
insert into @t(o,t,d)select msdyn_CollabGraphResourceId,10108,@n from msdyn_CollabGraphResource
goto a end
if (@y=10094)begin
insert into @t(o,t,d)select msdyn_actioncardregardingId,10094,@n from msdyn_actioncardregarding
goto a end
if (@y=10033)begin
insert into @t(o,t,d)select SettingDefinitionId,10033,@n from SettingDefinition
goto a end
if (@y=10100)begin
insert into @t(o,t,d)select msdyn_autocapturesettingsId,10100,@n from msdyn_autocapturesettings
goto a end
if (@y=10109)begin
insert into @t(o,t,d)select msdyn_msteamssettingId,10109,@n from msdyn_msteamssetting
goto a end
if (@y=10049)begin
insert into @t(o,t,d)select msdyn_federatedarticleId,10049,@n from msdyn_federatedarticle
goto a end
if (@y=10058)begin
insert into @t(o,t,d)select InternalCatalogAssignmentId,10058,@n from InternalCatalogAssignment
goto a end
if (@y=10006)begin
insert into @t(o,t,d)select msdyn_PostConfigId,10006,@n from msdyn_PostConfig
goto a end
if (@y=10008)begin
insert into @t(o,t,d)select msdyn_wallsavedqueryId,10008,@n from msdyn_wallsavedquery
goto a end
if (@y=10009)begin
insert into @t(o,t,d)select msdyn_wallsavedqueryusersettingsId,10009,@n from msdyn_wallsavedqueryusersettings
goto a end
if (@y=10038)begin
insert into @t(o,t,d)select msdyn_helppageId,10038,@n from msdyn_helppage
goto a end
if (@y=10031)begin
insert into @t(o,t,d)select AppModuleComponentNodeId,10031,@n from AppModuleComponentNode
goto a end
if (@y=10039)begin
insert into @t(o,t,d)select msdyn_tourId,10039,@n from msdyn_tour
goto a end
if (@y=10056)begin
insert into @t(o,t,d)select CatalogId,10056,@n from Catalog
goto a end
if (@y=10020)begin
insert into @t(o,t,d)select ExportSolutionUploadId,10020,@n from ExportSolutionUpload
goto a end
if (@y=10097)begin
insert into @t(o,t,d)select msdyn_flowcardtypeId,10097,@n from msdyn_flowcardtype
goto a end
if (@y=431)begin
insert into @t(o,t,d)select AttributeImageConfigId,431,@n from AttributeImageConfig
goto a end
if (@y=10093)begin
insert into @t(o,t,d)select msdyn_sikeyvalueconfigId,10093,@n from msdyn_sikeyvalueconfig
goto a end
if (@y=10007)begin
insert into @t(o,t,d)select msdyn_PostRuleConfigId,10007,@n from msdyn_PostRuleConfig
goto a end
if (@y=10054)begin
insert into @t(o,t,d)select msdyn_knowledgesearchinsightId,10054,@n from msdyn_knowledgesearchinsight
goto a end
if (@y=10111)begin
insert into @t(o,t,d)select msdyn_TeamsCollaborationId,10111,@n from msdyn_TeamsCollaboration
goto a end
if (@y=10012)begin
insert into @t(o,t,d)select solutioncomponentrelationshipconfigurationId,10012,@n from solutioncomponentrelationshipconfiguration
goto a end
if (@y=380)begin
insert into @t(o,t,d)select EnvironmentVariableDefinitionId,380,@n from EnvironmentVariableDefinition
goto a end
if (@y=10098)begin
insert into @t(o,t,d)select msdyn_salesinsightssettingsId,10098,@n from msdyn_salesinsightssettings
goto a end
if (@y=10099)begin
insert into @t(o,t,d)select msdyn_autocaptureruleId,10099,@n from msdyn_autocapturerule
goto a end
if (@y=10030)begin
insert into @t(o,t,d)select AppModuleComponentEdgeId,10030,@n from AppModuleComponentEdge
goto a end
if (@y=400)begin
insert into @t(o,t,d)select msdyn_AITemplateId,400,@n from msdyn_AITemplate
goto a end
if (@y=10021)begin
insert into @t(o,t,d)select datalakefolderId,10021,@n from datalakefolder
goto a end
if (@y=10043)begin
insert into @t(o,t,d)select botcomponentId,10043,@n from botcomponent
goto a end
if (@y=10045)begin
insert into @t(o,t,d)select botcomponent_botcomponentId,10045,@n from botcomponent_botcomponent
goto a end
if (@y=10048)begin
insert into @t(o,t,d)select msdyn_richtextfileId,10048,@n from msdyn_richtextfile
goto a end
if (@y=10068)begin
insert into @t(o,t,d)select msdyn_AIFpTrainingDocumentId,10068,@n from msdyn_AIFpTrainingDocument
goto a end
if (@y=10029)begin
insert into @t(o,t,d)select AppElementId,10029,@n from AppElement
goto a end
if (@y=10032)begin
insert into @t(o,t,d)select AppSettingId,10032,@n from AppSetting
goto a end
if (@y=10037)begin
insert into @t(o,t,d)select connectionreferenceId,10037,@n from connectionreference
goto a end
if (@y=10088)begin
insert into @t(o,t,d)select msdyn_playbookcategoryId,10088,@n from msdyn_playbookcategory
goto a end
if (@y=10106)begin
insert into @t(o,t,d)select msdyn_notesanalysisconfigId,10106,@n from msdyn_notesanalysisconfig
goto a end
if (@y=10077)begin
insert into @t(o,t,d)select msdyn_upgraderunId,10077,@n from msdyn_upgraderun
goto a end
if (@y=9704)begin
insert into @t(o,t,d)select EntitlementEntityAllocationTypeMappingId,9704,@n from EntitlementEntityAllocationTypeMapping
goto a end
if (@y=10076)begin
insert into @t(o,t,d)select msdyn_databaseversionId,10076,@n from msdyn_databaseversion
goto a end
if (@y=10025)begin
insert into @t(o,t,d)select ProvisionLanguageForUserId,10025,@n from ProvisionLanguageForUser
goto a end
if (@y=10041)begin
insert into @t(o,t,d)select conversationtranscriptId,10041,@n from conversationtranscript
goto a end
if (@y=10011)begin
insert into @t(o,t,d)select solutioncomponentconfigurationId,10011,@n from solutioncomponentconfiguration
goto a end
if (@y=10010)begin
insert into @t(o,t,d)select solutioncomponentattributeconfigurationId,10010,@n from solutioncomponentattributeconfiguration
goto a end
if (@y=10096)begin
insert into @t(o,t,d)select msdyn_entityrankingruleId,10096,@n from msdyn_entityrankingrule
goto a end
if (@y=381)begin
insert into @t(o,t,d)select EnvironmentVariableValueId,381,@n from EnvironmentVariableValue
goto a end
if (@y=10072)begin
insert into @t(o,t,d)select msdyn_AIOdTrainingImageId,10072,@n from msdyn_AIOdTrainingImage
goto a end
if (@y=10107)begin
insert into @t(o,t,d)select msdyn_icebreakersconfigId,10107,@n from msdyn_icebreakersconfig
goto a end
if (@y=10022)begin
insert into @t(o,t,d)select datalakefolderpermissionId,10022,@n from datalakefolderpermission
goto a end
if (@y=10079)begin
insert into @t(o,t,d)select msdyn_upgradeversionId,10079,@n from msdyn_upgradeversion
goto a end
if (@y=10078)begin
insert into @t(o,t,d)select msdyn_upgradestepId,10078,@n from msdyn_upgradestep
goto a end
if (@y=10046)begin
insert into @t(o,t,d)select botcomponent_workflowId,10046,@n from botcomponent_workflow
goto a end
if (@y=4720)begin
insert into @t(o,t,d)select flowsessionId,4720,@n from FlowSession
goto a end
if (@y=10036)begin
insert into @t(o,t,d)select workflowbinaryId,10036,@n from workflowbinary
goto a end
if (@y=10035)begin
insert into @t(o,t,d)select processstageparameterId,10035,@n from processstageparameter
goto a end
if (@y=10050)begin
insert into @t(o,t,d)select msdyn_federatedarticleincidentId,10050,@n from msdyn_federatedarticleincident
goto a end
if (@y=10071)begin
insert into @t(o,t,d)select msdyn_AIOdTrainingBoundingBoxId,10071,@n from msdyn_AIOdTrainingBoundingBox
goto a end
if (@y=10070)begin
insert into @t(o,t,d)select msdyn_AIOdLabelId,10070,@n from msdyn_AIOdLabel
goto a end
if (@y=10069)begin
insert into @t(o,t,d)select msdyn_AIOdImageId,10069,@n from msdyn_AIOdImage
goto a end
if (@y=10042)begin
insert into @t(o,t,d)select botId,10042,@n from bot
goto a end
if (@y=10044)begin
insert into @t(o,t,d)select bot_botcomponentId,10044,@n from bot_botcomponent
goto a end
if (@y=10057)begin
insert into @t(o,t,d)select CatalogAssignmentId,10057,@n from CatalogAssignment
goto a end
if (@y=10023)begin
insert into @t(o,t,d)select datalakeworkspaceId,10023,@n from datalakeworkspace
goto a end
if (@y=10074 and @f=0)begin
insert into @t(o,t,d)select listoperationId,10074,@n from listoperation
goto a end
if (@y=10019)begin
insert into @t(o,t,d)select StageSolutionUploadId,10019,@n from StageSolutionUpload
goto a end
if (@y=10024)begin
insert into @t(o,t,d)select datalakeworkspacepermissionId,10024,@n from datalakeworkspacepermission
goto a end
if (@y=10090)begin
insert into @t(o,t,d)select msdyn_playbooktemplateId,10090,@n from msdyn_playbooktemplate
goto a end
if (@y=10047)begin
insert into @t(o,t,d)select PDFSettingId,10047,@n from PDFSetting
goto a end
if (@y=10059)begin
insert into @t(o,t,d)select CustomAPIId,10059,@n from CustomAPI
goto a end
if (@y=10061)begin
insert into @t(o,t,d)select CustomAPIResponsePropertyId,10061,@n from CustomAPIResponseProperty
goto a end
if (@y=10034)begin
insert into @t(o,t,d)select CanvasAppExtendedMetadataId,10034,@n from CanvasAppExtendedMetadata
goto a end
if (@y=10051)begin
insert into @t(o,t,d)select msdyn_kmfederatedsearchconfigId,10051,@n from msdyn_kmfederatedsearchconfig
goto a end
if (@y=10085)begin
insert into @t(o,t,d)select msdyn_callablecontextId,10085,@n from msdyn_callablecontext
goto a end
if (@y=10091)begin
insert into @t(o,t,d)select msdyn_callablecontext_msdyn_playbooktemplateId,10091,@n from msdyn_callablecontext_msdyn_playbooktemplate
goto a end
if (@y=10075)begin
insert into @t(o,t,d)select marketingformdisplayattributesId,10075,@n from marketingformdisplayattributes
goto a end
if (@y=372)begin
insert into @t(o,t,d)select connectorId,372,@n from connector
goto a end
if (@y=10110)begin
insert into @t(o,t,d)select msdyn_msteamssettingsv2Id,10110,@n from msdyn_msteamssettingsv2
goto a end
if (@y=10092)begin
insert into @t(o,t,d)select adminsettingsentityId,10092,@n from adminsettingsentity
goto a end
if (@y=401)begin
insert into @t(o,t,d)select msdyn_AIModelId,401,@n from msdyn_AIModel
goto a end
if (@y=10065)begin
insert into @t(o,t,d)select msdyn_AIBDatasetsContainerId,10065,@n from msdyn_AIBDatasetsContainer
goto a end
if (@y=10062)begin
insert into @t(o,t,d)select msdyn_AIBDatasetId,10062,@n from msdyn_AIBDataset
goto a end
if (@y=10063)begin
insert into @t(o,t,d)select msdyn_AIBDatasetFileId,10063,@n from msdyn_AIBDatasetFile
goto a end
if (@y=10067)begin
insert into @t(o,t,d)select msdyn_AIBFileAttachedDataId,10067,@n from msdyn_AIBFileAttachedData
goto a end
if (@y=10064)begin
insert into @t(o,t,d)select msdyn_AIBDatasetRecordId,10064,@n from msdyn_AIBDatasetRecord
goto a end
if (@y=10066)begin
insert into @t(o,t,d)select msdyn_AIBFileId,10066,@n from msdyn_AIBFile
goto a end
if (@y=10003)begin
insert into @t(o,t,d)select msdyn_relationshipinsightsunifiedconfigId,10003,@n from msdyn_relationshipinsightsunifiedconfig
goto a end
if (@y=10052)begin
insert into @t(o,t,d)select msdyn_knowledgearticleimageId,10052,@n from msdyn_knowledgearticleimage
goto a end
if (@y=432)begin
insert into @t(o,t,d)select EntityImageConfigId,432,@n from EntityImageConfig
goto a end
if (@y=10060)begin
insert into @t(o,t,d)select CustomAPIRequestParameterId,10060,@n from CustomAPIRequestParameter
goto a end
if (@y=10040)begin
insert into @t(o,t,d)select msdynce_botcontentId,10040,@n from msdynce_botcontent
goto a end
if (@y=10095)begin
insert into @t(o,t,d)select msdyn_actioncardrolesettingId,10095,@n from msdyn_actioncardrolesetting
goto a end
if (@y=10004)begin
insert into @t(o,t,d)select msdyn_siconfigId,10004,@n from msdyn_siconfig
goto a end
if (@y=10005)begin
insert into @t(o,t,d)select msdyn_PostAlbumId,10005,@n from msdyn_PostAlbum
goto a end
if (@y=10086 and @f=0)begin
insert into @t(o,t,d)select msdyn_playbookactivityId,10086,@n from msdyn_playbookactivity
goto a end
if (@y=10087)begin
insert into @t(o,t,d)select msdyn_playbookactivityattributeId,10087,@n from msdyn_playbookactivityattribute
goto a end
if (@y=10017)begin
insert into @t(o,t,d)select packageId,10017,@n from package
goto a end
if (@y=10018)begin
insert into @t(o,t,d)select package_solutionId,10018,@n from package_solution
goto a end
if (@y=10027)begin
insert into @t(o,t,d)select cascadegrantrevokeaccessversiontrackerId,10027,@n from cascadegrantrevokeaccessversiontracker
goto a end
if (@y=10026)begin
insert into @t(o,t,d)select cascadegrantrevokeaccessrecordstrackerId,10026,@n from cascadegrantrevokeaccessrecordstracker
goto a end
if (@y=10101)begin
insert into @t(o,t,d)select msdyn_untrackedappointmentId,10101,@n from msdyn_untrackedappointment
goto a end
if (@y=10055)begin
insert into @t(o,t,d)select msdyn_knowledgearticletemplateId,10055,@n from msdyn_knowledgearticletemplate
goto a end
if (@y=10089)begin
insert into @t(o,t,d)select msdyn_playbookinstanceId,10089,@n from msdyn_playbookinstance
goto a end
if (@y=10080)begin
insert into @t(o,t,d)select activitymonitorId,10080,@n from activitymonitor
goto a end
if (@y=402)begin
insert into @t(o,t,d)select msdyn_AIConfigurationId,402,@n from msdyn_AIConfiguration
goto a end
if (@y=10073)begin
insert into @t(o,t,d)select msdyn_aiodlabel_msdyn_aiconfigurationId,10073,@n from msdyn_aiodlabel_msdyn_aiconfiguration
goto a end
if (@y=10053)begin
insert into @t(o,t,d)select msdyn_knowledgeinteractioninsightId,10053,@n from msdyn_knowledgeinteractioninsight
goto a end
a:
set @n=0
if (@y in(10086,10055))
insert into @t(o,t,d)select SharePointDocumentLocationId,9508,@n from SharePointDocumentLocation where RegardingObjectTypeCode=@y
if (@y in(10086,10055))
insert into @t(o,t,d)select SharePointDocumentId,9507,@n from SharePointDocument where RegardingObjectTypeCode=@y
if (@y in(10026,4720,10052,402,10066,10019,10020,10036,10048))
insert into @t(o,t,d)select FileAttachmentId,55,@n from FileAttachment where ObjectIdTypeCode=@y
if (@y in(10005))
insert into @t(o,t,d)select ConnectionId,3234,@n from Connection where Record2IdObjectTypeCode=@y and ConnectionId not in(select o from @t where t=3234)
if (@y in(10005))
insert into @t(o,t,d)select ConnectionId,3234,@n from Connection where Record1IdObjectTypeCode=@y and ConnectionId not in(select o from @t where t=3234)
if (@y in(10089,10068,10069,10090,10002,10005,401))
insert into @t(o,t,d)select AnnotationId,5,@n from Annotation where ObjectTypeCode=@y
if (@y in(10055))
insert into @t(o,t,d)select QueueItemId,2029,@n from QueueItem where ObjectIdTypeCode=@y
if (@y in(10080,10095,432,10085,10090,10023,10057,401,10110,10071,10079,10022,10019,10061,10065,10096,10040,10027,9704,10037,10010,10021,400,10088,10099,10077,10035,10092,10055,10007,10093,10076,10039,431,10038,10006,10078,10009,10098,10101,10024,10030,10042,10012,10025,381,10074,10047,10029,10068,10109,10054,10094,10086,10089,380,10062,10067,10041,10075,10011,10005,10003,10060,10004,10032,10034,10020,10066,10087,10059,10031,10050,10051,10053,10070,10058,10107,10033,10043,10064,402,10052,10036,10106,10111,10100,372,10056,4720,10097,10072,10108,10049,10048,10063,10017,10008,10069,10026))
insert into @t(o,t,d)select PrincipalObjectAttributeAccessId,44,@n from PrincipalObjectAttributeAccess where ObjectTypeCode=@y
if (@y in(10017,10026,10042,10070,10085,10052,10076,10106,432,10040,10034,10030,10066,10032,10074,10036,10098,10050,431,10086,10097,9704,10092,10054,10107,10075,10090,10039,10079,10093,10063,10062,10008,10078,10031,10003,10051,10049,10047,10033,10065,10067,10038,381,10011,10009,10025,10021,10020,10006,10012,10022,10080,10072,10060,10005,10029,10101,10058,10007,10089,10061,10053,10019,10077,10096,372,400,10069,10041,10048,10055,10057,10108,10010,10023,10059,4720,10111,10100,10043,10099,10071,10027,10094,380,10068,10064,10109,10037,10095,401,10035,10024,10087,10088,10056,402,10110,10004))
insert into @t(o,t,d)select SyncErrorId,9869,@n from SyncError where RegardingObjectTypeCode=@y
if (@y in(10055,10003,10075,10064,10069,10087,10089,10101,10080,10098,10086,10063,10019,10004,10011,10027,10053,10099,10021,9704,10017,10062,10051,381,10071,372,10010,10088,10052,10100,10070,10072,10097,10012,10090,10065,10022,10041,10050,10057,10085,10094,10054,10020,10024,10049,10023,380,10005,10092,10107,10066,10067,10026,10034))
insert into @t(o,t,d)select DuplicateId,4415,@n from DuplicateRecord where DuplicateRecordIdTypeCode=@y and DuplicateId not in(select o from @t where t=4415)
if (@y in(10052,10080,10085,10004,10072,10063,10050,10090,380,10012,10062,10024,10020,10005,10099,10092,10023,10107,10064,10034,10010,10070,10089,10053,10100,10057,10055,10086,10011,10022,10021,10066,10087,10075,10094,10003,10065,10069,10067,10098,10017,10027,10041,10049,10088,10101,372,10097,10051,10071,10019,9704,381,10054,10026))
insert into @t(o,t,d)select DuplicateId,4415,@n from DuplicateRecord where BaseRecordIdTypeCode=@y and DuplicateId not in(select o from @t where t=4415)
if (@y in(10053,10004,10040,10092,10110,372,10089,10024,10019,10061,10050,10080,10071,401,381,10025,10078,10042,10086,10057,10054,10072,10005,10011,4720,10088,10043,10098,10037,10062,10047,10021,10085,10036,10039,10027,380,10010,10049,10096,10056,10107,10055,10074,10095,10109,10108,10068,10063,10031,10076,10097,10033,10067,10099,10032,10075,10026,10094,10079,10101,432,10058,10052,10064,10030,10006,10034,400,10051,10077,10059,10029,10017,10065,10106,10012,10035,10020,10022,10111,10007,10038,10087,10041,9704,10048,10070,10008,10100,10090,402,10060,10093,10069,10066,10009,10003,431,10023))
insert into @t(o,t,d)select MailboxTrackingFolderId,9608,@n from MailboxTrackingFolder where RegardingObjectTypeCode=@y
if (@y in(10101,10060,10051,10047,10065,10107,10075,10069,10041,10077,10088,10048,10071,10003,10098,10110,10111,10095,10079,4720,380,10062,10093,10097,10059,10039,10025,10063,381,10024,10052,10023,10054,10037,10068,10029,372,10011,10100,10010,10022,400,10078,401,10072,10008,10067,10053,10031,10027,10017,10099,10094,10033,432,10042,10043,10085,10080,10021,10032,10057,10090,10109,10040,10066,10012,10038,10106,10026,10074,10004,10087,10019,10007,10092,9704,10009,431,10108,10064,10005,402,10056,10055,10034,10030,10058,10006,10089,10035,10049,10070,10050,10086,10061,10076,10036,10096,10020))
insert into @t(o,t,d)select BulkDeleteFailureId,4425,@n from BulkDeleteFailure where RegardingObjectTypeCode=@y
return
end
