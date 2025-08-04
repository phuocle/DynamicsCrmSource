CREATE TABLE [dbo].[msdyn_callablecontext_msdyn_playbooktemplateBase] (
    [msdyn_callablecontext_msdyn_playbooktemplateId] UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]                                  ROWVERSION       NULL,
    [msdyn_callablecontextid]                        UNIQUEIDENTIFIER NOT NULL,
    [msdyn_playbooktemplateid]                       UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [PK_msdyn_callablecontext_msdyn_playbooktemplateBase] PRIMARY KEY CLUSTERED ([msdyn_callablecontext_msdyn_playbooktemplateId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [msdyn_callablecontext_msdyn_playbooktemplateOne] FOREIGN KEY ([msdyn_callablecontextid]) REFERENCES [dbo].[msdyn_callablecontextBase] ([msdyn_callablecontextId]),
    CONSTRAINT [msdyn_callablecontext_msdyn_playbooktemplateTwo] FOREIGN KEY ([msdyn_playbooktemplateid]) REFERENCES [dbo].[msdyn_playbooktemplateBase] ([msdyn_playbooktemplateId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[msdyn_callablecontext_msdyn_playbooktemplateBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_msdyn_callablecontext_msdyn_playbooktemplate]
    ON [dbo].[msdyn_callablecontext_msdyn_playbooktemplateBase]([msdyn_callablecontextid] ASC, [msdyn_playbooktemplateid] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_msdyn_playbooktemplateid]
    ON [dbo].[msdyn_callablecontext_msdyn_playbooktemplateBase]([msdyn_playbooktemplateid] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

