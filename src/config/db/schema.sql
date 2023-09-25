CREATE DATABASE kane;

CREATE TABLE public.users (
	user_id SERIAL NOT NULL,
	email varchar NOT NULL,
	"password" varchar NOT NULL,
	age int NULL,
	"role" int NULL,
	CONSTRAINT users_pk PRIMARY KEY (user_id)
);
CREATE INDEX users_email_idx ON public.users (email);