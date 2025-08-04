

create function [dbo].[fn_GetLabelForMultiSelectPicklistAttributeType]
(
	@attributeName nvarchar(max),
	@attributeValue nvarchar(max),
	@objectTypeCode int,
	@languageId int
)
returns nvarchar(max)
as
begin;
	-- Declare the return variable here
	declare @labelForAttributeValue nvarchar(max) = '';

	if(@attributeValue is not null)
	begin;
		declare @selectedOptionValues table (optionValue int);
		/*
		With SQL 2016 enabled, this function can be replaced by OPENJSON or split string to parse it.
		*/
		insert into @selectedOptionValues(optionValue)
		select integerValue from [dbo].[fn_GetIntegerValuesFromDelimitedString](',',replace(replace(@attributeValue,'[',''),']',''));
	
		/*
		For value [1,2,3] with label [a,b,c], generate the formatted value as a;b;c
		*/
	
		select @labelForAttributeValue ='';

		select @labelForAttributeValue = @labelForAttributeValue + [strMap].Value + '; '
			from StringMap [strMap]
			where [strMap].AttributeName = @attributeName
			and [strMap].ObjectTypeCode = @objectTypeCode
			and [strMap].AttributeValue in (select optionValue from @selectedOptionValues)
			and [strMap].LangId = @languageId

	   -- Return the result of the function
		set @labelForAttributeValue = LEFT(@labelForAttributeValue, LEN(@labelForAttributeValue) -1);
	end;
	return @labelForAttributeValue;
end;
GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_GetLabelForMultiSelectPicklistAttributeType] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_GetLabelForMultiSelectPicklistAttributeType] TO [CRMReaderRole]
    AS [dbo];

