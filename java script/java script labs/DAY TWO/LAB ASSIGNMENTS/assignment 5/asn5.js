
var studentsGrades = [
    [1,2,3],[4,5,6]
];

var totalGrades = 0;
// for(var i = 0 ; i < studentsGrades.length ; i++){
//     for(var j = 0 ; j <studentsGrades[i].length ; j++){
//         console.log(studentsGrades[i][j]);
//     }
// }

document.write(`
    <table border = "1" align="center" cellPadding="5">
    <tr>
    <th>ST1</th>
    <th>ST2</th>
    <th>ST3</th>
    <th>TOTAL</th>
    </tr>
`);

for(var i = 0 ; i < studentsGrades.length ; i++){
    document.write(`<tr>`)
    for(var j = 0 ; j <studentsGrades[i].length ; j++){
        document.write(`
        <td align="center">${studentsGrades[i][j]}</td>
        `);
        totalGrades += studentsGrades[i][j];
    }
    document.write(`<td align="center">${totalGrades}</td>`);
    document.write(`</tr>`)
    totalGrades = 0;
}

document.write(`</table>`)

