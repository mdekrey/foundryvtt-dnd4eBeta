# Changelog

## Version 0.0.8
- Added number of status icons for varaity of cases(Work in progress) 
- Actor data path values should now be accesable to formulas when writen as "@the.path.to.data"

## Version 0.0.7
- Work on item weapons
- Added a field when brutal weapon properties is selected, can now input the brutal value for dice "re-rolling"
- Brutal Dice will now do the mathematical equivalent of infinite  re-rolling. As the current FVVT does roll modifiers only support a single re-roll per dice, a solution stop gap solution was made where the die total size is decreased by n number equal to the brutal re-roll threshold, and the value is then added back to the dicer as a bonus term.
- Fixed a typeo where the line for "MISS" instead said "HIT"

## Version 0.0.6
- Fixed issues where the value for WilL Defence was trying to check the "char" abilities score instead of "cha"