function openTab(name) {
    var i;
    var x = document.getElementsByClassName("bangun");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(name).style.display = "block";  
  }

function resetInput(){
    var elements = document.getElementsByTagName("input");
    for (var ii=0; ii < elements.length; ii++) {
        if (elements[ii].type == "text") {
            elements[ii].value = "";
        }
    }
}
function reset1(){
    document.getElementById("hasil1").style.display = "none";
    document.getElementById("alas").value="";
    document.getElementById("tinggi").value="";
}
function reset2(){
    document.getElementById("hasil2").style.display = "none";
    document.getElementById("sisi_a").value="";
    document.getElementById("sisi_b").value="";
    document.getElementById("sisi_c").value="";
}
function reset3(){
    document.getElementById("hasil3").style.display = "none";
    document.getElementById("alas_luas").value="";
    document.getElementById("tinggi_luas").value="";
}
function reset4(){
    document.getElementById("hasil4").style.display = "none";
    document.getElementById("alas_keliling").value="";
    document.getElementById("tinggi_keliling").value="";
}
function hitung_luas_segitiga(){
    var harusAngka = /^[0-9]+$/;
    var alas = document.getElementById("alas").value;
    var tinggi = document.getElementById("tinggi").value;
    if (alas == "" || tinggi=="" ) {
        alert('Input Alas atau Tinggi Ada yang Kosong');
    }else if(!alas.match(harusAngka) || !tinggi.match(harusAngka)){
        alert('Input Alas atau Tinggi Harus Angka');
    }else{
        var luas = "L = "+(alas*tinggi)*0.5;
        var rumus_luas_saja = "L = 1/2 x a x t";
        var rumus_luas_angka = "L = 1/2 x "+alas+" x "+tinggi;
        document.getElementById("luas").innerHTML=luas;
        document.getElementById("rumus_luas_saja").innerHTML=rumus_luas_saja;
        document.getElementById("rumus_luas_angka").innerHTML=rumus_luas_angka;
        document.getElementById("hasil1").style.display = "block";
    }
}

function hitung_keliling_segitiga(){
    var harusAngka = /^[0-9]+$/;
    var sisi_a = document.getElementById("sisi_a").value;
    var sisi_b = document.getElementById("sisi_b").value;
    var sisi_c = document.getElementById("sisi_c").value;
    if (sisi_a == "" || sisi_b=="" ||sisi_c=="") {
        alert('Input Sisi Ada yang Kosong');
    }else if(!sisi_a.match(harusAngka) || !sisi_b.match(harusAngka) || !sisi_c.match(harusAngka)){
        alert('Input Sisi Harus Angka');
    }else{
        var keliling = "K = "+(parseInt(sisi_a)+parseInt(sisi_b)+parseInt(sisi_c));
        var rumus_keliling_saja = "K = S1 + S2 + S3";
        var rumus_keliling_angka = "K = "+sisi_a+" + "+sisi_b+" + "+ sisi_c;
        document.getElementById("keliling").innerHTML=keliling;
        document.getElementById("rumus_keliling_saja").innerHTML=rumus_keliling_saja;
        document.getElementById("rumus_keliling_angka").innerHTML=rumus_keliling_angka;
        document.getElementById("hasil2").style.display = "block";
    }
}

function hitung_luas_jajar_genjang(){
    console.log('cek')
    var harusAngka = /^[0-9]+$/;
    var alas_luas = document.getElementById("alas_luas").value;
    var tinggi_luas = document.getElementById("tinggi_luas").value;
    if (alas_luas == "" || tinggi_luas=="" ) {
        alert('Input Alas atau Tinggi Bagian Hitung Luas Ada yang Kosong');
    }else if(!alas_luas.match(harusAngka) || !tinggi_luas.match(harusAngka)){
        alert('Input Alas atau Tinggi Bagian Hitung Luas Harus Angka');
    }else{
        var luas = "L = "+alas_luas*tinggi_luas;
        var rumus_luas_saja = "L =  a x t";
        var rumus_luas_angka = "L = "+alas_luas+" x "+tinggi_luas;
        document.getElementById("luas1").innerHTML=luas;
        document.getElementById("rumus1_luas_saja").innerHTML=rumus_luas_saja;
        document.getElementById("rumus1_luas_angka").innerHTML=rumus_luas_angka;
        document.getElementById("hasil3").style.display = "block";
    }
}

function hitung_keliling_jajar_genjang(){
    var harusAngka = /^[0-9]+$/;
    var alas_keliling = document.getElementById("alas_keliling").value;
    var tinggi_keliling = document.getElementById("tinggi_keliling").value;
    if (alas_keliling == "" || tinggi_keliling=="" ) {
        alert('Input Alas atau Tinggi Bagian Hitung Keliling Ada yang Kosong');
    }else if(!alas_keliling.match(harusAngka) || !tinggi_keliling.match(harusAngka)){
        alert('Input Alas atau Tinggi Bagian Hitung Keliling Harus Angka');
    }else{
        var keliling = "K = "+(2*(parseInt(alas_keliling)+parseInt(tinggi_keliling)));
        var rumus_keliling_saja = "K = 2 x (a + t)";
        var rumus_keliling_angka = "K = 2 x ( "+alas_keliling+" + "+tinggi_keliling+" )";
        document.getElementById("keliling1").innerHTML=keliling;
        document.getElementById("rumus1_keliling_saja").innerHTML=rumus_keliling_saja;
        document.getElementById("rumus1_keliling_angka").innerHTML=rumus_keliling_angka;
        document.getElementById("hasil4").style.display = "block";
    }
}