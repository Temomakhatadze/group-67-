#!/bin/bash

#bash LevelMaker.sh
max=0

for dir in Day\ *; do
    if [ -d "$dir" ]; then
        number="${dir#Day }"

        if [[ "$number" =~ ^[0-9]+$ ]]; then
            if [ "$number" -gt "$max" ]; then
                max="$number"
            fi
        fi
    fi
done

next=$((max + 1))
new_folder="Day $next"

mkdir -p "$new_folder/Homework"
mkdir -p "$new_folder/Classwork"

echo "Created: $new_folder"
echo "Created: $new_folder/Homework"
echo "Created: $new_folder/Classwork"