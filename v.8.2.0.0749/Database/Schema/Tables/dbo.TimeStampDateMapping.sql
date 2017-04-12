CREATE TABLE [dbo].[TimeStampDateMapping]
(
[TimeStamp] [bigint] NOT NULL,
[Date] [datetime] NOT NULL,
[TimeStampDateMappingId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_TimeStampDateMapping_TimeStampDateMappingId] DEFAULT (newid())
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[TimeStampDateMapping] ADD CONSTRAINT [cndx_PrimaryKey_ChangeTrackingDbTimestamp] PRIMARY KEY NONCLUSTERED  ([TimeStampDateMappingId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE CLUSTERED INDEX [fndx_Date_ChangeTrackingDbTimestamp] ON [dbo].[TimeStampDateMapping] ([Date]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
