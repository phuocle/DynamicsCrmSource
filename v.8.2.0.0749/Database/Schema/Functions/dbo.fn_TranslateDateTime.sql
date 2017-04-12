SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


create function [dbo].[fn_TranslateDateTime](@attrName nvarchar(300))
returns varchar(800)
as
begin;
	declare @attrResult nvarchar(800);

	set @attrResult = 'dbo.fn_UTCToTzSpecificLocalTime(' + @attrName + ',' + char(13) + char(10) 
						+ char(9)+ char(9)+ char(9)+ 'us.TimeZoneBias,' + char(13) + char(10)
						+ char(9)+ char(9)+ char(9)+ 'us.TimeZoneDaylightBias,' + char(13) + char(10)
						+ char(9)+ char(9)+ char(9)+ 'us.TimeZoneDaylightYear,' + char(13) + char(10)
						+ char(9)+ char(9)+ char(9)+ 'us.TimeZoneDaylightMonth,' + char(13) + char(10)
						+ char(9)+ char(9)+ char(9)+ 'us.TimeZoneDaylightDay,'+ char(13) + char(10)
						+ char(9)+ char(9)+ char(9)+ 'us.TimeZoneDaylightHour,' + char(13) + char(10)
						+ char(9)+ char(9)+ char(9)+ 'us.TimeZoneDaylightMinute,' + char(13) + char(10)
						+ char(9)+ char(9)+ char(9)+ 'us.TimeZoneDaylightSecond,' + char(13) + char(10)
						+ char(9)+ char(9)+ char(9)+ '0,' + char(13) + char(10)
						+ char(9)+ char(9)+ char(9)+ 'us.TimeZoneDaylightDayOfWeek,' + char(13) + char(10)
						+ char(9)+ char(9)+ char(9)+ 'us.TimeZoneStandardBias,' + char(13) + char(10)
						+ char(9)+ char(9)+ char(9)+ 'us.TimeZoneStandardYear,' + char(13) + char(10)
						+ char(9)+ char(9)+ char(9)+ 'us.TimeZoneStandardMonth,' + char(13) + char(10)
						+ char(9)+ char(9)+ char(9)+ 'us.TimeZoneStandardDay,' + char(13) + char(10)
						+ char(9)+ char(9)+ char(9)+ 'us.TimeZoneStandardHour,' + char(13) + char(10)
						+ char(9)+ char(9)+ char(9)+ 'us.TimeZoneStandardMinute,' + char(13) + char(10)
						+ char(9)+ char(9)+ char(9)+ 'us.TimeZoneStandardSecond,' + char(13) + char(10)
						+ char(9)+ char(9)+ char(9)+ '0,' + char(13) + char(10)
						+ char(9)+ char(9)+ char(9)+ 'us.TimeZoneStandardDayOfWeek' + '), ' ;

	return @attrResult;
end;
GO
