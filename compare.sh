echo "GRPC"
a=0
count=100
total=0
while [ $a -lt $count ] 
do 
    # Print the values 
    var=$( { time node grpc_client.js; } 2>&1 | sed 's/[^0-9]*//g')
    first=$(echo $var | cut -d' ' -f1)
    first=$(expr $first + 0)
    first_int=$((first))
    total=`expr $first_int + $total`
    # increment the value 
    a=`expr $a + 1` 
done 
echo $((total / count))

echo "EXPRESS"
a=0
total=0
while [ $a -lt $count ] 
do 
    # Print the values 
    var=$( { time node express_client.js; } 2>&1 | sed 's/[^0-9]*//g')
    first=$(echo $var | cut -d' ' -f1)
    first=$(expr $first + 0)
    first_int=$((first))
    total=`expr $first_int + $total`
    # increment the value 
    a=`expr $a + 1` 
done 
echo $((total / count))