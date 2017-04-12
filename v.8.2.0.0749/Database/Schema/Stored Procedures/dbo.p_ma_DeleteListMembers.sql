SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
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