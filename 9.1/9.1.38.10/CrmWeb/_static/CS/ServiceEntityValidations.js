
function IsEntityRecordValid(id)
{
    var oCommand = new RemoteCommand("CustomerService","IsEntityRecordValid");
    oCommand.SetParameter("id",id);
    oCommand.SetParameter("entityName",Xrm.Page.data.entity.getEntityName());
    var oResult = oCommand.Execute();
    if(oResult.Success)
        return oResult.ReturnValue;
    return false
}
function EntityRecordErrorNotification(id)
{
    var oCommand = new RemoteCommand("CustomerService","EntityRecordErrorNotification");
    oCommand.SetParameter("id",id);
    oCommand.SetParameter("entityName",Xrm.Page.data.entity.getEntityName());
    var oResult = oCommand.Execute();
    if(oResult.Success)
        return oResult.ReturnValue.length != null ? oResult.ReturnValue : "";
    return ""
}
