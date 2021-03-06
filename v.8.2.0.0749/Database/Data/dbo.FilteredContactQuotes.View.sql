USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[FilteredContactQuotes]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


--
-- report view for contactquotes
--
create view [dbo].[FilteredContactQuotes] (
    [contactid],
    [contactquoteid],
    [quoteid],
    [versionnumber]
) with view_metadata as
select
    [ContactQuotes].[ContactId],
    [ContactQuotes].[ContactQuoteId],
    [ContactQuotes].[QuoteId],
    [ContactQuotes].[VersionNumber]
from ContactQuotes

GO
