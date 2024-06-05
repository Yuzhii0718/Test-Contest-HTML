import os
import re

dir_path = os.path.join(os.path.dirname(os.path.realpath(__file__)), 'dist')

for root, dirs, files in os.walk(dir_path):
    for file in files:
        if file.endswith('.js'):
            file_path = os.path.join(root, file)
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            content = re.sub(r'/markdown/', '/Test-Contest-HTML/markdown/', content)
            with open(file_path, 'w', encoding='utf8') as f:
                f.write(content)
            print(f'File {file_path} has been processed.')