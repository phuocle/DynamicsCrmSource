USE [D365_MSCRM]
GO
/****** Object:  StoredProcedure [dbo].[p_RetrieveTopArticlesByProduct]    Script Date: 4/10/2017 9:59:58 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create procedure [dbo].[p_RetrieveTopArticlesByProduct](
	@ProductId uniqueidentifier)

as
begin;
	set nocount on;

	select top 10 kab.KbArticleId as kbarticleid, kab.Title as title, T.NumCases
		from KbArticleBase kab 
			inner join (select KbArticleId as KbArticleId, count(*) as NumCases
							from IncidentBase 
								where IncidentBase.ProductId = @ProductId
									and IncidentBase.KbArticleId IS NOT NULL 
								group by KbArticleId) T 
		on kab.KbArticleId = T.KbArticleId
	order by NumCases desc;

end;

GO
