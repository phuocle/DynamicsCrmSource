USE [D365_MSCRM]
GO
/****** Object:  StoredProcedure [dbo].[p_ma_DeleteListMembers]    Script Date: 4/10/2017 9:59:58 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create procedure 
[dbo].[p_ma_DeleteListMembers]
(
     @guid_list as uniqueidentifier
)
as
begin 
    declare @message nvarchar(2000)
    set nocount on

    delete from ListMemberBase where ListId = @guid_list
    
end 
GO
