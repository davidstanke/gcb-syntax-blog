#! /bin/bash

# curl "https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint16" -o random.json

# if [ $(( $(curl -s "https://xrand.org/ints?count=1&start=1&end=11&radix=10") % 2 )) == 0 ]; then echo "even"; else echo "odd"; fi

#PET=$(curl -s "https://gcb-sandbox.firebaseapp.com/pet_flaky" --max-time 10); 

PET="$(curl -s https://gcb-sandbox.firebaseapp.com/pet_flaky --max-time 10)";
while [ "$PET" == "ERROR" ] ; do 
    echo "Error: no pet! Try again...";
    PET="$(curl -s https://gcb-sandbox.firebaseapp.com/pet_flaky --max-time 10)"; 
done;
echo "Success! ${PET}";