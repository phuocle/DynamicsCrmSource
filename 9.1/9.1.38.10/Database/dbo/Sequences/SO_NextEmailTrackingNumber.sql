CREATE SEQUENCE [dbo].[SO_NextEmailTrackingNumber]
    AS INT
    INCREMENT BY 1
    MINVALUE 0
    MAXVALUE 999
    CYCLE
    CACHE 10;

