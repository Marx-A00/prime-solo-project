
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "presets" INTEGER,
    "color_Scheme" VARCHAR
);
CREATE TABLE "presets"(
    "id" SERIAL PRIMARY KEY,
    "osc1_detune" INTEGER,
    "osc1_type" VARCHAR(10),
    "filter_frequency" INTEGER,
    "filter_detune" INTEGER,
    "filter_Q" INTEGER,
    "filter_gain" INTEGER,
    "filter_type" VARCHAR(20),
    "envelope_attack" FLOAT,
    "envelope_decay" FLOAT,
    "envelope_sustain" FLOAT,
    "envelope_release" FLOAT
);

CREATE TABLE "users_presets"(
    "id" SERIAL PRIMARY KEY,
    "preset_id" INTEGER,
    "presetUserOwnerId" INTEGER
);

-- ex (1/11):
INSERT INTO "user"
("id","username","password","presets","color_Scheme");


