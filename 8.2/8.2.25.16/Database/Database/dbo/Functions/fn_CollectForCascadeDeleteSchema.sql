CREATE function [dbo].[fn_CollectForCascadeDeleteSchema]
(
@root_otc int,
@f int
)
returns @t table
(
o uniqueidentifier NOT NULL,
t int NOT NULL,
d int NOT NULL
PRIMARY KEY CLUSTERED(t,o,d)
)as begin
declare @y int=@root_otc 
declare @n int=-1
if(@y=10001)begin
insert into @t(o,t,d)select msdyn_PostConfigId,10001,@n from msdyn_PostConfig
goto a end
if(@y=10000)begin
insert into @t(o,t,d)select msdyn_PostAlbumId,10000,@n from msdyn_PostAlbum
goto a end
if(@y=10002)begin
insert into @t(o,t,d)select msdyn_PostRuleConfigId,10002,@n from msdyn_PostRuleConfig
goto a end
if(@y=10003)begin
insert into @t(o,t,d)select msdyn_wallsavedqueryId,10003,@n from msdyn_wallsavedquery
goto a end
if(@y=10004)begin
insert into @t(o,t,d)select msdyn_wallsavedqueryusersettingsId,10004,@n from msdyn_wallsavedqueryusersettings
goto a end
a:
set @n=0
if(@y in(10001,10003,10004,10002,10000))
insert into @t(o,t,d)select MailboxTrackingFolderId,9608,@n from MailboxTrackingFolder where RegardingObjectTypeCode=@y
if(@y in(10000))
insert into @t(o,t,d)select AnnotationId,5,@n from Annotation where ObjectTypeCode=@y
if(@y in(10000))
insert into @t(o,t,d)select DuplicateId,4415,@n from DuplicateRecord where BaseRecordIdTypeCode=@y and DuplicateId not in(select o from @t where t=4415)
if(@y in(10000))
insert into @t(o,t,d)select DuplicateId,4415,@n from DuplicateRecord where DuplicateRecordIdTypeCode=@y and DuplicateId not in(select o from @t where t=4415)
if(@y in(10003,10004,10002,10000,10001))
insert into @t(o,t,d)select BulkDeleteFailureId,4425,@n from BulkDeleteFailure where RegardingObjectTypeCode=@y
if(@y in(10000))
insert into @t(o,t,d)select ConnectionId,3234,@n from Connection where Record1IdObjectTypeCode=@y and ConnectionId not in(select o from @t where t=3234)
if(@y in(10000))
insert into @t(o,t,d)select ConnectionId,3234,@n from Connection where Record2IdObjectTypeCode=@y and ConnectionId not in(select o from @t where t=3234)
if(@y in(10004,10003,10002,10000,10001))
insert into @t(o,t,d)select SyncErrorId,9869,@n from SyncError where RegardingObjectTypeCode=@y
if(@y in(10004,10003,10002,10000,10001))
insert into @t(o,t,d)select PrincipalObjectAttributeAccessId,44,@n from PrincipalObjectAttributeAccess where ObjectTypeCode=@y
return
end
