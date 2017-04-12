SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


-----------------------------------------------------------------------
-- THIS IS A DUMMY FUNCTION EXISTING AS PLACE HOLDER, THE REAL       --
-- FUNCTION BODY WILL BE DYNAMICALLY GENERATED AT SETUP / RUNTIME    --
-----------------------------------------------------------------------
create function [dbo].[fn_CollectForCascadeRemoveLink]
(
	@c CascadeCollectionTable readonly, -- this in-memory table contains all entities that have been collected by passing through the Cascade relationships as part of this Delete operation
	@is_delete_entity_schema int, -- if delete schema then special code gets executed for concrete activities (Task, Phone call, custom activitites etc). See fn_CollectForCascadeWrapper function for details
	@topType int, -- This is the type of the top-level object or objects we started the cascading from (they must be the same)
	@f int -- is Offline or not; if the call is comming from Outlook Offline or not
)
returns @t table
( 
	o uniqueidentifier not null, -- entity object id
	t int not null, -- object type code for the entity
	c int not null, -- column number for the attribute that has to be cleared (to reset value to DBNULL)
	primary key clustered(t,o,c)
)
as 
begin;
	return;
end;
GO
