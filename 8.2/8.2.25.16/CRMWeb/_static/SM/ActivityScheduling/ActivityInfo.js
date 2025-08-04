
function ActivityInfo(aoCustomers,aoResources,oService,oSite,dScheduledStart,dScheduledEnd)
{
    this.Customers = aoCustomers;
    this.Resources = aoResources;
    this.Service = oService;
    this.Site = oSite;
    this.ScheduledStart = dScheduledStart;
    this.ScheduledEnd = dScheduledEnd
}
function AttendeeObject(sDisplayName,sEntityId,iObjectTypeCode,sResourceSpecId,fEffortRequired)
{
    this.DisplayName = sDisplayName;
    this.EntityId = sEntityId;
    this.ObjectTypeCode = iObjectTypeCode;
    this.ResourceSpecId = sResourceSpecId;
    this.EffortRequired = fEffortRequired
}
function ServiceObject(sDisplayName,sEntityId,iDefaultStatus)
{
    this.DisplayName = sDisplayName;
    this.EntityId = sEntityId;
    this.ObjectTypeCode = Service;
    this.DefaultStatus = iDefaultStatus
}
function SiteObject(sDisplayName,sEntityId)
{
    this.DisplayName = sDisplayName;
    this.EntityId = sEntityId;
    this.ObjectTypeCode = Site
}
