USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[DependencyFeatureLogicalAsIfPublished]    Script Date: 4/10/2017 9:59:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- logical 'as if published' view for DependencyFeatureLogicalAsIfPublished
--
create view [dbo].[DependencyFeatureLogicalAsIfPublished]
 with view_metadata as
select
* from DependencyFeatureLogical
GO
