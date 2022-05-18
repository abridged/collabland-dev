# DynamoDB

1. Just learned the difference between “scan” and “query” when searching for items in the GUI.
    1. Query is almost instant because it looks up on the pk and sk.  I was confused why my 2 filters were pk and sk and it was still super slow.  I assume it’s because “scan” looks at every db record.