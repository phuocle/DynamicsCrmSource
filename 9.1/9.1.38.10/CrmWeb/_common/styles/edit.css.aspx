<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
TEXTAREA,
DIV.ms-crm-RadioButton,
INPUT.ms-crm-Email-Address,
INPUT.ms-crm-LiveId-Email-Address,
INPUT.ms-crm-Ticker,
INPUT.ms-crm-CheckBox,
INPUT.ms-crm-Url,
INPUT.ms-crm-Number,
INPUT.ms-crm-Money,
TABLE.ms-crm-DateTime,
INPUT.ms-crm-Hidden,
INPUT.ms-crm-Text,
INPUT.ms-crm-Phone,
IMG.ms-crm-Lookup,
IMG.ms-crm-Lookup-Party,
IMG.ms-crm-Lookup-TransactionCurrency,
INPUT.ms-crm-Duration,
TABLE.ms-crm-Email-Body,
span.ms-crm-SelectBox,
SELECT.ms-crm-SelectBox
{
behavior: url(<%=CrmUri.Create("/_static/_forms/controls/input.ctrl.htc", Microsoft.Crm.Application.Security.UserInformation.Current).ToString()%>);
}

form.ms-crm-Form
{
behavior: url(<%=CrmUri.Create("/_static/_forms/controls/form.crm.htc", Microsoft.Crm.Application.Security.UserInformation.Current).ToString()%>);
}
