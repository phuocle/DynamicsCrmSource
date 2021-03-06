USE [D365_MSCRM]
GO
/****** Object:  Table [MetadataSchema].[AttributeTypes]    Script Date: 4/10/2017 9:59:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [MetadataSchema].[AttributeTypes](
	[AttributeTypeId] [uniqueidentifier] ROWGUIDCOL  NOT NULL,
	[Description] [nvarchar](255) NULL,
	[SQLServerType] [int] NULL,
	[Quoted] [bit] NOT NULL,
	[XmlType] [nvarchar](255) NULL,
	[IntroducedVersion] [nvarchar](24) NOT NULL,
 CONSTRAINT [XPKAttributeTypes] PRIMARY KEY CLUSTERED 
(
	[AttributeTypeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
INSERT [MetadataSchema].[AttributeTypes] ([AttributeTypeId], [Description], [SQLServerType], [Quoted], [XmlType], [IntroducedVersion]) VALUES (N'00000000-0000-0000-00aa-110000000011', N'bigint', 127, 0, N'integer', N'5.0.9400.0')
INSERT [MetadataSchema].[AttributeTypes] ([AttributeTypeId], [Description], [SQLServerType], [Quoted], [XmlType], [IntroducedVersion]) VALUES (N'00000000-0000-0000-00aa-110000000012', N'binary', 173, 0, N'base64Binary', N'4.0.7333.0')
INSERT [MetadataSchema].[AttributeTypes] ([AttributeTypeId], [Description], [SQLServerType], [Quoted], [XmlType], [IntroducedVersion]) VALUES (N'00000000-0000-0000-00aa-110000000013', N'bit', 104, 0, N'Boolean', N'4.0.7333.0')
INSERT [MetadataSchema].[AttributeTypes] ([AttributeTypeId], [Description], [SQLServerType], [Quoted], [XmlType], [IntroducedVersion]) VALUES (N'00000000-0000-0000-00aa-110000000014', N'char', 175, 1, N'string', N'4.0.7333.0')
INSERT [MetadataSchema].[AttributeTypes] ([AttributeTypeId], [Description], [SQLServerType], [Quoted], [XmlType], [IntroducedVersion]) VALUES (N'00000000-0000-0000-00aa-110000000015', N'datetime', 61, 1, N'dateTime.tz', N'4.0.7333.0')
INSERT [MetadataSchema].[AttributeTypes] ([AttributeTypeId], [Description], [SQLServerType], [Quoted], [XmlType], [IntroducedVersion]) VALUES (N'00000000-0000-0000-00aa-110000000016', N'decimal', 106, 0, N'float', N'4.0.7333.0')
INSERT [MetadataSchema].[AttributeTypes] ([AttributeTypeId], [Description], [SQLServerType], [Quoted], [XmlType], [IntroducedVersion]) VALUES (N'00000000-0000-0000-00aa-110000000017', N'float', 62, 0, N'float', N'4.0.7333.0')
INSERT [MetadataSchema].[AttributeTypes] ([AttributeTypeId], [Description], [SQLServerType], [Quoted], [XmlType], [IntroducedVersion]) VALUES (N'00000000-0000-0000-00aa-110000000018', N'image', 34, 0, N'base64Binary', N'6.0.0.0')
INSERT [MetadataSchema].[AttributeTypes] ([AttributeTypeId], [Description], [SQLServerType], [Quoted], [XmlType], [IntroducedVersion]) VALUES (N'00000000-0000-0000-00aa-110000000019', N'int', 56, 0, N'integer', N'4.0.7333.0')
INSERT [MetadataSchema].[AttributeTypes] ([AttributeTypeId], [Description], [SQLServerType], [Quoted], [XmlType], [IntroducedVersion]) VALUES (N'00000000-0000-0000-00aa-11000000001a', N'money', 60, 0, N'float', N'4.0.7333.0')
INSERT [MetadataSchema].[AttributeTypes] ([AttributeTypeId], [Description], [SQLServerType], [Quoted], [XmlType], [IntroducedVersion]) VALUES (N'00000000-0000-0000-00aa-11000000001b', N'nchar', 239, 1, N'string', N'4.0.7333.0')
INSERT [MetadataSchema].[AttributeTypes] ([AttributeTypeId], [Description], [SQLServerType], [Quoted], [XmlType], [IntroducedVersion]) VALUES (N'00000000-0000-0000-00aa-11000000001c', N'ntext', 99, 1, N'string', N'4.0.7333.0')
INSERT [MetadataSchema].[AttributeTypes] ([AttributeTypeId], [Description], [SQLServerType], [Quoted], [XmlType], [IntroducedVersion]) VALUES (N'00000000-0000-0000-00aa-11000000001d', N'numeric', 108, 0, N'float', N'4.0.7333.0')
INSERT [MetadataSchema].[AttributeTypes] ([AttributeTypeId], [Description], [SQLServerType], [Quoted], [XmlType], [IntroducedVersion]) VALUES (N'00000000-0000-0000-00aa-11000000001e', N'nvarchar', 231, 1, N'string', N'4.0.7333.0')
INSERT [MetadataSchema].[AttributeTypes] ([AttributeTypeId], [Description], [SQLServerType], [Quoted], [XmlType], [IntroducedVersion]) VALUES (N'00000000-0000-0000-00aa-11000000001f', N'real', 59, 0, N'float', N'4.0.7333.0')
INSERT [MetadataSchema].[AttributeTypes] ([AttributeTypeId], [Description], [SQLServerType], [Quoted], [XmlType], [IntroducedVersion]) VALUES (N'00000000-0000-0000-00aa-110000000020', N'smalldatetime', 58, 1, N'dateTime', N'4.0.7333.0')
INSERT [MetadataSchema].[AttributeTypes] ([AttributeTypeId], [Description], [SQLServerType], [Quoted], [XmlType], [IntroducedVersion]) VALUES (N'00000000-0000-0000-00aa-110000000021', N'smallint', 52, 0, N'integer', N'4.0.7333.0')
INSERT [MetadataSchema].[AttributeTypes] ([AttributeTypeId], [Description], [SQLServerType], [Quoted], [XmlType], [IntroducedVersion]) VALUES (N'00000000-0000-0000-00aa-110000000022', N'smallmoney', 122, 0, N'float', N'4.0.7333.0')
INSERT [MetadataSchema].[AttributeTypes] ([AttributeTypeId], [Description], [SQLServerType], [Quoted], [XmlType], [IntroducedVersion]) VALUES (N'00000000-0000-0000-00aa-110000000023', N'sql_variant', 98, 0, N'string', N'4.0.7333.0')
INSERT [MetadataSchema].[AttributeTypes] ([AttributeTypeId], [Description], [SQLServerType], [Quoted], [XmlType], [IntroducedVersion]) VALUES (N'00000000-0000-0000-00aa-110000000024', N'text', 35, 1, N'string', N'4.0.7333.0')
INSERT [MetadataSchema].[AttributeTypes] ([AttributeTypeId], [Description], [SQLServerType], [Quoted], [XmlType], [IntroducedVersion]) VALUES (N'00000000-0000-0000-00aa-110000000025', N'timestamp', 189, 0, N'string', N'4.0.7333.0')
INSERT [MetadataSchema].[AttributeTypes] ([AttributeTypeId], [Description], [SQLServerType], [Quoted], [XmlType], [IntroducedVersion]) VALUES (N'00000000-0000-0000-00aa-110000000026', N'tinyint', 48, 0, N'integer', N'4.0.7333.0')
INSERT [MetadataSchema].[AttributeTypes] ([AttributeTypeId], [Description], [SQLServerType], [Quoted], [XmlType], [IntroducedVersion]) VALUES (N'00000000-0000-0000-00aa-110000000027', N'uniqueidentifier', 36, 1, N'uuid', N'4.0.7333.0')
INSERT [MetadataSchema].[AttributeTypes] ([AttributeTypeId], [Description], [SQLServerType], [Quoted], [XmlType], [IntroducedVersion]) VALUES (N'00000000-0000-0000-00aa-110000000028', N'varbinary', 165, 0, N'base64Binary', N'4.0.7333.0')
INSERT [MetadataSchema].[AttributeTypes] ([AttributeTypeId], [Description], [SQLServerType], [Quoted], [XmlType], [IntroducedVersion]) VALUES (N'00000000-0000-0000-00aa-110000000029', N'varchar', 167, 1, N'string', N'4.0.7333.0')
INSERT [MetadataSchema].[AttributeTypes] ([AttributeTypeId], [Description], [SQLServerType], [Quoted], [XmlType], [IntroducedVersion]) VALUES (N'00000000-0000-0000-00aa-110000000030', N'picklist', NULL, 0, N'picklist', N'4.0.7333.0')
INSERT [MetadataSchema].[AttributeTypes] ([AttributeTypeId], [Description], [SQLServerType], [Quoted], [XmlType], [IntroducedVersion]) VALUES (N'00000000-0000-0000-00aa-110000000031', N'lookup', NULL, 1, N'lookup', N'4.0.7333.0')
INSERT [MetadataSchema].[AttributeTypes] ([AttributeTypeId], [Description], [SQLServerType], [Quoted], [XmlType], [IntroducedVersion]) VALUES (N'00000000-0000-0000-00aa-110000000032', N'primarykey', NULL, 1, N'primarykey', N'4.0.7333.0')
INSERT [MetadataSchema].[AttributeTypes] ([AttributeTypeId], [Description], [SQLServerType], [Quoted], [XmlType], [IntroducedVersion]) VALUES (N'00000000-0000-0000-00aa-110000000033', N'virtual', NULL, 0, N'virtual', N'4.0.7333.0')
INSERT [MetadataSchema].[AttributeTypes] ([AttributeTypeId], [Description], [SQLServerType], [Quoted], [XmlType], [IntroducedVersion]) VALUES (N'00000000-0000-0000-00aa-110000000034', N'customer', NULL, 1, N'customer', N'4.0.7333.0')
INSERT [MetadataSchema].[AttributeTypes] ([AttributeTypeId], [Description], [SQLServerType], [Quoted], [XmlType], [IntroducedVersion]) VALUES (N'00000000-0000-0000-00aa-110000000035', N'owner', NULL, 1, N'owner', N'4.0.7333.0')
INSERT [MetadataSchema].[AttributeTypes] ([AttributeTypeId], [Description], [SQLServerType], [Quoted], [XmlType], [IntroducedVersion]) VALUES (N'00000000-0000-0000-00aa-110000000036', N'state', NULL, 1, N'state', N'4.0.7333.0')
INSERT [MetadataSchema].[AttributeTypes] ([AttributeTypeId], [Description], [SQLServerType], [Quoted], [XmlType], [IntroducedVersion]) VALUES (N'00000000-0000-0000-00aa-110000000037', N'status', NULL, 1, N'status', N'4.0.7333.0')
INSERT [MetadataSchema].[AttributeTypes] ([AttributeTypeId], [Description], [SQLServerType], [Quoted], [XmlType], [IntroducedVersion]) VALUES (N'00000000-0000-0000-00aa-110000000039', N'partylist', NULL, 0, N'partylist', N'4.0.7333.0')
INSERT [MetadataSchema].[AttributeTypes] ([AttributeTypeId], [Description], [SQLServerType], [Quoted], [XmlType], [IntroducedVersion]) VALUES (N'00000000-0000-0000-00aa-11000000003a', N'HierarchyId', 240, 0, N'string', N'5.0.9211.0')
INSERT [MetadataSchema].[AttributeTypes] ([AttributeTypeId], [Description], [SQLServerType], [Quoted], [XmlType], [IntroducedVersion]) VALUES (N'00000000-0000-0000-00aa-11000000003b', N'managedproperty', 104, 0, N'Boolean', N'5.0.9430.0')
INSERT [MetadataSchema].[AttributeTypes] ([AttributeTypeId], [Description], [SQLServerType], [Quoted], [XmlType], [IntroducedVersion]) VALUES (N'66dda8ae-a5dd-459c-9c09-557d66273741', N'xml', 241, 0, NULL, N'4.0.7333.0')
