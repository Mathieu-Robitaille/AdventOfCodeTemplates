#!/bin/bash
echo "  ==  GENERATING CODE FILES  ==  "
DAY=${1}

SOURCE_NAME="Challenge_N"
TARGET_NAME="Challenge_$DAY"
DESTO="$DAY/"
EXTENSIONS=(".js")

echo "  >>  Generating challenge code files..."
mkdir -p "$DESTO"
for EXT in ${EXTENSIONS[@]};
do
    cp "$SOURCE_NAME$EXT" "$DESTO$TARGET_NAME$EXT"
    sed -i -e "s/$SOURCE_NAME/$TARGET_NAME/g" "$DESTO$TARGET_NAME$EXT"
    echo "      *  $SOURCE_NAME$EXT  >>  $DESTO$TARGET_NAME$EXT"
done

echo "  >>  ...DONE!"
