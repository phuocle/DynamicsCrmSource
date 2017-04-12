SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
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
GRANT SELECT ON  [dbo].[FilteredContactQuotes] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredContactQuotes] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
