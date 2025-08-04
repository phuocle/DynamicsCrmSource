﻿CREATE TABLE [dbo].[AppConfigBaseIds] (
    [AppConfigId] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [PK_AppConfigBaseIds] PRIMARY KEY CLUSTERED ([AppConfigId] ASC)
);


GO
ALTER TABLE [dbo].[AppConfigBaseIds] SET (LOCK_ESCALATION = DISABLE);

