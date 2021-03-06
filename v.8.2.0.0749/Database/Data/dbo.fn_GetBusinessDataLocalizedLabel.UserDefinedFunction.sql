USE [D365_MSCRM]
GO
/****** Object:  UserDefinedFunction [dbo].[fn_GetBusinessDataLocalizedLabel]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create function [dbo].[fn_GetBusinessDataLocalizedLabel] (
	@ObjectId uniqueidentifier,
	@ColumnName nvarchar(255),
	@ObjectTypeCode int,
	@LanguageCode int
)
returns nvarchar(255)
as
begin
	declare @BusinessDataLocalizedLabel nvarchar(255)
	
	begin
		select @BusinessDataLocalizedLabel = l.Label
			from BusinessDataLocalizedLabel l
			where @ObjectId = l.ObjectId
			and @LanguageCode = l.LanguageId
			and @ColumnName = l.ObjectColumnName
			and @ObjectTypeCode = l.ObjectIdTypeCode
	end
	return @BusinessDataLocalizedLabel
end
GO
