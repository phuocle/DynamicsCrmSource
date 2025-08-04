

create procedure dbo.p_UoMToBase 
as;
begin;
    -- Update related fields.
    update #UoMBaseTemp
    set BaseUoM = b.baseuom,
        Quantity = b.quantity, 
        IsScheduleBaseUoM = b.isschedulebaseuom,
        BaseName = b.name
    from #UoMBaseTemp
         inner join FilteredUoM as b
         on #UoMBaseTemp.UoMId = b.uomid;

    --- Into the loop of finding the base unit.
    declare @notBase int;

    select @notBase = count(*)
    from #UoMBaseTemp as t
    where t.IsScheduleBaseUoM = 0;

    while (@notBase <> 0)
    begin;
        update #UoMBaseTemp 
        set BaseUoM = b.baseuom,
            Quantity = #UoMBaseTemp.Quantity * b.quantity, 
            IsScheduleBaseUoM = b.isschedulebaseuom,
            BaseName = b.name
        from #UoMBaseTemp
             inner join FilteredUoM as b
             on #UoMBaseTemp.BaseUoM = b.uomid
        where #UoMBaseTemp.IsScheduleBaseUoM = 0;

        select @notBase = count(*)
        from #UoMBaseTemp as t
        where t.IsScheduleBaseUoM = 0;
    end; -- end while (@notBase <> 0)
end;
GO
GRANT EXECUTE
    ON OBJECT::[dbo].[p_UoMToBase] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT EXECUTE
    ON OBJECT::[dbo].[p_UoMToBase] TO [CRMReaderRole]
    AS [dbo];

