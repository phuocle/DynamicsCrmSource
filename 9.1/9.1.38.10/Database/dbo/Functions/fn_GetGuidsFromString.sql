

create function dbo.fn_GetGuidsFromString(
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
GRANT SELECT
    ON OBJECT::[dbo].[fn_GetGuidsFromString] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[fn_GetGuidsFromString] TO [CRMReaderRole]
    AS [dbo];

