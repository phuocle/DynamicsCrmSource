USE [D365_MSCRM]
GO
/****** Object:  UserDefinedFunction [dbo].[fn_GetGuidsFromString]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create function [dbo].[fn_GetGuidsFromString](
    @idsString nvarchar(max))
returns @tbl table (
    id uniqueidentifier primary key clustered) 
as
begin;
    -- Expected list string for Guids fixed length 
    -- No separator for: speed of parsing and reduce of network data
    -- Example for Guids with value 1 and 3: 
    --    N'00000000-0000-0000-0000-00000000000100000000-0000-0000-0000-000000000003'
    declare @guidLength int = 36;
    declare @currentId int = 0;
    declare @countGuids int;
    declare @currentGuid uniqueidentifier;

    set @countGuids = len(@idsString) / @guidLength;

    while (@currentId < @countGuids)
    begin;
        set @currentGuid = cast(substring(@idsString, @currentId * @guidLength + 1, @guidLength) as uniqueidentifier);
        insert into @tbl values (@currentGuid);
        select @currentId = @currentId + 1;
    end;

    return;
end;
GO
