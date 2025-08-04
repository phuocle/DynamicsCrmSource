SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


create	procedure	[dbo].[p_InsertMultipleAuditRows](
	@doc ntext, 
	@transactionid uniqueidentifier, 
	@EntityType int,
	@auditoperation tinyint, 
	@auditaction tinyint, 
	@audituser uniqueidentifier ,
	@callinguser uniqueidentifier, 
	@attributemask nvarchar(max), 
	@changedata nvarchar(max),
	@audituseradditionalinfo nvarchar(350)) 

as
begin;
	declare @idoc int;
	declare @datetime datetime;
	declare @docxml xml;

	declare @tempMemberBase table (
	ObjectId uniqueidentifier,
	unique nonclustered (ObjectId));

	--typecast the input variable of ntext type into xml type.
	set @docxml = cast(@doc as xml);

	set @datetime = dbo.fn_GetUtcDateTrunc();

	select @docxml;

	--The format of the xml document @doc is like this
	--	<Values>
	--		<Value ObjectId="GUID1">
	--		<Value ObjectId="GUID1">
	--		<Value ObjectId="GUID1">
	--	</Values>

	--Insert all the ObjectIds into the temp table for later use in inserting into AuditBase
	insert into @tempMemberBase 
	select T.c.value('./@ObjectId', 'uniqueidentifier') 
	from @docxml.nodes('/Values/Value') T(c);

	insert into AuditBase(TransactionId, ObjectTypeCode, Operation, Action,
		UserId, CallingUserId, CreatedOn, ObjectId, AttributeMask, ChangeData,
		UserAdditionalInfo) 
	select @transactionid, @EntityType, @auditoperation, @auditaction,
		@audituser, @callinguser, @datetime, ObjectId, @attributemask, @changedata,
		@audituseradditionalinfo 
	from @tempMemberBase;

end;
GO
