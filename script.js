var lead_num_records = 0;
var total_num_records = 0;
var fastest_record = 999999;
var top_10 = [];
var rank_player_name = [];
for (i=0;i<10;i++) {
    rank_player_name.push(0);
}

function addTime(){
    //add_btn = document.getElementById("addTime");
    fastest = document.getElementById("fastest");
    top_ten = document.getElementById("top10");
    player_name = document.getElementById("player").value;
    record = document.getElementById("newRec1");
    leaderboard = document.getElementById("leaderboard");
    all_records = document.getElementById("allRec")
    total_records = document.getElementById("total_num_records");

    
    new_record = ""

    m = document.getElementById("m");
    m = m.value;
    s = document.getElementById("s");
    s = s.value;
    ms = document.getElementById("ms");
    ms = ms.value;
    if (m < 10) {
        m = "0" + m
    }
    if (s < 10) {
        s = "0" + s
    }
    if (ms < 10) {
        ms = "0" + ms
    }
    time = m+s+ms;
    rec_id = player_name + time;

    r1 = document.getElementById("r1");
    r2 = document.getElementById("r2");
    r3 = document.getElementById("r3");
    r4 = document.getElementById("r4");
    r5 = document.getElementById("r5");
    r6 = document.getElementById("r6");
    r7 = document.getElementById("r7");
    r8 = document.getElementById("r8");
    r9 = document.getElementById("r9");
    r10 = document.getElementById("r10");

    
    //leaderboard.innerHTML += `<tr><td>${player_name}</td><td>${new_record}</td></tr>`


    if (time != '000000') {

        //record.innerHTML = time;
        top_10.push(time);
        top_10.sort();
        total_num_records += 1;
        if (time < fastest_record) {
            fastest_record = time;
            fastest.innerText = fastest_record;
        }
        if (total_num_records > 10) {
            top_10.pop();
        }
        record.innerText = `${m}:${s}:${ms}`;
        new_record = record.innerHTML;
        all_records.innerHTML += `<tr id='${rec_id}'><td>${player_name}</td><td>${new_record}</td><td><button onclick='deleteRow(this)'>Delete</button></td></tr>`;

        total_records.innerText = `Total number of records: ${total_num_records}`;
        //let index = top_10.indexOf(time);

        //class_color[top_10.indexOf(time)] = color;

        //document.getElementById("log").innerText = player_name + " ---- Ranking: " + index;
        r1.innerHTML = `<td>${top_10.indexOf(top_10[0])+1}</td><td>${top_10[0].slice(0,2)+':'+top_10[0].slice(2,4)+':'+top_10[0].slice(4,6)}</td>`;
        r2.innerHTML = `<td>${top_10.indexOf(top_10[1])+1}</td><td>${top_10[1].slice(0,2)+':'+top_10[1].slice(2,4)+':'+top_10[1].slice(4,6)}</td>`;
        r3.innerHTML = `<td>${top_10.indexOf(top_10[2])+1}</td><td>${top_10[2].slice(0,2)+':'+top_10[2].slice(2,4)+':'+top_10[2].slice(4,6)}</td>`;
        r4.innerHTML = `<td>${top_10.indexOf(top_10[3])+1}</td><td>${top_10[3].slice(0,2)+':'+top_10[3].slice(2,4)+':'+top_10[3].slice(4,6)}</td>`;
        r5.innerHTML = `<td>${top_10.indexOf(top_10[4])+1}</td><td>${top_10[4].slice(0,2)+':'+top_10[4].slice(2,4)+':'+top_10[4].slice(4,6)}</td>`;
        r6.innerHTML = `<td>${top_10.indexOf(top_10[5])+1}</td><td>${top_10[5].slice(0,2)+':'+top_10[5].slice(2,4)+':'+top_10[5].slice(4,6)}</td>`;
        r7.innerHTML = `<td>${top_10.indexOf(top_10[6])+1}</td><td>${top_10[6].slice(0,2)+':'+top_10[6].slice(2,4)+':'+top_10[6].slice(4,6)}</td>`;
        r8.innerHTML = `<td>${top_10.indexOf(top_10[7])+1}</td><td>${top_10[7].slice(0,2)+':'+top_10[7].slice(2,4)+':'+top_10[7].slice(4,6)}</td>`;
        r9.innerHTML = `<td>${top_10.indexOf(top_10[8])+1}</td><td>${top_10[8].slice(0,2)+':'+top_10[8].slice(2,4)+':'+top_10[8].slice(4,6)}</td>`;
        r10.innerHTML = `<td>${top_10.indexOf(top_10[9])+1}</td><td>${top_10[9].slice(0,2)+':'+top_10[9].slice(2,4)+':'+top_10[9].slice(4,6)}</td>`;
        //top_ten.innerHTML = `${top_10}`;
    }






}

function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    record = document.getElementById("allRec").innerText;
    document.getElementById("allRec").deleteRow(i);

    test = document.getElementById("test");   
    test.innerText = `${record}`;

}

function switchTeam(){
    switch_btn = document.getElementById("switchTeam");
    add_div = document.getElementById("add_div");

    add = document.getElementById("add");
    if (add.getAttribute("onclick") == "addTime('red')") {
        add.setAttribute("onclick", "addTime('blue')");
        add_div.classList.add("blue");
        add_div.classList.remove("red");
    } else if (add.getAttribute("onclick") == "addTime('blue')") {
        add.setAttribute("onclick", "addTime('red')");
        add_div.classList.add("red");
        add_div.classList.remove("blue");
    }

}


