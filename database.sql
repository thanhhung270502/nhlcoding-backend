CREATE DATABASE kane;

CREATE TABLE public.users (
	user_id SERIAL NOT NULL,
	email varchar NOT NULL,
	"password" varchar NOT NULL,
	name varchar null,
	avatar varchar null,
	provider varchar NULL,
	"role" int NULL,
	CONSTRAINT users_pk PRIMARY KEY (user_id)
);
INSERT INTO public.users
("name", email, "password")
VALUES('kane', 'kane.ly@gmail.com', '123456');

CREATE TABLE public.testcases (
	id int NOT NULL,
	problem_id int NULL,
	"input" varchar NULL,
	"output" varchar NULL,
	memory decimal NULL,
	runtime decimal NULL,
	CONSTRAINT testcases_pk PRIMARY KEY (id)
);

insert into public.testcases (id, problem_id, "input", "output") values (1, 1, '1 2', '3');
insert into public.testcases (id, problem_id, "input", "output") values (2, 1, '3 4', '7');
insert into public.testcases (id, problem_id, "input", "output") values (3, 1, '4 6', '10');
insert into public.testcases (id, problem_id, "input", "output") values (4, 2, '[2,7,11,15] 9', '[0,1]');
insert into public.testcases (id, problem_id, "input", "output") values (5, 2, '[3,2,4] 6', '[1,2]');
insert into public.testcases (id, problem_id, "input", "output") values (6, 2, '[3,3] 6', '[0,1]');