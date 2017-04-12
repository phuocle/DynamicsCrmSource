SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical 'as if published' view for DependencyFeatureLogicalAsIfPublished
--
create view [dbo].[DependencyFeatureLogicalAsIfPublished]
 with view_metadata as
select
* from DependencyFeatureLogical
GO
