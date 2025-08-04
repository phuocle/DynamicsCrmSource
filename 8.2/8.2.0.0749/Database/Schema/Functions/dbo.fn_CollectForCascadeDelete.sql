SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


-----------------------------------------------------------------------
-- THIS IS A DUMMY FUNCTION EXISTING AS PLACE HOLDER, THE REAL       --
-- FUNCTION BODY WILL BE DYNAMICALLY GENERATED AT SETUP / RUNTIME    --
-----------------------------------------------------------------------
create function [dbo].[fn_CollectForCascadeDelete]
(
	@x CascadeCollectionTable readonly,
	@f int, -- is Offline or not; if the call is comming from Outlook Offline or not
	@u int  -- is coming from a managed solution operation
)
returns @t table
(
	o uniqueidentifier not null, -- entity object id
	t int not null, -- object type code for the entity
	d int not null, -- depth, at what level in the tree this entity was collected; entities are inter-connected through relationships
	s int not null  -- The ComponentState of the record if it is solution-aware and is needed to be returned, otherwise 0
	primary key clustered(t,o,d) -- we use this index in the collection logic
)
as 
begin;
	return;
end;
GO
