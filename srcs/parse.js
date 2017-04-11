function initparse(file, callback) {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "http://bbelda.me/maps/" + file + ".fdf");
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status == 200) {
            if (xhr.status == 200) {
                parse(xhr.responseText, callback);
            } else {
                alert('Error xhr');
            }
        }
    };
};

function parse(strmap, callback) {
    let map = [];
    let rows = strmap.split('\n');
    rows.splice(rows.length - 1, 1);
    rows.forEach(function(row, y) {
        map.push([]);
        let cols = row.split(/\ +/);
        cols.forEach(function(col, x) {
            let point = col.split(',');
            map[y].push({
                x: x - cols.length / 2,
                y: y - rows.length / 2,
                z: Number(point[0]) / 5
            });
        });
    });
    document.getElementById("loading").style.visibility = 'hidden';
    callback(map);
}