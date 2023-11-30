for i in range(1, 31):
    level = i % 3 + 1
    print("insert into public.problems (level_id, title, description, solution, likes, dislikes) values (" + str(level) + ", 'Problem " + str(i) + "', 'Description " + str(i) + "', 'Solution " + str(i) + "', 10, 10);")

