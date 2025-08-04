SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base 'as if published' view for FieldSecurityProfileAsIfPublished
--
create view [dbo].[FieldSecurityProfileAsIfPublished]
 with view_metadata as
select
* from [FieldSecurityProfile]
GO
