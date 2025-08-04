CREATE TABLE [dbo].[msdyn_aiodlabel_msdyn_aiconfigurationBase] (
    [msdyn_aiodlabel_msdyn_aiconfigurationId] UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]                           ROWVERSION       NULL,
    [msdyn_aiodlabelid]                       UNIQUEIDENTIFIER NOT NULL,
    [msdyn_aiconfigurationid]                 UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [PK_msdyn_aiodlabel_msdyn_aiconfigurationBase] PRIMARY KEY CLUSTERED ([msdyn_aiodlabel_msdyn_aiconfigurationId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [msdyn_aiodlabel_msdyn_aiconfigurationOne] FOREIGN KEY ([msdyn_aiodlabelid]) REFERENCES [dbo].[msdyn_AIOdLabelBase] ([msdyn_AIOdLabelId]),
    CONSTRAINT [msdyn_aiodlabel_msdyn_aiconfigurationTwo] FOREIGN KEY ([msdyn_aiconfigurationid]) REFERENCES [dbo].[msdyn_AIConfigurationBaseIds] ([msdyn_AIConfigurationId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[msdyn_aiodlabel_msdyn_aiconfigurationBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_msdyn_aiodlabel_msdyn_aiconfiguration]
    ON [dbo].[msdyn_aiodlabel_msdyn_aiconfigurationBase]([msdyn_aiodlabelid] ASC, [msdyn_aiconfigurationid] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_msdyn_aiconfigurationid]
    ON [dbo].[msdyn_aiodlabel_msdyn_aiconfigurationBase]([msdyn_aiconfigurationid] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

