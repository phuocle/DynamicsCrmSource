USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[SimilarityRuleAsIfPublished]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base 'as if published' view for SimilarityRuleAsIfPublished
--
create view [dbo].[SimilarityRuleAsIfPublished]
 with view_metadata as
select
* from [SimilarityRule]
GO
