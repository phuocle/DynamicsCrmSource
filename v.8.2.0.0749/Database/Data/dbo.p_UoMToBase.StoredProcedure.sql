USE [D365_MSCRM]
GO
/****** Object:  StoredProcedure [dbo].[p_UoMToBase]    Script Date: 4/10/2017 9:59:58 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create procedure [dbo].[p_UoMToBase] 
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
