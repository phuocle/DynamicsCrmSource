USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[UntrackedEmailBase]    Script Date: 4/10/2017 9:59:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UntrackedEmailBase](
	[ActivityId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [PK_UntrackedEmailBase] PRIMARY KEY CLUSTERED 
(
	[ActivityId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[UntrackedEmailBase]  WITH CHECK ADD  CONSTRAINT [FK_UntrackedEmailBase_ActivityPointerBase] FOREIGN KEY([ActivityId])
REFERENCES [dbo].[ActivityPointerBase] ([ActivityId])
GO
ALTER TABLE [dbo].[UntrackedEmailBase] CHECK CONSTRAINT [FK_UntrackedEmailBase_ActivityPointerBase]
GO
