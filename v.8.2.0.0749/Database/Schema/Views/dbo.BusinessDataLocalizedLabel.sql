SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base view for BusinessDataLocalizedLabel
--
create view [dbo].[BusinessDataLocalizedLabel]
 (

    -- physical attributes
    [BusinessDataLocalizedLabelId],
    [LanguageId],
    [ObjectId],
    [ObjectIdTypeCode],
    [ObjectColumnName],
    [ObjectColumnNumber],
    [Label],
    [VersionNumber]
) with view_metadata as
select

    -- physical attribute
    [BusinessDataLocalizedLabelBase].[BusinessDataLocalizedLabelId],
    [BusinessDataLocalizedLabelBase].[LanguageId],
    [BusinessDataLocalizedLabelBase].[ObjectId],
    [BusinessDataLocalizedLabelBase].[ObjectIdTypeCode],
    [BusinessDataLocalizedLabelBase].[ObjectColumnName],
    [BusinessDataLocalizedLabelBase].[ObjectColumnNumber],
    [BusinessDataLocalizedLabelBase].[Label],
    [BusinessDataLocalizedLabelBase].[VersionNumber]
from [BusinessDataLocalizedLabelBase] 
GO
