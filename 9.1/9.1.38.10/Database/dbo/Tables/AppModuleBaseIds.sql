﻿CREATE TABLE [dbo].[AppModuleBaseIds] (
    [AppModuleId] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [PK_AppModuleBaseIds] PRIMARY KEY CLUSTERED ([AppModuleId] ASC)
);


GO
ALTER TABLE [dbo].[AppModuleBaseIds] SET (LOCK_ESCALATION = DISABLE);

