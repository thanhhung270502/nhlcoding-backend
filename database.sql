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
insert into public.testcases (id, problem_id, "input", "output") values (4, 2, '[2,7,11,15] 9', '[0, 1]');
insert into public.testcases (id, problem_id, "input", "output") values (5, 2, '[3,2,4] 6', '[1, 2]');
insert into public.testcases (id, problem_id, "input", "output") values (6, 2, '[3,3] 6', '[0, 1]');
insert into public.testcases (id, problem_id, "input", "output") values (7, 3, '"1" "2"', '"3"');
insert into public.testcases (id, problem_id, "input", "output") values (8, 3, '"3" "4"', '"7"');
insert into public.testcases (id, problem_id, "input", "output") values (9, 3, '"4" "6"', '"10"');
insert into public.testcases (id, problem_id, "input", "output") values (10, 4, '"a" "b"', '"ab"');
insert into public.testcases (id, problem_id, "input", "output") values (11, 4, '"c" "d"', '"7"');
insert into public.testcases (id, problem_id, "input", "output") values (12, 4, '"e" "f"', '"10"');

CREATE TABLE public."language" (
	id int NOT NULL,
	"name" varchar NULL,
	"template" varchar NULL,
	CONSTRAINT language_pk PRIMARY KEY (id)
);

insert into public."language" (id, "name", "template") values (1, 'python', 'import sys \nTODO \nif __name__ == "__main__": \n');
insert into public."language" (id, "name", "template") values (2, 'cpp', '#include <iostream>\n#include <vector>\nusing namespace std;\nTODO\nstring convertToString(vector<int> arr) {\n\tstring result = "[";\n\tfor (int i = 0; i < arr.size(); i++) {\n\t\tif (i == arr.size() - 1) {\n\t\t\tstring s = to_string(arr[i]) + "]"; \n\t\t\tresult = result + s;\n\t\t}\n\t\telse {\n\t\t\tstring s = to_string(arr[i]) + ", ";\n\t\t\tresult = result + s;\n\t\t}\n\t}\n\treturn result;\n}\n\nint main() {\nPROCESSING\n}');

CREATE TABLE public.problem_languages (
	id int NOT NULL,
	problem_id int NULL,
	language_id int NULL,
	initialcode varchar NULL,
	CONSTRAINT problem_languages_pk PRIMARY KEY (id),
	CONSTRAINT problem_languages_fk FOREIGN KEY (language_id) REFERENCES public."language"(id)
);

insert into public.problem_languages (id, problem_id, language_id, initialcode) values (1, 1, 1, 'def add(a, b):\n\t');
insert into public.problem_languages (id, problem_id, language_id, initialcode) values (2, 1, 2, 'int add(int a, int b) {\n\t\n}');
insert into public.problem_languages (id, problem_id, language_id, initialcode) values (3, 1, 1, 'def twoSum(nums, target):\n\t');
insert into public.problem_languages (id, problem_id, language_id, initialcode) values (4, 1, 2, 'vector<int> twoSum(vector<int>& nums, int target) {\n\t\n}');


CREATE TABLE public.problems (
	id int NOT NULL,
	title varchar NULL,
	description varchar NULL,
	solution varchar NULL,
	likes int NULL,
	dislikes int NULL,
	CONSTRAINT problems_pk PRIMARY KEY (id)
);
