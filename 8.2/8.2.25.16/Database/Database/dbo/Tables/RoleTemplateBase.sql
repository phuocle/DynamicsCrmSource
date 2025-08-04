CREATE TABLE [dbo].[RoleTemplateBase] (
    [RoleTemplateId] UNIQUEIDENTIFIER NOT NULL,
    [Name]           NVARCHAR (100)   NOT NULL,
    [Upgrading]      BIT              CONSTRAINT [DF_RoleTemplateBase_Upgrading] DEFAULT ((0)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_RoleTemplate] PRIMARY KEY CLUSTERED ([RoleTemplateId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[RoleTemplateBase]([Name] ASC) WITH (FILLFACTOR = 80);

