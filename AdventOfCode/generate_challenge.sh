#!/bin/bash
YEAR="${1}"
DAY="${2}"

if [[ (-z $YEAR) || (-z $DAY) ]]; then
    echo "ERROR!  Invalid arguments."
    echo "        Command  ->  sh generate_challenge.sh [YEAR] [DAY]"
    echo "        Example  ->  sh generate_challenge.sh 2020 01"
    exit 1
fi

SESSION_KEY_FILE="source/lib/auth_cookie.txt"
SESSION_KEY=$(<$SESSION_KEY_FILE)

if [[ -z "$SESSION_KEY" ]]; then
    echo "ERROR!  No session key specified."
    echo "        To find a session key, inspect the input web page's cookies."
    echo "        Add the key to '$SESSION_KEY_FILE' and run this script again."
    exit 1
fi

ROOT_DIRECTORY="$(pwd)"

# cd "$ROOT_DIRECTORY/source/inputs/"
# sh "download_input.sh" $YEAR $DAY $SESSION_KEY
# echo ""

cd "$ROOT_DIRECTORY/source/challenges/"
sh "generate_challenge_code.sh" $YEAR $DAY
echo ""

# cd "../../"
# sh "generate_solution.sh"