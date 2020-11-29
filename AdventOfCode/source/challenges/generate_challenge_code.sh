#!/bin/bash
echo "  ==  GENERATING CODE FILES  ==  "
YEAR=${1}
DAY=${2}

SOURCE_NAME="template"
TARGET_NAME="main"
DESTO="$YEAR/$DAY/"
EXTENSIONS=(".js")

echo "  >>  Generating challenge code files..."
mkdir -p "$DESTO"
for EXT in ${EXTENSIONS[@]};
do
    cp "../lib/helpers/$SOURCE_NAME$EXT" "$DESTO$TARGET_NAME$EXT"
    sed -i -e "s/$SOURCE_NAME/$TARGET_NAME/g" "$DESTO$TARGET_NAME$EXT"
    echo "      *  $SOURCE_NAME$EXT  >>  $DESTO$TARGET_NAME$EXT"
done

echo "  >>  ...DONE!"
