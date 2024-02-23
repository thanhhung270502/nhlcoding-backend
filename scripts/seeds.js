const pool = require('../src/config/db');

const insertUsers = async () => {
    try {
        await pool.query(`
    INSERT INTO public.users (email,"password","name",avatar,"role",provider) VALUES
        ('thanhhung2705@gmail.com','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Thanh Hùng','https://kenh14cdn.com/203336854389633024/2023/8/9/photo-6-1691581011481133485486.jpg','admin','manual'),
        ('daclocbd123@gmail.com','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Đắc Lộc',NULL,'admin','manual'),
        ('nguyentruong@gmail.com','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Nguyên Trương',NULL,'admin','manual'),
        ('teacher1@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Teacher 1',NULL,'teacher','manual'),
        ('teacher2@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Teacher 2',NULL,'teacher','manual'),
        ('teacher3@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Teacher 3',NULL,'teacher','manual');
    INSERT INTO public.users (email,"password","name",avatar,"role",provider) VALUES
        ('student1@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 1',NULL,'student','manual'),
        ('student2@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 2',NULL,'student','manual'),
        ('student3@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 3',NULL,'student','manual'),
        ('student4@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 4',NULL,'student','manual'),
        ('student5@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 5',NULL,'student','manual'),
        ('student6@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 6',NULL,'student','manual'),
        ('student7@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 7',NULL,'student','manual'),
        ('student8@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 8',NULL,'student','manual'),
        ('student9@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 9',NULL,'student','manual'),
        ('student10@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 10',NULL,'student','manual');
    INSERT INTO public.users (email,"password","name",avatar,"role",provider) VALUES
        ('student11@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 11',NULL,'student','manual'),
        ('student12@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 12',NULL,'student','manual'),
        ('student13@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 13',NULL,'student','manual'),
        ('student14@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 14',NULL,'student','manual'),
        ('student15@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 15',NULL,'student','manual'),
        ('student16@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 16',NULL,'student','manual'),
        ('student17@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 17',NULL,'student','manual'),
        ('student18@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 18',NULL,'student','manual'),
        ('student19@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 19',NULL,'student','manual'),
        ('student20@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 20',NULL,'student','manual');
    INSERT INTO public.users (email,"password","name",avatar,"role",provider) VALUES
        ('student21@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 21',NULL,'student','manual'),
        ('student22@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 22',NULL,'student','manual'),
        ('student23@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 23',NULL,'student','manual'),
        ('student24@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 24',NULL,'student','manual'),
        ('student25@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 25',NULL,'student','manual'),
        ('student26@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 26',NULL,'student','manual'),
        ('student27@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 27',NULL,'student','manual'),
        ('student28@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 28',NULL,'student','manual'),
        ('student29@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 29',NULL,'student','manual'),
        ('student30@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 30',NULL,'student','manual');
    INSERT INTO public.users (email,"password","name",avatar,"role",provider) VALUES
        ('student31@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 31',NULL,'student','manual'),
        ('student32@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 32',NULL,'student','manual'),
        ('student33@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 33',NULL,'student','manual'),
        ('student34@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 34',NULL,'student','manual'),
        ('student35@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 35',NULL,'student','manual'),
        ('student36@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 36',NULL,'student','manual'),
        ('student37@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 37',NULL,'student','manual'),
        ('student38@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 38',NULL,'student','manual'),
        ('student39@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 39',NULL,'student','manual'),
        ('student40@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 40',NULL,'student','manual');
    INSERT INTO public.users (email,"password","name",avatar,"role",provider) VALUES
        ('student41@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 41',NULL,'student','manual'),
        ('student42@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 42',NULL,'student','manual'),
        ('student43@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 43',NULL,'student','manual'),
        ('student44@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 44',NULL,'student','manual'),
        ('student45@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 45',NULL,'student','manual'),
        ('student46@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 46',NULL,'student','manual'),
        ('student47@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 47',NULL,'student','manual'),
        ('student48@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 48',NULL,'student','manual'),
        ('student49@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 49',NULL,'student','manual'),
        ('student50@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 50',NULL,'student','manual');
    INSERT INTO public.users (email,"password","name",avatar,"role",provider) VALUES
        ('student51@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 51',NULL,'student','manual'),
        ('student52@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 52',NULL,'student','manual'),
        ('student53@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 53',NULL,'student','manual'),
        ('student54@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 54',NULL,'student','manual'),
        ('student55@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 55',NULL,'student','manual'),
        ('student56@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 56',NULL,'student','manual'),
        ('student57@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 57',NULL,'student','manual'),
        ('student58@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 58',NULL,'student','manual'),
        ('student59@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 59',NULL,'student','manual'),
        ('student60@hcmut.edu.vn','$2b$10$be0COiCACuYZsGrpunvzeekwL75b7TW9YSBgvcIXqktmecbaxvkua','Student 60',NULL,'student','manual');    
        `);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

const insertStudents = async () => {
    try {
        await pool.query(`
    INSERT INTO public.students (user_id,student_code) VALUES
        (7,'2000001'),
        (8,'2000002'),
        (9,'2000003'),
        (10,'2000004'),
        (11,'2000005'),
        (12,'2000006'),
        (13,'2000007'),
        (14,'2000008'),
        (15,'2000009'),
        (16,'2000010');
    INSERT INTO public.students (user_id,student_code) VALUES
        (17,'2000011'),
        (18,'2000012'),
        (19,'2000013'),
        (20,'2000014'),
        (21,'2000015'),
        (22,'2000016'),
        (23,'2000017'),
        (24,'2000018'),
        (25,'2000019'),
        (26,'2000020');
    INSERT INTO public.students (user_id,student_code) VALUES
        (27,'2000021'),
        (28,'2000022'),
        (29,'2000023'),
        (30,'2000024'),
        (31,'2000025'),
        (32,'2000026'),
        (33,'2000027'),
        (34,'2000028'),
        (35,'2000029'),
        (36,'2000030');
    INSERT INTO public.students (user_id,student_code) VALUES
        (37,'2000031'),
        (38,'2000032'),
        (39,'2000033'),
        (40,'2000034'),
        (41,'2000035'),
        (42,'2000036'),
        (43,'2000037'),
        (44,'2000038'),
        (45,'2000039'),
        (46,'2000040');
    INSERT INTO public.students (user_id,student_code) VALUES
        (47,'2000041'),
        (48,'2000042'),
        (49,'2000043'),
        (50,'2000044'),
        (51,'2000045'),
        (52,'2000046'),
        (53,'2000047'),
        (54,'2000048'),
        (55,'2000049'),
        (56,'2000050');
    INSERT INTO public.students (user_id,student_code) VALUES
        (57,'2000051'),
        (58,'2000052'),
        (59,'2000053'),
        (60,'2000054'),
        (61,'2000055'),
        (62,'2000056'),
        (63,'2000057'),
        (64,'2000058'),
        (65,'2000059'),
        (66,'2000060');  
    `);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

const insertTestCases = async () => {
    try {
        await pool.query(`
    INSERT INTO public.testcases (problem_id,"input","output",memory,runtime) VALUES
        (1,'"babad"','bab',0.0,0.0),
        (1,'"cbbd"','bb',0.0,0.0),
        (1,'"a"','a',0.0,0.0),
        (1,'"xU"','x',0.0,0.0),
        (1,'"d4dv"','d4d',0.0,0.0),
        (1,'"y5TT"','TT',0.0,0.0),
        (1,'"sDsBi"','sDs',0.0,0.0),
        (1,'"KT03k"','K',0.0,0.0),
        (1,'"pGEui"','p',0.0,0.0),
        (1,'"mB"','m',0.0,0.0);
    INSERT INTO public.testcases (problem_id,"input","output",memory,runtime) VALUES
        (1,'"I4P0MASLCKi4WE5OqDokoyRAnxOoucDqKwBV3iOmYgHgTHYKESDyi0kYTAiS5Bker9rhy6BnB9kJM468h1PD0Hgbbx0OgZKlfKdefxvBocmVzzkB1s7L2OCf7UxwzITh0oZALc9jVLU8JUuC6JNsxA8I9hxQW0rT1MHH77pHJQcfYPYX4K0rMiGFg0QTuXkOIFpAc3Ayi70iJeb1p3J3AVJrIHmuiDitch1TAVCn5NuuleOKNEYcIkZBYm9UGDkVIVFBhI7HBhrSG63afZKsQgkiyDpPmUkfkl6FjuwVQ9AUvwr13W5RSDzm5fT1PER8yOWSKxnSeKx51pJ7LAedGttywfs018xBCnEnoSXB862uzftVD11zObOfJlphoKGPOlfhlETqTxdOSSOzq4Bth4"','OSSO',0.0,0.0),
        (1,'"PuUyMbqxJvDtTNYUZC0NuYpDdwCJMyhuMRJLtAfmsvtxDeex2E1lPgwSyogRzhszXHfXiRyJcl9d6OQFsSE7vOGQanUlPPoD4zC8OzIp2W3TGROFCd4ZQK2st5tr7iZiGqrmBUAujakdveCwyH8JUd8vV8Y5OKqdJiyfqbXzVURQjn8DSkChm7pQnq97zTGhM5M4lUuvcu87pK1l5xCrwxXPrq2XmLLkmeO4LLRo6Qes5NFL5PxLUzBP3qjUbblmNKh6hoyiw26xD9DFuCdoc4lToch5mVlOW4IGiLgKh8Rmy2AlhgZEDrT3JlT2OqaXXkgtzuIZR3tYlwqgKGvdLebhcbFe4BgaZQ1SCHo519T2Sjgo"','t5t',0.0,0.0),
        (1,'"mnEOulyvDm3IMZfvGPK4J1psFkXmHBaSa9sTwFPxhJmMHWslj0b1RayftQgP1e1R9Z2WBKLAQIUxXGmxpJsG8vsDFnYEOtwR948T1Hv5KsyK93ubw4TSEbycm9qWyAhZGX1fZ6PBA9Gwze3M9Ca5GVawhBXdatKgDOQJcvZ0GmvXFyFHVHMvnK7Mcl5gvcmRnF5o3BkGNZAyZVDLebZT2MmgkNwpQWIOLVSQkvPtaoTxizdubSLUuJMy2E8f0kACn0U0DxKRXnJqVtDifWfmZDaW3h63MPX5xVdIGhcLJTpVHffP3IGasHhUV4ZyPYiF9Wv5XWgCFk0ngaiCA5Ws24Es2Oc63vr0UJ5j7Qy2ZjlwEBZWnq28oXJ0zLau1UELmZZRBeltIffucCSUKN2HG64e3kWIgQbRnamLmoZEQnDgBNPGxTzMatwC7CprkIqkRbnX0YO4yREn0SUAW4t3xbxzqrnBEqpSJeJgIHY7FFEh7jD7HVVGuNactjsTSNvQJx1iVomTAPfpr5c8aX0Fuu872RzwzLDHZzmFj30Z2bRnnysD8AEGxyIKNRwDBDiepZvHwhPdk9wS1hSC4vbrz2ze9FMVEzWn8Dfnpd07swOfesBDmDlHiplSJkCfJ0CH6rMV2q9a20b6eUonA33wYvyzZaEvtAOrIk92HtVeME4bNeWwJFMWPEX9MLvwb22MAqxDvToxxm5QyDkoYnqJRo2RQ1Wc25xteoC769PAKuvwdZ0Ahcg80Pu6ybEDYYQPStSFbA8w7jhtdarBQ1WLnZTy7nlsUfdY8ZkqQhxPurDO1oZjEp4JwsDe7bK0wUxmHEatSCsREs3gGrQqNLO3Xj1pEU51eeCWfJxq14L9Xh8yy99zmCJC1hxrGE3bt2s7ZZpIEhuMncOHMiMbBLxje7a0EnScV9ppoz0b9ynLTKGPkHqeA5XIqBy6hLAtuAFj0aTqQBDkJwTZS8oaXqx7vc05jy"','aSa',0.0,0.0),
        (1,'"WT4O5Wf4aUkLUiiA9Bfp9zV62aHddtFLWMWs2l5jxKJwjPWjsWWd8hmlfqlLNoyuoMF2u1zfoBNS5krY7PNNrc2o6jp2HD6DV0n1Gw8H54VAf7PHj50qF4Q9M07rK7G2OJJphgQsew45Kb6ZB6so3oQk0cyhL8m3g7rFgIRzzukJrEjjwSVJtLf6v5DtRkRzqxQ2gWQLJFzEjP9LtbBJuxuwdSMJCRnvYUwm0xIesGxxBXE9XJBJtCiYUXCAVFILnjEKJPQDdHglCR2XZ2IqpBrCZD0oD2gXqhGfgiVEtmACXuqfpPoEvxAK0nRuLsFYUHIRCXE4c9cZRP58iHY0f1MS6Y0nor4ZlXXtxmg8yhZzuOSxjgJKjwnOMjIQA9A2uCAVx6P5mgyHZqbqVU5e7az5qEdjI4pcuDGxKw6xQFpRPWSqC3DEGIsSLrbVT4hhEmAXF3MPhM3VaRsPnAx3cnNGtO1xpdB5qeVPaf2TSbbGUJx6llnUaBRgIz4"','WMW',0.0,0.0),
        (1,'"jymav50lZE6AMvNOEpT29RcyIAkowBqADFSf4fepWDp1WmxvDGefvZHOSgLOSG0K1PHJ0jTf0M9kox3ShDggKnkSttuZY4BXkpDURdAiCKiPAydciio97AWN91D3d8LOH2HUtnnpD9Ej2eRdAtyrhTfEPAJ7BZtTcAsNT9FknlHXN37wZk075iBkpKDRErZGlXp9AbqO9Ac5d8GrgqR2RBlpGt5TSNmjEpCJFJSlgU3XOLgmeWEtR4PgHDDde5UJ8qXlwUpEG4fzzV91TNDfWNNZtTai1vFwELAHBDk1nKrpcM3BNiHThCpKTT61j8W7vCmIlAx73KkMar4IPIP8jQ7MO0HfuNlTcjwTXqaWpC394SqG72vMhOiFtibrC1zfQnpewpga6J1HsRAVASqhBQ8BBZJwH5Y3N1orxq1dduNKK2to3VfXBXN8zhI819jojetOBFMkXOTVyfzYeJD7ApKJ7Y76vHEwpqCngRMjjSB5TgD7drR8LNgTlSYms9NLAFaCfQPGa1Pd94ZLY0DTvRpArk9OOO1C7aibxzSEP9nrOTcTgTfE6tHZJnaUl1lYbPg3VO6ss0ZVZXJjVl7Gm1ZJ0c67XhG26gUIFxYvEN98xAsOsQ66j8jHfRu2RDKfEW6J1EUZNf7wZz8Gjgi5TAqEaB6rVhANvKujBj9Rhy7r0ZZ6WNrqNiuMWv7xlhJNNvXADsxLyAAU2zVEG7Os7DTKAd5qBEE98gVuv9uFWyyho8NXF0B9lIZczvM1uhAVQN5pGD382jaJQvltwngXt8AzkfY9Im6RrHAV79ATW5j0iWCxIuoqtedWABzd97WcIou4xGpCFY52Y30rrxtDZUfmAuMt7aZAMobXAfIb86dsZit7N1RtoMhBM6o7P3k1rHg0YCgnvPexhOC152Pfl9zVFCfBBPBRijfhNz2OJk"','f4f',0.0,0.0),
        (1,'"U8Dlk8FOCWqjcPZK7GWrUvvl2nMAXgvrOAiuSUyxeERgF43eYuDL3ozONYZLxcweUD57axOnQzECaxtm7jEYv5prAOXPkYq7u4GbliasLp7Xjkmpuhz0DVu37iMUXhpvX04xG9epgGoUV1V9YU9y3dSkEoE7m3GSxKtG3Bestf31ZgVe4B9cwOoNphbj0OzQyIAjHWR2kuxIx4guHesnzs6LcAplkNmLiZAbBCPcW2VxlOmMQF7nOXlgYDXaQA8U5SICvRZmSSIZCSOh1P09mzYkIeJD579dIIiRLVJ6sV05vhJ9rUzMKiy3VLRffhCaWisHv1qHCGhwDQ3RJJD5JitqmMzuCgqUYnOnLDy040z52XHMMAJgAS0pnKsc6GrINVYJp6LelLxIty09yNeHGJ6XTaryaHyOmgc7yXQRtwr9Jdyul6zckueAogwJbFEzWi4WNQIUpNGwIt5FNjTcNFgLWu20v1pozvbNjJAjL2IKqxP9pYf4BTCjDE6orjjDAFTJSKi2CmQGFsN8uhM9wbn2LeROP2CKovlQy87GwmMtNccnV4Q8DLCVBkZhx6fcJI8ES3Jb3JWp5Mk6bkVvjs7egkfIaYPBLNpYyZZ2FgMntUA7zGNkU7RHL8WZKUb3njCuVIcCYpfCtrBC0nlVjJBB0A3VtiHSlITcmrB7wZ9nvDkzNIDUEv7MIWDsS1c7e1fJwqIfPywRcS6el11qiZgJZZDheV4Lw1mJ6t6MXhRXVy0mfSa00tKsUkmmvPrxrJxJIVBSDWmUyL8NgVApNwFwW7vy6EgNLb7vmo1EE3UZwOw7zGVmxGyIuDk8beQkbJMw5eXu3Bj3o5dt11wcQZunMNZELzhq1AP2QHXlYAU6emupdjFJCsCu"','V1V',0.0,0.0),
        (1,'"D89jx3UQ1IYYlNZMW5zcKeyWjuAF2yUk9h055A7XCuaJwOdqJOemzmjco4wQkeyDI31ehsOAYAldafdSYSM88HU1ISgZHyyeFJdYPWDNRQNfEnoVwgJOiGEbMOV4NJmk1qg9rExAVqusgTjJ5fPixs1tfF4YRdCNIpqfEzYIgK3DMsbntEh9soYKgJQPxwUPqRCxEjWkL0P04UHYZ3U6FaULxiDEmiJZ4YDXl8xAbsUquwWKThzF2KMKp9e0ByIHTDoXdSNT1LaTEIB8rljXvw2qUfvZbr9AsXAn8CYIx71grqmf85wTTK9FhrfPu86A1ZUG7EgbmMJ4CbguKrAeLPoiaOP4TTRzJbDV7hH4lrFUZQRVbsHKMyedvrCFk0wL72HhXnLgfDSneMj91IOapFJiHe7"','mzm',0.0,0.0),
        (1,'"QMDeThXXKKaiJy05WModGrqCX5D1c1XaBGzbTIf3qAjtPSDWBCoY0fHKoXgEus61iqi3wXvtoN8cxU0fZ1hHqlz2TRqtxtlGdlB3ompXvv14tCknGjlC88HMHodjUsYc4W8RuvRezfLZ4Bhjg87InIOvZlgw9tl426KM6EtUb2OSWTZRve45itNmFjGxcf6xrRyKw8Pm3iXrRQsCGcwBRGrho4gMfAbweTZSmEI3LPH6TuNjM1LiS5W9N8qM0jIy2QpREj4VdOATSjRRvnnyonLD3UHIWqVXmhd0GJ1Tbp5gIJoNJres40VCWnWmrDUbOKs9UJ9crH4o14WNzQcAbEqwnSGM1j30tzzcbc1TkzYsLT5tuzc8f26xB3lPV48BoHo6mjxiQ7mUibcJz7ael9w9py8kYB3Mw27s3unsujPy7JPcyQ8Z2dPNhS4MzcR07AiNvIuu6KG0HlK8h4rbHdxaVDtUzcZxzfZJ6iwzu02Hg0OmtZvSnxP75qcgKNKZbixu6p7hAUyE0ErgaLIACNoe1d7oeBjHg9ajPWQBgYzJas24te3yV6Iu1qpifDd96ipq8PCQGxlcpmOeTQ7Fyms5NCdvL1UvL3XZQRhqbT7lec7s6bA3KuoNzlWMwjzvrPg"','1c1',0.0,0.0),
        (1,'"79hJh7hfuVwEqTXvrbVeRPpSsGj8qV3aumYQrlJJ3NuntnBox91y956K1Z4NEzeMHx5Nm2ibMeUj76y4R22hYhH0PJ8SGafQEGTqK9nqKGTrUzUciRRSqEDrlccyY9VNebqnlQjEbihyEognXc2wfYOilk4Sgz5Y0qdVX9exUZ76JEvaLGXLqZcEhwwOIJaJgPnKJQkVk7o0EwYxmddmcYyliZ4QbWMftZez7LWecczCuMr8nCnqgm0v8lT6rWWBYxZniQ1JYHge8wu5SGZRdYVhRjYk0pQkh0bbuCotbIUS4fkQSgkzxnJiF0bsWuDtTq2C3cfg3TyucYqelwoHeDBZKqMQJTczRAEUbIgfgnz6dDsd1q18Piy4IOMIFk4gTod8kNkmAvREXfiZYTXnPjnAntpuP3waJUsp3LU69XD8drRcj0gWJ27eDbPViZgpjg5qX7eXIRrQkMcPFXqM16UZrrdew3JZ7tnK4N5qazUlB6vIjO3RGkuk7GNbTVWjI8sIVhyCxs2fNNJNKnBLqN5ecULNIMjDzdPkiemBYnC9rpfNOIGY0DdwHaOjJqrinL5rdtqeaaRb5mKWkgOOVkB5Q9Xs4GUMOhMekIRawKOsCHjq4avUhFwvLhQ0CbinLhER3JZAcCCcTBWTcYWsQQdE3dZrkFU4q3CJVArVKfd69jTdkX0YXdfnvgcLzBGttGtUZThv3dw3hJGUJJgslSI1LrtInKincQ0BzBpeDB9D0Ph9LjvVxb1NXHCTw0HAn0XwHLOeDXpyLknXlJ6l3Js9GDZO2YRy9PuVUxUEylijz5sv1OWbnQgGTZciQLQrSjCoSDzs0h4Vsc5EnbjWnrKGYun65ykJWT"','mddm',0.0,0.0),
        (4,'"OwBI"
    5','OwBI',0.0,0.0);
    INSERT INTO public.testcases (problem_id,"input","output",memory,runtime) VALUES
          (4,'"D,nlyCu"
       5','D,nulCy',0.0,0.0),
          (4,'"vU"
       2','vU',0.0,0.0),
          (4,'"MdkSaUpC"
       2','MkapdSUC',0.0,0.0),
          (4,'"RNHBwjHnEK"
       4','RHNjnHwEBK',0.0,0.0),
          (7,'838','TRUE',0.0,0.0),
          (7,'616','TRUE',0.0,0.0),
          (7,'202','TRUE',0.0,0.0),
          (7,'4','TRUE',0.0,0.0),
          (8,'"ctoogl"
       "sg*.gqp"','FALSE',0.0,0.0),
          (8,'"aa"
       "a"','FALSE',0.0,0.0);
    INSERT INTO public.testcases (problem_id,"input","output",memory,runtime) VALUES
          (8,'"aa"
       "a*"','TRUE',0.0,0.0),
          (1,'"fQNZlCWvkYI8y3B5A7MrYzQTvA8xcLPLkPUzgGRM5JH3YoSZcZ2gqGdNCGHO3UGr0LSsIC3jB5EKWoC4OPObISO3eSfWbkv2IiObjxEELJcMhCGNUgmfvXKopQmMOGcRWsAkux3kHRgBdhm1Xwml7JgYt2EPmONZmtYEqAQ12AhZVNRZBrZSzDC49Z3xFRMvwpnn6GvFkXclGwQIucplnc8qewOgN0TKlQ4khjNReUFpfcarl9j8dn9I7IG73PYLj1l3xG97MPO3rhp6b2V5upk14DwVB3KXQlW9GkJBJW5YHhLJ5lZJUTAKkiwGlBkivzHxFkYxux545MBLLG9WdkYgeQsbE6iWq0U7PjMtDLiYfeRisfaFFtjIhhwtSGTqZbEvtmjVdYWw4xMIUhKcisoKZt1S3Y9b2xDeaQBRVINAuUm8eWbVvab8PDFyuOIV33bUKXggdSKCK1mzmv4ld1NPNk77hKI1CIDfVnaVOMmj5CBXmF5krQlaJDnbOgdd410yZr9Lgk2Q3OyagidebpyMq1r90gwPYDWC0mJOaV8HTEmFhzbxIMj81bbfMuaicTSOTL5FvdlUkOsXZBqjeceCjer9eRnS96w2btMzC4cbusTc0FHT1bPLUWIc3dqnv0x6jJ8buo2FXlVoNEs9N1QvQnx5nEGcyHaRwTqulgI6AisnrQjQMuAJukjKV5Ttb9ZU4LUnNKZhMSzU9EI9AMF65tb04eZLhyfMi3AE4Co3EEW0pfyjRpGAaEIM4VqgZEEnC3llzrxUqdzJpqQjHBIZo96ZPEZDUlKsQrRkDxihupZmtMu6X80hF6MYshFirXRMdcWCCWoCStab0CTEpElzdTIKDXuXYsuJksp9sqN9AYVNWt3N49B1szKRMQDyucJDeBtuZ7nPQSA3KuU8CISLXo0VG3sDLbmGSXbCEaoQkgk79yHzsU"','WCCW',0.0,0.0),
          (2,'2 7 11 15
       9','[0, 1]',0.0,0.0),
          (2,'3 2 4
       6','[1, 2]',0.0,0.0),
          (2,'3 3
       6','[0, 1]',0.0,0.0),
          (2,'-93 -17 36 -79 34
       -96','[1, 3]',0.0,0.0),
          (2,'95 49 -37 79 73
       42','[2, 3]',0.0,0.0),
          (2,'-4 49 40 -72 75
       36','[0, 2]',0.0,0.0),
          (2,'6 69 -41 -1
       -35','[0, 2]',0.0,0.0),
          (2,'10 -19 -4 26 30
       22','[2, 3]',0.0,0.0);
    INSERT INTO public.testcases (problem_id,"input","output",memory,runtime) VALUES
          (2,'-6 -55 54 22 -75
       -81','[0, 4]',0.0,0.0),
          (2,'84 47 -43 49
       41','[0, 2]',0.0,0.0),
          (3,'"qvd8EZ4kV3xGhXwrjxSYHE2ZjaUw9iYMG7MxD3CZGyVCAZoXTTxbGWvjZxN7Q8of3IwJqm6nBO89UOb03unMEo2tIvDdSsN8iYeTXvnnYs5M38AJVu4iq5h15lfwt7a8X3TDEsl7d3OXX30mnPqJAzZXGCSri2xIN9zObk6tE5dScunPteS7iJU0gpNDthFXEip8Mw2qkoxyGr5TrmcUfoPciMDe3P6JHVcSKyDt6V2qEqECSVaFlwe2nEpz3x6tDvPHYcljNHmLVKlY3OSAdiGrfa5NjnjnfcX9jpJ0BRVWYjL95UsVrfIfNcddYmB9Tbk8QFQdzHmLvqWr1hw1lXC3kLvq988qF6qrRY8o9HVlqGKndKeBE2R02maHvZmG8YS6ELElKcUH1ArwwuoWx6HkBraRXAk4ZJ82P5tB5J3OLalKd3BWpic5L8cxMuP4QwJ4plgHUoKb4g0yI1eKEbDOJqgmauWPTXHIAhvwKHCDGA4zsV4AY3IWw7KwpUkUosZpRmeCVFlOpIMnSQgv9fAJqCsARf"','26',0.0,0.0),
          (3,'"PhR"','3',0.0,0.0),
          (3,'"e"','1',0.0,0.0),
          (3,'"k"','1',0.0,0.0),
          (3,'"be2"','3',0.0,0.0),
          (3,'"yZTcBP"','6',0.0,0.0),
          (3,'"PTckVeVH"','6',0.0,0.0),
          (3,'"Z"','1',0.0,0.0);
    INSERT INTO public.testcases (problem_id,"input","output",memory,runtime) VALUES
          (3,'"olf"','3',0.0,0.0),
          (3,'"VOM"','3',0.0,0.0),
          (3,'"d"','1',0.0,0.0),
          (3,'"8OImS178BkCf0ISNRzMyadmasF4RdWpD8PXI09AcLdRXM4uzjSWqSJUE51bj5Nnw8YEmStVKX8V32cWoCEiI7wuSjfMcs3OixdMQ2PUCEKZSeWyQnWfJsbaBCpRA4Cz5K8kybX1eoO5N6C2IgISxsQBWjfTaVeIu3hh3E1FVoEgpZJbADwQ8eewSzsrSASweUg8lMkmXnFu7X5Xuk1aF1kRBFZBwhmI0ue9vXEvqywRIvqcZWlDaS5aEdp5FI0WvB7Uzm71Ibn22Dwcc2a441BaTJ5FNS9ZXXgW9QYRyz97pJLanHSYCDo252P8wumBraTAxSMTWVA4ILJd9bBii7uMaHx0CM02ZEfdicgU7QMW3ZoGlZ5BPCPcVxv60Akb4kW7zmMmnV0YRX4LfiqHzgFQ9arXKrVuHL5R6elDnfrsLIRcFlBdPs5bIlzvaO1Gd2Ev2J0F0hohLqbSCf2ldAw9tL94NYj6ZuL2wq2tR3oM212MYb8JOZqiYciU8TukzFOASGD3dD4Ho9VMjTNcAMMPx7UHOOCYIg6c08ox7fcpVlCiIpc8FnFbq4N7xsprBAK2tWm9KfjxAoFdQgMgW4sCKGHADc81teAmG7AMpf2pkBHGdCr2zq2KRAhti5Ez1cSyl2iD00bf2AgKlH2RqauSyYce4ry2thWIc45m4aR3mIOyqdJ2d6nVejppBgFk27yEARzEAoZVC3nI1M3SKYOJXo6wqudqWdNecxBrGrQcJLGnCjJ1SNZ4uKTom7VcGLvKMYegNENgoZNOiKBpz87HqnaMD"','21',0.0,0.0),
          (3,'"wDF8UXXcqfBZe"','7',0.0,0.0),
          (3,'"RLY30Gtnjv6Eskj3s4kdkkdOmBAQH8UeEi7CjJqxhuKDU9JKMeDZTnJcPDAA3sHLCGShz1pkRAuvu3Jk3NPgRIslCup9PVjSjHWAHu5H7WaoUVSGHsa7ofNZoZfENg4jop0MzONzM6CCwNP"','23',0.0,0.0),
          (3,'"rTh83xkpqTupoO2fiycU4HyqlUGYVat2WxhiAR3FobhAZaeUGMUwPhY5vkJFeuhfMS8II4uSwlrUAIGAJPM1EIdF20VZrUW0aXLsqgEw102nHMdAxMbYVTA2lCfKyUL7LCxod4ouhwRjmOVwHlb0rxxUE0CrOGHw8qVullWW2XNnlyxsaJTSEPnBHY164CRK5jRXWLYgKty5uKLNVe7mWYCSZZFsMKaRuHUBYNWhXrJGVpx5cz07MSLKd7iDKuhWfsEpTt6323BfTIGNv905RJwS7dRLi9H5t3880x9Se0YCtOqQWwj9CSrg4D4wpp37Fz591mTC0763nvOse4J9FEGgwPzeOMAi7Yonc5RClD5K9MUwUX6XRuDFdIw4YWhHhiBp01RCNKkFSFCBK9HWiNfAyjLxJb"','27',0.0,0.0),
          (3,'"N0v9CfYG1v0k4Lmhxp8zTvb4n2tsNr64TmJ9fxWWlBNlOC9rxne6U7cIrf8XRhGyMrDhutxIM23TaQCtR5Rc3VkcgFjujYC4nIfJ6nhkCkIIRfcAjwX1LnsdH2LWXwWcpdrS6VMwsL75FD4kdKXNRUuE0zLnL64U2FsKyJZ7FLyV5XpSTyll1jiaCleNqqqkz43wLfnyBcyYIYxIxebcsk050FHvuNO8Fd9vOLpju4Ljy93vTyoUbnH4Xw2W4cycloBQ7bfUBlgPU2ElOCzmISIHCXH8Z9kDlVNtYnwFa1TOFK1DeeqVYY7nVFfM40DlMIKqnSNgVfKsdTzQIsFKnx97L3cmN0exy17JTmv1sr8HIst5GFMJU7f2e5Ahniv60jZr85IdtqTEwgZgAzzqHgFkvU9oyaQvY8VDjQ2GvK41QPDdTf3IXht8SUR9e9wBA6iwhTdv9jmHTJsycBCI2RAQpMX7wsVQtLmVzsgh9H9yKSxZ1dGp0locdE3j5YUgMA48xYgJWYnnxS2nTFzQJpW4OFK0WDuXE6nn7FbqexB0VmK0QKqadvItOvrrayNXMYfqNX0YGvZCk81JcTJ8L7YDqs5Tr4X133ZqU8yV1nyN0A6ag4Fvp9yLnuSb3PdsuhtsvasnExqqLa2CPHfjCXBUXWtcWooHa7MAwuGISTyPe5ZIga8mjd7fwszzaODKiJsztqbdGOnR3cwuJgwxl8NRMZ71tg7fSCwZtV3GdDgrHAoLkfUdInWOgud2LdrwZCaDchF80wrmjXPrEdTLx2Z21"','24',0.0,0.0),
          (3,'"QcqDMPsoPCAtuvKuSsWln2pQiTGWscKqD8mNpC4aZ8LuYEeIKps0sqz8Hitey9QPBfunX2iZvgOc6BYtzNuxFqkHogXXWkFSXqH2MfboKtSFafbi2bsEO2JcTQA18ouJULLsjmeK5zBurrwQvejpUrIWWumo63IPq8zGOPvKZCBXv7Gt4KYEyRQoXUuIicNk4AVRUSU4SIvibhFKYRNAc6Wh0UvWbwZWgDrJPRpOYHW6e7d5WDrXGNwu9amRBRGXjTmpIcMkFUMoZNBzQ6F6l6BG4gVpMi0bUvcukeDVLTVDf8OY6pbZGqeU2Y8amBMFXU8b9XHOOET1Yxboon24DByhavpK6NvgW9lirn9eYcfyNt2mnpIiBQOKPjI95iWdimJ3eysza4b6kwR2YO5GsvMYRHj9FEa0DWMRTwdjVBdrhA0gmO3mVBmSHSPnK9Za98r5Kj5LpKW1heOlO2HBqGae06tdbHOslMvlCoGifotZqFWD3KZ6gOwK0uI1L7mRSUSautI1G7d8pKfI5HJREtMbCwfDoWMFArNTbnwLZj61corBtmy69LPc8KC3vhyWYWvhlgEJq6la2UWTrCPztSEb7ELpETn8QYBWjMSEhzsDPP77OOor1zj3b70gJjHnPM4viyzR6B7LHpotTr1VdnGGys2tr8GavLhpzykW0CFeTaK891hFOqheaHOkBZmkLIzWYUQWolnjlKYxtWKVlDssCDLAoPFm8HePgL3M8UQe505d3uq1KaCRMEiFusco76wFx"','23',0.0,0.0),
          (3,'"4Xbvt2vkbdi1xOVR2kygGlGG1N84ul92cwPYBVBIJfIsVtZq7u8WvQwlmqfBl4UyDlt0"','17',0.0,0.0);
    INSERT INTO public.testcases (problem_id,"input","output",memory,runtime) VALUES
          (3,'"78OX12CNzxESftwzTZZeYoVXG0thNuloA1UkrqMuPaeE96aUCIORn94RTdcvn3Fee1QlJYgJuSlBVtxOEtcvL4AYbfociklv2jF4epWppB1ust7YztfbA0wbWC60f1nYTrRo98yqFPyCLrVVMvBJtfYnbZoz4qdEa1pbujhzmvoflPCGYQlxFCPzuRFmPoVvOfBlJ7w9VzFbvm3jWhxUZoisuryTlTE54HGme66MlVA4LSZXiLGsgxnfSOTPoc"','28',0.0,0.0),
          (3,'"MdsH45JnOIEQgxQSSlHaG7nPAOsxSEMVwbIIUdmVke6X6ZAA4e8rYw0tty4MsICppjiPSk15aMZhvNZ8CWJ1dwBapEmt1tDTwp7QY8EHmIoP6nQCBsASnn97SFGorVs5ex2PFxBwunN8EySAeZsexoJ0vVTL17wEdvLTirRypTd4oSuuL1dG8YcCgCrcEwX8ux3iCj5XuZr6HHCRyhMbizqhnijtzCrLRx5UTDyZwCoyAa8ssA9mjNoWSXfOixRwJkbu4cpCeVecKtDW6ynpOw8GW6Zs6yO7pzqT7A806z3PWoVZbMaBJALjbh3glpFugjykb0h8m80TndrbSSigvczFLqhkJpjAeL0tnETNcfTpGVorbHlfUQTCJoqYO3WNYewcq1oQaGIq79WpRlQPCjMaRNFeWHQGdyWbHKy8w5BG0EiaiVcHuHS3sYC1alyRZANEe9RAu112mViemAWjKRQKy1LJtuwB715SQeqMaizVCRxhWmp7ImW5FlIJ0mn9AAW02syFQUiDGEN1US7uTpsqZxkPv5T24wsXTS8kMXkzEH0fyZjHekQlk6P3rxvFPWi6rEDvfnQvBtcz2yMw7OFVRIi4b27G7C1IRbtIyTiyeSfPDY3wh5vxZue8iNiLFiU1tvnxqgr8pAfD8FlEp6rllffNLu4hyXmg0UXxAJRE3ZigeynrEfoKEf76PLB5ADRzj0pelDv5Re1jsFN4QVtX7mHWAQIhUZlETeJD5DhwUyeSCVXVEYSgSkIzdODQEgf3BTbGnPP1oVfJKeYAhBHNovh0Zf8Q3ojmWgtl8gbzgQtioFz9APCG8X8fpLaw6ZIbrZ5I6y7uMiyslDBuutcVKcXy8blHK"','26',0.0,0.0),
          (4,'"A,jkWs"
       4','A,sjWk',0.0,0.0),
          (4,'"qhtUkdGe"
       2','qtkGhUde',0.0,0.0),
          (4,'"h"
       4','h',0.0,0.0),
          (4,'"X"
       1','X',0.0,0.0),
          (4,'"IZlmo,t"
       5','IZltm,o',0.0,0.0),
          (4,'"bUluhYDRiYhKuIAkkBbrXSBhrqwsgTCIZcTgqydfGiFyTofAapWIZvSTISUViJittOGNNGOCNvWoRZNgHQkVgqBnrmsfrRvszGwXIUUExNjZJgKYdOipFrLpYqexgM.VJxLTJ.igIyeoTJvjJqBuvzymzMrxvtZGCFLH,aUDZPZksZRwpJvtLUVTEMs.ozGpDgOSjVIeyCJTNxqiGqOQwDYOrrqkIoBbFmAvhrIRPdEQGpr.HSveVkcifgjHUIFnA,pytionrbiXsUBtSdqlkMTOJR.ijJGZbrRGgCIuOdUf.mfSFhPTYCSJTLjX,K.YRQhEbwfOSfkiyKTqVZZHGRdVsBJhcmlOYnBIleLSPRYvFAfPQqbdARMIzCJGUxWhFNGxICixbgonaspaSFmfoUAlKYpLli.KEshZCqcyAVQmiYe,Z.YoQYGfcfrbiePmcGePhVuDxaYbVYHpoCJUkWaotXKBQoFmrfFFuYyUzLXfGdYwPlZlowboWLoUPpOAKIZrotnRDegyBwQYVPb.RRyHKClVsXIZBVVEKUjHkDWiumKHjEVDFMbUxtZUsb.PVTMfRvUVMcavVIvaXV.kxEgCG,NTkpcNcsgk,lSjIS.fkoFDkiGRqkYDjbJthfOCNVpVgyYIiIKicugnoUNLDxRvTcCwA,i,oFfaR,msVOZKEgUsbYfYawSrPMWddgtTsn,mnCSUAqUhlsKmR,ZncHILEFSjayETtzkoczKFWyOLfLjJHPQQLdnRHyICghFhpTP"
       650','bUluhYDRiYhKuIAkkBbrXSBhrqwsgTCIZcTgqydfGiFyTofAapWIZvSTISUViJittOGNNGOCNvWoRZNgHQkVgqBnrmsfrRvszGwXIUUExNjZJgKYdOipFrLpYqexgM.VJxLTJ.igIyeoTJvjJqBuvzymzMrxvtZGCFLH,aUDZPZksZRwpJvtLUVTEMs.ozGpDgOSjVIeyCJTNxqiGqOQwDYOrrqkIoBbFmAvhrIRPdEQGpr.HSveVkcifgjHUIFnA,pytionrbiXsUBtSdqlkMTOJR.ijJGZbrRGgCIuOdUf.mfSFhPTYCSJTLjX,K.YRQhEbwfOSfkiyKTqVZZHGRdVsBJhcmlOYnBIleLSPRYvFAfPQqbdARMIzCJGUxWhFNGxICixbgonaspaSFmfoUAlKYpLli.KEshZCqcyAVQmiYe,Z.YoQYGfcfrbiePmcGePhVuDxaYbVYHpoCJUkWaotXKBQoFmrfFFuYyUzLXfGdYwPlZlowboWLoUPpOAKIZrotnRDegyBwQYVPPTbp.hRFRhygHCKICylHVRsnXdILZQBQVPVHEJKjULjfHLkODyWWiFuKmzKcHojkEzVtDTFEMybaUjxStFZEULsIbH.cPnVZT,MRfmRKvsUlVhMUcqaAvUVSICvnamX,Vn.skTxtEggdCdGW,MNPTrkSpwcaNYcfsYgbks,UlgSEjKIZSO.Vfskmo,FRDakfiFGoR,qik,YADwjCbcJTtvhRfxODCLNNVUpoVnggyuYcIiiKI',0.0,0.0),
          (4,'"XIUHrTQceeFcCZiFOHcrgjasGabAyJHJThSwzHSPzkSQLITGqPGrCvqpGr,FW.hHUTnqdnzAP,,TMwPwncCvRGjmHzdGptZapxTFQjEqTlRalBTFybdNWgfhydUfLgg,LN,,ZHxURMeaJEQWXqdrSbseHERqRSMDBY.peRXiGFDncpgPXMp.liUnAXM,cQdDTWjxAvbAlOEMlTjOSuiSDt,qzhuUW,VelfqnGkTPfQsXpBBLtBZSwkPLwtFtvyyphGCfLzWQc,PoTKt,aAlXJvfqPNWkHHVRf.RwkJuRCuZzZBWNbNrkIwPw,UBhXNl.cMhbCQBnCracMDM,,zawgW,jPV,PBjtjJTuOhqAElVUOJVEYgLYja.i.ieNpolSxMfvXWSkNAUBhcjDPpVFTmgflMfqBCIfFWuqURQFgurRAaktWJQtthHRMVF.,,wbqsdOrCFxGTcygmLiGzLaHLQvPpKRQlvHxxAckfgxSvLFKAwV,ItbqnexQKDoAj.LCWKwjDXSQjChNFiNwRKRNDeUETuFUSzDakLdqpYlQOETSTXILXUUMKwPbwoHbmfwhcaabAhbNxWp.kjopOeNKGdHQIulAVqIephdrAKCSQVjKAKYWdGIHkUaJSuaIvoHMNTwxQGLzYYb,udRhWSxwBBiwbDbHHDEoINqNGTURptiqHlao.zkurdvynzALnCXGAgRroNxUalh.KM,QnYKMhqOmvFrUsLKkTvKwTnJTQaogAtSiPfeWpQMkcVLruDcIHvLkZZoyDuUTINAImyfdhGBNEgZemwxuskOoPeYJhaijImxQkfGgbMVOHQ.plJJPKQLyXnDYecKjFFZVWbhgUtjHuvtXwKcJcTe,y"
       496','XIUHrTQceeFcCZiFOHcrgjasGabAyJHJThSwzHSPzkSQLITGqPGrCvqpGr,FW.hHUTnqdnzAP,,TMwPwncCvRGjmHzdGptZapxTFQjEqTlRalBTFybdNWgfhydUyf,LegTgc,JLcNK,w,XZtHvxuUHRjMteUagJhEbQWWVXZqFdFrjSKbcseeYHDEnRXqyRLSQMKDPBJYJ.lppe.RQXHiOGVFMDbngcGpfgkPQXxMmpI.jliiaUhnJAYXeMP,ocOQkdsDuTxWwjmxeAZvgbEANlBOGEhMdlfTyjmOISAuNiISTDUtu,DqyzohZuZUkWL,vVHeIlcfDqunrGLkVTcPkfMQQspXWpeBfBPLitSBtZASgwokaPQLTwJtnFTtwvKyvyTpkhKGLCsfULrzFWvQmcO,qPhoMTKKYtn,Qa,AMlKX.JhvlfaqUPxNNWokrHRHgVARGfX.CRnwLkAJzunRyCvudZrzuZkBzW.NobaNlrHkqIiwtPpwR,UUTBGhNXqNNlI.ocEMDhHbHCbQDBbnwCirBaBcwMxDSMW,h,Rzdauw,gbWY,YjzPLVG,QPxBwjTtNjMJHTouvOIhaquASEJlaVUUkOHJIVGEdYWgYLKYAjKaj.ViQ.SiCeKNAprodlhSpxeMIfqvVXAWlSukINQAHUdBGhKcNjeDOPppoVjFkT.mpgWfxlNMbfhqABbCaIafcFhWwufqmUbRHQoFwgbuPrwRKAMaUkUtXWLJIQXtTtShTHEROMQVlFY.p,q,dwLbkqasDdzOSrUCFFuxTGETUceyDgNmRLKiRGwzNLiaFHNLhQCvjPQpSKXRDQjlwvKHWxCxLA.cjkAfogDxKSQvxLeFnKqAbwtVI,',0.0,0.0),
          (4,'"SYvG.FwrVzPbqwCnWXFkpwRZDGkwrQaC,mVLuc..ZjazdVAlxQKIRPfcPN.vKHg.zQaXfVTxpRYb.CjxJ.nNaLuPE.vWWNvOQHbdQu,flhASTLGJhCcGHrOixvsfMHeurnAqezpfaABXGVsgefMdsAVukWY,K.vaEiuMuHkJt,ecQarHDFXEjvxxBWYuKUPuXYtWEtKuyKehsHGcogxaFRzgENSHi.tl,usePFHkjxbpTJWvNb.AOzNZp,xuBBRulmLCXE.AbvPCRkzjpkwhYcSCbVtDEmmcNHdvDJYhCEJLwSQjFGcRpgESgteazocXJVxj.uCIciNvPub,Vq.KK,JbuUgDfDcabwdDZoIUXfaLNeebvKTOxntbDVYTSGeTbIMIKtG.tbnCHXvpUVvKdnVBddmAwesfrvzQlbWfvka.erSMhcNJjPAfRaVOWZYfYIZzwrsXSksFdPwWCCMWBPrpTvpsXrhSuji"
       606','SYvG.FwrVzPbqwCnWXFkpwRZDGkwrQaC,mVLuc..ZjazdVAlxQKIRPfcPN.vKHg.zQaXfVTxpRYb.CjxJ.nNaLuPE.vWWNvOQHbdQu,flhASTLGJhCcGHrOixvsfMHeurnAqezpfaABXGVsgefMdsAVukWY,K.vaEiuMuHkJt,ecQarHDFXEjvxxBWYuKUPuXYtWEtKuyKehsHGcogxaFRzgENSHi.tl,usePFHkjxbpTJWvNb.AOzNZp,xuBBRulmLCXE.AbvPCRkzjpkwhYcSCbVtDEmmcNHdvDJYhCEJLwSQjFGcRpgESgteazocXJVxj.uCIciNvPub,Vq.KK,JbuUgDfDcabwdDZoIUXfaLNeebvKTOxntbDVYTSGeTbIMIKtG.tbnCHXvpUVvKdnVBddmAwesfrvzQlbWfvka.erSMhcNJjPAfRaVOWZYfYIZzwrsXSksFdPwWCCMWBPrpTvpsXrhSuji',0.0,0.0);
    INSERT INTO public.testcases (problem_id,"input","output",memory,runtime) VALUES
          (4,'"CHzkcLAygnxpxGqNOWKFHQIGdHCCdqDaWtwUYSpbXwktEUVaiZtZidtczuqoTNk,P,UwMVCKQrvoGsuQPcNayDW,rZF,tMzCbpqFIJCfONyduDzXUeDo.GeJxBMcmmaChToFhk.,tW.XoHphOXlUmTlDzagn.chzajLdwtXcomJuwbRgzGJbMvASUuKePOVnpwLRXOWw.CTtJWQSsguckTyZsNzKTPY.rNvRtXMoBmdQGJXpzNGtAmhCwkgnX,vl.kwqSVqAumzOtrSwkGSx,VknoqUzL.t,FYugScJcaLkkcbjgUBRirLpzkNbRasexrK"
       885','CHzkcLAygnxpxGqNOWKFHQIGdHCCdqDaWtwUYSpbXwktEUVaiZtZidtczuqoTNk,P,UwMVCKQrvoGsuQPcNayDW,rZF,tMzCbpqFIJCfONyduDzXUeDo.GeJxBMcmmaChToFhk.,tW.XoHphOXlUmTlDzagn.chzajLdwtXcomJuwbRgzGJbMvASUuKePOVnpwLRXOWw.CTtJWQSsguckTyZsNzKTPY.rNvRtXMoBmdQGJXpzNGtAmhCwkgnX,vl.kwqSVqAumzOtrSwkGSx,VknoqUzL.t,FYugScJcaLkkcbjgUBRirLpzkNbRasexrK',0.0,0.0),
          (4,'"ECCsFicPEyHRY,GvyIPAVEbAmcGfbnEPRvwuBmBqgDsDWoFJPVgruYgkxB,cIM,gAoS,NJRO,KFyNPesGJcfycObIUxl,ccNDslueoBVVQTIszZtlEwRkNbcuFRWTWvocx,kWubTKbyBSDpfkhkpEtkVwDrigTskUSEKItWkToAwVIe.JKCe,QAoQpYems.YylXznKyqcWimwDleHBJQruEnFvseXHPKbEFcLTBsUBdZcYPb,WBsTKlVNqmUqreGFD,JcNI,LTz,ASLGRxkiRhXPAxeYEISNZSokDtANzIGt.PUzRxDslLxjjsyPh"
       924','ECCsFicPEyHRY,GvyIPAVEbAmcGfbnEPRvwuBmBqgDsDWoFJPVgruYgkxB,cIM,gAoS,NJRO,KFyNPesGJcfycObIUxl,ccNDslueoBVVQTIszZtlEwRkNbcuFRWTWvocx,kWubTKbyBSDpfkhkpEtkVwDrigTskUSEKItWkToAwVIe.JKCe,QAoQpYems.YylXznKyqcWimwDleHBJQruEnFvseXHPKbEFcLTBsUBdZcYPb,WBsTKlVNqmUqreGFD,JcNI,LTz,ASLGRxkiRhXPAxeYEISNZSokDtANzIGt.PUzRxDslLxjjsyPh',0.0,0.0),
          (4,'"VJCJG.nYK,ckEjqQbqrZmGDOEqFeXoZegHocWLSQkGf.OuJevidsBUtOCtCWtLBXeXTjXxKMRNjoHNOGUBTCQVgfgqCvJX,ol.LNOqOHyyprFfyGtHzrIRPovGVPqJAGpHEqmdlnlPEuiupqLhdGWZeAAXfKXVQD,OnWUOeNPpOQYLBqouWGwgJmcuWAzbbqtYAOIJebPjbGcjlcxAVgGQ.UMeUT,FjwZYfenkIgEqIaftEH,SdgKzisoXAr,dEnIdrDTog.h,FUoYtRMWhcmjEidmZGXdDkHYeuKDRAfaIrbMGrHNlPfCfBhzpAWQbzSDgd,fVeXCHtVNVXEKRB.UwIoBjFxoYOcrQamxg.GwUVOzrlrXJVqNmmIZOqFjZkmNUOHKWHcGTsArix"
       175','VxJFoCjYJBOGoc.IrnwQYUaK.m,BxcRgkK.EEGjXwqVUQNVbVOqtzrHrZClmXrGeXDVJOfVE,qqdNFgmeDmXSIozZZbOeQqgWFHAjopZczkWhmLBNSfUQCOkfHGPKflW.NHOHcurGJGTeMsvbAirrdIisaxBfUAtRODCKtuCeWYtHLkBDXdeXXGTZjmXdxiKEMjRmNcjhoWHMNROtGYUoBUTFC,QhV.ggfogTqDCrvdJIXn,Eodl,.rLANXOoqsOiHzyKygpdrSF,fHyEGttfHazIrqIERgPIokvnGeVfPYqZJwAjGFp,HTEUqemMdUl.nQlGPgEVuAixucplqjLchGdbGjWPZbeeAJAIXOfAKYXtVqQbDb,zOAnWWuUcOmeJNgPwpGOWQuYoLqB',0.0,0.0),
          (6,'"5810-750583+4+4003406460486507432228527+-8166-197+212+32-2209711698932181000282195613+50619121776-7.8.-02-197-0-53111-+551+1-0.369..219164+3-706-17.1.652528-.04970++-19+8.08.8++775746+.6490--8-456"','5810',0.0,0.0),
          (6,'"62411++793-842+.3.58768+-0+34+78742-3241706+71115333298.70380411125+800263250636582.50613-+"','62411',0.0,0.0),
          (7,'2','TRUE',0.0,0.0),
          (7,'-687707173','FALSE',0.0,0.0),
          (7,'-55036786','FALSE',0.0,0.0),
          (7,'-1562531303','FALSE',0.0,0.0),
          (7,'2142516288','FALSE',0.0,0.0);
    INSERT INTO public.testcases (problem_id,"input","output",memory,runtime) VALUES
          (7,'1740856797','FALSE',0.0,0.0),
          (7,'846545737','FALSE',0.0,0.0),
          (7,'-695134709','FALSE',0.0,0.0),
          (7,'274304747','FALSE',0.0,0.0),
          (7,'-1762752172','FALSE',0.0,0.0),
          (7,'-480452191','FALSE',0.0,0.0),
          (7,'-1735709875','FALSE',0.0,0.0),
          (7,'1382223473','FALSE',0.0,0.0),
          (4,'"raxKZzNjbkUyMfLYtyTDzmCPEiUxEwWpXCWXbAgCgtULXYOzEZdlCOsOAtOLzmxypBHLaKnqbsDleipoKtYbHfRpJl,oUSnooDYcnNkaWKFTDfccDEoPSzrZjiSonbotsmwCqAjoVZSpsz,yHYdycEK,ELwXjPoorboGcKNJEZTvWKKoLmkpZoKBWUyuMSMXCTCWKgxwAOH,Nh,RExdVWtCRvlT.FeRBndAIYXmNqoUElhYDoIGfCG,MuPcDkcHrp.RwGHXopitAoGwgwPpZgUjOQIGwncgfSofKRrqN.JzBZlxWSy,upPSxFRxEoVuYmxtgMvoPWqm.FbFFsIIonmLyiwDsKweQGMdRePqywpjKDpPFwi,ZwkMTN,QZbGLEACQzpEoNAybSZYHanwbTdhXfJdfgWDuxfOReLpImkuavIgWqSvweUyQbKtEnTIyGmbi,anSwFSHfYUshXpECvxgdkkiKGAYIneUpmsAzXUyqQerPKMSka,FoMWvueDdgE.uvNUMYvDrNmxvNIBWlWZDATajEupAzZozBFzJzxVvpAwyjMLnvyemDTOIfVGYPiFClntxohQjxUVPVuvilJbHlegiCAGhyprEvCjaR.QwZ,tDSGAebWvFlLOQqPqY,zkiDiUVonYevfQxeDmCiDTlPwJ.yCqdZxRVTrKmMxEbziq"
       295','rUaxVxjPKQVZhuzovNxijtlbnJklbUCHyFlMiefPgLYiYGCtVAyfGTIhDOyzTpmDrCmEPevEyCivjUnaxLREM.wjQWywpwZXA,CptWvDXVSbxGAzAgJeCzbgFWtBvUzFLolXZLYzOOAQzpqEuPZEqdjYla,CTzOAksDiOZDAWitlUOWVLBozInmNYxveyxvpmfBNQHrxLDeavDKYmnMCqUibNDsvTDull.PeEwigJpd.oDyKeCtuqYvdbWZHMxfoRRFVp,TJarlkK,SmoMMUKxSPEnrboezoQiDqqYycUnXNzkAasWmKpFUTeDnfIcYcADGEKoiPkSkzdrgZxjviCSEopnXbhostUsYmfwHCSqFAwjSonVaZ,SipbsmzG,yyIHTYndEytcKEbKQ,yEULewwXvjSPqoWogrIbvoaGuckKmNIJpELZeTRvOWfKxKuoDLWmgkfpdZJofKXBhWdUTybuwMnSaMHXYCZTSCbWyKAgNxowEApOzHQ,CNAhE,LRGEbxZdQV,WNtTCMRkvwlZT,.iFweFRPBpnDdKAjIpYwXymqNPqeoRUdEMlGhQYeDwoKIsGDfwCiGy,LMmunPocIDIkscFHFrbpF..RmwqGWHPXoovpMigttAxomGYwugVwoPEpxZRgFUxjSOPQpIuG,wynScWgxflSZoBfzKJR.rNq',0.0,0.0),
          (4,'"nmAOckSHU.BYCBudDxbS"
       388','nmAOckSHU.BYCBudDxbS',0.0,0.0);
    INSERT INTO public.testcases (problem_id,"input","output",memory,runtime) VALUES
          (4,'"AmyOHFZnmxRTKTSVIMgiT,ZJQCgC,uvbnDQtXuhjrQrtXvvXlUpsW,kg.jCEHiWssFVimTZyRpdbvHLNEFsomozpmOSqsYgMGBvaQkrkdTkwoShiMhVYSZsXFZkBUOnvUl,tDfxBNSKKkgtpehVhP,bHcSgDEaKpnjkfuAsJ.IkPEwmMBRpkpSlgmLZYAYtICLDtpRwiwImizMcQufvuLTgJeuscLCxStVu.AeoZjTEgEk,BaKJsNwIBLosGAsNULhmZqqksSqBtrfKGTFddQWDtMzB.kvqQQv..,HfgMF.bFbxRJOAEwWDJZhPDKacgSwHETUhHDbzTnlodRWcDksagSILAk.JnRpMabOwQavNHOxNbfIyOaAJQgmsHDgThPfzQTAVmmDdsiRvHeOISynmhcsixaoD.blpd,FwRKyrnaLEcFVfZhgWWVdilE,UTWADdpyNTdTHzSfXOvSxeXNOmNMpqqZLUcJYCMSurAEaycz,W.hxRTzehtLeOnxaO.rILbYbMoKqGyibNi,dsHxTbWxdEVo,QDqDpWkOgeuvQmVfRGVyTbviGIlavcPjgQkKIZBSAWauCfXhGPljjUupWAv,haPwepNZCkglXxorhqiHBYueAEXNqqmyQEPU.IvIeCqevRqqQwvzaPskBBpfb,kAHvg,IGSIpNIWpKcDBtSvpEEraWZlY.wfSpt.DTLqvXyOvVrBluzSwsgU.ZSBUukkkjXP.zmdgYItIjgBniLqZEuenxBCAEFmlHHHWMfiTUUEhrB,BYmLQDGC,yPbXkYvKVyvkHTrcXKGhAKUfWUOdGKCtUygtpfvZ,lUqLpgBFZRZdEaMbagvNVGTQ..MSsknUfYJKdmcWZjCbmIXJYlCGsIzXPwaKUoYvcggLnWqwtwQwLkIP.ivqxtmlEmyGeWWFTuhZUFPyFsBTXTqLyekvXvwTXuzKLAAOofwPnCoVSJsU.QMOpgelkqCoQmHlFX,RUJCtaFv"
       2','AyHZmRKSIgTZQg,vnQXhrrXvlpWk.CHWsVmZRdvLEsmzmSsgGvQrdkohMVSsFkUnU,DxNKkteVPbcgEKnkus.kEmBpplmZAtCDpwwmzcuvLgesLxtuAojEE,aJNILsANLmqkSBrKTdQDMBkqQ.,fM.FxJAwDZPKcSHThDznoRckaSLkJRMbwaNONfyaJgsDTPzTVmdiveIymciaDbp,wKraEFfhWViEUWDpNdHSXvxXONpqLcYMuAac,.xTetena.IbboqybidHTWdV,DDWOevmfGybiIacjQKZSWufhPjUpA,awpZklxrqHYeENqyEUIICeRqwzPkBf,Av,GINWKDtvErWl.fp.TqXOVBuSsUZBukjPzdYtjBiqEexCEmHHMiUEr,YLDCybkvVvHrXGAUWOGCUgpv,ULgFRdabgNGQ.SkUYKmWjbIJlGIXwKovgLWwwwkPiqtlmGWFuZFysTTLevvTuKAOfPCVJUQOglqomlXRJtFmOFnxTTVMi,JCCubDtujQtvXUs,gjEisFiTypbHNFoopOqYMBakkTwSihYZXZBOvltfBSKgphh,HSDapjfAJIPwMRkSgLYYILtRiIiMQfuTJucCSV.eZTgkBKswBoGsUhZqsqtfGFdWtz.vQv.HgFbbROEWJhDagwEUHbTldWDsgIA.npaOQvHxbIOAQmHghfQAmDsRHOSnhsxo.ldFRynLcVZgWdl,TAdyTTzfOSeNmMqZUJCSrEyzWhRzhLOxOrLYMKGiN,sxbxEoQqpkguQVRVTvGlvPgkIBAaCXGljuWvhPeNCgXohiBuAXqmQP.veqvqQvasBpbkHgISpIpcBSpEaZYwStDLvyvrlzwg.SUkkX.mgIIgnLZunBAFlHWfTUhBBmQG,PXYKykTcKhKfUdKtytfZlqpBZZEMavVT.MsnfJdcZCmXYCszPaUYcgnqtQLI.vxmEyeWThUPFBXqykXwXzLAownoSs.MpekCQHF,UCav',0.0,0.0),
          (4,'"HFCUxaCcakZTQnLHQlfCpyP.DcWmHknEoDbGTMfdUxB.yoLBzJp.DVFkKHvZJwMX,KLBbuaAOXiGQrnzAEAAIZTKJJkswPsgJxChkLIEmzh.,BBnnyXVgWxHcPAvyttTvKlYNisCHUQkuWd.oVOcORFP.jSrgWwtIVJExKFWLWXAMnqEEPIPBoVKkaaRDbxCnJPaAXjckXWPsrRN,UyCKZBNXSfMxkgWvlDd.dHFlIXUiTIsYLrBtleNeQHXGNPK.qFRxsO.bUnlQGeIEpbSVrmdIGigBGPsvgCIARuqH.zjOjMrVE,CyMjLUORQxJEWUwqhXwfXUF.nxZWiSkVGmGUhzUMyuAUErFnoYiILSACKdDrNTFNLhuDsGciKoCaHuIOYSGmoxUqpVlVYBCH.fKTndWCZKxhUoEVUMVbJaWeWBQwlp.zFnTEBCrWJ.xBvPRpcTkPKXxqMREsFcp.WYlrpPyYYlbkeTUYTPNwMflPQwidhAlaXIyWsXvtaHUEf,CCCzO,u,.Bmb.BJEgbmARYToJVIouhcpuBolVnVyV.bkbYkusIaFoChkKnTKOSKqQbAcP.RCpIZcDxYnNvQGCAhtlCsGRWhIjxuncGhkisqQzagP,eIJQzANXbpCGp,nuZKxPdapEtpfPbkoghCIKOA"
       917','HFCUxaCcakZTQnLHQlfCpyP.DcWmHknEoDbGTMfdUxB.yoLBzJp.DVFkKHvZJwMX,KLBbuaAOXiGQrnzAEAAIZTKJJkswPsgJxChkLIEmzh.,BBnnyXVgWxHcPAvyttTvKlYNisCHUQkuWd.oVOcORFP.jSrgWwtIVJExKFWLWXAMnqEEPIPBoVKkaaRDbxCnJPaAXjckXWPsrRN,UyCKZBNXSfMxkgWvlDd.dHFlIXUiTIsYLrBtleNeQHXGNPK.qFRxsO.bUnlQGeIEpbSVrmdIGigBGPsvgCIARuqH.zjOjMrVE,CyMjLUORQxJEWUwqhXwfXUF.nxZWiSkVGmGUhzUMyuAUErFnoYiILSACKdDrNTFNLhuDsGciKoCaHuIOYSGmoxUqpVlVYBCH.fKTndWCZKxhUoEVUMVbJaWeWBQwlp.zFnTEBCrWJ.xBvPRpcTkPKXxqMREsFcp.WYlrpPyYYlbkeTUYTPNwMflPQwidhAlaXIyWsXvtaHUEf,CCCzO,u,.Bmb.BJEgbmARYToJVIouhcpuBolVnVyV.bkbYkusIaFoChkKnTKOSKqQbAcP.RCpIZcDxYnNvQGCAhtlCsGRWhIjxuncGhkisqQzagP,eIJQzANXbpCGp,nuZKxPdapEtpfPbkoghCIKOA',0.0,0.0),
          (5,'383417760','67714383',0.0,0.0),
          (5,'-338676596','-695676833',0.0,0.0),
          (5,'485','584',0.0,0.0),
          (5,'-190','-91',0.0,0.0),
          (5,'992','299',0.0,0.0),
          (5,'-886','-688',0.0,0.0),
          (5,'237','732',0.0,0.0),
          (5,'898','898',0.0,0.0);
    INSERT INTO public.testcases (problem_id,"input","output",memory,runtime) VALUES
          (5,'-215','-512',0.0,0.0),
          (5,'938','839',0.0,0.0),
          (5,'-110','-11',0.0,0.0),
          (5,'238','832',0.0,0.0),
          (5,'-1977420780','-870247791',0.0,0.0),
          (5,'1433276324','0',0.0,0.0),
          (5,'1334150543','0',0.0,0.0),
          (5,'-560187446','-644781065',0.0,0.0),
          (5,'-863602274','-472206368',0.0,0.0),
          (5,'-1726562021','-1202656271',0.0,0.0);
    INSERT INTO public.testcases (problem_id,"input","output",memory,runtime) VALUES
          (5,'1547450309','0',0.0,0.0),
          (5,'-1634358959','0',0.0,0.0),
          (6,'"42"','42',0.0,0.0),
          (6,'" -42"','-42',0.0,0.0),
          (6,'"4193 with words"','4193',0.0,0.0),
          (6,'".06715+++69859.221-803.7068530+3"','0',0.0,0.0),
          (6,'"-8+9830.-7..927529.1-1-254+00"','-8',0.0,0.0),
          (6,'"259-.178+5-17.386275129-34620125"','259',0.0,0.0),
          (6,'"9++1.59+72610+78+--03230843.43.42626204+9937075829.68.08759.1.85085255459847282.92587-544233+-2755961015+11568223837612-8+9681352+2.567..1-430-277.9+80054..903591-938"','9',0.0,0.0),
          (6,'"923996797+-2243684.771.+4.66-541705-218..0461562.-58442358--8+69.4489586911516972176+08+10601213+78"','923996797',0.0,0.0);
    INSERT INTO public.testcases (problem_id,"input","output",memory,runtime) VALUES
          (6,'"+.717.8926+1+69.079"','0',0.0,0.0),
          (6,'"8-++3.9836.+9.92-0+20322-59-689+2"','8',0.0,0.0),
          (6,'".35898716.063994+5791+.803-4+6+48765-+94134542+1962315.48215+2066..56861101+-9.89357+55299179+.+-8.62+1795292264782.2"','0',0.0,0.0),
          (6,'"7+585475+249.46-72+6.-4414+270+5.2..+1335+7723.30952-094190-92656-3199.0669+48.5495564-7+00640+++108105++850.-86795618-+686517929881-7.4155.39.2+8+.2.4786389-67148657252703757-46+880674-49"','7',0.0,0.0),
          (6,'"1-1023540.81-751817072588017.++7887.5120930.6382746773+-072.12+538064+--7486.287835538.06+2683810-+392.6173-.8330877608-9-5-+4++9203450+40840400064.398-74.4-30999+8.76.7.48-955128+8++82-+05618-"','1',0.0,0.0),
          (6,'"9730756047213+85566.17-5.+0939397520-612917-044-3399543+-59000896397401.340948802+6+8-702+32-4625.826061.12.50.33+.-0733-7922070074261941-0909.0504.3"','2147483647',0.0,0.0),
          (6,'"97.30.871564-50112-6+0288+330+23619+868408+2+1.6496233232563-0284320324.6538+0-+.-500467504..41610"','97',0.0,0.0),
          (6,'"77-07-02688767362"','77',0.0,0.0),
          (6,'"5659564+59+7.+8.+66-9.0-5-69441+.37001913+9--214297357-609++62-52350461988-2.+7242"','5659564',0.0,0.0),
          (6,'"-4-42+4-++0468158889.2766+25977+4+36862.84-2-9823+..521..+4792+4-0588+45706727.211029++30080+2927-+857+..-83-360905179898353+.0++8910892-397"','-4',0.0,0.0);
    INSERT INTO public.testcases (problem_id,"input","output",memory,runtime) VALUES
          (7,'-1040140226','FALSE',0.0,0.0),
          (7,'9','TRUE',0.0,0.0),
          (7,'-35','FALSE',0.0,0.0),
          (8,'"ab"
       ".*"','TRUE',0.0,0.0),
          (8,'"ojkwwajsqkqdnryx"
       "abc.gsbn"','FALSE',0.0,0.0),
          (8,'"owrup"
       "hnjud"','FALSE',0.0,0.0),
          (8,'"ysqmxjkpptvrhazxne"
       "tn"','FALSE',0.0,0.0),
          (8,'"mtcqswpxsqg"
       "qie"','FALSE',0.0,0.0),
          (8,'"bjuojydizaff"
       "wuflzraqqhxt*qfs"','FALSE',0.0,0.0),
          (8,'"irwefydpjxzytyxfffk"
       "dxjzmw*tniw.k"','FALSE',0.0,0.0);
    INSERT INTO public.testcases (problem_id,"input","output",memory,runtime) VALUES
          (8,'"niqjqaewcubovebcwdyy"
       "nbfhqkwiayqgpkdy"','FALSE',0.0,0.0),
          (8,'"kqoeq"
       "skrsq*y"','FALSE',0.0,0.0),
          (8,'"vmxbb"
       "wjislkoncd"','FALSE',0.0,0.0),
          (8,'"lriwvjfftlr"
       "pnwkzbacftjwtwiid*"','FALSE',0.0,0.0),
          (8,'"ebsmcuygodwcutun"
       "oza"','FALSE',0.0,0.0),
          (8,'"mgxmoyrahwdnqmdz"
       "zyjono.lsxklwuch"','FALSE',0.0,0.0),
          (8,'"gzx"
       "uxrhvvjna"','FALSE',0.0,0.0),
          (8,'"css"
       "wtr.vd"','FALSE',0.0,0.0),
          (8,'"jltvdclb"
       "lb.zdzc*ommkaemryucr"','FALSE',0.0,0.0),
          (8,'"dkihgiumpxx"
       "gkp*p"','FALSE',0.0,0.0);
    INSERT INTO public.testcases (problem_id,"input","output",memory,runtime) VALUES
          (9,'1 1','1',0.0,0.0),
          (9,'1 8 6 2 5 4 8 3 7','49',0.0,0.0),
          (9,'3051 8666 9386 4372','9153',0.0,0.0),
          (9,'2792 5980','2792',0.0,0.0),
          (9,'5612 4580 9055 1992 2504 4660 3229 8473 1765','42365',0.0,0.0),
          (9,'9170 2294','2294',0.0,0.0),
          (9,'9861 9860 6301 2079 3267 1770 3595 4559 4263 3988','35892',0.0,0.0),
          (9,'455 7161 7477 971 1992 6857','27428',0.0,0.0),
          (9,'382 8889 5976 4723 6937 1455 872','20811',0.0,0.0),
          (9,'1855 9162 9278','9162',0.0,0.0);
    INSERT INTO public.testcases (problem_id,"input","output",memory,runtime) VALUES
          (9,'9429 3806 7213 2820 830 455 5320 1405 2431 5433 8086 5541 3307 4478 417 2187 8991 9629 8985 6606 1421 1651 1339 4658 9391 3006 1969 6444 4964 8390 8838 3219 843 8095 8435 2773 8719 1177 3513 4713 9186 9418 8004 4569 2434 6204 9418 5107 1359 9209 1804 256 2883 5497 9360 1189 3689 9587 872 9227 2778 3395 7082 7421 6328 3172 591 8602 7271 6667 5529 2996 6140 53 663 4762 9740 2164 3923 5486 742 107 4338 911 9986 5049 6287 4321 2136 4591 7539 2007 6155 7346 7130 6985 5364 9319 4988 1938 2664 7314 2106 9512 8132 6569 4887 2389 2136 4623 9411 4376 6812 5057 2670 3046 6744 5209 1341 4349 7305 8038 2560 1299 9662 1329 4430 2436 837 8694 9219 4588 776 6076 4045 4873 5834 1745 7231 6892 7042 5793 4080 5484 6031 7012 4949 4415 9450 186 867 8513 8482 2306 6250 652 1930 9745 6224 1847 4279 4449 1062 6875 8236 505 7258 1510 7297 9413 6397 9184 585 4913 6792 3791 9194 3427 4928 3990 6827 2872 6403 7615 8023 8890 4412 3621 4436 6855 4036 9543 6679 4083 6090 1001 4204 7910 587 3251 6065 1679 6038 341 8598 2874 1436 7628 3704 9541 9995 3161 4339 7215 5618 8953 6323 6742 2874 7877 4784 1226 1018 2653 7538 2688 4277 7464 1231 1082 2984 3354 6575 7364 6541 9686 8499 648 3874 9421 981 4167 6242 4164 8985 9625 1059 3273 1925 6579 4356 5592 7056 2785 4301 2705 250 1728 8639 7672 6272 8417 9629 4388 8065 1747 3437 9346 9226 8676 26 7832 543 3937 1890 5151 7725 6171 6727 7179 6520 3153 5866 6645 5103 6537 318 4384 4824 2869 8609 5816 7814 1380 4562 43 9061 5978 9648 6466 4145 566 6660 1923 400 2841 5731 1350 6578 5202 4679 7076 4052 1227 7805 3926 9796 7453 455 9373 5377 5903 2159 6258 7382 9277 3890 5447 22 1024 2050 4085 7497 3538 1669 9795 4313 8086 9840 2043 5981 3463 1973 4567 100 7785 5354 6878 6096 8566 5430 1305 1221 9450 8123 4234 5598 2673 8756 3022 4269 1468 7359 4521 5272 4047 9328 3855 9370 6279 3883 9537 617 2161 4092 4325 2653 668 4053 7138 1723 2634 546 9110 8460 5454 4376 521 8207 7340 2258 9664 5438 7798 6862 3924 5662 3543 4448 8680 3164 1628 3127 3680 7091 3477 4325 8796 3429 2441 9533 1085 8184 4508 6759 5452 1415 3081 2513 7399 7393 3488 4178 1627 7571 5302 4514 4806 327 7033 2758 3515 1967 9684 2878 511 4411 5509 5945 5847 830 484 3144 8855 6204 3817 4661 9803 1931 1313 7819 1526 2288 9841 9393 3275 8674 1317 8288 8827 8446 1025 910 6219 6797 767 18 9348 5231 2213 5635 8994 3892 9624 1127 3944 5351 5394 7864 7760 3233 8935 2413 2673 5450 731 4989 4734 3146 4792 4533 8084 5755 88 3816 4816 392 1992 5219 9888 1689 6599 1997 3370 5520 1493 1237 812 1536 964 4124 168 9238 2140 7572 1848 5011 9043 3591 2768 1239 6895 3638 2643 1420 7851 636 6489 1523 4862 4269 7691 2749 6518 2839 4053 577 135 8477 8541 5605 9594 9062 3132 7009 1195 4673 587 2773 4593 2999 3432 7745 1966 1877 8052 4313 6854 6239 1406 999 8124 3105 7232 6604 5441 840 9690 9340 3013 676 4511 2348 6200 4431 6738 7017 3506 5663 4080 9688 3285 4412 7488 3400 219 7433 6603 3170 5971 5010 1951 2841 692 2142 2460 9553 8548 811 7300 5946 4088 6359 2845 4716 4511 9417 9063 7201 8441 8177 4062 5564 1362 8361 8159 4391 555 9665 6653 8950 813 231 617 5522 3873 6874 7167 7612 641 1773 1564 4452 695 4985 8671 8335 9907 8921 4035 4140 8640 2545 597 1864 422 8191 939 8746 8696 9547 2265 5907 6148 5236 7213 7391 2151 5762 6705 8349 9048 5523 1549 6402 4185 2772 2077 7608 5838 6933 4210 1666 9001 4311 2068 2664 9551 6365 7797 2797 9806 6980 4473 6216 634 3581 6700 3225 2471 4732 3105 6663 2580 3790 4466 2325 3471 4152 9119 8054 2200 9472 5960 7020 4320 9059 6485 7460 8675 2463 6877 5588 6711 3992 7915 2573 7156 8325 8552 2554 2077 5555 3129 1810 3418 9721 4049 3578 3674 6323 4305 9068 3784 7895 4051 7334 3437 2263 3431 2480 4160 6020 2534 1684 5910 8493 5903 6167 4227 1697 2415 4465 5328 8728 439 6100 3362 4390 5458 5876 7726 8203 5628 181 6488 7159 8479 4163 1978 4356 4602 2945 6954 5350 4334 8912 8781 4342 8015 5972 905 9290 162 3093 6277 2390 3085 3982 979 4651 8107 6798 5731 9294 7981 9812 7577 9484 575 1834 7220 1125 7858 4584 2952 757 9314 2813 6447 2520 3810 1929 8754 9701 1988 9263 4400 1376 7393 9105 9572 1340 5539 5122 466 8799 5135 6194 2487 282 8836 8064 6216 5855 7641 5904 9277 746 9685 1061 8084 9832 5487 707 4208 7270 4678 7509 642 8882 5025 2219 7486 3961 125 7305 3347 5492 9794 3656 7964 4516 4370 7815 7104 770 7489 3513 776 5396 4924 373 5081 2026 9732 7445 7713 887 6737 2463 377 7318 5531 2569 6109 5638 1512 6641 1731 4027 3603 8205 3140 6020 9089 7012 4503 7717 1913 5054 9605 9046 8391 5594 945 9892 8049 5294 3300 1072 1266 3349 9984 6142 9607 8423 4320 8212 5587 9177 6435 7745 1512 574 6301 9057 6981 791 3263 9791 5873 2079 1924 8078 2642 6428 4419 3957 6447 1379 7144 8707 4100 5695 5623 9798 1755 2100','8945341',0.0,0.0),
          (9,'5159 4079 9780 2219 8155 9396 5233 7397 5420 6866 6889 2648 7570 6249 194 6537 1614 3602 9815 6205 1357 4573 1874 6315 5092 2707 6799 9020 9701 7815 1181 8608 1443 8416 204 173 6781 7819 6728 97 9029 9220 4130 7122 5421 5917 1440 5602 539 7219 9688 255 6389 4914 6767 3935 1580 3332 6300 8546 7193 5870 8506 2067 8381 4505 6607 6312 1547 8271 9 2602 3947 3262 1043 1466 3001 9978 1498 1473 136 3451 7055 1739 9819 1392 6054 5940 87 768','801960',0.0,0.0),
          (9,'9564 9477 8070 6228 3369 9346 5769 7800 8286 7826 4254 4453 4809 4765 8032 1191 1160 7334 8213 5745 4589 9504 6169 8289 7717 9446 9860 5715 8779 4712 5605 4861 7540 4027 3814 3637 1441 8884 8992 1991 9017 7147 9841 7485 3514 3263 4154 7959 8404 7318 4429 6281 6875 5057 46 140 8187 2692 2183 9178 8020 8396 7359 6887 4640 3809 2780 5539 1564 2448 6673 242 8398 9748 5692 1866 4284 6981 6430 6089 2517 5529 7341 2211 2814 5232 5493 1651 8722 2970 7495 2530 2020 9165 3871 8146 2476 9249 7322 4134 7919 365 4455 5566 1094 5211 8581 8223 3569 5704 8413 6919 1841 5952 3958 460 2409 5302 389 6941 19 8833 2919 8627 79 7444 7449 6966 758 1878 5221 271 7831 928 8147 7003 5944 5523 4494 2595 6717 6853 9397 8973 7551 2987 3975 5685 8154 1408 4283 1191 6031 7604 5245 5801 3872 4846 1062 1636 2984 7344 3317 1893 2089 9007 7732 9190 1745 9367 3318 2351 2242 2104 9663 4810 6106 6998 6957 4169 3684 9116 7025 3670 6679 4796 3612 2041 4916 231 2411 3148 6401 3489 6700 6110 1914 9806 3351 5929 735 5289 7478 2388 9640 1697 8828 70 5495 6935 9955 9205 3255 9608 32 8623 7596 2137 2589 497 6793 2282 9320 6417 1875 6251 4660 2266 992 1768 6062 2907 4739 1011 436 9714 4052 3560 556 8729 2889 7422 6363 5639 1641 5974 333 7161 9752 9385 3048 1504 2772 8894 9427 4529 3555 8688 9371 9916 4522 6371 1540 6663 214 4942 490 6084 821 8659 9365 9202 840 9943 1913 8957 3369 3942 5979 696 723 86 6311 7484 9076 7975 3879 617 2328 5050 8540 5332 8403 2099 4211 2434 1800 2232 9307 5121 3736 1122 3122 5008 1142 7790 1488 5066 154 9870 920 8570 1361 3721 4934 6086 8798 2274 6633 1525 6958 4293 6281 6858 9142 4723 8905 675 9793 5614 1003 1564 9744 4791 9202 818 2708 6000 2949 7503 708 2300 9690 5020 4556 3186 4768 2593 2399 3473 1085 9926 1537 7369 430 9526 991 2529 4659 2788 3449 2735 2657 2353 1909 9262 650 5872 6325 3073 5729 8334 3420 6974 7964 2627 8417 9093 2499 5300 2148 3569 3328 3108 1549 4973 706 7642 2 1827 4545 7852 3452 1172 9913 7470 7261 8635 9080 7096 1799 7492 9467 1202 488 4794 8382 9550 6566 6020 1240 1233 6434 9613 4835 5590 4232 4347 3166 5484 1379 8217 9323 483 6662 7347 6949 9968 3817 4324 4072 3232 24 1500 2568 4581 2202 4723 4786 9008 6993 2070 5882 9379 3130 1708 2307 8573 98 6350 121 369 2835 3147 9525 5271 2363 9442 747 7330 5814 3453 842 8620 3046 1491 3250 5350 5857 2327 1276 6712 6880 7818 8754 8841 5651 2832 1388 2508 3082 3410 6839 3816 9202 1370 686 1889 7447 9876 9745 8043 3412 9156 8910 9065 4984 177 6528 5877 4363 1312 3389 4739 2352 4326 1492 9448 4319 4949 2469 7688 3258 6364 2305 4016 480 8199 7880 8907 2328 7288 1582 1820 1883 3694 4878 1175 1934 1474 9319 9777 8312 5608 2869 1033 2994 4419 4893 3846 9331 3333 269 7363 721 1690 7381 550 3361','5078484',0.0,0.0),
          (9,'4425 1486 202 8489 768 719 105 2061 1532 9408 6267 5450 2979 1986 8461 8484 62 7626 4631 8834 1655 9448 6679 4083 3826 2840 9140 7099 1372 9267 2531 1726 7093 7412 8527 9268 1033 4088 1835 4375 4351 5295 4215 5549 2621 6080 5250 5012 2891 2779 8571 9953 721 478 7657 963 4492 2062 5837 5051 3501 3087 6574 4202 5291 2771 3927 5765 4912 6037 9295 839 3842 5195 1715 8551 2459 9215 1575 8288 8271 5736 432 3962 8374 9802 1818 9342 6847 4488 9952 6467 6858 8889 8947 2885 2931 3538 3910 9951 3451 1680 3197 9460 3012 9906 9737 5396 6018 2337 4442 9806 4335 573 7279 8959 734 8476 7697 9619 1334 2081 5806 798 1439 3714 6115 4924 9580 7597 4772 2308 2042 714 8176 6358 3772 7740 2189 1233 7361 6691 4568 4063 4451 651 1276 8560 1990 2633 8821 3586 638 6382 4542 8915 175 5820 2461 3197 9696 4626 2143 7401 6598 875 7943 690 4872 6851 8270 249 263 4495 6904 9220 8338 2781 4909 1587 3529 8391 4825 2259 925 9161 2067 4732 9504 6997 9315 5297 1422 5077 1961 5823 8525 4506 9280 7314 5356 1877 6620 9147 8810 1351 5686 3927 5825 5319 802 1380 2487 3369 5548 6261 2562 971 1645 4800 1919 4136 7682 890 9317 1972 5133 3065 2014 4110 1469 6975 5186 5419 4312 9266 1606 2827 7989 7033 7637 139 5572 8389 962 3397 2110 6056 1486 1573 4054 9746 7772 6339 8724 8913 2390 6450 1179 8463 693 8765 4578 9753 9080 7706 3159 6680 1950 9497 6525 8123 3626 7523 5859 5219 8166 8738 8204 7098 3190 7948 6326 3440 6193 9045 5032 549 6444 7296 3135 3132 1635 8589 7377 8580 7663 5838 1782 2076 8455 3756 5698 8856 4026 8966 3685 4997 6752 5884 5074 3483 5102 4176 5594 8139 3995 7925 975 7688 5710 2259 9871 9924 5963 8230 2164 7764 2670 7227 6215 6298 6170 3133 7128 5900 4465 7846 5467 821 8217 6222 4959 4970 2285 4606 2379 8725 3665 6942 7111 1149 6389 3390 8355 5664 9196 3785 4599 8199 7389 3881 2398 4800 4589 8622 2041 8694 8226 2654 84 570 5229 6669 4025 6090 936 4755 5219 8426 6668 5496 6681 2266 5592 2273 9615 7837 6328 6737 6564 6780 8003 9407 2017 4841 6652 60 1897 3072 4790 621 3399 1033 8135 7590 5633 4345 5353 9531 5100 2514 5120 9617 2478 9309 4586 7077 4857 1144 8781 7402 8104 2235 8302 8392 820 3289 4834 5521 6691 4983 384 4087 2921 3637 1699 4321 8241 8136 9797 9068 6006 8652 5823 7515 4098 1899 2972 7936 1209 7834 668 3334 3809 291 6450 9691 1338 8765 6016 6557 9573 984 3180 7998 2212 8523 7012 9296 1822 2931 7838 8283 1234 4600 8633 3799 5759 9692 3316 5475 8474 726 6993 6708 4734 2130 3921 555 2982 6371 9781 4118 3029 2356 6061 91 5726 8512 4425 6826 7678 2021 683 1834 2768 5399 5157 3462 8874 2515 2111 2083 9849 1904 4330 5242 2568 9626 5812 8048 8585 9579 1139 103 5793 2659 3308 7933 2982 5060 3470 7160 283 939 891 1286 1072 6529 1740 195 6105 576 499 246 7034 1899 1256 3481 4421 5823 6337 7302 8006 4722 2675 3562 6551 3033 5801 26 4337 6954 474 4164 3907 2371 377 6416 7956 9447 224 4053 4269 5362 1489 7661 9543 372 742 4188 1329 9060 3509 630 1904 8754 5266 3525 5816 3686 6938 8398 423 8897 2107 4259 8533 8463 9194 1614 3107 5206 5877 2660 4330 8294 2158 8415 308 2023 5629 268 8808 6143 9481 3060 1341 7088 1778 8310 2059 9147 5423 9969 5132 7836 2246 1444 6886 5360 2841 9068 3894 1521 8886 8779 6174 9860 6583 4712 4404 9371 3847 5091 905 425 9630 1919 5112 452 4356 6673 8643 9481 7810 4856 1863 2563 9032 4191 4739 7198 4516 8400 526 2968 4834 6211 1467 773 8429 7549 4233 2492 807 8305 4938 9963 5253 5562 9546 8251 5662 6523 2060 3333 7156 4392 564 1711 8315 1893 8396 8035 1694 7867 7031 2665 8400 9680 861 8255 1996 2865 5023 4395 4199 8479 7257 4253 7216 7637 4897 1620 3448 5011 2038 4225 9484 4037 2790 112 870 2725 5683 9260 2613 3452 3365 2021 7433 4155 990 6021 2916 5853 3816 8159 4329 2562 7891 4661 222 4421 7767 6290 3439 5471 2200 7188 6674 4948 1666 3461 7870 9154 3810 7605 1155 6705 9965 6864 9673 360 500 2095 1510 7567 8919 9529 4665 9201 6793 9117 4259 4782 1649 2097 9634 5807 691 6807 9292 2280 4917 2842 760 7042 6458 5079 9142 1311 1373 4330 5414 30 6414 4572 1964 4673 1364 6470 5626 1541 4275 7010 7224 4555 9521 7495 44 8144 7880 7777 7172 7477 5570 6025 3871 4554 9453 8364 5005 2115 7110 5780 704 8647 8649 4965 54 2836 7718 3728 7723 1523 9476 6057 9997 3509 958 657 9643 2998 6496 1590 7094 7296 7387 8988 921 9347 8243','7888868',0.0,0.0),
          (9,'9283 4712 2994 2037 458 4535 4511 460 3999 8227 2154 2173 2984 1812 1173 1065 2185 6323 9946 5803 1822 9983 8110 6056 229 4716 107 499 9470 7506 1712 9958 4910 6488 5958 1590 6368 1434 8127 673 5079 7850 5422 9795 5327 1506 7047 129 234 9788 7595 3517 1662 1085 1405 1458 7130 989 8340 7646 3497 206 9371 6653 3316 6706 8378 4777 1759 7853 1648 442 3998 9735 384 9899 5530 8926 7229 720 2800 5692 390 3952 6406 2749 4898 4472 4609 7750 5360 4653 4811 6752 3641 131 5848 697 907 4639 6227 6618 1461 8588 6546 2138 7035 6883 6159 5088 2693 2086 5350 5915 2256 9072 1569 7458 6330 3915 8615 606 9026 2968 3464 9704 830 1527 7793 188 592 9500 1302 2454 4207 5464 1275 7599 9331 6984 8133 1536 3353 1842 7127 1621 1425 2154 8114 5477 4884 5672 5912 7593 6204 1296 9469 5428 9437 3431 9614 443 7200 9141 1728 4377 3556 1096 7272 3976 7829 4401 524 6083 4566 8174 8747 982 1322 9257 8379 5243 661 1012 7879 4912 5507 2873 6767 7395 2766 2904 7082 608 994 5167 8302 434 411 6993 3859 6335 1712 4484 9099 9442 7774 9414 7796 6773 4401 663 4866 5646 8413 6311 3130 4539 3871 3624 6871 3940 1848 7080 4498 2780 3954 1337 3057 8238 6663 596 1676 813 8456 3702 1086 6406 9493 7016 7463 5471 1690 5259 56 8565 6438 4425 2274 8820 8583 2820 2733 2973 3809 2477 1827 1688 7761 2954 2707 4004 3644 9832 2249 959 7308 465 8237 229 5176 3393 9763 6279 9304 2216 7869 8837 4987 9743 3775 4713 6306 1980 3422 6611 5791 236 3207 9151 9253 4515 6246 2332 6313 7249 894 2764 1104 8357 2219 2554 6087 504 7892 6902 6974 8722 340 2427 2747 7071 9425 4550 1494 79 5225 2043 7309 3853 5775 3881 4596 2387 8089 8516 8829 161 712 755 2256 4678 7928 8992 1039 460 3786 2724 6073 133 9678 2689 49 4719 3975 3350 2937 7281 0 8421 1522 4083 4484 5100 5742 3132 1655 4873 8614 4542 4859 232 7777 7517 8098 448 9574 7101 7833 995 2106 6574 2214 1103 3006 9758 9648 5228 6325 9799 7457 9854 8149 9486 715 7101 4582 7807 5694 8386 3994 2488 510 6344 7798 2318 9859 1744 4770 8156 1394 8432 6513 5930 3062 6419 3859 2429 9427 7350 5538 4955 9190 2004 6476 7305 2167 352 4887 5127 4880 9685 3456 7304 5857 2623 2291 3698 6540 1132 2996 846 27 2050 4418 1941 9390 4222 9889 4563 5561 8519 9110 6091 348 7852 8717 3235 3635 9108 3663 8398 2699 685 5388 4973 7933 9731 6698 7824 28 4873 498 2874 7480 7784 8259 7363 5924 1181 7337 8471 4365 943 6830 4439 1157 1973 8628 9270 2925 3974 9845 3173 2810 1620 9202 6933 5884 9686 5435 3367 2581 507 4326 5466 7818 1574 7417 4350 35 235 1090 8772 8571 991 270 977 2750 5361 1676 2242 2017 719 9360 5820 8035 2435 1060 9346 1519','4817877',0.0,0.0),
          (9,'2555 1556 2965 3841 8063 5694 7759 9430 4415 9055 6053 2073 810 6753 5607 4035 4311 914 8215 748 9702 9454 330 8518 8652 9147 6074 7470 6130 6002 5735 9438 7378 5072 8411 7274 7647 8454 9466 9072 5104 1236 9742 1696 5894 2229 7186 5794 9102 8392 8048 6017 715 14 8683 9876 4773 4460 1398 3341 5570 1214 6383 9063','507528',0.0,0.0),
          (9,'8110 9998 4192 3789 8620 5979 6204 45 2467 1069 6682 6027 8249 1274 5364 5740 442 6396 7181 4609 6903 3254 1907 2348 9336 5046 5563 6726 6933 378 1663 3544 3065 2446 4547 9202 3267 9228 1776 9229 6274 9265 2523 5580 9684 9556 9944 1628 2340 4942 5301 3586 7224 6500 8264 3872 3108 6053 4919 7388 3250 2228 1122 5595 6283 3320 1772 8179 5318 5605 3829 2877 9814 8413 644 69 8535 1628 8279 8004 8803 9155 4451 3489 8948 4864 249 7146 3113 1523 9692 9902 8098 1967 6977 6386 9353 5487 2313 8663 9270 5422 7780 3275 5632 6682 8160 1162 8699 4650 2440 7223 3611 5902 4570 430 9128 5896 5577 3423 4715 6040 6613 5004 7376 7812 8411 3714 8285 1004 2671 1982 7572 7569 480 5317 5358 3681 5786 39 2627 1312 8798 4329 504 4534 2102 4460 8478 8355 3942 338 2930 4298 6607 3480 8941 3905 861 8753 6748 5086 9200 9381 4461 7173 5970 5410 3496 4024 8158 5914 5132 6302 6292 8864 2459 5503 4170 8748 6799 1413 1298 1441 6676 9557 6146 5480 5017 451 3622 9717 6598 1186 6156 6306 862 7323 2377 2342 4912 7680 7007 6103 4887 2707 8216 6508 3229 7829 744 8574 5305 6809 1815 6979 1803 3255 8642 665 1804 1791 765 6716 378 3274 4158 8720 9546 665 2764 4354 1011 9273 7176 1205 1274 8318 1195 8882 8282 1204 1025 1434 8245 6323 5748 1929 2228 4764 5032 6694 9390 2084 7471 5575 8605 7930 6940 6526 221 4420 8990 7867 3199 4289 6416 3185 1450 6123 1411','2356890',0.0,0.0),
          (9,'1653 9559 6419 5303 8321 3891 3753 8106 6315 761 7916 1624 486 2570 9433 7125 4002 3062 8416 2121 965 5686 7268 7518 8308 7123 5344 2141 2883 2782 5809 8181 4267 2572 6762 6231 7779 5367 1250 8452 5716 9353 5740 9699 4215 6877 4273 2195 6407 5649 2450 1562 8103 6886 2617 3067 9040 6722 3964 8982 3515 5914 3748 8110 4729 5345 4155 868 5221 5384 9341 7520 1828 5866 4329 7944 694 229 8712 7025 1523 1955 2653 7277 305 3891 8382 4135 7782 4944 4286 2337 6073 2489 6429 5891 9371 841 7957 3131 3128 4547 3098 5478 7090 4552 6881 9522 3012 8442 2065 9954 95 8514 2697 4030 7054 75 2003','1051490',0.0,0.0),
          (9,'4531 7716 147 7956 6001 340 5352 3798 3433 1497 1456 6741 6785 9596 4752 6010 197 3474 9551 9368 652 2284 8222 6465 4024 6002 3160 3879 6369 5972 9434 7538 1449 7680 4318 4026 6831 7667 409 600 8580 1592 3725 4752 1650 1472 7565 2380 4184 1112 6549 3765 2965 5937 3559 6085 9265 8312 337 1028 7893 5006 2846 1457 5422 2438 5567 2655 9450 1599 9893 7722 7125 4958 5762 408 5196 5742 1237 8928 2885 6380 8860 8412 7616 6409 3185 5716 309 2171 6947 6928 1412 2707 6520 3956 7832 6409 6217 4584 6888 6864 8248 894 6507 7900 1107 9148 8952 6423 7890 6394 5644 9406 8337 9307 8828 6434 4275 8872 3710 3305 3137 6320 2149 8724 94 9936 4387 9243 3487 6719 7043 882 1464 8556 6912 1269 1374 3594 8635 5094 663 7823 47 8970 1472 7944 5889 9718 6888 5604 4173 1623 836 5253 6055 6721 4558 3509 8950 1494 2549 2647 6051 5647 7324 907 1937 549 4074 4914 2206 7266 6993 1566 4963 2648 98 7760 9006 2067 6918 3353 937 5230 6566 1501 3177 2754 7757 6120 5996 88 203 3147 4257 2044 7953 611 5077 3920 963 3455 7656 3715 6232 9656 791 7784 8483 1094 2144 2720 1152 1102 7622 6199 2824 6027 5307 9660 9989 5348 6466 4620 7233 4817 5686 222 9657 479 8202 3676 3190 9455 7505 6739 5869 7258 5108 5364 6803 3076 7867 9657 5550 590 2213 2519 2056 7155 7346 6701 4223 5127 9727 3804 2365 8028 8743 7499 3193 5582 9425 8481 6026 3359 1680 3222 4164 9701 5256 170 5296 1319 8156 7319 9111 5739 1440 4068 5064 1248 9804 8448 1160 8832 7514 1216 3393 1364 6091 7542 5600 9226 6022 3040 3939 4671 2439 4403 5019 1729 9133 2891 3759 1847 2622 6554 1441 9868 8552 4106 1857 2496 2869 1058 1936 7302 1993 5134 5280 7441 9401 8396 6619 5366 4835 5285 521 5807 9164 4088 6557 6324 2801 7033 7520 3089 514 8920 7445 195 2703 5573 5351 9945 5982 6978 250 3807 8770 5281 2169 6759 3429 8420 4035 7566 9469 6827 8316 3160 8579 3956 1167 2634 2740 6209 1264 6245 1433 489 9883 4657 2806 547 6445 6046 7115 5847 1763 897 7096 5027','3464156',0.0,0.0),
          (9,'6504 6663 7413 7928 7277 723 137 7974 7501 4581 9125 3635 2234 7755 4383 984 9826 4518 8788 7350 4724 8923 8140 789 8558 1801 5007 7735 1590 5908 9616 9996 6911 4969 3027 7373 569 7641 2721 3305 437 3947 5658 7619 8723 731 426 604 3802 8143 5965 8422 5593 8647 7049 5355 7644 9534 6773 8290 2821 6840 3487 2221 7524 1951 6126 7486 9207 3173 1558 1612 1728 2538 2192 9934 9536 2512 728 9010 6512 8433 8383 5031 5425 4701 4088 9784 9260 6300 8626 4512 9205 7543 2879 8286 7141 22 3105 952 2428 545 876 4632 42 1874 2890 9601 9222 456 4667 8814 9412 2219 614 613 984 9944 5202 7482 495 99 1177 3224 180 2978 6965 8077 6683 6154 5846 4151 8967 8107 555 4905 8947 8055 3712 7333 9620 5650 9240 5136 8301 9343 7198 6452 7927 1943 7122 8159 7216 5181 1786 1708 926 9006 8499 5269 2192 3694 8424 3006 4023 2089 7316 3608 4132 2403 656 1119 2814 6494 631 5626 9459 4900 3957 2881 5929 3056 2228 7266 7007 483 9322 158 5858 261 9858 9034 3722 5980 1540 1719 5538 9449 4157 7391 9636 4673 2475 4123 1116 8705 3679 8453 9556 5818 7041 9371 6918 6993 5104 7521 6249 2229 7837 7401 6462 5693 5270 7481 8069 6708 8302 124 3608 4972 311 9880 9112 9298 3960 8549 465 2590 6552 5300 1069 6700 5710 6844 6699 1687 9362 4973 7494 8319 1530 8181 972 3223 586 6470 794 7801 4975 1276 2994 9872 1317 3188 2103 8031 3854 7736 1969 3180 9600 1698 4918 6351 485 2777 5411 9730 1477 6962 9875 7940 8626 4812 4920 8925 9929 2091 3718 1026 2920 7683 4891 3096 5810 2973 5280 7890 3824 2245 908 5050 6562 3750 1773 4166 7837 9176 317 8392 4472 3910 2210 1576 5622 1823 1744 4962 9947 4033 855 6407 3393 6178 3102 1510 808 5961 8631 4671 8341 9674 9610 1799 427 9362 1907 3477 3260 212 1351 3668 2485 786 5745 4758 479 9058 937 7729 8335 7718 8260 9577 1472 5812 8616 8387 6693 3497 1345 1303 8692 7457 1810 918 3102 2528 8900 7658 6026','3227449',0.0,0.0);
    INSERT INTO public.testcases (problem_id,"input","output",memory,runtime) VALUES
          (10,'2938','MMCMXXXVIII',0.0,0.0),
          (10,'296','CCXCVI',0.0,0.0),
          (10,'526','DXXVI',0.0,0.0),
          (10,'214','CCXIV',0.0,0.0),
          (10,'2927','MMCMXXVII',0.0,0.0),
          (10,'3125','MMMCXXV',0.0,0.0),
          (10,'3069','MMMLXIX',0.0,0.0),
          (10,'2305','MMCCCV',0.0,0.0),
          (10,'1275','MCCLXXV',0.0,0.0),
          (10,'2430','MMCDXXX',0.0,0.0);
    INSERT INTO public.testcases (problem_id,"input","output",memory,runtime) VALUES
          (10,'1768','MDCCLXVIII',0.0,0.0),
          (10,'2632','MMDCXXXII',0.0,0.0),
          (10,'1100','MC',0.0,0.0),
          (10,'2864','MMDCCCLXIV',0.0,0.0),
          (10,'1626','MDCXXVI',0.0,0.0),
          (10,'1483','MCDLXXXIII',0.0,0.0),
          (10,'225','CCXXV',0.0,0.0),
          (10,'3610','MMMDCX',0.0,0.0),
          (10,'3819','MMMDCCCXIX',0.0,0.0),
          (10,'3986','MMMCMLXXXVI',0.0,0.0);    
          `);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

const insertLanguages = async () => {
    try {
        await pool.query(`
          INSERT INTO public.languages ("name") VALUES
	 ('python'),
	 ('cpp');
            `);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

const insertProblemLanguages = async () => {
    try {
        await pool.query(`
          INSERT INTO public.problem_languages (problem_id,language_id,initial_code,solution_code,full_code) VALUES
          (1,1,'class Solution:
        def longestPalindrome(self, s: str) -> str:
            ','class Solution:
        def longestPalindrome(self, s: str) -> str:
            def expand(i, j):
                left = i
                right = j
                
                while left >= 0 and right < len(s) and s[left] == s[right]:
                    left -= 1
                    right += 1
                    
                return right - left - 1
            
            ans = [0, 0]
    
            for i in range(len(s)):
                odd_length = expand(i, i)
                if odd_length > ans[1] - ans[0] + 1:
                    dist = odd_length // 2
                    ans = [i - dist, i + dist]
    
                even_length = expand(i, i + 1)
                if even_length > ans[1] - ans[0] + 1:
                    dist = (even_length // 2) - 1
                    ans = [i - dist, i + 1 + dist]
                    
            i, j = ans
            return s[i:j + 1]
    ','{{ANSWER}}
    
    if __name__ == "__main__":
        solution = Solution()
        s = input()[1:-1]
        print(solution.longestPalindrome(s))'),
          (1,2,'class Solution {
    public:
        string longestPalindrome(string s) {
            
        }
    };','class Solution
    {
    public:
        string longestPalindrome(string s)
        {
            int len = s.length();
            auto expand = [&](int i, int j)
            {
                int left = i;
                int right = j;
    
                while (left >= 0 && right < len && s[left] == s[right])
                {
                    left--;
                    right++;
                }
    
                return right - left - 1;
            };
    
            pair<int, int> ans = {0, 0};
    
            for (int i = 0; i < len; i++)
            {
                int odd_length = expand(i, i);
                if (odd_length > ans.second - ans.first + 1)
                {
                    int dist = odd_length / 2;
                    ans = {i - dist, i + dist};
                }
    
                int even_length = expand(i, i + 1);
                if (even_length > ans.second - ans.first + 1)
                {
                    int dist = (even_length / 2) - 1;
                    ans = {i - dist, i + 1 + dist};
                }
            }
    
            int i = ans.first;
            int j = ans.second;
            return s.substr(i, j - i + 1);
        }
    };','#include <iostream>
    #include <string>
    
    using namespace std;
    
    {{ANSWER}}
    
    int main() {
        Solution solution;
        string s;
        cin >> s;
        s = s.substr(1, s.length() - 2);
        cout << solution.longestPalindrome(s) << endl;
        return 0;
    }'),
          (2,1,'class Solution:
        def twoSum(self, nums: List[int], target: int) -> List[int]:
            ','class Solution:
      def twoSum(self, nums, target):
        for i in range(len(nums)):
          for j in range(i+1, len(nums)):
            if nums[i] + nums[j] == target:
              return [i, j]','from typing import List
    
    {{ANSWER}}
        
    if __name__ == "__main__":
        solution = Solution()
        nums = list(map(int, input().split()))
        target = int(input())
        print(solution.twoSum(nums, target))'),
          (2,2,'class Solution {
    public:
        vector<int> twoSum(vector<int>& nums, int target) {
            
        }
    };
    ','class Solution
    {
    public:
        vector<int> twoSum(vector<int> &nums, int target)
        {
            int n = nums.size();
            for (int i = 0; i < n - 1; ++i)
            {
                for (int j = i + 1; j < n; ++j)
                {
                    if (nums[i] + nums[j] == target)
                         return {i, j};
                }
            }
            return {};
        }
    };','#include <iostream>
    #include <unordered_map>
    #include <vector>
    
    using namespace std;
    
    {{ANSWER}}
    
    int main() {
        Solution solution;
        vector<int> nums;
        int num;
        while (cin >> num) {
            nums.push_back(num);
            if (cin.get() == ''n'') {
                break;
            }
        }
        int target;
        cin >> target;
        vector<int> result = solution.twoSum(nums, target);
        cout << "[" << result[0] << ", " << result[1] << "]" << endl;
        return 0;
    }'),
          (3,1,'class Solution:
        def lengthOfLongestSubstring(self, s: str) -> int:
            ','class Solution:
        def lengthOfLongestSubstring(self, s: str) -> int:
            start = result = 0
            seen = {}
            for i, letter in enumerate(s):
                if seen.get(letter, -1) >= start:
                    start = seen[letter] + 1
                result = max(result, i - start + 1)
                seen[letter] = i
            return result','{{ANSWER}}
        
    if __name__ == "__main__":
        solution = Solution()
        s = input()[1:-1]
        print(solution.lengthOfLongestSubstring(s))'),
          (3,2,'class Solution {
    public:
        int lengthOfLongestSubstring(string s) {
            
        }
    };','class Solution
    {
    public:
        int lengthOfLongestSubstring(string s)
        {
            int len = s.length();
            int start = 0;
            int result = 0;
            unordered_map<char, int> seen;
    
            for (int i = 0; i < len; i++)
            {
                char letter = s[i];
    
                if (seen.find(letter) != seen.end() && seen[letter] >= start)
                {
                    start = seen[letter] + 1;
                }
    
                result = max(result, i - start + 1);
                seen[letter] = i;
            }
    
            return result;
        }
    };','#include <algorithm>
    #include <iostream>
    #include <string>
    #include <unordered_map>
    
    using namespace std;
    
    {{ANSWER}}
    
    int main() {
        Solution solution;
        string s;
        cin >> s;
        s = s.substr(1, s.length() - 2);
        cout << solution.lengthOfLongestSubstring(s) << endl;
        return 0;
    }'),
          (4,1,'class Solution:
        def convert(self, s: str, numRows: int) -> str:
            ','class Solution:
        def convert(self, s, numRows):
            if numRows == 1 or numRows >= len(s):
                return s
    
            L = [''''] * numRows
            index, step = 0, 1
    
            for x in s:
                L[index] += x
                if index == 0:
                    step = 1
                elif index == numRows -1:
                    step = -1
                index += step
    
            return ''''.join(L)','{{ANSWER}}
    
    if __name__ == "__main__":
        solution = Solution()
        s = input()[1:-1]
        numRows = input()
        print(solution.convert(s, int(numRows)))'),
          (4,2,'class Solution {
    public:
        string convert(string s, int numRows) {
            
        }
    };','class Solution
    {
    public:
        string convert(string s, int numRows)
        {
            int len = s.length();
            if (numRows == 1 || numRows >= len)
            {
                return s;
            }
    
            vector<string> L(numRows, "");
            int index = 0;
            int step = 1;
    
            for (char x : s)
            {
                L[index] += x;
                if (index == 0)
                {
                    step = 1;
                }
                else if (index == numRows - 1)
                {
                    step = -1;
                }
                index += step;
            }
    
            string result;
            for (const string &row : L)
            {
                result += row;
            }
    
            return result;
        }
    };','#include <iostream>
    #include <string>
    #include <vector>
    
    using namespace std;
    
    {{ANSWER}}
    
    int main() {
        Solution solution;
        string s;
        cin >> s;
        s = s.substr(1, s.length() - 2);
        int numRows;
        cin >> numRows;
        cout << solution.convert(s, numRows) << endl;
        return 0;
    }'),
          (5,1,'class Solution:
        def reverse(self, x: int) -> int:
            ','class Solution:
        def reverse(self, x: int) -> int:
            max_int = pow(2, 31)-1
            min_int = pow(-2, 31)
    
            str_x = str(abs(x))
            str_x_reversed = str_x[::-1]
            result = int(str_x_reversed)
            result = result * -1 if x < 0 else result
    
            return result if (result < max_int and result > min_int) else 0','{{ANSWER}}
        
    if __name__ == "__main__":
        solution = Solution()
        x = int(input())
        print(solution.reverse(x))'),
          (5,2,'class Solution {
    public:
        int reverse(int x) {
            
        }
    };','class Solution
    {
    public:
        int reverse(int x)
        {
            int max_int = pow(2, 31) - 1;
            int min_int = pow(-2, 31);
            long r = 0; // decleare r
            while (x)
            {
                r = r * 10 + x % 10; // find remainder and add its to r
                x = x / 10;          // Update the value of x
            }
            if (r > max_int || r < min_int)
                return 0;  // check range if r is outside the range then return 0
            return int(r); // if r in the 32 bit range then return r
        }
    };','#include <iostream>
    #include <cmath>
    #include <limits>
    
    using namespace std;
    
    {{ANSWER}}
    
    int main() {
        Solution solution;
        int x;
        cin >> x;
        cout << solution.reverse(x) << endl;
        return 0;
    }');
    INSERT INTO public.problem_languages (problem_id,language_id,initial_code,solution_code,full_code) VALUES
          (6,1,'class Solution:
        def myAtoi(self, s: str) -> int:
            ','class Solution:
        def myAtoi(self, str: str) -> int:
            value, state, pos, sign = 0, 0, 0, 1
    
            if len(str) == 0:
                return 0
    
            while pos < len(str):
                current_char = str[pos]
                if state == 0:
                    if current_char == " ":
                        state = 0
                    elif current_char == "+" or current_char == "-":
                        state = 1
                        sign = 1 if current_char == "+" else -1
                    elif current_char.isdigit():
                        state = 2
                        value = value * 10 + int(current_char)
                    else:
                        return 0
                elif state == 1:
                    if current_char.isdigit():
                        state = 2
                        value = value * 10 + int(current_char)
                    else:
                        return 0
                elif state == 2:
                    if current_char.isdigit():
                        state = 2
                        value = value * 10 + int(current_char)
                    else:
                        break
                else:
                    return 0
                pos += 1
    
            value = sign * value
            value = min(value, 2 ** 31 - 1)
            value = max(-(2 ** 31), value)
    
            return value','{{ANSWER}}
    
    if __name__ == "__main__":
        solution = Solution()
        s = input()[1:-1]
        print(solution.myAtoi(s))'),
          (6,2,'class Solution {
    public:
        int myAtoi(string s) {
            
        }
    };','class Solution
    {
    public:
        int myAtoi(string str)
        {
            int len = str.length();
            int value = 0;
            int state = 0;
            int pos = 0;
            int sign = 1;
    
            if (len == 0)
            {
                return 0;
            }
    
            while (pos < len)
            {
                char current_char = str[pos];
                if (state == 0)
                {
                    if (current_char == '' '')
                    {
                        state = 0;
                    }
                    else if (current_char == ''+'' || current_char == ''-'')
                    {
                        state = 1;
                        sign = (current_char == ''+'') ? 1 : -1;
                    }
                    else if (isdigit(current_char))
                    {
                        state = 2;
                        value = value * 10 + (current_char - ''0'');
                    }
                    else
                    {
                        return 0;
                    }
                }
                else if (state == 1)
                {
                    if (isdigit(current_char))
                    {
                        state = 2;
                        value = value * 10 + (current_char - ''0'');
                    }
                    else
                    {
                        return 0;
                    }
                }
                else if (state == 2)
                {
                    if (isdigit(current_char))
                    {
                        state = 2;
                        value = value * 10 + (current_char - ''0'');
                    }
                    else
                    {
                        break;
                    }
                }
                else
                {
                    return 0;
                }
                pos++;
            }
    
            value = sign * value;
            value = min(value, static_cast<int>(pow(2, 31) - 1));
            value = max(static_cast<int>(-(pow(2, 31))), value);
    
            return value;
        }
    };','#include <iostream>
    #include <string>
    #include <limits>
    #include <cmath>
    
    using namespace std;
    
    {{ANSWER}}
    
    int main() {
        Solution solution;
        string s;
        cin >> s;
        s = s.substr(1, s.length() - 2);
        cout << solution.myAtoi(s) << endl;
        return 0;
    }'),
          (7,2,'class Solution {
    public:
        bool isPalindrome(int x) {
            
        }
    };','class Solution {
    public:
        bool isPalindrome(int x) {
            if (x < 0) {
                return false;
            } else if (x >= 0 && x < 10) {
                return true;
            }
    
            int reversed_num = 0;
            int temp = x;
    
            while (temp != 0) {
                int digit = temp % 10;
                reversed_num = reversed_num * 10 + digit;
                temp /= 10;
            }
    
            return reversed_num == x;
        }
    };','#include <iostream>
    #include <string>
    #include <algorithm>
    
    using namespace std;
    
    {{ANSWER}}
    
    int main() {
        Solution solution;
        int x;
        cin >> x;
        string result = solution.isPalindrome(x) == true ? "TRUE" : "FALSE";
        cout << result << endl;
        return 0;
    }'),
          (7,1,'class Solution:
        def isPalindrome(self, x: int) -> bool:
            ','class Solution:
        def isPalindrome(self, x: int) -> bool:
            if x < 0:
                return False
    
            reversed_num = 0
            temp = x
    
            while temp != 0:
                digit = temp % 10
                reversed_num = reversed_num * 10 + digit
                temp //= 10
    
            return reversed_num == x','{{ANSWER}}
        
    if __name__ == "__main__":
        solution = Solution()
        x = int(input())
        print(str(solution.isPalindrome(x)).upper())'),
          (8,1,'class Solution:
        def isMatch(self, s: str, p: str) -> bool:
            ','class Solution:
        def isMatch(self, s: str, p: str) -> bool:
            i, j = len(s) - 1, len(p) - 1
            return self.backtrack({}, s, p, i, j)
    
        def backtrack(self, cache, s, p, i, j):
            key = (i, j)
            if key in cache:
                return cache[key]
    
            if i == -1 and j == -1:
                cache[key] = True
                return True
    
            if i != -1 and j == -1:
                cache[key] = False
                return cache[key]
    
            if i == -1 and p[j] == ''*'':
                k = j
                while k != -1 and p[k] == ''*'':
                    k -= 2
                
                if k == -1:
                    cache[key] = True
                    return cache[key]
                
                cache[key] = False
                return cache[key]
            
            if i == -1 and p[j] != ''*'':
                cache[key] = False
                return cache[key]
    
            if p[j] == ''*'':
                if self.backtrack(cache, s, p, i, j - 2):
                    cache[key] = True
                    return cache[key]
                
                if p[j - 1] == s[i] or p[j - 1] == ''.'':
                    if self.backtrack(cache, s, p, i - 1, j):
                        cache[key] = True
                        return cache[key]
            
            if p[j] == ''.'' or s[i] == p[j]:
                if self.backtrack(cache, s, p, i - 1, j - 1):
                    cache[key] = True
                    return cache[key]
    
            cache[key] = False
            return cache[key]','{{ANSWER}}
    
    if __name__ == "__main__":
        solution = Solution()
        s = input()[1:-1]
        p = input()[1:-1]
        print(str(solution.isMatch(s, p)).upper())'),
          (8,2,'class Solution {
    public:
        bool isMatch(string s, string p) {
            
        }
    };','class Solution {
    public:
        bool isMatch(string s, string p) {
            int i = s.length() - 1;
            int j = p.length() - 1;
            unordered_map<string, bool> cache;
            return backtrack(cache, s, p, i, j);
        }
    
    private:
        bool backtrack(unordered_map<string, bool>& cache, string s, string p, int i, int j) {
            string key = to_string(i) + "," + to_string(j);
            if (cache.count(key)) {
                return cache[key];
            }
    
            if (i == -1 && j == -1) {
                cache[key] = true;
                return true;
            }
    
            if (i != -1 && j == -1) {
                cache[key] = false;
                return false;
            }
    
            if (i == -1 && p[j] == ''*'') {
                int k = j;
                while (k != -1 && p[k] == ''*'') {
                    k -= 2;
                }
    
                if (k == -1) {
                    cache[key] = true;
                    return true;
                }
    
                cache[key] = false;
                return false;
            }
    
            if (i == -1 && p[j] != ''*'') {
                cache[key] = false;
                return false;
            }
    
            if (p[j] == ''*'') {
                if (backtrack(cache, s, p, i, j - 2)) {
                    cache[key] = true;
                    return true;
                }
    
                if (p[j - 1] == s[i] || p[j - 1] == ''.'') {
                    if (backtrack(cache, s, p, i - 1, j)) {
                        cache[key] = true;
                        return true;
                    }
                }
            }
    
            if (p[j] == ''.'' || s[i] == p[j]) {
                if (backtrack(cache, s, p, i - 1, j - 1)) {
                    cache[key] = true;
                    return true;
                }
            }
    
            cache[key] = false;
            return false;
        }
    };','#include <iostream>
    #include <string>
    #include <unordered_map>
    
    using namespace std;
    
    {{ANSWER}}
    
    int main() {
        Solution solution;
        string s, p;
        getline(cin, s);
        getline(cin, p);
        string result = solution.isMatch(s, p) == true ? "TRUE" : "FALSE";
        cout << result << endl;
        return 0;
    }'),
          (9,1,'class Solution:
        def maxArea(self, height: List[int]) -> int:
            ','class Solution:
        def maxArea(self, height: List[int]) -> int:
            left = 0
            right = len(height) - 1
            maxArea = 0
    
            while left < right:
                currentArea = min(height[left], height[right]) * (right - left)
                maxArea = max(maxArea, currentArea)
    
                if height[left] < height[right]:
                    left += 1
                else:
                    right -= 1
    
            return maxArea','from typing import List
    
    {{ANSWER}}
    
    if __name__ == "__main__":
        solution = Solution()
        # n = input()
        height = list(map(int, input().split()))
        print(solution.maxArea(height))'),
          (9,2,'class Solution {
    public:
        int maxArea(vector<int>& height) {
            
        }
    };','class Solution {
    public:
        int maxArea(vector<int>& height) {
            int left = 0;
            int right = height.size() - 1;
            int maxArea = 0;
    
            while (left < right) {
                int currentArea = min(height[left], height[right]) * (right - left);
                maxArea = max(maxArea, currentArea);
    
                if (height[left] < height[right]) {
                    left++;
                } else {
                    right--;
                }
            }
    
            return maxArea;
        }
    };','#include <iostream>
    #include <vector>
    #include <algorithm>
    
    using namespace std;
    
    {{ANSWER}}
    
    int main() {
        Solution solution;
        vector<int> height;
        int num;
        while (cin >> num) {
            height.push_back(num);
        }
        cout << solution.maxArea(height) << endl;
        return 0;
    }'),
          (10,1,'class Solution:
        def intToRoman(self, num: int) -> str:
            ','class Solution:
        def intToRoman(self, num: int) -> str:
            num_map = {
                1: "I",
                5: "V",    4: "IV",
                10: "X",   9: "IX",
                50: "L",   40: "XL",
                100: "C",  90: "XC",
                500: "D",  400: "CD",
                1000: "M", 900: "CM",
            }
            
            r = ''''
            
            for n in [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]:
                while n <= num:
                    r += num_map[n]
                    num-=n
            return r','{{ANSWER}}
    
    if __name__ == "__main__":
        solution = Solution()
        num = int(input())
        print(solution.intToRoman(num))'),
          (10,2,'class Solution {
    public:
        string intToRoman(int num) {
            
        }
    };','class Solution {
    public:
        string intToRoman(int num) {
            unordered_map<int, string> numMap = {
                {1, "I"},
                {4, "IV"}, {5, "V"},
                {9, "IX"}, {10, "X"},
                {40, "XL"}, {50, "L"},
                {90, "XC"}, {100, "C"},
                {400, "CD"}, {500, "D"},
                {900, "CM"}, {1000, "M"}
            };
    
            string result = "";
    
            for (int n : {1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1}) {
                while (n <= num) {
                    result += numMap[n];
                    num -= n;
                }
            }
    
            return result;
        }
    };
    ','#include <iostream>
    #include <string>
    #include <unordered_map>
    
    using namespace std;
    
    {{ANSWER}}
    
    int main() {
        Solution solution;
        int num;
        cin >> num;
        cout << solution.intToRoman(num) << endl;
        return 0;
    }');    
          `);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

const insertLevels = async () => {
    try {
        await pool.query(`
          INSERT INTO public.levels ("name") VALUES
	 ('Easy'),
	 ('Medium'),
	 ('Hard');
            `);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

const insertProblems = async () => {
    try {
        await pool.query(`
          INSERT INTO public.problems (title,level_id,description,instruction,likes,dislikes,categories,is_public) VALUES
          ('Longest Substring Without Repeating Characters',2,'Can you solve this real interview question? Longest Substring Without Repeating Characters - Given a string s, find the length of the longest substring without repeating characters.
       
        
       
       Example 1:
       
       
       Input: s = "abcabcbb"
       Output: 3
       Explanation: The answer is "abc", with the length of 3.
       
       
       Example 2:
       
       
       Input: s = "bbbbb"
       Output: 1
       Explanation: The answer is "b", with the length of 1.
       
       
       Example 3:
       
       
       Input: s = "pwwkew"
       Output: 3
       Explanation: The answer is "wke", with the length of 3.
       Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
       
       
        
       
       Constraints:
       
       * 0 <= s.length <= 5 * 104
       * s consists of English letters, digits, symbols and spaces.','',37676,1704,'{String,"Hash Table","Sliding Window"}',false),
          ('Two Sum',1,'Can you solve this real interview question? Two Sum - Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
       
       You may assume that each input would have exactly one solution, and you may not use the same element twice.
       
       You can return the answer in any order.
       
        
       
       Example 1:
       
       
       Input: nums = [2,7,11,15], target = 9
       Output: [0,1]
       Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
       
       
       Example 2:
       
       
       Input: nums = [3,2,4], target = 6
       Output: [1,2]
       
       
       Example 3:
       
       
       Input: nums = [3,3], target = 6
       Output: [0,1]
       
       
        
       
       Constraints:
       
       * 2 <= nums.length <= 104
       * -109 <= nums[i] <= 109
       * -109 <= target <= 109
       * Only one valid answer exists.
       
        
       
       Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?','',52736,1729,'{Array,"Hash Table"}',false),
          ('Longest Palindromic Substring',2,'Can you solve this real interview question? Longest Palindromic Substring - Given a string s, return the longest palindromic substring in s.
       
        
       
       Example 1:
       
       
       Input: s = "babad"
       Output: "bab"
       Explanation: "aba" is also a valid answer.
       
       
       Example 2:
       
       
       Input: s = "cbbd"
       Output: "bb"
       
       
        
       
       Constraints:
       
       * 1 <= s.length <= 1000
       * s consist of only digits and English letters.','',27904,1650,'{String,"Dynamic Programming"}',true),
          ('Zigzag Conversion',2,'Can you solve this real interview question? Zigzag Conversion - The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
       
       
       P A H N
       A P L S I I G
       Y I R
       
       
       And then read line by line: "PAHNAPLSIIGYIR"
       
       Write the code that will take a string and make this conversion given a number of rows:
       
       
       string convert(string s, int numRows);
       
       
        
       
       Example 1:
       
       
       Input: s = "PAYPALISHIRING", numRows = 3
       Output: "PAHNAPLSIIGYIR"
       
       
       Example 2:
       
       
       Input: s = "PAYPALISHIRING", numRows = 4
       Output: "PINALSIGYAHRPI"
       Explanation:
       P I N
       A L S I G
       Y A H R
       P I
       
       
       Example 3:
       
       
       Input: s = "A", numRows = 1
       Output: "A"
       
       
        
       
       Constraints:
       
       * 1 <= s.length <= 1000
       * s consists of English letters (lower-case and upper-case), '','' and ''.''.
       * 1 <= numRows <= 1000','',6898,13571,'{String}',true),
          ('Reverse Integer',2,'Can you solve this real interview question? Reverse Integer - Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
       
       Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
       
        
       
       Example 1:
       
       
       Input: x = 123
       Output: 321
       
       
       Example 2:
       
       
       Input: x = -123
       Output: -321
       
       
       Example 3:
       
       
       Input: x = 120
       Output: 21
       
       
        
       
       Constraints:
       
       * -231 <= x <= 231 - 1','',12045,13074,'{Math}',true),
          ('String to Integer (atoi)',2,'Can you solve this real interview question? String to Integer (atoi) - Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++''s atoi function).
       
       The algorithm for myAtoi(string s) is as follows:
       
       1. Read in and ignore any leading whitespace.
       2. Check if the next character (if not already at the end of the string) is ''-'' or ''+''. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
       3. Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
       4. Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
       5. If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
       6. Return the integer as the final result.
       
       Note:
       
       * Only the space character '' '' is considered a whitespace character.
       * Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.
       
        
       
       Example 1:
       
       
       Input: s = "42"
       Output: 42
       Explanation: The underlined characters are what is read in, the caret is the current reader position.
       Step 1: "42" (no characters read because there is no leading whitespace)
       ^
       Step 2: "42" (no characters read because there is neither a ''-'' nor ''+'')
       ^
       Step 3: "42" ("42" is read in)
       ^
       The parsed integer is 42.
       Since 42 is in the range [-231, 231 - 1], the final result is 42.
       
       
       Example 2:
       
       
       Input: s = " -42"
       Output: -42
       Explanation:
       Step 1: " -42" (leading whitespace is read and ignored)
       ^
       Step 2: " -42" (''-'' is read, so the result should be negative)
       ^
       Step 3: " -42" ("42" is read in)
       ^
       The parsed integer is -42.
       Since -42 is in the range [-231, 231 - 1], the final result is -42.
       
       
       Example 3:
       
       
       Input: s = "4193 with words"
       Output: 4193
       Explanation:
       Step 1: "4193 with words" (no characters read because there is no leading whitespace)
       ^
       Step 2: "4193 with words" (no characters read because there is neither a ''-'' nor ''+'')
       ^
       Step 3: "4193 with words" ("4193" is read in; reading stops because the next character is a non-digit)
       ^
       The parsed integer is 4193.
       Since 4193 is in the range [-231, 231 - 1], the final result is 4193.
       
       
        
       
       Constraints:
       
       * 0 <= s.length <= 200
       * s consists of English letters (lower-case and upper-case), digits (0-9), '' '', ''+'', ''-'', and ''.''.','',3952,12263,'{String}',true),
          ('Palindrome Number',1,'Can you solve this real interview question? Palindrome Number - Given an integer x, return true if x is a palindrome, and false otherwise.
       
        
       
       Example 1:
       
       
       Input: x = 121
       Output: true
       Explanation: 121 reads as 121 from left to right and from right to left.
       
       
       Example 2:
       
       
       Input: x = -121
       Output: false
       Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
       
       
       Example 3:
       
       
       Input: x = 10
       Output: false
       Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
       
       
        
       
       Constraints:
       
       * -231 <= x <= 231 - 1
       
        
       
       Follow up: Could you solve it without converting the integer to a string?','',11404,2619,'{Math}',true),
          ('Regular Expression Matching',3,'Can you solve this real interview question? Regular Expression Matching - Given an input string s and a pattern p, implement regular expression matching with support for ''.'' and ''*'' where:
       
       * ''.'' Matches any single character.
       * ''*'' Matches zero or more of the preceding element.
       
       The matching should cover the entire input string (not partial).
       
        
       
       Example 1:
       
       
       Input: s = "aa", p = "a"
       Output: false
       Explanation: "a" does not match the entire string "aa".
       
       
       Example 2:
       
       
       Input: s = "aa", p = "a*"
       Output: true
       Explanation: ''*'' means zero or more of the preceding element, ''a''. Therefore, by repeating ''a'' once, it becomes "aa".
       
       
       Example 3:
       
       
       Input: s = "ab", p = ".*"
       Output: true
       Explanation: ".*" means "zero or more (*) of any character (.)".
       
       
        
       
       Constraints:
       
       * 1 <= s.length <= 20
       * 1 <= p.length <= 20
       * s contains only lowercase English letters.
       * p contains only lowercase English letters, ''.'', and ''*''.
       * It is guaranteed for each appearance of the character ''*'', there will be a previous valid character to match.','',11517,1941,'{String,"Dynamic Programming",Recursion}',true),
          ('Container With Most Water',2,'Can you solve this real interview question? Container With Most Water - You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
       
       Find two lines that together with the x-axis form a container, such that the container contains the most water.
       
       Return the maximum amount of water a container can store.
       
       Notice that you may not slant the container.
       
        
       
       Example 1:
       
       [https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg]
       
       
       Input: height = [1,8,6,2,5,4,8,3,7]
       Output: 49
       Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
       
       
       Example 2:
       
       
       Input: height = [1,1]
       Output: 1
       
       
        
       
       Constraints:
       
       * n == height.length
       * 2 <= n <= 105
       * 0 <= height[i] <= 104','',27132,1493,'{Array,"Two Pointers",Greedy}',true),
          ('Integer to Roman',2,'Can you solve this real interview question? Integer to Roman - Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
       
       
       Symbol Value
       I 1
       V 5
       X 10
       L 50
       C 100
       D 500
       M 1000
       
       For example, 2 is written as II in Roman numeral, just two one''s added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.
       
       Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
       
       * I can be placed before V (5) and X (10) to make 4 and 9. 
       * X can be placed before L (50) and C (100) to make 40 and 90. 
       * C can be placed before D (500) and M (1000) to make 400 and 900.
       
       Given an integer, convert it to a roman numeral.
       
        
       
       Example 1:
       
       
       Input: num = 3
       Output: "III"
       Explanation: 3 is represented as 3 ones.
       
       
       Example 2:
       
       
       Input: num = 58
       Output: "LVIII"
       Explanation: L = 50, V = 5, III = 3.
       
       
       Example 3:
       
       
       Input: num = 1994
       Output: "MCMXCIV"
       Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
       
       
        
       
       Constraints:
       
       * 1 <= num <= 3999','',6476,5353,'{"Hash Table",Math,String}',true);
    
          `);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

const insertSemesters = async () => {
    try {
        await pool.query(`
          INSERT INTO public.semesters ("name",start_date,end_date) VALUES
	 ('231','2023-08-28 00:00:00',NULL),
	 ('232','2024-02-19 00:00:00',NULL),
	 ('233','2024-06-10 00:00:00',NULL);
          `);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

const insertSubjects = async () => {
    try {
        await pool.query(`
          INSERT INTO public.subjects ("name",short_name) VALUES
	 ('Programming Fundamentals','PF'),
	 ('Data Structures and Algorithms','DSA'),
	 ('Principles of Programming Languages','PPL');
          `);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

const insertClasses = async () => {
    try {
        await pool.query(`
          INSERT INTO public.classes (subject_id,semester_id,"name") VALUES
          (1,1,'L01'),
          (1,1,'L02'),
          (1,1,'L03'),
          (1,2,'L01'),
          (1,2,'L02'),
          (1,2,'L03'),
          (2,1,'L01'),
          (2,1,'L02'),
          (2,1,'L03'),
          (2,2,'L01');
    INSERT INTO public.classes (subject_id,semester_id,"name") VALUES
          (2,2,'L02'),
          (2,2,'L03'),
          (3,1,'L01'),
          (3,1,'L02'),
          (3,1,'L03'),
          (3,2,'L01'),
          (3,2,'L02'),
          (3,2,'L03');    
          `);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

const insertClassTopics = async () => {
    try {
        await pool.query(`
    INSERT INTO class_topics (class_id, topic_name, idx) VALUES
    (2, 'W1: Introduction to Programming languages and Compilers', 0),
    (2, 'W2: Lexer', 1),
    (2, 'W3: Syntax Analysis', 3),
    (1, 'W2: Lexer', 0),
    (3, 'W1: Introduction to Programming languages and Compilers', 0),
    (2, 'W4: OOP - Scala', 2);
    `);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

const insertTopicProblems = async () => {
    try {
        await pool.query(`
    INSERT INTO topic_problems (problem_id, class_topics_id, time_limit,start_time,end_time,retries) VALUES
    (1, 1, 15.0, '2024-01-01 14:00:00', '2024-01-01 16:00:00', 3),
    (2, 1, 15.0, '2024-01-01 14:00:00', '2024-01-01 16:00:00', 3),
    (1, 2, 15.0, '2024-01-01 14:00:00', '2024-01-01 16:00:00', 3),
    (2, 2, 15.0, '2024-01-01 14:00:00', '2024-01-01 16:00:00', 3),
    (1, 3, 15.0, '2024-01-01 14:00:00', '2024-01-01 16:00:00', 3),
    (2, 3, 15.0, '2024-01-01 14:00:00', '2024-01-01 16:00:00', 3);
        `);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

const insertProblemClasses2 = async () => {
    try {
        await pool.query(`
          INSERT INTO public.topic_problems (problem_id,class_id,time_limit,start_time,end_time,retries) VALUES
          (1,1,15.0,'2024-01-01 14:00:00','2024-01-01 16:00:00',3),
          (2,1,15.0,'2024-01-01 14:00:00','2024-01-01 16:00:00',3),
          (1,2,15.0,'2024-01-01 14:00:00','2024-01-01 16:00:00',3),
          (2,2,15.0,'2024-01-01 14:00:00','2024-01-01 16:00:00',3),
          (1,3,15.0,'2024-01-01 14:00:00','2024-01-01 16:00:00',3),
          (2,3,15.0,'2024-01-01 14:00:00','2024-01-01 16:00:00',3),
          (1,4,15.0,'2024-01-01 14:00:00','2024-01-01 16:00:00',3),
          (2,4,15.0,'2024-01-01 14:00:00','2024-01-01 16:00:00',3),
          (1,5,15.0,'2024-01-01 14:00:00','2024-01-01 16:00:00',3),
          (2,5,15.0,'2024-01-01 14:00:00','2024-01-01 16:00:00',3);
    INSERT INTO public.topic_problems (problem_id,class_id,time_limit,start_time,end_time,retries) VALUES
          (1,6,15.0,'2024-01-01 14:00:00','2024-01-01 16:00:00',3),
          (2,6,15.0,'2024-01-01 14:00:00','2024-01-01 16:00:00',3),
          (1,7,15.0,'2024-01-01 14:00:00','2024-01-01 16:00:00',3),
          (2,7,15.0,'2024-01-01 14:00:00','2024-01-01 16:00:00',3),
          (1,8,15.0,'2024-01-01 14:00:00','2024-01-01 16:00:00',3),
          (2,8,15.0,'2024-01-01 14:00:00','2024-01-01 16:00:00',3),
          (1,9,15.0,'2024-01-01 14:00:00','2024-01-01 16:00:00',3),
          (2,9,15.0,'2024-01-01 14:00:00','2024-01-01 16:00:00',3),
          (1,10,15.0,'2024-01-01 14:00:00','2024-01-01 16:00:00',3),
          (2,10,15.0,'2024-01-01 14:00:00','2024-01-01 16:00:00',3);
    INSERT INTO public.topic_problems (problem_id,class_id,time_limit,start_time,end_time,retries) VALUES
          (1,11,15.0,'2024-01-01 14:00:00','2024-01-01 16:00:00',3),
          (2,11,15.0,'2024-01-01 14:00:00','2024-01-01 16:00:00',3),
          (1,12,15.0,'2024-01-01 14:00:00','2024-01-01 16:00:00',3),
          (2,12,15.0,'2024-01-01 14:00:00','2024-01-01 16:00:00',3),
          (1,13,15.0,'2024-01-01 14:00:00','2024-01-01 16:00:00',3),
          (2,13,15.0,'2024-01-01 14:00:00','2024-01-01 16:00:00',3),
          (1,14,15.0,'2024-01-01 14:00:00','2024-01-01 16:00:00',3),
          (2,14,15.0,'2024-01-01 14:00:00','2024-01-01 16:00:00',3),
          (1,15,15.0,'2024-01-01 14:00:00','2024-01-01 16:00:00',3),
          (2,15,15.0,'2024-01-01 14:00:00','2024-01-01 16:00:00',3);
    INSERT INTO public.topic_problems (problem_id,class_id,time_limit,start_time,end_time,retries) VALUES
          (1,16,15.0,'2024-01-01 14:00:00','2024-01-01 16:00:00',3),
          (2,16,15.0,'2024-01-01 14:00:00','2024-01-01 16:00:00',3),
          (1,17,15.0,'2024-01-01 14:00:00','2024-01-01 16:00:00',3),
          (2,17,15.0,'2024-01-01 14:00:00','2024-01-01 16:00:00',3),
          (1,18,15.0,'2024-01-01 14:00:00','2024-01-01 16:00:00',3),
          (2,18,15.0,'2024-01-01 14:00:00','2024-01-01 16:00:00',3);              
          `);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

const insertStudentClasses = async () => {
    try {
        await pool.query(`
          INSERT INTO public.student_classes (student_id,class_id) VALUES
          (7,2),
          (7,8),
          (7,14),
          (8,3),
          (8,9),
          (8,15),
          (9,4),
          (9,10),
          (9,16),
          (10,5);
    INSERT INTO public.student_classes (student_id,class_id) VALUES
          (10,11),
          (10,17),
          (11,6),
          (11,12),
          (11,18),
          (12,1),
          (12,7),
          (12,13),
          (13,2),
          (13,8);
    INSERT INTO public.student_classes (student_id,class_id) VALUES
          (13,14),
          (14,3),
          (14,9),
          (14,15),
          (15,4),
          (15,10),
          (15,16),
          (16,5),
          (16,11),
          (16,17);
    INSERT INTO public.student_classes (student_id,class_id) VALUES
          (17,6),
          (17,12),
          (17,18),
          (18,1),
          (18,7),
          (18,13),
          (19,2),
          (19,8),
          (19,14),
          (20,3);
    INSERT INTO public.student_classes (student_id,class_id) VALUES
          (20,9),
          (20,15),
          (21,4),
          (21,10),
          (21,16),
          (22,5),
          (22,11),
          (22,17),
          (23,6),
          (23,12);
    INSERT INTO public.student_classes (student_id,class_id) VALUES
          (23,18),
          (24,1),
          (24,7),
          (24,13),
          (25,2),
          (25,8),
          (25,14),
          (26,3),
          (26,9),
          (26,15);
    INSERT INTO public.student_classes (student_id,class_id) VALUES
          (27,4),
          (27,10),
          (27,16),
          (28,5),
          (28,11),
          (28,17),
          (29,6),
          (29,12),
          (29,18),
          (30,1);
    INSERT INTO public.student_classes (student_id,class_id) VALUES
          (30,7),
          (30,13),
          (31,2),
          (31,8),
          (31,14),
          (32,3),
          (32,9),
          (32,15),
          (33,4),
          (33,10);
    INSERT INTO public.student_classes (student_id,class_id) VALUES
          (33,16),
          (34,5),
          (34,11),
          (34,17),
          (35,6),
          (35,12),
          (35,18),
          (36,1),
          (36,7),
          (36,13);
    INSERT INTO public.student_classes (student_id,class_id) VALUES
          (37,2),
          (37,8),
          (37,14),
          (38,3),
          (38,9),
          (38,15),
          (39,4),
          (39,10),
          (39,16),
          (40,5);
    INSERT INTO public.student_classes (student_id,class_id) VALUES
          (40,11),
          (40,17),
          (41,6),
          (41,12),
          (41,18),
          (42,1),
          (42,7),
          (42,13),
          (43,2),
          (43,8);
    INSERT INTO public.student_classes (student_id,class_id) VALUES
          (43,14),
          (44,3),
          (44,9),
          (44,15),
          (45,4),
          (45,10),
          (45,16),
          (46,5),
          (46,11),
          (46,17);
    INSERT INTO public.student_classes (student_id,class_id) VALUES
          (47,6),
          (47,12),
          (47,18),
          (48,1),
          (48,7),
          (48,13),
          (49,2),
          (49,8),
          (49,14),
          (50,3);
    INSERT INTO public.student_classes (student_id,class_id) VALUES
          (50,9),
          (50,15),
          (51,4),
          (51,10),
          (51,16),
          (52,5),
          (52,11),
          (52,17),
          (53,6),
          (53,12);
    INSERT INTO public.student_classes (student_id,class_id) VALUES
          (53,18),
          (54,1),
          (54,7),
          (54,13),
          (55,2),
          (55,8),
          (55,14),
          (56,3),
          (56,9),
          (56,15);
    INSERT INTO public.student_classes (student_id,class_id) VALUES
          (57,4),
          (57,10),
          (57,16),
          (58,5),
          (58,11),
          (58,17),
          (59,6),
          (59,12),
          (59,18),
          (60,1);
    INSERT INTO public.student_classes (student_id,class_id) VALUES
          (60,7),
          (60,13),
          (61,2),
          (61,8),
          (61,14),
          (62,3),
          (62,9),
          (62,15),
          (63,4),
          (63,10);
    INSERT INTO public.student_classes (student_id,class_id) VALUES
          (63,16),
          (64,5),
          (64,11),
          (64,17),
          (65,6),
          (65,12),
          (65,18),
          (66,1),
          (66,7),
          (66,13);
    
          `);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

const insertTeacherClasses = async () => {
    try {
        await pool.query(`
          INSERT INTO public.teacher_classes (teacher_id,class_id) VALUES
	 (4,1),
	 (4,2),
	 (4,3),
	 (4,4),
	 (4,5),
	 (4,6),
	 (4,7),
	 (4,8),
	 (4,9),
	 (4,10);
INSERT INTO public.teacher_classes (teacher_id,class_id) VALUES
	 (4,11),
	 (4,12),
	 (5,13),
	 (5,14),
	 (5,15),
	 (5,16),
	 (5,17),
	 (5,18);

          `);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

(async () => {
    try {
        console.log('Waiting...');
        console.log('If program does not show anything, program run sucessfully');

        await insertUsers();
        await insertStudents();
        await insertLanguages();
        await insertLevels();
        await insertProblems();
        await insertSemesters();
        await insertSubjects();
        await insertTestCases();
        await insertClasses();

        await insertProblemLanguages();
        await insertClassTopics();
        await insertTopicProblems();
        // await insertProblemClasses();
        await insertStudentClasses();
        await insertTeacherClasses();
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
})();
