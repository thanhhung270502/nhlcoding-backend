# Open the file in read mode
file = open('../editorial_sample.md', 'r')

# Read the contents of the file
content = file.read()

# Close the file
file.close()

# convert code to single-line string
single_line_content = content.replace('\n', '\\n').replace('\r', '\\r').replace('\'', '\\\'').replace('\"', '\\"').replace('`', '\`')

# Open the file in write mode
file = open('singleline.txt', 'w')

# Write content to the file
file.write(single_line_content)

# Close the file
file.close()
