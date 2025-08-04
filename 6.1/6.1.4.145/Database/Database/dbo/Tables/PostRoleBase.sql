CREATE TABLE [dbo].[PostRoleBase] (
    [OrganizationId]          UNIQUEIDENTIFIER NOT NULL,
    [RegardingObjectId]       UNIQUEIDENTIFIER NOT NULL,
    [PostRoleId]              UNIQUEIDENTIFIER NOT NULL,
    [Type]                    INT              NULL,
    [PostId]                  UNIQUEIDENTIFIER NOT NULL,
    [RegardingObjectTypeCode] INT              NULL,
    CONSTRAINT [PK_PostRoleBase] PRIMARY KEY CLUSTERED ([PostRoleId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [postrole_Post] FOREIGN KEY ([PostId]) REFERENCES [dbo].[PostBase] ([PostId]) NOT FOR REPLICATION
);


GO
CREATE NONCLUSTERED INDEX [ndx_Regarding]
    ON [dbo].[PostRoleBase]([RegardingObjectId] ASC, [RegardingObjectTypeCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_UniqueRolePerPost]
    ON [dbo].[PostRoleBase]([PostId] ASC, [RegardingObjectId] ASC, [RegardingObjectTypeCode] ASC)
    INCLUDE([Type]) WITH (FILLFACTOR = 80);

