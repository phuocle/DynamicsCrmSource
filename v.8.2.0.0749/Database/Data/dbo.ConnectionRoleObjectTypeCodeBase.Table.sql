USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[ConnectionRoleObjectTypeCodeBase]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ConnectionRoleObjectTypeCodeBase](
	[VersionNumber] [timestamp] NULL,
	[AssociatedObjectTypeCode] [int] NOT NULL,
	[ConnectionRoleId] [uniqueidentifier] NOT NULL,
	[ConnectionRoleObjectTypeCodeId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [cndx_primarykey_connectionroleobjecttypecode] PRIMARY KEY CLUSTERED 
(
	[ConnectionRoleObjectTypeCodeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (2, N'adccf191-576b-463b-be78-019a427eb2e5', N'b39103b1-8700-41bb-907e-f6504ae949f5')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (4, N'adccf191-576b-463b-be78-019a427eb2e5', N'2b521bca-8823-4a1a-93fd-2e378502610d')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (8, N'adccf191-576b-463b-be78-019a427eb2e5', N'736a1c80-6685-42e5-9c8b-ecdcb85cdece')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (8, N'4592387c-987a-48cb-98d7-1ea884049896', N'2c991736-8a7b-4295-a023-733e54ea0a19')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (8, N'8e91c0f0-7b79-4614-a5b0-273d3e539c00', N'ff28afeb-378d-46d0-8931-273f8e948027')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (2, N'63e69a22-8e7f-4524-be97-37e05480f7f0', N'62e58866-0cc7-4f88-ae31-615b273024c3')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (4, N'63e69a22-8e7f-4524-be97-37e05480f7f0', N'14aa6cb9-90ba-40a0-9edf-5ce0db1cf93f')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (8, N'63e69a22-8e7f-4524-be97-37e05480f7f0', N'aef7bb3c-caf5-4d90-bcea-43782956047e')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (2, N'ea5b38ce-a5ee-4ca0-a339-3a51b7da87fe', N'f5082be2-ecf2-4fb8-b404-045ecb763a5c')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (4, N'ea5b38ce-a5ee-4ca0-a339-3a51b7da87fe', N'43d26762-9cb2-4a09-a07f-40e8ac5033d5')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (8, N'ea5b38ce-a5ee-4ca0-a339-3a51b7da87fe', N'd6abfb6c-a9e1-4086-8220-53b5a1aa9d39')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (8, N'6f19eefc-fd08-4bc7-a58e-3d6d24e950e9', N'749c36ba-db84-49c2-ad2f-170e0e54bed4')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (1, N'7fb8e35e-93b3-4d0d-ab88-4e99afa0a665', N'8e05766c-f286-402b-a3b6-2fe52bbe1c90')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (2, N'7fb8e35e-93b3-4d0d-ab88-4e99afa0a665', N'1df7db1d-705e-4be7-847d-46e6039939f4')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (4, N'7fb8e35e-93b3-4d0d-ab88-4e99afa0a665', N'd5da67dc-e862-4491-ae17-310b70271fe0')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (8, N'7fb8e35e-93b3-4d0d-ab88-4e99afa0a665', N'1dfcb0f6-c07f-45e1-96be-07a2b7eb15ad')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (1, N'1eb54ab1-58b7-4d14-bf39-4f3e402616e8', N'65528291-c5b4-411e-af2c-4723fa71ec3f')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (2, N'df0bf69f-333c-4e9b-86e7-4ff737bc9343', N'c45d0b4d-05ac-42c7-a0f7-742542ae6f76')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (4, N'df0bf69f-333c-4e9b-86e7-4ff737bc9343', N'73ad36a2-9fc6-467b-9eb3-200f3c10edfe')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (8, N'df0bf69f-333c-4e9b-86e7-4ff737bc9343', N'2678457e-47b6-43a4-86dc-2b6e542be7a9')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (9953, N'cffe4a59-ce11-4fca-b132-5985d3917d26', N'6aa819df-4310-413a-966a-ec1fdfd0ca21')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (1, N'949f6099-4b45-471e-96db-59e2dece2af2', N'c9877c7e-31cb-435f-98fd-3c2917ac9d75')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (4, N'949f6099-4b45-471e-96db-59e2dece2af2', N'b8ff865a-e68a-4035-9fc6-22e9d7eb5868')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (8, N'90dcde1d-4452-47e4-992f-5dc12a053eee', N'd9f6d960-8dc4-4c21-95a7-b9b3f44b2cb8')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (2, N'935e8a38-03dd-4fe2-9974-65266bf6fd33', N'654af194-cb36-43a2-a2d0-aadb8aeebe73')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (4, N'935e8a38-03dd-4fe2-9974-65266bf6fd33', N'c0bf7dfc-f4f8-403e-920b-a6670e594fde')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (8, N'55aa2edb-bfc1-4e42-a66c-72874e379b87', N'4d4c42ba-c4e6-482b-948c-05cea78b9d5d')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (2, N'ee375944-5415-437d-9336-7698cf665b26', N'2eed921b-cedf-484a-a267-bc120f6f22eb')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (4, N'ee375944-5415-437d-9336-7698cf665b26', N'e4cdb4b1-eda3-4245-ae99-7b81198c57b8')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (8, N'ee375944-5415-437d-9336-7698cf665b26', N'7b8a7587-f032-4efa-bf5c-0ff25bd42316')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (2, N'eda69fc6-0b5f-44fb-b584-7dfeb8a925af', N'3d266c93-9ae2-41ba-8138-4d63aeae6a15')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (4, N'eda69fc6-0b5f-44fb-b584-7dfeb8a925af', N'14c8bd8e-223f-4ae8-a8dc-6af61beac5c9')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (8, N'eda69fc6-0b5f-44fb-b584-7dfeb8a925af', N'd8fb9e91-58d0-4eb6-94a1-622c503faae3')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (2, N'3a71217e-5941-4c4e-a6e8-7fb4df02d5db', N'f98b52e0-64bd-4179-83c1-b9dfd5970db5')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (4, N'3a71217e-5941-4c4e-a6e8-7fb4df02d5db', N'bd7d7b3a-f649-4439-8705-ae66a65b869c')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (8, N'3a71217e-5941-4c4e-a6e8-7fb4df02d5db', N'6b041d32-d9d7-44d0-a450-8d3b0a437cbc')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (1, N'a428209a-89af-4661-b9bb-9bf455dc0c09', N'dd73d686-b843-463d-9191-3e53f2f04f3d')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (1024, N'131f5d06-9f36-4b59-b8b7-a1f7d6c5c5ef', N'e6349298-2960-4672-b5f2-2a9bc57087c7')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (2, N'518d7aaa-3b4c-4041-ad33-a6fd40df6c81', N'37d51172-d262-429f-9a52-a2edebc27316')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (4, N'518d7aaa-3b4c-4041-ad33-a6fd40df6c81', N'c167e553-960a-4bac-8b2b-ddd852322ad8')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (8, N'518d7aaa-3b4c-4041-ad33-a6fd40df6c81', N'18c28aac-9d47-4cc1-a744-02a592edcbf2')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (8, N'20079806-eb84-4093-99ad-bb46435db028', N'62b0e4a4-bab8-4bc1-8bea-a4a05e379b06')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (2, N'39c47e14-d479-457b-bbb6-bd43af886a05', N'e5780b2f-1ceb-425d-a497-e7bfbe74058b')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (4, N'39c47e14-d479-457b-bbb6-bd43af886a05', N'8c6814aa-821a-4b93-a43f-9231b44eadd9')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (8, N'39c47e14-d479-457b-bbb6-bd43af886a05', N'69ccf49a-0991-4780-b9e2-e4c28f12d556')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (1, N'8899231d-1514-423c-a06b-bf269558200a', N'79cba871-0372-41ab-a145-7dbf9c9169f1')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (2, N'8899231d-1514-423c-a06b-bf269558200a', N'eb69b45e-1652-4f9b-8a57-ff1a87b080d8')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (4, N'8899231d-1514-423c-a06b-bf269558200a', N'ca02c6bd-60cf-460a-96e1-6367f106940e')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (2013, N'c7f4a13c-9853-4806-907f-bfc3463459a9', N'cd7ff7ed-6d69-43d2-9e0f-f59d72c024ef')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (2, N'35a23b91-ec62-41ea-b5e5-c59b689ff0b4', N'0e45d417-ccf1-4565-b64d-24105ad36b6f')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (4, N'35a23b91-ec62-41ea-b5e5-c59b689ff0b4', N'417c5900-bec6-4c74-b2a3-7cef027225fa')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (8, N'35a23b91-ec62-41ea-b5e5-c59b689ff0b4', N'7f2306ec-ad7e-4587-b466-9e2853360664')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (9953, N'5a18dfc8-0b8b-40c7-9381-cce1c485822d', N'5e4c70ff-fc26-4873-90dd-3711f7826980')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (9953, N'81bb2655-f19b-42b2-9c4b-d45b84c3f61c', N'9dcde6e7-1cd4-43d6-b4d0-a37af4db6712')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (8, N'3b7f4860-0828-4cc2-8bbe-d91c72b76b64', N'074cb50f-b9cd-4cac-9599-0241a6c14359')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (1, N'a061872d-07cf-4de7-8ed0-ef79a55f1a94', N'b88f08b6-732d-4fed-b276-65f10e5729f0')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (2, N'a061872d-07cf-4de7-8ed0-ef79a55f1a94', N'c95796a5-694d-4bf1-87d3-e8866721552d')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (4, N'a061872d-07cf-4de7-8ed0-ef79a55f1a94', N'a3bec3e5-f552-4846-a50c-8bd0611ca643')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (8, N'a061872d-07cf-4de7-8ed0-ef79a55f1a94', N'35b1bf76-6359-416b-994f-f3dd41423cf7')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (112, N'90aba153-635b-44df-9742-f02feaff9a95', N'254b08ee-392f-4369-bb17-71a9fc693b00')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (112, N'55316c77-54aa-4d80-8534-f8b5d9aadfc1', N'23b6402b-77eb-4856-84a7-386cc2c7acfc')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (2, N'2cccdc24-c150-457a-ad90-fbaf8fec948e', N'4e900a33-6d9f-4540-a003-146ea6114976')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (4, N'2cccdc24-c150-457a-ad90-fbaf8fec948e', N'93928d38-c11d-437d-8b34-a8d654a482b0')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (1, N'1d5193d8-ca4c-4fe0-9b6b-fee6bb1961f6', N'e6f19f3c-000b-443c-877a-9e560d1d34e8')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (2, N'1d5193d8-ca4c-4fe0-9b6b-fee6bb1961f6', N'3f292279-5930-4859-94b8-1ffe0c462e80')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (4, N'1d5193d8-ca4c-4fe0-9b6b-fee6bb1961f6', N'69edcc97-1588-412d-a48d-f6b1f3b94ea3')
INSERT [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode], [ConnectionRoleId], [ConnectionRoleObjectTypeCodeId]) VALUES (8, N'1d5193d8-ca4c-4fe0-9b6b-fee6bb1961f6', N'5f4a6ae8-e0f9-4c13-8a6d-5771c3472775')
/****** Object:  Index [cndx_Unique_connectionroleobjecttypecode]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [cndx_Unique_connectionroleobjecttypecode] ON [dbo].[ConnectionRoleObjectTypeCodeBase]
(
	[ConnectionRoleId] ASC,
	[AssociatedObjectTypeCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ConnectionRoleObjectTypeCodeBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_asscociated_object_type_code]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_asscociated_object_type_code] ON [dbo].[ConnectionRoleObjectTypeCodeBase]
(
	[AssociatedObjectTypeCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_connection_role_connection_role_object_type_code]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_connection_role_connection_role_object_type_code] ON [dbo].[ConnectionRoleObjectTypeCodeBase]
(
	[ConnectionRoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ConnectionRoleObjectTypeCodeBase]  WITH CHECK ADD  CONSTRAINT [connection_role_connection_role_object_type_codes] FOREIGN KEY([ConnectionRoleId])
REFERENCES [dbo].[ConnectionRoleBaseIds] ([ConnectionRoleId])
GO
ALTER TABLE [dbo].[ConnectionRoleObjectTypeCodeBase] CHECK CONSTRAINT [connection_role_connection_role_object_type_codes]
GO
