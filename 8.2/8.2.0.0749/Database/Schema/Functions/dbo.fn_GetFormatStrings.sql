SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


create function [dbo].[fn_GetFormatStrings]()
returns @FormatStrings table (
	dateformat nvarchar(255),
	TimeFormat nvarchar(255),
	NumberLanguageCode nvarchar(10),
	CalendarType nvarchar(50),
	NumberFormat_0_Precision nvarchar(255),
	NumberFormat_1_Precision nvarchar(255),
	NumberFormat_2_Precision nvarchar(255),
	NumberFormat_3_Precision nvarchar(255),
	NumberFormat_4_Precision nvarchar(255),
	NumberFormat_5_Precision nvarchar(255),
	CurrencyFormat_0_Precision nvarchar(255),
	CurrencyFormat_1_Precision nvarchar(255),
	CurrencyFormat_2_Precision nvarchar(255),
	CurrencyFormat_3_Precision nvarchar(255),
	CurrencyFormat_4_Precision nvarchar(255),
	CurrencyFormat_5_Precision nvarchar(255),
	CurrencyFormat_BaseCurrency_Precision nvarchar(255),
	CurrencyFormat_Price_BaseCurrency_Precision nvarchar(255)
)
as
begin;
	declare @BaseCurrencySymbol nvarchar(10);
	declare @BaseCurrencyPrecision int;
	declare @PricingDecimalPrecision int;
	declare @CurrencyFormatCode int;
	declare @NumberLocale int;
	declare @CalendarType nvarchar(50);
	declare @NumberGroupFormat nvarchar(50);
	declare @NegativeFormatCode int;
	declare @NegativeCurrencyFormatCode int;
	declare @DateFormatString nvarchar(255);
	declare @TimeFormatString nvarchar(255);
	declare @NumberLanguageCode nvarchar(10);
	
	declare @s1 nvarchar(255);
	declare @s2 nvarchar(255);
	declare @s3 nvarchar(255);
	declare @s4 nvarchar(255);
	declare @s5 nvarchar(255);
	declare @s6 nvarchar(255);
	declare @s7 nvarchar(255);
	declare @s8 nvarchar(255);
	declare @s9 nvarchar(255);
	declare @s10 nvarchar(255);
	declare @s11 nvarchar(255);
	declare @s12 nvarchar(255);
	declare @s13 nvarchar(255);
	declare @s14 nvarchar(255);

	select top 1 @PricingDecimalPrecision = o.pricingdecimalprecision,
		@BaseCurrencyPrecision = t.currencyprecision,
		@BaseCurrencySymbol =
			case o.currencydisplayoption
				when 0 then t.currencysymbol
				when 1 then t.isocurrencycode
				else t.currencysymbol
			end
	from FilteredOrganization as o 
	inner join FilteredTransactionCurrency as t on o.basecurrencyid = t.transactioncurrencyid;

	select top 1 @CurrencyFormatCode = currencyformatcode,
		@NumberLocale = localeid,
		@CalendarType = 
		case calendartype
			when 1 then 'Japanese'
			when 2 then 'Korea'
			when 3 then 'Taiwan'
			when 4 then 'Gregorian US English'
			when 5 then 'Gregorian Arabic'
			when 6 then 'Gregorian Middle East French'
			when 7 then 'Gregorian Transliterated English'
			when 8 then 'Gregorian Transliterated French'
			else 'Gregorian'
		end,
		@NumberGroupFormat = numbergroupformat,
		@NegativeFormatCode = negativeformatcode,
		@NegativeCurrencyFormatCode = negativecurrencyformatcode,
		@DateFormatString = replace(dateformatstring, '/', '\' + dateseparator),
		@TimeFormatString = replace(timeformatstring, ':', '\' + timeseparator)
	from FilteredUserSettings
	where systemuserid = dbo.fn_FindUserGuid();

	set @NumberLanguageCode =
		case @NumberLocale
			when 1025 then 'ar-SA'
			when 1026 then 'bg-BG'
			when 1027 then 'ca-ES'
			when 1028 then 'zh-TW'
			when 1029 then 'cs-CZ'
			when 1030 then 'da-DK'
			when 1031 then 'de-DE'
			when 1032 then 'el-GR'
			when 1033 then 'en-US'
			when 1035 then 'fi-FI'
			when 1036 then 'fr-FR'
			when 1037 then 'he-IL'
			when 1038 then 'hu-HU'
			when 1039 then 'is-IS'
			when 1040 then 'it-IT'
			when 1041 then 'ja-JP'
			when 1042 then 'ko-KR'
			when 1043 then 'nl-NL'
			when 1044 then 'nb-NO'
			when 1045 then 'pl-PL'
			when 1046 then 'pt-BR'
			when 1047 then 'rm-CH'
			when 1048 then 'ro-RO'
			when 1049 then 'ru-RU'
			when 1050 then 'hr-HR'
			when 1051 then 'sk-SK'
			when 1052 then 'sq-AL'
			when 1053 then 'sv-SE'
			when 1054 then 'th-TH'
			when 1055 then 'tr-TR'
			when 1056 then 'ur-PK'
			when 1057 then 'id-ID'
			when 1058 then 'uk-UA'
			when 1059 then 'be-BY'
			when 1060 then 'sl-SI'
			when 1061 then 'et-EE'
			when 1062 then 'lv-LV'
			when 1063 then 'lt-LT'
			when 1064 then 'tg-Cyrl-TJ'
			when 1065 then 'fa-IR'
			when 1066 then 'vi-VN'
			when 1067 then 'hy-AM'
			when 1068 then 'az-Latn-AZ'
			when 1069 then 'eu-ES'
			when 1070 then 'hsb-DE'
			when 1071 then 'mk-MK'
			when 1074 then 'tn-ZA'
			when 1076 then 'xh-ZA'
			when 1077 then 'zu-ZA'
			when 1078 then 'af-ZA'
			when 1079 then 'ka-GE'
			when 1080 then 'fo-FO'
			when 1081 then 'hi-IN'
			when 1082 then 'mt-MT'
			when 1083 then 'se-NO'
			when 1086 then 'ms-MY'
			when 1087 then 'kk-KZ'
			when 1088 then 'ky-KG'
			when 1089 then 'sw-KE'
			when 1090 then 'tk-TM'
			when 1091 then 'uz-Latn-UZ'
			when 1092 then 'tt-RU'
			when 1093 then 'bn-IN'
			when 1094 then 'pa-IN'
			when 1095 then 'gu-IN'
			when 1096 then 'or-IN'
			when 1097 then 'ta-IN'
			when 1098 then 'te-IN'
			when 1099 then 'kn-IN'
			when 1100 then 'ml-IN'
			when 1101 then 'as-IN'
			when 1102 then 'mr-IN'
			when 1103 then 'sa-IN'
			when 1104 then 'mn-MN'
			when 1105 then 'bo-CN'
			when 1106 then 'cy-GB'
			when 1107 then 'km-KH'
			when 1108 then 'lo-LA'
			when 1110 then 'gl-ES'
			when 1111 then 'kok-IN'
			when 1114 then 'syr-SY'
			when 1115 then 'si-LK'
			when 1116 then 'chr-Cher-US'
			when 1117 then 'iu-Cans-CA'
			when 1118 then 'am-ET'
			when 1121 then 'ne-NP'
			when 1122 then 'fy-NL'
			when 1123 then 'ps-AF'
			when 1124 then 'fil-PH'
			when 1125 then 'dv-MV'
			when 1128 then 'ha-Latn-NG'
			when 1130 then 'yo-NG'
			when 1131 then 'quz-BO'
			when 1132 then 'nso-ZA'
			when 1133 then 'ba-RU'
			when 1134 then 'lb-LU'
			when 1135 then 'kl-GL'
			when 1136 then 'ig-NG'
			when 1139 then 'ti-ET'
			when 1141 then 'haw-US'
			when 1144 then 'ii-CN'
			when 1146 then 'arn-CL'
			when 1148 then 'moh-CA'
			when 1150 then 'br-FR'
			when 1152 then 'ug-CN'
			when 1153 then 'mi-NZ'
			when 1154 then 'oc-FR'
			when 1155 then 'co-FR'
			when 1156 then 'gsw-FR'
			when 1157 then 'sah-RU'
			when 1158 then 'qut-GT'
			when 1159 then 'rw-RW'
			when 1160 then 'wo-SN'
			when 1164 then 'prs-AF'
			when 1169 then 'gd-GB'
			when 1170 then 'ku-Arab-IQ'
			when 2049 then 'ar-IQ'
			when 2051 then 'ca-ES-valencia'
			when 2052 then 'zh-CN'
			when 2055 then 'de-CH'
			when 2057 then 'en-GB'
			when 2058 then 'es-MX'
			when 2060 then 'fr-BE'
			when 2064 then 'it-CH'
			when 2067 then 'nl-BE'
			when 2068 then 'nn-NO'
			when 2070 then 'pt-PT'
			when 2074 then 'sr-Latn-CS'
			when 2077 then 'sv-FI'
			when 2092 then 'az-Cyrl-AZ'
			when 2094 then 'dsb-DE'
			when 2098 then 'tn-BW'
			when 2107 then 'se-SE'
			when 2108 then 'ga-IE'
			when 2110 then 'ms-BN'
			when 2115 then 'uz-Cyrl-UZ'
			when 2117 then 'bn-BD'
			when 2118 then 'pa-Arab-PK'
			when 2121 then 'ta-LK'
			when 2128 then 'mn-Mong-CN'
			when 2137 then 'sd-Arab-PK'
			when 2141 then 'iu-Latn-CA'
			when 2143 then 'tzm-Latn-DZ'
			when 2151 then 'ff-Latn-SN'
			when 2155 then 'quz-EC'
			when 2163 then 'ti-ER'
			when 3073 then 'ar-EG'
			when 3076 then 'zh-HK'
			when 3079 then 'de-AT'
			when 3081 then 'en-AU'
			when 3082 then 'es-ES'
			when 3084 then 'fr-CA'
			when 3098 then 'sr-Cyrl-CS'
			when 3131 then 'se-FI'
			when 3179 then 'quz-PE'
			when 4097 then 'ar-LY'
			when 4100 then 'zh-SG'
			when 4103 then 'de-LU'
			when 4105 then 'en-CA'
			when 4106 then 'es-GT'
			when 4108 then 'fr-CH'
			when 4122 then 'hr-BA'
			when 4155 then 'smj-NO'
			when 4191 then 'tzm-Tfng-MA'
			when 5121 then 'ar-DZ'
			when 5124 then 'zh-MO'
			when 5127 then 'de-LI'
			when 5129 then 'en-NZ'
			when 5130 then 'es-CR'
			when 5132 then 'fr-LU'
			when 5146 then 'bs-Latn-BA'
			when 5179 then 'smj-SE'
			when 6145 then 'ar-MA'
			when 6153 then 'en-IE'
			when 6154 then 'es-PA'
			when 6156 then 'fr-MC'
			when 6170 then 'sr-Latn-BA'
			when 6203 then 'sma-NO'
			when 7169 then 'ar-TN'
			when 7177 then 'en-ZA'
			when 7178 then 'es-DO'
			when 7194 then 'sr-Cyrl-BA'
			when 7227 then 'sma-SE'
			when 8193 then 'ar-OM'
			when 8201 then 'en-JM'
			when 8202 then 'es-VE'
			when 8218 then 'bs-Cyrl-BA'
			when 8251 then 'sms-FI'
			when 9217 then 'ar-YE'
			when 9225 then 'en-029'
			when 9226 then 'es-CO'
			when 9242 then 'sr-Latn-RS'
			when 9275 then 'smn-FI'
			when 10241 then 'ar-SY'
			when 10249 then 'en-BZ'
			when 10250 then 'es-PE'
			when 10266 then 'sr-Cyrl-RS'
			when 11265 then 'ar-JO'
			when 11273 then 'en-TT'
			when 11274 then 'es-AR'
			when 11290 then 'sr-Latn-ME'
			when 12289 then 'ar-LB'
			when 12297 then 'en-ZW'
			when 12298 then 'es-EC'
			when 12314 then 'sr-Cyrl-ME'
			when 13313 then 'ar-KW'
			when 13321 then 'en-PH'
			when 13322 then 'es-CL'
			when 14337 then 'ar-AE'
			when 14346 then 'es-UY'
			when 15361 then 'ar-BH'
			when 15370 then 'es-PY'
			when 16385 then 'ar-QA'
			when 16393 then 'en-IN'
			when 16394 then 'es-BO'
			when 17417 then 'en-MY'
			when 17418 then 'es-SV'
			when 18441 then 'en-SG'
			when 18442 then 'es-HN'
			when 19466 then 'es-NI'
			when 20490 then 'es-PR'
			when 21514 then 'es-US'
			else 'en-US'
		end;

	select @s1 = dbo.fn_GetNumberFormatString(0, @NumberGroupFormat, @NegativeFormatCode, 0, default, default);
	select @s2 = dbo.fn_GetNumberFormatString(1, @NumberGroupFormat, @NegativeFormatCode, 0, default, default);
	select @s3 = dbo.fn_GetNumberFormatString(2, @NumberGroupFormat, @NegativeFormatCode, 0, default, default);
	select @s4 = dbo.fn_GetNumberFormatString(3, @NumberGroupFormat, @NegativeFormatCode, 0, default, default);
	select @s5 = dbo.fn_GetNumberFormatString(4, @NumberGroupFormat, @NegativeFormatCode, 0, default, default);
	select @s6 = dbo.fn_GetNumberFormatString(5, @NumberGroupFormat, @NegativeFormatCode, 0, default, default);
	
	select @s7 = dbo.fn_GetNumberFormatString(0, @NumberGroupFormat, @NegativeCurrencyFormatCode, 1, @BaseCurrencySymbol, @CurrencyFormatCode);
	select @s8 = dbo.fn_GetNumberFormatString(1, @NumberGroupFormat, @NegativeCurrencyFormatCode, 1, @BaseCurrencySymbol, @CurrencyFormatCode);
	select @s9 = dbo.fn_GetNumberFormatString(2, @NumberGroupFormat, @NegativeCurrencyFormatCode, 1, @BaseCurrencySymbol, @CurrencyFormatCode);
	select @s10 = dbo.fn_GetNumberFormatString(3, @NumberGroupFormat, @NegativeCurrencyFormatCode, 1, @BaseCurrencySymbol, @CurrencyFormatCode);
	select @s11 = dbo.fn_GetNumberFormatString(4, @NumberGroupFormat, @NegativeCurrencyFormatCode, 1, @BaseCurrencySymbol, @CurrencyFormatCode);
	select @s12 = dbo.fn_GetNumberFormatString(5, @NumberGroupFormat, @NegativeCurrencyFormatCode, 1, @BaseCurrencySymbol, @CurrencyFormatCode);
	select @s13 = dbo.fn_GetNumberFormatString(@BaseCurrencyPrecision, @NumberGroupFormat, @NegativeCurrencyFormatCode, 1, @BaseCurrencySymbol, @CurrencyFormatCode);
	select @s14 = dbo.fn_GetNumberFormatString(@PricingDecimalPrecision, @NumberGroupFormat, @NegativeCurrencyFormatCode, 1, @BaseCurrencySymbol, @CurrencyFormatCode);
	
	insert into @FormatStrings
	values(
		@DateFormatString,
		@TimeFormatString,
		@NumberLanguageCode,
		@CalendarType,
		@s1, 
		@s2,
		@s3,
		@s4,
		@s5,
		@s6,
		@s7,
		@s8,
		@s9,
		@s10,
		@s11,
		@s12,
		@s13,
		@s14
	);

	return;
end;
GO
GRANT SELECT ON  [dbo].[fn_GetFormatStrings] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[fn_GetFormatStrings] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
