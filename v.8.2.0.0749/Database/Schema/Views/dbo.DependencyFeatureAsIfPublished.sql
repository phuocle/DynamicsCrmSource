SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base 'as if published' view for DependencyFeatureAsIfPublished
--
create view [dbo].[DependencyFeatureAsIfPublished]
 with view_metadata as
select
* from [DependencyFeature]
GO
