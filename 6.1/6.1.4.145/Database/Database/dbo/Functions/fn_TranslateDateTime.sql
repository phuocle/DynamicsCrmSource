

create function dbo.fn_TranslateDateTime(@attrName nvarchar(300))
returns varchar(800)
as
begin
	declare @attrResult nvarchar(800)
	set @attrResult = 'dbo.fn_UTCToTzSpecificLocalTime(' + @attrName + ',' + CHAR(13) + CHAR(10) 
						+ CHAR(9)+ CHAR(9)+ CHAR(9)+ 'us.TimeZoneBias,' + CHAR(13) + CHAR(10)
						+ CHAR(9)+ CHAR(9)+ CHAR(9)+ 'us.TimeZoneDaylightBias,' + CHAR(13) + CHAR(10)
						+ CHAR(9)+ CHAR(9)+ CHAR(9)+ 'us.TimeZoneDaylightYear,' + CHAR(13) + CHAR(10)
						+ CHAR(9)+ CHAR(9)+ CHAR(9)+ 'us.TimeZoneDaylightMonth,' + CHAR(13) + CHAR(10)
						+ CHAR(9)+ CHAR(9)+ CHAR(9)+ 'us.TimeZoneDaylightDay,'+ CHAR(13) + CHAR(10)
						+ CHAR(9)+ CHAR(9)+ CHAR(9)+ 'us.TimeZoneDaylightHour,' + CHAR(13) + CHAR(10)
						+ CHAR(9)+ CHAR(9)+ CHAR(9)+ 'us.TimeZoneDaylightMinute,' + CHAR(13) + CHAR(10)
						+ CHAR(9)+ CHAR(9)+ CHAR(9)+ 'us.TimeZoneDaylightSecond,' + CHAR(13) + CHAR(10)
						+ CHAR(9)+ CHAR(9)+ CHAR(9)+ '0,' + CHAR(13) + CHAR(10)
						+ CHAR(9)+ CHAR(9)+ CHAR(9)+ 'us.TimeZoneDaylightDayOfWeek,' + CHAR(13) + CHAR(10)
						+ CHAR(9)+ CHAR(9)+ CHAR(9)+ 'us.TimeZoneStandardBias,' + CHAR(13) + CHAR(10)
						+ CHAR(9)+ CHAR(9)+ CHAR(9)+ 'us.TimeZoneStandardYear,' + CHAR(13) + CHAR(10)
						+ CHAR(9)+ CHAR(9)+ CHAR(9)+ 'us.TimeZoneStandardMonth,' + CHAR(13) + CHAR(10)
						+ CHAR(9)+ CHAR(9)+ CHAR(9)+ 'us.TimeZoneStandardDay,' + CHAR(13) + CHAR(10)
						+ CHAR(9)+ CHAR(9)+ CHAR(9)+ 'us.TimeZoneStandardHour,' + CHAR(13) + CHAR(10)
						+ CHAR(9)+ CHAR(9)+ CHAR(9)+ 'us.TimeZoneStandardMinute,' + CHAR(13) + CHAR(10)
						+ CHAR(9)+ CHAR(9)+ CHAR(9)+ 'us.TimeZoneStandardSecond,' + CHAR(13) + CHAR(10)
						+ CHAR(9)+ CHAR(9)+ CHAR(9)+ '0,' + CHAR(13) + CHAR(10)
						+ CHAR(9)+ CHAR(9)+ CHAR(9)+ 'us.TimeZoneStandardDayOfWeek' + '), ' 
	return @attrResult
end

