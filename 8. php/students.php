<?php
$students = [
    ["name"=>"Aisha", "marks"=>85],
    ["name"=>"Rahul", "marks"=>72],
    ["name"=>"Meena", "marks"=>90],
    ["name"=>"Arun",  "marks"=>60]
];

// Selection Sort
for ($i = 0; $i < count($students) - 1; $i++) {
    $min = $i;
    for ($j = $i + 1; $j < count($students); $j++) {
        if ($students[$j]['marks'] < $students[$min]['marks'])
            $min = $j;
    }
    // Swap
    $temp = $students[$i];
    $students[$i] = $students[$min];
    $students[$min] = $temp;
}

// Display result
echo "<h3>Sorted Students (by Marks)</h3>";
foreach ($students as $s) {
    echo "{$s['name']} - {$s['marks']}<br>";
}
?>
