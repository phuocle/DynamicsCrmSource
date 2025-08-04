

create procedure 
p_ma_DeleteListMembers
(
     @guid_list as uniqueidentifier
)
as
begin 
    declare @message nvarchar(2000)
    set nocount on

    delete from ListMemberBase where ListId = @guid_list
    
end 