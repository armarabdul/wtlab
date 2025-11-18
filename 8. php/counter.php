<?php
$file = "counter.txt";

// If file doesn't exist, start from 0
if (!file_exists($file)) {
    $count = 0;
} else {
    $count = (int)file_get_contents($file);
}

// Increase count
$count++;

// Save new count back
file_put_contents($file, $count);

echo "<h2>Welcome to my website!</h2>";
echo "<p>Total visitors: <b>$count</b></p>";
?>
