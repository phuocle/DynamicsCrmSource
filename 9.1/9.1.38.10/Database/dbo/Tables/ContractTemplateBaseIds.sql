CREATE TABLE [dbo].[ContractTemplateBaseIds] (
    [ContractTemplateId] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [PK_ContractTemplateBaseIds] PRIMARY KEY CLUSTERED ([ContractTemplateId] ASC)
);


GO
ALTER TABLE [dbo].[ContractTemplateBaseIds] SET (LOCK_ESCALATION = DISABLE);

